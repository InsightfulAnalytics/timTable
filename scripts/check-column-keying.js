// Regression check for the column value-keying bug (TESTING REPORT blocker 2.1).
//
// The matrix `rawValues` dict is keyed in tree order across ALL column leaves,
// subtotal leaves included. `columnLeaves` holds only the non-subtotal leaves.
// Keying rawValues by a leaf's position in columnLeaves therefore reads the wrong
// column as soon as a 2-level Columns hierarchy interleaves inner subtotals.
//
// Run: node scripts/check-column-keying.js
const assert = require('assert');

// Mirror of flattenCol's leaf walk in src/visual.ts.
function walk(root, measureLevelDepth, M) {
    const leaves = [];          // non-subtotal leaves, in display order
    const subtotalKeys = [];
    let allLeafIndex = 0;       // counts EVERY leaf, subtotals included

    const rec = (node, depth, isSubBranch) => {
        const isSub = isSubBranch || !!node.isSubtotal;
        const all = node.children || [];
        const nonSub = all.filter(c => !c.isSubtotal);
        const sub = all.filter(c => c.isSubtotal);
        const nextIsMeasure = measureLevelDepth >= 0 && depth + 1 === measureLevelDepth;
        if ((nonSub.length === 0 && sub.length === 0) || nextIsMeasure) {
            if (isSub) {
                for (let m = 0; m < M; m++) subtotalKeys.push(allLeafIndex * M + m);
            } else {
                leaves.push({ label: node.value, valueIndex: allLeafIndex });
            }
            allLeafIndex++;
        } else {
            nonSub.forEach(c => rec(c, depth + 1, isSub));
            sub.forEach(c => rec(c, depth + 1, true));
        }
    };
    const rootNon = (root.children || []).filter(c => !c.isSubtotal);
    const rootSub = (root.children || []).filter(c => c.isSubtotal);
    rootNon.forEach(c => rec(c, 0, false));
    rootSub.forEach(c => rec(c, 0, true));
    return { leaves, subtotalKeys };
}

const leaf = v => ({ value: v });
const sub = () => ({ value: 'Subtotal', isSubtotal: true });

// ── Case 1: 2-level hierarchy (Year -> On-Time), the reported failure ──────────
// Tree order: 2022No(0) 2022Yes(1) 2022Sub(2) 2023No(3) 2023Yes(4) 2023Sub(5) GT(6)
const twoLevel = {
    children: [
        { value: 2022, children: [leaf('No'), leaf('Yes'), sub()] },
        { value: 2023, children: [leaf('No'), leaf('Yes'), sub()] },
        sub(),
    ],
};
{
    const M = 1;
    const { leaves } = walk(twoLevel, -1, M);
    assert.deepStrictEqual(leaves.map(l => l.valueIndex), [0, 1, 3, 4],
        'display leaves must map to tree indices skipping interleaved subtotals');

    // Facilities "2023 No" is display column 2.
    const display = 2;
    const fixed = leaves[display].valueIndex * M + 0;
    const buggy = display * M + 0;
    assert.strictEqual(fixed, 3, '2023-No must read tree slot 3');
    assert.strictEqual(buggy, 2, 'the old formula read slot 2 — the 2022 subtotal');
    assert.notStrictEqual(fixed, buggy, 'fix must actually change the key here');
}

// ── Case 2: multiple measures interleave correctly ─────────────────────────────
{
    const M = 3;
    const { leaves } = walk(twoLevel, -1, M);
    assert.deepStrictEqual(
        leaves.map(l => l.valueIndex * M + 2),
        [2, 5, 11, 14],
        'per-measure offsets must ride on the tree index, not the display index');
}

// ── Case 3: single level — subtotal is trailing, so nothing may shift ──────────
{
    const M = 2;
    const oneLevel = { children: [leaf(2022), leaf(2023), leaf(2024), sub()] };
    const { leaves } = walk(oneLevel, -1, M);
    assert.deepStrictEqual(leaves.map(l => l.valueIndex), [0, 1, 2],
        'single-level layouts must stay identity — this is why the bug hid so long');
    leaves.forEach((l, display) => {
        for (let m = 0; m < M; m++) {
            assert.strictEqual(l.valueIndex * M + m, display * M + m);
        }
    });
}

// ── Case 4: the sort-field translation (display space -> tree space) ───────────
{
    const M = 1;
    const { leaves } = walk(twoLevel, -1, M);
    const preLeafValueIndex = leaves.map(l => l.valueIndex);
    const translate = (sortIdx) => {
        if (sortIdx < 0 || preLeafValueIndex.length === 0) return sortIdx;
        const treeIdx = preLeafValueIndex[Math.floor(sortIdx / M)];
        return treeIdx === undefined ? sortIdx : treeIdx * M + (sortIdx % M);
    };
    assert.strictEqual(translate(0), 0);
    assert.strictEqual(translate(2), 3, 'sorting by display col 2 must sort on tree slot 3');
    assert.strictEqual(translate(-1), -1, 'no sort selected passes through');
    assert.strictEqual(translate(99), 99, 'out-of-range passes through rather than throwing');
}

console.log('OK  column value-keying: 4/4 checks passed');
