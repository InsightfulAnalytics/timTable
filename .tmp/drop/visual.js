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
    dataBarsConditionalFormatting = new DataBarsConditionalFormattingSettings();
    dataBarsFormatting = new DataBarsFormattingSettings();
    dataBarMarkers = new DataBarMarkersSettings();
    totals = new TotalsSettings();
    gridMenu = new GridSettings();
    columnWidth = new ColumnWidthSettings();
    cards = [this.specificColumn, this.columnHeaders, this.valuesMenu, this.table, this.columnWidth, this.totals, this.gridMenu, this.categoryConditionalFormatting, this.valueConditionalFormatting, this.dataBarsConditionalFormatting, this.dataBarsFormatting, this.dataBarMarkers];
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
        const switchValuesToRows = tableSettings.switchValuesToRows?.value || false;
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
                    let cellTextColor = defaultMeasureTextColor;
                    if (valueColumn.objects && valueColumn.objects[i]) {
                        const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "valueConditionalFormatting", propertyName: "textColor" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHMvbGliL2RhdGFWaWV3T2JqZWN0LmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHMvbGliL2RhdGFWaWV3T2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzL2xpYi9kYXRhVmlld1dpbGRjYXJkLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9zcmMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL3NyYy92aXN1YWwudHMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvZXh0ZXJuYWwgdmFyIFwibnVsbFwiIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi8udG1wL3ByZWNvbXBpbGUvdmlzdWFsUGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IG9iamVjdFtwcm9wZXJ0eU5hbWVdO1xuICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5VmFsdWU7XG59XG4vKiogR2V0cyB0aGUgc29saWQgY29sb3IgZnJvbSBhIGZpbGwgcHJvcGVydHkgdXNpbmcgb25seSBhIHByb3BlcnR5TmFtZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxDb2xvckJ5UHJvcGVydHlOYW1lKG9iamVjdCwgcHJvcGVydHlOYW1lLCBkZWZhdWx0Q29sb3IpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwgcHJvcGVydHlOYW1lKTtcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuc29saWQuY29sb3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhVmlld09iamVjdC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBEYXRhVmlld09iamVjdCBmcm9tIFwiLi9kYXRhVmlld09iamVjdFwiO1xuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBvYmplY3QvcHJvcGVydHkgcGFpci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoIW9iamVjdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIERhdGFWaWV3T2JqZWN0LmdldFZhbHVlKG9iamVjdHNbcHJvcGVydHlJZC5vYmplY3ROYW1lXSwgcHJvcGVydHlJZC5wcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSk7XG59XG4vKiogR2V0cyBhbiBvYmplY3QgZnJvbSBvYmplY3RzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdChvYmplY3RzLCBvYmplY3ROYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAob2JqZWN0cyAmJiBvYmplY3RzW29iamVjdE5hbWVdKSB7XG4gICAgICAgIHJldHVybiBvYmplY3RzW29iamVjdE5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufVxuLyoqIEdldHMgdGhlIHNvbGlkIGNvbG9yIGZyb20gYSBmaWxsIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxDb2xvcihvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0Q29sb3IpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdHMsIHByb3BlcnR5SWQpO1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5zb2xpZC5jb2xvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tb25WYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdHMsIHByb3BlcnR5SWQsIGRlZmF1bHRWYWx1ZSk7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zb2xpZC5jb2xvcjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgfHwgdmFsdWUgPT09IG51bGxcbiAgICAgICAgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFWaWV3T2JqZWN0cy5qcy5tYXAiLCIvKlxuKiAgUG93ZXIgQkkgVmlzdWFsaXphdGlvbnNcbipcbiogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4qICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKiAgTUlUIExpY2Vuc2VcbipcbiogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXG4qICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qXG4qICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qXG4qICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4qICBUSEUgU09GVFdBUkUuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGFWaWV3V2lsZGNhcmRTZWxlY3RvcihkYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24pIHtcbiAgICBpZiAoZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uID09IG51bGwpIHtcbiAgICAgICAgZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uID0gMCAvKiBEYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24uSW5zdGFuY2VzQW5kVG90YWxzICovO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RvciA9IHtcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGFWaWV3V2lsZGNhcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdPcHRpb246IGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YVZpZXdXaWxkY2FyZC5qcy5tYXAiLCIvKipcbiAqIFBvd2VyYmkgdXRpbHMgY29tcG9uZW50cyBjbGFzc2VzIGZvciBjdXN0b20gdmlzdWFsIGZvcm1hdHRpbmcgcGFuZSBvYmplY3RzXG4gKlxuICovXG5pbXBvcnQgKiBhcyBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIgZnJvbSBcIi4vdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHNcIjtcbmNsYXNzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBDYXJkR3JvdXBFbnRpdHkgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgTW9kZWwge1xufVxuLyoqIENvbXBvc2l0ZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgd2l0aCBtdWx0aXBsZSBncm91cHMgKi9cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVDYXJkIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbi8qKiBTaW1wbGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIGluIGEgc2luZ2xlIGdyb3VwICovXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2FyZCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgU2ltcGxlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEaXNwbGF5TmFtZSA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGVzY3JpcHRpb24gPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzbGljZURpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNsaWNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHRoaXMpLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IChfYSA9IGRhdGFWaWV3T2JqZWN0cyA9PT0gbnVsbCB8fCBkYXRhVmlld09iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3T2JqZWN0c1tvYmplY3ROYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMubmFtZV07XG4gICAgICAgIHRoaXMudmFsdWUgPSBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFsaWdubWVudEdyb3VwIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkFsaWdubWVudEdyb3VwXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkFsaWdubWVudEdyb3VwICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbW9kZTogdGhpcy5tb2RlLCBzdXBwb3J0c05vU2VsZWN0aW9uOiB0aGlzLnN1cHBvcnRzTm9TZWxlY3Rpb24gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUb2dnbGVTd2l0Y2hcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVG9nZ2xlU3dpdGNoICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJDb2xvclBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Db2xvclBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGRlZmF1bHRDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3IsIGlzTm9GaWxsSXRlbVN1cHBvcnRlZDogdGhpcy5pc05vRmlsbEl0ZW1TdXBwb3J0ZWQgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE51bVVwRG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJOdW1VcERvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTnVtVXBEb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBOdW1VcERvd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNsaWRlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TbGlkZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRGF0ZVBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EYXRlUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMucGxhY2Vob2xkZXJLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLnBsYWNlaG9sZGVyS2V5KSA6IHRoaXMucGxhY2Vob2xkZXIsIHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbURyb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1lcmdlVmFsdWVzOiB0aGlzLm1lcmdlVmFsdWVzLCBmaWx0ZXJWYWx1ZXM6IHRoaXMuZmlsdGVyVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEdXJhdGlvblBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EdXJhdGlvblBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXJyb3JSYW5nZUNvbnRyb2wgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRXJyb3JSYW5nZUNvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRXJyb3JSYW5nZUNvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZpZWxkUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZpZWxkUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZpZWxkUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzLCBhbGxvd011bHRpcGxlVmFsdWVzOiB0aGlzLmFsbG93TXVsdGlwbGVWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0SW5wdXRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dElucHV0ICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgVGV4dElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0QXJlYVwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0QXJlYSAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250UGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRQaWNrZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmFyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkdyYWRpZW50QmFyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkdyYWRpZW50QmFyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJJbWFnZVVwbG9hZFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5JbWFnZVVwbG9hZCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVkaXRvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJMaXN0RWRpdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lkxpc3RFZGl0b3IgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5VGV4dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJSZWFkT25seVRleHRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuUmVhZE9ubHlUZXh0ICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwZU1hcFNlbGVjdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNoYXBlTWFwU2VsZWN0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2hhcGVNYXBTZWxlY3RvciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvcjogdGhpcy5pc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3IgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRDb250cm9sIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHkuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib2xkOiAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgaXRhbGljOiAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB1bmRlcmxpbmU6IChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZm9udFNpemUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib2xkID8gdGhpcy5ib2xkLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5pdGFsaWMgPyB0aGlzLml0YWxpYy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudW5kZXJsaW5lID8gdGhpcy51bmRlcmxpbmUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuZm9udFNpemUuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWFyZ2luUGFkZGluZyBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJNYXJnaW5QYWRkaW5nXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk1hcmdpblBhZGRpbmcgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5yaWdodC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5yaWdodC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnRvcC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvdHRvbS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5sZWZ0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yaWdodC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMudG9wLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5ib3R0b20uc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVySXRlbSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9zaXRlQ2FyZCwgU2ltcGxlQ2FyZCB9IGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciA9IGxvY2FsaXphdGlvbk1hbmFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIGZyb20gbWV0YWRhdGEgZGF0YVZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhVmlld3MgbWV0YWRhdGEgZGF0YVZpZXcgb2JqZWN0XG4gICAgICogQHJldHVybnMgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWxcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKHR5cGVDbGFzcywgZGF0YVZpZXcpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBjb25zdCBkYXRhVmlld09iamVjdHMgPSAoX2EgPSBkYXRhVmlldyA9PT0gbnVsbCB8fCBkYXRhVmlldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXcubWV0YWRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzO1xuICAgICAgICBpZiAoZGF0YVZpZXdPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgZWFjaCBmb3JtYXR0aW5nIHByb3BlcnR5IGFuZCBzZXQgaXRzIG5ldyB2YWx1ZSBpZiBleGlzdHNcbiAgICAgICAgICAgIChfYiA9IGRlZmF1bHRTZXR0aW5ncy5jYXJkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkKVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgPyBbY2FyZF0gOiBjYXJkLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgdG9wIGxldmVsIHRvZ2dsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gKF9jID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gY29udGFpbmVySXRlbSA9PT0gbnVsbCB8fCBjb250YWluZXJJdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250YWluZXJJdGVtLnNsaWNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgZm9ybWF0dGluZyBtb2RlbCBieSBwYXJzaW5nIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwb3dlcmJpIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsXG4gICAgICovXG4gICAgYnVpbGRGb3JtYXR0aW5nTW9kZWwoZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwpIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGluZ01vZGVsID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLmNhcmRzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjYXJkLm9uUHJlUHJvY2VzcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FyZCk7XG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNhcmQgPSBjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZDtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChpc1NpbXBsZUNhcmQgP1xuICAgICAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFVpZCA9IGNhcmRHcm91cEluc3RhbmNlLm5hbWUgKyBcIi1ncm91cFwiO1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgZ3JvdXAgZm9yIGVhY2ggZ3JvdXBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHVpZDogZ3JvdXBVaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBjYXJkR3JvdXBJbnN0YW5jZS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTYXZlU2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5kZWxheVNhdmVTbGljZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRSZWFzb246IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkUmVhc29uLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQuZ3JvdXBzLnB1c2goZm9ybWF0dGluZ0dyb3VwKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGZvcm1hdHRpbmcgbW9kZWwgYWRkcyBkYXRhIHBvaW50cyBvciB0b3AgY2F0ZWdvcmllcyAoTGlrZSB3aGVuIHlvdSBtb2RpZnkgc3BlY2lmaWMgdmlzdWFsIGNhdGVnb3J5IGNvbG9yKS5cbiAgICAgICAgICAgICAgICAvLyB0aGVzZSBjYXRlZ29yaWVzIHVzZSBzYW1lIG9iamVjdCBuYW1lIGFuZCBwcm9wZXJ0eSBuYW1lIGZyb20gY2FwYWJpbGl0aWVzIGFuZCB0aGUgZ2VuZXJhdGVkIHVpZCB3aWxsIGJlIHRoZSBzYW1lIGZvciB0aGVzZSBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIFNvbHV0aW9uID0+IFNhdmUgc2xpY2UgbmFtZXMgdG8gbW9kaWZ5IGVhY2ggc2xpY2UgdWlkIHRvIGJlIHVuaXF1ZSBieSBhZGRpbmcgY291bnRlciB2YWx1ZSB0byB0aGUgbmV3IHNsaWNlIHVpZFxuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJVaWQgPSBncm91cFVpZCArIFwiLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KSA6IGNvbnRhaW5lci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVyVWlkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jb250YWluZXJJdGVtcy5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySWVtTmFtZSA9IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgPyBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5IDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckl0ZW1VaWQgPSBjb250YWluZXJVaWQgKyBjb250YWluZXJJZW1OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJJdGVtVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZXMgYW5kIGFkZCB0aGVtIHRvIGN1cnJlbnQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nQ29udGFpbmVySXRlbS5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLnB1c2goZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0dyb3VwLmNvbnRhaW5lciA9IGZvcm1hdHRpbmdDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nU2xpY2UgPSBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGluZ1NsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGZvcm1hdHRpbmcgc2xpY2UgdWlkIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChzbGljZU5hbWVzW3NsaWNlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdKys7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZS51aWQgPSBgJHtmb3JtYXR0aW5nU2xpY2UudWlkfS0ke3NsaWNlTmFtZXNbc2xpY2UubmFtZV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlcy5wdXNoKGZvcm1hdHRpbmdTbGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBQcm9jZWVkZWQgc2xpY2UgbmFtZXMgYXJlIHNhdmVkIHRvIHByZXZlbnQgZHVwbGljYXRlZCBkZWZhdWx0IGRlc2NyaXB0b3JzIGluIGNhc2Ugb2YgdXNpbmcgXG4gICAgICAgIC8vIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyAmIHNlbGVjdG9ycywgc2luY2UgdGhleSBoYXZlIHRoZSBzYW1lIGRlc2NyaXB0b3Igb2JqZWN0TmFtZSBhbmQgcHJvcGVydHlOYW1lXG4gICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgY29uc3QgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgbGV0IGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQgJiYgY2FyZC50b3BMZXZlbFNsaWNlKVxuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi4oX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSkpO1xuICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgP1xuICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBzbGljZU5hbWVzLCBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKTtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjb250YWluZXJJdGVtLnNsaWNlcywgc2xpY2VOYW1lcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLmNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG4gICAgZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSwgc2xpY2VzLCBzbGljZU5hbWVzLCB0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAodG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgc2xpY2VOYW1lc1t0b3BMZXZlbFNsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRvcExldmVsU2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNsaWNlICYmICFzbGljZU5hbWVzW3NsaWNlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoc2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzLm1hcCIsImltcG9ydCAqIGFzIGZvcm1hdHRpbmdTZXR0aW5ncyBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlXCI7XG5leHBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MsIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQnVpbGQgYW5kIHJldHVybiBmb3JtYXR0aW5nIGRlc2NyaXB0b3IgZm9yIHNpbXBsZSBzbGljZVxuICpcbiAqIEBwYXJhbSBvYmplY3ROYW1lIE9iamVjdCBuYW1lIGZyb20gY2FwYWJpbGl0aWVzXG4gKiBAcGFyYW0gc2xpY2UgZm9ybWF0dGluZyBzaW1wbGUgc2xpY2VcbiAqIEByZXR1cm5zIHNpbXBsZSBzbGljZSBmb3JtYXR0aW5nIGRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgc2xpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICBwcm9wZXJ0eU5hbWU6IHNsaWNlLm5hbWUsXG4gICAgICAgIHNlbGVjdG9yOiBzbGljZS5zZWxlY3RvcixcbiAgICAgICAgYWx0Q29uc3RhbnRWYWx1ZVNlbGVjdG9yOiBzbGljZS5hbHRDb25zdGFudFNlbGVjdG9yLFxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHNsaWNlLmluc3RhbmNlS2luZFxuICAgIH07XG59XG4vKipcbiAqIEdldCBwcm9wZXJ0eSB2YWx1ZSBmcm9tIGRhdGF2aWV3IG9iamVjdHMgaWYgZXhpc3RzXG4gKiBFbHNlIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZSBmcm9tIGZvcm1hdHRpbmcgc2V0dGluZ3Mgb2JqZWN0XG4gKlxuICogQHBhcmFtIHZhbHVlIGRhdGF2aWV3IG9iamVjdCB2YWx1ZVxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBmb3JtYXR0aW5nIHNldHRpbmdzIGRlZmF1bHQgdmFsdWVcbiAqIEByZXR1cm5zIGZvcm1hdHRpbmcgcHJvcGVydHkgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoc2xpY2UsIHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICF2YWx1ZS5zb2xpZCkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUuc29saWQuY29sb3IgfTtcbiAgICB9XG4gICAgaWYgKChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UudHlwZSkgPT09IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi8gJiYgc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgY29uc3QgaXRlbXNBcnJheSA9IHNsaWNlLml0ZW1zO1xuICAgICAgICByZXR1cm4gaXRlbXNBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzLm1hcCIsImltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCB7IGRhdGFWaWV3V2lsZGNhcmQgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHNcIjtcclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuXHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkID0gZm9ybWF0dGluZ1NldHRpbmdzLlNpbXBsZUNhcmQ7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZSA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TbGljZTtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsID0gZm9ybWF0dGluZ1NldHRpbmdzLk1vZGVsO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZXNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTJcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMzMzMzNcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlVGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgdGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMzMzMzNcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2Y1ZjVmNVwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwidmFsdWVzXCI7XHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiVmFsdWVzXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW1xyXG4gICAgICAgIHRoaXMuZm9udCwgXHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IsIFxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLCBcclxuICAgICAgICB0aGlzLmFsdGVybmF0ZVRleHRDb2xvciwgXHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IsIFxyXG4gICAgICAgIHRoaXMudGV4dFdyYXBcclxuICAgIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidGFibGVcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlRhYmxlXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxucHVibGljIGhlYWRlckJvbGQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJoZWFkZXJCb2xkXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIEJvbGRcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBzd2l0Y2hWYWx1ZXNUb1Jvd3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzd2l0Y2hWYWx1ZXNUb1Jvd3NcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTd2l0Y2ggdmFsdWVzIHRvIHJvd3NcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGNhdGVnb3J5V29yZFdyYXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJjYXRlZ29yeVdvcmRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ2F0ZWdvcnkgV29yZCBXcmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZVJvd0hlaWdodCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZhbHVlUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWUgUm93IEhlaWdodFwiLFxyXG4gICAgICAgIHZhbHVlOiAzMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSBSb3cgSGVpZ2h0XCIsXHJcbiAgICAgICAgdmFsdWU6IDMwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0b3RhbFJvd0hlaWdodCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInRvdGFsUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVG90YWwgUm93IEhlaWdodFwiLFxyXG4gICAgICAgIHZhbHVlOiAzNSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW3RoaXMuc3dpdGNoVmFsdWVzVG9Sb3dzLCB0aGlzLmNhdGVnb3J5V29yZFdyYXAsIHRoaXMudmFsdWVSb3dIZWlnaHQsIHRoaXMuYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQsIHRoaXMudG90YWxSb3dIZWlnaHRdXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJWYWx1ZSBjb25kaXRpb25hbCBmb3JtYXR0aW5nXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkRhdGEgYmFyIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJjYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiQ2F0ZWdvcnkgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IENvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RvcjogZGF0YVZpZXdXaWxkY2FyZC5jcmVhdGVEYXRhVmlld1dpbGRjYXJkU2VsZWN0b3IoZGF0YVZpZXdXaWxkY2FyZC5EYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24uSW5zdGFuY2VzQW5kVG90YWxzKSxcclxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW3RoaXMudGV4dENvbG9yXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFCYXJzRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgZm9ybWF0dGluZ1NldHRpbmdzLkNvbXBvc2l0ZUNhcmQge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCI7XHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiRGF0YSBCYXJzXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIHNlcmllcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcInNlcmllc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNlcmllc1wiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2hvd0RhdGFCYXJzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd0RhdGFCYXJzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBEYXRhIEJhcnNcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGRhdGFCYXJIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkYXRhQmFySGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRGF0YSBCYXIgSGVpZ2h0ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiA4MCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdHJhbnNwYXJlbmN5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVHJhbnNwYXJlbmN5ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiAyMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYm9yZGVyT24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJPblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvcmRlciBPblwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBtYXRjaERhdGFCYXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWF0Y2ggRGF0YSBCYXIgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYm9yZGVyVGhpY2tuZXNzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyVGhpY2tuZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9yZGVyIFRoaWNrbmVzc1wiLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCb3JkZXIgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDAwMDAwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBtaW5WYWx1ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1pblZhbHVlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWluaW11bSBWYWx1ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBtYXhWYWx1ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1heFZhbHVlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWF4aW11bSBWYWx1ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBsYWJlbHNPdXRzaWRlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwibGFiZWxzT3V0c2lkZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhYmVscyBPdXRzaWRlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzaG93WmVyb0xpbmUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93WmVyb0xpbmVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IFplcm8gTGluZVwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgemVyb0xpbmVDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiemVyb0xpbmVDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlplcm8gTGluZSBDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMwMDAwMDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiWmVybyBMaW5lIFRyYW5zcGFyZW5jeSAoJSlcIixcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0U2VyaWVzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTZWxlY3QgU2VyaWVzXCIsXHJcbiAgICAgICAgbmFtZTogXCJzZWxlY3RTZXJpZXNHcm91cFwiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuc2VyaWVzXVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGRhdGFCYXJzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEYXRhIEJhcnMgU2V0dGluZ3NcIixcclxuICAgICAgICBuYW1lOiBcImRhdGFCYXJzR3JvdXBcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLnNob3dEYXRhQmFycywgdGhpcy5kYXRhQmFySGVpZ2h0LCB0aGlzLnRyYW5zcGFyZW5jeSwgdGhpcy5ib3JkZXJPbiwgdGhpcy5tYXRjaERhdGFCYXJDb2xvciwgdGhpcy5ib3JkZXJUaGlja25lc3MsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUsIHRoaXMubGFiZWxzT3V0c2lkZSwgdGhpcy5zaG93WmVyb0xpbmUsIHRoaXMuemVyb0xpbmVDb2xvciwgdGhpcy56ZXJvTGluZVRyYW5zcGFyZW5jeV1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBncm91cHM6IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cFtdID0gW3RoaXMuc2VsZWN0U2VyaWVzR3JvdXAsIHRoaXMuZGF0YUJhcnNHcm91cF07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhQmFyTWFya2Vyc1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImRhdGFCYXJNYXJrZXJzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIEJhciBNYXJrZXJzXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3RhbHNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0b3RhbHNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlRvdGFsc1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzaG93VG90YWxSb3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93VG90YWxSb3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IFRvdGFsIFJvd1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0b3RhbEJlaGF2aW9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxCZWhhdmlvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmUgU2VsZWN0aW9uXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiTWVhc3VyZVwiLCBkaXNwbGF5TmFtZTogXCJNZWFzdXJlXCIgfSxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIk1lYXN1cmVcIiwgZGlzcGxheU5hbWU6IFwiTWVhc3VyZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiU3VtXCIsIGRpc3BsYXlOYW1lOiBcIlN1bVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQXZlcmFnZVwiLCBkaXNwbGF5TmFtZTogXCJBdmVyYWdlXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VudFwiLCBkaXNwbGF5TmFtZTogXCJDb3VudFwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnQgRGlzdGluY3RcIiwgZGlzcGxheU5hbWU6IFwiQ291bnQgRGlzdGluY3RcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIk1heFwiLCBkaXNwbGF5TmFtZTogXCJNYXhcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIk1pblwiLCBkaXNwbGF5TmFtZTogXCJNaW5cIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZm9udCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvbGRcIixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2QwZDBkMFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFt0aGlzLnNob3dUb3RhbFJvdywgdGhpcy50b3RhbEJlaGF2aW9yLCB0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy50ZXh0V3JhcF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRsaW5lcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImhvcml6b250YWxHcmlkbGluZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIb3Jpem9udGFsIGdyaWRsaW5lc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBob3Jpem9udGFsR3JpZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZDBkMGQwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImhvcml6b250YWxHcmlkV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJXaWR0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImhvcml6b250YWxHcmlkVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSG9yaXpvbnRhbCBncmlkIHRyYW5zcGFyZW5jeSAoJSlcIixcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkbGluZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ2ZXJ0aWNhbEdyaWRsaW5lc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIGdyaWRsaW5lc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNkMGQwZDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2ZXJ0aWNhbEdyaWRXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZFdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkVHJhbnNwYXJlbmN5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmVydGljYWwgZ3JpZCB0cmFuc3BhcmVuY3kgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZ3JpZFwiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkdyaWRcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZGxpbmVzLFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRDb2xvcixcclxuICAgICAgICB0aGlzLmhvcml6b250YWxHcmlkV2lkdGgsXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeSxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZGxpbmVzLFxyXG4gICAgICAgIHRoaXMudmVydGljYWxHcmlkQ29sb3IsXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRXaWR0aCxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeVxyXG4gICAgXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5IZWFkZXJzU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgZm9udCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvbGRcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaXRhbGljXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzFlM2E4YVwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmZmZmZmZcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbGlnbm1lbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkFsaWdubWVudEdyb3VwKHtcclxuICAgICAgICBuYW1lOiBcImFsaWdubWVudFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhlYWRlciBhbGlnbm1lbnRcIixcclxuICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgbW9kZTogcG93ZXJiaS52aXN1YWxzLkFsaWdubWVudEdyb3VwTW9kZS5Ib3Jpem9uYWwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dEdyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dFwiLFxyXG4gICAgICAgIG5hbWU6IFwidGV4dFwiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuZm9udCwgdGhpcy50ZXh0Q29sb3IsIHRoaXMuYmFja2dyb3VuZENvbG9yLCB0aGlzLmFsaWdubWVudCwgdGhpcy50ZXh0V3JhcF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBoZWFkZXJSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJoZWFkZXJSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgcm93IGhlaWdodFwiLFxyXG4gICAgICAgIHZhbHVlOiAzNSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgb3B0aW9uc0dyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiT3B0aW9uc1wiLFxyXG4gICAgICAgIG5hbWU6IFwib3B0aW9uc1wiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuaGVhZGVyUm93SGVpZ2h0XVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWVTZXJpZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJuYW1lU2VyaWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lT3ZlcnJpZGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJuYW1lT3ZlcnJpZGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgTmFtZVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIGN1c3RvbSBoZWFkZXIgbmFtZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWVzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJOYW1lc1wiLFxyXG4gICAgICAgIG5hbWU6IFwibmFtZXNcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLm5hbWVTZXJpZXMsIHRoaXMubmFtZU92ZXJyaWRlXVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiY29sdW1uSGVhZGVyc1wiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkNvbHVtbiBoZWFkZXJzXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgZ3JvdXBzOiBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXBbXSA9IFt0aGlzLnRleHRHcm91cCwgdGhpcy5vcHRpb25zR3JvdXAsIHRoaXMubmFtZXNHcm91cF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3BlY2lmaWNDb2x1bW5TZXR0aW5ncyBleHRlbmRzIGZvcm1hdHRpbmdTZXR0aW5ncy5Db21wb3NpdGVDYXJkIHtcclxuICAgIHB1YmxpYyBzZXJpZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJzZXJpZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTZXJpZXNcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJcIiwgZGlzcGxheU5hbWU6IFwiXCIgfSxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYXBwbHlUb0hlYWRlciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImFwcGx5VG9IZWFkZXJcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBcHBseSB0byBoZWFkZXJcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhcHBseVRvVG90YWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhcHBseVRvVG90YWxcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBcHBseSB0byB0b3RhbFwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFwcGx5VG9WYWx1ZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhcHBseVRvVmFsdWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gdmFsdWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFwcGx5U2V0dGluZ3NHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHNldHRpbmdzIHRvXCIsXHJcbiAgICAgICAgbmFtZTogXCJhcHBseVNldHRpbmdzVG9cIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLnNlcmllcywgdGhpcy5hcHBseVRvSGVhZGVyLCB0aGlzLmFwcGx5VG9Ub3RhbCwgdGhpcy5hcHBseVRvVmFsdWVzXVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTJcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMwMGI4ZDRcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmZmZmZmZcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFsdGVybmF0ZVRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIHRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2Y1ZjVmNVwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgdGV4dFdyYXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0V3JhcFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgd3JhcFwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhbGlnbm1lbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkFsaWdubWVudEdyb3VwKHtcclxuICAgICAgICBuYW1lOiBcImFsaWdubWVudFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsaWdubWVudFwiLFxyXG4gICAgICAgIHZhbHVlOiBcImxlZnRcIixcclxuICAgICAgICBtb2RlOiBwb3dlcmJpLnZpc3VhbHMuQWxpZ25tZW50R3JvdXBNb2RlLkhvcml6b25hbCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBkaXNwbGF5VW5pdHMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkF1dG9Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkaXNwbGF5VW5pdHNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEaXNwbGF5IHVuaXRzXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgZGVjaW1hbFBsYWNlcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImRlY2ltYWxQbGFjZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZSBkZWNpbWFsIHBsYWNlc1wiLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlc1wiLFxyXG4gICAgICAgIG5hbWU6IFwic3BlY2lmaWNWYWx1ZXNcIiwgLy8gTk9URTogcmVuYW1lZCB0byBzcGVjaWZpY1ZhbHVlcyB0byBhdm9pZCBjbGFzaCB3aXRoIGdsb2JhbCAndmFsdWVzJyBvYmplY3RcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy5hbHRlcm5hdGVUZXh0Q29sb3IsIHRoaXMuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLCB0aGlzLmFsaWdubWVudCwgdGhpcy5kaXNwbGF5VW5pdHMsIHRoaXMuZGVjaW1hbFBsYWNlcywgdGhpcy50ZXh0V3JhcF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcInNwZWNpZmljQ29sdW1uXCI7XHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiU3BlY2lmaWMgY29sdW1uXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgZ3JvdXBzOiBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXBbXSA9IFt0aGlzLmFwcGx5U2V0dGluZ3NHcm91cCwgdGhpcy52YWx1ZXNHcm91cF07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5XaWR0aFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImNvbHVtbldpZHRoXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDb2x1bW4gV2lkdGhcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeUNvbHVtbldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiY2F0ZWdvcnlDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNhdGVnb3J5IENvbHVtbiBXaWR0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAxNTBcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbGlnbmVkQ29sdW1ucyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImFsaWduZWRDb2x1bW5zXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWxpZ25lZCBjb2x1bW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZUNvbHVtbldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlIENvbHVtbiBXaWR0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAxMDBcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy5jYXRlZ29yeUNvbHVtbldpZHRoLCB0aGlzLmFsaWduZWRDb2x1bW5zLCB0aGlzLnZhbHVlQ29sdW1uV2lkdGhdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBwdWJsaWMgdmFsdWVzTWVudTogVmFsdWVzU2V0dGluZ3MgPSBuZXcgVmFsdWVzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBzcGVjaWZpY0NvbHVtbjogU3BlY2lmaWNDb2x1bW5TZXR0aW5ncyA9IG5ldyBTcGVjaWZpY0NvbHVtblNldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgY29sdW1uSGVhZGVyczogQ29sdW1uSGVhZGVyc1NldHRpbmdzID0gbmV3IENvbHVtbkhlYWRlcnNTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHRhYmxlOiBUYWJsZVNldHRpbmdzID0gbmV3IFRhYmxlU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBjYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZzogQ2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBDYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgdmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmc6IFZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgVmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nOiBEYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IERhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBkYXRhQmFyc0Zvcm1hdHRpbmc6IERhdGFCYXJzRm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IERhdGFCYXJzRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZGF0YUJhck1hcmtlcnM6IERhdGFCYXJNYXJrZXJzU2V0dGluZ3MgPSBuZXcgRGF0YUJhck1hcmtlcnNTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHRvdGFsczogVG90YWxzU2V0dGluZ3MgPSBuZXcgVG90YWxzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBncmlkTWVudTogR3JpZFNldHRpbmdzID0gbmV3IEdyaWRTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGNvbHVtbldpZHRoOiBDb2x1bW5XaWR0aFNldHRpbmdzID0gbmV3IENvbHVtbldpZHRoU2V0dGluZ3MoKTtcclxuXHJcbiAgICBwdWJsaWMgY2FyZHM6IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmRbXSA9IFt0aGlzLnNwZWNpZmljQ29sdW1uLCB0aGlzLmNvbHVtbkhlYWRlcnMsIHRoaXMudmFsdWVzTWVudSwgdGhpcy50YWJsZSwgdGhpcy5jb2x1bW5XaWR0aCwgdGhpcy50b3RhbHMsIHRoaXMuZ3JpZE1lbnUsIHRoaXMuY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmcsIHRoaXMudmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmcsIHRoaXMuZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmcsIHRoaXMuZGF0YUJhcnNGb3JtYXR0aW5nLCB0aGlzLmRhdGFCYXJNYXJrZXJzXTtcclxufSIsIi8qXHJcbiogIFBvd2VyIEJJIFZpc3VhbCBDTElcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxyXG4qICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qICBNSVQgTGljZW5zZVxyXG4qXHJcbiogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4qICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4qICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4qXHJcbiogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiogIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qXHJcbiogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4qICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4qICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4qICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiogIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLy4uL3N0eWxlL3Zpc3VhbC5sZXNzXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcclxuaW1wb3J0IFZpc3VhbFVwZGF0ZU9wdGlvbnMgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbFVwZGF0ZU9wdGlvbnM7XHJcbmltcG9ydCBJVmlzdWFsID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsO1xyXG5pbXBvcnQgRGF0YVZpZXcgPSBwb3dlcmJpLkRhdGFWaWV3O1xyXG5pbXBvcnQgeyBWaXN1YWxTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UsIGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCB7IGRhdGFWaWV3T2JqZWN0cywgZGF0YVZpZXdXaWxkY2FyZCB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuICAgIHByaXZhdGUgdmlzdWFsU2V0dGluZ3M6IFZpc3VhbFNldHRpbmdzO1xyXG4gICAgcHJpdmF0ZSBkYXRhVmlldzogRGF0YVZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFibGUtY29udGFpbmVyXCI7XHJcbiAgICAgICAgb3B0aW9ucy5lbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGhpcy50YWJsZS5jbGFzc05hbWUgPSAncGJpLXRhYmxlJztcclxuICAgICAgICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlID0gbmV3IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnZpc3VhbFNldHRpbmdzID0gbmV3IFZpc3VhbFNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZvcm1hdHRpbmdNb2RlbCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwodGhpcy52aXN1YWxTZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShvcHRpb25zOiBWaXN1YWxVcGRhdGVPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YVZpZXdzICYmIG9wdGlvbnMuZGF0YVZpZXdzWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzdWFsU2V0dGluZ3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UucG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbChWaXN1YWxTZXR0aW5ncywgb3B0aW9ucy5kYXRhVmlld3NbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07IC8vIFVwZGF0ZSBkYXRhVmlldyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmNvbHVtbldpZHRoO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnRhYmxlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlc1NldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy52YWx1ZXNNZW51O1xyXG4gICAgICAgIGNvbnN0IGNlbGxJdGFsaWMgPSB2YWx1ZXNTZXR0aW5ncy5mb250Lml0YWxpYz8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2VsbFVuZGVybGluZSA9IHZhbHVlc1NldHRpbmdzLmZvbnQudW5kZXJsaW5lPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29sb3IgPSB2YWx1ZXNTZXR0aW5ncy50ZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRlVGV4dENvbG9yID0gdmFsdWVzU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNlbGxGb250RmFtaWx5ID0gdmFsdWVzU2V0dGluZ3MuZm9udC5mb250RmFtaWx5LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsc1NldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy50b3RhbHM7XHJcbiAgICAgICAgY29uc3Qgc2hvd1RvdGFsUm93ID0gdG90YWxzU2V0dGluZ3Muc2hvd1RvdGFsUm93LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93SXRhbGljID0gdG90YWxzU2V0dGluZ3MuZm9udC5pdGFsaWM/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93V29yZFdyYXAgPSB0b3RhbHNTZXR0aW5ncy50ZXh0V3JhcC52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0ZvbnRTaXplID0gdG90YWxzU2V0dGluZ3MuZm9udC5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0ZvbnRGYW1pbHkgPSB0b3RhbHNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dUZXh0Q29sb3IgPSB0b3RhbHNTZXR0aW5ncy50ZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDb2x1bW5XaWR0aCA9IGNvbHVtbldpZHRoU2V0dGluZ3MuY2F0ZWdvcnlDb2x1bW5XaWR0aC52YWx1ZTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVdvcmRXcmFwID0gdGFibGVTZXR0aW5ncy5jYXRlZ29yeVdvcmRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlV29yZFdyYXAgPSB2YWx1ZXNTZXR0aW5ncy50ZXh0V3JhcC52YWx1ZTtcclxuICAgICAgICBjb25zdCBjb2x1bW5IZWFkZXJzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmNvbHVtbkhlYWRlcnM7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyV29yZFdyYXAgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MudGV4dFdyYXA/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbldpZHRoID0gY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclJvd0hlaWdodCA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5oZWFkZXJSb3dIZWlnaHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVSb3dIZWlnaHQgPSB0YWJsZVNldHRpbmdzLnZhbHVlUm93SGVpZ2h0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0ID0gdGFibGVTZXR0aW5ncy5hbHRlcm5hdGVWYWx1ZVJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0hlaWdodCA9IHRhYmxlU2V0dGluZ3MudG90YWxSb3dIZWlnaHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRm9udFNpemUgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJCb2xkID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmZvbnQuYm9sZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJJdGFsaWMgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC5pdGFsaWMudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVW5kZXJsaW5lID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmZvbnQudW5kZXJsaW5lLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckZvbnRGYW1pbHkgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC5mb250RmFtaWx5LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckFsaWdubWVudCA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5hbGlnbm1lbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2VsbEZvbnRTaXplID0gdmFsdWVzU2V0dGluZ3MuZm9udC5mb250U2l6ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZUJvbGQgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmJvbGQ/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Qm9sZCA9IHRvdGFsc1NldHRpbmdzLmZvbnQuYm9sZD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dVbmRlcmxpbmUgPSB0b3RhbHNTZXR0aW5ncy5mb250LnVuZGVybGluZT8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdmFsdWVzU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFsdGVybmF0ZUJhY2tncm91bmRDb2xvciA9IHZhbHVlc1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJCYWNrZ3JvdW5kQ29sb3IgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclRleHRDb2xvciA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy50ZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3IgPSB0b3RhbHNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZ3JpZFNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5ncmlkTWVudTtcclxuICAgICAgICBjb25zdCBncmlkQm9yZGVyQ29sb3IgPSBncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNGU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDYXRlZ29yeVRleHRDb2xvciA9IGNhdGVnb3J5Q0ZTZXR0aW5ncy50ZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDRlNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy52YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZztcclxuICAgICAgICB2YWx1ZUNGU2V0dGluZ3Muc2xpY2VzID0gW107IC8vIFdpbGwgYmUgcG9wdWxhdGVkIGR5bmFtaWNhbGx5IHBlci1tZWFzdXJlXHJcblxyXG4gICAgICAgIHRvdGFsc1NldHRpbmdzLnNsaWNlcyA9IFtcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3Muc2hvd1RvdGFsUm93LFxyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5mb250LFxyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy50ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MudGV4dFdyYXBcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhQmFyc1NldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5kYXRhQmFyc0Zvcm1hdHRpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFCYXJzQ0ZTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmc7XHJcbiAgICAgICAgZGF0YUJhcnNDRlNldHRpbmdzLnNsaWNlcyA9IFtdOyAvLyBXaWxsIGJlIHBvcHVsYXRlZCBkeW5hbWljYWxseSBwZXItbWVhc3VyZVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhQmFyTWFya2Vyc1NldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5kYXRhQmFyTWFya2VycztcclxuICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcyA9IFtdOyAvLyBXaWxsIGJlIHBvcHVsYXRlZCBkeW5hbWljYWxseSBwZXItbWVhc3VyZVxyXG5cclxuICAgICAgICAvLyBSZXNldCBjb2x1bW5XaWR0aCBzbGljZXM6IGJhc2Ugc2xpY2VzIGFsd2F5cyBzaG93biwgcGVyLW1lYXN1cmUgc2xpY2VzIGFkZGVkIGR5bmFtaWNhbGx5IHdoZW4gbm90IGFsaWduZWRcclxuICAgICAgICBpZiAoY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1ucy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb2x1bW5XaWR0aFNldHRpbmdzLnNsaWNlcyA9IFtjb2x1bW5XaWR0aFNldHRpbmdzLmNhdGVnb3J5Q29sdW1uV2lkdGgsIGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMsIGNvbHVtbldpZHRoU2V0dGluZ3MudmFsdWVDb2x1bW5XaWR0aF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy5zbGljZXMgPSBbY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLCBjb2x1bW5XaWR0aFNldHRpbmdzLmFsaWduZWRDb2x1bW5zXTtcclxuICAgICAgICAgICAgLy8gUGVyLW1lYXN1cmUgd2lkdGggc2xpY2VzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIHZhbHVlcy5mb3JFYWNoIGxvb3AgYmVsb3dcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGhleCB0byByZ2JhXHJcbiAgICAgICAgY29uc3QgYXBwbHlUcmFuc3BhcmVuY3kgPSAoaGV4OiBzdHJpbmcsIHRyYW5zcGFyZW5jeVBjdDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFoZXgpIHJldHVybiBoZXg7XHJcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIENGIGhleCB2YWx1ZXM6IHN0cmlwIGxlYWRpbmcgbWludXMsIGVuc3VyZSAjIHByZWZpeCwgdGFrZSBmaXJzdCA3IGNoYXJzXHJcbiAgICAgICAgICAgIGxldCBjbGVhbmVkID0gaGV4LnJlcGxhY2UoL14tLywgJycpO1xyXG4gICAgICAgICAgICBpZiAoIWNsZWFuZWQuc3RhcnRzV2l0aChcIiNcIikpIGNsZWFuZWQgPSBcIiNcIiArIGNsZWFuZWQ7XHJcbiAgICAgICAgICAgIGlmIChjbGVhbmVkLmxlbmd0aCA9PT0gOSkgY2xlYW5lZCA9IGNsZWFuZWQuc3Vic3RyaW5nKDAsIDcpOyAvLyAjUlJHR0JCQUEgLT4gI1JSR0dCQlxyXG4gICAgICAgICAgICBsZXQgYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAxIC0gKHRyYW5zcGFyZW5jeVBjdCAvIDEwMCkpKTtcclxuICAgICAgICAgICAgaWYgKGNsZWFuZWQuc3RhcnRzV2l0aChcIiNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuZWQubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KGNsZWFuZWRbMV0gKyBjbGVhbmVkWzFdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGNsZWFuZWRbMl0gKyBjbGVhbmVkWzJdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KGNsZWFuZWRbM10gKyBjbGVhbmVkWzNdLCAxNik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNsZWFuZWQubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KGNsZWFuZWRbMV0gKyBjbGVhbmVkWzJdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGNsZWFuZWRbM10gKyBjbGVhbmVkWzRdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KGNsZWFuZWRbNV0gKyBjbGVhbmVkWzZdLCAxNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwgJHtnfSwgJHtifSwgJHthbHBoYX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGV4OyAvLyBmYWxsYmFjayBpZiBub3QgaGV4XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaG9yaXpMaW5lcyA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZGxpbmVzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhvcml6Q29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeShncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRDb2xvci52YWx1ZS52YWx1ZSwgZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkVHJhbnNwYXJlbmN5LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBob3JpeldpZHRoID0gZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaG9yaXpCb3JkZXJWYWx1ZSA9IGhvcml6TGluZXMgPyBgJHtob3JpeldpZHRofXB4IHNvbGlkICR7aG9yaXpDb2xvcn1gIDogJ25vbmUnO1xyXG4gICAgICAgIGNvbnN0IGhvcml6Qm9yZGVyMnhWYWx1ZSA9IGhvcml6TGluZXMgPyBgJHtob3JpeldpZHRoICogMn1weCBzb2xpZCAke2hvcml6Q29sb3J9YCA6ICdub25lJztcclxuXHJcbiAgICAgICAgY29uc3QgdmVydExpbmVzID0gZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZGxpbmVzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZlcnRDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRDb2xvci52YWx1ZS52YWx1ZSwgZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmVydFdpZHRoID0gZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZFdpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZlcnRCb3JkZXJWYWx1ZSA9IHZlcnRMaW5lcyA/IGAke3ZlcnRXaWR0aH1weCBzb2xpZCAke3ZlcnRDb2xvcn1gIDogJ25vbmUnO1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRleHQgY29sb3IgZm9yIGEgY2F0ZWdvcnkgcm93LCBzdXBwb3J0aW5nIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bTogbnVtYmVyLCB1bml0czogbnVtYmVyLCBkZWNpbWFsczogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpdmlzb3IgPSAxO1xyXG4gICAgICAgICAgICBsZXQgc3VmZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHVuaXRzID09PSAwKSB7IC8vIEF1dG9cclxuICAgICAgICAgICAgICAgIGxldCBhYnNOdW0gPSBNYXRoLmFicyhudW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFic051bSA+PSAxMDAwMDAwMDAwMDAwKSB7IGRpdmlzb3IgPSAxMDAwMDAwMDAwMDAwOyBzdWZmaXggPSBcIlRcIjsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJzTnVtID49IDEwMDAwMDAwMDApIHsgZGl2aXNvciA9IDEwMDAwMDAwMDA7IHN1ZmZpeCA9IFwiYm5cIjsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJzTnVtID49IDEwMDAwMDApIHsgZGl2aXNvciA9IDEwMDAwMDA7IHN1ZmZpeCA9IFwiTVwiOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYnNOdW0gPj0gMTAwMCkgeyBkaXZpc29yID0gMTAwMDsgc3VmZml4ID0gXCJLXCI7IH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1bml0cyA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGRpdmlzb3IgPSB1bml0cztcclxuICAgICAgICAgICAgICAgIGlmICh1bml0cyA9PT0gMTAwMCkgc3VmZml4ID0gXCJLXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMCkgc3VmZml4ID0gXCJNXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMDAwMCkgc3VmZml4ID0gXCJiblwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDAwMDApIHN1ZmZpeCA9IFwiVFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKG51bSAvIGRpdmlzb3IpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFscyxcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHNcclxuICAgICAgICAgICAgfSkgKyBzdWZmaXg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2F0ZWdvcnlUZXh0Q29sb3IgPSAocm93SW5kZXg6IG51bWJlciwgZGF0YVZpZXc6IERhdGFWaWV3KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkub2JqZWN0cyAmJiBjYXRlZ29yeS5vYmplY3RzW3Jvd0luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDYXRlZ29yeVRleHRDb2xvcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYXBwbHkgc3F1YXNoaW5nIHJvdyBoZWlnaHRcclxuICAgICAgICBjb25zdCBhcHBseVJvd1NxdWFzaCA9IChjZWxsOiBIVE1MRWxlbWVudCwgcm93SGVpZ2h0OiBudW1iZXIsIGZvbnRTaXplOiBudW1iZXIsIHdvcmRXcmFwOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3dIZWlnaHQgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubGluZUhlaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gYCR7TWF0aC5taW4oZm9udFNpemUsIE1hdGgubWF4KDgsIHJvd0hlaWdodCAtIDYpKX1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnBhZGRpbmcgPSBcIlwiOyAvLyBmYWxsYmFjayB0byBDU1MgcGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3b3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubGluZUhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubGluZUhlaWdodCA9IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhcHBseVZlcnRpY2FsR3JpZEJvcmRlciA9IChjZWxsOiBIVE1MRWxlbWVudCwgaXNMYXN0Q2VsbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzTGFzdENlbGwpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhcHBseVRvdGFsUm93U3R5bGVzID0gKGNlbGw6IEhUTUxFbGVtZW50LCB3aWR0aDogbnVtYmVyLCB3b3JkV3JhcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCB0b3RhbFJvd0hlaWdodCwgdG90YWxSb3dGb250U2l6ZSwgd29yZFdyYXApO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB0b3RhbFJvd0JvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSB0b3RhbFJvd1VuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IHRvdGFsUm93SXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSB0b3RhbFJvd1RleHRDb2xvcjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSB3b3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICBpZiAod29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJvdywgc3VwcG9ydGluZyBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcbiAgICAgICAgY29uc3QgZ2V0Um93QmFja2dyb3VuZENvbG9yID0gKHJvd0luZGV4OiBudW1iZXIsIGlzRXZlblJvdzogYm9vbGVhbiwgZGF0YVZpZXc6IERhdGFWaWV3KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q29sb3JQcm9wID0gaXNFdmVuUm93ID8gXCJiYWNrZ3JvdW5kQ29sb3JcIiA6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IGlzRXZlblJvdyA/IGJhY2tncm91bmRDb2xvciA6IGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Lm9iamVjdHMgJiYgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidGFibGVcIiwgcHJvcGVydHlOYW1lOiB0YXJnZXRDb2xvclByb3AgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHJvdyBiYWNrZ3JvdW5kIGNvbG9yLCBzdXBwb3J0aW5nIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuICAgICAgICB3aGlsZSAodGhpcy50YWJsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUucmVtb3ZlQ2hpbGQodGhpcy50YWJsZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmRhdGFWaWV3cyB8fCBvcHRpb25zLmRhdGFWaWV3cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiTm8gZGF0YSBhdmFpbGFibGVcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFWaWV3OiBEYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG5cclxuICAgICAgICBsZXQgaGFzQ2F0ZWdvcmllcyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGxldCBjYXRlZ29yaWVzID0gaGFzQ2F0ZWdvcmllcyA/IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXNbMF0gOiBudWxsO1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMgPyBkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlcyB8fCB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIk5vIGRhdGEgYXZhaWxhYmxlXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFZhbHVlc1RvUm93cyA9IHRhYmxlU2V0dGluZ3Muc3dpdGNoVmFsdWVzVG9Sb3dzPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSBoYXNDYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMudmFsdWVzID8gY2F0ZWdvcmllcy52YWx1ZXMubGVuZ3RoIDogKHZhbHVlc1swXS52YWx1ZXMgPyB2YWx1ZXNbMF0udmFsdWVzLmxlbmd0aCA6IDEpO1xyXG5cclxuICAgICAgICAvLyBQcmUtcHJvY2VzcyBtZWFzdXJlIHNldHRpbmdzIHRvIHBvcHVsYXRlIGZvcm1hdHRpbmcgbW9kZWwgcHJvcGVybHlcclxuICAgICAgICBsZXQgbWVhc3VyZUhlYWRlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgbGV0IG1lYXN1cmVIZWFkZXJPdmVycmlkZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgXHJcbmludGVyZmFjZSBNZWFzdXJlU3BlY2lmaWNTZXR0aW5ncyB7XHJcbiAgICB0ZXh0Q29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYWx0ZXJuYXRlVGV4dENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGFsaWdubWVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYXBwbHlUb0hlYWRlcjogYm9vbGVhbjtcclxuICAgIGFwcGx5VG9WYWx1ZXM6IGJvb2xlYW47XHJcbiAgICBhcHBseVRvVG90YWw6IGJvb2xlYW47XHJcbiAgICBkaXNwbGF5VW5pdHM6IG51bWJlcjtcclxuICAgIGRlY2ltYWxQbGFjZXM6IG51bWJlcjtcclxuICAgIGZvbnRGYW1pbHk6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGZvbnRTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBib2xkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgaXRhbGljOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgdW5kZXJsaW5lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgdGV4dFdyYXA6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbiAgICAgICAgICBsZXQgbWVhc3VyZVNldHRpbmdzTGlzdDogTWVhc3VyZVNwZWNpZmljU2V0dGluZ3NbXSA9IFtdO1xyXG4gICAgICAgICAgbGV0IHZhbHVlQ29sdW1uV2lkdGhzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzcGVjT2JqID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHM/LnNwZWNpZmljQ29sdW1uO1xyXG4gICAgICAgICAgICAgIGxldCBzZXR0aW5nczogTWVhc3VyZVNwZWNpZmljU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlVGV4dENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbGlnbm1lbnRcIiB9LCB1bmRlZmluZWQpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUb0hlYWRlcjogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9IZWFkZXJcIiB9LCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUb1ZhbHVlczogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9WYWx1ZXNcIiB9LCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUb1RvdGFsOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1RvdGFsXCIgfSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlVbml0czogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRpc3BsYXlVbml0c1wiIH0sIDApLFxyXG4gICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZGVjaW1hbFBsYWNlc1wiIH0sIDEpLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZm9udEZhbWlseVwiIH0sIHVuZGVmaW5lZCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRTaXplXCIgfSwgdW5kZWZpbmVkKSBhcyBudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGJvbGQ6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJib2xkXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBpdGFsaWM6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJpdGFsaWNcIiB9LCB1bmRlZmluZWQpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIHVuZGVybGluZTogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInVuZGVybGluZVwiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0V3JhcFwiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgbWVhc3VyZVNldHRpbmdzTGlzdC5wdXNoKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGF5TmFtZSA9IHZhbHVlQ29sdW1uLnNvdXJjZS5kaXNwbGF5TmFtZSB8fCBgTWVhc3VyZSAke21lYXN1cmVIZWFkZXJzLmxlbmd0aCArIDF9YDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlcnMucHVzaChkaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmFtZU92ZXJyaWRlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5IZWFkZXJzXCIsIHByb3BlcnR5TmFtZTogXCJuYW1lT3ZlcnJpZGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyT3ZlcnJpZGVzLnB1c2gobmFtZU92ZXJyaWRlICE9PSBcIlwiID8gbmFtZU92ZXJyaWRlIDogZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVlcnlOYW1lID0gdmFsdWVDb2x1bW4uc291cmNlLnF1ZXJ5TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uV2lkdGhzLnB1c2goY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWNXaWR0aCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCBcclxuICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY29sdW1uV2lkdGhcIiwgcHJvcGVydHlOYW1lOiBcInZhbHVlQ29sdW1uV2lkdGhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3MudmFsdWVDb2x1bW5XaWR0aC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uV2lkdGhzLnB1c2goc3BlY2lmaWNXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHBlci1tZWFzdXJlIHdpZHRoIHNsaWNlIHdpdGggc2VsZWN0b3Igc28gUG93ZXIgQkkgcGVyc2lzdHMgaXQgcGVyLW1lYXN1cmVcclxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFdpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNwZWNpZmljV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuLy8gQ3JlYXRlIHRoZSBjb21wb3NpdGUgc2VsZWN0b3IgZm9yIHBlci1yb3cgcnVsZSBldmFsdWF0aW9uXHJcbiAgICAgICAgICAgICAgY29uc3Qgd2lsZGNhcmRTZWxlY3RvciA9IGRhdGFWaWV3V2lsZGNhcmQuY3JlYXRlRGF0YVZpZXdXaWxkY2FyZFNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICBkYXRhVmlld1dpbGRjYXJkLkRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbi5JbnN0YW5jZXNBbmRUb3RhbHNcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvc2l0ZVNlbGVjdG9yID0ge1xyXG4gICAgICAgICAgICAgICAgICBtZXRhZGF0YTogcXVlcnlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB3aWxkY2FyZFNlbGVjdG9yLmRhdGFcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAvLyBCdWlsZCBkeW5hbWljIHNldHRpbmdzIHNsaWNlIGZvciB0aGlzIG1lYXN1cmVcclxuICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFsdWVDRlNldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFRleHQgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7IHZhbHVlOiBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjb21wb3NpdGVTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGFsdENvbnN0YW50U2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEYXRhIGJhciBjb2xvciBDRjogcmVnaXN0ZXIgcGVyLW1lYXN1cmUgc2xpY2Ugb24gdGhlIHNpbXBsZSBjYXJkXHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHREYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICBcIiMzMWI2ZmRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkYXRhQmFyc0NGU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRhdGFCYXJDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgRGF0YSBCYXIgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7IHZhbHVlOiBkZWZhdWx0RGF0YUJhckNvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGNvbXBvc2l0ZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgYWx0Q29uc3RhbnRTZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERhdGEgYmFycyBzZXR0aW5nc1xyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcblxyXG4gICAgICAgICAgICAvLyBEYXRhIGJhciBtYXJrZXJzIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaXplXCIgfSwgMTApO1xyXG5cclxuICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dNYXJrZXJcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFNob3cgTWFya2VyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd01hcmtlcixcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3dNYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlSXRlbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJjcm9zc1wiLCBkaXNwbGF5TmFtZTogXCJDcm9zc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJjaXJjbGVcIiwgZGlzcGxheU5hbWU6IFwiQ2lyY2xlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWxMaW5lXCIsIGRpc3BsYXlOYW1lOiBcIkhvcml6b250YWwgTGluZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJ2ZXJ0aWNhbExpbmVcIiwgZGlzcGxheU5hbWU6IFwiVmVydGljYWwgTGluZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJzZW1pQ2lyY2xlXCIsIGRpc3BsYXlOYW1lOiBcIlNlbWkgQ2lyY2xlXCIgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGFwZUl0ZW0gPSBtYXJrZXJTaGFwZUl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBtYXJrZXJTaGFwZSkgfHwgbWFya2VyU2hhcGVJdGVtc1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtlclNoYXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWFya2VyIFNoYXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRTaGFwZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IG1hcmtlclNoYXBlSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2VyQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBNYXJrZXIgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyB2YWx1ZTogbWFya2VyQ29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXJrZXJTaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWFya2VyIFNpemVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWFya2VyU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxldCB0b3RhbEJlaGF2aW9yUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInRvdGFsc1wiLCBwcm9wZXJ0eU5hbWU6IFwidG90YWxCZWhhdmlvclwiIH0sIFwiU3VtXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRvdGFsQmVoYXZpb3JWYWwgPSB0eXBlb2YgdG90YWxCZWhhdmlvclJhdyA9PT0gXCJzdHJpbmdcIiA/IHRvdGFsQmVoYXZpb3JSYXcgOiAodG90YWxCZWhhdmlvclJhdy52YWx1ZSB8fCBcIlN1bVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgdG90YWxCZWhhdmlvckl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIk1lYXN1cmVcIiwgZGlzcGxheU5hbWU6IFwiTWVhc3VyZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiU3VtXCIsIGRpc3BsYXlOYW1lOiBcIlN1bVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiQXZlcmFnZVwiLCBkaXNwbGF5TmFtZTogXCJBdmVyYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VudFwiLCBkaXNwbGF5TmFtZTogXCJDb3VudFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnQgRGlzdGluY3RcIiwgZGlzcGxheU5hbWU6IFwiQ291bnQgRGlzdGluY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIk1heFwiLCBkaXNwbGF5TmFtZTogXCJNYXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIk1pblwiLCBkaXNwbGF5TmFtZTogXCJNaW5cIiB9XHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QmVoYXZpb3JJdGVtID0gdG90YWxCZWhhdmlvckl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSB0b3RhbEJlaGF2aW9yVmFsKSB8fCB0b3RhbEJlaGF2aW9ySXRlbXNbMV07XHJcblxyXG4gICAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnNsaWNlcy5zcGxpY2UobWVhc3VyZUhlYWRlcnMubGVuZ3RoLCAwLCBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG90YWxCZWhhdmlvclwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBNZWFzdXJlIFNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudEJlaGF2aW9ySXRlbSxcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHRvdGFsQmVoYXZpb3JJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgc3BlY2lmaWNDb2x1bW4gc2VyaWVzIGRyb3Bkb3duIGFuZCByZWJ1aWxkIHZhbHVlIHNsaWNlcyB3aXRoIHBlci1tZWFzdXJlIHNlbGVjdG9yXHJcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbHVtblNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5zcGVjaWZpY0NvbHVtbjtcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLml0ZW1zID0gbWVhc3VyZUhlYWRlcnMubWFwKG5hbWUgPT4gKHsgdmFsdWU6IG5hbWUsIGRpc3BsYXlOYW1lOiBuYW1lIH0pKTtcclxuICAgICAgICAgIC8vIFJlYWQgcGVyc2lzdGVkIHNlcmllcyB2YWx1ZSBmcm9tIGRhdGFWaWV3IG1ldGFkYXRhIG9iamVjdHNcclxuICAgICAgICAgIGNvbnN0IHBlcnNpc3RlZFNlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInNlcmllc1wiIH0sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlZEl0ZW0gPSBwZXJzaXN0ZWRTZXJpZXNcclxuICAgICAgICAgICAgICA/IHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLml0ZW1zLmZpbmQoaSA9PiBpLnZhbHVlID09PSBwZXJzaXN0ZWRTZXJpZXMpXHJcbiAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMudmFsdWUgPSBtYXRjaGVkSXRlbSB8fCBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtc1swXSB8fCB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9O1xyXG5cclxuICAgICAgICAgIC8vIEZpbmQgdGhlIHF1ZXJ5TmFtZSBmb3IgdGhlIHNlbGVjdGVkIG1lYXN1cmUgc28gc2xpY2VzIHBlcnNpc3QgdG8gdGhlIGNvcnJlY3QgcGVyLW1lYXN1cmUgb2JqZWN0c1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTZXJpZXNOYW1lID0gc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMudmFsdWU/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWVhc3VyZUlkeCA9IG1lYXN1cmVIZWFkZXJzLmluZGV4T2Yoc2VsZWN0ZWRTZXJpZXNOYW1lKTtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVDb2x1bW4gPSBzZWxlY3RlZE1lYXN1cmVJZHggPj0gMCA/IHZhbHVlc1tzZWxlY3RlZE1lYXN1cmVJZHhdIDogbnVsbDtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUXVlcnlOYW1lID0gc2VsZWN0ZWRWYWx1ZUNvbHVtbj8uc291cmNlPy5xdWVyeU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdHMgPSBzZWxlY3RlZFZhbHVlQ29sdW1uPy5zb3VyY2U/Lm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdGVkUXVlcnlOYW1lID8geyBtZXRhZGF0YTogc2VsZWN0ZWRRdWVyeU5hbWUgfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAvLyBSZWFkIGN1cnJlbnQgcGVyLW1lYXN1cmUgdmFsdWVzIGZvciB0aGUgc2VsZWN0ZWQgY29sdW1uXHJcbiAgICAgICAgICBjb25zdCBzY1RleHRDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Ioc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0JnQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBbHRUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBbHRCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQXBwbHlUb0hlYWRlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb0hlYWRlclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBcHBseVRvVmFsdWVzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhcHBseVRvVmFsdWVzXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCBzY0FwcGx5VG9Ub3RhbCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1RvdGFsXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCBzY0ZvbnRGYW1pbHkgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZm9udEZhbWlseVwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0ZvbnRTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRTaXplXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQm9sZCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYm9sZFwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0l0YWxpYyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiaXRhbGljXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjVW5kZXJsaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ1bmRlcmxpbmVcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBbGlnbm1lbnQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWxpZ25tZW50XCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjRGlzcGxheVVuaXRzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRpc3BsYXlVbml0c1wiIH0sIDApO1xyXG4gICAgICAgICAgY29uc3Qgc2NEZWNpbWFsUGxhY2VzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRlY2ltYWxQbGFjZXNcIiB9LCAxKTtcclxuICAgICAgICAgIGNvbnN0IHNjVGV4dFdyYXAgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRXcmFwXCIgfSwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAvLyBQb3B1bGF0ZSBjb2x1bW5IZWFkZXJzIG5hbWVTZXJpZXMgZHJvcGRvd24gYW5kIHJlYnVpbGQgbmFtZXMgZ3JvdXAgd2l0aCBwZXItbWVhc3VyZSBzZWxlY3RvclxyXG4gICAgICAgICAgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMuaXRlbXMgPSBtZWFzdXJlSGVhZGVycy5tYXAobmFtZSA9PiAoeyB2YWx1ZTogbmFtZSwgZGlzcGxheU5hbWU6IG5hbWUgfSkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBwZXJzaXN0ZWROYW1lU2VyaWVzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhVmlldy5tZXRhZGF0YS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5IZWFkZXJzXCIsIHByb3BlcnR5TmFtZTogXCJuYW1lU2VyaWVzXCIgfSxcclxuICAgICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGVkTmFtZUl0ZW0gPSBwZXJzaXN0ZWROYW1lU2VyaWVzXHJcbiAgICAgICAgICAgICAgPyBjb2x1bW5IZWFkZXJzU2V0dGluZ3MubmFtZVNlcmllcy5pdGVtcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gcGVyc2lzdGVkTmFtZVNlcmllcylcclxuICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICBjb2x1bW5IZWFkZXJzU2V0dGluZ3MubmFtZVNlcmllcy52YWx1ZSA9IG1hdGNoZWROYW1lSXRlbSB8fCBjb2x1bW5IZWFkZXJzU2V0dGluZ3MubmFtZVNlcmllcy5pdGVtc1swXSB8fCB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTmFtZVNlcmllc05hbWUgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MubmFtZVNlcmllcy52YWx1ZT8udmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lTWVhc3VyZUlkeCA9IG1lYXN1cmVIZWFkZXJzLmluZGV4T2Yoc2VsZWN0ZWROYW1lU2VyaWVzTmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE5hbWVWYWx1ZUNvbHVtbiA9IHNlbGVjdGVkTmFtZU1lYXN1cmVJZHggPj0gMCA/IHZhbHVlc1tzZWxlY3RlZE5hbWVNZWFzdXJlSWR4XSA6IG51bGw7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE5hbWVRdWVyeU5hbWUgPSBzZWxlY3RlZE5hbWVWYWx1ZUNvbHVtbj8uc291cmNlPy5xdWVyeU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE5hbWVPYmplY3RzID0gc2VsZWN0ZWROYW1lVmFsdWVDb2x1bW4/LnNvdXJjZT8ub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgIGNvbnN0IG5hbWVTZWxlY3RvciA9IHNlbGVjdGVkTmFtZVF1ZXJ5TmFtZSA/IHsgbWV0YWRhdGE6IHNlbGVjdGVkTmFtZVF1ZXJ5TmFtZSB9IDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGNoTmFtZU92ZXJyaWRlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oc2VsZWN0ZWROYW1lT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImNvbHVtbkhlYWRlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm5hbWVPdmVycmlkZVwiIH0sIFwiXCIpO1xyXG5cclxuICAgICAgICAgIC8vIFJlYnVpbGQgdGhlIG5hbWVzR3JvdXAgc2xpY2VzXHJcbiAgICAgICAgICBjb2x1bW5IZWFkZXJzU2V0dGluZ3MubmFtZXNHcm91cC5zbGljZXMgPSBbXHJcbiAgICAgICAgICAgICAgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMsXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVPdmVycmlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBjdXN0b20gaGVhZGVyIG5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoTmFtZU92ZXJyaWRlLFxyXG4gICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbmFtZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgLy8gUmVidWlsZCB0aGUgYXBwbHlTZXR0aW5nc0dyb3VwIHNsaWNlcyB3aXRoIHNlbGVjdG9yc1xyXG4gICAgICAgICAgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5hcHBseVNldHRpbmdzR3JvdXAuc2xpY2VzID0gW1xyXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJhcHBseVRvSGVhZGVyXCIsIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIGhlYWRlclwiLCB2YWx1ZTogc2NBcHBseVRvSGVhZGVyLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiYXBwbHlUb1RvdGFsXCIsIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHRvdGFsXCIsIHZhbHVlOiBzY0FwcGx5VG9Ub3RhbCwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImFwcGx5VG9WYWx1ZXNcIiwgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gdmFsdWVzXCIsIHZhbHVlOiBzY0FwcGx5VG9WYWx1ZXMsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIC8vIFJlYnVpbGQgdGhlIHZhbHVlc0dyb3VwIHNsaWNlcyB3aXRoIHBlci1tZWFzdXJlIHNlbGVjdG9yc1xyXG4gICAgICAgICAgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy52YWx1ZXNHcm91cC5zbGljZXMgPSBbXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7IG5hbWU6IFwiZm9udEZhbWlseVwiLCBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLCB2YWx1ZTogc2NGb250RmFtaWx5IHx8IFwiQXJpYWwsIHNhbnMtc2VyaWZcIiwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwiZm9udFNpemVcIiwgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsIHZhbHVlOiBzY0ZvbnRTaXplID8/IDEyLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImJvbGRcIiwgZGlzcGxheU5hbWU6IFwiQm9sZFwiLCB2YWx1ZTogc2NCb2xkID8/IGZhbHNlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiaXRhbGljXCIsIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLCB2YWx1ZTogc2NJdGFsaWMgPz8gZmFsc2UsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJ1bmRlcmxpbmVcIiwgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsIHZhbHVlOiBzY1VuZGVybGluZSA/PyBmYWxzZSwgc2VsZWN0b3IgfSlcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJ0ZXh0Q29sb3JcIiwgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLCB2YWx1ZTogeyB2YWx1ZTogc2NUZXh0Q29sb3IgfHwgXCIjMDBiOGQ0XCIgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IHNjQmdDb2xvciB8fCBcIiNmZmZmZmZcIiB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIHRleHQgY29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IHNjQWx0VGV4dENvbG9yIHx8IFwiIzMzMzMzM1wiIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvclwiLCB2YWx1ZTogeyB2YWx1ZTogc2NBbHRCZ0NvbG9yIHx8IFwiI2Y1ZjVmNVwiIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQWxpZ25tZW50R3JvdXAoeyBuYW1lOiBcImFsaWdubWVudFwiLCBkaXNwbGF5TmFtZTogXCJBbGlnbm1lbnRcIiwgdmFsdWU6IHNjQWxpZ25tZW50IHx8IFwibGVmdFwiLCBtb2RlOiBwb3dlcmJpLnZpc3VhbHMuQWxpZ25tZW50R3JvdXBNb2RlLkhvcml6b25hbCwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BdXRvRHJvcGRvd24oeyBuYW1lOiBcImRpc3BsYXlVbml0c1wiLCBkaXNwbGF5TmFtZTogXCJEaXNwbGF5IHVuaXRzXCIsIHZhbHVlOiBzY0Rpc3BsYXlVbml0cywgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcImRlY2ltYWxQbGFjZXNcIiwgZGlzcGxheU5hbWU6IFwiVmFsdWUgZGVjaW1hbCBwbGFjZXNcIiwgdmFsdWU6IHNjRGVjaW1hbFBsYWNlcywgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcInRleHRXcmFwXCIsIGRpc3BsYXlOYW1lOiBcIlRleHQgd3JhcFwiLCB2YWx1ZTogc2NUZXh0V3JhcCA/PyBmYWxzZSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSlcclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgZGF0YUJhcnNTZXR0aW5ncyBzZXJpZXMgZHJvcGRvd24gYW5kIHJlYnVpbGQgdmFsdWUgc2xpY2VzIHdpdGggcGVyLW1lYXN1cmUgc2VsZWN0b3JcclxuICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2VyaWVzLml0ZW1zID0gbWVhc3VyZUhlYWRlcnMubWFwKG5hbWUgPT4gKHsgdmFsdWU6IG5hbWUsIGRpc3BsYXlOYW1lOiBuYW1lIH0pKTtcclxuICAgICAgICAgIGNvbnN0IHBlcnNpc3RlZERhdGFCYXJzU2VyaWVzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oXHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhVmlldy5tZXRhZGF0YS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNlcmllc1wiIH0sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlZERhdGFCYXJzSXRlbSA9IHBlcnNpc3RlZERhdGFCYXJzU2VyaWVzXHJcbiAgICAgICAgICAgICAgPyBkYXRhQmFyc1NldHRpbmdzLnNlcmllcy5pdGVtcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gcGVyc2lzdGVkRGF0YUJhcnNTZXJpZXMpXHJcbiAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5zZXJpZXMudmFsdWUgPSBtYXRjaGVkRGF0YUJhcnNJdGVtIHx8IGRhdGFCYXJzU2V0dGluZ3Muc2VyaWVzLml0ZW1zWzBdIHx8IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH07XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhQmFyc1Nlcmllc05hbWUgPSBkYXRhQmFyc1NldHRpbmdzLnNlcmllcy52YWx1ZT8udmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhQmFyc01lYXN1cmVJZHggPSBtZWFzdXJlSGVhZGVycy5pbmRleE9mKHNlbGVjdGVkRGF0YUJhcnNTZXJpZXNOYW1lKTtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNWYWx1ZUNvbHVtbiA9IHNlbGVjdGVkRGF0YUJhcnNNZWFzdXJlSWR4ID49IDAgPyB2YWx1ZXNbc2VsZWN0ZWREYXRhQmFyc01lYXN1cmVJZHhdIDogbnVsbDtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNRdWVyeU5hbWUgPSBzZWxlY3RlZERhdGFCYXJzVmFsdWVDb2x1bW4/LnNvdXJjZT8ucXVlcnlOYW1lO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhQmFyc09iamVjdHMgPSBzZWxlY3RlZERhdGFCYXJzVmFsdWVDb2x1bW4/LnNvdXJjZT8ub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgIGNvbnN0IGRhdGFCYXJzU2VsZWN0b3IgPSBzZWxlY3RlZERhdGFCYXJzUXVlcnlOYW1lID8geyBtZXRhZGF0YTogc2VsZWN0ZWREYXRhQmFyc1F1ZXJ5TmFtZSB9IDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRiU2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93RGF0YUJhcnNcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGJNYXRjaERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWF0Y2hEYXRhQmFyQ29sb3JcIiB9LCB0cnVlKTtcclxuICAgICAgICAgIGNvbnN0IGRiU2hvd1plcm9MaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93WmVyb0xpbmVcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICBjb25zdCBkYlplcm9MaW5lQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ6ZXJvTGluZUNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgY29uc3QgZGJaZXJvTGluZVRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ6ZXJvTGluZVRyYW5zcGFyZW5jeVwiIH0sIDApO1xyXG4gICAgICAgICAgY29uc3QgZGJEYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJIZWlnaHRcIiB9LCA4MCk7XHJcbiAgICAgICAgICBjb25zdCBkYlRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0cmFuc3BhcmVuY3lcIiB9LCAyMCk7XHJcbiAgICAgICAgICBjb25zdCBkYkJvcmRlck9uID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJPblwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3QgZGJCb3JkZXJUaGlja25lc3MgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyVGhpY2tuZXNzXCIgfSwgMSk7XHJcbiAgICAgICAgICBjb25zdCBkYkJvcmRlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICBjb25zdCBkYk1pblZhbHVlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1pblZhbHVlXCIgfSwgMCk7XHJcbiAgICAgICAgICBjb25zdCBkYk1heFZhbHVlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1heFZhbHVlXCIgfSwgMCk7XHJcbiAgICAgICAgICBjb25zdCBkYkxhYmVsc091dHNpZGUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImxhYmVsc091dHNpZGVcIiB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5zZWxlY3RTZXJpZXNHcm91cC5zbGljZXMgPSBbXHJcbiAgICAgICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5zZXJpZXNcclxuICAgICAgICAgIF07XHJcblxyXG5sZXQgZGF0YUJhcnNTbGljZXM6IGZvcm1hdHRpbmdTZXR0aW5ncy5TbGljZVtdID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcInNob3dEYXRhQmFyc1wiLCBkaXNwbGF5TmFtZTogXCJTaG93IERhdGEgQmFyc1wiLCB2YWx1ZTogZGJTaG93RGF0YUJhcnMsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJkYXRhQmFySGVpZ2h0XCIsIGRpc3BsYXlOYW1lOiBcIkRhdGEgQmFyIEhlaWdodCAoJSlcIiwgdmFsdWU6IGRiRGF0YUJhckhlaWdodCwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwidHJhbnNwYXJlbmN5XCIsIGRpc3BsYXlOYW1lOiBcIlRyYW5zcGFyZW5jeSAoJSlcIiwgdmFsdWU6IGRiVHJhbnNwYXJlbmN5LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJib3JkZXJPblwiLCBkaXNwbGF5TmFtZTogXCJCb3JkZXIgT25cIiwgdmFsdWU6IGRiQm9yZGVyT24sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIk1hdGNoIERhdGEgQmFyIENvbG9yXCIsIHZhbHVlOiBkYk1hdGNoRGF0YUJhckNvbG9yLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJib3JkZXJUaGlja25lc3NcIiwgZGlzcGxheU5hbWU6IFwiQm9yZGVyIFRoaWNrbmVzc1wiLCB2YWx1ZTogZGJCb3JkZXJUaGlja25lc3MsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRiTWF0Y2hEYXRhQmFyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFCYXJzU2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQm9yZGVyIENvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBkYkJvcmRlckNvbG9yIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yLCBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGF0YUJhcnNTbGljZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJtaW5WYWx1ZVwiLCBkaXNwbGF5TmFtZTogXCJNaW5pbXVtIFZhbHVlXCIsIHZhbHVlOiBkYk1pblZhbHVlLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJtYXhWYWx1ZVwiLCBkaXNwbGF5TmFtZTogXCJNYXhpbXVtIFZhbHVlXCIsIHZhbHVlOiBkYk1heFZhbHVlLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJsYWJlbHNPdXRzaWRlXCIsIGRpc3BsYXlOYW1lOiBcIkxhYmVscyBPdXRzaWRlXCIsIHZhbHVlOiBkYkxhYmVsc091dHNpZGUsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcInNob3daZXJvTGluZVwiLCBkaXNwbGF5TmFtZTogXCJTaG93IFplcm8gTGluZVwiLCB2YWx1ZTogZGJTaG93WmVyb0xpbmUsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwiemVyb0xpbmVDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJaZXJvIExpbmUgQ29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IGRiWmVyb0xpbmVDb2xvciB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJ6ZXJvTGluZVRyYW5zcGFyZW5jeVwiLCBkaXNwbGF5TmFtZTogXCJaZXJvIExpbmUgVHJhbnNwYXJlbmN5ICglKVwiLCB2YWx1ZTogZGJaZXJvTGluZVRyYW5zcGFyZW5jeSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3MuZGF0YUJhcnNHcm91cC5zbGljZXMgPSBkYXRhQmFyc1NsaWNlcztcclxuXHJcbiAgICAgICAgICAvLyBDb21wdXRlIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZGF0YSBiYXJzIEFORCBDYWxjdWxhdGUgdG90YWxzIGJhc2VkIG9uIHNlbGVjdGlvblxyXG4gICAgICAgICAgbGV0IG1lYXN1cmVNaW5zOiBudW1iZXJbXSA9IG5ldyBBcnJheSh2YWx1ZXMubGVuZ3RoKS5maWxsKDApO1xyXG4gICAgICAgICAgbGV0IG1lYXN1cmVNYXhzOiBudW1iZXJbXSA9IG5ldyBBcnJheSh2YWx1ZXMubGVuZ3RoKS5maWxsKDApO1xyXG4gICAgICAgICAgbGV0IHRvdGFsczogbnVtYmVyW10gPSBuZXcgQXJyYXkodmFsdWVzLmxlbmd0aCkuZmlsbCgwKTtcclxuXHJcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWVDb2x1bW4sIG1lYXN1cmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtVmFsdWVzID0gdmFsdWVDb2x1bW4udmFsdWVzLmZpbHRlcih2ID0+IHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKS5tYXAodiA9PiBOdW1iZXIodikpO1xyXG4gICAgICAgICAgICBpZiAobnVtVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF0gPSBNYXRoLm1pbigwLCAuLi5udW1WYWx1ZXMpOyAvLyBTdGFuZGFyZCBkYXRhIGJhcnMgYW5jaG9yIHRvIDBcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF0gPSBNYXRoLm1heCgwLCAuLi5udW1WYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEJlaGF2aW9yUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInRvdGFsc1wiLCBwcm9wZXJ0eU5hbWU6IFwidG90YWxCZWhhdmlvclwiIH0sIFwiU3VtXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEJlaGF2aW9yID0gdHlwZW9mIHRvdGFsQmVoYXZpb3JSYXcgPT09IFwic3RyaW5nXCIgPyB0b3RhbEJlaGF2aW9yUmF3IDogKHRvdGFsQmVoYXZpb3JSYXcudmFsdWUgfHwgXCJTdW1cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIlN1bVwiIHx8IHRvdGFsQmVoYXZpb3IgPT09IFwiTWVhc3VyZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBudW1WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiQXZlcmFnZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBudW1WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBudW1WYWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIkNvdW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG51bVZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiQ291bnQgRGlzdGluY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gbmV3IFNldChudW1WYWx1ZXMpLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWF4KC4uLm51bVZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiTWluXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWluKC4uLm51bVZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFzd2l0Y2hWYWx1ZXNUb1Jvd3MpIHtcclxuICAgICAgICAgICAgLy8gTm9ybWFsIGhvcml6b250YWwgdGFibGUgc3RydWN0dXJlXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJSb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1yb3cnO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuaGVpZ2h0ID0gYCR7aGVhZGVyUm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyQmdDb2xvciA9IGhlYWRlckJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBjYXRlZ29yeSBjb2x1bW4gaGVhZGVyIGlmIGNhdGVnb3JpZXMgZXhpc3RcclxuICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXMuc291cmNlLmRpc3BsYXlOYW1lIHx8ICdDYXRlZ29yeSc7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0ZWdvcnlIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgbWVhc3VyZSBjb2x1bW4gaGVhZGVyc1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVycy5mb3JFYWNoKChkaXNwbGF5TmFtZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZmZlY3RpdmVEaXNwbGF5TmFtZSA9IG1lYXN1cmVIZWFkZXJPdmVycmlkZXNbaWR4XTtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogaGVhZGVyQm9sZDtcclxuICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiBoZWFkZXJJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogaGVhZGVyVW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogaGVhZGVyRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogaGVhZGVyV29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MudGV4dENvbG9yID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBlZmZlY3RpdmVEaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaWR4XX1weGA7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpZHhdfXB4YDtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2lkeF19cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goaGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGVmRm9udFNpemUsIGVmV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gZWZJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmUtdGltZSBkZWJ1ZyBkdW1wIG9mIHZhbHVlQ29sdW1uIG9iamVjdHMgc3RhdHVzXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmMwID0gdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBJTklUXSBtZWFzdXJlMCBuYW1lPSR7dmMwLnNvdXJjZS5kaXNwbGF5TmFtZX0gcXVlcnlOYW1lPSR7dmMwLnNvdXJjZS5xdWVyeU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIElOSVRdIG1lYXN1cmUwIC5vYmplY3RzIGV4aXN0cz0keyEhdmMwLm9iamVjdHN9LCAub2JqZWN0cyB0eXBlPSR7dHlwZW9mIHZjMC5vYmplY3RzfWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZjMC5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBJTklUXSBtZWFzdXJlMCAub2JqZWN0cyBpcyBhcnJheT0ke0FycmF5LmlzQXJyYXkodmMwLm9iamVjdHMpfSwgbGVuZ3RoPSR7KHZjMC5vYmplY3RzIGFzIGFueSkubGVuZ3RofWApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZmlyc3QgMyBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBNYXRoLm1pbigzLCByb3dDb3VudCk7IHorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIElOSVRdIG1lYXN1cmUwIC5vYmplY3RzWyR7en1dPSR7SlNPTi5zdHJpbmdpZnkodmMwLm9iamVjdHNbel0pfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbREIgQ0YgSU5JVF0gbWVhc3VyZTAgLnNvdXJjZS5vYmplY3RzPSR7SlNPTi5zdHJpbmdpZnkodmMwLnNvdXJjZS5vYmplY3RzKX1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGRhdGEgcm93c1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLXJvdyc7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGFsdGVybmF0aW5nIGJhY2tncm91bmQgY29sb3JzIHdpdGggc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNFdmVuUm93ID0gaSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dIZWlnaHQgPSBpc0V2ZW5Sb3cgPyB2YWx1ZVJvd0hlaWdodCA6IGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dCZ0NvbG9yID0gZ2V0Um93QmFja2dyb3VuZENvbG9yKGksIGlzRXZlblJvdywgZGF0YVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGNhdGVnb3J5IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC50ZXh0Q29udGVudCA9IFN0cmluZyhjYXRlZ29yaWVzLnZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1jYXRlZ29yeS1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRlZ29yeUNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCBjYXRlZ29yeVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmNvbG9yID0gZ2V0Q2F0ZWdvcnlUZXh0Q29sb3IoaSwgZGF0YVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGNhdGVnb3J5V29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBtZWFzdXJlIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uLCBtZWFzdXJlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDIgJiYgbWVhc3VyZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHZhbHVlQ29sdW1uLm9iamVjdHM/LltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzT2JqcyA9ICEhdmFsdWVDb2x1bW4ub2JqZWN0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqS2V5cyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikuam9pbignLCcpIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIERFQlVHXSByb3c9JHtpfSBtZWFzdXJlPSR7bWVhc3VyZUluZGV4fSBoYXNPYmplY3RzPSR7aGFzT2Jqc30gb2JqW2lda2V5cz0ke29iaktleXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPYmpzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbREIgQ0YgREVCVUddICAgb2JqWyR7aX1dIGZ1bGw6YCwgSlNPTi5zdHJpbmdpZnkodmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsc28gY2hlY2sgaWYgdmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmcgb2JqZWN0cyBleGlzdCAodGhpcyBjYXJkIGlzIGtub3duIHRvIHdvcmspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPYmpzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIERFQlVHXSAgIG9iamVjdHMgYXJyYXkgbGVuZ3RoLWlzaDogb2JqZWN0cyBpcyBhcnJheT0ke0FycmF5LmlzQXJyYXkodmFsdWVDb2x1bW4ub2JqZWN0cyl9LCB0eXBlb2Y9JHt0eXBlb2YgdmFsdWVDb2x1bW4ub2JqZWN0c31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZpcnN0IGZldyBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IE1hdGgubWluKDMsICh2YWx1ZUNvbHVtbi5vYmplY3RzIGFzIGFueSkubGVuZ3RoIHx8IDMpOyB6KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0c1t6XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIERFQlVHXSAgIG9iamVjdHNbJHt6fV0ga2V5czogJHtPYmplY3Qua2V5cyh2YWx1ZUNvbHVtbi5vYmplY3RzW3pdKS5qb2luKCcsJyl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHNvdXJjZS5vYmplY3RzIGZvciB0aGUgbWVhc3VyZS1sZXZlbCBkZWZhdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4uc291cmNlPy5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIERFQlVHXSAgIHNvdXJjZS5vYmplY3RzIGtleXM6ICR7T2JqZWN0LmtleXModmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMpLmpvaW4oJywnKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgaXNFdmVuUm93ICE9PSAndW5kZWZpbmVkJykgPyAoaXNFdmVuUm93ID8gdGV4dENvbG9yIDogYWx0ZXJuYXRlVGV4dENvbG9yKSA6IHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsVGV4dENvbG9yID0gZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZkNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxUZXh0Q29sb3IgPSBjZkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVDb2x1bW4udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIGZvciBkYXRhIGJhciBwb3NpdGlvbmluZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IG51bVZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93RGF0YUJhcnMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dEYXRhQmFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckNvbG9yXCIgfSwgXCIjMzFiNmZkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWF0Y2hEYXRhQmFyQ29sb3JcIiB9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3daZXJvTGluZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93WmVyb0xpbmVcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZXJvTGluZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ6ZXJvTGluZUNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgemVyb0xpbmVUcmFuc3BhcmVuY3kgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ6ZXJvTGluZVRyYW5zcGFyZW5jeVwiIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUJhckhlaWdodCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJIZWlnaHRcIiB9LCA4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc3BhcmVuY3kgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0cmFuc3BhcmVuY3lcIiB9LCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJPbiA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJPblwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyVGhpY2tuZXNzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyVGhpY2tuZXNzXCIgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5WYWx1ZU9iaiA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1pblZhbHVlXCIgfSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhWYWx1ZU9iaiA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1heFZhbHVlXCIgfSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHNPdXRzaWRlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImxhYmVsc091dHNpZGVcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb25kaXRpb25hbCBmb3JtYXR0aW5nIG9uIGRhdGEgYmFyIGNvbG9yICh1c2luZyBzaW1wbGUgY2FyZCBvYmplY3ROYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZEYXRhQmFyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbERhdGFCYXJDb2xvciA9IGNmRGF0YUJhckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBtaW5WYWx1ZU9iaiAhPT0gbnVsbCAmJiBtaW5WYWx1ZU9iaiAhPT0gdW5kZWZpbmVkID8gbWluVmFsdWVPYmogOiBtZWFzdXJlTWluc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gbWF4VmFsdWVPYmogIT09IG51bGwgJiYgbWF4VmFsdWVPYmogIT09IHVuZGVmaW5lZCA/IG1heFZhbHVlT2JqIDogbWVhc3VyZU1heHNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5nZSA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZSA8PSAwKSByYW5nZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdpZHRoIHBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aFBjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFBjdCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYW1wZWRWYWx1ZSA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBudW1WYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHplcm9Qb2ludCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCAwKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gbGFiZWxzT3V0c2lkZSA/IDAuNzUgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFtcGVkVmFsdWUgPj0gemVyb1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhQY3QgPSAoKGNsYW1wZWRWYWx1ZSAtIHplcm9Qb2ludCkgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKCh6ZXJvUG9pbnQgLSBtaW4pIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKCh6ZXJvUG9pbnQgLSBjbGFtcGVkVmFsdWUpIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFBjdCA9ICgoY2xhbXBlZFZhbHVlIC0gbWluKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkYXRhIGJhciBkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3BQY3QgPSAoMTAwIC0gZGF0YUJhckhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS50b3AgPSBgJHt0b3BQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmhlaWdodCA9IGAke2RhdGFCYXJIZWlnaHR9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0UGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS53aWR0aCA9IGAke3dpZHRoUGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeShjZWxsRGF0YUJhckNvbG9yLCB0cmFuc3BhcmVuY3kpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlck9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmFsQm9yZGVyQ29sb3IgPSBtYXRjaERhdGFCYXJDb2xvciA/IGNlbGxEYXRhQmFyQ29sb3IgOiBib3JkZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJvcmRlciA9IGAke2JvcmRlclRoaWNrbmVzc31weCBzb2xpZCAke2ZpbmFsQm9yZGVyQ29sb3J9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZGF0YUJhcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3daZXJvTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6ZXJvTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUud2lkdGggPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6TGVmdFBjdCA9ICgoemVyb1BvaW50IC0gbWluKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLmxlZnQgPSBgY2FsYygke3pMZWZ0UGN0fSUgLSAxcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeSh6ZXJvTGluZUNvbG9yLCB6ZXJvTGluZVRyYW5zcGFyZW5jeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUuekluZGV4ID0gXCIxXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoemVyb0xpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGEgYmFyIG1hcmtlcnMgc2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dNYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGUgPSB0eXBlb2YgbWFya2VyU2hhcGVSYXcgPT09IFwic3RyaW5nXCIgPyBtYXJrZXJTaGFwZVJhdyA6IChtYXJrZXJTaGFwZVJhdy52YWx1ZSB8fCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaXplXCIgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZk1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZNYXJrZXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbE1hcmtlckNvbG9yID0gY2ZNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS56SW5kZXggPSBcIjNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlckxlZnRQY3QgPSBudW1WYWx1ZSA+PSAwID8gbGVmdFBjdCArIHdpZHRoUGN0IDogbGVmdFBjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBgY2FsYyg1MCUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IGAke21hcmtlclNpemV9cHhgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFya2VyU2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjcm9zc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDQ1ZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTQ1ZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImhvcml6b250YWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInZlcnRpY2FsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAxcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInNlbWlDaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcmF3IHNlbWkgY2lyY2xlIHBvaW50aW5nIG91dHdhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS56SW5kZXggPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsc091dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUudG9wID0gXCI1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtNTAlKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5sZWZ0ID0gYGNhbGMoJHtsZWZ0UGN0ICsgd2lkdGhQY3R9JSArIDRweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucmlnaHQgPSBgY2FsYygkezEwMCAtIGxlZnRQY3R9JSArIDRweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCByb3dIZWlnaHQsIGNlbGxGb250U2l6ZSwgdmFsdWVXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWVCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBjZWxsSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gY2VsbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gY2VsbFRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1Jvd0JnQ29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciA6IHJvd0JnQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjQ2VsbFRleHRDb2xvciA9IGlzRXZlblJvdyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLnRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzID8gc3BlY1Jvd0JnQ29sb3IgOiByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVDb2xvciA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzID8gc3BlY0NlbGxUZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogdmFsdWVCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiBjZWxsSXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgOiBjZWxsVW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiBjZWxsRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogY2VsbEZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZldvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLnRleHRXcmFwICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dFdyYXAgOiB2YWx1ZVdvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGVmZmVjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IGVmQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udEZhbWlseSA9IGVmRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gYCR7ZWZGb250U2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmZmVjdGl2ZUFsaWduO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZldvcmRXcmFwKSB7IC8vIGFuZCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0b3RhbCByb3dcclxuICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsUm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsUm93LmNsYXNzTmFtZSA9ICd0YWJsZS10b3RhbC1yb3cnO1xyXG4gICAgICAgICAgICB0b3RhbFJvdy5zdHlsZS5ib3JkZXJUb3AgPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIHRvdGFsUm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyMnhWYWx1ZTtcclxuICAgICAgICAgICAgdG90YWxSb3cuc3R5bGUuaGVpZ2h0ID0gYCR7dG90YWxSb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEJnQ29sb3IgPSB0b3RhbFJvd0JhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxMYWJlbENlbGwgPSB0b3RhbFJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC50ZXh0Q29udGVudCA9ICdUb3RhbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5jbGFzc05hbWUgPSAndGFibGUtdG90YWwtbGFiZWwtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbExhYmVsQ2VsbCwgdG90YWxSb3dIZWlnaHQsIHRvdGFsUm93Rm9udFNpemUsIHRvdGFsUm93V29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZm9udFdlaWdodCA9IHRvdGFsUm93Qm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gdG90YWxSb3dVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5mb250RmFtaWx5ID0gdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZm9udFN0eWxlID0gdG90YWxSb3dJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG90YWxCZ0NvbG9yOyB0b3RhbExhYmVsQ2VsbC5zdHlsZS5jb2xvciA9IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUud2hpdGVTcGFjZSA9IHRvdGFsUm93V29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbFJvd1dvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxMYWJlbENlbGwgPSB0b3RhbFJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC50ZXh0Q29udGVudCA9ICdUb3RhbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvdGFscy5mb3JFYWNoKCh0b3RhbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBlZkJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHRvdGFsUm93Qm9sZDtcclxuICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IHRvdGFsUm93SXRhbGljO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogdG90YWxSb3dVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiB0b3RhbFJvd0ZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiB0b3RhbFJvd0ZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdG90YWxSb3dXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdG90YWxSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRvdGFsLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAndGFibGUtdG90YWwtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCB0b3RhbFJvd0hlaWdodCwgZWZGb250U2l6ZSwgZWZXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmZmVjdGl2ZUFsaWduO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHN3aXRjaFZhbHVlc1RvUm93cyBJUyBUUlVFIChUcmFuc3Bvc2UgbGF5b3V0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIEhlYWRlciBSb3dcclxuICAgICAgICAgICAgbGV0IGhlYWRlclJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLXJvdyc7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5oZWlnaHQgPSBgJHtoZWFkZXJSb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCZ0NvbG9yID0gaGVhZGVyQmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgaGVhZGVyIGlzIFwiTWVhc3VyZVwiXHJcbiAgICAgICAgICAgIGxldCBtZWFzdXJlSGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVhc3VyZVwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKG1lYXN1cmVIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE5leHQgaGVhZGVycyBhcmUgQ2F0ZWdvcnkgdmFsdWVzIChvciBqdXN0IFwiVmFsdWVcIiBpZiBubyBjYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhdEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnRleHRDb250ZW50ID0gU3RyaW5nKGNhdGVnb3JpZXMudmFsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F0SGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci50ZXh0Q29udGVudCA9IFwiVmFsdWVcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0SGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsSGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsSGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsSGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJUb3RhbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsSGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gaGVhZGVyQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIFJvd3MgKGVhY2ggcm93IGlzIGEgTWVhc3VyZSlcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uLCBtZWFzdXJlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLXJvdyc7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNFdmVuUm93ID0gbWVhc3VyZUluZGV4ICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0hlaWdodCA9IGlzRXZlblJvdyA/IHZhbHVlUm93SGVpZ2h0IDogYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuaGVpZ2h0ID0gYCR7cm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0JnQ29sb3IgPSBpc0V2ZW5Sb3cgPyBiYWNrZ3JvdW5kQ29sb3IgOiBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDZWxsIDE6IE1lYXN1cmUgTmFtZVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lYXN1cmVOYW1lQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwudGV4dENvbnRlbnQgPSBtZWFzdXJlSGVhZGVyT3ZlcnJpZGVzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWNhdGVnb3J5LWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2gobWVhc3VyZU5hbWVDZWxsLCByb3dIZWlnaHQsIGNlbGxGb250U2l6ZSwgY2F0ZWdvcnlXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5mb250U3R5bGUgPSBjZWxsSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBjZWxsVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuY29sb3IgPSBkZWZhdWx0Q2F0ZWdvcnlUZXh0Q29sb3I7IC8vIG9yIHNvbWUgc3BlY2lmaWMgY29sb3JcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBjYXRlZ29yeVdvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgaXNFdmVuUm93ICE9PSAndW5kZWZpbmVkJykgPyAoaXNFdmVuUm93ID8gdGV4dENvbG9yIDogYWx0ZXJuYXRlVGV4dENvbG9yKSA6IHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3dEYXRhQmFyc1wiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd1plcm9MaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3daZXJvTGluZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGUgPSB0eXBlb2YgbWFya2VyU2hhcGVSYXcgPT09IFwic3RyaW5nXCIgPyBtYXJrZXJTaGFwZVJhdyA6IChtYXJrZXJTaGFwZVJhdy52YWx1ZSB8fCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNpemVcIiB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbE1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtZWFzdXJlTWF4c1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIERhdGEgQ2VsbHM6IFZhbHVlcyBmb3IgZWFjaCBjYXRlZ29yeSAob3IgdGhlIDEgdmFsdWUgaWYgbm8gY2F0ZWdvcmllcylcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsVGV4dENvbG9yID0gZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZkNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmQ29sb3IpIGNlbGxUZXh0Q29sb3IgPSBjZkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZUNvbHVtbi52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bVZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBudW1WYWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3dEYXRhQmFyc1wiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93RGF0YUJhcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH0sIFwiIzMxYjZmZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93WmVyb0xpbmUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd1plcm9MaW5lXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgemVyb0xpbmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lVHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVUcmFuc3BhcmVuY3lcIiB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidHJhbnNwYXJlbmN5XCIgfSwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyT24gPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyT25cIiB9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclRoaWNrbmVzcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlclRoaWNrbmVzc1wiIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluVmFsdWVPYmogPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtaW5WYWx1ZVwiIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4VmFsdWVPYmogPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXhWYWx1ZVwiIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxzT3V0c2lkZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJsYWJlbHNPdXRzaWRlXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgY29uZGl0aW9uYWwgZm9ybWF0dGluZyBvbiBkYXRhIGJhciBjb2xvciAodXNpbmcgc2ltcGxlIGNhcmQgb2JqZWN0TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZkRhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckNvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmRGF0YUJhckNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxEYXRhQmFyQ29sb3IgPSBjZkRhdGFCYXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluID0gbWluVmFsdWVPYmogIT09IG51bGwgJiYgbWluVmFsdWVPYmogIT09IHVuZGVmaW5lZCA/IG1pblZhbHVlT2JqIDogbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IG1heFZhbHVlT2JqICE9PSBudWxsICYmIG1heFZhbHVlT2JqICE9PSB1bmRlZmluZWQgPyBtYXhWYWx1ZU9iaiA6IG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPD0gMCkgcmFuZ2UgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBwZXJjZW50YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhQY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRQY3QgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFtcGVkVmFsdWUgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbnVtVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6ZXJvUG9pbnQgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgMCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IGxhYmVsc091dHNpZGUgPyAwLjc1IDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhbXBlZFZhbHVlID49IHplcm9Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKChjbGFtcGVkVmFsdWUgLSB6ZXJvUG9pbnQpIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFBjdCA9ICgoemVyb1BvaW50IC0gbWluKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9ICgoemVyb1BvaW50IC0gY2xhbXBlZFZhbHVlKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKGNsYW1wZWRWYWx1ZSAtIG1pbikgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSBiYXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wUGN0ID0gKDEwMCAtIGRhdGFCYXJIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUudG9wID0gYCR7dG9wUGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5oZWlnaHQgPSBgJHtkYXRhQmFySGVpZ2h0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koY2VsbERhdGFCYXJDb2xvciwgdHJhbnNwYXJlbmN5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3JkZXJPbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbEJvcmRlckNvbG9yID0gbWF0Y2hEYXRhQmFyQ29sb3IgPyBjZWxsRGF0YUJhckNvbG9yIDogYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5ib3JkZXIgPSBgJHtib3JkZXJUaGlja25lc3N9cHggc29saWQgJHtmaW5hbEJvcmRlckNvbG9yfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGRhdGFCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93WmVyb0xpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemVyb0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLndpZHRoID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgekxlZnRQY3QgPSAoKHplcm9Qb2ludCAtIG1pbikgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5sZWZ0ID0gYGNhbGMoJHt6TGVmdFBjdH0lIC0gMXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koemVyb0xpbmVDb2xvciwgemVyb0xpbmVUcmFuc3BhcmVuY3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLnpJbmRleCA9IFwiMVwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHplcm9MaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhIGJhciBtYXJrZXJzIHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbE1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmTWFya2VyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxNYXJrZXJDb2xvciA9IGNmTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuekluZGV4ID0gXCIzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXJMZWZ0UGN0ID0gbnVtVmFsdWUgPj0gMCA/IGxlZnRQY3QgKyB3aWR0aFBjdCA6IGxlZnRQY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUudG9wID0gYGNhbGMoNTAlIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlclNoYXBlID09PSBcImNpcmNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwiY3Jvc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NWRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKC00NWRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hcHBlbmRDaGlsZChsaW5lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hcHBlbmRDaGlsZChsaW5lMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJob3Jpem9udGFsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJ2ZXJ0aWNhbExpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gMXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJzZW1pQ2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhdyBzZW1pIGNpcmNsZSBwb2ludGluZyBvdXR3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemUgLyAyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbHNPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnRvcCA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTUwJSlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUubGVmdCA9IGBjYWxjKCR7bGVmdFBjdCArIHdpZHRoUGN0fSUgKyA0cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHsxMDAgLSBsZWZ0UGN0fSUgKyA0cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIHZhbHVlV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gY2VsbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNlbGxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGNlbGxUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNSb3dCZ0NvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogcm93QmdDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY0NlbGxUZXh0Q29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNSb3dCZ0NvbG9yIDogcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNDZWxsVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHZhbHVlQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogY2VsbEl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogY2VsbFVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogY2VsbEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IGNlbGxGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdmFsdWVXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmZmVjdGl2ZUJnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IGAke2VmRm9udFNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGVmV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkgeyAvLyBhbmQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBUb3RhbCBjb2x1bW4gY2VsbCBmb3IgdGhpcyBtZWFzdXJlIGlmIGVuYWJsZWRcclxuICAgICAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxDZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxWYWwgPSB0b3RhbHNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwudGV4dENvbnRlbnQgPSB0b3RhbFZhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbEJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHRvdGFsUm93Qm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbEl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IHRvdGFsUm93SXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogdG90YWxSb3dVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiB0b3RhbFJvd0ZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiB0b3RhbFJvd0ZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdG90YWxSb3dXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbEJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IHRvdGFsUm93QmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogdG90YWxSb3dUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2godG90YWxDZWxsLCByb3dIZWlnaHQsIGVmVG90YWxGb250U2l6ZSwgZWZUb3RhbFdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuZm9udFdlaWdodCA9IGVmVG90YWxCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5mb250RmFtaWx5ID0gZWZUb3RhbEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGVmVG90YWxJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlRvdGFsVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IGAxcHggc29saWQgJHtncmlkQm9yZGVyQ29sb3J9YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZUb3RhbEJnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5jb2xvciA9IGVmVG90YWxDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUudGV4dEFsaWduID0gZWZUb3RhbEFsaWduO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGVmVG90YWxXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZlRvdGFsV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gbnVsbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciB0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICd0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHJyxcbiAgICBkaXNwbGF5TmFtZTogJ1RpbVRhYmxlJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJ0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHXCJdID0gdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRztcbn1cbmV4cG9ydCBkZWZhdWx0IHRpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==