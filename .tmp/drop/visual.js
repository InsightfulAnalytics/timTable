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
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-api */ "powerbi-visuals-api");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */ "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js");
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
            // Build dynamic settings slice for this measure
            const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, textColor);
            valueCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                name: "textColor",
                displayName: displayName + " Text Color",
                value: { value: defaultMeasureTextColor },
                visible: true,
                selector: { metadata: queryName },
                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
            }));
            // Data bars settings
            const objects = valueColumn.source.objects || {};
            const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
            const positiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
            const negativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
            dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                name: "showDataBars",
                displayName: displayName + " Show Data Bars",
                value: showDataBars,
                visible: true,
                selector: { metadata: queryName }
            }));
            if (showDataBars) {
                dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                    name: "positiveColor",
                    displayName: displayName + " Positive Color",
                    value: { value: positiveColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
                dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                    name: "negativeColor",
                    displayName: displayName + " Negative Color",
                    value: { value: negativeColor },
                    visible: true,
                    selector: { metadata: queryName },
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
                const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
                dataBarsSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                    name: "dataBarHeight",
                    displayName: displayName + " Data Bar Height (%)",
                    value: dataBarHeight,
                    visible: true,
                    selector: { metadata: queryName }
                }));
            }
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
                            let cellPositiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                            let cellNegativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
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
                const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, { objectName: "valueConditionalFormatting", propertyName: "textColor" }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                const objects = valueColumn.source.objects || {};
                const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarMarkers", propertyName: "showMarker" }, false);
                let cellPositiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                let cellNegativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
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
                        const cfPosColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], { objectName: "dataBarsFormatting", propertyName: "positiveColor" });
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
                        const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "showDataBars" }, false);
                        if (showDataBars) {
                            let cellPositiveColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "positiveColor" }, "#31b6fd");
                            let cellNegativeColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, { objectName: "dataBarsFormatting", propertyName: "negativeColor" }, "#d96570");
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, { objectName: "dataBarsFormatting", propertyName: "dataBarHeight" }, 80);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFDeEQsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFDRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLEdBQUcsOENBQThDLENBQUM7QUFDL0gsQ0FBQztBQUNELGlFQUFlLDhDQUE4QyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlscy9saWIvZGF0YVZpZXdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlscy9saWIvZGF0YVZpZXdPYmplY3RzLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWRhdGF2aWV3dXRpbHMvbGliL2RhdGFWaWV3V2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL3NyYy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vc3JjL3Zpc3VhbC50cyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vc3R5bGUvdmlzdWFsLmxlc3MiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy9leHRlcm5hbCB2YXIgXCJudWxsXCIiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uLy50bXAvcHJlY29tcGlsZS92aXN1YWxQbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwgcHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gb2JqZWN0W3Byb3BlcnR5TmFtZV07XG4gICAgaWYgKHByb3BlcnR5VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbn1cbi8qKiBHZXRzIHRoZSBzb2xpZCBjb2xvciBmcm9tIGEgZmlsbCBwcm9wZXJ0eSB1c2luZyBvbmx5IGEgcHJvcGVydHlOYW1lICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsbENvbG9yQnlQcm9wZXJ0eU5hbWUob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIGRlZmF1bHRDb2xvcikge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBwcm9wZXJ0eU5hbWUpO1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5zb2xpZC5jb2xvcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFWaWV3T2JqZWN0LmpzLm1hcCIsImltcG9ydCAqIGFzIERhdGFWaWV3T2JqZWN0IGZyb20gXCIuL2RhdGFWaWV3T2JqZWN0XCI7XG4vKiogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIG9iamVjdC9wcm9wZXJ0eSBwYWlyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdHMsIHByb3BlcnR5SWQsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICghb2JqZWN0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gRGF0YVZpZXdPYmplY3QuZ2V0VmFsdWUob2JqZWN0c1twcm9wZXJ0eUlkLm9iamVjdE5hbWVdLCBwcm9wZXJ0eUlkLnByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbn1cbi8qKiBHZXRzIGFuIG9iamVjdCBmcm9tIG9iamVjdHMuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0KG9iamVjdHMsIG9iamVjdE5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmIChvYmplY3RzICYmIG9iamVjdHNbb2JqZWN0TmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdHNbb2JqZWN0TmFtZV07XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG59XG4vKiogR2V0cyB0aGUgc29saWQgY29sb3IgZnJvbSBhIGZpbGwgcHJvcGVydHkuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsbENvbG9yKG9iamVjdHMsIHByb3BlcnR5SWQsIGRlZmF1bHRDb2xvcikge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0cywgcHJvcGVydHlJZCk7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnNvbGlkLmNvbG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1vblZhbHVlKG9iamVjdHMsIHByb3BlcnR5SWQsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdFZhbHVlKTtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNvbGlkLmNvbG9yO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICB8fCB2YWx1ZSA9PT0gbnVsbFxuICAgICAgICB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICF2YWx1ZS5zb2xpZCkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YVZpZXdPYmplY3RzLmpzLm1hcCIsIi8qXG4qICBQb3dlciBCSSBWaXN1YWxpemF0aW9uc1xuKlxuKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cbiogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qICBNSVQgTGljZW5zZVxuKlxuKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcbiogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbipcbiogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4qICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbipcbiogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiogIFRIRSBTT0ZUV0FSRS5cbiovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YVZpZXdXaWxkY2FyZFNlbGVjdG9yKGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbikge1xuICAgIGlmIChkYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24gPT0gbnVsbCkge1xuICAgICAgICBkYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24gPSAwIC8qIERhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbi5JbnN0YW5jZXNBbmRUb3RhbHMgKi87XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9yID0ge1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YVZpZXdXaWxkY2FyZDoge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ09wdGlvbjogZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhVmlld1dpbGRjYXJkLmpzLm1hcCIsIi8qKlxuICogUG93ZXJiaSB1dGlscyBjb21wb25lbnRzIGNsYXNzZXMgZm9yIGN1c3RvbSB2aXN1YWwgZm9ybWF0dGluZyBwYW5lIG9iamVjdHNcbiAqXG4gKi9cbmltcG9ydCAqIGFzIEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlciBmcm9tIFwiLi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlsc1wiO1xuY2xhc3MgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIENhcmRHcm91cEVudGl0eSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG59XG4vKiogQ29tcG9zaXRlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSB3aXRoIG11bHRpcGxlIGdyb3VwcyAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUNhcmQgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuLyoqIFNpbXBsZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgaW4gYSBzaW5nbGUgZ3JvdXAgKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVDYXJkIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBTaW1wbGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBzbGljZURpc3BsYXlOYW1lID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEZXNjcmlwdGlvbiA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHNsaWNlRGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2xpY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcilcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgdGhpcyksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgICAgIH1dO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gKF9hID0gZGF0YVZpZXdPYmplY3RzID09PSBudWxsIHx8IGRhdGFWaWV3T2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXdPYmplY3RzW29iamVjdE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbdGhpcy5uYW1lXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWxpZ25tZW50R3JvdXAgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQWxpZ25tZW50R3JvdXBcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQWxpZ25tZW50R3JvdXAgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtb2RlOiB0aGlzLm1vZGUsIHN1cHBvcnRzTm9TZWxlY3Rpb246IHRoaXMuc3VwcG9ydHNOb1NlbGVjdGlvbiB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRvZ2dsZVN3aXRjaFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ub2dnbGVTd2l0Y2ggKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbG9yUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkNvbG9yUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgZGVmYXVsdENvbG9yOiB0aGlzLmRlZmF1bHRDb2xvciwgaXNOb0ZpbGxJdGVtU3VwcG9ydGVkOiB0aGlzLmlzTm9GaWxsSXRlbVN1cHBvcnRlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTnVtVXBEb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bVVwRG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5OdW1VcERvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIE51bVVwRG93biB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2xpZGVyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNsaWRlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEYXRlUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRhdGVQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5wbGFjZWhvbGRlcktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMucGxhY2Vob2xkZXJLZXkpIDogdGhpcy5wbGFjZWhvbGRlciwgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0Ryb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbWVyZ2VWYWx1ZXM6IHRoaXMubWVyZ2VWYWx1ZXMsIGZpbHRlclZhbHVlczogdGhpcy5maWx0ZXJWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkR1cmF0aW9uUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkR1cmF0aW9uUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcnJvclJhbmdlQ29udHJvbCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJFcnJvclJhbmdlQ29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5FcnJvclJhbmdlQ29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmllbGRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmllbGRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmllbGRQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMsIGFsbG93TXVsdGlwbGVWYWx1ZXM6IHRoaXMuYWxsb3dNdWx0aXBsZVZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbUZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRJbnB1dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0SW5wdXQgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0SW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRBcmVhXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRBcmVhICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udFBpY2tlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhZGllbnRCYXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JhZGllbnRCYXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuR3JhZGllbnRCYXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlVXBsb2FkXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkltYWdlVXBsb2FkICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0RWRpdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkxpc3RFZGl0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTGlzdEVkaXRvciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVhZE9ubHlUZXh0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlJlYWRPbmx5VGV4dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5SZWFkT25seVRleHQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYXBlTWFwU2VsZWN0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2hhcGVNYXBTZWxlY3RvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TaGFwZU1hcFNlbGVjdG9yICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yOiB0aGlzLmlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udENvbnRyb2wgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udENvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udENvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvbGQ6IChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBpdGFsaWM6IChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHVuZGVybGluZTogKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5mb250U2l6ZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvbGQgPyB0aGlzLmJvbGQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLml0YWxpYyA/IHRoaXMuaXRhbGljLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy51bmRlcmxpbmUgPyB0aGlzLnVuZGVybGluZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXJnaW5QYWRkaW5nIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk1hcmdpblBhZGRpbmdcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTWFyZ2luUGFkZGluZyAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnJpZ2h0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudG9wLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm90dG9tLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmxlZnQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy50b3Auc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmJvdHRvbS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXJJdGVtIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb3NpdGVDYXJkLCBTaW1wbGVDYXJkIH0gZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyID0gbG9jYWxpemF0aW9uTWFuYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgZnJvbSBtZXRhZGF0YSBkYXRhVmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFWaWV3cyBtZXRhZGF0YSBkYXRhVmlldyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbFxuICAgICAqL1xuICAgIHBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwodHlwZUNsYXNzLCBkYXRhVmlldykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBuZXcgdHlwZUNsYXNzKCk7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3T2JqZWN0cyA9IChfYSA9IGRhdGFWaWV3ID09PSBudWxsIHx8IGRhdGFWaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlldy5tZXRhZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9iamVjdHM7XG4gICAgICAgIGlmIChkYXRhVmlld09iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIGZvcm1hdHRpbmcgcHJvcGVydHkgYW5kIHNldCBpdHMgbmV3IHZhbHVlIGlmIGV4aXN0c1xuICAgICAgICAgICAgKF9iID0gZGVmYXVsdFNldHRpbmdzLmNhcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQpXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/IFtjYXJkXSA6IGNhcmQuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudCB0b3AgbGV2ZWwgdG9nZ2xlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250YWluZXJJdGVtID09PSBudWxsIHx8IGNvbnRhaW5lckl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRhaW5lckl0ZW0uc2xpY2VzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmb3JtYXR0aW5nIG1vZGVsIGJ5IHBhcnNpbmcgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHBvd2VyYmkgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWxcbiAgICAgKi9cbiAgICBidWlsZEZvcm1hdHRpbmdNb2RlbChmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCkge1xuICAgICAgICBjb25zdCBmb3JtYXR0aW5nTW9kZWwgPSB7XG4gICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwuY2FyZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ2FyZCA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRpc3BsYXlOYW1lS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmQuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kZXNjcmlwdGlvbktleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kZXNjcmlwdGlvbktleSkgOiBjYXJkLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdWlkOiBjYXJkLm5hbWUgKyBcIi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgYW5hbHl0aWNzUGFuZTogY2FyZC5hbmFseXRpY3NQYW5lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBjYXJkLm5hbWU7XG4gICAgICAgICAgICBpZiAoY2FyZC50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmQudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNhcmQub25QcmVQcm9jZXNzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjYXJkKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2ltcGxlQ2FyZCA9IGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkO1xuICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGlzU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVWlkID0gY2FyZEdyb3VwSW5zdGFuY2UubmFtZSArIFwiLWdyb3VwXCI7XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBncm91cCBmb3IgZWFjaCBncm91cFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdHcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBncm91cFVpZCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGNhcmRHcm91cEluc3RhbmNlLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBkZWxheVNhdmVTbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLmRlbGF5U2F2ZVNsaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFJlYXNvbjogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWRSZWFzb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5ncm91cHMucHVzaChmb3JtYXR0aW5nR3JvdXApO1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgZm9ybWF0dGluZyBtb2RlbCBhZGRzIGRhdGEgcG9pbnRzIG9yIHRvcCBjYXRlZ29yaWVzIChMaWtlIHdoZW4geW91IG1vZGlmeSBzcGVjaWZpYyB2aXN1YWwgY2F0ZWdvcnkgY29sb3IpLlxuICAgICAgICAgICAgICAgIC8vIHRoZXNlIGNhdGVnb3JpZXMgdXNlIHNhbWUgb2JqZWN0IG5hbWUgYW5kIHByb3BlcnR5IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXMgYW5kIHRoZSBnZW5lcmF0ZWQgdWlkIHdpbGwgYmUgdGhlIHNhbWUgZm9yIHRoZXNlIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gU29sdXRpb24gPT4gU2F2ZSBzbGljZSBuYW1lcyB0byBtb2RpZnkgZWFjaCBzbGljZSB1aWQgdG8gYmUgdW5pcXVlIGJ5IGFkZGluZyBjb3VudGVyIHZhbHVlIHRvIHRoZSBuZXcgc2xpY2UgdWlkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclVpZCA9IGdyb3VwVWlkICsgXCItY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGVzY3JpcHRpb25LZXkpIDogY29udGFpbmVyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJVaWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJZW1OYW1lID0gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA/IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySXRlbVVpZCA9IGNvbnRhaW5lclVpZCArIGNvbnRhaW5lckllbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ29udGFpbmVySXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lckl0ZW1VaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlcyBhbmQgYWRkIHRoZW0gdG8gY3VycmVudCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY29udGFpbmVySXRlbS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdDb250YWluZXJJdGVtLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250YWluZXIuY29udGFpbmVySXRlbXMucHVzaChmb3JtYXR0aW5nQ29udGFpbmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nR3JvdXAuY29udGFpbmVyID0gZm9ybWF0dGluZ0NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZvcm1hdHRpbmdHcm91cC5kaXNwbGF5TmFtZSA9PSB1bmRlZmluZWQgPyBmb3JtYXR0aW5nQ2FyZCA6IGZvcm1hdHRpbmdHcm91cCkudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0dyb3VwLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpO1xuICAgICAgICAgICAgZm9ybWF0dGluZ01vZGVsLmNhcmRzLnB1c2goZm9ybWF0dGluZ0NhcmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRpbmdNb2RlbDtcbiAgICB9XG4gICAgYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzIH0pIHtcbiAgICAgICAgLy8gRmlsdGVyIHNsaWNlcyBiYXNlZCBvbiB0aGVpciB2aXNpYmlsaXR5XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdTbGljZSA9IHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0aW5nU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBNb2RpZnkgZm9ybWF0dGluZyBzbGljZSB1aWQgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0rKztcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlLnVpZCA9IGAke2Zvcm1hdHRpbmdTbGljZS51aWR9LSR7c2xpY2VOYW1lc1tzbGljZS5uYW1lXX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2VzLnB1c2goZm9ybWF0dGluZ1NsaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFByb2NlZWRlZCBzbGljZSBuYW1lcyBhcmUgc2F2ZWQgdG8gcHJldmVudCBkdXBsaWNhdGVkIGRlZmF1bHQgZGVzY3JpcHRvcnMgaW4gY2FzZSBvZiB1c2luZyBcbiAgICAgICAgLy8gZm9ybWF0dGluZyBjYXRlZ29yaWVzICYgc2VsZWN0b3JzLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgZGVzY3JpcHRvciBvYmplY3ROYW1lIGFuZCBwcm9wZXJ0eU5hbWVcbiAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICBjb25zdCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICAgICAgbGV0IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZCAmJiBjYXJkLnRvcExldmVsU2xpY2UpXG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLihfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIHNsaWNlTmFtZXMsIGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBzbGljZU5hbWVzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBnZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lLCBzbGljZXMsIHNsaWNlTmFtZXMsIHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmICh0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICBzbGljZU5hbWVzW3RvcExldmVsU2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodG9wTGV2ZWxTbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2xpY2UgJiYgIXNsaWNlTmFtZXNbc2xpY2UubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChzbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMubWFwIiwiaW1wb3J0ICogYXMgZm9ybWF0dGluZ1NldHRpbmdzIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2VcIjtcbmV4cG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBCdWlsZCBhbmQgcmV0dXJuIGZvcm1hdHRpbmcgZGVzY3JpcHRvciBmb3Igc2ltcGxlIHNsaWNlXG4gKlxuICogQHBhcmFtIG9iamVjdE5hbWUgT2JqZWN0IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXNcbiAqIEBwYXJhbSBzbGljZSBmb3JtYXR0aW5nIHNpbXBsZSBzbGljZVxuICogQHJldHVybnMgc2ltcGxlIHNsaWNlIGZvcm1hdHRpbmcgZGVzY3JpcHRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCBzbGljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgIHByb3BlcnR5TmFtZTogc2xpY2UubmFtZSxcbiAgICAgICAgc2VsZWN0b3I6IHNsaWNlLnNlbGVjdG9yLFxuICAgICAgICBhbHRDb25zdGFudFZhbHVlU2VsZWN0b3I6IHNsaWNlLmFsdENvbnN0YW50U2VsZWN0b3IsXG4gICAgICAgIGluc3RhbmNlS2luZDogc2xpY2UuaW5zdGFuY2VLaW5kXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHByb3BlcnR5IHZhbHVlIGZyb20gZGF0YXZpZXcgb2JqZWN0cyBpZiBleGlzdHNcbiAqIEVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGZyb20gZm9ybWF0dGluZyBzZXR0aW5ncyBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdmFsdWUgZGF0YXZpZXcgb2JqZWN0IHZhbHVlXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGZvcm1hdHRpbmcgc2V0dGluZ3MgZGVmYXVsdCB2YWx1ZVxuICogQHJldHVybnMgZm9ybWF0dGluZyBwcm9wZXJ0eSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShzbGljZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5zb2xpZC5jb2xvciB9O1xuICAgIH1cbiAgICBpZiAoKHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS50eXBlKSA9PT0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLyAmJiBzbGljZS5pdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gc2xpY2UuaXRlbXM7XG4gICAgICAgIHJldHVybiBpdGVtc0FycmF5LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMubWFwIiwiaW1wb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IHsgZGF0YVZpZXdXaWxkY2FyZCB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlsc1wiO1xyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5cclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2ltcGxlQ2FyZDtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlID0gZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgPSBmb3JtYXR0aW5nU2V0dGluZ3MuTW9kZWw7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlc1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBwdWJsaWMgZm9udCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvbGRcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaXRhbGljXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmZmZmZmZcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbHRlcm5hdGVUZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSB0ZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFsdGVybmF0ZUJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIGJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZjVmNWY1XCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dFdyYXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0V3JhcFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgd3JhcFwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJ2YWx1ZXNcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJWYWx1ZXNcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbXHJcbiAgICAgICAgdGhpcy5mb250LCBcclxuICAgICAgICB0aGlzLnRleHRDb2xvciwgXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIFxyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlVGV4dENvbG9yLCBcclxuICAgICAgICB0aGlzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciwgXHJcbiAgICAgICAgdGhpcy50ZXh0V3JhcFxyXG4gICAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJke1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0YWJsZVwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiVGFibGVcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5wdWJsaWMgaGVhZGVyQm9sZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImhlYWRlckJvbGRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgQm9sZFwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIHN3aXRjaFZhbHVlc1RvUm93cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInN3aXRjaFZhbHVlc1RvUm93c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN3aXRjaCB2YWx1ZXMgdG8gcm93c1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlXb3JkV3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImNhdGVnb3J5V29yZFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDYXRlZ29yeSBXb3JkIFdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZhbHVlUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmFsdWVSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZSBSb3cgSGVpZ2h0XCIsXHJcbiAgICAgICAgdmFsdWU6IDMwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIFJvdyBIZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRvdGFsUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidG90YWxSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUb3RhbCBSb3cgSGVpZ2h0XCIsXHJcbiAgICAgICAgdmFsdWU6IDM1LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy5zd2l0Y2hWYWx1ZXNUb1Jvd3MsIHRoaXMuY2F0ZWdvcnlXb3JkV3JhcCwgdGhpcy52YWx1ZVJvd0hlaWdodCwgdGhpcy5hbHRlcm5hdGVWYWx1ZVJvd0hlaWdodCwgdGhpcy50b3RhbFJvd0hlaWdodF1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlZhbHVlIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJjYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiQ2F0ZWdvcnkgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IENvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RvcjogZGF0YVZpZXdXaWxkY2FyZC5jcmVhdGVEYXRhVmlld1dpbGRjYXJkU2VsZWN0b3IoZGF0YVZpZXdXaWxkY2FyZC5EYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb24uSW5zdGFuY2VzQW5kVG90YWxzKSxcclxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW3RoaXMudGV4dENvbG9yXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFCYXJzRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImRhdGFCYXJzRm9ybWF0dGluZ1wiO1xyXG4gICAgZGlzcGxheU5hbWU6c3RyaW5nID0gXCJEYXRhIEJhcnNcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhck1hcmtlcnNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJkYXRhQmFyTWFya2Vyc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiRGF0YSBCYXIgTWFya2Vyc1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG90YWxzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidG90YWxzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJUb3RhbHNcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc2hvd1RvdGFsUm93ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd1RvdGFsUm93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBUb3RhbCBSb3dcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdG90YWxCZWhhdmlvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcInRvdGFsQmVoYXZpb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJNZWFzdXJlIFNlbGVjdGlvblwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIk1lYXN1cmVcIiwgZGlzcGxheU5hbWU6IFwiTWVhc3VyZVwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWFzdXJlXCIsIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlN1bVwiLCBkaXNwbGF5TmFtZTogXCJTdW1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkF2ZXJhZ2VcIiwgZGlzcGxheU5hbWU6IFwiQXZlcmFnZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnRcIiwgZGlzcGxheU5hbWU6IFwiQ291bnRcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdW50IERpc3RpbmN0XCIsIGRpc3BsYXlOYW1lOiBcIkNvdW50IERpc3RpbmN0XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNYXhcIiwgZGlzcGxheU5hbWU6IFwiTWF4XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNaW5cIiwgZGlzcGxheU5hbWU6IFwiTWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTJcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaXRhbGljXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNkMGQwZDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy5zaG93VG90YWxSb3csIHRoaXMudG90YWxCZWhhdmlvciwgdGhpcy5mb250LCB0aGlzLnRleHRDb2xvciwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHRoaXMudGV4dFdyYXBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgcHVibGljIGhvcml6b250YWxHcmlkbGluZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZGxpbmVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSG9yaXpvbnRhbCBncmlkbGluZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiaG9yaXpvbnRhbEdyaWRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2QwZDBkMFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGhvcml6b250YWxHcmlkV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZFdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3kgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhvcml6b250YWwgZ3JpZCB0cmFuc3BhcmVuY3kgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsR3JpZGxpbmVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkbGluZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWZXJ0aWNhbCBncmlkbGluZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZDBkMGQwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2ZXJ0aWNhbEdyaWRXaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIldpZHRoXCIsXHJcbiAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIGdyaWQgdHJhbnNwYXJlbmN5ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImdyaWRcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJHcmlkXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRsaW5lcyxcclxuICAgICAgICB0aGlzLmhvcml6b250YWxHcmlkQ29sb3IsXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZFdpZHRoLFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3ksXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRsaW5lcyxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZENvbG9yLFxyXG4gICAgICAgIHRoaXMudmVydGljYWxHcmlkV2lkdGgsXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRUcmFuc3BhcmVuY3lcclxuICAgIF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uSGVhZGVyc1NldHRpbmdzIGV4dGVuZHMgZm9ybWF0dGluZ1NldHRpbmdzLkNvbXBvc2l0ZUNhcmQge1xyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTFcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMxZTNhOGFcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWxpZ25tZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BbGlnbm1lbnRHcm91cCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbm1lbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgYWxpZ25tZW50XCIsXHJcbiAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxyXG4gICAgICAgIG1vZGU6IHBvd2VyYmkudmlzdWFscy5BbGlnbm1lbnRHcm91cE1vZGUuSG9yaXpvbmFsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHRcIixcclxuICAgICAgICBuYW1lOiBcInRleHRcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy5hbGlnbm1lbnQsIHRoaXMudGV4dFdyYXBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaGVhZGVyUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiaGVhZGVyUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIHJvdyBoZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG9wdGlvbnNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk9wdGlvbnNcIixcclxuICAgICAgICBuYW1lOiBcIm9wdGlvbnNcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmhlYWRlclJvd0hlaWdodF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImNvbHVtbkhlYWRlcnNcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDb2x1bW4gaGVhZGVyc1wiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGdyb3VwczogZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwW10gPSBbdGhpcy50ZXh0R3JvdXAsIHRoaXMub3B0aW9uc0dyb3VwXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVjaWZpY0NvbHVtblNldHRpbmdzIGV4dGVuZHMgZm9ybWF0dGluZ1NldHRpbmdzLkNvbXBvc2l0ZUNhcmQge1xyXG4gICAgcHVibGljIHNlcmllcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcInNlcmllc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNlcmllc1wiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhcHBseVRvSGVhZGVyID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb0hlYWRlclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIGhlYWRlclwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFwcGx5VG9Ub3RhbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImFwcGx5VG9Ub3RhbFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHRvdGFsXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYXBwbHlUb1ZhbHVlcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImFwcGx5VG9WYWx1ZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBcHBseSB0byB2YWx1ZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYXBwbHlTZXR0aW5nc0dyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgc2V0dGluZ3MgdG9cIixcclxuICAgICAgICBuYW1lOiBcImFwcGx5U2V0dGluZ3NUb1wiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuc2VyaWVzLCB0aGlzLmFwcGx5VG9IZWFkZXIsIHRoaXMuYXBwbHlUb1RvdGFsLCB0aGlzLmFwcGx5VG9WYWx1ZXNdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZm9udCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZvbnRTaXplOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBTaXplXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvbGRcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaXRhbGljXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzAwYjhkNFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2ZmZmZmZlwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlVGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgdGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMzMzMzNcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFsdGVybmF0ZUJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIGJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZjVmNWY1XCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFsaWdubWVudCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQWxpZ25tZW50R3JvdXAoe1xyXG4gICAgICAgIG5hbWU6IFwiYWxpZ25tZW50XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWxpZ25tZW50XCIsXHJcbiAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxyXG4gICAgICAgIG1vZGU6IHBvd2VyYmkudmlzdWFscy5BbGlnbm1lbnRHcm91cE1vZGUuSG9yaXpvbmFsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGRpc3BsYXlVbml0cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQXV0b0Ryb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImRpc3BsYXlVbml0c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkRpc3BsYXkgdW5pdHNcIixcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBkZWNpbWFsUGxhY2VzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZGVjaW1hbFBsYWNlc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlIGRlY2ltYWwgcGxhY2VzXCIsXHJcbiAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZhbHVlc0dyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWVzXCIsXHJcbiAgICAgICAgbmFtZTogXCJzcGVjaWZpY1ZhbHVlc1wiLCAvLyBOT1RFOiByZW5hbWVkIHRvIHNwZWNpZmljVmFsdWVzIHRvIGF2b2lkIGNsYXNoIHdpdGggZ2xvYmFsICd2YWx1ZXMnIG9iamVjdFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuZm9udCwgdGhpcy50ZXh0Q29sb3IsIHRoaXMuYmFja2dyb3VuZENvbG9yLCB0aGlzLmFsdGVybmF0ZVRleHRDb2xvciwgdGhpcy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IsIHRoaXMuYWxpZ25tZW50LCB0aGlzLmRpc3BsYXlVbml0cywgdGhpcy5kZWNpbWFsUGxhY2VzLCB0aGlzLnRleHRXcmFwXVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IFwic3BlY2lmaWNDb2x1bW5cIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJTcGVjaWZpYyBjb2x1bW5cIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBncm91cHM6IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cFtdID0gW3RoaXMuYXBwbHlTZXR0aW5nc0dyb3VwLCB0aGlzLnZhbHVlc0dyb3VwXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtbldpZHRoU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiY29sdW1uV2lkdGhcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIkNvbHVtbiBXaWR0aFwiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGNhdGVnb3J5Q29sdW1uV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJjYXRlZ29yeUNvbHVtbldpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ2F0ZWdvcnkgQ29sdW1uIFdpZHRoXCIsXHJcbiAgICAgICAgdmFsdWU6IDE1MFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFsaWduZWRDb2x1bW5zID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYWxpZ25lZENvbHVtbnNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbGlnbmVkIGNvbHVtbnNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZhbHVlQ29sdW1uV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2YWx1ZUNvbHVtbldpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWUgQ29sdW1uIFdpZHRoXCIsXHJcbiAgICAgICAgdmFsdWU6IDEwMFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFt0aGlzLmNhdGVnb3J5Q29sdW1uV2lkdGgsIHRoaXMuYWxpZ25lZENvbHVtbnMsIHRoaXMudmFsdWVDb2x1bW5XaWR0aF07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIHB1YmxpYyB2YWx1ZXNNZW51OiBWYWx1ZXNTZXR0aW5ncyA9IG5ldyBWYWx1ZXNTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHNwZWNpZmljQ29sdW1uOiBTcGVjaWZpY0NvbHVtblNldHRpbmdzID0gbmV3IFNwZWNpZmljQ29sdW1uU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBjb2x1bW5IZWFkZXJzOiBDb2x1bW5IZWFkZXJzU2V0dGluZ3MgPSBuZXcgQ29sdW1uSGVhZGVyc1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgdGFibGU6IFRhYmxlU2V0dGluZ3MgPSBuZXcgVGFibGVTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nOiBDYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IENhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyB2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZzogVmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBWYWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZGF0YUJhcnNGb3JtYXR0aW5nOiBEYXRhQmFyc0Zvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBEYXRhQmFyc0Zvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGRhdGFCYXJNYXJrZXJzOiBEYXRhQmFyTWFya2Vyc1NldHRpbmdzID0gbmV3IERhdGFCYXJNYXJrZXJzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyB0b3RhbHM6IFRvdGFsc1NldHRpbmdzID0gbmV3IFRvdGFsc1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZ3JpZE1lbnU6IEdyaWRTZXR0aW5ncyA9IG5ldyBHcmlkU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGhTZXR0aW5ncyA9IG5ldyBDb2x1bW5XaWR0aFNldHRpbmdzKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjYXJkczogRm9ybWF0dGluZ1NldHRpbmdzQ2FyZFtdID0gW3RoaXMuc3BlY2lmaWNDb2x1bW4sIHRoaXMuY29sdW1uSGVhZGVycywgdGhpcy52YWx1ZXNNZW51LCB0aGlzLnRhYmxlLCB0aGlzLmNvbHVtbldpZHRoLCB0aGlzLnRvdGFscywgdGhpcy5ncmlkTWVudSwgdGhpcy5jYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZywgdGhpcy52YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZywgdGhpcy5kYXRhQmFyc0Zvcm1hdHRpbmcsIHRoaXMuZGF0YUJhck1hcmtlcnNdO1xyXG59IiwiLypcclxuKiAgUG93ZXIgQkkgVmlzdWFsIENMSVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXHJcbiogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogIE1JVCBMaWNlbnNlXHJcbipcclxuKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4qICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlwiU29mdHdhcmVcIlwiKSwgdG8gZGVhbFxyXG4qICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbipcclxuKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbipcclxuKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICpBUyBJUyosIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4qICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuKiAgVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vLi4vc3R5bGUvdmlzdWFsLmxlc3NcIjtcclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBEYXRhVmlldyA9IHBvd2VyYmkuRGF0YVZpZXc7XHJcbmltcG9ydCB7IFZpc3VhbFNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSwgZm9ybWF0dGluZ1NldHRpbmdzIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IHsgZGF0YVZpZXdPYmplY3RzIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsIGltcGxlbWVudHMgSVZpc3VhbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB2aXN1YWxTZXR0aW5nczogVmlzdWFsU2V0dGluZ3M7XHJcbiAgICBwcml2YXRlIGRhdGFWaWV3OiBEYXRhVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFibGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YWJsZS1jb250YWluZXJcIjtcclxuICAgICAgICBvcHRpb25zLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICB0aGlzLnRhYmxlLmNsYXNzTmFtZSA9ICdwYmktdGFibGUnO1xyXG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGFibGUpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMudmlzdWFsU2V0dGluZ3MgPSBuZXcgVmlzdWFsU2V0dGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Rm9ybWF0dGluZ01vZGVsKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5idWlsZEZvcm1hdHRpbmdNb2RlbCh0aGlzLnZpc3VhbFNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhVmlld3MgJiYgb3B0aW9ucy5kYXRhVmlld3NbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5wb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKFZpc3VhbFNldHRpbmdzLCBvcHRpb25zLmRhdGFWaWV3c1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTsgLy8gVXBkYXRlIGRhdGFWaWV3IGhlcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGhTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY29sdW1uV2lkdGg7XHJcbiAgICAgICAgY29uc3QgdGFibGVTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MudGFibGU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnZhbHVlc01lbnU7XHJcbiAgICAgICAgY29uc3QgY2VsbEl0YWxpYyA9IHZhbHVlc1NldHRpbmdzLmZvbnQuaXRhbGljPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBjZWxsVW5kZXJsaW5lID0gdmFsdWVzU2V0dGluZ3MuZm9udC51bmRlcmxpbmU/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2xvciA9IHZhbHVlc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbHRlcm5hdGVUZXh0Q29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2VsbEZvbnRGYW1pbHkgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnRvdGFscztcclxuICAgICAgICBjb25zdCBzaG93VG90YWxSb3cgPSB0b3RhbHNTZXR0aW5ncy5zaG93VG90YWxSb3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dJdGFsaWMgPSB0b3RhbHNTZXR0aW5ncy5mb250Lml0YWxpYz8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dXb3JkV3JhcCA9IHRvdGFsc1NldHRpbmdzLnRleHRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Rm9udFNpemUgPSB0b3RhbHNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Rm9udEZhbWlseSA9IHRvdGFsc1NldHRpbmdzLmZvbnQuZm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1RleHRDb2xvciA9IHRvdGFsc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNvbHVtbldpZHRoID0gY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5V29yZFdyYXAgPSB0YWJsZVNldHRpbmdzLmNhdGVnb3J5V29yZFdyYXAudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVXb3JkV3JhcCA9IHZhbHVlc1NldHRpbmdzLnRleHRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY29sdW1uSGVhZGVycztcclxuICAgICAgICBjb25zdCBoZWFkZXJXb3JkV3JhcCA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy50ZXh0V3JhcD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGggPSBjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyUm93SGVpZ2h0ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmhlYWRlclJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZVJvd0hlaWdodCA9IHRhYmxlU2V0dGluZ3MudmFsdWVSb3dIZWlnaHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQgPSB0YWJsZVNldHRpbmdzLmFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93SGVpZ2h0ID0gdGFibGVTZXR0aW5ncy50b3RhbFJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJGb250U2l6ZSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJvbGQgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC5ib2xkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckl0YWxpYyA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250Lml0YWxpYy52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJVbmRlcmxpbmUgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC51bmRlcmxpbmUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRm9udEZhbWlseSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQWxpZ25tZW50ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmFsaWdubWVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBjZWxsRm9udFNpemUgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQm9sZCA9IHZhbHVlc1NldHRpbmdzLmZvbnQuYm9sZD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dCb2xkID0gdG90YWxzU2V0dGluZ3MuZm9udC5ib2xkPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1VuZGVybGluZSA9IHRvdGFsc1NldHRpbmdzLmZvbnQudW5kZXJsaW5lPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gdmFsdWVzU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhY2tncm91bmRDb2xvciA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dENvbG9yID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0JhY2tncm91bmRDb2xvciA9IHRvdGFsc1NldHRpbmdzLmJhY2tncm91bmRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmdyaWRNZW51O1xyXG4gICAgICAgIGNvbnN0IGdyaWRCb3JkZXJDb2xvciA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q0ZTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmc7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENhdGVnb3J5VGV4dENvbG9yID0gY2F0ZWdvcnlDRlNldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZUNGU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIHZhbHVlQ0ZTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuXHJcbiAgICAgICAgdG90YWxzU2V0dGluZ3Muc2xpY2VzID0gW1xyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5zaG93VG90YWxSb3csXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLmZvbnQsXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnRleHRDb2xvcixcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy50ZXh0V3JhcFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFCYXJzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmRhdGFCYXJzRm9ybWF0dGluZztcclxuICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNsaWNlcyA9IFtdOyAvLyBXaWxsIGJlIHBvcHVsYXRlZCBkeW5hbWljYWxseSBwZXItbWVhc3VyZVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhQmFyTWFya2Vyc1NldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5kYXRhQmFyTWFya2VycztcclxuICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcyA9IFtdOyAvLyBXaWxsIGJlIHBvcHVsYXRlZCBkeW5hbWljYWxseSBwZXItbWVhc3VyZVxyXG5cclxuICAgICAgICAvLyBSZXNldCBjb2x1bW5XaWR0aCBzbGljZXM6IGJhc2Ugc2xpY2VzIGFsd2F5cyBzaG93biwgcGVyLW1lYXN1cmUgc2xpY2VzIGFkZGVkIGR5bmFtaWNhbGx5IHdoZW4gbm90IGFsaWduZWRcclxuICAgICAgICBpZiAoY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1ucy52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb2x1bW5XaWR0aFNldHRpbmdzLnNsaWNlcyA9IFtjb2x1bW5XaWR0aFNldHRpbmdzLmNhdGVnb3J5Q29sdW1uV2lkdGgsIGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMsIGNvbHVtbldpZHRoU2V0dGluZ3MudmFsdWVDb2x1bW5XaWR0aF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy5zbGljZXMgPSBbY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLCBjb2x1bW5XaWR0aFNldHRpbmdzLmFsaWduZWRDb2x1bW5zXTtcclxuICAgICAgICAgICAgLy8gUGVyLW1lYXN1cmUgd2lkdGggc2xpY2VzIHdpbGwgYmUgYWRkZWQgaW4gdGhlIHZhbHVlcy5mb3JFYWNoIGxvb3AgYmVsb3dcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGhleCB0byByZ2JhXHJcbiAgICAgICAgY29uc3QgYXBwbHlUcmFuc3BhcmVuY3kgPSAoaGV4OiBzdHJpbmcsIHRyYW5zcGFyZW5jeVBjdDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFoZXgpIHJldHVybiBoZXg7XHJcbiAgICAgICAgICAgIGxldCBhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIDEgLSAodHJhbnNwYXJlbmN5UGN0IC8gMTAwKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGV4LnN0YXJ0c1dpdGgoXCIjXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgciA9IHBhcnNlSW50KGhleFsxXSArIGhleFsxXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChoZXhbMl0gKyBoZXhbMl0sIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQoaGV4WzNdICsgaGV4WzNdLCAxNik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzJdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGhleFszXSArIGhleFs0XSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBwYXJzZUludChoZXhbNV0gKyBoZXhbNl0sIDE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2FscGhhfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoZXg7IC8vIGZhbGxiYWNrIGlmIG5vdCBoZXhcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBob3JpekxpbmVzID0gZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkbGluZXMudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaG9yaXpDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZENvbG9yLnZhbHVlLnZhbHVlLCBncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3kudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGhvcml6V2lkdGggPSBncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRXaWR0aC52YWx1ZTtcclxuICAgICAgICBjb25zdCBob3JpekJvcmRlclZhbHVlID0gaG9yaXpMaW5lcyA/IGAke2hvcml6V2lkdGh9cHggc29saWQgJHtob3JpekNvbG9yfWAgOiAnbm9uZSc7XHJcbiAgICAgICAgY29uc3QgaG9yaXpCb3JkZXIyeFZhbHVlID0gaG9yaXpMaW5lcyA/IGAke2hvcml6V2lkdGggKiAyfXB4IHNvbGlkICR7aG9yaXpDb2xvcn1gIDogJ25vbmUnO1xyXG5cclxuICAgICAgICBjb25zdCB2ZXJ0TGluZXMgPSBncmlkU2V0dGluZ3MudmVydGljYWxHcmlkbGluZXMudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmVydENvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZENvbG9yLnZhbHVlLnZhbHVlLCBncmlkU2V0dGluZ3MudmVydGljYWxHcmlkVHJhbnNwYXJlbmN5LnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2ZXJ0V2lkdGggPSBncmlkU2V0dGluZ3MudmVydGljYWxHcmlkV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmVydEJvcmRlclZhbHVlID0gdmVydExpbmVzID8gYCR7dmVydFdpZHRofXB4IHNvbGlkICR7dmVydENvbG9yfWAgOiAnbm9uZSc7XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGV4dCBjb2xvciBmb3IgYSBjYXRlZ29yeSByb3csIHN1cHBvcnRpbmcgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXROdW1iZXIgPSAobnVtOiBudW1iZXIsIHVuaXRzOiBudW1iZXIsIGRlY2ltYWxzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGl2aXNvciA9IDE7XHJcbiAgICAgICAgICAgIGxldCBzdWZmaXggPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAodW5pdHMgPT09IDApIHsgLy8gQXV0b1xyXG4gICAgICAgICAgICAgICAgbGV0IGFic051bSA9IE1hdGguYWJzKG51bSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWJzTnVtID49IDEwMDAwMDAwMDAwMDApIHsgZGl2aXNvciA9IDEwMDAwMDAwMDAwMDA7IHN1ZmZpeCA9IFwiVFwiOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYnNOdW0gPj0gMTAwMDAwMDAwMCkgeyBkaXZpc29yID0gMTAwMDAwMDAwMDsgc3VmZml4ID0gXCJiblwiOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYnNOdW0gPj0gMTAwMDAwMCkgeyBkaXZpc29yID0gMTAwMDAwMDsgc3VmZml4ID0gXCJNXCI7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFic051bSA+PSAxMDAwKSB7IGRpdmlzb3IgPSAxMDAwOyBzdWZmaXggPSBcIktcIjsgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID4gMSkge1xyXG4gICAgICAgICAgICAgICAgZGl2aXNvciA9IHVuaXRzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVuaXRzID09PSAxMDAwKSBzdWZmaXggPSBcIktcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwKSBzdWZmaXggPSBcIk1cIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaXRzID09PSAxMDAwMDAwMDAwKSBzdWZmaXggPSBcImJuXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMDAwMDAwMCkgc3VmZml4ID0gXCJUXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAobnVtIC8gZGl2aXNvcikudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFsc1xyXG4gICAgICAgICAgICB9KSArIHN1ZmZpeDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBnZXRDYXRlZ29yeVRleHRDb2xvciA9IChyb3dJbmRleDogbnVtYmVyLCBkYXRhVmlldzogRGF0YVZpZXcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcyAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5vYmplY3RzICYmIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5vYmplY3RzW3Jvd0luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENhdGVnb3J5VGV4dENvbG9yO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBhcHBseSBzcXVhc2hpbmcgcm93IGhlaWdodFxyXG4gICAgICAgIGNvbnN0IGFwcGx5Um93U3F1YXNoID0gKGNlbGw6IEhUTUxFbGVtZW50LCByb3dIZWlnaHQ6IG51bWJlciwgZm9udFNpemU6IG51bWJlciwgd29yZFdyYXA6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvd0hlaWdodCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5saW5lSGVpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gYCR7cm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSBgJHtNYXRoLm1pbihmb250U2l6ZSwgTWF0aC5tYXgoOCwgcm93SGVpZ2h0IC0gNikpfXB4YDtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuaGVpZ2h0ID0gYCR7cm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucGFkZGluZyA9IFwiXCI7IC8vIGZhbGxiYWNrIHRvIENTUyBwYWRkaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIXdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5saW5lSGVpZ2h0ID0gYCR7cm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5saW5lSGVpZ2h0ID0gXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcGx5VmVydGljYWxHcmlkQm9yZGVyID0gKGNlbGw6IEhUTUxFbGVtZW50LCBpc0xhc3RDZWxsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNMYXN0Q2VsbCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcGx5VG90YWxSb3dTdHlsZXMgPSAoY2VsbDogSFRNTEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIHdvcmRXcmFwOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNlbGwsIHRvdGFsUm93SGVpZ2h0LCB0b3RhbFJvd0ZvbnRTaXplLCB3b3JkV3JhcCk7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHRvdGFsUm93Qm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRvdGFsUm93VW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSB0b3RhbFJvd0ZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gdG90YWxSb3dJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0b3RhbFJvd0JhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IHdvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgIGlmICh3b3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IGJhY2tncm91bmQgY29sb3IgZm9yIGEgcm93LCBzdXBwb3J0aW5nIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuICAgICAgICBjb25zdCBnZXRSb3dCYWNrZ3JvdW5kQ29sb3IgPSAocm93SW5kZXg6IG51bWJlciwgaXNFdmVuUm93OiBib29sZWFuLCBkYXRhVmlldzogRGF0YVZpZXcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDb2xvclByb3AgPSBpc0V2ZW5Sb3cgPyBcImJhY2tncm91bmRDb2xvclwiIDogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gaXNFdmVuUm93ID8gYmFja2dyb3VuZENvbG9yIDogYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkub2JqZWN0cyAmJiBjYXRlZ29yeS5vYmplY3RzW3Jvd0luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ0YWJsZVwiLCBwcm9wZXJ0eU5hbWU6IHRhcmdldENvbG9yUHJvcCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgcm93IGJhY2tncm91bmQgY29sb3IsIHN1cHBvcnRpbmcgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnRhYmxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZS5yZW1vdmVDaGlsZCh0aGlzLnRhYmxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG5cclxuICAgICAgICBpZiAoIW9wdGlvbnMuZGF0YVZpZXdzIHx8IG9wdGlvbnMuZGF0YVZpZXdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJObyBkYXRhIGF2YWlsYWJsZVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YVZpZXc6IERhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcblxyXG4gICAgICAgIGxldCBoYXNDYXRlZ29yaWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcyAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBoYXNDYXRlZ29yaWVzID8gZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllc1swXSA6IG51bGw7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcyA/IGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlcyA6IG51bGw7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiTm8gZGF0YSBhdmFpbGFibGVcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3dpdGNoVmFsdWVzVG9Sb3dzID0gdGFibGVTZXR0aW5ncy5zd2l0Y2hWYWx1ZXNUb1Jvd3M/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IGhhc0NhdGVnb3JpZXMgJiYgY2F0ZWdvcmllcy52YWx1ZXMgPyBjYXRlZ29yaWVzLnZhbHVlcy5sZW5ndGggOiAodmFsdWVzWzBdLnZhbHVlcyA/IHZhbHVlc1swXS52YWx1ZXMubGVuZ3RoIDogMSk7XHJcblxyXG4gICAgICAgIC8vIFByZS1wcm9jZXNzIG1lYXN1cmUgc2V0dGluZ3MgdG8gcG9wdWxhdGUgZm9ybWF0dGluZyBtb2RlbCBwcm9wZXJseVxyXG4gICAgICAgIGxldCBtZWFzdXJlSGVhZGVyczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBcclxuaW50ZXJmYWNlIE1lYXN1cmVTcGVjaWZpY1NldHRpbmdzIHtcclxuICAgIHRleHRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhbHRlcm5hdGVUZXh0Q29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYWxpZ25tZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhcHBseVRvSGVhZGVyOiBib29sZWFuO1xyXG4gICAgYXBwbHlUb1ZhbHVlczogYm9vbGVhbjtcclxuICAgIGFwcGx5VG9Ub3RhbDogYm9vbGVhbjtcclxuICAgIGRpc3BsYXlVbml0czogbnVtYmVyO1xyXG4gICAgZGVjaW1hbFBsYWNlczogbnVtYmVyO1xyXG4gICAgZm9udEZhbWlseTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgZm9udFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIGJvbGQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBpdGFsaWM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICB1bmRlcmxpbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICB0ZXh0V3JhcDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuICAgICAgICAgIGxldCBtZWFzdXJlU2V0dGluZ3NMaXN0OiBNZWFzdXJlU3BlY2lmaWNTZXR0aW5nc1tdID0gW107XHJcbiAgICAgICAgICBsZXQgdmFsdWVDb2x1bW5XaWR0aHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHNwZWNPYmogPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cz8uc3BlY2lmaWNDb2x1bW47XHJcbiAgICAgICAgICAgICAgbGV0IHNldHRpbmdzOiBNZWFzdXJlU3BlY2lmaWNTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGVUZXh0Q29sb3I6IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIgfSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGFsaWdubWVudDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsaWdubWVudFwiIH0sIHVuZGVmaW5lZCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBhcHBseVRvSGVhZGVyOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb0hlYWRlclwiIH0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICBhcHBseVRvVmFsdWVzOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiIH0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICBhcHBseVRvVG90YWw6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhcHBseVRvVG90YWxcIiB9LCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheVVuaXRzOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZGlzcGxheVVuaXRzXCIgfSwgMCksXHJcbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXM6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkZWNpbWFsUGxhY2VzXCIgfSwgMSksXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJmb250RmFtaWx5XCIgfSwgdW5kZWZpbmVkKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZm9udFNpemVcIiB9LCB1bmRlZmluZWQpIGFzIG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgYm9sZDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImJvbGRcIiB9LCB1bmRlZmluZWQpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGl0YWxpYzogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcIml0YWxpY1wiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwidW5kZXJsaW5lXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRXcmFwXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBtZWFzdXJlU2V0dGluZ3NMaXN0LnB1c2goc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYXlOYW1lID0gdmFsdWVDb2x1bW4uc291cmNlLmRpc3BsYXlOYW1lIHx8IGBNZWFzdXJlICR7bWVhc3VyZUhlYWRlcnMubGVuZ3RoICsgMX1gO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVycy5wdXNoKGRpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlOYW1lID0gdmFsdWVDb2x1bW4uc291cmNlLnF1ZXJ5TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uV2lkdGhzLnB1c2goY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWNXaWR0aCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCBcclxuICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY29sdW1uV2lkdGhcIiwgcHJvcGVydHlOYW1lOiBcInZhbHVlQ29sdW1uV2lkdGhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3MudmFsdWVDb2x1bW5XaWR0aC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uV2lkdGhzLnB1c2goc3BlY2lmaWNXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHBlci1tZWFzdXJlIHdpZHRoIHNsaWNlIHdpdGggc2VsZWN0b3Igc28gUG93ZXIgQkkgcGVyc2lzdHMgaXQgcGVyLW1lYXN1cmVcclxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFdpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNwZWNpZmljV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgZHluYW1pYyBzZXR0aW5ncyBzbGljZSBmb3IgdGhpcyBtZWFzdXJlXHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFsdWVDRlNldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFRleHQgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7IHZhbHVlOiBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfSxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGF0YSBiYXJzIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3dEYXRhQmFyc1wiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpdmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwicG9zaXRpdmVDb2xvclwiIH0sIFwiIzMxYjZmZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmVnYXRpdmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibmVnYXRpdmVDb2xvclwiIH0sIFwiI2Q5NjU3MFwiKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93RGF0YUJhcnNcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFNob3cgRGF0YSBCYXJzXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd0RhdGFCYXJzLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc2hvd0RhdGFCYXJzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG9zaXRpdmVDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFBvc2l0aXZlIENvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IHBvc2l0aXZlQ29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5lZ2F0aXZlQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBOZWdhdGl2ZSBDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IHZhbHVlOiBuZWdhdGl2ZUNvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF0YUJhckhlaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIERhdGEgQmFyIEhlaWdodCAoJSlcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YUJhckhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEYXRhIGJhciBtYXJrZXJzIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaXplXCIgfSwgMTApO1xyXG5cclxuICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dNYXJrZXJcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFNob3cgTWFya2VyXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd01hcmtlcixcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3dNYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlSXRlbXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJjcm9zc1wiLCBkaXNwbGF5TmFtZTogXCJDcm9zc1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJjaXJjbGVcIiwgZGlzcGxheU5hbWU6IFwiQ2lyY2xlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcImhvcml6b250YWxMaW5lXCIsIGRpc3BsYXlOYW1lOiBcIkhvcml6b250YWwgTGluZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJ2ZXJ0aWNhbExpbmVcIiwgZGlzcGxheU5hbWU6IFwiVmVydGljYWwgTGluZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJzZW1pQ2lyY2xlXCIsIGRpc3BsYXlOYW1lOiBcIlNlbWkgQ2lyY2xlXCIgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGFwZUl0ZW0gPSBtYXJrZXJTaGFwZUl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBtYXJrZXJTaGFwZSkgfHwgbWFya2VyU2hhcGVJdGVtc1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtlclNoYXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWFya2VyIFNoYXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRTaGFwZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IG1hcmtlclNoYXBlSXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhQmFyTWFya2Vyc1NldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2VyQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBNYXJrZXIgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeyB2YWx1ZTogbWFya2VyQ29sb3IgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXJrZXJTaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWFya2VyIFNpemVcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWFya2VyU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxldCB0b3RhbEJlaGF2aW9yUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInRvdGFsc1wiLCBwcm9wZXJ0eU5hbWU6IFwidG90YWxCZWhhdmlvclwiIH0sIFwiU3VtXCIpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRvdGFsQmVoYXZpb3JWYWwgPSB0eXBlb2YgdG90YWxCZWhhdmlvclJhdyA9PT0gXCJzdHJpbmdcIiA/IHRvdGFsQmVoYXZpb3JSYXcgOiAodG90YWxCZWhhdmlvclJhdy52YWx1ZSB8fCBcIlN1bVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgdG90YWxCZWhhdmlvckl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIk1lYXN1cmVcIiwgZGlzcGxheU5hbWU6IFwiTWVhc3VyZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiU3VtXCIsIGRpc3BsYXlOYW1lOiBcIlN1bVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiQXZlcmFnZVwiLCBkaXNwbGF5TmFtZTogXCJBdmVyYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJDb3VudFwiLCBkaXNwbGF5TmFtZTogXCJDb3VudFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnQgRGlzdGluY3RcIiwgZGlzcGxheU5hbWU6IFwiQ291bnQgRGlzdGluY3RcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIk1heFwiLCBkaXNwbGF5TmFtZTogXCJNYXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIk1pblwiLCBkaXNwbGF5TmFtZTogXCJNaW5cIiB9XHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QmVoYXZpb3JJdGVtID0gdG90YWxCZWhhdmlvckl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSB0b3RhbEJlaGF2aW9yVmFsKSB8fCB0b3RhbEJlaGF2aW9ySXRlbXNbMV07XHJcblxyXG4gICAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnNsaWNlcy5zcGxpY2UobWVhc3VyZUhlYWRlcnMubGVuZ3RoLCAwLCBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG90YWxCZWhhdmlvclwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBNZWFzdXJlIFNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudEJlaGF2aW9ySXRlbSxcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHRvdGFsQmVoYXZpb3JJdGVtcyxcclxuICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgc3BlY2lmaWNDb2x1bW4gc2VyaWVzIGRyb3Bkb3duIGFuZCByZWJ1aWxkIHZhbHVlIHNsaWNlcyB3aXRoIHBlci1tZWFzdXJlIHNlbGVjdG9yXHJcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbHVtblNldHRpbmdzID0gdGhpcy52aXN1YWxTZXR0aW5ncy5zcGVjaWZpY0NvbHVtbjtcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLml0ZW1zID0gbWVhc3VyZUhlYWRlcnMubWFwKG5hbWUgPT4gKHsgdmFsdWU6IG5hbWUsIGRpc3BsYXlOYW1lOiBuYW1lIH0pKTtcclxuICAgICAgICAgIC8vIFJlYWQgcGVyc2lzdGVkIHNlcmllcyB2YWx1ZSBmcm9tIGRhdGFWaWV3IG1ldGFkYXRhIG9iamVjdHNcclxuICAgICAgICAgIGNvbnN0IHBlcnNpc3RlZFNlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInNlcmllc1wiIH0sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlZEl0ZW0gPSBwZXJzaXN0ZWRTZXJpZXNcclxuICAgICAgICAgICAgICA/IHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLml0ZW1zLmZpbmQoaSA9PiBpLnZhbHVlID09PSBwZXJzaXN0ZWRTZXJpZXMpXHJcbiAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMudmFsdWUgPSBtYXRjaGVkSXRlbSB8fCBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtc1swXSB8fCB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9O1xyXG5cclxuICAgICAgICAgIC8vIEZpbmQgdGhlIHF1ZXJ5TmFtZSBmb3IgdGhlIHNlbGVjdGVkIG1lYXN1cmUgc28gc2xpY2VzIHBlcnNpc3QgdG8gdGhlIGNvcnJlY3QgcGVyLW1lYXN1cmUgb2JqZWN0c1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTZXJpZXNOYW1lID0gc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMudmFsdWU/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTWVhc3VyZUlkeCA9IG1lYXN1cmVIZWFkZXJzLmluZGV4T2Yoc2VsZWN0ZWRTZXJpZXNOYW1lKTtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVDb2x1bW4gPSBzZWxlY3RlZE1lYXN1cmVJZHggPj0gMCA/IHZhbHVlc1tzZWxlY3RlZE1lYXN1cmVJZHhdIDogbnVsbDtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUXVlcnlOYW1lID0gc2VsZWN0ZWRWYWx1ZUNvbHVtbj8uc291cmNlPy5xdWVyeU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdHMgPSBzZWxlY3RlZFZhbHVlQ29sdW1uPy5zb3VyY2U/Lm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdGVkUXVlcnlOYW1lID8geyBtZXRhZGF0YTogc2VsZWN0ZWRRdWVyeU5hbWUgfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAvLyBSZWFkIGN1cnJlbnQgcGVyLW1lYXN1cmUgdmFsdWVzIGZvciB0aGUgc2VsZWN0ZWQgY29sdW1uXHJcbiAgICAgICAgICBjb25zdCBzY1RleHRDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Ioc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0JnQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBbHRUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbHRlcm5hdGVUZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBbHRCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQXBwbHlUb0hlYWRlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb0hlYWRlclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBcHBseVRvVmFsdWVzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhcHBseVRvVmFsdWVzXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCBzY0FwcGx5VG9Ub3RhbCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1RvdGFsXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCBzY0ZvbnRGYW1pbHkgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZm9udEZhbWlseVwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0ZvbnRTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRTaXplXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQm9sZCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYm9sZFwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0l0YWxpYyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiaXRhbGljXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjVW5kZXJsaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ1bmRlcmxpbmVcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBbGlnbm1lbnQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWxpZ25tZW50XCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjRGlzcGxheVVuaXRzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRpc3BsYXlVbml0c1wiIH0sIDApO1xyXG4gICAgICAgICAgY29uc3Qgc2NEZWNpbWFsUGxhY2VzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRlY2ltYWxQbGFjZXNcIiB9LCAxKTtcclxuICAgICAgICAgIGNvbnN0IHNjVGV4dFdyYXAgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInRleHRXcmFwXCIgfSwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAvLyBSZWJ1aWxkIHRoZSBhcHBseVNldHRpbmdzR3JvdXAgc2xpY2VzIHdpdGggc2VsZWN0b3JzXHJcbiAgICAgICAgICBzcGVjaWZpY0NvbHVtblNldHRpbmdzLmFwcGx5U2V0dGluZ3NHcm91cC5zbGljZXMgPSBbXHJcbiAgICAgICAgICAgICAgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMsXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImFwcGx5VG9IZWFkZXJcIiwgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gaGVhZGVyXCIsIHZhbHVlOiBzY0FwcGx5VG9IZWFkZXIsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJhcHBseVRvVG90YWxcIiwgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gdG90YWxcIiwgdmFsdWU6IHNjQXBwbHlUb1RvdGFsLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiLCBkaXNwbGF5TmFtZTogXCJBcHBseSB0byB2YWx1ZXNcIiwgdmFsdWU6IHNjQXBwbHlUb1ZhbHVlcywgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSlcclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgLy8gUmVidWlsZCB0aGUgdmFsdWVzR3JvdXAgc2xpY2VzIHdpdGggcGVyLW1lYXN1cmUgc2VsZWN0b3JzXHJcbiAgICAgICAgICBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnZhbHVlc0dyb3VwLnNsaWNlcyA9IFtcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnRcIixcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHsgbmFtZTogXCJmb250RmFtaWx5XCIsIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsIHZhbHVlOiBzY0ZvbnRGYW1pbHkgfHwgXCJBcmlhbCwgc2Fucy1zZXJpZlwiLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJmb250U2l6ZVwiLCBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIiwgdmFsdWU6IHNjRm9udFNpemUgPz8gMTIsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiYm9sZFwiLCBkaXNwbGF5TmFtZTogXCJCb2xkXCIsIHZhbHVlOiBzY0JvbGQgPz8gZmFsc2UsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJpdGFsaWNcIiwgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsIHZhbHVlOiBzY0l0YWxpYyA/PyBmYWxzZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcInVuZGVybGluZVwiLCBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIiwgdmFsdWU6IHNjVW5kZXJsaW5lID8/IGZhbHNlLCBzZWxlY3RvciB9KVxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcInRleHRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBzY1RleHRDb2xvciB8fCBcIiMwMGI4ZDRcIiB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLCB2YWx1ZTogeyB2YWx1ZTogc2NCZ0NvbG9yIHx8IFwiI2ZmZmZmZlwiIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgdGV4dCBjb2xvclwiLCB2YWx1ZTogeyB2YWx1ZTogc2NBbHRUZXh0Q29sb3IgfHwgXCIjMzMzMzMzXCIgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSBiYWNrZ3JvdW5kIGNvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBzY0FsdEJnQ29sb3IgfHwgXCIjZjVmNWY1XCIgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BbGlnbm1lbnRHcm91cCh7IG5hbWU6IFwiYWxpZ25tZW50XCIsIGRpc3BsYXlOYW1lOiBcIkFsaWdubWVudFwiLCB2YWx1ZTogc2NBbGlnbm1lbnQgfHwgXCJsZWZ0XCIsIG1vZGU6IHBvd2VyYmkudmlzdWFscy5BbGlnbm1lbnRHcm91cE1vZGUuSG9yaXpvbmFsLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkF1dG9Ecm9wZG93bih7IG5hbWU6IFwiZGlzcGxheVVuaXRzXCIsIGRpc3BsYXlOYW1lOiBcIkRpc3BsYXkgdW5pdHNcIiwgdmFsdWU6IHNjRGlzcGxheVVuaXRzLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7IG5hbWU6IFwiZGVjaW1hbFBsYWNlc1wiLCBkaXNwbGF5TmFtZTogXCJWYWx1ZSBkZWNpbWFsIHBsYWNlc1wiLCB2YWx1ZTogc2NEZWNpbWFsUGxhY2VzLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwidGV4dFdyYXBcIiwgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsIHZhbHVlOiBzY1RleHRXcmFwID8/IGZhbHNlLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KVxyXG4gICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAvLyBDb21wdXRlIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZGF0YSBiYXJzIEFORCBDYWxjdWxhdGUgdG90YWxzIGJhc2VkIG9uIHNlbGVjdGlvblxyXG4gICAgICAgICAgbGV0IG1lYXN1cmVNaW5zOiBudW1iZXJbXSA9IG5ldyBBcnJheSh2YWx1ZXMubGVuZ3RoKS5maWxsKDApO1xyXG4gICAgICAgICAgbGV0IG1lYXN1cmVNYXhzOiBudW1iZXJbXSA9IG5ldyBBcnJheSh2YWx1ZXMubGVuZ3RoKS5maWxsKDApO1xyXG4gICAgICAgICAgbGV0IHRvdGFsczogbnVtYmVyW10gPSBuZXcgQXJyYXkodmFsdWVzLmxlbmd0aCkuZmlsbCgwKTtcclxuXHJcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWVDb2x1bW4sIG1lYXN1cmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtVmFsdWVzID0gdmFsdWVDb2x1bW4udmFsdWVzLmZpbHRlcih2ID0+IHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKS5tYXAodiA9PiBOdW1iZXIodikpO1xyXG4gICAgICAgICAgICBpZiAobnVtVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF0gPSBNYXRoLm1pbigwLCAuLi5udW1WYWx1ZXMpOyAvLyBTdGFuZGFyZCBkYXRhIGJhcnMgYW5jaG9yIHRvIDBcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF0gPSBNYXRoLm1heCgwLCAuLi5udW1WYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEJlaGF2aW9yUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInRvdGFsc1wiLCBwcm9wZXJ0eU5hbWU6IFwidG90YWxCZWhhdmlvclwiIH0sIFwiU3VtXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEJlaGF2aW9yID0gdHlwZW9mIHRvdGFsQmVoYXZpb3JSYXcgPT09IFwic3RyaW5nXCIgPyB0b3RhbEJlaGF2aW9yUmF3IDogKHRvdGFsQmVoYXZpb3JSYXcudmFsdWUgfHwgXCJTdW1cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIlN1bVwiIHx8IHRvdGFsQmVoYXZpb3IgPT09IFwiTWVhc3VyZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBudW1WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiQXZlcmFnZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBudW1WYWx1ZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBudW1WYWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3RhbEJlaGF2aW9yID09PSBcIkNvdW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG51bVZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiQ291bnQgRGlzdGluY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gbmV3IFNldChudW1WYWx1ZXMpLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiTWF4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWF4KC4uLm51bVZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiTWluXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWluKC4uLm51bVZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFzd2l0Y2hWYWx1ZXNUb1Jvd3MpIHtcclxuICAgICAgICAgICAgLy8gTm9ybWFsIGhvcml6b250YWwgdGFibGUgc3RydWN0dXJlXHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJSb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1yb3cnO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuaGVpZ2h0ID0gYCR7aGVhZGVyUm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyQmdDb2xvciA9IGhlYWRlckJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBjYXRlZ29yeSBjb2x1bW4gaGVhZGVyIGlmIGNhdGVnb3JpZXMgZXhpc3RcclxuICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXMuc291cmNlLmRpc3BsYXlOYW1lIHx8ICdDYXRlZ29yeSc7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0ZWdvcnlIZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgaGVhZGVyRm9udFNpemUsIGhlYWRlcldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGhlYWRlclVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgbWVhc3VyZSBjb2x1bW4gaGVhZGVyc1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVycy5mb3JFYWNoKChkaXNwbGF5TmFtZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IGhlYWRlckJvbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogaGVhZGVySXRhbGljO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IGhlYWRlclVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIGxldCBlZkZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IGhlYWRlckZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IGhlYWRlcldvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLnRleHRDb2xvciA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2lkeF19cHhgO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaWR4XX1weGA7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpZHhdfXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBlZkZvbnRTaXplLCBlZldvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudGV4dEFsaWduID0gZWZmZWN0aXZlQWxpZ247XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGRhdGEgcm93c1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLXJvdyc7XHJcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGFsdGVybmF0aW5nIGJhY2tncm91bmQgY29sb3JzIHdpdGggc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNFdmVuUm93ID0gaSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dIZWlnaHQgPSBpc0V2ZW5Sb3cgPyB2YWx1ZVJvd0hlaWdodCA6IGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dCZ0NvbG9yID0gZ2V0Um93QmFja2dyb3VuZENvbG9yKGksIGlzRXZlblJvdywgZGF0YVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGNhdGVnb3J5IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC50ZXh0Q29udGVudCA9IFN0cmluZyhjYXRlZ29yaWVzLnZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1jYXRlZ29yeS1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRlZ29yeUNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCBjYXRlZ29yeVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmNvbG9yID0gZ2V0Q2F0ZWdvcnlUZXh0Q29sb3IoaSwgZGF0YVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGNhdGVnb3J5V29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBtZWFzdXJlIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlQ29sdW1uLCBtZWFzdXJlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgaXNFdmVuUm93ICE9PSAndW5kZWZpbmVkJykgPyAoaXNFdmVuUm93ID8gdGV4dENvbG9yIDogYWx0ZXJuYXRlVGV4dENvbG9yKSA6IHRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsVGV4dENvbG9yID0gZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZkNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRleHRDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxUZXh0Q29sb3IgPSBjZkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVDb2x1bW4udmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIGZvciBkYXRhIGJhciBwb3NpdGlvbmluZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IG51bVZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93RGF0YUJhcnMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dEYXRhQmFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxQb3NpdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJwb3NpdGl2ZUNvbG9yXCIgfSwgXCIjMzFiNmZkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxOZWdhdGl2ZUNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJuZWdhdGl2ZUNvbG9yXCIgfSwgXCIjZDk2NTcwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUJhckhlaWdodCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJIZWlnaHRcIiB9LCA4MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluID0gbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdpZHRoIHBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aFBjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFBjdCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKG51bVZhbHVlIC8gcmFuZ2UpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKCgwIC0gbWluKSAvIHJhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9IChNYXRoLmFicyhudW1WYWx1ZSkgLyByYW5nZSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKG51bVZhbHVlIC0gbWluKSAvIHJhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRhdGEgYmFyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcFBjdCA9ICgxMDAgLSBkYXRhQmFySGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnRvcCA9IGAke3RvcFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuaGVpZ2h0ID0gYCR7ZGF0YUJhckhlaWdodH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUubGVmdCA9IGAke2xlZnRQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGhQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG51bVZhbHVlID49IDAgPyBjZWxsUG9zaXRpdmVDb2xvciA6IGNlbGxOZWdhdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjsgLy8gc2VtaS10cmFuc3BhcmVudCBzbyB0ZXh0IGlzIHJlYWRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkYXRhQmFyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbE1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmTWFya2VyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxNYXJrZXJDb2xvciA9IGNmTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuekluZGV4ID0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlckxlZnRQY3QgPSBudW1WYWx1ZSA+PSAwID8gbGVmdFBjdCArIHdpZHRoUGN0IDogbGVmdFBjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBgY2FsYyg1MCUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IGAke21hcmtlclNpemV9cHhgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFya2VyU2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjcm9zc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDQ1ZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTQ1ZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImhvcml6b250YWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInZlcnRpY2FsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAxcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInNlbWlDaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcmF3IHNlbWkgY2lyY2xlIHBvaW50aW5nIG91dHdhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIHZhbHVlV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gY2VsbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNlbGxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGNlbGxUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNSb3dCZ0NvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogcm93QmdDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY0NlbGxUZXh0Q29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNSb3dCZ0NvbG9yIDogcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNDZWxsVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHZhbHVlQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogY2VsbEl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogY2VsbFVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogY2VsbEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IGNlbGxGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdmFsdWVXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmZmVjdGl2ZUJnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IGAke2VmRm9udFNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGVmV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkgeyAvLyBhbmQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdG90YWwgcm93XHJcbiAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbFJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFJvdy5jbGFzc05hbWUgPSAndGFibGUtdG90YWwtcm93JztcclxuICAgICAgICAgICAgdG90YWxSb3cuc3R5bGUuYm9yZGVyVG9wID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICB0b3RhbFJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIHRvdGFsUm93LnN0eWxlLmhlaWdodCA9IGAke3RvdGFsUm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxCZ0NvbG9yID0gdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsTGFiZWxDZWxsID0gdG90YWxSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwudGV4dENvbnRlbnQgPSAnVG90YWwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLXRvdGFsLWxhYmVsLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2godG90YWxMYWJlbENlbGwsIHRvdGFsUm93SGVpZ2h0LCB0b3RhbFJvd0ZvbnRTaXplLCB0b3RhbFJvd1dvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB0b3RhbFJvd0JvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRvdGFsUm93VW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZm9udEZhbWlseSA9IHRvdGFsUm93Rm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmZvbnRTdHlsZSA9IHRvdGFsUm93SXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvdGFsQmdDb2xvcjsgdG90YWxMYWJlbENlbGwuc3R5bGUuY29sb3IgPSB0b3RhbFJvd1RleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSB0b3RhbFJvd1dvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxSb3dXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsTGFiZWxDZWxsID0gdG90YWxSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwudGV4dENvbnRlbnQgPSAnVG90YWwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0b3RhbHMuZm9yRWFjaCgodG90YWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IHRvdGFsUm93QmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dENvbG9yID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB0b3RhbFJvd0JvbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiB0b3RhbFJvd0l0YWxpYztcclxuICAgICAgICAgICAgICAgIGxldCBlZlVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IHRvdGFsUm93VW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogdG90YWxSb3dGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgIGxldCBlZldvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHRvdGFsUm93V29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRvdGFsUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0b3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLXRvdGFsLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgdG90YWxSb3dIZWlnaHQsIGVmRm9udFNpemUsIGVmV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgIGlmIChlZldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzd2l0Y2hWYWx1ZXNUb1Jvd3MgSVMgVFJVRSAoVHJhbnNwb3NlIGxheW91dClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBIZWFkZXIgUm93XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJSb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1yb3cnO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuaGVpZ2h0ID0gYCR7aGVhZGVyUm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyQmdDb2xvciA9IGhlYWRlckJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpcnN0IGhlYWRlciBpcyBcIk1lYXN1cmVcIlxyXG4gICAgICAgICAgICBsZXQgbWVhc3VyZUhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lYXN1cmVcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBhcHBseVJvd1NxdWFzaChtZWFzdXJlSGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBOZXh0IGhlYWRlcnMgYXJlIENhdGVnb3J5IHZhbHVlcyAob3IganVzdCBcIlZhbHVlXCIgaWYgbm8gY2F0ZWdvcmllcylcclxuICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci50ZXh0Q29udGVudCA9IFN0cmluZyhjYXRlZ29yaWVzLnZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0SGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIudGV4dENvbnRlbnQgPSBcIlZhbHVlXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNhdEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBSb3dzIChlYWNoIHJvdyBpcyBhIE1lYXN1cmUpXHJcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbiwgbWVhc3VyZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1yb3cnO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlblJvdyA9IG1lYXN1cmVJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dIZWlnaHQgPSBpc0V2ZW5Sb3cgPyB2YWx1ZVJvd0hlaWdodCA6IGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dCZ0NvbG9yID0gaXNFdmVuUm93ID8gYmFja2dyb3VuZENvbG9yIDogYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2VsbCAxOiBNZWFzdXJlIE5hbWVcclxuICAgICAgICAgICAgICAgIGxldCBtZWFzdXJlTmFtZUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnRleHRDb250ZW50ID0gbWVhc3VyZUhlYWRlcnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5jbGFzc05hbWUgPSAndGFibGUtY2F0ZWdvcnktY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChtZWFzdXJlTmFtZUNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCBjYXRlZ29yeVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWVCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGNlbGxJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNlbGxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5jb2xvciA9IGRlZmF1bHRDYXRlZ29yeVRleHRDb2xvcjsgLy8gb3Igc29tZSBzcGVjaWZpYyBjb2xvclxyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGNhdGVnb3J5V29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeVdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBpc0V2ZW5Sb3cgIT09ICd1bmRlZmluZWQnKSA/IChpc0V2ZW5Sb3cgPyB0ZXh0Q29sb3IgOiBhbHRlcm5hdGVUZXh0Q29sb3IpIDogdGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RzID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93RGF0YUJhcnMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcInNob3dNYXJrZXJcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsUG9zaXRpdmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwicG9zaXRpdmVDb2xvclwiIH0sIFwiIzMxYjZmZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsTmVnYXRpdmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibmVnYXRpdmVDb2xvclwiIH0sIFwiI2Q5NjU3MFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YSBDZWxsczogVmFsdWVzIGZvciBlYWNoIGNhdGVnb3J5IChvciB0aGUgMSB2YWx1ZSBpZiBubyBjYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0Q29sb3IgPSBkZWZhdWx0TWVhc3VyZVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZDb2xvcikgY2VsbFRleHRDb2xvciA9IGNmQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZlBvc0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJwb3NpdGl2ZUNvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZQb3NDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFBvc2l0aXZlQ29sb3IgPSBjZlBvc0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZUNvbHVtbi52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bVZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBudW1WYWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3dEYXRhQmFyc1wiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93RGF0YUJhcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsUG9zaXRpdmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwicG9zaXRpdmVDb2xvclwiIH0sIFwiIzMxYjZmZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTmVnYXRpdmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibmVnYXRpdmVDb2xvclwiIH0sIFwiI2Q5NjU3MFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IG1lYXN1cmVNaW5zW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtZWFzdXJlTWF4c1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBwZXJjZW50YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhQY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRQY3QgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9IChudW1WYWx1ZSAvIHJhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFBjdCA9ICgoMCAtIG1pbikgLyByYW5nZSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhQY3QgPSAoTWF0aC5hYnMobnVtVmFsdWUpIC8gcmFuZ2UpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKChudW1WYWx1ZSAtIG1pbikgLyByYW5nZSkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkYXRhIGJhciBkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3BQY3QgPSAoMTAwIC0gZGF0YUJhckhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS50b3AgPSBgJHt0b3BQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmhlaWdodCA9IGAke2RhdGFCYXJIZWlnaHR9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0UGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS53aWR0aCA9IGAke3dpZHRoUGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBudW1WYWx1ZSA+PSAwID8gY2VsbFBvc2l0aXZlQ29sb3IgOiBjZWxsTmVnYXRpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7IC8vIHNlbWktdHJhbnNwYXJlbnQgc28gdGV4dCBpcyByZWFkYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZGF0YUJhcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd01hcmtlciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcInNob3dNYXJrZXJcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd01hcmtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXJTaGFwZVJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2hhcGVcIiB9LCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNpemUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNpemVcIiB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZk1hcmtlckNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsTWFya2VyQ29sb3IgPSBjZk1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnpJbmRleCA9IFwiM1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXJMZWZ0UGN0ID0gbnVtVmFsdWUgPj0gMCA/IGxlZnRQY3QgKyB3aWR0aFBjdCA6IGxlZnRQY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUudG9wID0gYGNhbGMoNTAlIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlclNoYXBlID09PSBcImNpcmNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwiY3Jvc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NWRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKC00NWRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hcHBlbmRDaGlsZChsaW5lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hcHBlbmRDaGlsZChsaW5lMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJob3Jpem9udGFsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJ2ZXJ0aWNhbExpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gMXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJzZW1pQ2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhdyBzZW1pIGNpcmNsZSBwb2ludGluZyBvdXR3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemUgLyAyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnpJbmRleCA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNlbGwsIHJvd0hlaWdodCwgY2VsbEZvbnRTaXplLCB2YWx1ZVdvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGNlbGxJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBjZWxsVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBjZWxsVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjUm93QmdDb2xvciA9IGlzRXZlblJvdyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IHJvd0JnQ29sb3IpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yIDogcm93QmdDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNDZWxsVGV4dENvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MudGV4dENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogY2VsbFRleHRDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgPyBzcGVjUm93QmdDb2xvciA6IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgPyBzcGVjQ2VsbFRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB2YWx1ZUJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmSXRhbGljID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IGNlbGxJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVW5kZXJsaW5lID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IGNlbGxVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IGNlbGxGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkZvbnRTaXplID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiBjZWxsRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmV29yZFdyYXAgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHZhbHVlV29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUFsaWduID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZmZlY3RpdmVCZztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gZWZJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFNpemUgPSBgJHtlZkZvbnRTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dEFsaWduID0gZWZmZWN0aXZlQWxpZ247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVmV29yZFdyYXApIHsgLy8gYW5kIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgVG90YWwgY29sdW1uIGNlbGwgZm9yIHRoaXMgbWVhc3VyZSBpZiBlbmFibGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1RvdGFsUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsVmFsID0gdG90YWxzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnRleHRDb250ZW50ID0gdG90YWxWYWwudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1kYXRhLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB0b3RhbFJvd0JvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiB0b3RhbFJvd0l0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbFVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IHRvdGFsUm93VW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogdG90YWxSb3dGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbFdvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHRvdGFsUm93V29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiB0b3RhbFJvd0JhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbENvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dENvbG9yID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKHRvdGFsQ2VsbCwgcm93SGVpZ2h0LCBlZlRvdGFsRm9udFNpemUsIGVmVG90YWxXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZlRvdGFsQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuZm9udEZhbWlseSA9IGVmVG90YWxGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZlRvdGFsSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZUb3RhbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSBgMXB4IHNvbGlkICR7Z3JpZEJvcmRlckNvbG9yfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmVG90YWxCZztcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuY29sb3IgPSBlZlRvdGFsQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmVG90YWxBbGlnbjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBlZlRvdGFsV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWZUb3RhbFdvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gbnVsbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciB0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICd0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHJyxcbiAgICBkaXNwbGF5TmFtZTogJ1RpbVRhYmxlJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJ0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHXCJdID0gdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRztcbn1cbmV4cG9ydCBkZWZhdWx0IHRpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==