var timTableDD1AB490372C46B5A64605746E322F55_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFillColorByPropertyName: () => (/* binding */ getFillColorByPropertyName),
/* harmony export */   getValue: () => (/* binding */ getValue)
/* harmony export */ });
function getValue(object, propertyName, defaultValue) {
    if (!object) {
        return defaultValue;
    }
    const propertyValue = object[propertyName];
    if (propertyValue === undefined) {
        return defaultValue;
    }
    return propertyValue;
}
/** Gets the solid color from a fill property using only a propertyName */
function getFillColorByPropertyName(object, propertyName, defaultColor) {
    const value = getValue(object, propertyName);
    if (!value || !value.solid) {
        return defaultColor;
    }
    return value.solid.color;
}
//# sourceMappingURL=dataViewObject.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCommonValue: () => (/* binding */ getCommonValue),
/* harmony export */   getFillColor: () => (/* binding */ getFillColor),
/* harmony export */   getObject: () => (/* binding */ getObject),
/* harmony export */   getValue: () => (/* binding */ getValue)
/* harmony export */ });
/* harmony import */ var _dataViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataViewObject */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js");

/** Gets the value of the given object/property pair. */
function getValue(objects, propertyId, defaultValue) {
    if (!objects) {
        return defaultValue;
    }
    return _dataViewObject__WEBPACK_IMPORTED_MODULE_0__.getValue(objects[propertyId.objectName], propertyId.propertyName, defaultValue);
}
/** Gets an object from objects. */
function getObject(objects, objectName, defaultValue) {
    if (objects && objects[objectName]) {
        return objects[objectName];
    }
    return defaultValue;
}
/** Gets the solid color from a fill property. */
function getFillColor(objects, propertyId, defaultColor) {
    const value = getValue(objects, propertyId);
    if (!value || !value.solid) {
        return defaultColor;
    }
    return value.solid.color;
}
function getCommonValue(objects, propertyId, defaultValue) {
    const value = getValue(objects, propertyId, defaultValue);
    if (value && value.solid) {
        return value.solid.color;
    }
    if (value === undefined
        || value === null
        || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    return value;
}
//# sourceMappingURL=dataViewObjects.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDataViewWildcardSelector: () => (/* binding */ createDataViewWildcardSelector)
/* harmony export */ });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
function createDataViewWildcardSelector(dataViewWildcardMatchingOption) {
    if (dataViewWildcardMatchingOption == null) {
        dataViewWildcardMatchingOption = 0 /* DataViewWildcardMatchingOption.InstancesAndTotals */;
    }
    const selector = {
        data: [
            {
                dataViewWildcard: {
                    matchingOption: dataViewWildcardMatchingOption
                }
            }
        ]
    };
    return selector;
}
//# sourceMappingURL=dataViewWildcard.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentGroup: () => (/* binding */ AlignmentGroup),
/* harmony export */   AutoDropdown: () => (/* binding */ AutoDropdown),
/* harmony export */   AutoFlagsSelection: () => (/* binding */ AutoFlagsSelection),
/* harmony export */   CardGroupEntity: () => (/* binding */ CardGroupEntity),
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker),
/* harmony export */   CompositeCard: () => (/* binding */ CompositeCard),
/* harmony export */   CompositeSlice: () => (/* binding */ CompositeSlice),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   ContainerItem: () => (/* binding */ ContainerItem),
/* harmony export */   DatePicker: () => (/* binding */ DatePicker),
/* harmony export */   DurationPicker: () => (/* binding */ DurationPicker),
/* harmony export */   ErrorRangeControl: () => (/* binding */ ErrorRangeControl),
/* harmony export */   FieldPicker: () => (/* binding */ FieldPicker),
/* harmony export */   FontControl: () => (/* binding */ FontControl),
/* harmony export */   FontPicker: () => (/* binding */ FontPicker),
/* harmony export */   GradientBar: () => (/* binding */ GradientBar),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   ImageUpload: () => (/* binding */ ImageUpload),
/* harmony export */   ItemDropdown: () => (/* binding */ ItemDropdown),
/* harmony export */   ItemFlagsSelection: () => (/* binding */ ItemFlagsSelection),
/* harmony export */   ListEditor: () => (/* binding */ ListEditor),
/* harmony export */   MarginPadding: () => (/* binding */ MarginPadding),
/* harmony export */   Model: () => (/* binding */ Model),
/* harmony export */   NumUpDown: () => (/* binding */ NumUpDown),
/* harmony export */   ReadOnlyText: () => (/* binding */ ReadOnlyText),
/* harmony export */   ShapeMapSelector: () => (/* binding */ ShapeMapSelector),
/* harmony export */   SimpleCard: () => (/* binding */ SimpleCard),
/* harmony export */   SimpleSlice: () => (/* binding */ SimpleSlice),
/* harmony export */   Slider: () => (/* binding */ Slider),
/* harmony export */   TextArea: () => (/* binding */ TextArea),
/* harmony export */   TextInput: () => (/* binding */ TextInput),
/* harmony export */   ToggleSwitch: () => (/* binding */ ToggleSwitch)
/* harmony export */ });
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/FormattingSettingsUtils */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js");
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class CardGroupEntity extends NamedEntity {
}
class Model {
}
/** CompositeCard is use to populate a card into the formatting pane with multiple groups */
class CompositeCard extends NamedEntity {
}
class Group extends CardGroupEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
/** SimpleCard is use to populate a card into the formatting pane in a single group */
class SimpleCard extends CardGroupEntity {
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    // eslint-disable-next-line
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getDescriptor(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        const newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getPropertyValue(this, newValue, this.value);
    }
}
class AlignmentGroup extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends NumUpDown {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends TextInput {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
class ContainerItem extends NamedEntity {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* binding */ FormattingSettingsService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");

class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataView) {
        var _a, _b;
        const defaultSettings = new typeClass();
        const dataViewObjects = (_a = dataView === null || dataView === void 0 ? void 0 : dataView.metadata) === null || _a === void 0 ? void 0 : _a.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach((card) => {
                var _a;
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ? [card] : card.groups);
                cardGroupInstances.forEach((cardGroupInstance) => {
                    var _a, _b, _c, _d;
                    // Set current top level toggle value
                    (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                    (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                    (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach((containerItem) => {
                        var _a;
                        (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                            slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                        });
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        const formattingModel = {
            cards: []
        };
        formattingSettingsModel.cards
            .filter(({ visible = true }) => visible)
            .forEach((card) => {
            var _a;
            const formattingCard = {
                displayName: (this.localizationManager && card.displayNameKey) ? this.localizationManager.getDisplayName(card.displayNameKey) : card.displayName,
                description: (this.localizationManager && card.descriptionKey) ? this.localizationManager.getDisplayName(card.descriptionKey) : card.description,
                groups: [],
                uid: card.name + "-card",
                analyticsPane: card.analyticsPane,
            };
            const objectName = card.name;
            if (card.topLevelSlice) {
                const topLevelToggleSlice = card.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                topLevelToggleSlice.suppressDisplayName = true;
                formattingCard.topLevelToggle = topLevelToggleSlice;
            }
            (_a = card.onPreProcess) === null || _a === void 0 ? void 0 : _a.call(card);
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard;
            const cardGroupInstances = (isSimpleCard ?
                [card].filter(({ visible = true }) => visible) :
                card.groups.filter(({ visible = true }) => visible));
            cardGroupInstances
                .forEach((cardGroupInstance) => {
                const groupUid = cardGroupInstance.name + "-group";
                // Build formatting group for each group
                const formattingGroup = {
                    displayName: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.displayNameKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.displayNameKey) : cardGroupInstance.displayName,
                    description: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.descriptionKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.descriptionKey) : cardGroupInstance.description,
                    slices: [],
                    uid: groupUid,
                    collapsible: cardGroupInstance.collapsible,
                    delaySaveSlices: cardGroupInstance.delaySaveSlices,
                    disabled: cardGroupInstance.disabled,
                    disabledReason: cardGroupInstance.disabledReason,
                };
                formattingCard.groups.push(formattingGroup);
                // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
                // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
                // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
                const sliceNames = {};
                // Build formatting container slice for each property
                if (cardGroupInstance.container) {
                    const container = cardGroupInstance.container;
                    const containerUid = groupUid + "-container";
                    const formattingContainer = {
                        displayName: (this.localizationManager && container.displayNameKey)
                            ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                        description: (this.localizationManager && container.descriptionKey)
                            ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                        containerItems: [],
                        uid: containerUid
                    };
                    container.containerItems.forEach((containerItem) => {
                        // Build formatting container item object
                        const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                        const containerItemUid = containerUid + containerIemName;
                        const formattingContainerItem = {
                            displayName: (this.localizationManager && containerItem.displayNameKey)
                                ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                            slices: [],
                            uid: containerItemUid
                        };
                        // Build formatting slices and add them to current formatting container item
                        this.buildFormattingSlices({ slices: containerItem.slices, objectName, sliceNames, formattingSlices: formattingContainerItem.slices });
                        formattingContainer.containerItems.push(formattingContainerItem);
                    });
                    formattingGroup.container = formattingContainer;
                }
                if (cardGroupInstance.slices) {
                    if (cardGroupInstance.topLevelSlice) {
                        const topLevelToggleSlice = cardGroupInstance.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                        topLevelToggleSlice.suppressDisplayName = true;
                        (formattingGroup.displayName == undefined ? formattingCard : formattingGroup).topLevelToggle = topLevelToggleSlice;
                    }
                    // Build formatting slice for each property
                    this.buildFormattingSlices({ slices: cardGroupInstance.slices, objectName, sliceNames, formattingSlices: formattingGroup.slices });
                }
            });
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
            formattingModel.cards.push(formattingCard);
        });
        return formattingModel;
    }
    buildFormattingSlices({ slices, objectName, sliceNames, formattingSlices }) {
        // Filter slices based on their visibility
        slices === null || slices === void 0 ? void 0 : slices.filter(({ visible = true }) => visible).forEach((slice) => {
            const formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                formattingSlices.push(formattingSlice);
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        const revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors;
        let cardContainerSlicesDefaultDescriptors = [];
        // eslint-disable-next-line
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ?
            [card].filter(({ visible = true }) => visible) :
            card.groups.filter(({ visible = true }) => visible));
        cardGroupInstances.forEach((cardGroupInstance) => {
            var _a, _b;
            cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
            (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
                cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
            });
            revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
        });
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
        let revertToDefaultDescriptors = [];
        if (topLevelSlice) {
            sliceNames[topLevelSlice.name] = true;
            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
        }
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   formattingSettings: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingSettingsService */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDescriptor: () => (/* binding */ getDescriptor),
/* harmony export */   getPropertyValue: () => (/* binding */ getPropertyValue)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if ((slice === null || slice === void 0 ? void 0 : slice.type) === "Dropdown" /* visuals.FormattingComponent.Dropdown */ && slice.items) {
        const itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryConditionalFormattingSettings: () => (/* binding */ CategoryConditionalFormattingSettings),
/* harmony export */   ColumnHeadersSettings: () => (/* binding */ ColumnHeadersSettings),
/* harmony export */   ColumnWidthSettings: () => (/* binding */ ColumnWidthSettings),
/* harmony export */   DataBarMarkersSettings: () => (/* binding */ DataBarMarkersSettings),
/* harmony export */   DataBarsFormattingSettings: () => (/* binding */ DataBarsFormattingSettings),
/* harmony export */   GridSettings: () => (/* binding */ GridSettings),
/* harmony export */   SpecificColumnSettings: () => (/* binding */ SpecificColumnSettings),
/* harmony export */   TableSettings: () => (/* binding */ TableSettings),
/* harmony export */   TotalsSettings: () => (/* binding */ TotalsSettings),
/* harmony export */   ValueConditionalFormattingSettings: () => (/* binding */ ValueConditionalFormattingSettings),
/* harmony export */   ValuesSettings: () => (/* binding */ ValuesSettings),
/* harmony export */   VisualSettings: () => (/* binding */ VisualSettings)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! powerbi-visuals-api */ "powerbi-visuals-api");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_2__);



var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.SimpleCard;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Model;
class ValuesSettings extends FormattingSettingsCard {
    font = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontControl({
        name: "font",
        displayName: "Font",
        fontFamily: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontPicker({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Arial, sans-serif"
        }),
        fontSize: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
            name: "fontSize",
            displayName: "Font Size",
            value: 12
        }),
        bold: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "bold",
            displayName: "Bold",
            value: false
        }),
        italic: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "italic",
            displayName: "Italic",
            value: false
        }),
        underline: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "underline",
            displayName: "Underline",
            value: false
        })
    });
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text color",
        value: { value: "#333333" },
        visible: true
    });
    backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#ffffff" },
        visible: true
    });
    alternateTextColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "alternateTextColor",
        displayName: "Alternate text color",
        value: { value: "#333333" },
        visible: true
    });
    alternateBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "alternateBackgroundColor",
        displayName: "Alternate background color",
        value: { value: "#f5f5f5" },
        visible: true
    });
    textWrap = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });
    name = "values";
    displayName = "Values";
    visible = true;
    slices = [
        this.font,
        this.textColor,
        this.backgroundColor,
        this.alternateTextColor,
        this.alternateBackgroundColor,
        this.textWrap
    ];
}
class TableSettings extends FormattingSettingsCard {
    name = "table";
    displayName = "Table";
    visible = true;
    headerBold = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "headerBold",
        displayName: "Header Bold",
        value: true,
        visible: true
    });
    switchValuesToRows = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
        value: false,
        visible: true
    });
    categoryWordWrap = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "categoryWordWrap",
        displayName: "Category Word Wrap",
        value: false,
        visible: true
    });
    valueRowHeight = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "valueRowHeight",
        displayName: "Value Row Height",
        value: 30,
        visible: true
    });
    alternateValueRowHeight = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "alternateValueRowHeight",
        displayName: "Alternate Row Height",
        value: 30,
        visible: true
    });
    totalRowHeight = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "totalRowHeight",
        displayName: "Total Row Height",
        value: 35,
        visible: true
    });
    slices = [this.switchValuesToRows, this.categoryWordWrap, this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight];
}
class ValueConditionalFormattingSettings extends FormattingSettingsCard {
    name = "valueConditionalFormatting";
    displayName = "Value conditional formatting";
    visible = true;
    slices = [];
}
class CategoryConditionalFormattingSettings extends FormattingSettingsCard {
    name = "categoryConditionalFormatting";
    displayName = "Category conditional formatting";
    visible = true;
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text Color",
        value: { value: "#333333" },
        visible: true,
        selector: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_1__.createDataViewWildcardSelector(0 /* dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals */),
        instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
    });
    slices = [this.textColor];
}
class DataBarsFormattingSettings extends FormattingSettingsCard {
    name = "dataBarsFormatting";
    displayName = "Data Bars";
    visible = true;
    slices = [];
}
class DataBarMarkersSettings extends FormattingSettingsCard {
    name = "dataBarMarkers";
    displayName = "Data Bar Markers";
    visible = true;
    slices = [];
}
class TotalsSettings extends FormattingSettingsCard {
    name = "totals";
    displayName = "Totals";
    visible = true;
    showTotalRow = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showTotalRow",
        displayName: "Show Total Row",
        value: true,
        visible: true
    });
    totalBehavior = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "totalBehavior",
        displayName: "Measure Selection",
        value: { value: "Measure", displayName: "Measure" },
        items: [
            { value: "Measure", displayName: "Measure" },
            { value: "Sum", displayName: "Sum" },
            { value: "Average", displayName: "Average" },
            { value: "Count", displayName: "Count" },
            { value: "Count Distinct", displayName: "Count Distinct" },
            { value: "Max", displayName: "Max" },
            { value: "Min", displayName: "Min" }
        ],
        visible: true
    });
    font = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontControl({
        name: "font",
        displayName: "Font",
        fontFamily: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontPicker({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Arial, sans-serif"
        }),
        fontSize: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
            name: "fontSize",
            displayName: "Font Size",
            value: 12
        }),
        bold: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "bold",
            displayName: "Bold",
            value: true
        }),
        italic: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "italic",
            displayName: "Italic",
            value: false
        }),
        underline: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "underline",
            displayName: "Underline",
            value: false
        })
    });
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text color",
        value: { value: "#333333" },
        visible: true
    });
    backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#d0d0d0" },
        visible: true
    });
    textWrap = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });
    slices = [this.showTotalRow, this.totalBehavior, this.font, this.textColor, this.backgroundColor, this.textWrap];
}
class GridSettings extends FormattingSettingsCard {
    horizontalGridlines = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "horizontalGridlines",
        displayName: "Horizontal gridlines",
        value: true,
        visible: true
    });
    horizontalGridColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "horizontalGridColor",
        displayName: "Color",
        value: { value: "#d0d0d0" },
        visible: true
    });
    horizontalGridWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "horizontalGridWidth",
        displayName: "Width",
        value: 1,
        visible: true
    });
    horizontalGridTransparency = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "horizontalGridTransparency",
        displayName: "Horizontal grid transparency (%)",
        value: 0,
        visible: true
    });
    verticalGridlines = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "verticalGridlines",
        displayName: "Vertical gridlines",
        value: true,
        visible: true
    });
    verticalGridColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "verticalGridColor",
        displayName: "Color",
        value: { value: "#d0d0d0" },
        visible: true
    });
    verticalGridWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "verticalGridWidth",
        displayName: "Width",
        value: 1,
        visible: true
    });
    verticalGridTransparency = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "verticalGridTransparency",
        displayName: "Vertical grid transparency (%)",
        value: 0,
        visible: true
    });
    name = "grid";
    displayName = "Grid";
    visible = true;
    slices = [
        this.horizontalGridlines,
        this.horizontalGridColor,
        this.horizontalGridWidth,
        this.horizontalGridTransparency,
        this.verticalGridlines,
        this.verticalGridColor,
        this.verticalGridWidth,
        this.verticalGridTransparency
    ];
}
class ColumnHeadersSettings extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.CompositeCard {
    font = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontControl({
        name: "font",
        displayName: "Font",
        fontFamily: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontPicker({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Arial, sans-serif"
        }),
        fontSize: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
            name: "fontSize",
            displayName: "Font Size",
            value: 11
        }),
        bold: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "bold",
            displayName: "Bold",
            value: false
        }),
        italic: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "italic",
            displayName: "Italic",
            value: false
        }),
        underline: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "underline",
            displayName: "Underline",
            value: false
        })
    });
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text color",
        value: { value: "#1e3a8a" },
        visible: true
    });
    backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#ffffff" },
        visible: true
    });
    alignment = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.AlignmentGroup({
        name: "alignment",
        displayName: "Header alignment",
        value: "left",
        mode: "horizontalAlignment" /* powerbi.visuals.AlignmentGroupMode.Horizonal */,
        visible: true
    });
    textWrap = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: true,
        visible: true
    });
    textGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Text",
        name: "text",
        slices: [this.font, this.textColor, this.backgroundColor, this.alignment, this.textWrap]
    });
    headerRowHeight = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "headerRowHeight",
        displayName: "Header row height",
        value: 35,
        visible: true
    });
    optionsGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Options",
        name: "options",
        slices: [this.headerRowHeight]
    });
    name = "columnHeaders";
    displayName = "Column headers";
    visible = true;
    groups = [this.textGroup, this.optionsGroup];
}
class SpecificColumnSettings extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.CompositeCard {
    series = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });
    applyToHeader = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "applyToHeader",
        displayName: "Apply to header",
        value: true,
        visible: true
    });
    applyToTotal = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "applyToTotal",
        displayName: "Apply to total",
        value: true,
        visible: true
    });
    applyToValues = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "applyToValues",
        displayName: "Apply to values",
        value: true,
        visible: true
    });
    applySettingsGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Apply settings to",
        name: "applySettingsTo",
        slices: [this.series, this.applyToHeader, this.applyToTotal, this.applyToValues]
    });
    font = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontControl({
        name: "font",
        displayName: "Font",
        fontFamily: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontPicker({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Arial, sans-serif"
        }),
        fontSize: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
            name: "fontSize",
            displayName: "Font Size",
            value: 12
        }),
        bold: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "bold",
            displayName: "Bold",
            value: false
        }),
        italic: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "italic",
            displayName: "Italic",
            value: false
        }),
        underline: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
            name: "underline",
            displayName: "Underline",
            value: false
        })
    });
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text color",
        value: { value: "#00b8d4" },
        visible: true
    });
    backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "backgroundColor",
        displayName: "Background color",
        value: { value: "#ffffff" },
        visible: true
    });
    alternateTextColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "alternateTextColor",
        displayName: "Alternate text color",
        value: { value: "#333333" },
        visible: true
    });
    alternateBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "alternateBackgroundColor",
        displayName: "Alternate background color",
        value: { value: "#f5f5f5" },
        visible: true
    });
    textWrap = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "textWrap",
        displayName: "Text wrap",
        value: false,
        visible: true
    });
    alignment = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.AlignmentGroup({
        name: "alignment",
        displayName: "Alignment",
        value: "left",
        mode: "horizontalAlignment" /* powerbi.visuals.AlignmentGroupMode.Horizonal */,
        visible: true
    });
    displayUnits = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.AutoDropdown({
        name: "displayUnits",
        displayName: "Display units",
        value: 0,
        visible: true
    });
    decimalPlaces = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "decimalPlaces",
        displayName: "Value decimal places",
        value: 1,
        visible: true
    });
    valuesGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Values",
        name: "specificValues", // NOTE: renamed to specificValues to avoid clash with global 'values' object
        slices: [this.font, this.textColor, this.backgroundColor, this.alternateTextColor, this.alternateBackgroundColor, this.alignment, this.displayUnits, this.decimalPlaces, this.textWrap]
    });
    name = "specificColumn";
    displayName = "Specific column";
    visible = true;
    groups = [this.applySettingsGroup, this.valuesGroup];
}
class ColumnWidthSettings extends FormattingSettingsCard {
    name = "columnWidth";
    displayName = "Column Width";
    visible = true;
    categoryColumnWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "categoryColumnWidth",
        displayName: "Category Column Width",
        value: 150
    });
    alignedColumns = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "alignedColumns",
        displayName: "Aligned columns",
        value: true
    });
    valueColumnWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "valueColumnWidth",
        displayName: "Value Column Width",
        value: 100
    });
    slices = [this.categoryColumnWidth, this.alignedColumns, this.valueColumnWidth];
}
class VisualSettings extends FormattingSettingsModel {
    valuesMenu = new ValuesSettings();
    specificColumn = new SpecificColumnSettings();
    columnHeaders = new ColumnHeadersSettings();
    table = new TableSettings();
    categoryConditionalFormatting = new CategoryConditionalFormattingSettings();
    valueConditionalFormatting = new ValueConditionalFormattingSettings();
    dataBarsFormatting = new DataBarsFormattingSettings();
    dataBarMarkers = new DataBarMarkersSettings();
    totals = new TotalsSettings();
    gridMenu = new GridSettings();
    columnWidth = new ColumnWidthSettings();
    cards = [this.specificColumn, this.columnHeaders, this.valuesMenu, this.table, this.columnWidth, this.totals, this.gridMenu, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsFormatting, this.dataBarMarkers];
}


