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
/* harmony export */   DataBarsConditionalFormattingSettings: () => (/* binding */ DataBarsConditionalFormattingSettings),
/* harmony export */   DataBarsFormattingSettings: () => (/* binding */ DataBarsFormattingSettings),
/* harmony export */   GridSettings: () => (/* binding */ GridSettings),
/* harmony export */   RowHeightSettings: () => (/* binding */ RowHeightSettings),
/* harmony export */   SpecificColumnSettings: () => (/* binding */ SpecificColumnSettings),
/* harmony export */   TotalsSettings: () => (/* binding */ TotalsSettings),
/* harmony export */   ValueBackgroundConditionalFormattingSettings: () => (/* binding */ ValueBackgroundConditionalFormattingSettings),
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
    switchValuesToRows = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
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
class RowHeightSettings extends FormattingSettingsCard {
    name = "rowHeight";
    displayName = "Row height";
    visible = true;
    headerBold = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "headerBold",
        displayName: "Header Bold",
        value: true,
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
    slices = [this.valueRowHeight, this.alternateValueRowHeight, this.totalRowHeight];
}
class ValueConditionalFormattingSettings extends FormattingSettingsCard {
    name = "valueConditionalFormatting";
    displayName = "Value conditional formatting";
    visible = true;
    slices = [];
}
class ValueBackgroundConditionalFormattingSettings extends FormattingSettingsCard {
    name = "valueBackgroundConditionalFormatting";
    displayName = "Value background conditional formatting";
    visible = true;
    slices = [];
}
class DataBarsConditionalFormattingSettings extends FormattingSettingsCard {
    name = "dataBarsConditionalFormatting";
    displayName = "Data bar conditional formatting";
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
class DataBarsFormattingSettings extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.CompositeCard {
    name = "dataBarsFormatting";
    displayName = "Data Bars";
    visible = true;
    series = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "series",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });
    showDataBars = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showDataBars",
        displayName: "Show Data Bars",
        value: false,
        visible: true
    });
    dataBarHeight = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "dataBarHeight",
        displayName: "Data Bar Height (%)",
        value: 80,
        visible: true
    });
    transparency = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "transparency",
        displayName: "Transparency (%)",
        value: 20,
        visible: true
    });
    borderOn = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "borderOn",
        displayName: "Border On",
        value: true,
        visible: true
    });
    matchDataBarColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "matchDataBarColor",
        displayName: "Match Data Bar Color",
        value: true,
        visible: true
    });
    borderThickness = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "borderThickness",
        displayName: "Border Thickness",
        value: 1,
        visible: true
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "borderColor",
        displayName: "Border Color",
        value: { value: "#000000" },
        visible: true,
        instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
    });
    minValue = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "minValue",
        displayName: "Minimum Value",
        value: null,
        visible: true
    });
    maxValue = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "maxValue",
        displayName: "Maximum Value",
        value: null,
        visible: true
    });
    labelsOutside = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "labelsOutside",
        displayName: "Labels Outside",
        value: false,
        visible: true
    });
    showZeroLine = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showZeroLine",
        displayName: "Show Zero Line",
        value: false,
        visible: true
    });
    zeroLineColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "zeroLineColor",
        displayName: "Zero Line Color",
        value: { value: "#000000" },
        visible: true
    });
    zeroLineTransparency = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "zeroLineTransparency",
        displayName: "Zero Line Transparency (%)",
        value: 0,
        visible: true
    });
    selectSeriesGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Select Series",
        name: "selectSeriesGroup",
        slices: [this.series]
    });
    dataBarsGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Data Bars Settings",
        name: "dataBarsGroup",
        slices: [this.showDataBars, this.dataBarHeight, this.transparency, this.borderOn, this.matchDataBarColor, this.borderThickness, this.borderColor, this.minValue, this.maxValue, this.labelsOutside, this.showZeroLine, this.zeroLineColor, this.zeroLineTransparency]
    });
    groups = [this.selectSeriesGroup, this.dataBarsGroup];
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
    switchValuesToRows = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
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
    nameSeries = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
        name: "nameSeries",
        displayName: "Series",
        value: { value: "", displayName: "" },
        items: [],
        visible: true
    });
    nameOverride = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "nameOverride",
        displayName: "Header Name",
        placeholder: "Enter custom header name",
        value: "",
        visible: true,
        instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
    });
    namesGroup = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Group({
        displayName: "Names",
        name: "names",
        slices: [this.nameSeries, this.nameOverride]
    });
    name = "columnHeaders";
    displayName = "Column headers";
    visible = true;
    groups = [this.textGroup, this.optionsGroup, this.namesGroup];
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
    switchValuesToRows = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "switchValuesToRows",
        displayName: "Switch values to rows",
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
    categoryWordWrap = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "categoryWordWrap",
        displayName: "Category Word Wrap",
        value: false,
        visible: true
    });
    slices = [this.categoryColumnWidth, this.alignedColumns, this.valueColumnWidth, this.categoryWordWrap];
}
class VisualSettings extends FormattingSettingsModel {
    valuesMenu = new ValuesSettings();
    specificColumn = new SpecificColumnSettings();
    columnHeaders = new ColumnHeadersSettings();
    rowHeight = new RowHeightSettings();
    categoryConditionalFormatting = new CategoryConditionalFormattingSettings();
    valueConditionalFormatting = new ValueConditionalFormattingSettings();
    valueBackgroundConditionalFormatting = new ValueBackgroundConditionalFormattingSettings();
    dataBarsConditionalFormatting = new DataBarsConditionalFormattingSettings();
    dataBarsFormatting = new DataBarsFormattingSettings();
    dataBarMarkers = new DataBarMarkersSettings();
    totals = new TotalsSettings();
    gridMenu = new GridSettings();
    columnWidth = new ColumnWidthSettings();
    cards = [this.gridMenu, this.valuesMenu, this.totals, this.rowHeight, this.columnWidth, this.columnHeaders, this.specificColumn, this.dataBarsFormatting, this.dataBarMarkers, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsConditionalFormatting, this.valueBackgroundConditionalFormatting];
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
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-api */ "powerbi-visuals-api");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js");
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js");
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
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.FormattingSettingsService();
        this.visualSettings = new _settings__WEBPACK_IMPORTED_MODULE_2__.VisualSettings();
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.visualSettings);
    }
    update(options) {
        if (options.dataViews && options.dataViews[0]) {
            this.visualSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_2__.VisualSettings, options.dataViews[0]);
            this.dataView = options.dataViews[0]; // Update dataView here
        }
        const columnWidthSettings = this.visualSettings.columnWidth;
        const rowHeightSettings = this.visualSettings.rowHeight;
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
        const categoryWordWrap = columnWidthSettings.categoryWordWrap.value;
        const valueWordWrap = valuesSettings.textWrap.value;
        const columnHeadersSettings = this.visualSettings.columnHeaders;
        const headerWordWrap = columnHeadersSettings.textWrap?.value || false;
        const columnWidth = columnWidthSettings.valueColumnWidth.value;
        const headerRowHeight = columnHeadersSettings.headerRowHeight.value;
        const valueRowHeight = rowHeightSettings.valueRowHeight.value;
        const alternateValueRowHeight = rowHeightSettings.alternateValueRowHeight.value;
        const totalRowHeight = rowHeightSettings.totalRowHeight.value;
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
        const valueBgCFSettings = this.visualSettings.valueBackgroundConditionalFormatting;
        valueBgCFSettings.slices = []; // Will be populated dynamically per-measure
        totalsSettings.slices = [
            totalsSettings.showTotalRow,
            totalsSettings.font,
            totalsSettings.textColor,
            totalsSettings.backgroundColor,
            totalsSettings.textWrap
        ];
        const dataBarsSettings = this.visualSettings.dataBarsFormatting;
        const dataBarsCFSettings = this.visualSettings.dataBarsConditionalFormatting;
        dataBarsCFSettings.slices = []; // Will be populated dynamically per-measure
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
            // Clean up CF hex values: strip leading minus, ensure # prefix, take first 7 chars
            let cleaned = hex.replace(/^-/, '');
            if (!cleaned.startsWith("#"))
                cleaned = "#" + cleaned;
            if (cleaned.length === 9)
                cleaned = cleaned.substring(0, 7); // #RRGGBBAA -> #RRGGBB
            let alpha = Math.max(0, Math.min(1, 1 - (transparencyPct / 100)));
            if (cleaned.startsWith("#")) {
                let r = 0, g = 0, b = 0;
                if (cleaned.length === 4) {
                    r = parseInt(cleaned[1] + cleaned[1], 16);
                    g = parseInt(cleaned[2] + cleaned[2], 16);
                    b = parseInt(cleaned[3] + cleaned[3], 16);
                }
                else if (cleaned.length === 7) {
                    r = parseInt(cleaned[1] + cleaned[2], 16);
                    g = parseInt(cleaned[3] + cleaned[4], 16);
                    b = parseInt(cleaned[5] + cleaned[6], 16);
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
                    const color = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(category.objects[rowIndex], { objectName: "categoryConditionalFormatting", propertyName: "textColor" });
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
                    const color = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(category.objects[rowIndex], { objectName: "table", propertyName: targetColorProp });
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
        const switchValuesToRows = valuesSettings.switchValuesToRows?.value || false;
        let rowCount = hasCategories && categories.values ? categories.values.length : (values[0].values ? values[0].values.length : 1);
        // Pre-process measure settings to populate formatting model properly
        let measureHeaders = [];
        let measureHeaderOverrides = [];
        let measureSettingsList = [];
        let valueColumnWidths = [];
        values.forEach((valueColumn) => {
            let specObj = valueColumn.source.objects?.specificColumn;
            let settings = {
                textColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textColor" }, undefined),
                backgroundColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined),
                alternateTextColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined),
                alternateBackgroundColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined),
                alignment: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "alignment" }, undefined),
                applyToHeader: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToHeader" }, true),
                applyToValues: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToValues" }, true),
                applyToTotal: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "applyToTotal" }, true),
                displayUnits: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "displayUnits" }, 0),
                decimalPlaces: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "decimalPlaces" }, 1),
                fontFamily: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontFamily" }, undefined),
                fontSize: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "fontSize" }, undefined),
                bold: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "bold" }, undefined),
                italic: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "italic" }, undefined),
                underline: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "underline" }, undefined),
                textWrap: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "specificColumn", propertyName: "textWrap" }, undefined)
            };
            measureSettingsList.push(settings);
            let displayName = valueColumn.source.displayName || `Measure ${measureHeaders.length + 1}`;
            measureHeaders.push(displayName);
            let nameOverride = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "columnHeaders", propertyName: "nameOverride" }, "");
            measureHeaderOverrides.push(nameOverride !== "" ? nameOverride : displayName);
            const queryName = valueColumn.source.queryName;
            if (columnWidthSettings.alignedColumns.value) {
                valueColumnWidths.push(columnWidthSettings.valueColumnWidth.value);
            }
            else {
                const specificWidth = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, { objectName: "columnWidth", propertyName: "valueColumnWidth" }, columnWidthSettings.valueColumnWidth.value);
                valueColumnWidths.push(specificWidth);
                // Add per-measure width slice with selector so Power BI persists it per-measure
                columnWidthSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                    name: "valueColumnWidth",
                    displayName: displayName + " Width",
                    value: specificWidth,
                    selector: { metadata: queryName }
                }));
            }
            // Create the composite selector for per-row rule evaluation
            const wildcardSelector = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_5__.createDataViewWildcardSelector(0 /* dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals */);
            const compositeSelector = {
                metadata: queryName,
                data: wildcardSelector.data
            };
            // Build dynamic settings slice for this measure
            const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, textColor);
            valueCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                name: "textColor",
                displayName: displayName + " Text Color",
                value: { value: defaultMeasureTextColor },
                visible: true,
                selector: compositeSelector,
                altConstantSelector: { metadata: queryName },
                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
            }));
            const defaultMeasureBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }, backgroundColor);
            valueBgCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                name: "backgroundColor",
                displayName: displayName + " Background Color",
                value: { value: defaultMeasureBgColor },
                visible: true,
                selector: compositeSelector,
                altConstantSelector: { metadata: queryName },
                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
            }));
            // Data bar color CF: register per-measure slice on the simple card
            const defaultDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
            dataBarsCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                name: "dataBarColor",
                displayName: displayName + " Data Bar Color",
                value: { value: defaultDataBarColor },
                visible: true,
                selector: compositeSelector,
                altConstantSelector: { metadata: queryName },
                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
            }));
            // Data bars settings
            const objects = valueColumn.source.objects || {};
            // Data bar markers settings
            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
            let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
            const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
            const markerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
            const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
            dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
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
                dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ItemDropdown({
                    name: "markerShape",
                    displayName: displayName + " Marker Shape",
                    value: currentShapeItem,
                    items: markerShapeItems,
                    visible: true,
                    selector: { metadata: queryName }
                }));
                dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                    name: "markerColor",
                    displayName: displayName + " Marker Color",
                    value: { value: markerColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
                dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                    name: "markerSize",
                    displayName: displayName + " Marker Size",
                    value: markerSize,
                    visible: true,
                    selector: { metadata: queryName }
                }));
            }
            let totalBehaviorRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Sum");
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
            totalsSettings.slices.splice(measureHeaders.length, 0, new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ItemDropdown({
                name: "totalBehavior",
                displayName: displayName + " Measure Selection",
                value: currentBehaviorItem,
                items: totalBehaviorItems,
                visible: true,
                selector: { metadata: queryName }
            }));
        });
        // Populate specificColumn series dropdown and rebuild value slices with per-measure selector
        const specificColumnSettings = this.visualSettings.specificColumn;
        specificColumnSettings.series.items = measureHeaders.map(name => ({ value: name, displayName: name }));
        // Read persisted series value from dataView metadata objects
        const persistedSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(this.dataView.metadata.objects || {}, { objectName: "specificColumn", propertyName: "series" }, undefined);
        const matchedItem = persistedSeries
            ? specificColumnSettings.series.items.find(i => i.value === persistedSeries)
            : null;
        specificColumnSettings.series.value = matchedItem || specificColumnSettings.series.items[0] || { value: "", displayName: "" };
        // Find the queryName for the selected measure so slices persist to the correct per-measure objects
        const selectedSeriesName = specificColumnSettings.series.value?.value;
        const selectedMeasureIdx = measureHeaders.indexOf(selectedSeriesName);
        const selectedValueColumn = selectedMeasureIdx >= 0 ? values[selectedMeasureIdx] : null;
        const selectedQueryName = selectedValueColumn?.source?.queryName;
        const selectedObjects = selectedValueColumn?.source?.objects || {};
        const selector = selectedQueryName ? { metadata: selectedQueryName } : undefined;
        // Read current per-measure values for the selected column
        const scTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "textColor" }, undefined);
        const scBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "backgroundColor" }, undefined);
        const scAltTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "alternateTextColor" }, undefined);
        const scAltBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, { objectName: "specificColumn", propertyName: "alternateBackgroundColor" }, undefined);
        const scApplyToHeader = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "applyToHeader" }, true);
        const scApplyToValues = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "applyToValues" }, true);
        const scApplyToTotal = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "applyToTotal" }, true);
        const scFontFamily = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "fontFamily" }, undefined);
        const scFontSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "fontSize" }, undefined);
        const scBold = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "bold" }, undefined);
        const scItalic = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "italic" }, undefined);
        const scUnderline = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "underline" }, undefined);
        const scAlignment = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "alignment" }, undefined);
        const scDisplayUnits = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "displayUnits" }, 0);
        const scDecimalPlaces = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "decimalPlaces" }, 1);
        const scTextWrap = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, { objectName: "specificColumn", propertyName: "textWrap" }, undefined);
        // Populate columnHeaders nameSeries dropdown and rebuild names group with per-measure selector
        columnHeadersSettings.nameSeries.items = measureHeaders.map(name => ({ value: name, displayName: name }));
        const persistedNameSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(this.dataView.metadata.objects || {}, { objectName: "columnHeaders", propertyName: "nameSeries" }, undefined);
        const matchedNameItem = persistedNameSeries
            ? columnHeadersSettings.nameSeries.items.find(i => i.value === persistedNameSeries)
            : null;
        columnHeadersSettings.nameSeries.value = matchedNameItem || columnHeadersSettings.nameSeries.items[0] || { value: "", displayName: "" };
        const selectedNameSeriesName = columnHeadersSettings.nameSeries.value?.value;
        const selectedNameMeasureIdx = measureHeaders.indexOf(selectedNameSeriesName);
        const selectedNameValueColumn = selectedNameMeasureIdx >= 0 ? values[selectedNameMeasureIdx] : null;
        const selectedNameQueryName = selectedNameValueColumn?.source?.queryName;
        const selectedNameObjects = selectedNameValueColumn?.source?.objects || {};
        const nameSelector = selectedNameQueryName ? { metadata: selectedNameQueryName } : undefined;
        const chNameOverride = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedNameObjects, { objectName: "columnHeaders", propertyName: "nameOverride" }, "");
        // Rebuild the namesGroup slices
        columnHeadersSettings.namesGroup.slices = [
            columnHeadersSettings.nameSeries,
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.TextInput({
                name: "nameOverride",
                displayName: "Header Name",
                placeholder: "Enter custom header name",
                value: chNameOverride,
                visible: true,
                selector: nameSelector,
                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
            })
        ];
        // Rebuild the applySettingsGroup slices with selectors
        specificColumnSettings.applySettingsGroup.slices = [
            specificColumnSettings.series,
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "applyToHeader", displayName: "Apply to header", value: scApplyToHeader, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "applyToTotal", displayName: "Apply to total", value: scApplyToTotal, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "applyToValues", displayName: "Apply to values", value: scApplyToValues, visible: true, selector })
        ];
        // Rebuild the valuesGroup slices with per-measure selectors
        specificColumnSettings.valuesGroup.slices = [
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.FontControl({
                name: "font",
                displayName: "Font",
                fontFamily: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.FontPicker({ name: "fontFamily", displayName: "Font Family", value: scFontFamily || "Arial, sans-serif", selector }),
                fontSize: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "fontSize", displayName: "Font Size", value: scFontSize ?? 12, selector }),
                bold: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "bold", displayName: "Bold", value: scBold ?? false, selector }),
                italic: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "italic", displayName: "Italic", value: scItalic ?? false, selector }),
                underline: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "underline", displayName: "Underline", value: scUnderline ?? false, selector })
            }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({ name: "textColor", displayName: "Text color", value: { value: scTextColor || "#00b8d4" }, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({ name: "backgroundColor", displayName: "Background color", value: { value: scBgColor || "#ffffff" }, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({ name: "alternateTextColor", displayName: "Alternate text color", value: { value: scAltTextColor || "#333333" }, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({ name: "alternateBackgroundColor", displayName: "Alternate background color", value: { value: scAltBgColor || "#f5f5f5" }, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.AlignmentGroup({ name: "alignment", displayName: "Alignment", value: scAlignment || "left", mode: "horizontalAlignment" /* powerbi.visuals.AlignmentGroupMode.Horizonal */, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.AutoDropdown({ name: "displayUnits", displayName: "Display units", value: scDisplayUnits, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "decimalPlaces", displayName: "Value decimal places", value: scDecimalPlaces, visible: true, selector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "textWrap", displayName: "Text wrap", value: scTextWrap ?? false, visible: true, selector })
        ];
        // Populate dataBarsSettings series dropdown and rebuild value slices with per-measure selector
        dataBarsSettings.series.items = measureHeaders.map(name => ({ value: name, displayName: name }));
        const persistedDataBarsSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(this.dataView.metadata.objects || {}, { objectName: "dataBarsFormatting", propertyName: "series" }, undefined);
        const matchedDataBarsItem = persistedDataBarsSeries
            ? dataBarsSettings.series.items.find(i => i.value === persistedDataBarsSeries)
            : null;
        dataBarsSettings.series.value = matchedDataBarsItem || dataBarsSettings.series.items[0] || { value: "", displayName: "" };
        const selectedDataBarsSeriesName = dataBarsSettings.series.value?.value;
        const selectedDataBarsMeasureIdx = measureHeaders.indexOf(selectedDataBarsSeriesName);
        const selectedDataBarsValueColumn = selectedDataBarsMeasureIdx >= 0 ? values[selectedDataBarsMeasureIdx] : null;
        const selectedDataBarsQueryName = selectedDataBarsValueColumn?.source?.queryName;
        const selectedDataBarsObjects = selectedDataBarsValueColumn?.source?.objects || {};
        const dataBarsSelector = selectedDataBarsQueryName ? { metadata: selectedDataBarsQueryName } : undefined;
        const dbShowDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
        const dbMatchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
        const dbShowZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
        const dbZeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
        const dbZeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
        const dbDataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
        const dbTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
        const dbBorderOn = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
        const dbBorderThickness = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
        const dbBorderColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
        const dbMinValue = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, 0);
        const dbMaxValue = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, 0);
        const dbLabelsOutside = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
        dataBarsSettings.selectSeriesGroup.slices = [
            dataBarsSettings.series
        ];
        let dataBarsSlices = [
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "showDataBars", displayName: "Show Data Bars", value: dbShowDataBars, visible: true, selector: dataBarsSelector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "dataBarHeight", displayName: "Data Bar Height (%)", value: dbDataBarHeight, visible: true, selector: dataBarsSelector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "transparency", displayName: "Transparency (%)", value: dbTransparency, visible: true, selector: dataBarsSelector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "borderOn", displayName: "Border On", value: dbBorderOn, visible: true, selector: dataBarsSelector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "matchDataBarColor", displayName: "Match Data Bar Color", value: dbMatchDataBarColor, visible: true, selector: dataBarsSelector }),
            new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "borderThickness", displayName: "Border Thickness", value: dbBorderThickness, visible: true, selector: dataBarsSelector })
        ];
        if (!dbMatchDataBarColor) {
            dataBarsSlices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({ name: "borderColor", displayName: "Border Color", value: { value: dbBorderColor }, visible: true, selector: dataBarsSelector, instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */ }));
        }
        dataBarsSlices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "minValue", displayName: "Minimum Value", value: dbMinValue, visible: true, selector: dataBarsSelector }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "maxValue", displayName: "Maximum Value", value: dbMaxValue, visible: true, selector: dataBarsSelector }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "labelsOutside", displayName: "Labels Outside", value: dbLabelsOutside, visible: true, selector: dataBarsSelector }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({ name: "showZeroLine", displayName: "Show Zero Line", value: dbShowZeroLine, visible: true, selector: dataBarsSelector }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({ name: "zeroLineColor", displayName: "Zero Line Color", value: { value: dbZeroLineColor }, visible: true, selector: dataBarsSelector }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({ name: "zeroLineTransparency", displayName: "Zero Line Transparency (%)", value: dbZeroLineTransparency, visible: true, selector: dataBarsSelector }));
        dataBarsSettings.dataBarsGroup.slices = dataBarsSlices;
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
            let totalBehaviorRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "totals", propertyName: "totalBehavior" }, "Sum");
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
                const effectiveDisplayName = measureHeaderOverrides[idx];
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
                header.textContent = effectiveDisplayName;
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
            // One-time debug dump of valueColumn objects status
            if (values.length > 0) {
                const vc0 = values[0];
                console.log(`[DB CF INIT] measure0 name=${vc0.source.displayName} queryName=${vc0.source.queryName}`);
                console.log(`[DB CF INIT] measure0 .objects exists=${!!vc0.objects}, .objects type=${typeof vc0.objects}`);
                if (vc0.objects) {
                    console.log(`[DB CF INIT] measure0 .objects is array=${Array.isArray(vc0.objects)}, length=${vc0.objects.length}`);
                    // Show first 3 entries
                    for (let z = 0; z < Math.min(3, rowCount); z++) {
                        console.log(`[DB CF INIT] measure0 .objects[${z}]=${JSON.stringify(vc0.objects[z])}`);
                    }
                }
                console.log(`[DB CF INIT] measure0 .source.objects=${JSON.stringify(vc0.source.objects)}`);
            }
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
                    if (i < 2 && measureIndex === 0) {
                        const obj = valueColumn.objects?.[i];
                        const hasObjs = !!valueColumn.objects;
                        const objKeys = obj ? Object.keys(obj).join(',') : 'none';
                        console.log(`[DB CF DEBUG] row=${i} measure=${measureIndex} hasObjects=${hasObjs} obj[i]keys=${objKeys}`);
                        if (hasObjs && valueColumn.objects[i]) {
                            console.log(`[DB CF DEBUG]   obj[${i}] full:`, JSON.stringify(valueColumn.objects[i]));
                        }
                        // Also check if valueConditionalFormatting objects exist (this card is known to work)
                        if (hasObjs) {
                            console.log(`[DB CF DEBUG]   objects array length-ish: objects is array=${Array.isArray(valueColumn.objects)}, typeof=${typeof valueColumn.objects}`);
                            // Check first few entries
                            for (let z = 0; z < Math.min(3, valueColumn.objects.length || 3); z++) {
                                if (valueColumn.objects[z]) {
                                    console.log(`[DB CF DEBUG]   objects[${z}] keys: ${Object.keys(valueColumn.objects[z]).join(',')}`);
                                }
                            }
                        }
                        // Check source.objects for the measure-level defaults
                        if (valueColumn.source?.objects) {
                            console.log(`[DB CF DEBUG]   source.objects keys: ${Object.keys(valueColumn.source.objects).join(',')}`);
                        }
                    }
                    const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                    const defaultMeasureBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor);
                    let cellTextColor = defaultMeasureTextColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                        if (cfColor) {
                            cellTextColor = cfColor;
                        }
                    }
                    let cellBackgroundColor = defaultMeasureBgColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                        if (cfBgColor) {
                            cellBackgroundColor = cfBgColor;
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
                        const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        if (showDataBars) {
                            let cellDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
                            const matchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const showZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const zeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const zeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const transparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const borderOn = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const borderThickness = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const borderColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const minValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            // Check for conditional formatting on data bar color (using simple card objectName)
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" });
                                if (cfDataBarColor) {
                                    cellDataBarColor = cfDataBarColor;
                                }
                            }
                            const min = minValueObj !== null && minValueObj !== undefined ? minValueObj : measureMins[measureIndex];
                            const max = maxValueObj !== null && maxValueObj !== undefined ? maxValueObj : measureMaxs[measureIndex];
                            let range = max - min;
                            if (range <= 0)
                                range = 1;
                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;
                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));
                            let scale = labelsOutside ? 0.75 : 1;
                            if (clampedValue >= zeroPoint) {
                                widthPct = ((clampedValue - zeroPoint) / range) * 100 * scale;
                                leftPct = ((zeroPoint - min) / range) * 100 * scale;
                            }
                            else {
                                widthPct = ((zeroPoint - clampedValue) / range) * 100 * scale;
                                leftPct = ((clampedValue - min) / range) * 100 * scale;
                            }
                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = `${topPct}%`;
                            dataBar.style.height = `${dataBarHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);
                            dataBar.style.zIndex = "1";
                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = `${borderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }
                            cell.appendChild(dataBar);
                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                zeroLine.style.top = "0";
                                zeroLine.style.bottom = "0";
                                zeroLine.style.width = "2px";
                                let zLeftPct = ((zeroPoint - min) / range) * 100 * scale;
                                zeroLine.style.left = `calc(${zLeftPct}% - 1px)`;
                                zeroLine.style.backgroundColor = applyTransparency(zeroLineColor, zeroLineTransparency);
                                zeroLine.style.zIndex = "1";
                                cell.appendChild(zeroLine);
                            }
                            // Data bar markers settings
                            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                            if (showMarker) {
                                let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                                let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "dataBarMarkers", propertyName: "markerColor" });
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
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            if (labelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.top = "50%";
                                textDiv.style.transform = "translateY(-50%)";
                                textDiv.style.whiteSpace = "nowrap";
                                if (numValue >= 0) {
                                    textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                }
                                else {
                                    textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                }
                            }
                            else {
                                textDiv.style.position = "relative";
                            }
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
                    cell.style.backgroundColor = cellBackgroundColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    let specSettings = measureSettingsList[measureIndex];
                    let specRowBgColor = isEvenRow ?
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) :
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor);
                    let specCellTextColor = isEvenRow ?
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) :
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);
                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;
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
                measureNameCell.textContent = measureHeaderOverrides[measureIndex];
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
                const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                const defaultMeasureBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? backgroundColor : alternateBackgroundColor) : backgroundColor);
                const objects = valueColumn.source.objects || {};
                const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                let cellDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
                const matchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                const showZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                const zeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                const zeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                const min = measureMins[measureIndex];
                const max = measureMaxs[measureIndex];
                const range = max - min;
                // Data Cells: Values for each category (or the 1 value if no categories)
                for (let i = 0; i < rowCount; i++) {
                    let cell = row.insertCell();
                    cell.style.position = "relative";
                    let cellTextColor = defaultMeasureTextColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "valueConditionalFormatting", propertyName: "textColor" });
                        if (cfColor)
                            cellTextColor = cfColor;
                    }
                    let cellBackgroundColor = defaultMeasureBgColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "valueBackgroundConditionalFormatting", propertyName: "backgroundColor" });
                        if (cfBgColor)
                            cellBackgroundColor = cfBgColor;
                    }
                    let value = valueColumn.values[i];
                    if (value !== null && value !== undefined) {
                        let numValue = Number(value);
                        const formattedValue = numValue.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0
                        });
                        const objects = valueColumn.source.objects || {};
                        const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        if (showDataBars) {
                            let cellDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" }, "#31b6fd");
                            const matchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "matchDataBarColor" }, true);
                            const showZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showZeroLine" }, false);
                            const zeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineColor" }, "#000000");
                            const zeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "zeroLineTransparency" }, 0);
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                            const transparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "transparency" }, 20);
                            const borderOn = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "borderOn" }, true);
                            const borderThickness = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "borderThickness" }, 1);
                            const borderColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "borderColor" }, "#000000");
                            const minValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "minValue" }, null);
                            const maxValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "maxValue" }, null);
                            const labelsOutside = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "labelsOutside" }, false);
                            // Check for conditional formatting on data bar color (using simple card objectName)
                            if (valueColumn.objects && valueColumn.objects[i]) {
                                const cfDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "dataBarsConditionalFormatting", propertyName: "dataBarColor" });
                                if (cfDataBarColor) {
                                    cellDataBarColor = cfDataBarColor;
                                }
                            }
                            const min = minValueObj !== null && minValueObj !== undefined ? minValueObj : measureMins[measureIndex];
                            const max = maxValueObj !== null && maxValueObj !== undefined ? maxValueObj : measureMaxs[measureIndex];
                            let range = max - min;
                            if (range <= 0)
                                range = 1;
                            // Calculate width percentage
                            let widthPct = 0;
                            let leftPct = 0;
                            let clampedValue = Math.max(min, Math.min(max, numValue));
                            let zeroPoint = Math.max(min, Math.min(max, 0));
                            let scale = labelsOutside ? 0.75 : 1;
                            if (clampedValue >= zeroPoint) {
                                widthPct = ((clampedValue - zeroPoint) / range) * 100 * scale;
                                leftPct = ((zeroPoint - min) / range) * 100 * scale;
                            }
                            else {
                                widthPct = ((zeroPoint - clampedValue) / range) * 100 * scale;
                                leftPct = ((clampedValue - min) / range) * 100 * scale;
                            }
                            // Create data bar div
                            let dataBar = document.createElement("div");
                            dataBar.style.position = "absolute";
                            const topPct = (100 - dataBarHeight) / 2;
                            dataBar.style.top = `${topPct}%`;
                            dataBar.style.height = `${dataBarHeight}%`;
                            dataBar.style.left = `${leftPct}%`;
                            dataBar.style.width = `${widthPct}%`;
                            dataBar.style.backgroundColor = applyTransparency(cellDataBarColor, transparency);
                            dataBar.style.zIndex = "1";
                            if (borderOn) {
                                let finalBorderColor = matchDataBarColor ? cellDataBarColor : borderColor;
                                dataBar.style.border = `${borderThickness}px solid ${finalBorderColor}`;
                                dataBar.style.boxSizing = "border-box";
                            }
                            cell.appendChild(dataBar);
                            if (showZeroLine) {
                                let zeroLine = document.createElement("div");
                                zeroLine.style.position = "absolute";
                                zeroLine.style.top = "0";
                                zeroLine.style.bottom = "0";
                                zeroLine.style.width = "2px";
                                let zLeftPct = ((zeroPoint - min) / range) * 100 * scale;
                                zeroLine.style.left = `calc(${zLeftPct}% - 1px)`;
                                zeroLine.style.backgroundColor = applyTransparency(zeroLineColor, zeroLineTransparency);
                                zeroLine.style.zIndex = "1";
                                cell.appendChild(zeroLine);
                            }
                            // Data bar markers settings
                            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                            if (showMarker) {
                                let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerShape" }, "circle");
                                const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "markerSize" }, 10);
                                let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarMarkers", propertyName: "markerColor" }, "#000000");
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "dataBarMarkers", propertyName: "markerColor" });
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
                            textDiv.style.zIndex = "2";
                            textDiv.textContent = formattedValue;
                            if (labelsOutside) {
                                textDiv.style.position = "absolute";
                                textDiv.style.top = "50%";
                                textDiv.style.transform = "translateY(-50%)";
                                textDiv.style.whiteSpace = "nowrap";
                                if (numValue >= 0) {
                                    textDiv.style.left = `calc(${leftPct + widthPct}% + 4px)`;
                                }
                                else {
                                    textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                }
                            }
                            else {
                                textDiv.style.position = "relative";
                            }
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
                    cell.style.backgroundColor = cellBackgroundColor;
                    cell.style.color = cellTextColor;
                    cell.style.overflow = "hidden";
                    cell.style.textOverflow = "ellipsis";
                    let specSettings = measureSettingsList[measureIndex];
                    let specRowBgColor = isEvenRow ?
                        (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : cellBackgroundColor) :
                        (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : cellBackgroundColor);
                    let specCellTextColor = isEvenRow ?
                        (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) :
                        (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);
                    let effectiveBg = specSettings.applyToValues ? specRowBgColor : cellBackgroundColor;
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
                    let specSettings = measureSettingsList[measureIndex];
                    let efTotalBold = specSettings.applyToTotal && specSettings.bold !== undefined ? specSettings.bold : totalRowBold;
                    let efTotalItalic = specSettings.applyToTotal && specSettings.italic !== undefined ? specSettings.italic : totalRowItalic;
                    let efTotalUnderline = specSettings.applyToTotal && specSettings.underline !== undefined ? specSettings.underline : totalRowUnderline;
                    let efTotalFontFamily = specSettings.applyToTotal && specSettings.fontFamily !== undefined ? specSettings.fontFamily : totalRowFontFamily;
                    let efTotalFontSize = specSettings.applyToTotal && specSettings.fontSize !== undefined ? specSettings.fontSize : totalRowFontSize;
                    let efTotalWordWrap = specSettings.applyToTotal && specSettings.textWrap !== undefined ? specSettings.textWrap : totalRowWordWrap;
                    let efTotalBg = specSettings.applyToTotal && specSettings.backgroundColor ? specSettings.backgroundColor : totalRowBackgroundColor;
                    let efTotalColor = specSettings.applyToTotal && specSettings.textColor ? specSettings.textColor : totalRowTextColor;
                    let efTotalAlign = specSettings.applyToTotal && specSettings.alignment ? specSettings.alignment : "right";
                    applyRowSquash(totalCell, rowHeight, efTotalFontSize, efTotalWordWrap);
                    totalCell.style.fontWeight = efTotalBold ? "bold" : "normal";
                    totalCell.style.fontFamily = efTotalFontFamily;
                    totalCell.style.fontStyle = efTotalItalic ? "italic" : "normal";
                    totalCell.style.textDecoration = efTotalUnderline ? "underline" : "none";
                    totalCell.style.borderRight = `1px solid ${gridBorderColor}`;
                    totalCell.style.backgroundColor = efTotalBg;
                    totalCell.style.color = efTotalColor;
                    totalCell.style.textAlign = efTotalAlign;
                    totalCell.style.overflow = "hidden";
                    totalCell.style.textOverflow = "ellipsis";
                    totalCell.style.whiteSpace = efTotalWordWrap ? "normal" : "nowrap";
                    if (efTotalWordWrap) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBQ0YsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4RCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnREFBZ0QsQ0FBQyxHQUFHLDhDQUE4QyxDQUFDO0FBQy9ILENBQUM7QUFDRCxpRUFBZSw4Q0FBOEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHMvbGliL2RhdGFWaWV3T2JqZWN0LmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHMvbGliL2RhdGFWaWV3T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzL2xpYi9kYXRhVmlld1dpbGRjYXJkLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9zcmMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL3NyYy92aXN1YWwudHMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvZXh0ZXJuYWwgdmFyIFwibnVsbFwiIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi8udG1wL3ByZWNvbXBpbGUvdmlzdWFsUGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IG9iamVjdFtwcm9wZXJ0eU5hbWVdO1xuICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5VmFsdWU7XG59XG4vKiogR2V0cyB0aGUgc29saWQgY29sb3IgZnJvbSBhIGZpbGwgcHJvcGVydHkgdXNpbmcgb25seSBhIHByb3BlcnR5TmFtZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxDb2xvckJ5UHJvcGVydHlOYW1lKG9iamVjdCwgcHJvcGVydHlOYW1lLCBkZWZhdWx0Q29sb3IpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwgcHJvcGVydHlOYW1lKTtcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuc29saWQuY29sb3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhVmlld09iamVjdC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBEYXRhVmlld09iamVjdCBmcm9tIFwiLi9kYXRhVmlld09iamVjdFwiO1xuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBvYmplY3QvcHJvcGVydHkgcGFpci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoIW9iamVjdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIERhdGFWaWV3T2JqZWN0LmdldFZhbHVlKG9iamVjdHNbcHJvcGVydHlJZC5vYmplY3ROYW1lXSwgcHJvcGVydHlJZC5wcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSk7XG59XG4vKiogR2V0cyBhbiBvYmplY3QgZnJvbSBvYmplY3RzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdChvYmplY3RzLCBvYmplY3ROYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAob2JqZWN0cyAmJiBvYmplY3RzW29iamVjdE5hbWVdKSB7XG4gICAgICAgIHJldHVybiBvYmplY3RzW29iamVjdE5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuLyoqIEdldHMgdGhlIHNvbGlkIGNvbG9yIGZyb20gYSBmaWxsIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxDb2xvcihvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0Q29sb3IpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdHMsIHByb3BlcnR5SWQpO1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5zb2xpZC5jb2xvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tb25WYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdHMsIHByb3BlcnR5SWQsIGRlZmF1bHRWYWx1ZSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zb2xpZC5jb2xvcjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgfHwgdmFsdWUgPT09IG51bGxcbiAgICAgICAgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFWaWV3T2JqZWN0cy5qcy5tYXAiLCIvKlxuKiAgUG93ZXIgQkkgVmlzdWFsaXphdGlvbnNcbipcbiogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4qICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiAgTUlUIExpY2Vuc2VcbipcbiogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXG4qICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qXG4qICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qICBUSEUgU09GVFdBUkUuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGFWaWV3V2lsZGNhcmRTZWxlY3RvcihkYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24pIHtcbiAgICBpZiAoZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uID09IG51bGwpIHtcbiAgICAgICAgZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uID0gMCAvKiBEYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24uSW5zdGFuY2VzQW5kVG90YWxzICovO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvciA9IHtcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGFWaWV3V2lsZGNhcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdPcHRpb246IGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YVZpZXdXaWxkY2FyZC5qcy5tYXAiLCIvKipcbiAqIFBvd2VyYmkgdXRpbHMgY29tcG9uZW50cyBjbGFzc2VzIGZvciBjdXN0b20gdmlzdWFsIGZvcm1hdHRpbmcgcGFuZSBvYmplY3RzXG4gKlxuICovXG5pbXBvcnQgKiBhcyBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIgZnJvbSBcIi4vdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHNcIjtcbmNsYXNzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBDYXJkR3JvdXBFbnRpdHkgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgTW9kZWwge1xufVxuLyoqIENvbXBvc2l0ZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgd2l0aCBtdWx0aXBsZSBncm91cHMgKi9cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVDYXJkIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbi8qKiBTaW1wbGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIGluIGEgc2luZ2xlIGdyb3VwICovXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2FyZCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgU2ltcGxlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEaXNwbGF5TmFtZSA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGVzY3JpcHRpb24gPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzbGljZURpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNsaWNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHRoaXMpLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IChfYSA9IGRhdGFWaWV3T2JqZWN0cyA9PT0gbnVsbCB8fCBkYXRhVmlld09iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3T2JqZWN0c1tvYmplY3ROYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMubmFtZV07XG4gICAgICAgIHRoaXMudmFsdWUgPSBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFsaWdubWVudEdyb3VwIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkFsaWdubWVudEdyb3VwXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkFsaWdubWVudEdyb3VwICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbW9kZTogdGhpcy5tb2RlLCBzdXBwb3J0c05vU2VsZWN0aW9uOiB0aGlzLnN1cHBvcnRzTm9TZWxlY3Rpb24gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUb2dnbGVTd2l0Y2hcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVG9nZ2xlU3dpdGNoICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJDb2xvclBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Db2xvclBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGRlZmF1bHRDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3IsIGlzTm9GaWxsSXRlbVN1cHBvcnRlZDogdGhpcy5pc05vRmlsbEl0ZW1TdXBwb3J0ZWQgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE51bVVwRG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJOdW1VcERvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTnVtVXBEb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBOdW1VcERvd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNsaWRlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TbGlkZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRGF0ZVBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EYXRlUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMucGxhY2Vob2xkZXJLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLnBsYWNlaG9sZGVyS2V5KSA6IHRoaXMucGxhY2Vob2xkZXIsIHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbURyb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1lcmdlVmFsdWVzOiB0aGlzLm1lcmdlVmFsdWVzLCBmaWx0ZXJWYWx1ZXM6IHRoaXMuZmlsdGVyVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEdXJhdGlvblBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EdXJhdGlvblBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXJyb3JSYW5nZUNvbnRyb2wgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRXJyb3JSYW5nZUNvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRXJyb3JSYW5nZUNvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZpZWxkUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZpZWxkUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZpZWxkUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzLCBhbGxvd011bHRpcGxlVmFsdWVzOiB0aGlzLmFsbG93TXVsdGlwbGVWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0SW5wdXRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dElucHV0ICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgVGV4dElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0QXJlYVwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0QXJlYSAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250UGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRQaWNrZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmFyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkdyYWRpZW50QmFyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkdyYWRpZW50QmFyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJJbWFnZVVwbG9hZFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5JbWFnZVVwbG9hZCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVkaXRvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJMaXN0RWRpdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lkxpc3RFZGl0b3IgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5VGV4dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJSZWFkT25seVRleHRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuUmVhZE9ubHlUZXh0ICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwZU1hcFNlbGVjdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNoYXBlTWFwU2VsZWN0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2hhcGVNYXBTZWxlY3RvciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvcjogdGhpcy5pc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3IgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRDb250cm9sIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHkuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib2xkOiAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgaXRhbGljOiAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB1bmRlcmxpbmU6IChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZm9udFNpemUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib2xkID8gdGhpcy5ib2xkLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5pdGFsaWMgPyB0aGlzLml0YWxpYy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudW5kZXJsaW5lID8gdGhpcy51bmRlcmxpbmUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuZm9udFNpemUuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWFyZ2luUGFkZGluZyBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJNYXJnaW5QYWRkaW5nXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk1hcmdpblBhZGRpbmcgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5yaWdodC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5yaWdodC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnRvcC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvdHRvbS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5sZWZ0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yaWdodC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMudG9wLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5ib3R0b20uc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVySXRlbSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9zaXRlQ2FyZCwgU2ltcGxlQ2FyZCB9IGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciA9IGxvY2FsaXphdGlvbk1hbmFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIGZyb20gbWV0YWRhdGEgZGF0YVZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhVmlld3MgbWV0YWRhdGEgZGF0YVZpZXcgb2JqZWN0XG4gICAgICogQHJldHVybnMgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWxcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKHR5cGVDbGFzcywgZGF0YVZpZXcpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBjb25zdCBkYXRhVmlld09iamVjdHMgPSAoX2EgPSBkYXRhVmlldyA9PT0gbnVsbCB8fCBkYXRhVmlldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXcubWV0YWRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzO1xuICAgICAgICBpZiAoZGF0YVZpZXdPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgZWFjaCBmb3JtYXR0aW5nIHByb3BlcnR5IGFuZCBzZXQgaXRzIG5ldyB2YWx1ZSBpZiBleGlzdHNcbiAgICAgICAgICAgIChfYiA9IGRlZmF1bHRTZXR0aW5ncy5jYXJkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkKVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgPyBbY2FyZF0gOiBjYXJkLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgdG9wIGxldmVsIHRvZ2dsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gKF9jID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gY29udGFpbmVySXRlbSA9PT0gbnVsbCB8fCBjb250YWluZXJJdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250YWluZXJJdGVtLnNsaWNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgZm9ybWF0dGluZyBtb2RlbCBieSBwYXJzaW5nIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwb3dlcmJpIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsXG4gICAgICovXG4gICAgYnVpbGRGb3JtYXR0aW5nTW9kZWwoZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGluZ01vZGVsID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLmNhcmRzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjYXJkLm9uUHJlUHJvY2VzcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FyZCk7XG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNhcmQgPSBjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZDtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChpc1NpbXBsZUNhcmQgP1xuICAgICAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFVpZCA9IGNhcmRHcm91cEluc3RhbmNlLm5hbWUgKyBcIi1ncm91cFwiO1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgZ3JvdXAgZm9yIGVhY2ggZ3JvdXBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHVpZDogZ3JvdXBVaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBjYXJkR3JvdXBJbnN0YW5jZS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTYXZlU2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5kZWxheVNhdmVTbGljZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRSZWFzb246IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkUmVhc29uLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQuZ3JvdXBzLnB1c2goZm9ybWF0dGluZ0dyb3VwKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGZvcm1hdHRpbmcgbW9kZWwgYWRkcyBkYXRhIHBvaW50cyBvciB0b3AgY2F0ZWdvcmllcyAoTGlrZSB3aGVuIHlvdSBtb2RpZnkgc3BlY2lmaWMgdmlzdWFsIGNhdGVnb3J5IGNvbG9yKS5cbiAgICAgICAgICAgICAgICAvLyB0aGVzZSBjYXRlZ29yaWVzIHVzZSBzYW1lIG9iamVjdCBuYW1lIGFuZCBwcm9wZXJ0eSBuYW1lIGZyb20gY2FwYWJpbGl0aWVzIGFuZCB0aGUgZ2VuZXJhdGVkIHVpZCB3aWxsIGJlIHRoZSBzYW1lIGZvciB0aGVzZSBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIFNvbHV0aW9uID0+IFNhdmUgc2xpY2UgbmFtZXMgdG8gbW9kaWZ5IGVhY2ggc2xpY2UgdWlkIHRvIGJlIHVuaXF1ZSBieSBhZGRpbmcgY291bnRlciB2YWx1ZSB0byB0aGUgbmV3IHNsaWNlIHVpZFxuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJVaWQgPSBncm91cFVpZCArIFwiLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KSA6IGNvbnRhaW5lci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVyVWlkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jb250YWluZXJJdGVtcy5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySWVtTmFtZSA9IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgPyBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5IDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckl0ZW1VaWQgPSBjb250YWluZXJVaWQgKyBjb250YWluZXJJZW1OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJJdGVtVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZXMgYW5kIGFkZCB0aGVtIHRvIGN1cnJlbnQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nQ29udGFpbmVySXRlbS5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLnB1c2goZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0dyb3VwLmNvbnRhaW5lciA9IGZvcm1hdHRpbmdDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nU2xpY2UgPSBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGluZ1NsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGZvcm1hdHRpbmcgc2xpY2UgdWlkIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChzbGljZU5hbWVzW3NsaWNlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdKys7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZS51aWQgPSBgJHtmb3JtYXR0aW5nU2xpY2UudWlkfS0ke3NsaWNlTmFtZXNbc2xpY2UubmFtZV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlcy5wdXNoKGZvcm1hdHRpbmdTbGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBQcm9jZWVkZWQgc2xpY2UgbmFtZXMgYXJlIHNhdmVkIHRvIHByZXZlbnQgZHVwbGljYXRlZCBkZWZhdWx0IGRlc2NyaXB0b3JzIGluIGNhc2Ugb2YgdXNpbmcgXG4gICAgICAgIC8vIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyAmIHNlbGVjdG9ycywgc2luY2UgdGhleSBoYXZlIHRoZSBzYW1lIGRlc2NyaXB0b3Igb2JqZWN0TmFtZSBhbmQgcHJvcGVydHlOYW1lXG4gICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgY29uc3QgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgbGV0IGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQgJiYgY2FyZC50b3BMZXZlbFNsaWNlKVxuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi4oX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSkpO1xuICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgP1xuICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBzbGljZU5hbWVzLCBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKTtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjb250YWluZXJJdGVtLnNsaWNlcywgc2xpY2VOYW1lcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLmNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG4gICAgZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSwgc2xpY2VzLCBzbGljZU5hbWVzLCB0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAodG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgc2xpY2VOYW1lc1t0b3BMZXZlbFNsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRvcExldmVsU2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNsaWNlICYmICFzbGljZU5hbWVzW3NsaWNlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoc2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzLm1hcCIsImltcG9ydCAqIGFzIGZvcm1hdHRpbmdTZXR0aW5ncyBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlXCI7XG5leHBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MsIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQnVpbGQgYW5kIHJldHVybiBmb3JtYXR0aW5nIGRlc2NyaXB0b3IgZm9yIHNpbXBsZSBzbGljZVxuICpcbiAqIEBwYXJhbSBvYmplY3ROYW1lIE9iamVjdCBuYW1lIGZyb20gY2FwYWJpbGl0aWVzXG4gKiBAcGFyYW0gc2xpY2UgZm9ybWF0dGluZyBzaW1wbGUgc2xpY2VcbiAqIEByZXR1cm5zIHNpbXBsZSBzbGljZSBmb3JtYXR0aW5nIGRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgc2xpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICBwcm9wZXJ0eU5hbWU6IHNsaWNlLm5hbWUsXG4gICAgICAgIHNlbGVjdG9yOiBzbGljZS5zZWxlY3RvcixcbiAgICAgICAgYWx0Q29uc3RhbnRWYWx1ZVNlbGVjdG9yOiBzbGljZS5hbHRDb25zdGFudFNlbGVjdG9yLFxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHNsaWNlLmluc3RhbmNlS2luZFxuICAgIH07XG59XG4vKipcbiAqIEdldCBwcm9wZXJ0eSB2YWx1ZSBmcm9tIGRhdGF2aWV3IG9iamVjdHMgaWYgZXhpc3RzXG4gKiBFbHNlIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZSBmcm9tIGZvcm1hdHRpbmcgc2V0dGluZ3Mgb2JqZWN0XG4gKlxuICogQHBhcmFtIHZhbHVlIGRhdGF2aWV3IG9iamVjdCB2YWx1ZVxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBmb3JtYXR0aW5nIHNldHRpbmdzIGRlZmF1bHQgdmFsdWVcbiAqIEByZXR1cm5zIGZvcm1hdHRpbmcgcHJvcGVydHkgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoc2xpY2UsIHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICF2YWx1ZS5zb2xpZCkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUuc29saWQuY29sb3IgfTtcbiAgICB9XG4gICAgaWYgKChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UudHlwZSkgPT09IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi8gJiYgc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IHNsaWNlLml0ZW1zO1xuICAgICAgICByZXR1cm4gaXRlbXNBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzLm1hcCIsImltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCB7IGRhdGFWaWV3V2lsZGNhcmQgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHNcIjtcclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuXHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkID0gZm9ybWF0dGluZ1NldHRpbmdzLlNpbXBsZUNhcmQ7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZSA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TbGljZTtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsID0gZm9ybWF0dGluZ1NldHRpbmdzLk1vZGVsO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZXNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTJcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMzMzMzNcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlVGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgdGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMzMzMzNcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2Y1ZjVmNVwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHN3aXRjaFZhbHVlc1RvUm93cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInN3aXRjaFZhbHVlc1RvUm93c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN3aXRjaCB2YWx1ZXMgdG8gcm93c1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJ2YWx1ZXNcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJWYWx1ZXNcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXHJcbiAgICAgICAgdGhpcy5mb250LCBcclxuICAgICAgICB0aGlzLnRleHRDb2xvciwgXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIFxyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlVGV4dENvbG9yLCBcclxuICAgICAgICB0aGlzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciwgXHJcbiAgICAgICAgdGhpcy50ZXh0V3JhcFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvd0hlaWdodFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwicm93SGVpZ2h0XCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJSb3cgaGVpZ2h0XCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxucHVibGljIGhlYWRlckJvbGQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJoZWFkZXJCb2xkXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIEJvbGRcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcHVibGljIHZhbHVlUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmFsdWVSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZSBSb3cgSGVpZ2h0XCIsXHJcbiAgICAgICAgdmFsdWU6IDMwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIFJvdyBIZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRvdGFsUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUb3RhbCBSb3cgSGVpZ2h0XCIsXHJcbiAgICAgICAgdmFsdWU6IDM1LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy52YWx1ZVJvd0hlaWdodCwgdGhpcy5hbHRlcm5hdGVWYWx1ZVJvd0hlaWdodCwgdGhpcy50b3RhbFJvd0hlaWdodF1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlZhbHVlIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJWYWx1ZSBiYWNrZ3JvdW5kIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJkYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiRGF0YSBiYXIgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDYXRlZ29yeSBjb25kaXRpb25hbCBmb3JtYXR0aW5nXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdG9yOiBkYXRhVmlld1dpbGRjYXJkLmNyZWF0ZURhdGFWaWV3V2lsZGNhcmRTZWxlY3RvcihkYXRhVmlld1dpbGRjYXJkLkRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbi5JbnN0YW5jZXNBbmRUb3RhbHMpLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy50ZXh0Q29sb3JdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhcnNGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIEJhcnNcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgc2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzaG93RGF0YUJhcnMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93RGF0YUJhcnNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IERhdGEgQmFyc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZGF0YUJhckhlaWdodCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImRhdGFCYXJIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEYXRhIEJhciBIZWlnaHQgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDgwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0cmFuc3BhcmVuY3kgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ0cmFuc3BhcmVuY3lcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUcmFuc3BhcmVuY3kgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDIwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBib3JkZXJPbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlck9uXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9yZGVyIE9uXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG1hdGNoRGF0YUJhckNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwibWF0Y2hEYXRhQmFyQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJNYXRjaCBEYXRhIEJhciBDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBib3JkZXJUaGlja25lc3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJUaGlja25lc3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCb3JkZXIgVGhpY2tuZXNzXCIsXHJcbiAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGJvcmRlckNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvcmRlciBDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMwMDAwMDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG1pblZhbHVlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibWluVmFsdWVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJNaW5pbXVtIFZhbHVlXCIsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG1heFZhbHVlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibWF4VmFsdWVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJNYXhpbXVtIFZhbHVlXCIsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGxhYmVsc091dHNpZGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJsYWJlbHNPdXRzaWRlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTGFiZWxzIE91dHNpZGVcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHNob3daZXJvTGluZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3daZXJvTGluZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNob3cgWmVybyBMaW5lXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB6ZXJvTGluZUNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ6ZXJvTGluZUNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiWmVybyBMaW5lIENvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzAwMDAwMFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHplcm9MaW5lVHJhbnNwYXJlbmN5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiemVyb0xpbmVUcmFuc3BhcmVuY3lcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJaZXJvIExpbmUgVHJhbnNwYXJlbmN5ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RTZXJpZXNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNlbGVjdCBTZXJpZXNcIixcclxuICAgICAgICBuYW1lOiBcInNlbGVjdFNlcmllc0dyb3VwXCIsXHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5zZXJpZXNdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZGF0YUJhcnNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkRhdGEgQmFycyBTZXR0aW5nc1wiLFxyXG4gICAgICAgIG5hbWU6IFwiZGF0YUJhcnNHcm91cFwiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuc2hvd0RhdGFCYXJzLCB0aGlzLmRhdGFCYXJIZWlnaHQsIHRoaXMudHJhbnNwYXJlbmN5LCB0aGlzLmJvcmRlck9uLCB0aGlzLm1hdGNoRGF0YUJhckNvbG9yLCB0aGlzLmJvcmRlclRoaWNrbmVzcywgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSwgdGhpcy5sYWJlbHNPdXRzaWRlLCB0aGlzLnNob3daZXJvTGluZSwgdGhpcy56ZXJvTGluZUNvbG9yLCB0aGlzLnplcm9MaW5lVHJhbnNwYXJlbmN5XVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGdyb3VwczogZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwW10gPSBbdGhpcy5zZWxlY3RTZXJpZXNHcm91cCwgdGhpcy5kYXRhQmFyc0dyb3VwXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFCYXJNYXJrZXJzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YUJhck1hcmtlcnNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkRhdGEgQmFyIE1hcmtlcnNcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdGFsc1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInRvdGFsc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiVG90YWxzXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgcHVibGljIHNob3dUb3RhbFJvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dUb3RhbFJvd1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNob3cgVG90YWwgUm93XCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRvdGFsQmVoYXZpb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ0b3RhbEJlaGF2aW9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWVhc3VyZSBTZWxlY3Rpb25cIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJNZWFzdXJlXCIsIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmVcIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTWVhc3VyZVwiLCBkaXNwbGF5TmFtZTogXCJNZWFzdXJlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJTdW1cIiwgZGlzcGxheU5hbWU6IFwiU3VtXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJBdmVyYWdlXCIsIGRpc3BsYXlOYW1lOiBcIkF2ZXJhZ2VcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdW50XCIsIGRpc3BsYXlOYW1lOiBcIkNvdW50XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VudCBEaXN0aW5jdFwiLCBkaXNwbGF5TmFtZTogXCJDb3VudCBEaXN0aW5jdFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTWF4XCIsIGRpc3BsYXlOYW1lOiBcIk1heFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiTWluXCIsIGRpc3BsYXlOYW1lOiBcIk1pblwiIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBmb250ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIixcclxuICAgICAgICAgICAgdmFsdWU6IDEyXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9sZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMzMzMzNcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZDBkMGQwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dFdyYXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0V3JhcFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgd3JhcFwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVzVG9Sb3dzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic3dpdGNoVmFsdWVzVG9Sb3dzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3dpdGNoIHZhbHVlcyB0byByb3dzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy5zaG93VG90YWxSb3csIHRoaXMudG90YWxCZWhhdmlvciwgdGhpcy5mb250LCB0aGlzLnRleHRDb2xvciwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHRoaXMudGV4dFdyYXBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgcHVibGljIGhvcml6b250YWxHcmlkbGluZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZGxpbmVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSG9yaXpvbnRhbCBncmlkbGluZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiaG9yaXpvbnRhbEdyaWRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2QwZDBkMFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGhvcml6b250YWxHcmlkV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZFdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3kgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhvcml6b250YWwgZ3JpZCB0cmFuc3BhcmVuY3kgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsR3JpZGxpbmVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkbGluZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWZXJ0aWNhbCBncmlkbGluZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZDBkMGQwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2ZXJ0aWNhbEdyaWRXaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIldpZHRoXCIsXHJcbiAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIGdyaWQgdHJhbnNwYXJlbmN5ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImdyaWRcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJHcmlkXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRsaW5lcyxcclxuICAgICAgICB0aGlzLmhvcml6b250YWxHcmlkQ29sb3IsXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZFdpZHRoLFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3ksXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRsaW5lcyxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZENvbG9yLFxyXG4gICAgICAgIHRoaXMudmVydGljYWxHcmlkV2lkdGgsXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRUcmFuc3BhcmVuY3lcclxuICAgIF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uSGVhZGVyc1NldHRpbmdzIGV4dGVuZHMgZm9ybWF0dGluZ1NldHRpbmdzLkNvbXBvc2l0ZUNhcmQge1xyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTFcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMxZTNhOGFcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWxpZ25tZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BbGlnbm1lbnRHcm91cCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbm1lbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgYWxpZ25tZW50XCIsXHJcbiAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxyXG4gICAgICAgIG1vZGU6IHBvd2VyYmkudmlzdWFscy5BbGlnbm1lbnRHcm91cE1vZGUuSG9yaXpvbmFsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHRcIixcclxuICAgICAgICBuYW1lOiBcInRleHRcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy5hbGlnbm1lbnQsIHRoaXMudGV4dFdyYXBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaGVhZGVyUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiaGVhZGVyUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIHJvdyBoZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG9wdGlvbnNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk9wdGlvbnNcIixcclxuICAgICAgICBuYW1lOiBcIm9wdGlvbnNcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmhlYWRlclJvd0hlaWdodF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lU2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibmFtZVNlcmllc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNlcmllc1wiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgbmFtZU92ZXJyaWRlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwibmFtZU92ZXJyaWRlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIE5hbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBjdXN0b20gaGVhZGVyIG5hbWVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lc0dyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTmFtZXNcIixcclxuICAgICAgICBuYW1lOiBcIm5hbWVzXCIsXHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5uYW1lU2VyaWVzLCB0aGlzLm5hbWVPdmVycmlkZV1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImNvbHVtbkhlYWRlcnNcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDb2x1bW4gaGVhZGVyc1wiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGdyb3VwczogZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwW10gPSBbdGhpcy50ZXh0R3JvdXAsIHRoaXMub3B0aW9uc0dyb3VwLCB0aGlzLm5hbWVzR3JvdXBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWNpZmljQ29sdW1uU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgc2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFwcGx5VG9IZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhcHBseVRvSGVhZGVyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gaGVhZGVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYXBwbHlUb1RvdGFsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb1RvdGFsXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gdG90YWxcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhcHBseVRvVmFsdWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHZhbHVlc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhcHBseVNldHRpbmdzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBcHBseSBzZXR0aW5ncyB0b1wiLFxyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlTZXR0aW5nc1RvXCIsXHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5zZXJpZXMsIHRoaXMuYXBwbHlUb0hlYWRlciwgdGhpcy5hcHBseVRvVG90YWwsIHRoaXMuYXBwbHlUb1ZhbHVlc11cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBmb250ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIixcclxuICAgICAgICAgICAgdmFsdWU6IDEyXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9sZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDBiOGQ0XCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhbHRlcm5hdGVUZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSB0ZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmNWY1ZjVcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHN3aXRjaFZhbHVlc1RvUm93cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInN3aXRjaFZhbHVlc1RvUm93c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN3aXRjaCB2YWx1ZXMgdG8gcm93c1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhbGlnbm1lbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkFsaWdubWVudEdyb3VwKHtcclxuICAgICAgICBuYW1lOiBcImFsaWdubWVudFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsaWdubWVudFwiLFxyXG4gICAgICAgIHZhbHVlOiBcImxlZnRcIixcclxuICAgICAgICBtb2RlOiBwb3dlcmJpLnZpc3VhbHMuQWxpZ25tZW50R3JvdXBNb2RlLkhvcml6b25hbCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBkaXNwbGF5VW5pdHMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkF1dG9Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkaXNwbGF5VW5pdHNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEaXNwbGF5IHVuaXRzXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgZGVjaW1hbFBsYWNlcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImRlY2ltYWxQbGFjZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZSBkZWNpbWFsIHBsYWNlc1wiLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlc1wiLFxyXG4gICAgICAgIG5hbWU6IFwic3BlY2lmaWNWYWx1ZXNcIiwgLy8gTk9URTogcmVuYW1lZCB0byBzcGVjaWZpY1ZhbHVlcyB0byBhdm9pZCBjbGFzaCB3aXRoIGdsb2JhbCAndmFsdWVzJyBvYmplY3RcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy5hbHRlcm5hdGVUZXh0Q29sb3IsIHRoaXMuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLCB0aGlzLmFsaWdubWVudCwgdGhpcy5kaXNwbGF5VW5pdHMsIHRoaXMuZGVjaW1hbFBsYWNlcywgdGhpcy50ZXh0V3JhcF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcInNwZWNpZmljQ29sdW1uXCI7XHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiU3BlY2lmaWMgY29sdW1uXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgZ3JvdXBzOiBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXBbXSA9IFt0aGlzLmFwcGx5U2V0dGluZ3NHcm91cCwgdGhpcy52YWx1ZXNHcm91cF07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5XaWR0aFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImNvbHVtbldpZHRoXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDb2x1bW4gV2lkdGhcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeUNvbHVtbldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiY2F0ZWdvcnlDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNhdGVnb3J5IENvbHVtbiBXaWR0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAxNTBcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbGlnbmVkQ29sdW1ucyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImFsaWduZWRDb2x1bW5zXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWxpZ25lZCBjb2x1bW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZUNvbHVtbldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlIENvbHVtbiBXaWR0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAxMDBcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeVdvcmRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiY2F0ZWdvcnlXb3JkV3JhcFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNhdGVnb3J5IFdvcmQgV3JhcFwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW3RoaXMuY2F0ZWdvcnlDb2x1bW5XaWR0aCwgdGhpcy5hbGlnbmVkQ29sdW1ucywgdGhpcy52YWx1ZUNvbHVtbldpZHRoLCB0aGlzLmNhdGVnb3J5V29yZFdyYXBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBwdWJsaWMgdmFsdWVzTWVudTogVmFsdWVzU2V0dGluZ3MgPSBuZXcgVmFsdWVzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBzcGVjaWZpY0NvbHVtbjogU3BlY2lmaWNDb2x1bW5TZXR0aW5ncyA9IG5ldyBTcGVjaWZpY0NvbHVtblNldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgY29sdW1uSGVhZGVyczogQ29sdW1uSGVhZGVyc1NldHRpbmdzID0gbmV3IENvbHVtbkhlYWRlcnNTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHJvd0hlaWdodDogUm93SGVpZ2h0U2V0dGluZ3MgPSBuZXcgUm93SGVpZ2h0U2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBjYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZzogQ2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBDYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgdmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmc6IFZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgVmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHZhbHVlQmFja2dyb3VuZENvbmRpdGlvbmFsRm9ybWF0dGluZzogVmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgVmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBkYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZzogRGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBEYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZGF0YUJhcnNGb3JtYXR0aW5nOiBEYXRhQmFyc0Zvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBEYXRhQmFyc0Zvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGRhdGFCYXJNYXJrZXJzOiBEYXRhQmFyTWFya2Vyc1NldHRpbmdzID0gbmV3IERhdGFCYXJNYXJrZXJzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyB0b3RhbHM6IFRvdGFsc1NldHRpbmdzID0gbmV3IFRvdGFsc1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZ3JpZE1lbnU6IEdyaWRTZXR0aW5ncyA9IG5ldyBHcmlkU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGhTZXR0aW5ncyA9IG5ldyBDb2x1bW5XaWR0aFNldHRpbmdzKCk7XHJcblxyXG4gICAgcHVibGljIGNhcmRzOiBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkW10gPSBbdGhpcy5ncmlkTWVudSwgdGhpcy52YWx1ZXNNZW51LCB0aGlzLnRvdGFscywgdGhpcy5yb3dIZWlnaHQsIHRoaXMuY29sdW1uV2lkdGgsIHRoaXMuY29sdW1uSGVhZGVycywgdGhpcy5zcGVjaWZpY0NvbHVtbiwgdGhpcy5kYXRhQmFyc0Zvcm1hdHRpbmcsIHRoaXMuZGF0YUJhck1hcmtlcnMsIHRoaXMuY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmcsIHRoaXMudmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmcsIHRoaXMuZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmcsIHRoaXMudmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nXTtcclxufSIsIi8qXHJcbiogIFBvd2VyIEJJIFZpc3VhbCBDTElcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxyXG4qICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qICBNSVQgTGljZW5zZVxyXG4qXHJcbiogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4qICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4qICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4qXHJcbiogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiogIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qXHJcbiogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4qICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4qICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4qICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiogIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLy4uL3N0eWxlL3Zpc3VhbC5sZXNzXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcclxuaW1wb3J0IFZpc3VhbFVwZGF0ZU9wdGlvbnMgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbFVwZGF0ZU9wdGlvbnM7XHJcbmltcG9ydCBJVmlzdWFsID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsO1xyXG5pbXBvcnQgRGF0YVZpZXcgPSBwb3dlcmJpLkRhdGFWaWV3O1xyXG5pbXBvcnQgeyBWaXN1YWxTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UsIGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCB7IGRhdGFWaWV3T2JqZWN0cywgZGF0YVZpZXdXaWxkY2FyZCB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuICAgIHByaXZhdGUgdmlzdWFsU2V0dGluZ3M6IFZpc3VhbFNldHRpbmdzO1xyXG4gICAgcHJpdmF0ZSBkYXRhVmlldzogRGF0YVZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFibGUtY29udGFpbmVyXCI7XHJcbiAgICAgICAgb3B0aW9ucy5lbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc05hbWUgPSAncGJpLXRhYmxlJztcclxuICAgICAgICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlID0gbmV3IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnZpc3VhbFNldHRpbmdzID0gbmV3IFZpc3VhbFNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZvcm1hdHRpbmdNb2RlbCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwodGhpcy52aXN1YWxTZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShvcHRpb25zOiBWaXN1YWxVcGRhdGVPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YVZpZXdzICYmIG9wdGlvbnMuZGF0YVZpZXdzWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzdWFsU2V0dGluZ3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UucG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbChWaXN1YWxTZXR0aW5ncywgb3B0aW9ucy5kYXRhVmlld3NbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07IC8vIFVwZGF0ZSBkYXRhVmlldyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmNvbHVtbldpZHRoO1xyXG4gICAgICAgIGNvbnN0IHJvd0hlaWdodFNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5yb3dIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnZhbHVlc01lbnU7XHJcbiAgICAgICAgY29uc3QgY2VsbEl0YWxpYyA9IHZhbHVlc1NldHRpbmdzLmZvbnQuaXRhbGljPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBjZWxsVW5kZXJsaW5lID0gdmFsdWVzU2V0dGluZ3MuZm9udC51bmRlcmxpbmU/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2xvciA9IHZhbHVlc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbHRlcm5hdGVUZXh0Q29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2VsbEZvbnRGYW1pbHkgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnRvdGFscztcclxuICAgICAgICBjb25zdCBzaG93VG90YWxSb3cgPSB0b3RhbHNTZXR0aW5ncy5zaG93VG90YWxSb3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dJdGFsaWMgPSB0b3RhbHNTZXR0aW5ncy5mb250Lml0YWxpYz8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dXb3JkV3JhcCA9IHRvdGFsc1NldHRpbmdzLnRleHRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Rm9udFNpemUgPSB0b3RhbHNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Rm9udEZhbWlseSA9IHRvdGFsc1NldHRpbmdzLmZvbnQuZm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1RleHRDb2xvciA9IHRvdGFsc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNvbHVtbldpZHRoID0gY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5V29yZFdyYXAgPSBjb2x1bW5XaWR0aFNldHRpbmdzLmNhdGVnb3J5V29yZFdyYXAudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVXb3JkV3JhcCA9IHZhbHVlc1NldHRpbmdzLnRleHRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY29sdW1uSGVhZGVycztcclxuICAgICAgICBjb25zdCBoZWFkZXJXb3JkV3JhcCA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy50ZXh0V3JhcD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGggPSBjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyUm93SGVpZ2h0ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmhlYWRlclJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZVJvd0hlaWdodCA9IHJvd0hlaWdodFNldHRpbmdzLnZhbHVlUm93SGVpZ2h0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0ID0gcm93SGVpZ2h0U2V0dGluZ3MuYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dIZWlnaHQgPSByb3dIZWlnaHRTZXR0aW5ncy50b3RhbFJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJGb250U2l6ZSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJvbGQgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC5ib2xkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckl0YWxpYyA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250Lml0YWxpYy52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJVbmRlcmxpbmUgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC51bmRlcmxpbmUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRm9udEZhbWlseSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQWxpZ25tZW50ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmFsaWdubWVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBjZWxsRm9udFNpemUgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQm9sZCA9IHZhbHVlc1NldHRpbmdzLmZvbnQuYm9sZD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dCb2xkID0gdG90YWxzU2V0dGluZ3MuZm9udC5ib2xkPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1VuZGVybGluZSA9IHRvdGFsc1NldHRpbmdzLmZvbnQudW5kZXJsaW5lPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gdmFsdWVzU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhY2tncm91bmRDb2xvciA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dENvbG9yID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0JhY2tncm91bmRDb2xvciA9IHRvdGFsc1NldHRpbmdzLmJhY2tncm91bmRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmdyaWRNZW51O1xyXG4gICAgICAgIGNvbnN0IGdyaWRCb3JkZXJDb2xvciA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q0ZTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmc7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENhdGVnb3J5VGV4dENvbG9yID0gY2F0ZWdvcnlDRlNldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZUNGU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIHZhbHVlQ0ZTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuICAgICAgICBjb25zdCB2YWx1ZUJnQ0ZTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MudmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIHZhbHVlQmdDRlNldHRpbmdzLnNsaWNlcyA9IFtdOyAvLyBXaWxsIGJlIHBvcHVsYXRlZCBkeW5hbWljYWxseSBwZXItbWVhc3VyZVxyXG5cclxuICAgICAgICB0b3RhbHNTZXR0aW5ncy5zbGljZXMgPSBbXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnNob3dUb3RhbFJvdyxcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MuZm9udCxcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MudGV4dENvbG9yLFxyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnRleHRXcmFwXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUJhcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuZGF0YUJhcnNGb3JtYXR0aW5nO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhQmFyc0NGU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIGRhdGFCYXJzQ0ZTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUJhck1hcmtlcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuZGF0YUJhck1hcmtlcnM7XHJcbiAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgY29sdW1uV2lkdGggc2xpY2VzOiBiYXNlIHNsaWNlcyBhbHdheXMgc2hvd24sIHBlci1tZWFzdXJlIHNsaWNlcyBhZGRlZCBkeW5hbWljYWxseSB3aGVuIG5vdCBhbGlnbmVkXHJcbiAgICAgICAgaWYgKGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy5zbGljZXMgPSBbY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLCBjb2x1bW5XaWR0aFNldHRpbmdzLmFsaWduZWRDb2x1bW5zLCBjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3Muc2xpY2VzID0gW2NvbHVtbldpZHRoU2V0dGluZ3MuY2F0ZWdvcnlDb2x1bW5XaWR0aCwgY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1uc107XHJcbiAgICAgICAgICAgIC8vIFBlci1tZWFzdXJlIHdpZHRoIHNsaWNlcyB3aWxsIGJlIGFkZGVkIGluIHRoZSB2YWx1ZXMuZm9yRWFjaCBsb29wIGJlbG93XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBoZXggdG8gcmdiYVxyXG4gICAgICAgIGNvbnN0IGFwcGx5VHJhbnNwYXJlbmN5ID0gKGhleDogc3RyaW5nLCB0cmFuc3BhcmVuY3lQY3Q6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaGV4KSByZXR1cm4gaGV4O1xyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBDRiBoZXggdmFsdWVzOiBzdHJpcCBsZWFkaW5nIG1pbnVzLCBlbnN1cmUgIyBwcmVmaXgsIHRha2UgZmlyc3QgNyBjaGFyc1xyXG4gICAgICAgICAgICBsZXQgY2xlYW5lZCA9IGhleC5yZXBsYWNlKC9eLS8sICcnKTtcclxuICAgICAgICAgICAgaWYgKCFjbGVhbmVkLnN0YXJ0c1dpdGgoXCIjXCIpKSBjbGVhbmVkID0gXCIjXCIgKyBjbGVhbmVkO1xyXG4gICAgICAgICAgICBpZiAoY2xlYW5lZC5sZW5ndGggPT09IDkpIGNsZWFuZWQgPSBjbGVhbmVkLnN1YnN0cmluZygwLCA3KTsgLy8gI1JSR0dCQkFBIC0+ICNSUkdHQkJcclxuICAgICAgICAgICAgbGV0IGFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgMSAtICh0cmFuc3BhcmVuY3lQY3QgLyAxMDApKSk7XHJcbiAgICAgICAgICAgIGlmIChjbGVhbmVkLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhbmVkLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChjbGVhbmVkWzFdICsgY2xlYW5lZFsxXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChjbGVhbmVkWzJdICsgY2xlYW5lZFsyXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChjbGVhbmVkWzNdICsgY2xlYW5lZFszXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGVhbmVkLmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChjbGVhbmVkWzFdICsgY2xlYW5lZFsyXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChjbGVhbmVkWzNdICsgY2xlYW5lZFs0XSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChjbGVhbmVkWzVdICsgY2xlYW5lZFs2XSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YWxwaGF9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhleDsgLy8gZmFsbGJhY2sgaWYgbm90IGhleFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhvcml6TGluZXMgPSBncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRsaW5lcy52YWx1ZTtcclxuICAgICAgICBjb25zdCBob3JpekNvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkQ29sb3IudmFsdWUudmFsdWUsIGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgaG9yaXpXaWR0aCA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZFdpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhvcml6Qm9yZGVyVmFsdWUgPSBob3JpekxpbmVzID8gYCR7aG9yaXpXaWR0aH1weCBzb2xpZCAke2hvcml6Q29sb3J9YCA6ICdub25lJztcclxuICAgICAgICBjb25zdCBob3JpekJvcmRlcjJ4VmFsdWUgPSBob3JpekxpbmVzID8gYCR7aG9yaXpXaWR0aCAqIDJ9cHggc29saWQgJHtob3JpekNvbG9yfWAgOiAnbm9uZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRMaW5lcyA9IGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRsaW5lcy52YWx1ZTtcclxuICAgICAgICBjb25zdCB2ZXJ0Q29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeShncmlkU2V0dGluZ3MudmVydGljYWxHcmlkQ29sb3IudmFsdWUudmFsdWUsIGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRUcmFuc3BhcmVuY3kudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHZlcnRXaWR0aCA9IGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRXaWR0aC52YWx1ZTtcclxuICAgICAgICBjb25zdCB2ZXJ0Qm9yZGVyVmFsdWUgPSB2ZXJ0TGluZXMgPyBgJHt2ZXJ0V2lkdGh9cHggc29saWQgJHt2ZXJ0Q29sb3J9YCA6ICdub25lJztcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0ZXh0IGNvbG9yIGZvciBhIGNhdGVnb3J5IHJvdywgc3VwcG9ydGluZyBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdE51bWJlciA9IChudW06IG51bWJlciwgdW5pdHM6IG51bWJlciwgZGVjaW1hbHM6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXZpc29yID0gMTtcclxuICAgICAgICAgICAgbGV0IHN1ZmZpeCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh1bml0cyA9PT0gMCkgeyAvLyBBdXRvXHJcbiAgICAgICAgICAgICAgICBsZXQgYWJzTnVtID0gTWF0aC5hYnMobnVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChhYnNOdW0gPj0gMTAwMDAwMDAwMDAwMCkgeyBkaXZpc29yID0gMTAwMDAwMDAwMDAwMDsgc3VmZml4ID0gXCJUXCI7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFic051bSA+PSAxMDAwMDAwMDAwKSB7IGRpdmlzb3IgPSAxMDAwMDAwMDAwOyBzdWZmaXggPSBcImJuXCI7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFic051bSA+PSAxMDAwMDAwKSB7IGRpdmlzb3IgPSAxMDAwMDAwOyBzdWZmaXggPSBcIk1cIjsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJzTnVtID49IDEwMDApIHsgZGl2aXNvciA9IDEwMDA7IHN1ZmZpeCA9IFwiS1wiOyB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZpc29yID0gdW5pdHM7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdHMgPT09IDEwMDApIHN1ZmZpeCA9IFwiS1wiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDApIHN1ZmZpeCA9IFwiTVwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDApIHN1ZmZpeCA9IFwiYm5cIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwMDAwMDAwKSBzdWZmaXggPSBcIlRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChudW0gLyBkaXZpc29yKS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzXHJcbiAgICAgICAgICAgIH0pICsgc3VmZml4O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGdldENhdGVnb3J5VGV4dENvbG9yID0gKHJvd0luZGV4OiBudW1iZXIsIGRhdGFWaWV3OiBEYXRhVmlldyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Lm9iamVjdHMgJiYgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q2F0ZWdvcnlUZXh0Q29sb3I7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFwcGx5IHNxdWFzaGluZyByb3cgaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgYXBwbHlSb3dTcXVhc2ggPSAoY2VsbDogSFRNTEVsZW1lbnQsIHJvd0hlaWdodDogbnVtYmVyLCBmb250U2l6ZTogbnVtYmVyLCB3b3JkV3JhcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93SGVpZ2h0IDw9IDIpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IGAke01hdGgubWluKGZvbnRTaXplLCBNYXRoLm1heCg4LCByb3dIZWlnaHQgLSA2KSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wYWRkaW5nID0gXCJcIjsgLy8gZmFsbGJhY2sgdG8gQ1NTIHBhZGRpbmdcclxuICAgICAgICAgICAgICAgIGlmICghd29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmxpbmVIZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmxpbmVIZWlnaHQgPSBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXBwbHlWZXJ0aWNhbEdyaWRCb3JkZXIgPSAoY2VsbDogSFRNTEVsZW1lbnQsIGlzTGFzdENlbGw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpc0xhc3RDZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXBwbHlUb3RhbFJvd1N0eWxlcyA9IChjZWxsOiBIVE1MRWxlbWVudCwgd2lkdGg6IG51bWJlciwgd29yZFdyYXA6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgdG90YWxSb3dIZWlnaHQsIHRvdGFsUm93Rm9udFNpemUsIHdvcmRXcmFwKTtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdG90YWxSb3dCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gdG90YWxSb3dVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udEZhbWlseSA9IHRvdGFsUm93Rm9udEZhbWlseTtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSB0b3RhbFJvd0l0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvdGFsUm93QmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gd29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgaWYgKHdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByb3csIHN1cHBvcnRpbmcgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1xyXG4gICAgICAgIGNvbnN0IGdldFJvd0JhY2tncm91bmRDb2xvciA9IChyb3dJbmRleDogbnVtYmVyLCBpc0V2ZW5Sb3c6IGJvb2xlYW4sIGRhdGFWaWV3OiBEYXRhVmlldyk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldENvbG9yUHJvcCA9IGlzRXZlblJvdyA/IFwiYmFja2dyb3VuZENvbG9yXCIgOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSBpc0V2ZW5Sb3cgPyBiYWNrZ3JvdW5kQ29sb3IgOiBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcyAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5vYmplY3RzICYmIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5vYmplY3RzW3Jvd0luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInRhYmxlXCIsIHByb3BlcnR5TmFtZTogdGFyZ2V0Q29sb3JQcm9wIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCByb3cgYmFja2dyb3VuZCBjb2xvciwgc3VwcG9ydGluZyBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcbiAgICAgICAgd2hpbGUgKHRoaXMudGFibGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnJlbW92ZUNoaWxkKHRoaXMudGFibGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucy5kYXRhVmlld3MgfHwgb3B0aW9ucy5kYXRhVmlld3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIk5vIGRhdGEgYXZhaWxhYmxlXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhVmlldzogRGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuXHJcbiAgICAgICAgbGV0IGhhc0NhdGVnb3JpZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IGhhc0NhdGVnb3JpZXMgPyBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdIDogbnVsbDtcclxuICAgICAgICBsZXQgdmFsdWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzID8gZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZXMgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJObyBkYXRhIGF2YWlsYWJsZVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzd2l0Y2hWYWx1ZXNUb1Jvd3MgPSB2YWx1ZXNTZXR0aW5ncy5zd2l0Y2hWYWx1ZXNUb1Jvd3M/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IGhhc0NhdGVnb3JpZXMgJiYgY2F0ZWdvcmllcy52YWx1ZXMgPyBjYXRlZ29yaWVzLnZhbHVlcy5sZW5ndGggOiAodmFsdWVzWzBdLnZhbHVlcyA/IHZhbHVlc1swXS52YWx1ZXMubGVuZ3RoIDogMSk7XHJcblxyXG4gICAgICAgIC8vIFByZS1wcm9jZXNzIG1lYXN1cmUgc2V0dGluZ3MgdG8gcG9wdWxhdGUgZm9ybWF0dGluZyBtb2RlbCBwcm9wZXJseVxyXG4gICAgICAgIGxldCBtZWFzdXJlSGVhZGVyczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBsZXQgbWVhc3VyZUhlYWRlck92ZXJyaWRlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBcclxuaW50ZXJmYWNlIE1lYXN1cmVTcGVjaWZpY1NldHRpbmdzIHtcclxuICAgIHRleHRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhbHRlcm5hdGVUZXh0Q29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYWxpZ25tZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhcHBseVRvSGVhZGVyOiBib29sZWFuO1xyXG4gICAgYXBwbHlUb1ZhbHVlczogYm9vbGVhbjtcclxuICAgIGFwcGx5VG9Ub3RhbDogYm9vbGVhbjtcclxuICAgIGRpc3BsYXlVbml0czogbnVtYmVyO1xyXG4gICAgZGVjaW1hbFBsYWNlczogbnVtYmVyO1xyXG4gICAgZm9udEZhbWlseTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgZm9udFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGJvbGQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBpdGFsaWM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICB1bmRlcmxpbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICB0ZXh0V3JhcDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuICAgICAgICAgIGxldCBtZWFzdXJlU2V0dGluZ3NMaXN0OiBNZWFzdXJlU3BlY2lmaWNTZXR0aW5nc1tdID0gW107XHJcbiAgICAgICAgICBsZXQgdmFsdWVDb2x1bW5XaWR0aHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHNwZWNPYmogPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cz8uc3BlY2lmaWNDb2x1bW47XHJcbiAgICAgICAgICAgICAgbGV0IHNldHRpbmdzOiBNZWFzdXJlU3BlY2lmaWNTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGVUZXh0Q29sb3I6IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIgfSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsaWdubWVudFwiIH0sIHVuZGVmaW5lZCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBhcHBseVRvSGVhZGVyOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb0hlYWRlclwiIH0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICBhcHBseVRvVmFsdWVzOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiIH0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICBhcHBseVRvVG90YWw6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhcHBseVRvVG90YWxcIiB9LCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheVVuaXRzOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZGlzcGxheVVuaXRzXCIgfSwgMCksXHJcbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXM6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkZWNpbWFsUGxhY2VzXCIgfSwgMSksXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJmb250RmFtaWx5XCIgfSwgdW5kZWZpbmVkKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZm9udFNpemVcIiB9LCB1bmRlZmluZWQpIGFzIG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgYm9sZDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImJvbGRcIiB9LCB1bmRlZmluZWQpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGl0YWxpYzogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcIml0YWxpY1wiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwidW5kZXJsaW5lXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRXcmFwXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBtZWFzdXJlU2V0dGluZ3NMaXN0LnB1c2goc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYXlOYW1lID0gdmFsdWVDb2x1bW4uc291cmNlLmRpc3BsYXlOYW1lIHx8IGBNZWFzdXJlICR7bWVhc3VyZUhlYWRlcnMubGVuZ3RoICsgMX1gO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVycy5wdXNoKGRpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBuYW1lT3ZlcnJpZGUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImNvbHVtbkhlYWRlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm5hbWVPdmVycmlkZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXJPdmVycmlkZXMucHVzaChuYW1lT3ZlcnJpZGUgIT09IFwiXCIgPyBuYW1lT3ZlcnJpZGUgOiBkaXNwbGF5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeU5hbWUgPSB2YWx1ZUNvbHVtbi5zb3VyY2UucXVlcnlOYW1lO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1ucy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVDb2x1bW5XaWR0aHMucHVzaChjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGgudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpY1dpZHRoID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5XaWR0aFwiLCBwcm9wZXJ0eU5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoLnZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVDb2x1bW5XaWR0aHMucHVzaChzcGVjaWZpY1dpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgcGVyLW1lYXN1cmUgd2lkdGggc2xpY2Ugd2l0aCBzZWxlY3RvciBzbyBQb3dlciBCSSBwZXJzaXN0cyBpdCBwZXItbWVhc3VyZVxyXG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWx1ZUNvbHVtbldpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgV2lkdGhcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3BlY2lmaWNXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4vLyBDcmVhdGUgdGhlIGNvbXBvc2l0ZSBzZWxlY3RvciBmb3IgcGVyLXJvdyBydWxlIGV2YWx1YXRpb25cclxuICAgICAgICAgICAgICBjb25zdCB3aWxkY2FyZFNlbGVjdG9yID0gZGF0YVZpZXdXaWxkY2FyZC5jcmVhdGVEYXRhVmlld1dpbGRjYXJkU2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFWaWV3V2lsZGNhcmQuRGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uLkluc3RhbmNlc0FuZFRvdGFsc1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9zaXRlU2VsZWN0b3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBxdWVyeU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHdpbGRjYXJkU2VsZWN0b3IuZGF0YVxyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIC8vIEJ1aWxkIGR5bmFtaWMgc2V0dGluZ3Mgc2xpY2UgZm9yIHRoaXMgbWVhc3VyZVxyXG4gICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YWx1ZUNGU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgVGV4dCBDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGNvbXBvc2l0ZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgYWx0Q29uc3RhbnRTZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUJhY2tncm91bmRDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJhY2tncm91bmRDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdmFsdWVCZ0NGU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIEJhY2tncm91bmQgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IGRlZmF1bHRNZWFzdXJlQmdDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogY29tcG9zaXRlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgIGFsdENvbnN0YW50U2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGF0YSBiYXIgY29sb3IgQ0Y6IHJlZ2lzdGVyIHBlci1tZWFzdXJlIHNsaWNlIG9uIHRoZSBzaW1wbGUgY2FyZFxyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0RGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgXCIjMzFiNmZkXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGF0YUJhcnNDRlNldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkYXRhQmFyQ29sb3JcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIERhdGEgQmFyIENvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyB2YWx1ZTogZGVmYXVsdERhdGFCYXJDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjb21wb3NpdGVTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGFsdENvbnN0YW50U2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEYXRhIGJhcnMgc2V0dGluZ3NcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gRGF0YSBiYXIgbWFya2VycyBzZXR0aW5nc1xyXG4gICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93TWFya2VyXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBTaG93IE1hcmtlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNob3dNYXJrZXIsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG93TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZUl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiY3Jvc3NcIiwgZGlzcGxheU5hbWU6IFwiQ3Jvc3NcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiY2lyY2xlXCIsIGRpc3BsYXlOYW1lOiBcIkNpcmNsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJob3Jpem9udGFsTGluZVwiLCBkaXNwbGF5TmFtZTogXCJIb3Jpem9udGFsIExpbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWxMaW5lXCIsIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIExpbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwic2VtaUNpcmNsZVwiLCBkaXNwbGF5TmFtZTogXCJTZW1pIENpcmNsZVwiIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2hhcGVJdGVtID0gbWFya2VyU2hhcGVJdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gbWFya2VyU2hhcGUpIHx8IG1hcmtlclNoYXBlSXRlbXNbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXJrZXJTaGFwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE1hcmtlciBTaGFwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50U2hhcGVJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBtYXJrZXJTaGFwZUl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtlckNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWFya2VyIENvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IG1hcmtlckNvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2VyU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE1hcmtlciBTaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hcmtlclNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgdG90YWxCZWhhdmlvclJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJ0b3RhbHNcIiwgcHJvcGVydHlOYW1lOiBcInRvdGFsQmVoYXZpb3JcIiB9LCBcIlN1bVwiKTtcclxuICAgICAgICAgICAgICBjb25zdCB0b3RhbEJlaGF2aW9yVmFsID0gdHlwZW9mIHRvdGFsQmVoYXZpb3JSYXcgPT09IFwic3RyaW5nXCIgPyB0b3RhbEJlaGF2aW9yUmF3IDogKHRvdGFsQmVoYXZpb3JSYXcudmFsdWUgfHwgXCJTdW1cIik7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHRvdGFsQmVoYXZpb3JJdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWFzdXJlXCIsIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIlN1bVwiLCBkaXNwbGF5TmFtZTogXCJTdW1cIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIkF2ZXJhZ2VcIiwgZGlzcGxheU5hbWU6IFwiQXZlcmFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnRcIiwgZGlzcGxheU5hbWU6IFwiQ291bnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIkNvdW50IERpc3RpbmN0XCIsIGRpc3BsYXlOYW1lOiBcIkNvdW50IERpc3RpbmN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJNYXhcIiwgZGlzcGxheU5hbWU6IFwiTWF4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJNaW5cIiwgZGlzcGxheU5hbWU6IFwiTWluXCIgfVxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJlaGF2aW9ySXRlbSA9IHRvdGFsQmVoYXZpb3JJdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gdG90YWxCZWhhdmlvclZhbCkgfHwgdG90YWxCZWhhdmlvckl0ZW1zWzFdO1xyXG5cclxuICAgICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5zbGljZXMuc3BsaWNlKG1lYXN1cmVIZWFkZXJzLmxlbmd0aCwgMCwgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInRvdGFsQmVoYXZpb3JcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWVhc3VyZSBTZWxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRCZWhhdmlvckl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0b3RhbEJlaGF2aW9ySXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFBvcHVsYXRlIHNwZWNpZmljQ29sdW1uIHNlcmllcyBkcm9wZG93biBhbmQgcmVidWlsZCB2YWx1ZSBzbGljZXMgd2l0aCBwZXItbWVhc3VyZSBzZWxlY3RvclxyXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3Muc3BlY2lmaWNDb2x1bW47XHJcbiAgICAgICAgICBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtcyA9IG1lYXN1cmVIZWFkZXJzLm1hcChuYW1lID0+ICh7IHZhbHVlOiBuYW1lLCBkaXNwbGF5TmFtZTogbmFtZSB9KSk7XHJcbiAgICAgICAgICAvLyBSZWFkIHBlcnNpc3RlZCBzZXJpZXMgdmFsdWUgZnJvbSBkYXRhVmlldyBtZXRhZGF0YSBvYmplY3RzXHJcbiAgICAgICAgICBjb25zdCBwZXJzaXN0ZWRTZXJpZXMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFWaWV3Lm1ldGFkYXRhLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJzZXJpZXNcIiB9LFxyXG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoZWRJdGVtID0gcGVyc2lzdGVkU2VyaWVzXHJcbiAgICAgICAgICAgICAgPyBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gcGVyc2lzdGVkU2VyaWVzKVxyXG4gICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLnZhbHVlID0gbWF0Y2hlZEl0ZW0gfHwgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMuaXRlbXNbMF0gfHwgeyB2YWx1ZTogXCJcIiwgZGlzcGxheU5hbWU6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgICAvLyBGaW5kIHRoZSBxdWVyeU5hbWUgZm9yIHRoZSBzZWxlY3RlZCBtZWFzdXJlIHNvIHNsaWNlcyBwZXJzaXN0IHRvIHRoZSBjb3JyZWN0IHBlci1tZWFzdXJlIG9iamVjdHNcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2VyaWVzTmFtZSA9IHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLnZhbHVlPy52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE1lYXN1cmVJZHggPSBtZWFzdXJlSGVhZGVycy5pbmRleE9mKHNlbGVjdGVkU2VyaWVzTmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlQ29sdW1uID0gc2VsZWN0ZWRNZWFzdXJlSWR4ID49IDAgPyB2YWx1ZXNbc2VsZWN0ZWRNZWFzdXJlSWR4XSA6IG51bGw7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFF1ZXJ5TmFtZSA9IHNlbGVjdGVkVmFsdWVDb2x1bW4/LnNvdXJjZT8ucXVlcnlOYW1lO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3RzID0gc2VsZWN0ZWRWYWx1ZUNvbHVtbj8uc291cmNlPy5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RlZFF1ZXJ5TmFtZSA/IHsgbWV0YWRhdGE6IHNlbGVjdGVkUXVlcnlOYW1lIH0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgLy8gUmVhZCBjdXJyZW50IHBlci1tZWFzdXJlIHZhbHVlcyBmb3IgdGhlIHNlbGVjdGVkIGNvbHVtblxyXG4gICAgICAgICAgY29uc3Qgc2NUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQWx0VGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQWx0QmdDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Ioc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0FwcGx5VG9IZWFkZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9IZWFkZXJcIiB9LCB0cnVlKTtcclxuICAgICAgICAgIGNvbnN0IHNjQXBwbHlUb1ZhbHVlcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBcHBseVRvVG90YWwgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9Ub3RhbFwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NGb250RmFtaWx5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRGYW1pbHlcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NGb250U2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJmb250U2l6ZVwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0JvbGQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImJvbGRcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NJdGFsaWMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcIml0YWxpY1wiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY1VuZGVybGluZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwidW5kZXJsaW5lXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQWxpZ25tZW50ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsaWdubWVudFwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0Rpc3BsYXlVbml0cyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkaXNwbGF5VW5pdHNcIiB9LCAwKTtcclxuICAgICAgICAgIGNvbnN0IHNjRGVjaW1hbFBsYWNlcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkZWNpbWFsUGxhY2VzXCIgfSwgMSk7XHJcbiAgICAgICAgICBjb25zdCBzY1RleHRXcmFwID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0V3JhcFwiIH0sIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgY29sdW1uSGVhZGVycyBuYW1lU2VyaWVzIGRyb3Bkb3duIGFuZCByZWJ1aWxkIG5hbWVzIGdyb3VwIHdpdGggcGVyLW1lYXN1cmUgc2VsZWN0b3JcclxuICAgICAgICAgIGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5uYW1lU2VyaWVzLml0ZW1zID0gbWVhc3VyZUhlYWRlcnMubWFwKG5hbWUgPT4gKHsgdmFsdWU6IG5hbWUsIGRpc3BsYXlOYW1lOiBuYW1lIH0pKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgcGVyc2lzdGVkTmFtZVNlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY29sdW1uSGVhZGVyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibmFtZVNlcmllc1wiIH0sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlZE5hbWVJdGVtID0gcGVyc2lzdGVkTmFtZVNlcmllc1xyXG4gICAgICAgICAgICAgID8gY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMuaXRlbXMuZmluZChpID0+IGkudmFsdWUgPT09IHBlcnNpc3RlZE5hbWVTZXJpZXMpXHJcbiAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMudmFsdWUgPSBtYXRjaGVkTmFtZUl0ZW0gfHwgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMuaXRlbXNbMF0gfHwgeyB2YWx1ZTogXCJcIiwgZGlzcGxheU5hbWU6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE5hbWVTZXJpZXNOYW1lID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMudmFsdWU/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTmFtZU1lYXN1cmVJZHggPSBtZWFzdXJlSGVhZGVycy5pbmRleE9mKHNlbGVjdGVkTmFtZVNlcmllc05hbWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lVmFsdWVDb2x1bW4gPSBzZWxlY3RlZE5hbWVNZWFzdXJlSWR4ID49IDAgPyB2YWx1ZXNbc2VsZWN0ZWROYW1lTWVhc3VyZUlkeF0gOiBudWxsO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lUXVlcnlOYW1lID0gc2VsZWN0ZWROYW1lVmFsdWVDb2x1bW4/LnNvdXJjZT8ucXVlcnlOYW1lO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lT2JqZWN0cyA9IHNlbGVjdGVkTmFtZVZhbHVlQ29sdW1uPy5zb3VyY2U/Lm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICBjb25zdCBuYW1lU2VsZWN0b3IgPSBzZWxlY3RlZE5hbWVRdWVyeU5hbWUgPyB7IG1ldGFkYXRhOiBzZWxlY3RlZE5hbWVRdWVyeU5hbWUgfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICBjb25zdCBjaE5hbWVPdmVycmlkZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KHNlbGVjdGVkTmFtZU9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5IZWFkZXJzXCIsIHByb3BlcnR5TmFtZTogXCJuYW1lT3ZlcnJpZGVcIiB9LCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAvLyBSZWJ1aWxkIHRoZSBuYW1lc0dyb3VwIHNsaWNlc1xyXG4gICAgICAgICAgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVzR3JvdXAuc2xpY2VzID0gW1xyXG4gICAgICAgICAgICAgIGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5uYW1lU2VyaWVzLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lT3ZlcnJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIE5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgY3VzdG9tIGhlYWRlciBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaE5hbWVPdmVycmlkZSxcclxuICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG5hbWVTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIC8vIFJlYnVpbGQgdGhlIGFwcGx5U2V0dGluZ3NHcm91cCBzbGljZXMgd2l0aCBzZWxlY3RvcnNcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3MuYXBwbHlTZXR0aW5nc0dyb3VwLnNsaWNlcyA9IFtcclxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcyxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiYXBwbHlUb0hlYWRlclwiLCBkaXNwbGF5TmFtZTogXCJBcHBseSB0byBoZWFkZXJcIiwgdmFsdWU6IHNjQXBwbHlUb0hlYWRlciwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImFwcGx5VG9Ub3RhbFwiLCBkaXNwbGF5TmFtZTogXCJBcHBseSB0byB0b3RhbFwiLCB2YWx1ZTogc2NBcHBseVRvVG90YWwsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJhcHBseVRvVmFsdWVzXCIsIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHZhbHVlc1wiLCB2YWx1ZTogc2NBcHBseVRvVmFsdWVzLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KVxyXG4gICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAvLyBSZWJ1aWxkIHRoZSB2YWx1ZXNHcm91cCBzbGljZXMgd2l0aCBwZXItbWVhc3VyZSBzZWxlY3RvcnNcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3MudmFsdWVzR3JvdXAuc2xpY2VzID0gW1xyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoeyBuYW1lOiBcImZvbnRGYW1pbHlcIiwgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIiwgdmFsdWU6IHNjRm9udEZhbWlseSB8fCBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcImZvbnRTaXplXCIsIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLCB2YWx1ZTogc2NGb250U2l6ZSA/PyAxMiwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJib2xkXCIsIGRpc3BsYXlOYW1lOiBcIkJvbGRcIiwgdmFsdWU6IHNjQm9sZCA/PyBmYWxzZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcIml0YWxpY1wiLCBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIiwgdmFsdWU6IHNjSXRhbGljID8/IGZhbHNlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwidW5kZXJsaW5lXCIsIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLCB2YWx1ZTogc2NVbmRlcmxpbmUgPz8gZmFsc2UsIHNlbGVjdG9yIH0pXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwidGV4dENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IHNjVGV4dENvbG9yIHx8IFwiIzAwYjhkNFwiIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBzY0JnQ29sb3IgfHwgXCIjZmZmZmZmXCIgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSB0ZXh0IGNvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBzY0FsdFRleHRDb2xvciB8fCBcIiMzMzMzMzNcIiB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIGJhY2tncm91bmQgY29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IHNjQWx0QmdDb2xvciB8fCBcIiNmNWY1ZjVcIiB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkFsaWdubWVudEdyb3VwKHsgbmFtZTogXCJhbGlnbm1lbnRcIiwgZGlzcGxheU5hbWU6IFwiQWxpZ25tZW50XCIsIHZhbHVlOiBzY0FsaWdubWVudCB8fCBcImxlZnRcIiwgbW9kZTogcG93ZXJiaS52aXN1YWxzLkFsaWdubWVudEdyb3VwTW9kZS5Ib3Jpem9uYWwsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQXV0b0Ryb3Bkb3duKHsgbmFtZTogXCJkaXNwbGF5VW5pdHNcIiwgZGlzcGxheU5hbWU6IFwiRGlzcGxheSB1bml0c1wiLCB2YWx1ZTogc2NEaXNwbGF5VW5pdHMsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJkZWNpbWFsUGxhY2VzXCIsIGRpc3BsYXlOYW1lOiBcIlZhbHVlIGRlY2ltYWwgcGxhY2VzXCIsIHZhbHVlOiBzY0RlY2ltYWxQbGFjZXMsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJ0ZXh0V3JhcFwiLCBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIiwgdmFsdWU6IHNjVGV4dFdyYXAgPz8gZmFsc2UsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIC8vIFBvcHVsYXRlIGRhdGFCYXJzU2V0dGluZ3Mgc2VyaWVzIGRyb3Bkb3duIGFuZCByZWJ1aWxkIHZhbHVlIHNsaWNlcyB3aXRoIHBlci1tZWFzdXJlIHNlbGVjdG9yXHJcbiAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNlcmllcy5pdGVtcyA9IG1lYXN1cmVIZWFkZXJzLm1hcChuYW1lID0+ICh7IHZhbHVlOiBuYW1lLCBkaXNwbGF5TmFtZTogbmFtZSB9KSk7XHJcbiAgICAgICAgICBjb25zdCBwZXJzaXN0ZWREYXRhQmFyc1NlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzZXJpZXNcIiB9LFxyXG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoZWREYXRhQmFyc0l0ZW0gPSBwZXJzaXN0ZWREYXRhQmFyc1Nlcmllc1xyXG4gICAgICAgICAgICAgID8gZGF0YUJhcnNTZXR0aW5ncy5zZXJpZXMuaXRlbXMuZmluZChpID0+IGkudmFsdWUgPT09IHBlcnNpc3RlZERhdGFCYXJzU2VyaWVzKVxyXG4gICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2VyaWVzLnZhbHVlID0gbWF0Y2hlZERhdGFCYXJzSXRlbSB8fCBkYXRhQmFyc1NldHRpbmdzLnNlcmllcy5pdGVtc1swXSB8fCB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNTZXJpZXNOYW1lID0gZGF0YUJhcnNTZXR0aW5ncy5zZXJpZXMudmFsdWU/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNNZWFzdXJlSWR4ID0gbWVhc3VyZUhlYWRlcnMuaW5kZXhPZihzZWxlY3RlZERhdGFCYXJzU2VyaWVzTmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGFCYXJzVmFsdWVDb2x1bW4gPSBzZWxlY3RlZERhdGFCYXJzTWVhc3VyZUlkeCA+PSAwID8gdmFsdWVzW3NlbGVjdGVkRGF0YUJhcnNNZWFzdXJlSWR4XSA6IG51bGw7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGFCYXJzUXVlcnlOYW1lID0gc2VsZWN0ZWREYXRhQmFyc1ZhbHVlQ29sdW1uPy5zb3VyY2U/LnF1ZXJ5TmFtZTtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzID0gc2VsZWN0ZWREYXRhQmFyc1ZhbHVlQ29sdW1uPy5zb3VyY2U/Lm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICBjb25zdCBkYXRhQmFyc1NlbGVjdG9yID0gc2VsZWN0ZWREYXRhQmFyc1F1ZXJ5TmFtZSA/IHsgbWV0YWRhdGE6IHNlbGVjdGVkRGF0YUJhcnNRdWVyeU5hbWUgfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICBjb25zdCBkYlNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRiTWF0Y2hEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCBkYlNob3daZXJvTGluZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd1plcm9MaW5lXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgY29uc3QgZGJaZXJvTGluZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgIGNvbnN0IGRiWmVyb0xpbmVUcmFuc3BhcmVuY3kgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVUcmFuc3BhcmVuY3lcIiB9LCAwKTtcclxuICAgICAgICAgIGNvbnN0IGRiRGF0YUJhckhlaWdodCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG4gICAgICAgICAgY29uc3QgZGJUcmFuc3BhcmVuY3kgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidHJhbnNwYXJlbmN5XCIgfSwgMjApO1xyXG4gICAgICAgICAgY29uc3QgZGJCb3JkZXJPbiA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyT25cIiB9LCB0cnVlKTtcclxuICAgICAgICAgIGNvbnN0IGRiQm9yZGVyVGhpY2tuZXNzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlclRoaWNrbmVzc1wiIH0sIDEpO1xyXG4gICAgICAgICAgY29uc3QgZGJCb3JkZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Ioc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgY29uc3QgZGJNaW5WYWx1ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtaW5WYWx1ZVwiIH0sIDApO1xyXG4gICAgICAgICAgY29uc3QgZGJNYXhWYWx1ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXhWYWx1ZVwiIH0sIDApO1xyXG4gICAgICAgICAgY29uc3QgZGJMYWJlbHNPdXRzaWRlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJsYWJlbHNPdXRzaWRlXCIgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2VsZWN0U2VyaWVzR3JvdXAuc2xpY2VzID0gW1xyXG4gICAgICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2VyaWVzXHJcbiAgICAgICAgICBdO1xyXG5cclxubGV0IGRhdGFCYXJzU2xpY2VzOiBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2VbXSA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJzaG93RGF0YUJhcnNcIiwgZGlzcGxheU5hbWU6IFwiU2hvdyBEYXRhIEJhcnNcIiwgdmFsdWU6IGRiU2hvd0RhdGFCYXJzLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwiZGF0YUJhckhlaWdodFwiLCBkaXNwbGF5TmFtZTogXCJEYXRhIEJhciBIZWlnaHQgKCUpXCIsIHZhbHVlOiBkYkRhdGFCYXJIZWlnaHQsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcInRyYW5zcGFyZW5jeVwiLCBkaXNwbGF5TmFtZTogXCJUcmFuc3BhcmVuY3kgKCUpXCIsIHZhbHVlOiBkYlRyYW5zcGFyZW5jeSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiYm9yZGVyT25cIiwgZGlzcGxheU5hbWU6IFwiQm9yZGVyIE9uXCIsIHZhbHVlOiBkYkJvcmRlck9uLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJNYXRjaCBEYXRhIEJhciBDb2xvclwiLCB2YWx1ZTogZGJNYXRjaERhdGFCYXJDb2xvciwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwiYm9yZGVyVGhpY2tuZXNzXCIsIGRpc3BsYXlOYW1lOiBcIkJvcmRlciBUaGlja25lc3NcIiwgdmFsdWU6IGRiQm9yZGVyVGhpY2tuZXNzLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkYk1hdGNoRGF0YUJhckNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyc1NsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkJvcmRlciBDb2xvclwiLCB2YWx1ZTogeyB2YWx1ZTogZGJCb3JkZXJDb2xvciB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciwgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGFCYXJzU2xpY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwibWluVmFsdWVcIiwgZGlzcGxheU5hbWU6IFwiTWluaW11bSBWYWx1ZVwiLCB2YWx1ZTogZGJNaW5WYWx1ZSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwibWF4VmFsdWVcIiwgZGlzcGxheU5hbWU6IFwiTWF4aW11bSBWYWx1ZVwiLCB2YWx1ZTogZGJNYXhWYWx1ZSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwibGFiZWxzT3V0c2lkZVwiLCBkaXNwbGF5TmFtZTogXCJMYWJlbHMgT3V0c2lkZVwiLCB2YWx1ZTogZGJMYWJlbHNPdXRzaWRlLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJzaG93WmVyb0xpbmVcIiwgZGlzcGxheU5hbWU6IFwiU2hvdyBaZXJvIExpbmVcIiwgdmFsdWU6IGRiU2hvd1plcm9MaW5lLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcInplcm9MaW5lQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiWmVybyBMaW5lIENvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBkYlplcm9MaW5lQ29sb3IgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwiemVyb0xpbmVUcmFuc3BhcmVuY3lcIiwgZGlzcGxheU5hbWU6IFwiWmVybyBMaW5lIFRyYW5zcGFyZW5jeSAoJSlcIiwgdmFsdWU6IGRiWmVyb0xpbmVUcmFuc3BhcmVuY3ksIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLmRhdGFCYXJzR3JvdXAuc2xpY2VzID0gZGF0YUJhcnNTbGljZXM7XHJcblxyXG4gICAgICAgICAgLy8gQ29tcHV0ZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRhdGEgYmFycyBBTkQgQ2FsY3VsYXRlIHRvdGFscyBiYXNlZCBvbiBzZWxlY3Rpb25cclxuICAgICAgICAgIGxldCBtZWFzdXJlTWluczogbnVtYmVyW10gPSBuZXcgQXJyYXkodmFsdWVzLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgICAgIGxldCBtZWFzdXJlTWF4czogbnVtYmVyW10gPSBuZXcgQXJyYXkodmFsdWVzLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgICAgIGxldCB0b3RhbHM6IG51bWJlcltdID0gbmV3IEFycmF5KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCk7XHJcblxyXG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uLCBtZWFzdXJlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG51bVZhbHVlcyA9IHZhbHVlQ29sdW1uLnZhbHVlcy5maWx0ZXIodiA9PiB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZCkubWFwKHYgPT4gTnVtYmVyKHYpKTtcclxuICAgICAgICAgICAgaWYgKG51bVZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTWluc1ttZWFzdXJlSW5kZXhdID0gTWF0aC5taW4oMCwgLi4ubnVtVmFsdWVzKTsgLy8gU3RhbmRhcmQgZGF0YSBiYXJzIGFuY2hvciB0byAwXHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTWF4c1ttZWFzdXJlSW5kZXhdID0gTWF0aC5tYXgoMCwgLi4ubnVtVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICBsZXQgdG90YWxCZWhhdmlvclJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJ0b3RhbHNcIiwgcHJvcGVydHlOYW1lOiBcInRvdGFsQmVoYXZpb3JcIiB9LCBcIlN1bVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxCZWhhdmlvciA9IHR5cGVvZiB0b3RhbEJlaGF2aW9yUmF3ID09PSBcInN0cmluZ1wiID8gdG90YWxCZWhhdmlvclJhdyA6ICh0b3RhbEJlaGF2aW9yUmF3LnZhbHVlIHx8IFwiU3VtXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bVZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJTdW1cIiB8fCB0b3RhbEJlaGF2aW9yID09PSBcIk1lYXN1cmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gbnVtVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIkF2ZXJhZ2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gbnVtVmFsdWVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gbnVtVmFsdWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJDb3VudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBudW1WYWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIkNvdW50IERpc3RpbmN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG5ldyBTZXQobnVtVmFsdWVzKS5zaXplO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIk1heFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBNYXRoLm1heCguLi5udW1WYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIk1pblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBNYXRoLm1pbiguLi5udW1WYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc3dpdGNoVmFsdWVzVG9Sb3dzKSB7XHJcbiAgICAgICAgICAgIC8vIE5vcm1hbCBob3Jpem9udGFsIHRhYmxlIHN0cnVjdHVyZVxyXG4gICAgICAgICAgICBsZXQgaGVhZGVyUm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgaGVhZGVyUm93LmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItcm93JztcclxuICAgICAgICAgICAgaGVhZGVyUm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyMnhWYWx1ZTtcclxuICAgICAgICAgICAgaGVhZGVyUm93LnN0eWxlLmhlaWdodCA9IGAke2hlYWRlclJvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckJnQ29sb3IgPSBoZWFkZXJCYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgY2F0ZWdvcnkgY29sdW1uIGhlYWRlciBpZiBjYXRlZ29yaWVzIGV4aXN0XHJcbiAgICAgICAgICAgIGlmIChoYXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnlIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBjYXRlZ29yaWVzLnNvdXJjZS5kaXNwbGF5TmFtZSB8fCAnQ2F0ZWdvcnknO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNhdGVnb3J5SGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIG1lYXN1cmUgY29sdW1uIGhlYWRlcnNcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlcnMuZm9yRWFjaCgoZGlzcGxheU5hbWUsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWZmZWN0aXZlRGlzcGxheU5hbWUgPSBtZWFzdXJlSGVhZGVyT3ZlcnJpZGVzW2lkeF07XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IGhlYWRlckJvbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogaGVhZGVySXRhbGljO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IGhlYWRlclVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGxldCBlZkZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IGhlYWRlckZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IGhlYWRlcldvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLnRleHRDb2xvciA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gZWZmZWN0aXZlRGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2lkeF19cHhgO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaWR4XX1weGA7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpZHhdfXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBlZkZvbnRTaXplLCBlZldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudGV4dEFsaWduID0gZWZmZWN0aXZlQWxpZ247XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gT25lLXRpbWUgZGVidWcgZHVtcCBvZiB2YWx1ZUNvbHVtbiBvYmplY3RzIHN0YXR1c1xyXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZjMCA9IHZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbREIgQ0YgSU5JVF0gbWVhc3VyZTAgbmFtZT0ke3ZjMC5zb3VyY2UuZGlzcGxheU5hbWV9IHF1ZXJ5TmFtZT0ke3ZjMC5zb3VyY2UucXVlcnlOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBJTklUXSBtZWFzdXJlMCAub2JqZWN0cyBleGlzdHM9JHshIXZjMC5vYmplY3RzfSwgLm9iamVjdHMgdHlwZT0ke3R5cGVvZiB2YzAub2JqZWN0c31gKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YzAub2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbREIgQ0YgSU5JVF0gbWVhc3VyZTAgLm9iamVjdHMgaXMgYXJyYXk9JHtBcnJheS5pc0FycmF5KHZjMC5vYmplY3RzKX0sIGxlbmd0aD0keyh2YzAub2JqZWN0cyBhcyBhbnkpLmxlbmd0aH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGZpcnN0IDMgZW50cmllc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgTWF0aC5taW4oMywgcm93Q291bnQpOyB6KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBJTklUXSBtZWFzdXJlMCAub2JqZWN0c1ske3p9XT0ke0pTT04uc3RyaW5naWZ5KHZjMC5vYmplY3RzW3pdKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIElOSVRdIG1lYXN1cmUwIC5zb3VyY2Uub2JqZWN0cz0ke0pTT04uc3RyaW5naWZ5KHZjMC5zb3VyY2Uub2JqZWN0cyl9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBkYXRhIHJvd3NcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1yb3cnO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBhbHRlcm5hdGluZyBiYWNrZ3JvdW5kIGNvbG9ycyB3aXRoIHN1cHBvcnQgZm9yIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlblJvdyA9IGkgJSAyID09PSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SGVpZ2h0ID0gaXNFdmVuUm93ID8gdmFsdWVSb3dIZWlnaHQgOiBhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93QmdDb2xvciA9IGdldFJvd0JhY2tncm91bmRDb2xvcihpLCBpc0V2ZW5Sb3csIGRhdGFWaWV3KTtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXRlZ29yeSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnlDZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwudGV4dENvbnRlbnQgPSBTdHJpbmcoY2F0ZWdvcmllcy52YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5jbGFzc05hbWUgPSAndGFibGUtY2F0ZWdvcnktY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0ZWdvcnlDZWxsLCByb3dIZWlnaHQsIGNlbGxGb250U2l6ZSwgY2F0ZWdvcnlXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5jb2xvciA9IGdldENhdGVnb3J5VGV4dENvbG9yKGksIGRhdGFWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBjYXRlZ29yeVdvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5V29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgbWVhc3VyZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbiwgbWVhc3VyZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAyICYmIG1lYXN1cmVJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB2YWx1ZUNvbHVtbi5vYmplY3RzPy5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc09ianMgPSAhIXZhbHVlQ29sdW1uLm9iamVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaktleXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLmpvaW4oJywnKSA6ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBERUJVR10gcm93PSR7aX0gbWVhc3VyZT0ke21lYXN1cmVJbmRleH0gaGFzT2JqZWN0cz0ke2hhc09ianN9IG9ialtpXWtleXM9JHtvYmpLZXlzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzT2JqcyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIERFQlVHXSAgIG9ialske2l9XSBmdWxsOmAsIEpTT04uc3RyaW5naWZ5KHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvIGNoZWNrIGlmIHZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nIG9iamVjdHMgZXhpc3QgKHRoaXMgY2FyZCBpcyBrbm93biB0byB3b3JrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzT2Jqcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBERUJVR10gICBvYmplY3RzIGFycmF5IGxlbmd0aC1pc2g6IG9iamVjdHMgaXMgYXJyYXk9JHtBcnJheS5pc0FycmF5KHZhbHVlQ29sdW1uLm9iamVjdHMpfSwgdHlwZW9mPSR7dHlwZW9mIHZhbHVlQ29sdW1uLm9iamVjdHN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmaXJzdCBmZXcgZW50cmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBNYXRoLm1pbigzLCAodmFsdWVDb2x1bW4ub2JqZWN0cyBhcyBhbnkpLmxlbmd0aCB8fCAzKTsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHNbel0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBERUJVR10gICBvYmplY3RzWyR7en1dIGtleXM6ICR7T2JqZWN0LmtleXModmFsdWVDb2x1bW4ub2JqZWN0c1t6XSkuam9pbignLCcpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBzb3VyY2Uub2JqZWN0cyBmb3IgdGhlIG1lYXN1cmUtbGV2ZWwgZGVmYXVsdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLnNvdXJjZT8ub2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBERUJVR10gICBzb3VyY2Uub2JqZWN0cyBrZXlzOiAke09iamVjdC5rZXlzKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzKS5qb2luKCcsJyl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGlzRXZlblJvdyAhPT0gJ3VuZGVmaW5lZCcpID8gKGlzRXZlblJvdyA/IHRleHRDb2xvciA6IGFsdGVybmF0ZVRleHRDb2xvcikgOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TWVhc3VyZUJnQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQmFja2dyb3VuZENvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBpc0V2ZW5Sb3cgIT09ICd1bmRlZmluZWQnKSA/IChpc0V2ZW5Sb3cgPyBiYWNrZ3JvdW5kQ29sb3IgOiBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IpIDogYmFja2dyb3VuZENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0Q29sb3IgPSBkZWZhdWx0TWVhc3VyZVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFRleHRDb2xvciA9IGNmQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsQmFja2dyb3VuZENvbG9yID0gZGVmYXVsdE1lYXN1cmVCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVCYWNrZ3JvdW5kQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZkJnQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxCYWNrZ3JvdW5kQ29sb3IgPSBjZkJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZUNvbHVtbi52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjsgLy8gZm9yIGRhdGEgYmFyIHBvc2l0aW9uaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1WYWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gbnVtVmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93RGF0YUJhcnNcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0RhdGFCYXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd1plcm9MaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3daZXJvTGluZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRyYW5zcGFyZW5jeVwiIH0sIDIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlck9uID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlck9uXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJUaGlja25lc3MgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJUaGlja25lc3NcIiB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblZhbHVlT2JqID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWluVmFsdWVcIiB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZhbHVlT2JqID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWF4VmFsdWVcIiB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsc091dHNpZGUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibGFiZWxzT3V0c2lkZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcgb24gZGF0YSBiYXIgY29sb3IgKHVzaW5nIHNpbXBsZSBjYXJkIG9iamVjdE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZkRhdGFCYXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRGF0YUJhckNvbG9yID0gY2ZEYXRhQmFyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IG1pblZhbHVlT2JqICE9PSBudWxsICYmIG1pblZhbHVlT2JqICE9PSB1bmRlZmluZWQgPyBtaW5WYWx1ZU9iaiA6IG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtYXhWYWx1ZU9iaiAhPT0gbnVsbCAmJiBtYXhWYWx1ZU9iaiAhPT0gdW5kZWZpbmVkID8gbWF4VmFsdWVPYmogOiBtZWFzdXJlTWF4c1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlIDw9IDApIHJhbmdlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2lkdGggcGVyY2VudGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoUGN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0UGN0ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhbXBlZFZhbHVlID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIG51bVZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemVyb1BvaW50ID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIDApKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBsYWJlbHNPdXRzaWRlID8gMC43NSA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYW1wZWRWYWx1ZSA+PSB6ZXJvUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9ICgoY2xhbXBlZFZhbHVlIC0gemVyb1BvaW50KSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKHplcm9Qb2ludCAtIG1pbikgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhQY3QgPSAoKHplcm9Qb2ludCAtIGNsYW1wZWRWYWx1ZSkgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKChjbGFtcGVkVmFsdWUgLSBtaW4pIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRhdGEgYmFyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFBjdCA9ICgxMDAgLSBkYXRhQmFySGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnRvcCA9IGAke3RvcFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuaGVpZ2h0ID0gYCR7ZGF0YUJhckhlaWdodH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUubGVmdCA9IGAke2xlZnRQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KGNlbGxEYXRhQmFyQ29sb3IsIHRyYW5zcGFyZW5jeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9yZGVyT24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxCb3JkZXJDb2xvciA9IG1hdGNoRGF0YUJhckNvbG9yID8gY2VsbERhdGFCYXJDb2xvciA6IGJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYm9yZGVyID0gYCR7Ym9yZGVyVGhpY2tuZXNzfXB4IHNvbGlkICR7ZmluYWxCb3JkZXJDb2xvcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkYXRhQmFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd1plcm9MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHplcm9MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS53aWR0aCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHpMZWZ0UGN0ID0gKCh6ZXJvUG9pbnQgLSBtaW4pIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUubGVmdCA9IGBjYWxjKCR7ekxlZnRQY3R9JSAtIDFweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KHplcm9MaW5lQ29sb3IsIHplcm9MaW5lVHJhbnNwYXJlbmN5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS56SW5kZXggPSBcIjFcIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh6ZXJvTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YSBiYXIgbWFya2VycyBzZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcInNob3dNYXJrZXJcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd01hcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXJTaGFwZVJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2hhcGVcIiB9LCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNpemVcIiB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZk1hcmtlckNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsTWFya2VyQ29sb3IgPSBjZk1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnpJbmRleCA9IFwiM1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyTGVmdFBjdCA9IG51bVZhbHVlID49IDAgPyBsZWZ0UGN0ICsgd2lkdGhQY3QgOiBsZWZ0UGN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnRvcCA9IGBjYWxjKDUwJSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImNyb3NzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoNDVkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtNDVkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuYXBwZW5kQ2hpbGQobGluZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuYXBwZW5kQ2hpbGQobGluZTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwiaG9yaXpvbnRhbExpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwidmVydGljYWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtIDFweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwic2VtaUNpcmNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXcgc2VtaSBjaXJjbGUgcG9pbnRpbmcgb3V0d2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemUgLyAyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnpJbmRleCA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxzT3V0c2lkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS50b3AgPSBcIjUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC01MCUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLmxlZnQgPSBgY2FsYygke2xlZnRQY3QgKyB3aWR0aFBjdH0lICsgNHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5yaWdodCA9IGBjYWxjKCR7MTAwIC0gbGVmdFBjdH0lICsgNHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCB2YWx1ZVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGNlbGxJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBjZWxsVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBjZWxsVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjUm93QmdDb2xvciA9IGlzRXZlblJvdyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IGNlbGxCYWNrZ3JvdW5kQ29sb3IpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yIDogY2VsbEJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNDZWxsVGV4dENvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MudGV4dENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogY2VsbFRleHRDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgPyBzcGVjUm93QmdDb2xvciA6IGNlbGxCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgPyBzcGVjQ2VsbFRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB2YWx1ZUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmSXRhbGljID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IGNlbGxJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IGNlbGxVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IGNlbGxGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkZvbnRTaXplID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiBjZWxsRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHZhbHVlV29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUFsaWduID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gZWZJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSBgJHtlZkZvbnRTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dEFsaWduID0gZWZmZWN0aXZlQWxpZ247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHsgLy8gYW5kIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRvdGFsIHJvd1xyXG4gICAgICAgICAgICBpZiAoc2hvd1RvdGFsUm93KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxSb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxSb3cuY2xhc3NOYW1lID0gJ3RhYmxlLXRvdGFsLXJvdyc7XHJcbiAgICAgICAgICAgIHRvdGFsUm93LnN0eWxlLmJvcmRlclRvcCA9IGhvcml6Qm9yZGVyMnhWYWx1ZTtcclxuICAgICAgICAgICAgdG90YWxSb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICB0b3RhbFJvdy5zdHlsZS5oZWlnaHQgPSBgJHt0b3RhbFJvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQmdDb2xvciA9IHRvdGFsUm93QmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbExhYmVsQ2VsbCA9IHRvdGFsUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnRleHRDb250ZW50ID0gJ1RvdGFsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS10b3RhbC1sYWJlbC1jZWxsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsTGFiZWxDZWxsLCB0b3RhbFJvd0hlaWdodCwgdG90YWxSb3dGb250U2l6ZSwgdG90YWxSb3dXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdG90YWxSb3dCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSB0b3RhbFJvd1VuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSB0b3RhbFJvd0ZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5mb250U3R5bGUgPSB0b3RhbFJvd0l0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0b3RhbEJnQ29sb3I7IHRvdGFsTGFiZWxDZWxsLnN0eWxlLmNvbG9yID0gdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gdG90YWxSb3dXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUm93V29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbExhYmVsQ2VsbCA9IHRvdGFsUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnRleHRDb250ZW50ID0gJ1RvdGFsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdG90YWxzLmZvckVhY2goKHRvdGFsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiB0b3RhbFJvd0JhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVDb2xvciA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnRleHRDb2xvciA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiB0b3RhbFJvd1RleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogdG90YWxSb3dCb2xkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmSXRhbGljID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogdG90YWxSb3dJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgOiB0b3RhbFJvd1VuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGxldCBlZkZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IHRvdGFsUm93Rm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGxldCBlZkZvbnRTaXplID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IHRvdGFsUm93Rm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnRleHRXcmFwICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dFdyYXAgOiB0b3RhbFJvd1dvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUFsaWduID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSB0b3RhbFJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdG90YWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS10b3RhbC1jZWxsJztcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNlbGwsIHRvdGFsUm93SGVpZ2h0LCBlZkZvbnRTaXplLCBlZldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IGVmQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udEZhbWlseSA9IGVmRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gZWZJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmZmVjdGl2ZUJnO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGVmZmVjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGVmV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dEFsaWduID0gZWZmZWN0aXZlQWxpZ247XHJcbiAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc3dpdGNoVmFsdWVzVG9Sb3dzIElTIFRSVUUgKFRyYW5zcG9zZSBsYXlvdXQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgSGVhZGVyIFJvd1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVyUm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgaGVhZGVyUm93LmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItcm93JztcclxuICAgICAgICAgICAgaGVhZGVyUm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyMnhWYWx1ZTtcclxuICAgICAgICAgICAgaGVhZGVyUm93LnN0eWxlLmhlaWdodCA9IGAke2hlYWRlclJvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckJnQ29sb3IgPSBoZWFkZXJCYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAvLyBGaXJzdCBoZWFkZXIgaXMgXCJNZWFzdXJlXCJcclxuICAgICAgICAgICAgbGV0IG1lYXN1cmVIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnRleHRDb250ZW50ID0gXCJNZWFzdXJlXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2gobWVhc3VyZUhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTmV4dCBoZWFkZXJzIGFyZSBDYXRlZ29yeSB2YWx1ZXMgKG9yIGp1c3QgXCJWYWx1ZVwiIGlmIG5vIGNhdGVnb3JpZXMpXHJcbiAgICAgICAgICAgIGlmIChoYXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2F0SGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIudGV4dENvbnRlbnQgPSBTdHJpbmcoY2F0ZWdvcmllcy52YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNhdEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXRIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnRleHRDb250ZW50ID0gXCJWYWx1ZVwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd1RvdGFsUm93KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvdGFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2godG90YWxIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd1RvdGFsUm93KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvdGFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2godG90YWxIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgUm93cyAoZWFjaCByb3cgaXMgYSBNZWFzdXJlKVxyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWVDb2x1bW4sIG1lYXN1cmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtcm93JztcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0V2ZW5Sb3cgPSBtZWFzdXJlSW5kZXggJSAyID09PSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SGVpZ2h0ID0gaXNFdmVuUm93ID8gdmFsdWVSb3dIZWlnaHQgOiBhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93QmdDb2xvciA9IGlzRXZlblJvdyA/IGJhY2tncm91bmRDb2xvciA6IGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENlbGwgMTogTWVhc3VyZSBOYW1lXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVhc3VyZU5hbWVDZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC50ZXh0Q29udGVudCA9IG1lYXN1cmVIZWFkZXJPdmVycmlkZXNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5jbGFzc05hbWUgPSAndGFibGUtY2F0ZWdvcnktY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChtZWFzdXJlTmFtZUNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCBjYXRlZ29yeVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWVCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGNlbGxJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNlbGxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5jb2xvciA9IGRlZmF1bHRDYXRlZ29yeVRleHRDb2xvcjsgLy8gb3Igc29tZSBzcGVjaWZpYyBjb2xvclxyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGNhdGVnb3J5V29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeVdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBpc0V2ZW5Sb3cgIT09ICd1bmRlZmluZWQnKSA/IChpc0V2ZW5Sb3cgPyB0ZXh0Q29sb3IgOiBhbHRlcm5hdGVUZXh0Q29sb3IpIDogdGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUJhY2tncm91bmRDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJhY2tncm91bmRDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgaXNFdmVuUm93ICE9PSAndW5kZWZpbmVkJykgPyAoaXNFdmVuUm93ID8gYmFja2dyb3VuZENvbG9yIDogYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yKSA6IGJhY2tncm91bmRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3dEYXRhQmFyc1wiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd1plcm9MaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3daZXJvTGluZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGUgPSB0eXBlb2YgbWFya2VyU2hhcGVSYXcgPT09IFwic3RyaW5nXCIgPyBtYXJrZXJTaGFwZVJhdyA6IChtYXJrZXJTaGFwZVJhdy52YWx1ZSB8fCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNpemVcIiB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbE1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtZWFzdXJlTWF4c1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIERhdGEgQ2VsbHM6IFZhbHVlcyBmb3IgZWFjaCBjYXRlZ29yeSAob3IgdGhlIDEgdmFsdWUgaWYgbm8gY2F0ZWdvcmllcylcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsVGV4dENvbG9yID0gZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZkNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmQ29sb3IpIGNlbGxUZXh0Q29sb3IgPSBjZkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbEJhY2tncm91bmRDb2xvciA9IGRlZmF1bHRNZWFzdXJlQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmQmdDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQmFja2dyb3VuZENvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZCZ0NvbG9yKSBjZWxsQmFja2dyb3VuZENvbG9yID0gY2ZCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVDb2x1bW4udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1WYWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gbnVtVmFsdWUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93RGF0YUJhcnNcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd0RhdGFCYXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd1plcm9MaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3daZXJvTGluZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRyYW5zcGFyZW5jeVwiIH0sIDIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlck9uID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlck9uXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJUaGlja25lc3MgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJUaGlja25lc3NcIiB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblZhbHVlT2JqID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWluVmFsdWVcIiB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZhbHVlT2JqID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWF4VmFsdWVcIiB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsc091dHNpZGUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibGFiZWxzT3V0c2lkZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcgb24gZGF0YSBiYXIgY29sb3IgKHVzaW5nIHNpbXBsZSBjYXJkIG9iamVjdE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZkRhdGFCYXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRGF0YUJhckNvbG9yID0gY2ZEYXRhQmFyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IG1pblZhbHVlT2JqICE9PSBudWxsICYmIG1pblZhbHVlT2JqICE9PSB1bmRlZmluZWQgPyBtaW5WYWx1ZU9iaiA6IG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtYXhWYWx1ZU9iaiAhPT0gbnVsbCAmJiBtYXhWYWx1ZU9iaiAhPT0gdW5kZWZpbmVkID8gbWF4VmFsdWVPYmogOiBtZWFzdXJlTWF4c1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlIDw9IDApIHJhbmdlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2lkdGggcGVyY2VudGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoUGN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0UGN0ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhbXBlZFZhbHVlID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIG51bVZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemVyb1BvaW50ID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIDApKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBsYWJlbHNPdXRzaWRlID8gMC43NSA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYW1wZWRWYWx1ZSA+PSB6ZXJvUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9ICgoY2xhbXBlZFZhbHVlIC0gemVyb1BvaW50KSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKHplcm9Qb2ludCAtIG1pbikgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhQY3QgPSAoKHplcm9Qb2ludCAtIGNsYW1wZWRWYWx1ZSkgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKChjbGFtcGVkVmFsdWUgLSBtaW4pIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRhdGEgYmFyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFBjdCA9ICgxMDAgLSBkYXRhQmFySGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnRvcCA9IGAke3RvcFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuaGVpZ2h0ID0gYCR7ZGF0YUJhckhlaWdodH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUubGVmdCA9IGAke2xlZnRQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KGNlbGxEYXRhQmFyQ29sb3IsIHRyYW5zcGFyZW5jeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9yZGVyT24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxCb3JkZXJDb2xvciA9IG1hdGNoRGF0YUJhckNvbG9yID8gY2VsbERhdGFCYXJDb2xvciA6IGJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYm9yZGVyID0gYCR7Ym9yZGVyVGhpY2tuZXNzfXB4IHNvbGlkICR7ZmluYWxCb3JkZXJDb2xvcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkYXRhQmFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd1plcm9MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHplcm9MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS53aWR0aCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHpMZWZ0UGN0ID0gKCh6ZXJvUG9pbnQgLSBtaW4pIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUubGVmdCA9IGBjYWxjKCR7ekxlZnRQY3R9JSAtIDFweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KHplcm9MaW5lQ29sb3IsIHplcm9MaW5lVHJhbnNwYXJlbmN5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS56SW5kZXggPSBcIjFcIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh6ZXJvTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YSBiYXIgbWFya2VycyBzZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcInNob3dNYXJrZXJcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd01hcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXJTaGFwZVJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2hhcGVcIiB9LCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNpemVcIiB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZk1hcmtlckNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsTWFya2VyQ29sb3IgPSBjZk1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnpJbmRleCA9IFwiM1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyTGVmdFBjdCA9IG51bVZhbHVlID49IDAgPyBsZWZ0UGN0ICsgd2lkdGhQY3QgOiBsZWZ0UGN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnRvcCA9IGBjYWxjKDUwJSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImNyb3NzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoNDVkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtNDVkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuYXBwZW5kQ2hpbGQobGluZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuYXBwZW5kQ2hpbGQobGluZTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwiaG9yaXpvbnRhbExpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwidmVydGljYWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtIDFweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwic2VtaUNpcmNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXcgc2VtaSBjaXJjbGUgcG9pbnRpbmcgb3V0d2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemUgLyAyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWFya2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnpJbmRleCA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxzT3V0c2lkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS50b3AgPSBcIjUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC01MCUpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLmxlZnQgPSBgY2FsYygke2xlZnRQY3QgKyB3aWR0aFBjdH0lICsgNHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5yaWdodCA9IGBjYWxjKCR7MTAwIC0gbGVmdFBjdH0lICsgNHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCB2YWx1ZVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGNlbGxJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBjZWxsVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBjZWxsVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjUm93QmdDb2xvciA9IGlzRXZlblJvdyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IGNlbGxCYWNrZ3JvdW5kQ29sb3IpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yIDogY2VsbEJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNDZWxsVGV4dENvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MudGV4dENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogY2VsbFRleHRDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgPyBzcGVjUm93QmdDb2xvciA6IGNlbGxCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgPyBzcGVjQ2VsbFRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB2YWx1ZUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmSXRhbGljID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IGNlbGxJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IGNlbGxVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IGNlbGxGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkZvbnRTaXplID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiBjZWxsRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHZhbHVlV29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUFsaWduID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gZWZJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSBgJHtlZkZvbnRTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dEFsaWduID0gZWZmZWN0aXZlQWxpZ247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHsgLy8gYW5kIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgVG90YWwgY29sdW1uIGNlbGwgZm9yIHRoaXMgbWVhc3VyZSBpZiBlbmFibGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1RvdGFsUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsVmFsID0gdG90YWxzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnRleHRDb250ZW50ID0gdG90YWxWYWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB0b3RhbFJvd0JvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiB0b3RhbFJvd0l0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbFVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IHRvdGFsUm93VW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogdG90YWxSb3dGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbFdvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHRvdGFsUm93V29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiB0b3RhbFJvd0JhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbENvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dENvbG9yID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsQ2VsbCwgcm93SGVpZ2h0LCBlZlRvdGFsRm9udFNpemUsIGVmVG90YWxXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZlRvdGFsQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuZm9udEZhbWlseSA9IGVmVG90YWxGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZlRvdGFsSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZUb3RhbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSBgMXB4IHNvbGlkICR7Z3JpZEJvcmRlckNvbG9yfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmVG90YWxCZztcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuY29sb3IgPSBlZlRvdGFsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmVG90YWxBbGlnbjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZlRvdGFsV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWZUb3RhbFdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IG51bGw7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRzogSVZpc3VhbFBsdWdpbiA9IHtcbiAgICBuYW1lOiAndGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRycsXG4gICAgZGlzcGxheU5hbWU6ICdUaW1UYWJsZScsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1widGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVR1wiXSA9IHRpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCB0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=