/***/ }),

/***/ "./src/visual.ts":
/*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Visual: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var _style_visual_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../style/visual.less */ "./style/visual.less");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js");
/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/





class Visual {
    table;
    formattingSettingsService;
    visualSettings;
    dataView;
    constructor(options) {
        const tableContainer = document.createElement("div");
        tableContainer.className = "table-container";
        options.element.appendChild(tableContainer);
        this.table = document.createElement('table');
        this.table.className = 'pbi-table';
        tableContainer.appendChild(this.table);
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.FormattingSettingsService();
        this.visualSettings = new _settings__WEBPACK_IMPORTED_MODULE_1__.VisualSettings();
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.visualSettings);
    }
    update(options) {
        if (options.dataViews && options.dataViews[0]) {
            this.visualSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_1__.VisualSettings, options.dataViews[0]);
            this.dataView = options.dataViews[0]; // Update dataView here
        }
        const columnWidthSettings = this.visualSettings.columnWidth;
        const tableSettings = this.visualSettings.table;
        const valuesSettings = this.visualSettings.valuesMenu;
        const cellItalic = valuesSettings.font.italic?.value || false;
        const cellUnderline = valuesSettings.font.underline?.value || false;
        const textColor = valuesSettings.textColor.value.value;
        const alternateTextColor = valuesSettings.alternateTextColor.value.value;
        const cellFontFamily = valuesSettings.font.fontFamily.value;
        const totalsSettings = this.visualSettings.totals;
        const showTotalRow = totalsSettings.showTotalRow.value;
        const totalRowItalic = totalsSettings.font.italic?.value || false;
        const totalRowWordWrap = totalsSettings.textWrap.value;
        const totalRowFontSize = totalsSettings.font.fontSize.value;
        const totalRowFontFamily = totalsSettings.font.fontFamily.value;
        const totalRowTextColor = totalsSettings.textColor.value.value;
        const categoryColumnWidth = columnWidthSettings.categoryColumnWidth.value;
        const categoryWordWrap = tableSettings.categoryWordWrap.value;
        const valueWordWrap = valuesSettings.textWrap.value;
        const columnHeadersSettings = this.visualSettings.columnHeaders;
        const headerWordWrap = columnHeadersSettings.textWrap?.value || false;
        const columnWidth = columnWidthSettings.valueColumnWidth.value;
        const headerRowHeight = columnHeadersSettings.headerRowHeight.value;
        const valueRowHeight = tableSettings.valueRowHeight.value;
        const alternateValueRowHeight = tableSettings.alternateValueRowHeight.value;
        const totalRowHeight = tableSettings.totalRowHeight.value;
        const headerFontSize = columnHeadersSettings.font.fontSize.value;
        const headerBold = columnHeadersSettings.font.bold.value;
        const headerItalic = columnHeadersSettings.font.italic.value;
        const headerUnderline = columnHeadersSettings.font.underline.value;
        const headerFontFamily = columnHeadersSettings.font.fontFamily.value;
        const headerAlignment = columnHeadersSettings.alignment.value;
        const cellFontSize = valuesSettings.font.fontSize.value;
        const valueBold = valuesSettings.font.bold?.value || false;
        const totalRowBold = totalsSettings.font.bold?.value || false;
        const totalRowUnderline = totalsSettings.font.underline?.value || false;
        const backgroundColor = valuesSettings.backgroundColor.value.value;
        const alternateBackgroundColor = valuesSettings.alternateBackgroundColor.value.value;
        const headerBackgroundColor = columnHeadersSettings.backgroundColor.value.value;
        const headerTextColor = columnHeadersSettings.textColor.value.value;
        const totalRowBackgroundColor = totalsSettings.backgroundColor.value.value;
        const gridSettings = this.visualSettings.gridMenu;
        const gridBorderColor = gridSettings.horizontalGridColor.value.value;
        const categoryCFSettings = this.visualSettings.categoryConditionalFormatting;
        const defaultCategoryTextColor = categoryCFSettings.textColor.value.value;
        const valueCFSettings = this.visualSettings.valueConditionalFormatting;
        valueCFSettings.slices = []; // Will be populated dynamically per-measure
        totalsSettings.slices = [
            totalsSettings.showTotalRow,
            totalsSettings.font,
            totalsSettings.textColor,
            totalsSettings.backgroundColor,
            totalsSettings.textWrap
        ];
        const dataBarsSettings = this.visualSettings.dataBarsFormatting;
        dataBarsSettings.slices = []; // Will be populated dynamically per-measure
        const dataBarMarkersSettings = this.visualSettings.dataBarMarkers;
        dataBarMarkersSettings.slices = []; // Will be populated dynamically per-measure
        // Reset columnWidth slices: base slices always shown, per-measure slices added dynamically when not aligned
        if (columnWidthSettings.alignedColumns.value) {
            columnWidthSettings.slices = [columnWidthSettings.categoryColumnWidth, columnWidthSettings.alignedColumns, columnWidthSettings.valueColumnWidth];
        }
        else {
            columnWidthSettings.slices = [columnWidthSettings.categoryColumnWidth, columnWidthSettings.alignedColumns];
            // Per-measure width slices will be added in the values.forEach loop below
        }
        // Helper function to convert hex to rgba
        const applyTransparency = (hex, transparencyPct) => {
            if (!hex)
                return hex;
            let alpha = Math.max(0, Math.min(1, 1 - (transparencyPct / 100)));
            if (hex.startsWith("#")) {
                let r = 0, g = 0, b = 0;
                if (hex.length === 4) {
                    r = parseInt(hex[1] + hex[1], 16);
                    g = parseInt(hex[2] + hex[2], 16);
                    b = parseInt(hex[3] + hex[3], 16);
                }
                else if (hex.length === 7) {
                    r = parseInt(hex[1] + hex[2], 16);
                    g = parseInt(hex[3] + hex[4], 16);
                    b = parseInt(hex[5] + hex[6], 16);
                }
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
            return hex; // fallback if not hex
        };
        const horizLines = gridSettings.horizontalGridlines.value;
        const horizColor = applyTransparency(gridSettings.horizontalGridColor.value.value, gridSettings.horizontalGridTransparency.value);
        const horizWidth = gridSettings.horizontalGridWidth.value;
        const horizBorderValue = horizLines ? `${horizWidth}px solid ${horizColor}` : 'none';
        const horizBorder2xValue = horizLines ? `${horizWidth * 2}px solid ${horizColor}` : 'none';
        const vertLines = gridSettings.verticalGridlines.value;
        const vertColor = applyTransparency(gridSettings.verticalGridColor.value.value, gridSettings.verticalGridTransparency.value);
        const vertWidth = gridSettings.verticalGridWidth.value;
        const vertBorderValue = vertLines ? `${vertWidth}px solid ${vertColor}` : 'none';
        // Helper function to get text color for a category row, supporting conditional formatting
        const formatNumber = (num, units, decimals) => {
            let divisor = 1;
            let suffix = "";
            if (units === 0) { // Auto
                let absNum = Math.abs(num);
                if (absNum >= 1000000000000) {
                    divisor = 1000000000000;
                    suffix = "T";
                }
                else if (absNum >= 1000000000) {
                    divisor = 1000000000;
                    suffix = "bn";
                }
                else if (absNum >= 1000000) {
                    divisor = 1000000;
                    suffix = "M";
                }
                else if (absNum >= 1000) {
                    divisor = 1000;
                    suffix = "K";
                }
            }
            else if (units > 1) {
                divisor = units;
                if (units === 1000)
                    suffix = "K";
                else if (units === 1000000)
                    suffix = "M";
                else if (units === 1000000000)
                    suffix = "bn";
                else if (units === 1000000000000)
                    suffix = "T";
            }
            return (num / divisor).toLocaleString(undefined, {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals
            }) + suffix;
        };
        const getCategoryTextColor = (rowIndex, dataView) => {
            if (dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0) {
                const category = dataView.categorical.categories[0];
                if (category.objects && category.objects[rowIndex]) {
                    const color = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(category.objects[rowIndex], { objectName: "categoryConditionalFormatting", propertyName: "textColor" });
                    if (color) {
                        return color;
                    }
                }
            }
            return defaultCategoryTextColor;
        };
        // Helper function to apply squashing row height
        const applyRowSquash = (cell, rowHeight, fontSize, wordWrap) => {
            if (rowHeight <= 2) {
                cell.style.fontSize = "0px";
                cell.style.color = "transparent";
                cell.style.padding = "0px";
                cell.style.lineHeight = "0px";
                cell.style.height = `${rowHeight}px`;
            }
            else {
                cell.style.fontSize = `${Math.min(fontSize, Math.max(8, rowHeight - 6))}px`;
                cell.style.height = `${rowHeight}px`;
                cell.style.padding = ""; // fallback to CSS padding
                if (!wordWrap) {
                    cell.style.lineHeight = `${rowHeight}px`;
                }
                else {
                    cell.style.lineHeight = "normal";
                }
            }
        };
        const applyVerticalGridBorder = (cell, isLastCell) => {
            if (!isLastCell) {
                cell.style.borderRight = vertBorderValue;
            }
            else {
                cell.style.borderRight = "none";
            }
        };
        const applyTotalRowStyles = (cell, width, wordWrap) => {
            cell.style.width = `${width}px`;
            cell.style.minWidth = `${width}px`;
            cell.style.maxWidth = `${width}px`;
            applyRowSquash(cell, totalRowHeight, totalRowFontSize, wordWrap);
            cell.style.fontWeight = totalRowBold ? "bold" : "normal";
            cell.style.textDecoration = totalRowUnderline ? "underline" : "none";
            cell.style.fontFamily = totalRowFontFamily;
            cell.style.fontStyle = totalRowItalic ? "italic" : "normal";
            cell.style.backgroundColor = totalRowBackgroundColor;
            cell.style.color = totalRowTextColor;
            cell.style.overflow = "hidden";
            cell.style.textOverflow = "ellipsis";
            cell.style.whiteSpace = wordWrap ? "normal" : "nowrap";
            if (wordWrap) {
                cell.style.wordBreak = "break-word";
            }
        };
        // Helper function to get background color for a row, supporting conditional formatting
        const getRowBackgroundColor = (rowIndex, isEvenRow, dataView) => {
            const targetColorProp = isEvenRow ? "backgroundColor" : "alternateBackgroundColor";
            const defaultColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
            if (dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0) {
                const category = dataView.categorical.categories[0];
                if (category.objects && category.objects[rowIndex]) {
                    const color = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(category.objects[rowIndex], { objectName: "table", propertyName: targetColorProp });
                    if (color) {
                        return color;
                    }
                }
            }
            return defaultColor;
        };
        // Helper function to get row background color, supporting conditional formatting
        while (this.table.firstChild) {
            this.table.removeChild(this.table.firstChild);
        }
        this.dataView = options.dataViews[0];
        if (!options.dataViews || options.dataViews.length === 0) {
            let row = this.table.insertRow();
            let cell = row.insertCell();
            cell.textContent = "No data available";
            return;
        }
        let dataView = options.dataViews[0];
        let hasCategories = dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0;
        let categories = hasCategories ? dataView.categorical.categories[0] : null;
        let values = dataView.categorical && dataView.categorical.values ? dataView.categorical.values : null;
        if (!values || values.length === 0) {
            let row = this.table.insertRow();
            let cell = row.insertCell();
            cell.textContent = "No data available";
            return;
        }
        const switchValuesToRows = tableSettings.switchValuesToRows?.value || false;
        let rowCount = hasCategories && categories.values ? categories.values.length : (values[0].values ? values[0].values.length : 1);
        // Pre-process measure settings to populate formatting model properly
        let measureHeaders = [];
        let measureSettingsList = [];
        let valueColumnWidths = [];
        values.forEach((valueColumn) => {
            let specObj = valueColumn.source.objects?.specificColumn;
            let settings = {
                textColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textColor" }, undefined),
                backgroundColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined),
                alternateTextColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined),
                alternateBackgroundColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined),
                alignment: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alignment" }, undefined),
                applyToHeader: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToHeader" }, true),
                applyToValues: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToValues" }, true),
                applyToTotal: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToTotal" }, true),
                displayUnits: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "displayUnits" }, 0),
                decimalPlaces: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "decimalPlaces" }, 1),
                fontFamily: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontFamily" }, undefined),
                fontSize: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontSize" }, undefined),
                bold: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "bold" }, undefined),
                italic: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "italic" }, undefined),
                underline: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "underline" }, undefined),
                textWrap: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textWrap" }, undefined)
            };
            measureSettingsList.push(settings);
            let displayName = valueColumn.source.displayName || `Measure ${measureHeaders.length + 1}`;
            measureHeaders.push(displayName);
            const queryName = valueColumn.source.queryName;
            if (columnWidthSettings.alignedColumns.value) {
                valueColumnWidths.push(columnWidthSettings.valueColumnWidth.value);
            }
            else {
                const specificWidth = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(valueColumn.source.objects || {}, { objectName: "columnWidth", propertyName: "valueColumnWidth" }, columnWidthSettings.valueColumnWidth.value);
                valueColumnWidths.push(specificWidth);
                // Add per-measure width slice with selector so Power BI persists it per-measure
                columnWidthSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.NumUpDown({
                    name: "valueColumnWidth",
                    displayName: displayName + " Width",
                    value: specificWidth,
                    selector: { metadata: queryName }
                }));
            }
            // Build dynamic settings slice for this measure
            const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, textColor);
            valueCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ColorPicker({
                name: "textColor",
                displayName: displayName + " Text Color",
                value: { value: defaultMeasureTextColor },
                visible: true,
                selector: { metadata: queryName },
                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
            }));
            // Data bars settings
            const objects = valueColumn.source.objects || {};
            const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
            const positiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
            const negativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
            dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ToggleSwitch({
                name: "showDataBars",
                displayName: displayName + " Show Data Bars",
                value: showDataBars,
                visible: true,
                selector: { metadata: queryName }
            }));
            if (showDataBars) {
                dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ColorPicker({
                    name: "positiveColor",
                    displayName: displayName + " Positive Color",
                    value: { value: positiveColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
                dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ColorPicker({
                    name: "negativeColor",
                    displayName: displayName + " Negative Color",
                    value: { value: negativeColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
                const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.NumUpDown({
                    name: "dataBarHeight",
                    displayName: displayName + " Data Bar Height (%)",
                    value: dataBarHeight,
                    visible: true,
                    selector: { metadata: queryName }
                }));
            }
            // Data bar markers settings
            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
            let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
            const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
            const markerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
            const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
            dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ToggleSwitch({
                name: "showMarker",
                displayName: displayName + " Show Marker",
                value: showMarker,
                visible: true,
                selector: { metadata: queryName }
            }));
            if (showMarker) {
                const markerShapeItems = [
                    { value: "cross", displayName: "Cross" },
                    { value: "circle", displayName: "Circle" },
                    { value: "horizontalLine", displayName: "Horizontal Line" },
                    { value: "verticalLine", displayName: "Vertical Line" },
                    { value: "semiCircle", displayName: "Semi Circle" }
                ];
                const currentShapeItem = markerShapeItems.find(x => x.value === markerShape) || markerShapeItems[1];
                dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ItemDropdown({
                    name: "markerShape",
                    displayName: displayName + " Marker Shape",
                    value: currentShapeItem,
                    items: markerShapeItems,
                    visible: true,
                    selector: { metadata: queryName }
                }));
                dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ColorPicker({
                    name: "markerColor",
                    displayName: displayName + " Marker Color",
                    value: { value: markerColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
                dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.NumUpDown({
                    name: "markerSize",
                    displayName: displayName + " Marker Size",
                    value: markerSize,
                    visible: true,
                    selector: { metadata: queryName }
                }));
            }
            let totalBehaviorRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Sum");
            const totalBehaviorVal = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Sum");
            const totalBehaviorItems = [
                { value: "Measure", displayName: "Measure" },
                { value: "Sum", displayName: "Sum" },
                { value: "Average", displayName: "Average" },
                { value: "Count", displayName: "Count" },
                { value: "Count Distinct", displayName: "Count Distinct" },
                { value: "Max", displayName: "Max" },
                { value: "Min", displayName: "Min" }
            ];
            const currentBehaviorItem = totalBehaviorItems.find(x => x.value === totalBehaviorVal) || totalBehaviorItems[1];
            totalsSettings.slices.splice(measureHeaders.length, 0, new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_2__.formattingSettings.ItemDropdown({
                name: "totalBehavior",
                displayName: displayName + " Measure Selection",
                value: currentBehaviorItem,
                items: totalBehaviorItems,
                visible: true,
                selector: { metadata: queryName }
            }));
        });
        // Populate specificColumn series dropdown with all measure columns
        const specificColumnSettings = this.visualSettings.specificColumn;
        specificColumnSettings.series.items = measureHeaders.map(name => ({ value: name, displayName: name }));
        // Read persisted series value from dataView metadata objects
        const persistedSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(this.dataView.metadata.objects || {}, { objectName: "specificColumn", propertyName: "series" }, undefined);
        const matchedItem = persistedSeries
            ? specificColumnSettings.series.items.find(i => i.value === persistedSeries)
            : null;
        specificColumnSettings.series.value = matchedItem || specificColumnSettings.series.items[0] || { value: "", displayName: "" };
        // Compute min and max values for data bars AND Calculate totals based on selection
        let measureMins = new Array(values.length).fill(0);
        let measureMaxs = new Array(values.length).fill(0);
        let totals = new Array(values.length).fill(0);
        values.forEach((valueColumn, measureIndex) => {
            let numValues = valueColumn.values.filter(v => v !== null && v !== undefined).map(v => Number(v));
            if (numValues.length > 0) {
                measureMins[measureIndex] = Math.min(0, ...numValues); // Standard data bars anchor to 0
                measureMaxs[measureIndex] = Math.max(0, ...numValues);
            }
            const objects = valueColumn.source.objects || {};
            let totalBehaviorRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Sum");
            const totalBehavior = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Sum");
            if (numValues.length > 0) {
                if (totalBehavior === "Sum" || totalBehavior === "Measure") {
                    totals[measureIndex] = numValues.reduce((a, b) => a + b, 0);
                }
                else if (totalBehavior === "Average") {
                    totals[measureIndex] = numValues.reduce((a, b) => a + b, 0) / numValues.length;
                }
                else if (totalBehavior === "Count") {
                    totals[measureIndex] = numValues.length;
                }
                else if (totalBehavior === "Count Distinct") {
                    totals[measureIndex] = new Set(numValues).size;
                }
                else if (totalBehavior === "Max") {
                    totals[measureIndex] = Math.max(...numValues);
                }
                else if (totalBehavior === "Min") {
                    totals[measureIndex] = Math.min(...numValues);
                }
            }
        });
        if (!switchValuesToRows) {
            // Normal horizontal table structure
            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = horizBorder2xValue;
            headerRow.style.height = `${headerRowHeight}px`;
            const headerBgColor = headerBackgroundColor;
            // Add category column header if categories exist
            if (hasCategories) {
                let categoryHeader = headerRow.insertCell();
                categoryHeader.textContent = categories.source.displayName || 'Category';
                categoryHeader.className = 'table-header-cell';
                categoryHeader.style.width = `${categoryColumnWidth}px`;
                categoryHeader.style.minWidth = `${categoryColumnWidth}px`;
                categoryHeader.style.maxWidth = `${categoryColumnWidth}px`;
                applyRowSquash(categoryHeader, headerRowHeight, headerFontSize, headerWordWrap);
                categoryHeader.style.fontWeight = headerBold ? "bold" : "normal";
                categoryHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                categoryHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                categoryHeader.style.fontFamily = headerFontFamily;
                categoryHeader.style.color = headerTextColor;
                categoryHeader.style.textAlign = headerAlignment;
                categoryHeader.style.borderRight = vertBorderValue;
                categoryHeader.style.backgroundColor = headerBgColor;
                categoryHeader.style.overflow = "hidden";
                categoryHeader.style.textOverflow = "ellipsis";
                categoryHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    categoryHeader.style.wordBreak = "break-word";
                }
            }
            // Add measure column headers
            measureHeaders.forEach((displayName, idx) => {
                let specSettings = measureSettingsList[idx];
                let effectiveBg = specSettings.applyToHeader && specSettings.backgroundColor ? specSettings.backgroundColor : headerBgColor;
                let efBold = specSettings.applyToHeader && specSettings.bold !== undefined ? specSettings.bold : headerBold;
                let efItalic = specSettings.applyToHeader && specSettings.italic !== undefined ? specSettings.italic : headerItalic;
                let efUnderline = specSettings.applyToHeader && specSettings.underline !== undefined ? specSettings.underline : headerUnderline;
                let efFontFamily = specSettings.applyToHeader && specSettings.fontFamily !== undefined ? specSettings.fontFamily : headerFontFamily;
                let efFontSize = specSettings.applyToHeader && specSettings.fontSize !== undefined ? specSettings.fontSize : headerFontSize;
                let efWordWrap = specSettings.applyToHeader && specSettings.textWrap !== undefined ? specSettings.textWrap : headerWordWrap;
                let effectiveColor = specSettings.applyToHeader && specSettings.textColor ? specSettings.textColor : headerTextColor;
                let effectiveAlign = specSettings.applyToHeader && specSettings.alignment ? specSettings.alignment : headerAlignment;
                let header = headerRow.insertCell();
                header.textContent = displayName;
                header.className = 'table-header-cell';
                header.style.width = `${valueColumnWidths[idx]}px`;
                header.style.minWidth = `${valueColumnWidths[idx]}px`;
                header.style.maxWidth = `${valueColumnWidths[idx]}px`;
                applyRowSquash(header, headerRowHeight, efFontSize, efWordWrap);
                header.style.fontWeight = efBold ? "bold" : "normal";
                header.style.fontStyle = efItalic ? "italic" : "normal";
                header.style.textDecoration = efUnderline ? "underline" : "none";
                header.style.fontFamily = efFontFamily;
                header.style.color = effectiveColor;
                header.style.textAlign = effectiveAlign;
                header.style.borderRight = vertBorderValue;
                header.style.backgroundColor = effectiveBg;
                header.style.overflow = "hidden";
                header.style.textOverflow = "ellipsis";
                header.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                if (efWordWrap) {
                    header.style.wordBreak = "break-word";
                }
            });
            // Create data rows
            for (let i = 0; i < rowCount; i++) {
                let row = this.table.insertRow();
                row.className = 'table-data-row';
                row.style.borderBottom = horizBorderValue;
                // Apply alternating background colors with support for conditional formatting
                const isEvenRow = i % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = `${rowHeight}px`;
                const rowBgColor = getRowBackgroundColor(i, isEvenRow, dataView);
                row.style.backgroundColor = rowBgColor;
                // Add category value
                if (hasCategories) {
                    let categoryCell = row.insertCell();
                    categoryCell.textContent = String(categories.values[i]);
                    categoryCell.className = 'table-category-cell';
                    categoryCell.style.width = `${categoryColumnWidth}px`;
                    categoryCell.style.minWidth = `${categoryColumnWidth}px`;
                    categoryCell.style.maxWidth = `${categoryColumnWidth}px`;
                    applyRowSquash(categoryCell, rowHeight, cellFontSize, categoryWordWrap);
                    categoryCell.style.fontWeight = valueBold ? "bold" : "normal";
                    categoryCell.style.borderRight = vertBorderValue;
                    categoryCell.style.backgroundColor = rowBgColor;
                    categoryCell.style.color = getCategoryTextColor(i, dataView);
                    categoryCell.style.overflow = "hidden";
                    categoryCell.style.textOverflow = "ellipsis";
                    categoryCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                    if (categoryWordWrap) {
                        categoryCell.style.wordBreak = "break-word";
                    }
                }
                // Add measure values
                values.forEach((valueColumn, measureIndex) => {
                    const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                    let cellTextColor = defaultMeasureTextColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.objects[i], { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                        if (cfColor) {
                            cellTextColor = cfColor;
                        }
                    }
                    let cell = row.insertCell();
                    let value = valueColumn.values[i];
                    cell.style.position = "relative"; // for data bar positioning
                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });
                        const objects = valueColumn.source.objects || {};
                        const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        if (showDataBars) {
                            let cellPositiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                            let cellNegativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const min = measureMins[measureIndex];
                            const max = measureMaxs[measureIndex];
                            const range = max - min;
                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;
                            if (range > 0) {
                                if (numValue >= 0) {
                                    widthPct = (numValue / range) * 100;
                                    leftPct = ((0 - min) / range) * 100;
                                }
                                else {
                                    widthPct = (Math.abs(numValue) / range) * 100;
                                    leftPct = ((numValue - min) / range) * 100;
                                }
                            }
                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = `${topPct}%`;
                            dataBar.style.height = `${dataBarHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                            dataBar.style.backgroundColor = numValue >= 0 ? cellPositiveColor : cellNegativeColor;
                            dataBar.style.opacity = "0.6"; // semi-transparent so text is readable
                            dataBar.style.zIndex = "1";
                            cell.appendChild(dataBar);
                            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                            if (showMarker) {
                                let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                                let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.objects[i], { objectName: "dataBarMarkers", propertyName: "markerColor" });
                                    if (cfMarkerColor) {
                                        cellMarkerColor = cfMarkerColor;
                                    }
                                }
                                let marker = document.createElement("div");
                                marker.style.position = "absolute";
                                marker.style.zIndex = "3";
                                let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                marker.style.top = `calc(50% - ${markerSize / 2}px)`;
                                marker.style.width = `${markerSize}px`;
                                marker.style.height = `${markerSize}px`;
                                if (markerShape === "circle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.borderRadius = "50%";
                                }
                                else if (markerShape === "cross") {
                                    marker.style.backgroundColor = "transparent";
                                    let line1 = document.createElement("div");
                                    line1.style.position = "absolute";
                                    line1.style.backgroundColor = cellMarkerColor;
                                    line1.style.width = "100%";
                                    line1.style.height = "2px";
                                    line1.style.top = "calc(50% - 1px)";
                                    line1.style.transform = "rotate(45deg)";
                                    let line2 = document.createElement("div");
                                    line2.style.position = "absolute";
                                    line2.style.backgroundColor = cellMarkerColor;
                                    line2.style.width = "100%";
                                    line2.style.height = "2px";
                                    line2.style.top = "calc(50% - 1px)";
                                    line2.style.transform = "rotate(-45deg)";
                                    marker.appendChild(line1);
                                    marker.appendChild(line2);
                                }
                                else if (markerShape === "horizontalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.height = "2px";
                                    marker.style.top = "calc(50% - 1px)";
                                    marker.style.width = `${markerSize}px`;
                                }
                                else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                }
                                else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    // Draw semi circle pointing outwards
                                    if (numValue >= 0) {
                                        marker.style.borderTopRightRadius = `${markerSize}px`;
                                        marker.style.borderBottomRightRadius = `${markerSize}px`;
                                        marker.style.width = `${markerSize / 2}px`;
                                        marker.style.left = `calc(${markerLeftPct}%)`;
                                    }
                                    else {
                                        marker.style.borderTopLeftRadius = `${markerSize}px`;
                                        marker.style.borderBottomLeftRadius = `${markerSize}px`;
                                        marker.style.width = `${markerSize / 2}px`;
                                        marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                    }
                                }
                                cell.appendChild(marker);
                            }
                            let textDiv = document.createElement("div");
                            textDiv.style.position = "relative";
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            cell.appendChild(textDiv);
                        }
                        else {
                            cell.textContent = formattedValue;
                        }
                    }
                    else {
                        cell.textContent = '-';
                    }
                    cell.className = 'table-data-cell';
                    cell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    applyRowSquash(cell, rowHeight, cellFontSize, valueWordWrap);
                    cell.style.fontWeight = valueBold ? "bold" : "normal";
                    cell.style.fontStyle = cellItalic ? "italic" : "normal";
                    cell.style.textDecoration = cellUnderline ? "underline" : "none";
                    cell.style.borderRight = vertBorderValue;
                    cell.style.backgroundColor = rowBgColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    let specSettings = measureSettingsList[measureIndex];
                    let specRowBgColor = isEvenRow ?
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : rowBgColor) :
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : rowBgColor);
                    let specCellTextColor = isEvenRow ?
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) :
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);
                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues ? specCellTextColor : cellTextColor;
                    let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.fontWeight = efBold ? "bold" : "normal";
                    cell.style.fontStyle = efItalic ? "italic" : "normal";
                    cell.style.textDecoration = efUnderline ? "underline" : "none";
                    cell.style.fontFamily = efFontFamily;
                    cell.style.fontSize = `${efFontSize}px`;
                    cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                    cell.style.textAlign = effectiveAlign;
                    if (efWordWrap) { // and here
                        cell.style.wordBreak = "break-word";
                    }
                });
            }
            // Create total row
            if (showTotalRow) {
                let totalRow = this.table.insertRow();
                totalRow.className = 'table-total-row';
                totalRow.style.borderTop = horizBorder2xValue;
                totalRow.style.borderBottom = horizBorder2xValue;
                totalRow.style.height = `${totalRowHeight}px`;
                const totalBgColor = totalRowBackgroundColor;
                if (hasCategories) {
                    let totalLabelCell = totalRow.insertCell();
                    totalLabelCell.textContent = 'Total';
                    totalLabelCell.className = 'table-total-label-cell';
                    totalLabelCell.style.width = `${categoryColumnWidth}px`;
                    totalLabelCell.style.minWidth = `${categoryColumnWidth}px`;
                    totalLabelCell.style.maxWidth = `${categoryColumnWidth}px`;
                    applyRowSquash(totalLabelCell, totalRowHeight, totalRowFontSize, totalRowWordWrap);
                    totalLabelCell.style.fontWeight = totalRowBold ? "bold" : "normal";
                    totalLabelCell.style.textDecoration = totalRowUnderline ? "underline" : "none";
                    totalLabelCell.style.fontFamily = totalRowFontFamily;
                    totalLabelCell.style.fontStyle = totalRowItalic ? "italic" : "normal";
                    totalLabelCell.style.borderRight = vertBorderValue;
                    totalLabelCell.style.backgroundColor = totalBgColor;
                    totalLabelCell.style.color = totalRowTextColor;
                    totalLabelCell.style.overflow = "hidden";
                    totalLabelCell.style.textOverflow = "ellipsis";
                    totalLabelCell.style.whiteSpace = totalRowWordWrap ? "normal" : "nowrap";
                    if (totalRowWordWrap) {
                        totalLabelCell.style.wordBreak = "break-word";
                    }
                }
                else {
                    let totalLabelCell = totalRow.insertCell();
                    totalLabelCell.textContent = 'Total';
                    totalLabelCell.style.display = "none";
                }
                totals.forEach((total, i) => {
                    let specSettings = measureSettingsList[i];
                    let effectiveBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalRowBackgroundColor;
                    let effectiveColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
                    let efBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                    let efItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                    let efUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                    let efFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                    let efFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                    let efWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;
                    let effectiveAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
                    let cell = totalRow.insertCell();
                    cell.textContent = total.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0
                    });
                    cell.className = 'table-total-cell';
                    cell.style.width = `${valueColumnWidths[i]}px`;
                    cell.style.minWidth = `${valueColumnWidths[i]}px`;
                    cell.style.maxWidth = `${valueColumnWidths[i]}px`;
                    applyRowSquash(cell, totalRowHeight, efFontSize, efWordWrap);
                    cell.style.fontWeight = efBold ? "bold" : "normal";
                    cell.style.textDecoration = efUnderline ? "underline" : "none";
                    cell.style.fontFamily = efFontFamily;
                    cell.style.fontStyle = efItalic ? "italic" : "normal";
                    cell.style.borderRight = vertBorderValue;
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                    cell.style.textAlign = effectiveAlign;
                    if (efWordWrap) {
                        cell.style.wordBreak = "break-word";
                    }
                });
            }
        }
        else {
            // switchValuesToRows IS TRUE (Transpose layout)
            // Create Header Row
            let headerRow = this.table.insertRow();
            headerRow.className = 'table-header-row';
            headerRow.style.borderBottom = horizBorder2xValue;
            headerRow.style.height = `${headerRowHeight}px`;
            const headerBgColor = headerBackgroundColor;
            // First header is "Measure"
            let measureHeader = headerRow.insertCell();
            measureHeader.textContent = "Measure";
            measureHeader.className = 'table-header-cell';
            measureHeader.style.width = `${categoryColumnWidth}px`;
            measureHeader.style.minWidth = `${categoryColumnWidth}px`;
            measureHeader.style.maxWidth = `${categoryColumnWidth}px`;
            applyRowSquash(measureHeader, headerRowHeight, headerFontSize, headerWordWrap);
            measureHeader.style.fontWeight = headerBold ? "bold" : "normal";
            measureHeader.style.fontStyle = headerItalic ? "italic" : "normal";
            measureHeader.style.textDecoration = headerUnderline ? "underline" : "none";
            measureHeader.style.fontFamily = headerFontFamily;
            measureHeader.style.color = headerTextColor;
            measureHeader.style.textAlign = headerAlignment;
            measureHeader.style.borderRight = vertBorderValue;
            measureHeader.style.backgroundColor = headerBgColor;
            measureHeader.style.overflow = "hidden";
            measureHeader.style.textOverflow = "ellipsis";
            measureHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
            if (headerWordWrap) {
                measureHeader.style.wordBreak = "break-word";
            }
            // Next headers are Category values (or just "Value" if no categories)
            if (hasCategories) {
                for (let i = 0; i < rowCount; i++) {
                    let catHeader = headerRow.insertCell();
                    catHeader.textContent = String(categories.values[i]);
                    catHeader.className = 'table-header-cell';
                    catHeader.style.width = `${valueColumnWidths[i]}px`;
                    catHeader.style.minWidth = `${valueColumnWidths[i]}px`;
                    catHeader.style.maxWidth = `${valueColumnWidths[i]}px`;
                    applyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                    catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                    catHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                    catHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                    catHeader.style.fontFamily = headerFontFamily;
                    catHeader.style.color = headerTextColor;
                    catHeader.style.textAlign = headerAlignment;
                    catHeader.style.borderRight = vertBorderValue;
                    catHeader.style.backgroundColor = headerBgColor;
                    catHeader.style.overflow = "hidden";
                    catHeader.style.textOverflow = "ellipsis";
                    catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                    if (headerWordWrap) {
                        catHeader.style.wordBreak = "break-word";
                    }
                }
            }
            else {
                let catHeader = headerRow.insertCell();
                catHeader.textContent = "Value";
                catHeader.className = 'table-header-cell';
                catHeader.style.width = `${columnWidth}px`;
                catHeader.style.minWidth = `${columnWidth}px`;
                catHeader.style.maxWidth = `${columnWidth}px`;
                applyRowSquash(catHeader, headerRowHeight, headerFontSize, headerWordWrap);
                catHeader.style.fontWeight = headerBold ? "bold" : "normal";
                catHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                catHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                catHeader.style.fontFamily = headerFontFamily;
                catHeader.style.color = headerTextColor;
                catHeader.style.textAlign = headerAlignment;
                catHeader.style.borderRight = vertBorderValue;
                catHeader.style.backgroundColor = headerBgColor;
                catHeader.style.overflow = "hidden";
                catHeader.style.textOverflow = "ellipsis";
                catHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    catHeader.style.wordBreak = "break-word";
                }
            }
            if (showTotalRow) {
                let totalHeader = headerRow.insertCell();
                totalHeader.textContent = "Total";
                totalHeader.className = 'table-header-cell';
                totalHeader.style.width = `${columnWidth}px`;
                totalHeader.style.minWidth = `${columnWidth}px`;
                totalHeader.style.maxWidth = `${columnWidth}px`;
                applyRowSquash(totalHeader, headerRowHeight, headerFontSize, headerWordWrap);
                totalHeader.style.fontWeight = headerBold ? "bold" : "normal";
                totalHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                totalHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                totalHeader.style.fontFamily = headerFontFamily;
                totalHeader.style.color = headerTextColor;
                totalHeader.style.textAlign = headerAlignment;
                totalHeader.style.borderRight = vertBorderValue;
                totalHeader.style.backgroundColor = headerBgColor;
                totalHeader.style.overflow = "hidden";
                totalHeader.style.textOverflow = "ellipsis";
                totalHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    totalHeader.style.wordBreak = "break-word";
                }
            }
            if (showTotalRow) {
                let totalHeader = headerRow.insertCell();
                totalHeader.textContent = "Total";
                totalHeader.className = 'table-header-cell';
                totalHeader.style.width = `${columnWidth}px`;
                totalHeader.style.minWidth = `${columnWidth}px`;
                totalHeader.style.maxWidth = `${columnWidth}px`;
                applyRowSquash(totalHeader, headerRowHeight, headerFontSize, headerWordWrap);
                totalHeader.style.fontWeight = headerBold ? "bold" : "normal";
                totalHeader.style.fontStyle = headerItalic ? "italic" : "normal";
                totalHeader.style.textDecoration = headerUnderline ? "underline" : "none";
                totalHeader.style.fontFamily = headerFontFamily;
                totalHeader.style.color = headerTextColor;
                totalHeader.style.textAlign = headerAlignment;
                totalHeader.style.borderRight = vertBorderValue;
                totalHeader.style.backgroundColor = headerBgColor;
                totalHeader.style.overflow = "hidden";
                totalHeader.style.textOverflow = "ellipsis";
                totalHeader.style.whiteSpace = headerWordWrap ? "normal" : "nowrap";
                if (headerWordWrap) {
                    totalHeader.style.wordBreak = "break-word";
                }
            }
            // Create Rows (each row is a Measure)
            values.forEach((valueColumn, measureIndex) => {
                let row = this.table.insertRow();
                row.className = 'table-data-row';
                row.style.borderBottom = horizBorderValue;
                const isEvenRow = measureIndex % 2 === 0;
                const rowHeight = isEvenRow ? valueRowHeight : alternateValueRowHeight;
                row.style.height = `${rowHeight}px`;
                const rowBgColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
                row.style.backgroundColor = rowBgColor;
                // Cell 1: Measure Name
                let measureNameCell = row.insertCell();
                measureNameCell.textContent = measureHeaders[measureIndex];
                measureNameCell.className = 'table-category-cell';
                measureNameCell.style.width = `${categoryColumnWidth}px`;
                measureNameCell.style.minWidth = `${categoryColumnWidth}px`;
                measureNameCell.style.maxWidth = `${categoryColumnWidth}px`;
                applyRowSquash(measureNameCell, rowHeight, cellFontSize, categoryWordWrap);
                measureNameCell.style.fontWeight = valueBold ? "bold" : "normal";
                measureNameCell.style.fontStyle = cellItalic ? "italic" : "normal";
                measureNameCell.style.textDecoration = cellUnderline ? "underline" : "none";
                measureNameCell.style.borderRight = vertBorderValue;
                measureNameCell.style.backgroundColor = rowBgColor;
                measureNameCell.style.color = defaultCategoryTextColor; // or some specific color
                measureNameCell.style.overflow = "hidden";
                measureNameCell.style.textOverflow = "ellipsis";
                measureNameCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                if (categoryWordWrap) {
                    measureNameCell.style.wordBreak = "break-word";
                }
                const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                const objects = valueColumn.source.objects || {};
                const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                let cellPositiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                let cellNegativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                const min = measureMins[measureIndex];
                const max = measureMaxs[measureIndex];
                const range = max - min;
                // Data Cells: Values for each category (or the 1 value if no categories)
                for (let i = 0; i < rowCount; i++) {
                    let cell = row.insertCell();
                    cell.style.position = "relative";
                    let cellTextColor = defaultMeasureTextColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.objects[i], { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                        if (cfColor)
                            cellTextColor = cfColor;
                        const cfPosColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.objects[i], { objectName: "dataBarsFormatting", propertyName: "positiveColor" });
                        if (cfPosColor) {
                            cellPositiveColor = cfPosColor;
                        }
                    }
                    let value = valueColumn.values[i];
                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });
                        const objects = valueColumn.source.objects || {};
                        const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        if (showDataBars) {
                            let cellPositiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                            let cellNegativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const min = measureMins[measureIndex];
                            const max = measureMaxs[measureIndex];
                            const range = max - min;
                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;
                            if (range > 0) {
                                if (numValue >= 0) {
                                    widthPct = (numValue / range) * 100;
                                    leftPct = ((0 - min) / range) * 100;
                                }
                                else {
                                    widthPct = (Math.abs(numValue) / range) * 100;
                                    leftPct = ((numValue - min) / range) * 100;
                                }
                            }
                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = `${topPct}%`;
                            dataBar.style.height = `${dataBarHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                            dataBar.style.backgroundColor = numValue >= 0 ? cellPositiveColor : cellNegativeColor;
                            dataBar.style.opacity = "0.6"; // semi-transparent so text is readable
                            dataBar.style.zIndex = "1";
                            cell.appendChild(dataBar);
                            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                            if (showMarker) {
                                let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                                let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_3__.getFillColor(valueColumn.objects[i], { objectName: "dataBarMarkers", propertyName: "markerColor" });
                                    if (cfMarkerColor) {
                                        cellMarkerColor = cfMarkerColor;
                                    }
                                }
                                let marker = document.createElement("div");
                                marker.style.position = "absolute";
                                marker.style.zIndex = "3";
                                let markerLeftPct = numValue >= 0 ? leftPct + widthPct : leftPct;
                                marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                marker.style.top = `calc(50% - ${markerSize / 2}px)`;
                                marker.style.width = `${markerSize}px`;
                                marker.style.height = `${markerSize}px`;
                                if (markerShape === "circle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.borderRadius = "50%";
                                }
                                else if (markerShape === "cross") {
                                    marker.style.backgroundColor = "transparent";
                                    let line1 = document.createElement("div");
                                    line1.style.position = "absolute";
                                    line1.style.backgroundColor = cellMarkerColor;
                                    line1.style.width = "100%";
                                    line1.style.height = "2px";
                                    line1.style.top = "calc(50% - 1px)";
                                    line1.style.transform = "rotate(45deg)";
                                    let line2 = document.createElement("div");
                                    line2.style.position = "absolute";
                                    line2.style.backgroundColor = cellMarkerColor;
                                    line2.style.width = "100%";
                                    line2.style.height = "2px";
                                    line2.style.top = "calc(50% - 1px)";
                                    line2.style.transform = "rotate(-45deg)";
                                    marker.appendChild(line1);
                                    marker.appendChild(line2);
                                }
                                else if (markerShape === "horizontalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.height = "2px";
                                    marker.style.top = "calc(50% - 1px)";
                                    marker.style.width = `${markerSize}px`;
                                }
                                else if (markerShape === "verticalLine") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    marker.style.width = "2px";
                                    marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                }
                                else if (markerShape === "semiCircle") {
                                    marker.style.backgroundColor = cellMarkerColor;
                                    // Draw semi circle pointing outwards
                                    if (numValue >= 0) {
                                        marker.style.borderTopRightRadius = `${markerSize}px`;
                                        marker.style.borderBottomRightRadius = `${markerSize}px`;
                                        marker.style.width = `${markerSize / 2}px`;
                                        marker.style.left = `calc(${markerLeftPct}%)`;
                                    }
                                    else {
                                        marker.style.borderTopLeftRadius = `${markerSize}px`;
                                        marker.style.borderBottomLeftRadius = `${markerSize}px`;
                                        marker.style.width = `${markerSize / 2}px`;
                                        marker.style.left = `calc(${markerLeftPct}% - ${markerSize / 2}px)`;
                                    }
                                }
                                cell.appendChild(marker);
                            }
                            let textDiv = document.createElement("div");
                            textDiv.style.position = "relative";
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            cell.appendChild(textDiv);
                        }
                        else {
                            cell.textContent = formattedValue;
                        }
                    }
                    else {
                        cell.textContent = '-';
                    }
                    cell.className = 'table-data-cell';
                    cell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    cell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    applyRowSquash(cell, rowHeight, cellFontSize, valueWordWrap);
                    cell.style.fontWeight = valueBold ? "bold" : "normal";
                    cell.style.fontStyle = cellItalic ? "italic" : "normal";
                    cell.style.textDecoration = cellUnderline ? "underline" : "none";
                    cell.style.borderRight = vertBorderValue;
                    cell.style.backgroundColor = rowBgColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    let specSettings = measureSettingsList[measureIndex];
                    let specRowBgColor = isEvenRow ?
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : rowBgColor) :
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : rowBgColor);
                    let specCellTextColor = isEvenRow ?
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) :
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);
                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : rowBgColor;
                    let effectiveColor = specSettings.applyToValues ? specCellTextColor : cellTextColor;
                    let efBold = specSettings.applyToValues && specSettings.bold !== undefined ? specSettings.bold : valueBold;
                    let efItalic = specSettings.applyToValues && specSettings.italic !== undefined ? specSettings.italic : cellItalic;
                    let efUnderline = specSettings.applyToValues && specSettings.underline !== undefined ? specSettings.underline : cellUnderline;
                    let efFontFamily = specSettings.applyToValues && specSettings.fontFamily !== undefined ? specSettings.fontFamily : cellFontFamily;
                    let efFontSize = specSettings.applyToValues && specSettings.fontSize !== undefined ? specSettings.fontSize : cellFontSize;
                    let efWordWrap = specSettings.applyToValues && specSettings.textWrap !== undefined ? specSettings.textWrap : valueWordWrap;
                    let effectiveAlign = specSettings.applyToValues && specSettings.alignment ? specSettings.alignment : "right";
                    cell.style.backgroundColor = effectiveBg;
                    cell.style.color = effectiveColor;
                    cell.style.fontWeight = efBold ? "bold" : "normal";
                    cell.style.fontStyle = efItalic ? "italic" : "normal";
                    cell.style.textDecoration = efUnderline ? "underline" : "none";
                    cell.style.fontFamily = efFontFamily;
                    cell.style.fontSize = `${efFontSize}px`;
                    cell.style.whiteSpace = efWordWrap ? "normal" : "nowrap";
                    cell.style.textAlign = effectiveAlign;
                    if (efWordWrap) { // and here
                        cell.style.wordBreak = "break-word";
                    }
                }
                // Add the Total column cell for this measure if enabled
                if (showTotalRow) {
                    let totalCell = row.insertCell();
                    let totalVal = totals[measureIndex];
                    totalCell.textContent = totalVal.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0
                    });
                    totalCell.className = 'table-data-cell';
                    totalCell.style.width = `${valueColumnWidths[measureIndex]}px`;
                    totalCell.style.minWidth = `${valueColumnWidths[measureIndex]}px`;
                    totalCell.style.maxWidth = `${valueColumnWidths[measureIndex]}px`;
                    applyRowSquash(totalCell, rowHeight, totalRowFontSize, totalRowWordWrap);
                    totalCell.style.fontWeight = totalRowBold ? "bold" : "normal";
                    totalCell.style.fontFamily = totalRowFontFamily;
                    totalCell.style.fontStyle = totalRowItalic ? "italic" : "normal";
                    // Note: totalRowUnderline is defined in table settings, so we append to it or replace.
                    // Let's keep totalRowUnderline overriding or adding to it.
                    // In original it just set underline or none, let's keep original totalRowUnderline.
                    totalCell.style.textDecoration = totalRowUnderline ? "underline" : "none";
                    totalCell.style.borderRight = `1px solid ${gridBorderColor}`;
                    totalCell.style.backgroundColor = totalRowBackgroundColor;
                    totalCell.style.color = totalRowTextColor;
                    totalCell.style.overflow = "hidden";
                    totalCell.style.textOverflow = "ellipsis";
                    totalCell.style.whiteSpace = totalRowWordWrap ? "normal" : "nowrap";
                    if (totalRowWordWrap) {
                        totalCell.style.wordBreak = "break-word";
                    }
                }
            });
        }
    }
}


/***/ }),

/***/ "./style/visual.less":
/*!***************************!*\
  !*** ./style/visual.less ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "powerbi-visuals-api":
/*!***********************!*\
  !*** external "null" ***!
  \***********************/
/***/ ((module) => {

module.exports = null;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./.tmp/precompile/visualPlugin.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/visual */ "./src/visual.ts");

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var timTableDD1AB490372C46B5A64605746E322F55_DEBUG = {
    name: 'timTableDD1AB490372C46B5A64605746E322F55_DEBUG',
    displayName: 'TimTable',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["timTableDD1AB490372C46B5A64605746E322F55_DEBUG"] = timTableDD1AB490372C46B5A64605746E322F55_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timTableDD1AB490372C46B5A64605746E322F55_DEBUG);

})();

timTableDD1AB490372C46B5A64605746E322F55_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzL2xpYi9kYXRhVmlld09iamVjdC5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzL2xpYi9kYXRhVmlld09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlscy9saWIvZGF0YVZpZXdXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9zdHlsZS92aXN1YWwubGVzcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL2V4dGVybmFsIHZhciBcIm51bGxcIiIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vLnRtcC9wcmVjb21waWxlL3Zpc3VhbFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICghb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBvYmplY3RbcHJvcGVydHlOYW1lXTtcbiAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xufVxuLyoqIEdldHMgdGhlIHNvbGlkIGNvbG9yIGZyb20gYSBmaWxsIHByb3BlcnR5IHVzaW5nIG9ubHkgYSBwcm9wZXJ0eU5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxsQ29sb3JCeVByb3BlcnR5TmFtZShvYmplY3QsIHByb3BlcnR5TmFtZSwgZGVmYXVsdENvbG9yKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIHByb3BlcnR5TmFtZSk7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnNvbGlkLmNvbG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YVZpZXdPYmplY3QuanMubWFwIiwiaW1wb3J0ICogYXMgRGF0YVZpZXdPYmplY3QgZnJvbSBcIi4vZGF0YVZpZXdPYmplY3RcIjtcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0L3Byb3BlcnR5IHBhaXIuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKCFvYmplY3RzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBEYXRhVmlld09iamVjdC5nZXRWYWx1ZShvYmplY3RzW3Byb3BlcnR5SWQub2JqZWN0TmFtZV0sIHByb3BlcnR5SWQucHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xufVxuLyoqIEdldHMgYW4gb2JqZWN0IGZyb20gb2JqZWN0cy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qob2JqZWN0cywgb2JqZWN0TmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tvYmplY3ROYW1lXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0c1tvYmplY3ROYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbn1cbi8qKiBHZXRzIHRoZSBzb2xpZCBjb2xvciBmcm9tIGEgZmlsbCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxsQ29sb3Iob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdENvbG9yKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkKTtcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuc29saWQuY29sb3I7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbW9uVmFsdWUob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0VmFsdWUpO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc29saWQuY29sb3I7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIHx8IHZhbHVlID09PSBudWxsXG4gICAgICAgIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhVmlld09iamVjdHMuanMubWFwIiwiLypcbiogIFBvd2VyIEJJIFZpc3VhbGl6YXRpb25zXG4qXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogIE1JVCBMaWNlbnNlXG4qXG4qICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlwiU29mdHdhcmVcIlwiKSwgdG8gZGVhbFxuKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKlxuKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICpBUyBJUyosIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiAgVEhFIFNPRlRXQVJFLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhVmlld1dpbGRjYXJkU2VsZWN0b3IoZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uKSB7XG4gICAgaWYgKGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbiA9IDAgLyogRGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uLkluc3RhbmNlc0FuZFRvdGFscyAqLztcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhVmlld1dpbGRjYXJkOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nT3B0aW9uOiBkYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuICAgIHJldHVybiBzZWxlY3Rvcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFWaWV3V2lsZGNhcmQuanMubWFwIiwiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSAoX2EgPSBkYXRhVmlld09iamVjdHMgPT09IG51bGwgfHwgZGF0YVZpZXdPYmplY3RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlld09iamVjdHNbb2JqZWN0TmFtZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVt0aGlzLm5hbWVdO1xuICAgICAgICB0aGlzLnZhbHVlID0gRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldFByb3BlcnR5VmFsdWUodGhpcywgbmV3VmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBbGlnbm1lbnRHcm91cCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJBbGlnbm1lbnRHcm91cFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5BbGlnbm1lbnRHcm91cCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1vZGU6IHRoaXMubW9kZSwgc3VwcG9ydHNOb1NlbGVjdGlvbjogdGhpcy5zdXBwb3J0c05vU2VsZWN0aW9uIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2ggZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVG9nZ2xlU3dpdGNoXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRvZ2dsZVN3aXRjaCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQ29sb3JQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQ29sb3JQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBkZWZhdWx0Q29sb3I6IHRoaXMuZGVmYXVsdENvbG9yLCBpc05vRmlsbEl0ZW1TdXBwb3J0ZWQ6IHRoaXMuaXNOb0ZpbGxJdGVtU3VwcG9ydGVkIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOdW1VcERvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTnVtVXBEb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk51bVVwRG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgTnVtVXBEb3duIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTbGlkZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2xpZGVyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRhdGVQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRGF0ZVBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLnBsYWNlaG9sZGVyS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5wbGFjZWhvbGRlcktleSkgOiB0aGlzLnBsYWNlaG9sZGVyLCB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtZXJnZVZhbHVlczogdGhpcy5tZXJnZVZhbHVlcywgZmlsdGVyVmFsdWVzOiB0aGlzLmZpbHRlclZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRHVyYXRpb25QaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHVyYXRpb25QaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHVyYXRpb25QaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVycm9yUmFuZ2VDb250cm9sIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkVycm9yUmFuZ2VDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkVycm9yUmFuZ2VDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGaWVsZFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGaWVsZFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GaWVsZFBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycywgYWxsb3dNdWx0aXBsZVZhbHVlczogdGhpcy5hbGxvd011bHRpcGxlVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0ZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dElucHV0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRJbnB1dCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFRleHRJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dEFyZWFcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dEFyZWEgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250UGlja2VyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFkaWVudEJhciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJHcmFkaWVudEJhclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5HcmFkaWVudEJhciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW1hZ2VVcGxvYWRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuSW1hZ2VVcGxvYWQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3RFZGl0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTGlzdEVkaXRvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5MaXN0RWRpdG9yICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWFkT25seVRleHQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiUmVhZE9ubHlUZXh0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlJlYWRPbmx5VGV4dCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhcGVNYXBTZWxlY3RvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTaGFwZU1hcFNlbGVjdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNoYXBlTWFwU2VsZWN0b3IgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3I6IHRoaXMuaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250Q29udHJvbCBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250Q29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250Q29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm9sZDogKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGl0YWxpYzogKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdW5kZXJsaW5lOiAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRGYW1pbHkuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmZvbnRTaXplLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm9sZCA/IHRoaXMuYm9sZC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuaXRhbGljID8gdGhpcy5pdGFsaWMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnVuZGVybGluZSA/IHRoaXMudW5kZXJsaW5lLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmZvbnRTaXplLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1hcmdpblBhZGRpbmcgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTWFyZ2luUGFkZGluZ1wiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5NYXJnaW5QYWRkaW5nICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20uZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMucmlnaHQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy50b3AuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib3R0b20uZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGVmdC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucmlnaHQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnRvcC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuYm90dG9tLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckl0ZW0gZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzLm1hcCIsImltcG9ydCB7IENvbXBvc2l0ZUNhcmQsIFNpbXBsZUNhcmQgfSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgPSBsb2NhbGl6YXRpb25NYW5hZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBmcm9tIG1ldGFkYXRhIGRhdGFWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVZpZXdzIG1ldGFkYXRhIGRhdGFWaWV3IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsXG4gICAgICovXG4gICAgcG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCh0eXBlQ2xhc3MsIGRhdGFWaWV3KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG5ldyB0eXBlQ2xhc3MoKTtcbiAgICAgICAgY29uc3QgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRpbmdNb2RlbCA9IHtcbiAgICAgICAgICAgIGNhcmRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbC5jYXJkc1xuICAgICAgICAgICAgLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKVxuICAgICAgICAgICAgLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDYXJkID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGlzcGxheU5hbWVLZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGlzcGxheU5hbWVLZXkpIDogY2FyZC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRlc2NyaXB0aW9uS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1aWQ6IGNhcmQubmFtZSArIFwiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NQYW5lOiBjYXJkLmFuYWx5dGljc1BhbmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXJkLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXJJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVySXRlbVVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2VzIGFuZCBhZGQgdGhlbSB0byBjdXJyZW50IGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjb250YWluZXJJdGVtLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0uc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRhaW5lci5jb250YWluZXJJdGVtcy5wdXNoKGZvcm1hdHRpbmdDb250YWluZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdHcm91cC5jb250YWluZXIgPSBmb3JtYXR0aW5nQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9ybWF0dGluZ0dyb3VwLmRpc3BsYXlOYW1lID09IHVuZGVmaW5lZCA/IGZvcm1hdHRpbmdDYXJkIDogZm9ybWF0dGluZ0dyb3VwKS50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nR3JvdXAuc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQucmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nTW9kZWwuY2FyZHMucHVzaChmb3JtYXR0aW5nQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGluZ01vZGVsO1xuICAgIH1cbiAgICBidWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXMgfSkge1xuICAgICAgICAvLyBGaWx0ZXIgc2xpY2VzIGJhc2VkIG9uIHRoZWlyIHZpc2liaWxpdHlcbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGNvbnN0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGxldCBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgICAgICBsZXQgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmICgoc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnR5cGUpID09PSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovICYmIHNsaWNlLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCJpbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5pbXBvcnQgeyBkYXRhVmlld1dpbGRjYXJkIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHB1YmxpYyBmb250ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIixcclxuICAgICAgICAgICAgdmFsdWU6IDEyXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9sZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2ZmZmZmZlwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFsdGVybmF0ZVRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIHRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmNWY1ZjVcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcInZhbHVlc1wiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlZhbHVlc1wiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtcclxuICAgICAgICB0aGlzLmZvbnQsIFxyXG4gICAgICAgIHRoaXMudGV4dENvbG9yLCBcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciwgXHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGVUZXh0Q29sb3IsIFxyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLCBcclxuICAgICAgICB0aGlzLnRleHRXcmFwXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmR7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInRhYmxlXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJUYWJsZVwiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbnB1YmxpYyBoZWFkZXJCb2xkID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaGVhZGVyQm9sZFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhlYWRlciBCb2xkXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVzVG9Sb3dzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic3dpdGNoVmFsdWVzVG9Sb3dzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3dpdGNoIHZhbHVlcyB0byByb3dzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeVdvcmRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiY2F0ZWdvcnlXb3JkV3JhcFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNhdGVnb3J5IFdvcmQgV3JhcFwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVJvd0hlaWdodFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlIFJvdyBIZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgUm93IEhlaWdodFwiLFxyXG4gICAgICAgIHZhbHVlOiAzMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdG90YWxSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ0b3RhbFJvd0hlaWdodFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRvdGFsIFJvdyBIZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFt0aGlzLnN3aXRjaFZhbHVlc1RvUm93cywgdGhpcy5jYXRlZ29yeVdvcmRXcmFwLCB0aGlzLnZhbHVlUm93SGVpZ2h0LCB0aGlzLmFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0LCB0aGlzLnRvdGFsUm93SGVpZ2h0XVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiVmFsdWUgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDYXRlZ29yeSBjb25kaXRpb25hbCBmb3JtYXR0aW5nXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdG9yOiBkYXRhVmlld1dpbGRjYXJkLmNyZWF0ZURhdGFWaWV3V2lsZGNhcmRTZWxlY3RvcihkYXRhVmlld1dpbGRjYXJkLkRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbi5JbnN0YW5jZXNBbmRUb3RhbHMpLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy50ZXh0Q29sb3JdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhcnNGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTpzdHJpbmcgPSBcIkRhdGEgQmFyc1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhQmFyTWFya2Vyc1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImRhdGFCYXJNYXJrZXJzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIEJhciBNYXJrZXJzXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3RhbHNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0b3RhbHNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlRvdGFsc1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaG93VG90YWxSb3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93VG90YWxSb3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IFRvdGFsIFJvd1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0b3RhbEJlaGF2aW9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxCZWhhdmlvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmUgU2VsZWN0aW9uXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiTWVhc3VyZVwiLCBkaXNwbGF5TmFtZTogXCJNZWFzdXJlXCIgfSxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIk1lYXN1cmVcIiwgZGlzcGxheU5hbWU6IFwiTWVhc3VyZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU3VtXCIsIGRpc3BsYXlOYW1lOiBcIlN1bVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXZlcmFnZVwiLCBkaXNwbGF5TmFtZTogXCJBdmVyYWdlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VudFwiLCBkaXNwbGF5TmFtZTogXCJDb3VudFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnQgRGlzdGluY3RcIiwgZGlzcGxheU5hbWU6IFwiQ291bnQgRGlzdGluY3RcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIk1heFwiLCBkaXNwbGF5TmFtZTogXCJNYXhcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIk1pblwiLCBkaXNwbGF5TmFtZTogXCJNaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZm9udCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvbGRcIixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2QwZDBkMFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFt0aGlzLnNob3dUb3RhbFJvdywgdGhpcy50b3RhbEJlaGF2aW9yLCB0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy50ZXh0V3JhcF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRsaW5lcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImhvcml6b250YWxHcmlkbGluZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIb3Jpem9udGFsIGdyaWRsaW5lc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBob3Jpem9udGFsR3JpZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZDBkMGQwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImhvcml6b250YWxHcmlkV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJXaWR0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImhvcml6b250YWxHcmlkVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSG9yaXpvbnRhbCBncmlkIHRyYW5zcGFyZW5jeSAoJSlcIixcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkbGluZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ2ZXJ0aWNhbEdyaWRsaW5lc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIGdyaWRsaW5lc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNkMGQwZDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEdyaWRXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZFdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkVHJhbnNwYXJlbmN5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmVydGljYWwgZ3JpZCB0cmFuc3BhcmVuY3kgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZ3JpZFwiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkdyaWRcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZGxpbmVzLFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRDb2xvcixcclxuICAgICAgICB0aGlzLmhvcml6b250YWxHcmlkV2lkdGgsXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeSxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZGxpbmVzLFxyXG4gICAgICAgIHRoaXMudmVydGljYWxHcmlkQ29sb3IsXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRXaWR0aCxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeVxyXG4gICAgXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5IZWFkZXJzU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgZm9udCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvbGRcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaXRhbGljXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzFlM2E4YVwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmZmZmZmZcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbGlnbm1lbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkFsaWdubWVudEdyb3VwKHtcclxuICAgICAgICBuYW1lOiBcImFsaWdubWVudFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhlYWRlciBhbGlnbm1lbnRcIixcclxuICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgbW9kZTogcG93ZXJiaS52aXN1YWxzLkFsaWdubWVudEdyb3VwTW9kZS5Ib3Jpem9uYWwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dEdyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dFwiLFxyXG4gICAgICAgIG5hbWU6IFwidGV4dFwiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuZm9udCwgdGhpcy50ZXh0Q29sb3IsIHRoaXMuYmFja2dyb3VuZENvbG9yLCB0aGlzLmFsaWdubWVudCwgdGhpcy50ZXh0V3JhcF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBoZWFkZXJSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJoZWFkZXJSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgcm93IGhlaWdodFwiLFxyXG4gICAgICAgIHZhbHVlOiAzNSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgb3B0aW9uc0dyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiT3B0aW9uc1wiLFxyXG4gICAgICAgIG5hbWU6IFwib3B0aW9uc1wiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuaGVhZGVyUm93SGVpZ2h0XVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiY29sdW1uSGVhZGVyc1wiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkNvbHVtbiBoZWFkZXJzXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgZ3JvdXBzOiBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXBbXSA9IFt0aGlzLnRleHRHcm91cCwgdGhpcy5vcHRpb25zR3JvdXBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWNpZmljQ29sdW1uU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgc2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFwcGx5VG9IZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhcHBseVRvSGVhZGVyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gaGVhZGVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYXBwbHlUb1RvdGFsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb1RvdGFsXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gdG90YWxcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhcHBseVRvVmFsdWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHZhbHVlc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhcHBseVNldHRpbmdzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBcHBseSBzZXR0aW5ncyB0b1wiLFxyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlTZXR0aW5nc1RvXCIsXHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5zZXJpZXMsIHRoaXMuYXBwbHlUb0hlYWRlciwgdGhpcy5hcHBseVRvVG90YWwsIHRoaXMuYXBwbHlUb1ZhbHVlc11cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBmb250ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIixcclxuICAgICAgICAgICAgdmFsdWU6IDEyXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9sZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDBiOGQ0XCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhbHRlcm5hdGVUZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSB0ZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmNWY1ZjVcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYWxpZ25tZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BbGlnbm1lbnRHcm91cCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbm1lbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbGlnbm1lbnRcIixcclxuICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgbW9kZTogcG93ZXJiaS52aXN1YWxzLkFsaWdubWVudEdyb3VwTW9kZS5Ib3Jpem9uYWwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgZGlzcGxheVVuaXRzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BdXRvRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZGlzcGxheVVuaXRzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRGlzcGxheSB1bml0c1wiLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGRlY2ltYWxQbGFjZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkZWNpbWFsUGxhY2VzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWUgZGVjaW1hbCBwbGFjZXNcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZXNcIixcclxuICAgICAgICBuYW1lOiBcInNwZWNpZmljVmFsdWVzXCIsIC8vIE5PVEU6IHJlbmFtZWQgdG8gc3BlY2lmaWNWYWx1ZXMgdG8gYXZvaWQgY2xhc2ggd2l0aCBnbG9iYWwgJ3ZhbHVlcycgb2JqZWN0XHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5mb250LCB0aGlzLnRleHRDb2xvciwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHRoaXMuYWx0ZXJuYXRlVGV4dENvbG9yLCB0aGlzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuZGlzcGxheVVuaXRzLCB0aGlzLmRlY2ltYWxQbGFjZXMsIHRoaXMudGV4dFdyYXBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJzcGVjaWZpY0NvbHVtblwiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlNwZWNpZmljIGNvbHVtblwiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGdyb3VwczogZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwW10gPSBbdGhpcy5hcHBseVNldHRpbmdzR3JvdXAsIHRoaXMudmFsdWVzR3JvdXBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uV2lkdGhTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJjb2x1bW5XaWR0aFwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiQ29sdW1uIFdpZHRoXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlDb2x1bW5XaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImNhdGVnb3J5Q29sdW1uV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDYXRlZ29yeSBDb2x1bW4gV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMTUwXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWxpZ25lZENvbHVtbnMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbmVkQ29sdW1uc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsaWduZWQgY29sdW1uc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVDb2x1bW5XaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZhbHVlQ29sdW1uV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZSBDb2x1bW4gV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMTAwXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW3RoaXMuY2F0ZWdvcnlDb2x1bW5XaWR0aCwgdGhpcy5hbGlnbmVkQ29sdW1ucywgdGhpcy52YWx1ZUNvbHVtbldpZHRoXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwge1xyXG4gICAgcHVibGljIHZhbHVlc01lbnU6IFZhbHVlc1NldHRpbmdzID0gbmV3IFZhbHVlc1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgc3BlY2lmaWNDb2x1bW46IFNwZWNpZmljQ29sdW1uU2V0dGluZ3MgPSBuZXcgU3BlY2lmaWNDb2x1bW5TZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGNvbHVtbkhlYWRlcnM6IENvbHVtbkhlYWRlcnNTZXR0aW5ncyA9IG5ldyBDb2x1bW5IZWFkZXJzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyB0YWJsZTogVGFibGVTZXR0aW5ncyA9IG5ldyBUYWJsZVNldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmc6IENhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgQ2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nOiBWYWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IFZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBkYXRhQmFyc0Zvcm1hdHRpbmc6IERhdGFCYXJzRm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IERhdGFCYXJzRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZGF0YUJhck1hcmtlcnM6IERhdGFCYXJNYXJrZXJzU2V0dGluZ3MgPSBuZXcgRGF0YUJhck1hcmtlcnNTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHRvdGFsczogVG90YWxzU2V0dGluZ3MgPSBuZXcgVG90YWxzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBncmlkTWVudTogR3JpZFNldHRpbmdzID0gbmV3IEdyaWRTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aFNldHRpbmdzID0gbmV3IENvbHVtbldpZHRoU2V0dGluZ3MoKTtcclxuICAgIFxyXG4gICAgcHVibGljIGNhcmRzOiBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkW10gPSBbdGhpcy5zcGVjaWZpY0NvbHVtbiwgdGhpcy5jb2x1bW5IZWFkZXJzLCB0aGlzLnZhbHVlc01lbnUsIHRoaXMudGFibGUsIHRoaXMuY29sdW1uV2lkdGgsIHRoaXMudG90YWxzLCB0aGlzLmdyaWRNZW51LCB0aGlzLmNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nLCB0aGlzLnZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nLCB0aGlzLmRhdGFCYXJzRm9ybWF0dGluZywgdGhpcy5kYXRhQmFyTWFya2Vyc107XHJcbn0iLCIvKlxyXG4qICBQb3dlciBCSSBWaXN1YWwgQ0xJXHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cclxuKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiAgTUlUIExpY2Vuc2VcclxuKlxyXG4qICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXHJcbiogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4qICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuKlxyXG4qICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4qICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKlxyXG4qICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4qICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4qICBUSEUgU09GVFdBUkUuXHJcbiovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFwiLi8uLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IERhdGFWaWV3ID0gcG93ZXJiaS5EYXRhVmlldztcclxuaW1wb3J0IHsgVmlzdWFsU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLCBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5pbXBvcnQgeyBkYXRhVmlld09iamVjdHMgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWwgaW1wbGVtZW50cyBJVmlzdWFsIHtcclxuICAgIHByaXZhdGUgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U6IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHZpc3VhbFNldHRpbmdzOiBWaXN1YWxTZXR0aW5ncztcclxuICAgIHByaXZhdGUgZGF0YVZpZXc6IERhdGFWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YWJsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhYmxlLWNvbnRhaW5lclwiO1xyXG4gICAgICAgIG9wdGlvbnMuZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRoaXMudGFibGUuY2xhc3NOYW1lID0gJ3BiaS10YWJsZSc7XHJcbiAgICAgICAgdGFibGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50YWJsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSA9IG5ldyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy52aXN1YWxTZXR0aW5ncyA9IG5ldyBWaXN1YWxTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmJ1aWxkRm9ybWF0dGluZ01vZGVsKHRoaXMudmlzdWFsU2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUob3B0aW9uczogVmlzdWFsVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGFWaWV3cyAmJiBvcHRpb25zLmRhdGFWaWV3c1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc3VhbFNldHRpbmdzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLnBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwoVmlzdWFsU2V0dGluZ3MsIG9wdGlvbnMuZGF0YVZpZXdzWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdOyAvLyBVcGRhdGUgZGF0YVZpZXcgaGVyZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aFNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5jb2x1bW5XaWR0aDtcclxuICAgICAgICBjb25zdCB0YWJsZVNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy50YWJsZTtcclxuICAgICAgICBjb25zdCB2YWx1ZXNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MudmFsdWVzTWVudTtcclxuICAgICAgICBjb25zdCBjZWxsSXRhbGljID0gdmFsdWVzU2V0dGluZ3MuZm9udC5pdGFsaWM/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNlbGxVbmRlcmxpbmUgPSB2YWx1ZXNTZXR0aW5ncy5mb250LnVuZGVybGluZT8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbG9yID0gdmFsdWVzU2V0dGluZ3MudGV4dENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFsdGVybmF0ZVRleHRDb2xvciA9IHZhbHVlc1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjZWxsRm9udEZhbWlseSA9IHZhbHVlc1NldHRpbmdzLmZvbnQuZm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbHNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MudG90YWxzO1xyXG4gICAgICAgIGNvbnN0IHNob3dUb3RhbFJvdyA9IHRvdGFsc1NldHRpbmdzLnNob3dUb3RhbFJvdy52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0l0YWxpYyA9IHRvdGFsc1NldHRpbmdzLmZvbnQuaXRhbGljPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1dvcmRXcmFwID0gdG90YWxzU2V0dGluZ3MudGV4dFdyYXAudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dGb250U2l6ZSA9IHRvdGFsc1NldHRpbmdzLmZvbnQuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dGb250RmFtaWx5ID0gdG90YWxzU2V0dGluZ3MuZm9udC5mb250RmFtaWx5LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93VGV4dENvbG9yID0gdG90YWxzU2V0dGluZ3MudGV4dENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q29sdW1uV2lkdGggPSBjb2x1bW5XaWR0aFNldHRpbmdzLmNhdGVnb3J5Q29sdW1uV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlXb3JkV3JhcCA9IHRhYmxlU2V0dGluZ3MuY2F0ZWdvcnlXb3JkV3JhcC52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZVdvcmRXcmFwID0gdmFsdWVzU2V0dGluZ3MudGV4dFdyYXAudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY29sdW1uSGVhZGVyc1NldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5jb2x1bW5IZWFkZXJzO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcldvcmRXcmFwID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLnRleHRXcmFwPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBjb2x1bW5XaWR0aCA9IGNvbHVtbldpZHRoU2V0dGluZ3MudmFsdWVDb2x1bW5XaWR0aC52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJSb3dIZWlnaHQgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuaGVhZGVyUm93SGVpZ2h0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlUm93SGVpZ2h0ID0gdGFibGVTZXR0aW5ncy52YWx1ZVJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodCA9IHRhYmxlU2V0dGluZ3MuYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dIZWlnaHQgPSB0YWJsZVNldHRpbmdzLnRvdGFsUm93SGVpZ2h0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckZvbnRTaXplID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmZvbnQuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQm9sZCA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmJvbGQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySXRhbGljID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmZvbnQuaXRhbGljLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclVuZGVybGluZSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LnVuZGVybGluZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJGb250RmFtaWx5ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmZvbnQuZm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJBbGlnbm1lbnQgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuYWxpZ25tZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNlbGxGb250U2l6ZSA9IHZhbHVlc1NldHRpbmdzLmZvbnQuZm9udFNpemUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVCb2xkID0gdmFsdWVzU2V0dGluZ3MuZm9udC5ib2xkPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0JvbGQgPSB0b3RhbHNTZXR0aW5ncy5mb250LmJvbGQ/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93VW5kZXJsaW5lID0gdG90YWxzU2V0dGluZ3MuZm9udC51bmRlcmxpbmU/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHZhbHVlc1NldHRpbmdzLmJhY2tncm91bmRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQmFja2dyb3VuZENvbG9yID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmJhY2tncm91bmRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJUZXh0Q29sb3IgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MudGV4dENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93QmFja2dyb3VuZENvbG9yID0gdG90YWxzU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGdyaWRTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuZ3JpZE1lbnU7XHJcbiAgICAgICAgY29uc3QgZ3JpZEJvcmRlckNvbG9yID0gZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDRlNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5jYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZztcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2F0ZWdvcnlUZXh0Q29sb3IgPSBjYXRlZ29yeUNGU2V0dGluZ3MudGV4dENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ0ZTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MudmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmc7XHJcbiAgICAgICAgdmFsdWVDRlNldHRpbmdzLnNsaWNlcyA9IFtdOyAvLyBXaWxsIGJlIHBvcHVsYXRlZCBkeW5hbWljYWxseSBwZXItbWVhc3VyZVxyXG5cclxuICAgICAgICB0b3RhbHNTZXR0aW5ncy5zbGljZXMgPSBbXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnNob3dUb3RhbFJvdyxcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MuZm9udCxcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MudGV4dENvbG9yLFxyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnRleHRXcmFwXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUJhcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuZGF0YUJhcnNGb3JtYXR0aW5nO1xyXG4gICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2xpY2VzID0gW107IC8vIFdpbGwgYmUgcG9wdWxhdGVkIGR5bmFtaWNhbGx5IHBlci1tZWFzdXJlXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFCYXJNYXJrZXJzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmRhdGFCYXJNYXJrZXJzO1xyXG4gICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzID0gW107IC8vIFdpbGwgYmUgcG9wdWxhdGVkIGR5bmFtaWNhbGx5IHBlci1tZWFzdXJlXHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGNvbHVtbldpZHRoIHNsaWNlczogYmFzZSBzbGljZXMgYWx3YXlzIHNob3duLCBwZXItbWVhc3VyZSBzbGljZXMgYWRkZWQgZHluYW1pY2FsbHkgd2hlbiBub3QgYWxpZ25lZFxyXG4gICAgICAgIGlmIChjb2x1bW5XaWR0aFNldHRpbmdzLmFsaWduZWRDb2x1bW5zLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3Muc2xpY2VzID0gW2NvbHVtbldpZHRoU2V0dGluZ3MuY2F0ZWdvcnlDb2x1bW5XaWR0aCwgY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1ucywgY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2x1bW5XaWR0aFNldHRpbmdzLnNsaWNlcyA9IFtjb2x1bW5XaWR0aFNldHRpbmdzLmNhdGVnb3J5Q29sdW1uV2lkdGgsIGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnNdO1xyXG4gICAgICAgICAgICAvLyBQZXItbWVhc3VyZSB3aWR0aCBzbGljZXMgd2lsbCBiZSBhZGRlZCBpbiB0aGUgdmFsdWVzLmZvckVhY2ggbG9vcCBiZWxvd1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgaGV4IHRvIHJnYmFcclxuICAgICAgICBjb25zdCBhcHBseVRyYW5zcGFyZW5jeSA9IChoZXg6IHN0cmluZywgdHJhbnNwYXJlbmN5UGN0OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWhleCkgcmV0dXJuIGhleDtcclxuICAgICAgICAgICAgbGV0IGFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgMSAtICh0cmFuc3BhcmVuY3lQY3QgLyAxMDApKSk7XHJcbiAgICAgICAgICAgIGlmIChoZXguc3RhcnRzV2l0aChcIiNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGhleFsyXSArIGhleFsyXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChoZXhbM10gKyBoZXhbM10sIDE2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChoZXhbMV0gKyBoZXhbMl0sIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBnID0gcGFyc2VJbnQoaGV4WzNdICsgaGV4WzRdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KGhleFs1XSArIGhleFs2XSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YWxwaGF9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhleDsgLy8gZmFsbGJhY2sgaWYgbm90IGhleFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhvcml6TGluZXMgPSBncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRsaW5lcy52YWx1ZTtcclxuICAgICAgICBjb25zdCBob3JpekNvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkQ29sb3IudmFsdWUudmFsdWUsIGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgaG9yaXpXaWR0aCA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZFdpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhvcml6Qm9yZGVyVmFsdWUgPSBob3JpekxpbmVzID8gYCR7aG9yaXpXaWR0aH1weCBzb2xpZCAke2hvcml6Q29sb3J9YCA6ICdub25lJztcclxuICAgICAgICBjb25zdCBob3JpekJvcmRlcjJ4VmFsdWUgPSBob3JpekxpbmVzID8gYCR7aG9yaXpXaWR0aCAqIDJ9cHggc29saWQgJHtob3JpekNvbG9yfWAgOiAnbm9uZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRMaW5lcyA9IGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRsaW5lcy52YWx1ZTtcclxuICAgICAgICBjb25zdCB2ZXJ0Q29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeShncmlkU2V0dGluZ3MudmVydGljYWxHcmlkQ29sb3IudmFsdWUudmFsdWUsIGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRUcmFuc3BhcmVuY3kudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRXaWR0aCA9IGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRXaWR0aC52YWx1ZTtcclxuICAgICAgICBjb25zdCB2ZXJ0Qm9yZGVyVmFsdWUgPSB2ZXJ0TGluZXMgPyBgJHt2ZXJ0V2lkdGh9cHggc29saWQgJHt2ZXJ0Q29sb3J9YCA6ICdub25lJztcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0ZXh0IGNvbG9yIGZvciBhIGNhdGVnb3J5IHJvdywgc3VwcG9ydGluZyBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdE51bWJlciA9IChudW06IG51bWJlciwgdW5pdHM6IG51bWJlciwgZGVjaW1hbHM6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXZpc29yID0gMTtcclxuICAgICAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh1bml0cyA9PT0gMCkgeyAvLyBBdXRvXHJcbiAgICAgICAgICAgICAgICBsZXQgYWJzTnVtID0gTWF0aC5hYnMobnVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChhYnNOdW0gPj0gMTAwMDAwMDAwMDAwMCkgeyBkaXZpc29yID0gMTAwMDAwMDAwMDAwMDsgc3VmZml4ID0gXCJUXCI7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFic051bSA+PSAxMDAwMDAwMDAwKSB7IGRpdmlzb3IgPSAxMDAwMDAwMDAwOyBzdWZmaXggPSBcImJuXCI7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFic051bSA+PSAxMDAwMDAwKSB7IGRpdmlzb3IgPSAxMDAwMDAwOyBzdWZmaXggPSBcIk1cIjsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJzTnVtID49IDEwMDApIHsgZGl2aXNvciA9IDEwMDA7IHN1ZmZpeCA9IFwiS1wiOyB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZpc29yID0gdW5pdHM7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdHMgPT09IDEwMDApIHN1ZmZpeCA9IFwiS1wiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDApIHN1ZmZpeCA9IFwiTVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDApIHN1ZmZpeCA9IFwiYm5cIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwMDAwMDAwKSBzdWZmaXggPSBcIlRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChudW0gLyBkaXZpc29yKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzXHJcbiAgICAgICAgICAgIH0pICsgc3VmZml4O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhdGVnb3J5VGV4dENvbG9yID0gKHJvd0luZGV4OiBudW1iZXIsIGRhdGFWaWV3OiBEYXRhVmlldyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Lm9iamVjdHMgJiYgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q2F0ZWdvcnlUZXh0Q29sb3I7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFwcGx5IHNxdWFzaGluZyByb3cgaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgYXBwbHlSb3dTcXVhc2ggPSAoY2VsbDogSFRNTEVsZW1lbnQsIHJvd0hlaWdodDogbnVtYmVyLCBmb250U2l6ZTogbnVtYmVyLCB3b3JkV3JhcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93SGVpZ2h0IDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IGAke01hdGgubWluKGZvbnRTaXplLCBNYXRoLm1heCg4LCByb3dIZWlnaHQgLSA2KSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wYWRkaW5nID0gXCJcIjsgLy8gZmFsbGJhY2sgdG8gQ1NTIHBhZGRpbmdcclxuICAgICAgICAgICAgICAgIGlmICghd29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmxpbmVIZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmxpbmVIZWlnaHQgPSBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXBwbHlWZXJ0aWNhbEdyaWRCb3JkZXIgPSAoY2VsbDogSFRNTEVsZW1lbnQsIGlzTGFzdENlbGw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0xhc3RDZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXBwbHlUb3RhbFJvd1N0eWxlcyA9IChjZWxsOiBIVE1MRWxlbWVudCwgd2lkdGg6IG51bWJlciwgd29yZFdyYXA6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgdG90YWxSb3dIZWlnaHQsIHRvdGFsUm93Rm9udFNpemUsIHdvcmRXcmFwKTtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdG90YWxSb3dCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gdG90YWxSb3dVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udEZhbWlseSA9IHRvdGFsUm93Rm9udEZhbWlseTtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSB0b3RhbFJvd0l0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvdGFsUm93QmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gd29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgaWYgKHdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByb3csIHN1cHBvcnRpbmcgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1xyXG4gICAgICAgIGNvbnN0IGdldFJvd0JhY2tncm91bmRDb2xvciA9IChyb3dJbmRleDogbnVtYmVyLCBpc0V2ZW5Sb3c6IGJvb2xlYW4sIGRhdGFWaWV3OiBEYXRhVmlldyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENvbG9yUHJvcCA9IGlzRXZlblJvdyA/IFwiYmFja2dyb3VuZENvbG9yXCIgOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSBpc0V2ZW5Sb3cgPyBiYWNrZ3JvdW5kQ29sb3IgOiBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcyAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5vYmplY3RzICYmIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5vYmplY3RzW3Jvd0luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInRhYmxlXCIsIHByb3BlcnR5TmFtZTogdGFyZ2V0Q29sb3JQcm9wIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCByb3cgYmFja2dyb3VuZCBjb2xvciwgc3VwcG9ydGluZyBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcbiAgICAgICAgd2hpbGUgKHRoaXMudGFibGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnJlbW92ZUNoaWxkKHRoaXMudGFibGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucy5kYXRhVmlld3MgfHwgb3B0aW9ucy5kYXRhVmlld3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIk5vIGRhdGEgYXZhaWxhYmxlXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhVmlldzogRGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuXHJcbiAgICAgICAgbGV0IGhhc0NhdGVnb3JpZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IGhhc0NhdGVnb3JpZXMgPyBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdIDogbnVsbDtcclxuICAgICAgICBsZXQgdmFsdWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzID8gZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZXMgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJObyBkYXRhIGF2YWlsYWJsZVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzd2l0Y2hWYWx1ZXNUb1Jvd3MgPSB0YWJsZVNldHRpbmdzLnN3aXRjaFZhbHVlc1RvUm93cz8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gaGFzQ2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLnZhbHVlcyA/IGNhdGVnb3JpZXMudmFsdWVzLmxlbmd0aCA6ICh2YWx1ZXNbMF0udmFsdWVzID8gdmFsdWVzWzBdLnZhbHVlcy5sZW5ndGggOiAxKTtcclxuXHJcbiAgICAgICAgLy8gUHJlLXByb2Nlc3MgbWVhc3VyZSBzZXR0aW5ncyB0byBwb3B1bGF0ZSBmb3JtYXR0aW5nIG1vZGVsIHByb3Blcmx5XHJcbiAgICAgICAgbGV0IG1lYXN1cmVIZWFkZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIFxyXG5pbnRlcmZhY2UgTWVhc3VyZVNwZWNpZmljU2V0dGluZ3Mge1xyXG4gICAgdGV4dENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGFsdGVybmF0ZVRleHRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhbGlnbm1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGFwcGx5VG9IZWFkZXI6IGJvb2xlYW47XHJcbiAgICBhcHBseVRvVmFsdWVzOiBib29sZWFuO1xyXG4gICAgYXBwbHlUb1RvdGFsOiBib29sZWFuO1xyXG4gICAgZGlzcGxheVVuaXRzOiBudW1iZXI7XHJcbiAgICBkZWNpbWFsUGxhY2VzOiBudW1iZXI7XHJcbiAgICBmb250RmFtaWx5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBmb250U2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgYm9sZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIGl0YWxpYzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHVuZGVybGluZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHRleHRXcmFwOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG4gICAgICAgICAgbGV0IG1lYXN1cmVTZXR0aW5nc0xpc3Q6IE1lYXN1cmVTcGVjaWZpY1NldHRpbmdzW10gPSBbXTtcclxuICAgICAgICAgIGxldCB2YWx1ZUNvbHVtbldpZHRoczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWVDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc3BlY09iaiA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzPy5zcGVjaWZpY0NvbHVtbjtcclxuICAgICAgICAgICAgICBsZXQgc2V0dGluZ3M6IE1lYXN1cmVTcGVjaWZpY1NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImJhY2tncm91bmRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0ZVRleHRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I6IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWxpZ25tZW50XCIgfSwgdW5kZWZpbmVkKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGFwcGx5VG9IZWFkZXI6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhcHBseVRvSGVhZGVyXCIgfSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgIGFwcGx5VG9WYWx1ZXM6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhcHBseVRvVmFsdWVzXCIgfSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgIGFwcGx5VG9Ub3RhbDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9Ub3RhbFwiIH0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5VW5pdHM6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkaXNwbGF5VW5pdHNcIiB9LCAwKSxcclxuICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlczogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRlY2ltYWxQbGFjZXNcIiB9LCAxKSxcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRGYW1pbHlcIiB9LCB1bmRlZmluZWQpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJmb250U2l6ZVwiIH0sIHVuZGVmaW5lZCkgYXMgbnVtYmVyIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBib2xkOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYm9sZFwiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgaXRhbGljOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiaXRhbGljXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICB1bmRlcmxpbmU6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ1bmRlcmxpbmVcIiB9LCB1bmRlZmluZWQpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dFdyYXBcIiB9LCB1bmRlZmluZWQpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIG1lYXN1cmVTZXR0aW5nc0xpc3QucHVzaChzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxheU5hbWUgPSB2YWx1ZUNvbHVtbi5zb3VyY2UuZGlzcGxheU5hbWUgfHwgYE1lYXN1cmUgJHttZWFzdXJlSGVhZGVycy5sZW5ndGggKyAxfWA7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXJzLnB1c2goZGlzcGxheU5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeU5hbWUgPSB2YWx1ZUNvbHVtbi5zb3VyY2UucXVlcnlOYW1lO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1ucy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVDb2x1bW5XaWR0aHMucHVzaChjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGgudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpY1dpZHRoID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5XaWR0aFwiLCBwcm9wZXJ0eU5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoLnZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVDb2x1bW5XaWR0aHMucHVzaChzcGVjaWZpY1dpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgcGVyLW1lYXN1cmUgd2lkdGggc2xpY2Ugd2l0aCBzZWxlY3RvciBzbyBQb3dlciBCSSBwZXJzaXN0cyBpdCBwZXItbWVhc3VyZVxyXG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWx1ZUNvbHVtbldpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgV2lkdGhcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3BlY2lmaWNXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBkeW5hbWljIHNldHRpbmdzIHNsaWNlIGZvciB0aGlzIG1lYXN1cmVcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YWx1ZUNGU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgVGV4dCBDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEYXRhIGJhcnMgc2V0dGluZ3NcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBzaG93RGF0YUJhcnMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJwb3NpdGl2ZUNvbG9yXCIgfSwgXCIjMzFiNmZkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJuZWdhdGl2ZUNvbG9yXCIgfSwgXCIjZDk2NTcwXCIpO1xyXG5cclxuICAgICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dEYXRhQmFyc1wiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgU2hvdyBEYXRhIEJhcnNcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzaG93RGF0YUJhcnMsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaG93RGF0YUJhcnMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwb3NpdGl2ZUNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgUG9zaXRpdmUgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyB2YWx1ZTogcG9zaXRpdmVDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmVnYXRpdmVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE5lZ2F0aXZlIENvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IG5lZ2F0aXZlQ29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG4gICAgICAgICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkYXRhQmFySGVpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgRGF0YSBCYXIgSGVpZ2h0ICglKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhQmFySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERhdGEgYmFyIG1hcmtlcnMgc2V0dGluZ3NcclxuICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcInNob3dNYXJrZXJcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGxldCBtYXJrZXJTaGFwZVJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2hhcGVcIiB9LCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGUgPSB0eXBlb2YgbWFya2VyU2hhcGVSYXcgPT09IFwic3RyaW5nXCIgPyBtYXJrZXJTaGFwZVJhdyA6IChtYXJrZXJTaGFwZVJhdy52YWx1ZSB8fCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNpemVcIiB9LCAxMCk7XHJcblxyXG4gICAgICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd01hcmtlclwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgU2hvdyBNYXJrZXJcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzaG93TWFya2VyLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvd01hcmtlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGVJdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcImNyb3NzXCIsIGRpc3BsYXlOYW1lOiBcIkNyb3NzXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcImNpcmNsZVwiLCBkaXNwbGF5TmFtZTogXCJDaXJjbGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiaG9yaXpvbnRhbExpbmVcIiwgZGlzcGxheU5hbWU6IFwiSG9yaXpvbnRhbCBMaW5lXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcInZlcnRpY2FsTGluZVwiLCBkaXNwbGF5TmFtZTogXCJWZXJ0aWNhbCBMaW5lXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcInNlbWlDaXJjbGVcIiwgZGlzcGxheU5hbWU6IFwiU2VtaSBDaXJjbGVcIiB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNoYXBlSXRlbSA9IG1hcmtlclNoYXBlSXRlbXMuZmluZCh4ID0+IHgudmFsdWUgPT09IG1hcmtlclNoYXBlKSB8fCBtYXJrZXJTaGFwZUl0ZW1zWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2VyU2hhcGVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBNYXJrZXIgU2hhcGVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudFNoYXBlSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogbWFya2VyU2hhcGVJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXJrZXJDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE1hcmtlciBDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHZhbHVlOiBtYXJrZXJDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtlclNpemVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBNYXJrZXIgU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtYXJrZXJTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbGV0IHRvdGFsQmVoYXZpb3JSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwidG90YWxzXCIsIHByb3BlcnR5TmFtZTogXCJ0b3RhbEJlaGF2aW9yXCIgfSwgXCJTdW1cIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgdG90YWxCZWhhdmlvclZhbCA9IHR5cGVvZiB0b3RhbEJlaGF2aW9yUmF3ID09PSBcInN0cmluZ1wiID8gdG90YWxCZWhhdmlvclJhdyA6ICh0b3RhbEJlaGF2aW9yUmF3LnZhbHVlIHx8IFwiU3VtXCIpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCB0b3RhbEJlaGF2aW9ySXRlbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiTWVhc3VyZVwiLCBkaXNwbGF5TmFtZTogXCJNZWFzdXJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJTdW1cIiwgZGlzcGxheU5hbWU6IFwiU3VtXCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJBdmVyYWdlXCIsIGRpc3BsYXlOYW1lOiBcIkF2ZXJhZ2VcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIkNvdW50XCIsIGRpc3BsYXlOYW1lOiBcIkNvdW50XCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VudCBEaXN0aW5jdFwiLCBkaXNwbGF5TmFtZTogXCJDb3VudCBEaXN0aW5jdFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiTWF4XCIsIGRpc3BsYXlOYW1lOiBcIk1heFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiTWluXCIsIGRpc3BsYXlOYW1lOiBcIk1pblwiIH1cclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCZWhhdmlvckl0ZW0gPSB0b3RhbEJlaGF2aW9ySXRlbXMuZmluZCh4ID0+IHgudmFsdWUgPT09IHRvdGFsQmVoYXZpb3JWYWwpIHx8IHRvdGFsQmVoYXZpb3JJdGVtc1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgdG90YWxzU2V0dGluZ3Muc2xpY2VzLnNwbGljZShtZWFzdXJlSGVhZGVycy5sZW5ndGgsIDAsIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b3RhbEJlaGF2aW9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE1lYXN1cmUgU2VsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50QmVoYXZpb3JJdGVtLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtczogdG90YWxCZWhhdmlvckl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBQb3B1bGF0ZSBzcGVjaWZpY0NvbHVtbiBzZXJpZXMgZHJvcGRvd24gd2l0aCBhbGwgbWVhc3VyZSBjb2x1bW5zXHJcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbHVtblNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5zcGVjaWZpY0NvbHVtbjtcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLml0ZW1zID0gbWVhc3VyZUhlYWRlcnMubWFwKG5hbWUgPT4gKHsgdmFsdWU6IG5hbWUsIGRpc3BsYXlOYW1lOiBuYW1lIH0pKTtcclxuICAgICAgICAgIC8vIFJlYWQgcGVyc2lzdGVkIHNlcmllcyB2YWx1ZSBmcm9tIGRhdGFWaWV3IG1ldGFkYXRhIG9iamVjdHNcclxuICAgICAgICAgIGNvbnN0IHBlcnNpc3RlZFNlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInNlcmllc1wiIH0sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlZEl0ZW0gPSBwZXJzaXN0ZWRTZXJpZXNcclxuICAgICAgICAgICAgICA/IHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLml0ZW1zLmZpbmQoaSA9PiBpLnZhbHVlID09PSBwZXJzaXN0ZWRTZXJpZXMpXHJcbiAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMudmFsdWUgPSBtYXRjaGVkSXRlbSB8fCBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtc1swXSB8fCB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9O1xyXG5cclxuICAgICAgICAgIC8vIENvbXB1dGUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkYXRhIGJhcnMgQU5EIENhbGN1bGF0ZSB0b3RhbHMgYmFzZWQgb24gc2VsZWN0aW9uXHJcbiAgICAgICAgICBsZXQgbWVhc3VyZU1pbnM6IG51bWJlcltdID0gbmV3IEFycmF5KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgICAgICAgICBsZXQgbWVhc3VyZU1heHM6IG51bWJlcltdID0gbmV3IEFycmF5KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgICAgICAgICBsZXQgdG90YWxzOiBudW1iZXJbXSA9IG5ldyBBcnJheSh2YWx1ZXMubGVuZ3RoKS5maWxsKDApO1xyXG5cclxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbiwgbWVhc3VyZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW1WYWx1ZXMgPSB2YWx1ZUNvbHVtbi52YWx1ZXMuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpLm1hcCh2ID0+IE51bWJlcih2KSk7XHJcbiAgICAgICAgICAgIGlmIChudW1WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWluKDAsIC4uLm51bVZhbHVlcyk7IC8vIFN0YW5kYXJkIGRhdGEgYmFycyBhbmNob3IgdG8gMFxyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU1heHNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWF4KDAsIC4uLm51bVZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgbGV0IHRvdGFsQmVoYXZpb3JSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwidG90YWxzXCIsIHByb3BlcnR5TmFtZTogXCJ0b3RhbEJlaGF2aW9yXCIgfSwgXCJTdW1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQmVoYXZpb3IgPSB0eXBlb2YgdG90YWxCZWhhdmlvclJhdyA9PT0gXCJzdHJpbmdcIiA/IHRvdGFsQmVoYXZpb3JSYXcgOiAodG90YWxCZWhhdmlvclJhdy52YWx1ZSB8fCBcIlN1bVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiU3VtXCIgfHwgdG90YWxCZWhhdmlvciA9PT0gXCJNZWFzdXJlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG51bVZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJBdmVyYWdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG51bVZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIG51bVZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiQ291bnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gbnVtVmFsdWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJDb3VudCBEaXN0aW5jdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBuZXcgU2V0KG51bVZhbHVlcykuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gTWF0aC5tYXgoLi4ubnVtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJNaW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gTWF0aC5taW4oLi4ubnVtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXN3aXRjaFZhbHVlc1RvUm93cykge1xyXG4gICAgICAgICAgICAvLyBOb3JtYWwgaG9yaXpvbnRhbCB0YWJsZSBzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgbGV0IGhlYWRlclJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLXJvdyc7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5oZWlnaHQgPSBgJHtoZWFkZXJSb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCZ0NvbG9yID0gaGVhZGVyQmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGNhdGVnb3J5IGNvbHVtbiBoZWFkZXIgaWYgY2F0ZWdvcmllcyBleGlzdFxyXG4gICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5SGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnRleHRDb250ZW50ID0gY2F0ZWdvcmllcy5zb3VyY2UuZGlzcGxheU5hbWUgfHwgJ0NhdGVnb3J5JztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRlZ29yeUhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBtZWFzdXJlIGNvbHVtbiBoZWFkZXJzXHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXJzLmZvckVhY2goKGRpc3BsYXlOYW1lLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogaGVhZGVyQm9sZDtcclxuICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiBoZWFkZXJJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogaGVhZGVyVW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogaGVhZGVyRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogaGVhZGVyV29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MudGV4dENvbG9yID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBkaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaWR4XX1weGA7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpZHhdfXB4YDtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2lkeF19cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goaGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGVmRm9udFNpemUsIGVmV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gZWZJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSByb3dzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtcm93JztcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgYWx0ZXJuYXRpbmcgYmFja2dyb3VuZCBjb2xvcnMgd2l0aCBzdXBwb3J0IGZvciBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0V2ZW5Sb3cgPSBpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IGlzRXZlblJvdyA/IHZhbHVlUm93SGVpZ2h0IDogYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gYCR7cm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0JnQ29sb3IgPSBnZXRSb3dCYWNrZ3JvdW5kQ29sb3IoaSwgaXNFdmVuUm93LCBkYXRhVmlldyk7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgY2F0ZWdvcnkgdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5Q2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnRleHRDb250ZW50ID0gU3RyaW5nKGNhdGVnb3JpZXMudmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWNhdGVnb3J5LWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNhdGVnb3J5Q2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIGNhdGVnb3J5V29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWVCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUuY29sb3IgPSBnZXRDYXRlZ29yeVRleHRDb2xvcihpLCBkYXRhVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gY2F0ZWdvcnlXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeVdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIG1lYXN1cmUgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWVDb2x1bW4sIG1lYXN1cmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBpc0V2ZW5Sb3cgIT09ICd1bmRlZmluZWQnKSA/IChpc0V2ZW5Sb3cgPyB0ZXh0Q29sb3IgOiBhbHRlcm5hdGVUZXh0Q29sb3IpIDogdGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0Q29sb3IgPSBkZWZhdWx0TWVhc3VyZVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFRleHRDb2xvciA9IGNmQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZUNvbHVtbi52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjsgLy8gZm9yIGRhdGEgYmFyIHBvc2l0aW9uaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1WYWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gbnVtVmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93RGF0YUJhcnNcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0RhdGFCYXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbFBvc2l0aXZlQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInBvc2l0aXZlQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbE5lZ2F0aXZlQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm5lZ2F0aXZlQ29sb3JcIiB9LCBcIiNkOTY1NzBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBtZWFzdXJlTWluc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gbWVhc3VyZU1heHNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2lkdGggcGVyY2VudGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoUGN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0UGN0ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhQY3QgPSAobnVtVmFsdWUgLyByYW5nZSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKDAgLSBtaW4pIC8gcmFuZ2UpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKE1hdGguYWJzKG51bVZhbHVlKSAvIHJhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFBjdCA9ICgobnVtVmFsdWUgLSBtaW4pIC8gcmFuZ2UpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSBiYXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wUGN0ID0gKDEwMCAtIGRhdGFCYXJIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUudG9wID0gYCR7dG9wUGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5oZWlnaHQgPSBgJHtkYXRhQmFySGVpZ2h0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbnVtVmFsdWUgPj0gMCA/IGNlbGxQb3NpdGl2ZUNvbG9yIDogY2VsbE5lZ2F0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiOyAvLyBzZW1pLXRyYW5zcGFyZW50IHNvIHRleHQgaXMgcmVhZGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGRhdGFCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dNYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGUgPSB0eXBlb2YgbWFya2VyU2hhcGVSYXcgPT09IFwic3RyaW5nXCIgPyBtYXJrZXJTaGFwZVJhdyA6IChtYXJrZXJTaGFwZVJhdy52YWx1ZSB8fCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaXplXCIgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZk1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZNYXJrZXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbE1hcmtlckNvbG9yID0gY2ZNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS56SW5kZXggPSBcIjNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyTGVmdFBjdCA9IG51bVZhbHVlID49IDAgPyBsZWZ0UGN0ICsgd2lkdGhQY3QgOiBsZWZ0UGN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnRvcCA9IGBjYWxjKDUwJSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImNyb3NzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoNDVkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtNDVkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuYXBwZW5kQ2hpbGQobGluZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuYXBwZW5kQ2hpbGQobGluZTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwiaG9yaXpvbnRhbExpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwidmVydGljYWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtIDFweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwic2VtaUNpcmNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXcgc2VtaSBjaXJjbGUgcG9pbnRpbmcgb3V0d2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemUgLyAyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS56SW5kZXggPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCByb3dIZWlnaHQsIGNlbGxGb250U2l6ZSwgdmFsdWVXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWVCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBjZWxsSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gY2VsbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gY2VsbFRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1Jvd0JnQ29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciA6IHJvd0JnQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjQ2VsbFRleHRDb2xvciA9IGlzRXZlblJvdyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLnRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzID8gc3BlY1Jvd0JnQ29sb3IgOiByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVDb2xvciA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzID8gc3BlY0NlbGxUZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogdmFsdWVCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiBjZWxsSXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgOiBjZWxsVW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiBjZWxsRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogY2VsbEZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZldvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLnRleHRXcmFwICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dFdyYXAgOiB2YWx1ZVdvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGVmZmVjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IGVmQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udEZhbWlseSA9IGVmRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gYCR7ZWZGb250U2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmZmVjdGl2ZUFsaWduO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZldvcmRXcmFwKSB7IC8vIGFuZCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0b3RhbCByb3dcclxuICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsUm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsUm93LmNsYXNzTmFtZSA9ICd0YWJsZS10b3RhbC1yb3cnO1xyXG4gICAgICAgICAgICB0b3RhbFJvdy5zdHlsZS5ib3JkZXJUb3AgPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIHRvdGFsUm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyMnhWYWx1ZTtcclxuICAgICAgICAgICAgdG90YWxSb3cuc3R5bGUuaGVpZ2h0ID0gYCR7dG90YWxSb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEJnQ29sb3IgPSB0b3RhbFJvd0JhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxMYWJlbENlbGwgPSB0b3RhbFJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC50ZXh0Q29udGVudCA9ICdUb3RhbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5jbGFzc05hbWUgPSAndGFibGUtdG90YWwtbGFiZWwtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbExhYmVsQ2VsbCwgdG90YWxSb3dIZWlnaHQsIHRvdGFsUm93Rm9udFNpemUsIHRvdGFsUm93V29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZm9udFdlaWdodCA9IHRvdGFsUm93Qm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gdG90YWxSb3dVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5mb250RmFtaWx5ID0gdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZm9udFN0eWxlID0gdG90YWxSb3dJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG90YWxCZ0NvbG9yOyB0b3RhbExhYmVsQ2VsbC5zdHlsZS5jb2xvciA9IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUud2hpdGVTcGFjZSA9IHRvdGFsUm93V29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbFJvd1dvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxMYWJlbENlbGwgPSB0b3RhbFJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC50ZXh0Q29udGVudCA9ICdUb3RhbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvdGFscy5mb3JFYWNoKCh0b3RhbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBlZkJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHRvdGFsUm93Qm9sZDtcclxuICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IHRvdGFsUm93SXRhbGljO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogdG90YWxSb3dVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiB0b3RhbFJvd0ZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiB0b3RhbFJvd0ZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdG90YWxSb3dXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdG90YWxSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRvdGFsLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAndGFibGUtdG90YWwtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCB0b3RhbFJvd0hlaWdodCwgZWZGb250U2l6ZSwgZWZXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmZmVjdGl2ZUFsaWduO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHN3aXRjaFZhbHVlc1RvUm93cyBJUyBUUlVFIChUcmFuc3Bvc2UgbGF5b3V0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIEhlYWRlciBSb3dcclxuICAgICAgICAgICAgbGV0IGhlYWRlclJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLXJvdyc7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5oZWlnaHQgPSBgJHtoZWFkZXJSb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCZ0NvbG9yID0gaGVhZGVyQmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgaGVhZGVyIGlzIFwiTWVhc3VyZVwiXHJcbiAgICAgICAgICAgIGxldCBtZWFzdXJlSGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVhc3VyZVwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKG1lYXN1cmVIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE5leHQgaGVhZGVycyBhcmUgQ2F0ZWdvcnkgdmFsdWVzIChvciBqdXN0IFwiVmFsdWVcIiBpZiBubyBjYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnRleHRDb250ZW50ID0gU3RyaW5nKGNhdGVnb3JpZXMudmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F0SGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci50ZXh0Q29udGVudCA9IFwiVmFsdWVcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0SGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsSGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsSGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsSGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsSGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIFJvd3MgKGVhY2ggcm93IGlzIGEgTWVhc3VyZSlcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uLCBtZWFzdXJlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLXJvdyc7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNFdmVuUm93ID0gbWVhc3VyZUluZGV4ICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IGlzRXZlblJvdyA/IHZhbHVlUm93SGVpZ2h0IDogYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gYCR7cm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0JnQ29sb3IgPSBpc0V2ZW5Sb3cgPyBiYWNrZ3JvdW5kQ29sb3IgOiBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDZWxsIDE6IE1lYXN1cmUgTmFtZVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lYXN1cmVOYW1lQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwudGV4dENvbnRlbnQgPSBtZWFzdXJlSGVhZGVyc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1jYXRlZ29yeS1jZWxsJztcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKG1lYXN1cmVOYW1lQ2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIGNhdGVnb3J5V29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuZm9udFN0eWxlID0gY2VsbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gY2VsbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmNvbG9yID0gZGVmYXVsdENhdGVnb3J5VGV4dENvbG9yOyAvLyBvciBzb21lIHNwZWNpZmljIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gY2F0ZWdvcnlXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5V29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGlzRXZlblJvdyAhPT0gJ3VuZGVmaW5lZCcpID8gKGlzRXZlblJvdyA/IHRleHRDb2xvciA6IGFsdGVybmF0ZVRleHRDb2xvcikgOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93RGF0YUJhcnNcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxQb3NpdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJwb3NpdGl2ZUNvbG9yXCIgfSwgXCIjMzFiNmZkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxOZWdhdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJuZWdhdGl2ZUNvbG9yXCIgfSwgXCIjZDk2NTcwXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUJhckhlaWdodCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJIZWlnaHRcIiB9LCA4MCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXJTaGFwZVJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2hhcGVcIiB9LCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaXplXCIgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBtZWFzdXJlTWluc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gbWVhc3VyZU1heHNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhIENlbGxzOiBWYWx1ZXMgZm9yIGVhY2ggY2F0ZWdvcnkgKG9yIHRoZSAxIHZhbHVlIGlmIG5vIGNhdGVnb3JpZXMpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbFRleHRDb2xvciA9IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZkNvbG9yKSBjZWxsVGV4dENvbG9yID0gY2ZDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmUG9zQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInBvc2l0aXZlQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZlBvc0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsUG9zaXRpdmVDb2xvciA9IGNmUG9zQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlQ29sdW1uLnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IG51bVZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93RGF0YUJhcnMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dEYXRhQmFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxQb3NpdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJwb3NpdGl2ZUNvbG9yXCIgfSwgXCIjMzFiNmZkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxOZWdhdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJuZWdhdGl2ZUNvbG9yXCIgfSwgXCIjZDk2NTcwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUJhckhlaWdodCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJIZWlnaHRcIiB9LCA4MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluID0gbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdpZHRoIHBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aFBjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFBjdCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKG51bVZhbHVlIC8gcmFuZ2UpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKCgwIC0gbWluKSAvIHJhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9IChNYXRoLmFicyhudW1WYWx1ZSkgLyByYW5nZSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKG51bVZhbHVlIC0gbWluKSAvIHJhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRhdGEgYmFyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFBjdCA9ICgxMDAgLSBkYXRhQmFySGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnRvcCA9IGAke3RvcFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuaGVpZ2h0ID0gYCR7ZGF0YUJhckhlaWdodH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUubGVmdCA9IGAke2xlZnRQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG51bVZhbHVlID49IDAgPyBjZWxsUG9zaXRpdmVDb2xvciA6IGNlbGxOZWdhdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjsgLy8gc2VtaS10cmFuc3BhcmVudCBzbyB0ZXh0IGlzIHJlYWRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkYXRhQmFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbE1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmTWFya2VyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxNYXJrZXJDb2xvciA9IGNmTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuekluZGV4ID0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlckxlZnRQY3QgPSBudW1WYWx1ZSA+PSAwID8gbGVmdFBjdCArIHdpZHRoUGN0IDogbGVmdFBjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBgY2FsYyg1MCUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IGAke21hcmtlclNpemV9cHhgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFya2VyU2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjcm9zc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDQ1ZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTQ1ZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImhvcml6b250YWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInZlcnRpY2FsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAxcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInNlbWlDaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcmF3IHNlbWkgY2lyY2xlIHBvaW50aW5nIG91dHdhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIHZhbHVlV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gY2VsbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNlbGxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGNlbGxUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNSb3dCZ0NvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogcm93QmdDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY0NlbGxUZXh0Q29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNSb3dCZ0NvbG9yIDogcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNDZWxsVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHZhbHVlQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogY2VsbEl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogY2VsbFVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogY2VsbEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IGNlbGxGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdmFsdWVXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmZmVjdGl2ZUJnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IGAke2VmRm9udFNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGVmV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkgeyAvLyBhbmQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBUb3RhbCBjb2x1bW4gY2VsbCBmb3IgdGhpcyBtZWFzdXJlIGlmIGVuYWJsZWRcclxuICAgICAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxDZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxWYWwgPSB0b3RhbHNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwudGV4dENvbnRlbnQgPSB0b3RhbFZhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2godG90YWxDZWxsLCByb3dIZWlnaHQsIHRvdGFsUm93Rm9udFNpemUsIHRvdGFsUm93V29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdG90YWxSb3dCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSB0b3RhbFJvd0ZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuZm9udFN0eWxlID0gdG90YWxSb3dJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRvdGFsUm93VW5kZXJsaW5lIGlzIGRlZmluZWQgaW4gdGFibGUgc2V0dGluZ3MsIHNvIHdlIGFwcGVuZCB0byBpdCBvciByZXBsYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3Mga2VlcCB0b3RhbFJvd1VuZGVybGluZSBvdmVycmlkaW5nIG9yIGFkZGluZyB0byBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IGp1c3Qgc2V0IHVuZGVybGluZSBvciBub25lLCBsZXQncyBrZWVwIG9yaWdpbmFsIHRvdGFsUm93VW5kZXJsaW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRvdGFsUm93VW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IGAxcHggc29saWQgJHtncmlkQm9yZGVyQ29sb3J9YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmNvbG9yID0gdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gdG90YWxSb3dXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFJvd1dvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gbnVsbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciB0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICd0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHJyxcbiAgICBkaXNwbGF5TmFtZTogJ1RpbVRhYmxlJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJ0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHXCJdID0gdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRztcbn1cbmV4cG9ydCBkZWZhdWx0IHRpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==