var timTableDD1AB490372C46B5A64605746E322F55_DEBUG;
/******/
( () => {
    // webpackBootstrap
    /******/
    "use strict";
    /******/
    var __webpack_modules__ = ({

        /***/
        "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js": /*!********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js ***!
  \********************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                getFillColorByPropertyName: () => (/* binding */
                getFillColorByPropertyName),
                /* harmony export */
                getValue: () => (/* binding */
                getValue)/* harmony export */
            });
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

            /***/
        }
        ),

        /***/
        "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js": /*!*********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js ***!
  \*********************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                getCommonValue: () => (/* binding */
                getCommonValue),
                /* harmony export */
                getFillColor: () => (/* binding */
                getFillColor),
                /* harmony export */
                getObject: () => (/* binding */
                getObject),
                /* harmony export */
                getValue: () => (/* binding */
                getValue)/* harmony export */
            });
            /* harmony import */
            var _dataViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataViewObject */
            "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObject.js");

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
                if (value === undefined || value === null || (typeof value === "object" && !value.solid)) {
                    return defaultValue;
                }
                return value;
            }
            //# sourceMappingURL=dataViewObjects.js.map

            /***/
        }
        ),

        /***/
        "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js": /*!**********************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js ***!
  \**********************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                createDataViewWildcardSelector: () => (/* binding */
                createDataViewWildcardSelector)/* harmony export */
            });
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
                    dataViewWildcardMatchingOption = 0 /* DataViewWildcardMatchingOption.InstancesAndTotals */
                    ;
                }
                const selector = {
                    data: [{
                        dataViewWildcard: {
                            matchingOption: dataViewWildcardMatchingOption
                        }
                    }]
                };
                return selector;
            }
            //# sourceMappingURL=dataViewWildcard.js.map

            /***/
        }
        ),

        /***/
        "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js": /*!************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js ***!
  \************************************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                AlignmentGroup: () => (/* binding */
                AlignmentGroup),
                /* harmony export */
                AutoDropdown: () => (/* binding */
                AutoDropdown),
                /* harmony export */
                AutoFlagsSelection: () => (/* binding */
                AutoFlagsSelection),
                /* harmony export */
                CardGroupEntity: () => (/* binding */
                CardGroupEntity),
                /* harmony export */
                ColorPicker: () => (/* binding */
                ColorPicker),
                /* harmony export */
                CompositeCard: () => (/* binding */
                CompositeCard),
                /* harmony export */
                CompositeSlice: () => (/* binding */
                CompositeSlice),
                /* harmony export */
                Container: () => (/* binding */
                Container),
                /* harmony export */
                ContainerItem: () => (/* binding */
                ContainerItem),
                /* harmony export */
                DatePicker: () => (/* binding */
                DatePicker),
                /* harmony export */
                DurationPicker: () => (/* binding */
                DurationPicker),
                /* harmony export */
                ErrorRangeControl: () => (/* binding */
                ErrorRangeControl),
                /* harmony export */
                FieldPicker: () => (/* binding */
                FieldPicker),
                /* harmony export */
                FontControl: () => (/* binding */
                FontControl),
                /* harmony export */
                FontPicker: () => (/* binding */
                FontPicker),
                /* harmony export */
                GradientBar: () => (/* binding */
                GradientBar),
                /* harmony export */
                Group: () => (/* binding */
                Group),
                /* harmony export */
                ImageUpload: () => (/* binding */
                ImageUpload),
                /* harmony export */
                ItemDropdown: () => (/* binding */
                ItemDropdown),
                /* harmony export */
                ItemFlagsSelection: () => (/* binding */
                ItemFlagsSelection),
                /* harmony export */
                ListEditor: () => (/* binding */
                ListEditor),
                /* harmony export */
                MarginPadding: () => (/* binding */
                MarginPadding),
                /* harmony export */
                Model: () => (/* binding */
                Model),
                /* harmony export */
                NumUpDown: () => (/* binding */
                NumUpDown),
                /* harmony export */
                ReadOnlyText: () => (/* binding */
                ReadOnlyText),
                /* harmony export */
                ShapeMapSelector: () => (/* binding */
                ShapeMapSelector),
                /* harmony export */
                SimpleCard: () => (/* binding */
                SimpleCard),
                /* harmony export */
                SimpleSlice: () => (/* binding */
                SimpleSlice),
                /* harmony export */
                Slider: () => (/* binding */
                Slider),
                /* harmony export */
                TextArea: () => (/* binding */
                TextArea),
                /* harmony export */
                TextInput: () => (/* binding */
                TextInput),
                /* harmony export */
                ToggleSwitch: () => (/* binding */
                ToggleSwitch)/* harmony export */
            });
            /* harmony import */
            var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/FormattingSettingsUtils */
            "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js");
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
                    return Object.assign(Object.assign({}, componentDisplayName), {
                        control: {
                            type: controlType,
                            properties: this.getFormattingComponent(objectName, localizationManager)
                        }
                    });
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
                    this.type = "AlignmentGroup"/* visuals.FormattingComponent.AlignmentGroup */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        mode: this.mode,
                        supportsNoSelection: this.supportsNoSelection
                    });
                }
            }
            class ToggleSwitch extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "ToggleSwitch"/* visuals.FormattingComponent.ToggleSwitch */
                    ;
                }
            }
            class ColorPicker extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "ColorPicker"/* visuals.FormattingComponent.ColorPicker */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        defaultColor: this.defaultColor,
                        isNoFillItemSupported: this.isNoFillItemSupported
                    });
                }
            }
            class NumUpDown extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "NumUpDown"/* visuals.FormattingComponent.NumUpDown */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        options: this.options
                    });
                }
            }
            class Slider extends NumUpDown {
                constructor() {
                    super(...arguments);
                    this.type = "Slider"/* visuals.FormattingComponent.Slider */
                    ;
                }
            }
            class DatePicker extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "DatePicker"/* visuals.FormattingComponent.DatePicker */
                    ;
                }
                getFormattingComponent(objectName, localizationManager) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder,
                        validators: this.validators
                    });
                }
            }
            class ItemDropdown extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "Dropdown"/* visuals.FormattingComponent.Dropdown */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        items: this.items
                    });
                }
            }
            class AutoDropdown extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "Dropdown"/* visuals.FormattingComponent.Dropdown */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        mergeValues: this.mergeValues,
                        filterValues: this.filterValues
                    });
                }
            }
            class DurationPicker extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "DurationPicker"/* visuals.FormattingComponent.DurationPicker */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        validators: this.validators
                    });
                }
            }
            class ErrorRangeControl extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "ErrorRangeControl"/* visuals.FormattingComponent.ErrorRangeControl */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        validators: this.validators
                    });
                }
            }
            class FieldPicker extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "FieldPicker"/* visuals.FormattingComponent.FieldPicker */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        validators: this.validators,
                        allowMultipleValues: this.allowMultipleValues
                    });
                }
            }
            class ItemFlagsSelection extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "FlagsSelection"/* visuals.FormattingComponent.FlagsSelection */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        items: this.items
                    });
                }
            }
            class AutoFlagsSelection extends SimpleSlice {
                constructor() {
                    super(...arguments);
                    this.type = "FlagsSelection"/* visuals.FormattingComponent.FlagsSelection */
                    ;
                }
            }
            class TextInput extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "TextInput"/* visuals.FormattingComponent.TextInput */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        placeholder: this.placeholder
                    });
                }
            }
            class TextArea extends TextInput {
                constructor() {
                    super(...arguments);
                    this.type = "TextArea"/* visuals.FormattingComponent.TextArea */
                    ;
                }
            }
            class FontPicker extends SimpleSlice {
                constructor() {
                    super(...arguments);
                    this.type = "FontPicker"/* visuals.FormattingComponent.FontPicker */
                    ;
                }
            }
            class GradientBar extends SimpleSlice {
                constructor() {
                    super(...arguments);
                    this.type = "GradientBar"/* visuals.FormattingComponent.GradientBar */
                    ;
                }
            }
            class ImageUpload extends SimpleSlice {
                constructor() {
                    super(...arguments);
                    this.type = "ImageUpload"/* visuals.FormattingComponent.ImageUpload */
                    ;
                }
            }
            class ListEditor extends SimpleSlice {
                constructor() {
                    super(...arguments);
                    this.type = "ListEditor"/* visuals.FormattingComponent.ListEditor */
                    ;
                }
            }
            class ReadOnlyText extends SimpleSlice {
                constructor() {
                    super(...arguments);
                    this.type = "ReadOnlyText"/* visuals.FormattingComponent.ReadOnlyText */
                    ;
                }
            }
            class ShapeMapSelector extends SimpleSlice {
                constructor(object) {
                    super(object);
                    this.type = "ShapeMapSelector"/* visuals.FormattingComponent.ShapeMapSelector */
                    ;
                }
                getFormattingComponent(objectName) {
                    return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), {
                        isAzMapReferenceSelector: this.isAzMapReferenceSelector
                    });
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
                    return Object.assign(Object.assign({}, componentDisplayName), {
                        control: {
                            type: controlType,
                            properties: this.getFormattingComponent(objectName)
                        }
                    });
                }
            }
            class FontControl extends CompositeSlice {
                constructor(object) {
                    super(object);
                    this.type = "FontControl"/* visuals.FormattingComponent.FontControl */
                    ;
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
                    return this.fontFamily.getRevertToDefaultDescriptor(objectName).concat(this.fontSize.getRevertToDefaultDescriptor(objectName)).concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : []).concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : []).concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
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
                    this.type = "MarginPadding"/* visuals.FormattingComponent.MarginPadding */
                    ;
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
                    return this.left.getRevertToDefaultDescriptor(objectName).concat(this.right.getRevertToDefaultDescriptor(objectName)).concat(this.top.getRevertToDefaultDescriptor(objectName)).concat(this.bottom.getRevertToDefaultDescriptor(objectName));
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

            /***/
        }
        ),

        /***/
        "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js": /*!*********************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js ***!
  \*********************************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                FormattingSettingsService: () => (/* binding */
                FormattingSettingsService),
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)/* harmony export */
            });
            /* harmony import */
            var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */
            "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");

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
                        (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach( (card) => {
                            var _a;
                            if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard)
                                (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                            const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ? [card] : card.groups);
                            cardGroupInstances.forEach( (cardGroupInstance) => {
                                var _a, _b, _c, _d;
                                // Set current top level toggle value
                                (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                                (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach( (slice) => {
                                    slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                                }
                                );
                                (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach( (containerItem) => {
                                    var _a;
                                    (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach( (slice) => {
                                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                                    }
                                    );
                                }
                                );
                            }
                            );
                        }
                        );
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
                    formattingSettingsModel.cards.filter( ({visible=true}) => visible).forEach( (card) => {
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
                        const cardGroupInstances = (isSimpleCard ? [card].filter( ({visible=true}) => visible) : card.groups.filter( ({visible=true}) => visible));
                        cardGroupInstances.forEach( (cardGroupInstance) => {
                            const groupUid = cardGroupInstance.name + "-group";
                            // Build formatting group for each group
                            const formattingGroup = {
                                displayName: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.displayNameKey) ? this.localizationManager.getDisplayName(cardGroupInstance.displayNameKey) : cardGroupInstance.displayName,
                                description: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.descriptionKey) ? this.localizationManager.getDisplayName(cardGroupInstance.descriptionKey) : cardGroupInstance.description,
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
                                    displayName: (this.localizationManager && container.displayNameKey) ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                                    description: (this.localizationManager && container.descriptionKey) ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                                    containerItems: [],
                                    uid: containerUid
                                };
                                container.containerItems.forEach( (containerItem) => {
                                    // Build formatting container item object
                                    const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                                    const containerItemUid = containerUid + containerIemName;
                                    const formattingContainerItem = {
                                        displayName: (this.localizationManager && containerItem.displayNameKey) ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                                        slices: [],
                                        uid: containerItemUid
                                    };
                                    // Build formatting slices and add them to current formatting container item
                                    this.buildFormattingSlices({
                                        slices: containerItem.slices,
                                        objectName,
                                        sliceNames,
                                        formattingSlices: formattingContainerItem.slices
                                    });
                                    formattingContainer.containerItems.push(formattingContainerItem);
                                }
                                );
                                formattingGroup.container = formattingContainer;
                            }
                            if (cardGroupInstance.slices) {
                                if (cardGroupInstance.topLevelSlice) {
                                    const topLevelToggleSlice = cardGroupInstance.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                                    topLevelToggleSlice.suppressDisplayName = true;
                                    (formattingGroup.displayName == undefined ? formattingCard : formattingGroup).topLevelToggle = topLevelToggleSlice;
                                }
                                // Build formatting slice for each property
                                this.buildFormattingSlices({
                                    slices: cardGroupInstance.slices,
                                    objectName,
                                    sliceNames,
                                    formattingSlices: formattingGroup.slices
                                });
                            }
                        }
                        );
                        formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
                        formattingModel.cards.push(formattingCard);
                    }
                    );
                    return formattingModel;
                }
                buildFormattingSlices({slices, objectName, sliceNames, formattingSlices}) {
                    // Filter slices based on their visibility
                    slices === null || slices === void 0 ? void 0 : slices.filter( ({visible=true}) => visible).forEach( (slice) => {
                        const formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
                        if (formattingSlice) {
                            // Modify formatting slice uid if needed
                            if (sliceNames[slice.name] === undefined) {
                                sliceNames[slice.name] = 0;
                            } else {
                                sliceNames[slice.name]++;
                                formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                            }
                            formattingSlices.push(formattingSlice);
                        }
                    }
                    );
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
                    const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ? [card].filter( ({visible=true}) => visible) : card.groups.filter( ({visible=true}) => visible));
                    cardGroupInstances.forEach( (cardGroupInstance) => {
                        var _a, _b;
                        cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
                        (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach( (containerItem) => {
                            cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
                        }
                        );
                        revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
                    }
                    );
                    return revertToDefaultDescriptors;
                }
                getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
                    let revertToDefaultDescriptors = [];
                    if (topLevelSlice) {
                        sliceNames[topLevelSlice.name] = true;
                        revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
                    }
                    slices === null || slices === void 0 ? void 0 : slices.forEach( (slice) => {
                        if (slice && !sliceNames[slice.name]) {
                            sliceNames[slice.name] = true;
                            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
                        }
                    }
                    );
                    return revertToDefaultDescriptors;
                }
            }
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
            //# sourceMappingURL=FormattingSettingsService.js.map

            /***/
        }
        ),

        /***/
        "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js": /*!*************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js ***!
  \*************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                FormattingSettingsService: () => (/* reexport safe */
                _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__["default"]),
                /* harmony export */
                formattingSettings: () => (/* reexport module object */
                _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)/* harmony export */
            });
            /* harmony import */
            var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */
            "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");
            /* harmony import */
            var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingSettingsService */
            "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js");

            //# sourceMappingURL=index.js.map

            /***/
        }
        ),

        /***/
        "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js": /*!*************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js ***!
  \*************************************************************************************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                getDescriptor: () => (/* binding */
                getDescriptor),
                /* harmony export */
                getPropertyValue: () => (/* binding */
                getPropertyValue)/* harmony export */
            });
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
                    return {
                        value: value === null || value === void 0 ? void 0 : value.solid.color
                    };
                }
                if ((slice === null || slice === void 0 ? void 0 : slice.type) === "Dropdown"/* visuals.FormattingComponent.Dropdown */
                && slice.items) {
                    const itemsArray = slice.items;
                    return itemsArray.find(item => item.value == value);
                }
                return value;
            }
            //# sourceMappingURL=FormattingSettingsUtils.js.map

            /***/
        }
        ),

        /***/
        "./src/settings.ts": /*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                CategoryConditionalFormattingSettings: () => (/* binding */
                CategoryConditionalFormattingSettings),
                /* harmony export */
                ColumnHeadersSettings: () => (/* binding */
                ColumnHeadersSettings),
                /* harmony export */
                ColumnWidthSettings: () => (/* binding */
                ColumnWidthSettings),
                /* harmony export */
                DataBarMarkersSettings: () => (/* binding */
                DataBarMarkersSettings),
                /* harmony export */
                DataBarsConditionalFormattingSettings: () => (/* binding */
                DataBarsConditionalFormattingSettings),
                /* harmony export */
                DataBarsFormattingSettings: () => (/* binding */
                DataBarsFormattingSettings),
                /* harmony export */
                GridSettings: () => (/* binding */
                GridSettings),
                /* harmony export */
                SpecificColumnSettings: () => (/* binding */
                SpecificColumnSettings),
                /* harmony export */
                TableSettings: () => (/* binding */
                TableSettings),
                /* harmony export */
                TotalsSettings: () => (/* binding */
                TotalsSettings),
                /* harmony export */
                ValueConditionalFormattingSettings: () => (/* binding */
                ValueConditionalFormattingSettings),
                /* harmony export */
                ValuesSettings: () => (/* binding */
                ValuesSettings),
                /* harmony export */
                VisualSettings: () => (/* binding */
                VisualSettings)/* harmony export */
            });
            /* harmony import */
            var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */
            "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
            /* harmony import */
            var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */
            "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewWildcard.js");
            /* harmony import */
            var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! powerbi-visuals-api */
            "powerbi-visuals-api");
            /* harmony import */
            var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/
            __webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_2__);

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
                    value: {
                        value: "#333333"
                    },
                    visible: true
                });
                backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "backgroundColor",
                    displayName: "Background color",
                    value: {
                        value: "#ffffff"
                    },
                    visible: true
                });
                alternateTextColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "alternateTextColor",
                    displayName: "Alternate text color",
                    value: {
                        value: "#333333"
                    },
                    visible: true
                });
                alternateBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "alternateBackgroundColor",
                    displayName: "Alternate background color",
                    value: {
                        value: "#f5f5f5"
                    },
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
                slices = [this.font, this.textColor, this.backgroundColor, this.alternateTextColor, this.alternateBackgroundColor, this.textWrap];
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
                visible = false;
                slices = [];
            }
            class CategoryConditionalFormattingSettings extends FormattingSettingsCard {
                name = "categoryConditionalFormatting";
                displayName = "Category conditional formatting";
                visible = true;
                textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "textColor",
                    displayName: "Text Color",
                    value: {
                        value: "#333333"
                    },
                    visible: true,
                    selector: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_1__.createDataViewWildcardSelector(0 /* dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals */
                    ),
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
                    value: {
                        value: "",
                        displayName: ""
                    },
                    items: [],
                    visible: true
                });
                showDataBars = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
                    name: "showDataBars",
                    displayName: "Show Data Bars",
                    value: false,
                    visible: true
                });
                dataBarColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "dataBarColor",
                    displayName: "Data Bar Color",
                    value: {
                        value: "#31b6fd"
                    },
                    visible: true,
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
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
                    value: {
                        value: "#000000"
                    },
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
                    value: {
                        value: "#000000"
                    },
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
                    slices: [this.showDataBars, this.dataBarColor, this.dataBarHeight, this.transparency, this.borderOn, this.matchDataBarColor, this.borderThickness, this.borderColor, this.minValue, this.maxValue, this.labelsOutside, this.showZeroLine, this.zeroLineColor, this.zeroLineTransparency]
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
                    value: {
                        value: "Measure",
                        displayName: "Measure"
                    },
                    items: [{
                        value: "Measure",
                        displayName: "Measure"
                    }, {
                        value: "Sum",
                        displayName: "Sum"
                    }, {
                        value: "Average",
                        displayName: "Average"
                    }, {
                        value: "Count",
                        displayName: "Count"
                    }, {
                        value: "Count Distinct",
                        displayName: "Count Distinct"
                    }, {
                        value: "Max",
                        displayName: "Max"
                    }, {
                        value: "Min",
                        displayName: "Min"
                    }],
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
                    value: {
                        value: "#333333"
                    },
                    visible: true
                });
                backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "backgroundColor",
                    displayName: "Background color",
                    value: {
                        value: "#d0d0d0"
                    },
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
                    value: {
                        value: "#d0d0d0"
                    },
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
                    value: {
                        value: "#d0d0d0"
                    },
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
                slices = [this.horizontalGridlines, this.horizontalGridColor, this.horizontalGridWidth, this.horizontalGridTransparency, this.verticalGridlines, this.verticalGridColor, this.verticalGridWidth, this.verticalGridTransparency];
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
                    value: {
                        value: "#1e3a8a"
                    },
                    visible: true
                });
                backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "backgroundColor",
                    displayName: "Background color",
                    value: {
                        value: "#ffffff"
                    },
                    visible: true
                });
                alignment = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.AlignmentGroup({
                    name: "alignment",
                    displayName: "Header alignment",
                    value: "left",
                    mode: "horizontalAlignment"/* powerbi.visuals.AlignmentGroupMode.Horizonal */
                    ,
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
                    value: {
                        value: "",
                        displayName: ""
                    },
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
                    value: {
                        value: "",
                        displayName: ""
                    },
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
                    value: {
                        value: "#00b8d4"
                    },
                    visible: true
                });
                backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "backgroundColor",
                    displayName: "Background color",
                    value: {
                        value: "#ffffff"
                    },
                    visible: true
                });
                alternateTextColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "alternateTextColor",
                    displayName: "Alternate text color",
                    value: {
                        value: "#333333"
                    },
                    visible: true
                });
                alternateBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
                    name: "alternateBackgroundColor",
                    displayName: "Alternate background color",
                    value: {
                        value: "#f5f5f5"
                    },
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
                    mode: "horizontalAlignment"/* powerbi.visuals.AlignmentGroupMode.Horizonal */
                    ,
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
                    name: "specificValues",
                    // NOTE: renamed to specificValues to avoid clash with global 'values' object
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

            /***/
        }
        ),

        /***/
        "./src/visual.ts": /*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                Visual: () => (/* binding */
                Visual)/* harmony export */
            });
            /* harmony import */
            var _style_visual_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../style/visual.less */
            "./style/visual.less");
            /* harmony import */
            var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-api */
            "powerbi-visuals-api");
            /* harmony import */
            var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/
            __webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */
            "./src/settings.ts");
            /* harmony import */
            var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */
            "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
            /* harmony import */
            var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! powerbi-visuals-utils-dataviewutils */
            "./node_modules/powerbi-visuals-utils-dataviewutils/lib/dataViewObjects.js");
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
                        this.dataView = options.dataViews[0];
                        // Update dataView here
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
                    valueCFSettings.slices = [];
                    // Will be populated dynamically per-measure
                    totalsSettings.slices = [totalsSettings.showTotalRow, totalsSettings.font, totalsSettings.textColor, totalsSettings.backgroundColor, totalsSettings.textWrap];
                    const dataBarsSettings = this.visualSettings.dataBarsFormatting;
                    const dataBarsCFSettings = this.visualSettings.dataBarsConditionalFormatting;
                    dataBarsCFSettings.slices = [];
                    // Will be populated dynamically per-measure
                    const dataBarMarkersSettings = this.visualSettings.dataBarMarkers;
                    dataBarMarkersSettings.slices = [];
                    // Will be populated dynamically per-measure
                    // Reset columnWidth slices: base slices always shown, per-measure slices added dynamically when not aligned
                    if (columnWidthSettings.alignedColumns.value) {
                        columnWidthSettings.slices = [columnWidthSettings.categoryColumnWidth, columnWidthSettings.alignedColumns, columnWidthSettings.valueColumnWidth];
                    } else {
                        columnWidthSettings.slices = [columnWidthSettings.categoryColumnWidth, columnWidthSettings.alignedColumns];
                        // Per-measure width slices will be added in the values.forEach loop below
                    }
                    // Helper function to convert hex to rgba
                    const applyTransparency = (hex, transparencyPct) => {
                        if (!hex)
                            return hex;
                        // Clean up the hex string: trim whitespace and remove any leading minus sign
                        let cleanHex = hex.trim().replace(/^-/, '');
                        // Add '#' if missing but the string looks like a valid 3, 4, 6 or 8 character hex code
                        if (/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(cleanHex)) {
                            cleanHex = "#" + cleanHex;
                        }
                        let alpha = Math.max(0, Math.min(1, 1 - (transparencyPct / 100)));
                        if (cleanHex.startsWith("#")) {
                            let r = 0
                              , g = 0
                              , b = 0;
                            let aHex = 1;
                            if (cleanHex.length === 4) {
                                // #RGB
                                r = parseInt(cleanHex[1] + cleanHex[1], 16);
                                g = parseInt(cleanHex[2] + cleanHex[2], 16);
                                b = parseInt(cleanHex[3] + cleanHex[3], 16);
                            } else if (cleanHex.length === 5) {
                                // #RGBA
                                r = parseInt(cleanHex[1] + cleanHex[1], 16);
                                g = parseInt(cleanHex[2] + cleanHex[2], 16);
                                b = parseInt(cleanHex[3] + cleanHex[3], 16);
                                aHex = parseInt(cleanHex[4] + cleanHex[4], 16) / 255;
                            } else if (cleanHex.length === 7) {
                                // #RRGGBB
                                r = parseInt(cleanHex[1] + cleanHex[2], 16);
                                g = parseInt(cleanHex[3] + cleanHex[4], 16);
                                b = parseInt(cleanHex[5] + cleanHex[6], 16);
                            } else if (cleanHex.length === 9) {
                                // #RRGGBBAA or #AARRGGBB - usually #RRGGBBAA in CSS
                                r = parseInt(cleanHex[1] + cleanHex[2], 16);
                                g = parseInt(cleanHex[3] + cleanHex[4], 16);
                                b = parseInt(cleanHex[5] + cleanHex[6], 16);
                                aHex = parseInt(cleanHex[7] + cleanHex[8], 16) / 255;
                            } else {
                                return cleanHex;
                                // fallback
                            }
                            alpha = alpha * aHex;
                            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
                        }
                        return cleanHex;
                        // fallback if not hex (e.g. "red")
                    }
                    ;
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
                        if (units === 0) {
                            // Auto
                            let absNum = Math.abs(num);
                            if (absNum >= 1000000000000) {
                                divisor = 1000000000000;
                                suffix = "T";
                            } else if (absNum >= 1000000000) {
                                divisor = 1000000000;
                                suffix = "bn";
                            } else if (absNum >= 1000000) {
                                divisor = 1000000;
                                suffix = "M";
                            } else if (absNum >= 1000) {
                                divisor = 1000;
                                suffix = "K";
                            }
                        } else if (units > 1) {
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
                    }
                    ;
                    const getCategoryTextColor = (rowIndex, dataView) => {
                        if (dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0) {
                            const category = dataView.categorical.categories[0];
                            if (category.objects && category.objects[rowIndex]) {
                                const color = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(category.objects[rowIndex], {
                                    objectName: "categoryConditionalFormatting",
                                    propertyName: "textColor"
                                });
                                if (color) {
                                    return color;
                                }
                            }
                        }
                        return defaultCategoryTextColor;
                    }
                    ;
                    // Helper function to apply squashing row height
                    const applyRowSquash = (cell, rowHeight, fontSize, wordWrap) => {
                        if (rowHeight <= 2) {
                            cell.style.fontSize = "0px";
                            cell.style.color = "transparent";
                            cell.style.padding = "0px";
                            cell.style.lineHeight = "0px";
                            cell.style.height = `${rowHeight}px`;
                        } else {
                            cell.style.fontSize = `${Math.min(fontSize, Math.max(8, rowHeight - 6))}px`;
                            cell.style.height = `${rowHeight}px`;
                            cell.style.padding = "";
                            // fallback to CSS padding
                            if (!wordWrap) {
                                cell.style.lineHeight = `${rowHeight}px`;
                            } else {
                                cell.style.lineHeight = "normal";
                            }
                        }
                    }
                    ;
                    const applyVerticalGridBorder = (cell, isLastCell) => {
                        if (!isLastCell) {
                            cell.style.borderRight = vertBorderValue;
                        } else {
                            cell.style.borderRight = "none";
                        }
                    }
                    ;
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
                    }
                    ;
                    // Helper function to get background color for a row, supporting conditional formatting
                    const getRowBackgroundColor = (rowIndex, isEvenRow, dataView) => {
                        const targetColorProp = isEvenRow ? "backgroundColor" : "alternateBackgroundColor";
                        const defaultColor = isEvenRow ? backgroundColor : alternateBackgroundColor;
                        if (dataView.categorical && dataView.categorical.categories && dataView.categorical.categories.length > 0) {
                            const category = dataView.categorical.categories[0];
                            if (category.objects && category.objects[rowIndex]) {
                                const color = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(category.objects[rowIndex], {
                                    objectName: "table",
                                    propertyName: targetColorProp
                                });
                                if (color) {
                                    return color;
                                }
                            }
                        }
                        return defaultColor;
                    }
                    ;
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
                    values.forEach( (valueColumn) => {
                        let specObj = valueColumn.source.objects?.specificColumn;
                        let settings = {
                            textColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "textColor"
                            }, undefined),
                            backgroundColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "backgroundColor"
                            }, undefined),
                            alternateTextColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "alternateTextColor"
                            }, undefined),
                            alternateBackgroundColor: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "alternateBackgroundColor"
                            }, undefined),
                            alignment: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "alignment"
                            }, undefined),
                            applyToHeader: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "applyToHeader"
                            }, true),
                            applyToValues: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "applyToValues"
                            }, true),
                            applyToTotal: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "applyToTotal"
                            }, true),
                            displayUnits: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "displayUnits"
                            }, 0),
                            decimalPlaces: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "decimalPlaces"
                            }, 1),
                            fontFamily: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "fontFamily"
                            }, undefined),
                            fontSize: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "fontSize"
                            }, undefined),
                            bold: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "bold"
                            }, undefined),
                            italic: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "italic"
                            }, undefined),
                            underline: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "underline"
                            }, undefined),
                            textWrap: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "specificColumn",
                                propertyName: "textWrap"
                            }, undefined)
                        };
                        measureSettingsList.push(settings);
                        let displayName = valueColumn.source.displayName || `Measure ${measureHeaders.length + 1}`;
                        measureHeaders.push(displayName);
                        let nameOverride = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                            objectName: "columnHeaders",
                            propertyName: "nameOverride"
                        }, "");
                        measureHeaderOverrides.push(nameOverride !== "" ? nameOverride : displayName);
                        const queryName = valueColumn.source.queryName;
                        if (columnWidthSettings.alignedColumns.value) {
                            valueColumnWidths.push(columnWidthSettings.valueColumnWidth.value);
                        } else {
                            const specificWidth = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(valueColumn.source.objects || {}, {
                                objectName: "columnWidth",
                                propertyName: "valueColumnWidth"
                            }, columnWidthSettings.valueColumnWidth.value);
                            valueColumnWidths.push(specificWidth);
                            // Add per-measure width slice with selector so Power BI persists it per-measure
                            columnWidthSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                                name: "valueColumnWidth",
                                displayName: displayName + " Width",
                                value: specificWidth,
                                selector: {
                                    metadata: queryName
                                }
                            }));
                        }
                        // Build dynamic settings slice for this measure
                        const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                            objectName: "valueConditionalFormatting",
                            propertyName: "textColor"
                        }, textColor);
                        valueCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                            name: "textColor",
                            displayName: displayName + " Text Color",
                            value: {
                                value: defaultMeasureTextColor
                            },
                            visible: true,
                            selector: {
                                metadata: queryName
                            },
                            instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                        }));
                        // Register per-measure data bar color CF slice (enables PBI to deliver per-row objects)
                        const defaultMeasureDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                            objectName: "dataBarsConditionalFormatting",
                            propertyName: "dataBarColor"
                        }, "#31b6fd");
                        dataBarsCFSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                            name: "dataBarColor",
                            displayName: displayName + " Data Bar Color",
                            value: {
                                value: defaultMeasureDataBarColor
                            },
                            visible: true,
                            selector: {
                                metadata: queryName
                            },
                            instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                        }));
                        // Data bars settings
                        const objects = valueColumn.source.objects || {};
                        // Data bar markers settings
                        const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                            objectName: "dataBarMarkers",
                            propertyName: "showMarker"
                        }, false);
                        let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                            objectName: "dataBarMarkers",
                            propertyName: "markerShape"
                        }, "circle");
                        const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                        const markerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                            objectName: "dataBarMarkers",
                            propertyName: "markerColor"
                        }, "#000000");
                        const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                            objectName: "dataBarMarkers",
                            propertyName: "markerSize"
                        }, 10);
                        dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                            name: "showMarker",
                            displayName: displayName + " Show Marker",
                            value: showMarker,
                            visible: true,
                            selector: {
                                metadata: queryName
                            }
                        }));
                        if (showMarker) {
                            const markerShapeItems = [{
                                value: "cross",
                                displayName: "Cross"
                            }, {
                                value: "circle",
                                displayName: "Circle"
                            }, {
                                value: "horizontalLine",
                                displayName: "Horizontal Line"
                            }, {
                                value: "verticalLine",
                                displayName: "Vertical Line"
                            }, {
                                value: "semiCircle",
                                displayName: "Semi Circle"
                            }];
                            const currentShapeItem = markerShapeItems.find(x => x.value === markerShape) || markerShapeItems[1];
                            dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ItemDropdown({
                                name: "markerShape",
                                displayName: displayName + " Marker Shape",
                                value: currentShapeItem,
                                items: markerShapeItems,
                                visible: true,
                                selector: {
                                    metadata: queryName
                                }
                            }));
                            dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                                name: "markerColor",
                                displayName: displayName + " Marker Color",
                                value: {
                                    value: markerColor
                                },
                                visible: true,
                                selector: {
                                    metadata: queryName
                                },
                                instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                            }));
                            dataBarMarkersSettings.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                                name: "markerSize",
                                displayName: displayName + " Marker Size",
                                value: markerSize,
                                visible: true,
                                selector: {
                                    metadata: queryName
                                }
                            }));
                        }
                        let totalBehaviorRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                            objectName: "totals",
                            propertyName: "totalBehavior"
                        }, "Sum");
                        const totalBehaviorVal = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Sum");
                        const totalBehaviorItems = [{
                            value: "Measure",
                            displayName: "Measure"
                        }, {
                            value: "Sum",
                            displayName: "Sum"
                        }, {
                            value: "Average",
                            displayName: "Average"
                        }, {
                            value: "Count",
                            displayName: "Count"
                        }, {
                            value: "Count Distinct",
                            displayName: "Count Distinct"
                        }, {
                            value: "Max",
                            displayName: "Max"
                        }, {
                            value: "Min",
                            displayName: "Min"
                        }];
                        const currentBehaviorItem = totalBehaviorItems.find(x => x.value === totalBehaviorVal) || totalBehaviorItems[1];
                        totalsSettings.slices.splice(measureHeaders.length, 0, new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ItemDropdown({
                            name: "totalBehavior",
                            displayName: displayName + " Measure Selection",
                            value: currentBehaviorItem,
                            items: totalBehaviorItems,
                            visible: true,
                            selector: {
                                metadata: queryName
                            }
                        }));
                    }
                    );
                    // Populate specificColumn series dropdown and rebuild value slices with per-measure selector
                    const specificColumnSettings = this.visualSettings.specificColumn;
                    specificColumnSettings.series.items = measureHeaders.map(name => ({
                        value: name,
                        displayName: name
                    }));
                    // Read persisted series value from dataView metadata objects
                    const persistedSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(this.dataView.metadata.objects || {}, {
                        objectName: "specificColumn",
                        propertyName: "series"
                    }, undefined);
                    const matchedItem = persistedSeries ? specificColumnSettings.series.items.find(i => i.value === persistedSeries) : null;
                    specificColumnSettings.series.value = matchedItem || specificColumnSettings.series.items[0] || {
                        value: "",
                        displayName: ""
                    };
                    // Find the queryName for the selected measure so slices persist to the correct per-measure objects
                    const selectedSeriesName = specificColumnSettings.series.value?.value;
                    const selectedMeasureIdx = measureHeaders.indexOf(selectedSeriesName);
                    const selectedValueColumn = selectedMeasureIdx >= 0 ? values[selectedMeasureIdx] : null;
                    const selectedQueryName = selectedValueColumn?.source?.queryName;
                    const selectedObjects = selectedValueColumn?.source?.objects || {};
                    const selector = selectedQueryName ? {
                        metadata: selectedQueryName
                    } : undefined;
                    // Read current per-measure values for the selected column
                    const scTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "textColor"
                    }, undefined);
                    const scBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "backgroundColor"
                    }, undefined);
                    const scAltTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "alternateTextColor"
                    }, undefined);
                    const scAltBgColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "alternateBackgroundColor"
                    }, undefined);
                    const scApplyToHeader = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "applyToHeader"
                    }, true);
                    const scApplyToValues = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "applyToValues"
                    }, true);
                    const scApplyToTotal = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "applyToTotal"
                    }, true);
                    const scFontFamily = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "fontFamily"
                    }, undefined);
                    const scFontSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "fontSize"
                    }, undefined);
                    const scBold = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "bold"
                    }, undefined);
                    const scItalic = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "italic"
                    }, undefined);
                    const scUnderline = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "underline"
                    }, undefined);
                    const scAlignment = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "alignment"
                    }, undefined);
                    const scDisplayUnits = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "displayUnits"
                    }, 0);
                    const scDecimalPlaces = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "decimalPlaces"
                    }, 1);
                    const scTextWrap = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedObjects, {
                        objectName: "specificColumn",
                        propertyName: "textWrap"
                    }, undefined);
                    // Populate columnHeaders nameSeries dropdown and rebuild names group with per-measure selector
                    columnHeadersSettings.nameSeries.items = measureHeaders.map(name => ({
                        value: name,
                        displayName: name
                    }));
                    const persistedNameSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(this.dataView.metadata.objects || {}, {
                        objectName: "columnHeaders",
                        propertyName: "nameSeries"
                    }, undefined);
                    const matchedNameItem = persistedNameSeries ? columnHeadersSettings.nameSeries.items.find(i => i.value === persistedNameSeries) : null;
                    columnHeadersSettings.nameSeries.value = matchedNameItem || columnHeadersSettings.nameSeries.items[0] || {
                        value: "",
                        displayName: ""
                    };
                    const selectedNameSeriesName = columnHeadersSettings.nameSeries.value?.value;
                    const selectedNameMeasureIdx = measureHeaders.indexOf(selectedNameSeriesName);
                    const selectedNameValueColumn = selectedNameMeasureIdx >= 0 ? values[selectedNameMeasureIdx] : null;
                    const selectedNameQueryName = selectedNameValueColumn?.source?.queryName;
                    const selectedNameObjects = selectedNameValueColumn?.source?.objects || {};
                    const nameSelector = selectedNameQueryName ? {
                        metadata: selectedNameQueryName
                    } : undefined;
                    const chNameOverride = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedNameObjects, {
                        objectName: "columnHeaders",
                        propertyName: "nameOverride"
                    }, "");
                    // Rebuild the namesGroup slices
                    columnHeadersSettings.namesGroup.slices = [columnHeadersSettings.nameSeries, new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.TextInput({
                        name: "nameOverride",
                        displayName: "Header Name",
                        placeholder: "Enter custom header name",
                        value: chNameOverride,
                        visible: true,
                        selector: nameSelector,
                        instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                    })];
                    // Rebuild the applySettingsGroup slices with selectors
                    specificColumnSettings.applySettingsGroup.slices = [specificColumnSettings.series, new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "applyToHeader",
                        displayName: "Apply to header",
                        value: scApplyToHeader,
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "applyToTotal",
                        displayName: "Apply to total",
                        value: scApplyToTotal,
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "applyToValues",
                        displayName: "Apply to values",
                        value: scApplyToValues,
                        visible: true,
                        selector
                    })];
                    // Rebuild the valuesGroup slices with per-measure selectors
                    specificColumnSettings.valuesGroup.slices = [new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.FontControl({
                        name: "font",
                        displayName: "Font",
                        fontFamily: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.FontPicker({
                            name: "fontFamily",
                            displayName: "Font Family",
                            value: scFontFamily || "Arial, sans-serif",
                            selector
                        }),
                        fontSize: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                            name: "fontSize",
                            displayName: "Font Size",
                            value: scFontSize ?? 12,
                            selector
                        }),
                        bold: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                            name: "bold",
                            displayName: "Bold",
                            value: scBold ?? false,
                            selector
                        }),
                        italic: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                            name: "italic",
                            displayName: "Italic",
                            value: scItalic ?? false,
                            selector
                        }),
                        underline: new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                            name: "underline",
                            displayName: "Underline",
                            value: scUnderline ?? false,
                            selector
                        })
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                        name: "textColor",
                        displayName: "Text color",
                        value: {
                            value: scTextColor || "#00b8d4"
                        },
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                        name: "backgroundColor",
                        displayName: "Background color",
                        value: {
                            value: scBgColor || "#ffffff"
                        },
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                        name: "alternateTextColor",
                        displayName: "Alternate text color",
                        value: {
                            value: scAltTextColor || "#333333"
                        },
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                        name: "alternateBackgroundColor",
                        displayName: "Alternate background color",
                        value: {
                            value: scAltBgColor || "#f5f5f5"
                        },
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.AlignmentGroup({
                        name: "alignment",
                        displayName: "Alignment",
                        value: scAlignment || "left",
                        mode: "horizontalAlignment"/* powerbi.visuals.AlignmentGroupMode.Horizonal */
                        ,
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.AutoDropdown({
                        name: "displayUnits",
                        displayName: "Display units",
                        value: scDisplayUnits,
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "decimalPlaces",
                        displayName: "Value decimal places",
                        value: scDecimalPlaces,
                        visible: true,
                        selector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "textWrap",
                        displayName: "Text wrap",
                        value: scTextWrap ?? false,
                        visible: true,
                        selector
                    })];
                    // Populate dataBarsSettings series dropdown and rebuild value slices with per-measure selector
                    dataBarsSettings.series.items = measureHeaders.map(name => ({
                        value: name,
                        displayName: name
                    }));
                    const persistedDataBarsSeries = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(this.dataView.metadata.objects || {}, {
                        objectName: "dataBarsFormatting",
                        propertyName: "series"
                    }, undefined);
                    const matchedDataBarsItem = persistedDataBarsSeries ? dataBarsSettings.series.items.find(i => i.value === persistedDataBarsSeries) : null;
                    dataBarsSettings.series.value = matchedDataBarsItem || dataBarsSettings.series.items[0] || {
                        value: "",
                        displayName: ""
                    };
                    const selectedDataBarsSeriesName = dataBarsSettings.series.value?.value;
                    const selectedDataBarsMeasureIdx = measureHeaders.indexOf(selectedDataBarsSeriesName);
                    const selectedDataBarsValueColumn = selectedDataBarsMeasureIdx >= 0 ? values[selectedDataBarsMeasureIdx] : null;
                    const selectedDataBarsQueryName = selectedDataBarsValueColumn?.source?.queryName;
                    const selectedDataBarsObjects = selectedDataBarsValueColumn?.source?.objects || {};
                    const dataBarsSelector = selectedDataBarsQueryName ? {
                        metadata: selectedDataBarsQueryName
                    } : undefined;
                    const dbShowDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "showDataBars"
                    }, false);
                    const dbDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "dataBarColor"
                    }, "#31b6fd");
                    const dbMatchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "matchDataBarColor"
                    }, true);
                    const dbShowZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "showZeroLine"
                    }, false);
                    const dbZeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "zeroLineColor"
                    }, "#000000");
                    const dbZeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "zeroLineTransparency"
                    }, 0);
                    const dbDataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "dataBarHeight"
                    }, 80);
                    const dbTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "transparency"
                    }, 20);
                    const dbBorderOn = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "borderOn"
                    }, true);
                    const dbBorderThickness = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "borderThickness"
                    }, 1);
                    const dbBorderColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "borderColor"
                    }, "#000000");
                    const dbMinValue = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "minValue"
                    }, 0);
                    const dbMaxValue = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "maxValue"
                    }, 0);
                    const dbLabelsOutside = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(selectedDataBarsObjects, {
                        objectName: "dataBarsFormatting",
                        propertyName: "labelsOutside"
                    }, false);
                    dataBarsSettings.selectSeriesGroup.slices = [dataBarsSettings.series];
                    let dataBarsSlices = [new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "showDataBars",
                        displayName: "Show Data Bars",
                        value: dbShowDataBars,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                        name: "dataBarColor",
                        displayName: "Data Bar Color",
                        value: {
                            value: dbDataBarColor
                        },
                        visible: true,
                        selector: dataBarsSelector,
                        instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "dataBarHeight",
                        displayName: "Data Bar Height (%)",
                        value: dbDataBarHeight,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "transparency",
                        displayName: "Transparency (%)",
                        value: dbTransparency,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "borderOn",
                        displayName: "Border On",
                        value: dbBorderOn,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "matchDataBarColor",
                        displayName: "Match Data Bar Color",
                        value: dbMatchDataBarColor,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "borderThickness",
                        displayName: "Border Thickness",
                        value: dbBorderThickness,
                        visible: true,
                        selector: dataBarsSelector
                    })];
                    if (!dbMatchDataBarColor) {
                        dataBarsSlices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                            name: "borderColor",
                            displayName: "Border Color",
                            value: {
                                value: dbBorderColor
                            },
                            visible: true,
                            selector: dataBarsSelector,
                            instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                        }));
                    }
                    dataBarsSlices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "minValue",
                        displayName: "Minimum Value",
                        value: dbMinValue,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "maxValue",
                        displayName: "Maximum Value",
                        value: dbMaxValue,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "labelsOutside",
                        displayName: "Labels Outside",
                        value: dbLabelsOutside,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ToggleSwitch({
                        name: "showZeroLine",
                        displayName: "Show Zero Line",
                        value: dbShowZeroLine,
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.ColorPicker({
                        name: "zeroLineColor",
                        displayName: "Zero Line Color",
                        value: {
                            value: dbZeroLineColor
                        },
                        visible: true,
                        selector: dataBarsSelector
                    }), new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_3__.formattingSettings.NumUpDown({
                        name: "zeroLineTransparency",
                        displayName: "Zero Line Transparency (%)",
                        value: dbZeroLineTransparency,
                        visible: true,
                        selector: dataBarsSelector
                    }));
                    dataBarsSettings.dataBarsGroup.slices = dataBarsSlices;
                    // Compute min and max values for data bars AND Calculate totals based on selection
                    let measureMins = new Array(values.length).fill(0);
                    let measureMaxs = new Array(values.length).fill(0);
                    let totals = new Array(values.length).fill(0);
                    values.forEach( (valueColumn, measureIndex) => {
                        let numValues = valueColumn.values.filter(v => v !== null && v !== undefined).map(v => Number(v));
                        if (numValues.length > 0) {
                            measureMins[measureIndex] = Math.min(0, ...numValues);
                            // Standard data bars anchor to 0
                            measureMaxs[measureIndex] = Math.max(0, ...numValues);
                        }
                        const objects = valueColumn.source.objects || {};
                        let totalBehaviorRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                            objectName: "totals",
                            propertyName: "totalBehavior"
                        }, "Sum");
                        const totalBehavior = typeof totalBehaviorRaw === "string" ? totalBehaviorRaw : (totalBehaviorRaw.value || "Sum");
                        if (numValues.length > 0) {
                            if (totalBehavior === "Sum" || totalBehavior === "Measure") {
                                totals[measureIndex] = numValues.reduce( (a, b) => a + b, 0);
                            } else if (totalBehavior === "Average") {
                                totals[measureIndex] = numValues.reduce( (a, b) => a + b, 0) / numValues.length;
                            } else if (totalBehavior === "Count") {
                                totals[measureIndex] = numValues.length;
                            } else if (totalBehavior === "Count Distinct") {
                                totals[measureIndex] = new Set(numValues).size;
                            } else if (totalBehavior === "Max") {
                                totals[measureIndex] = Math.max(...numValues);
                            } else if (totalBehavior === "Min") {
                                totals[measureIndex] = Math.min(...numValues);
                            }
                        }
                    }
                    );
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
                        measureHeaders.forEach( (displayName, idx) => {
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
                        }
                        );
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
                            values.forEach( (valueColumn, measureIndex) => {
                                const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                                    objectName: "valueConditionalFormatting",
                                    propertyName: "textColor"
                                }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                                let cellTextColor = defaultMeasureTextColor;
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], {
                                        objectName: "valueConditionalFormatting",
                                        propertyName: "textColor"
                                    });
                                    if (cfColor) {
                                        cellTextColor = cfColor;
                                    }
                                }
                                let cell = row.insertCell();
                                let value = valueColumn.values[i];
                                cell.style.position = "relative";
                                // for data bar positioning
                                if (value !== null && value !== undefined) {
                                    let numValue = Number(value);
                                    const formattedValue = numValue.toLocaleString(undefined, {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 0
                                    });
                                    const objects = valueColumn.source.objects || {};
                                    const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                        objectName: "dataBarsFormatting",
                                        propertyName: "showDataBars"
                                    }, false);
                                    if (showDataBars) {
                                        let cellDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "dataBarColor"
                                        }, "#31b6fd");
                                        const matchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "matchDataBarColor"
                                        }, true);
                                        const showZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "showZeroLine"
                                        }, false);
                                        const zeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "zeroLineColor"
                                        }, "#000000");
                                        const zeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "zeroLineTransparency"
                                        }, 0);
                                        const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "dataBarHeight"
                                        }, 80);
                                        const transparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "transparency"
                                        }, 20);
                                        const borderOn = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "borderOn"
                                        }, true);
                                        const borderThickness = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "borderThickness"
                                        }, 1);
                                        const borderColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "borderColor"
                                        }, "#000000");
                                        const minValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "minValue"
                                        }, null);
                                        const maxValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "maxValue"
                                        }, null);
                                        const labelsOutside = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "labelsOutside"
                                        }, false);
                                        // DEBUG: Log per-row CF data for first 5 rows of first measure
                                        if (i < 5 && measureIndex === 0) {
                                            console.log(`[DB CF DEBUG] Row ${i}: val=${value} | valueColumn.objects exists=${!!valueColumn.objects} | objects[${i}] exists=${!!(valueColumn.objects && valueColumn.objects[i])} | objects[${i}]=${valueColumn.objects ? JSON.stringify(valueColumn.objects[i]) : 'N/A'}`);
                                        }
                                        // Check for conditional formatting on data bar color
                                        if (valueColumn.objects && valueColumn.objects[i]) {
                                            const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], {
                                                objectName: "dataBarsConditionalFormatting",
                                                propertyName: "dataBarColor"
                                            });
                                            if (i < 5 && measureIndex === 0) {
                                                console.log(`[DB CF DEBUG] Row ${i}: cfColor=${cfColor} | defaultBarColor=${cellDataBarColor}`);
                                            }
                                            if (cfColor) {
                                                cellDataBarColor = cfColor;
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
                                        } else {
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
                                        const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarMarkers",
                                            propertyName: "showMarker"
                                        }, false);
                                        if (showMarker) {
                                            let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                                objectName: "dataBarMarkers",
                                                propertyName: "markerShape"
                                            }, "circle");
                                            const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                            const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                                objectName: "dataBarMarkers",
                                                propertyName: "markerSize"
                                            }, 10);
                                            let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                                objectName: "dataBarMarkers",
                                                propertyName: "markerColor"
                                            }, "#000000");
                                            if (valueColumn.objects && valueColumn.objects[i]) {
                                                const cfMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], {
                                                    objectName: "dataBarMarkers",
                                                    propertyName: "markerColor"
                                                });
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
                                            } else if (markerShape === "cross") {
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
                                            } else if (markerShape === "horizontalLine") {
                                                marker.style.backgroundColor = cellMarkerColor;
                                                marker.style.height = "2px";
                                                marker.style.top = "calc(50% - 1px)";
                                                marker.style.width = `${markerSize}px`;
                                            } else if (markerShape === "verticalLine") {
                                                marker.style.backgroundColor = cellMarkerColor;
                                                marker.style.width = "2px";
                                                marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                            } else if (markerShape === "semiCircle") {
                                                marker.style.backgroundColor = cellMarkerColor;
                                                // Draw semi circle pointing outwards
                                                if (numValue >= 0) {
                                                    marker.style.borderTopRightRadius = `${markerSize}px`;
                                                    marker.style.borderBottomRightRadius = `${markerSize}px`;
                                                    marker.style.width = `${markerSize / 2}px`;
                                                    marker.style.left = `calc(${markerLeftPct}%)`;
                                                } else {
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
                                            } else {
                                                textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                            }
                                        } else {
                                            textDiv.style.position = "relative";
                                        }
                                        cell.appendChild(textDiv);
                                    } else {
                                        cell.textContent = formattedValue;
                                    }
                                } else {
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
                                let specRowBgColor = isEvenRow ? (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : rowBgColor) : (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : rowBgColor);
                                let specCellTextColor = isEvenRow ? (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);
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
                                if (efWordWrap) {
                                    // and here
                                    cell.style.wordBreak = "break-word";
                                }
                            }
                            );
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
                            } else {
                                let totalLabelCell = totalRow.insertCell();
                                totalLabelCell.textContent = 'Total';
                                totalLabelCell.style.display = "none";
                            }
                            totals.forEach( (total, i) => {
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
                            }
                            );
                        }
                    } else {
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
                        } else {
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
                        values.forEach( (valueColumn, measureIndex) => {
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
                            measureNameCell.style.color = defaultCategoryTextColor;
                            // or some specific color
                            measureNameCell.style.overflow = "hidden";
                            measureNameCell.style.textOverflow = "ellipsis";
                            measureNameCell.style.whiteSpace = categoryWordWrap ? "normal" : "nowrap";
                            if (categoryWordWrap) {
                                measureNameCell.style.wordBreak = "break-word";
                            }
                            const defaultMeasureTextColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.source.objects || {}, {
                                objectName: "valueConditionalFormatting",
                                propertyName: "textColor"
                            }, (typeof isEvenRow !== 'undefined') ? (isEvenRow ? textColor : alternateTextColor) : textColor);
                            const objects = valueColumn.source.objects || {};
                            const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "showDataBars"
                            }, false);
                            const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarMarkers",
                                propertyName: "showMarker"
                            }, false);
                            let cellDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "dataBarColor"
                            }, "#31b6fd");
                            const matchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "matchDataBarColor"
                            }, true);
                            const showZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "showZeroLine"
                            }, false);
                            const zeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "zeroLineColor"
                            }, "#000000");
                            const zeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "zeroLineTransparency"
                            }, 0);
                            const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarsFormatting",
                                propertyName: "dataBarHeight"
                            }, 80);
                            let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarMarkers",
                                propertyName: "markerShape"
                            }, "circle");
                            const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                            const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                objectName: "dataBarMarkers",
                                propertyName: "markerSize"
                            }, 10);
                            let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                objectName: "dataBarMarkers",
                                propertyName: "markerColor"
                            }, "#000000");
                            const min = measureMins[measureIndex];
                            const max = measureMaxs[measureIndex];
                            const range = max - min;
                            // Data Cells: Values for each category (or the 1 value if no categories)
                            for (let i = 0; i < rowCount; i++) {
                                let cell = row.insertCell();
                                cell.style.position = "relative";
                                let cellTextColor = defaultMeasureTextColor;
                                if (valueColumn.objects && valueColumn.objects[i]) {
                                    const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], {
                                        objectName: "valueConditionalFormatting",
                                        propertyName: "textColor"
                                    });
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
                                    const showDataBars = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                        objectName: "dataBarsFormatting",
                                        propertyName: "showDataBars"
                                    }, false);
                                    if (showDataBars) {
                                        let cellDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "dataBarColor"
                                        }, "#31b6fd");
                                        const matchDataBarColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "matchDataBarColor"
                                        }, true);
                                        const showZeroLine = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "showZeroLine"
                                        }, false);
                                        const zeroLineColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "zeroLineColor"
                                        }, "#000000");
                                        const zeroLineTransparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "zeroLineTransparency"
                                        }, 0);
                                        const dataBarHeight = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "dataBarHeight"
                                        }, 80);
                                        const transparency = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "transparency"
                                        }, 20);
                                        const borderOn = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "borderOn"
                                        }, true);
                                        const borderThickness = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "borderThickness"
                                        }, 1);
                                        const borderColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "borderColor"
                                        }, "#000000");
                                        const minValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "minValue"
                                        }, null);
                                        const maxValueObj = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "maxValue"
                                        }, null);
                                        const labelsOutside = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarsFormatting",
                                            propertyName: "labelsOutside"
                                        }, false);
                                        // DEBUG: Log per-row CF data for first 5 rows of first measure
                                        if (i < 5 && measureIndex === 0) {
                                            console.log(`[DB CF DEBUG] Row ${i}: val=${value} | valueColumn.objects exists=${!!valueColumn.objects} | objects[${i}] exists=${!!(valueColumn.objects && valueColumn.objects[i])} | objects[${i}]=${valueColumn.objects ? JSON.stringify(valueColumn.objects[i]) : 'N/A'}`);
                                        }
                                        // Check for conditional formatting on data bar color
                                        if (valueColumn.objects && valueColumn.objects[i]) {
                                            const cfColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], {
                                                objectName: "dataBarsConditionalFormatting",
                                                propertyName: "dataBarColor"
                                            });
                                            if (i < 5 && measureIndex === 0) {
                                                console.log(`[DB CF DEBUG] Row ${i}: cfColor=${cfColor} | defaultBarColor=${cellDataBarColor}`);
                                            }
                                            if (cfColor) {
                                                cellDataBarColor = cfColor;
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
                                        } else {
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
                                        const showMarker = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                            objectName: "dataBarMarkers",
                                            propertyName: "showMarker"
                                        }, false);
                                        if (showMarker) {
                                            let markerShapeRaw = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                                objectName: "dataBarMarkers",
                                                propertyName: "markerShape"
                                            }, "circle");
                                            const markerShape = typeof markerShapeRaw === "string" ? markerShapeRaw : (markerShapeRaw.value || "circle");
                                            const markerSize = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getValue(objects, {
                                                objectName: "dataBarMarkers",
                                                propertyName: "markerSize"
                                            }, 10);
                                            let cellMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(objects, {
                                                objectName: "dataBarMarkers",
                                                propertyName: "markerColor"
                                            }, "#000000");
                                            if (valueColumn.objects && valueColumn.objects[i]) {
                                                const cfMarkerColor = powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_4__.getFillColor(valueColumn.objects[i], {
                                                    objectName: "dataBarMarkers",
                                                    propertyName: "markerColor"
                                                });
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
                                            } else if (markerShape === "cross") {
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
                                            } else if (markerShape === "horizontalLine") {
                                                marker.style.backgroundColor = cellMarkerColor;
                                                marker.style.height = "2px";
                                                marker.style.top = "calc(50% - 1px)";
                                                marker.style.width = `${markerSize}px`;
                                            } else if (markerShape === "verticalLine") {
                                                marker.style.backgroundColor = cellMarkerColor;
                                                marker.style.width = "2px";
                                                marker.style.left = `calc(${markerLeftPct}% - 1px)`;
                                            } else if (markerShape === "semiCircle") {
                                                marker.style.backgroundColor = cellMarkerColor;
                                                // Draw semi circle pointing outwards
                                                if (numValue >= 0) {
                                                    marker.style.borderTopRightRadius = `${markerSize}px`;
                                                    marker.style.borderBottomRightRadius = `${markerSize}px`;
                                                    marker.style.width = `${markerSize / 2}px`;
                                                    marker.style.left = `calc(${markerLeftPct}%)`;
                                                } else {
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
                                            } else {
                                                textDiv.style.right = `calc(${100 - leftPct}% + 4px)`;
                                            }
                                        } else {
                                            textDiv.style.position = "relative";
                                        }
                                        cell.appendChild(textDiv);
                                    } else {
                                        cell.textContent = formattedValue;
                                    }
                                } else {
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
                                let specRowBgColor = isEvenRow ? (specSettings.backgroundColor !== undefined ? specSettings.backgroundColor : rowBgColor) : (specSettings.alternateBackgroundColor !== undefined ? specSettings.alternateBackgroundColor : rowBgColor);
                                let specCellTextColor = isEvenRow ? (specSettings.textColor !== undefined ? specSettings.textColor : cellTextColor) : (specSettings.alternateTextColor !== undefined ? specSettings.alternateTextColor : cellTextColor);
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
                                if (efWordWrap) {
                                    // and here
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
                        }
                        );
                    }
                }
            }

            /***/
        }
        ),

        /***/
        "./style/visual.less": /*!***************************!*\
  !*** ./style/visual.less ***!
  \***************************/
        /***/
        ( (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            __webpack_require__.r(__webpack_exports__);
            // extracted by mini-css-extract-plugin

            /***/
        }
        ),

        /***/
        "powerbi-visuals-api": /*!***********************!*\
  !*** external "null" ***!
  \***********************/
        /***/
        ( (module) => {

            module.exports = null;

            /***/
        }
        )
        /******/
    });
    /************************************************************************/
    /******/
    // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}/******/
        };
        /******/
        /******/
        // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/
        // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/compat get default export */
    /******/
    ( () => {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ? /******/
            () => (module['default']) : /******/
            () => (module);
            /******/
            __webpack_require__.d(getter, {
                a: getter
            });
            /******/
            return getter;
            /******/
        }
        ;
        /******/
    }
    )();
    /******/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    ( () => {
        /******/
        // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                    /******/
                }
                /******/
            }
            /******/
        }
        ;
        /******/
    }
    )();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    ( () => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    }
    )();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    ( () => {
        /******/
        // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        }
        ;
        /******/
    }
    )();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
    ( () => {
        /*!*****************************************!*\
  !*** ./.tmp/precompile/visualPlugin.ts ***!
  \*****************************************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */
        __webpack_require__.d(__webpack_exports__, {
            /* harmony export */
            "default": () => (__WEBPACK_DEFAULT_EXPORT__)/* harmony export */
        });
        /* harmony import */
        var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/visual */
        "./src/visual.ts");

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
            }
            ,
            createModalDialog: (dialogId, options, initialState) => {
                const dialogRegistry = globalThis.dialogRegistry;
                if (dialogId in dialogRegistry) {
                    new dialogRegistry[dialogId](options,initialState);
                }
            }
            ,
            custom: true
        };
        if (typeof powerbi !== "undefined") {
            powerbi.visuals = powerbi.visuals || {};
            powerbi.visuals.plugins = powerbi.visuals.plugins || {};
            powerbi.visuals.plugins["timTableDD1AB490372C46B5A64605746E322F55_DEBUG"] = timTableDD1AB490372C46B5A64605746E322F55_DEBUG;
        }
        /* harmony default export */
        const __WEBPACK_DEFAULT_EXPORT__ = (timTableDD1AB490372C46B5A64605746E322F55_DEBUG);

    }
    )();

    timTableDD1AB490372C46B5A64605746E322F55_DEBUG = __webpack_exports__;
    /******/
}
)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0RBQWdELENBQUMsR0FBRyw4Q0FBOEMsQ0FBQztBQUMvSCxDQUFDO0FBQ0QsaUVBQWUsOENBQThDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzL2xpYi9kYXRhVmlld09iamVjdC5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzL2xpYi9kYXRhVmlld09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZGF0YXZpZXd1dGlscy9saWIvZGF0YVZpZXdXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvLi9zdHlsZS92aXN1YWwubGVzcyIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL2V4dGVybmFsIHZhciBcIm51bGxcIiIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHLy4vLnRtcC9wcmVjb21waWxlL3Zpc3VhbFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICghb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBvYmplY3RbcHJvcGVydHlOYW1lXTtcbiAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xufVxuLyoqIEdldHMgdGhlIHNvbGlkIGNvbG9yIGZyb20gYSBmaWxsIHByb3BlcnR5IHVzaW5nIG9ubHkgYSBwcm9wZXJ0eU5hbWUgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxsQ29sb3JCeVByb3BlcnR5TmFtZShvYmplY3QsIHByb3BlcnR5TmFtZSwgZGVmYXVsdENvbG9yKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIHByb3BlcnR5TmFtZSk7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnNvbGlkLmNvbG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YVZpZXdPYmplY3QuanMubWFwIiwiaW1wb3J0ICogYXMgRGF0YVZpZXdPYmplY3QgZnJvbSBcIi4vZGF0YVZpZXdPYmplY3RcIjtcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gb2JqZWN0L3Byb3BlcnR5IHBhaXIuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKCFvYmplY3RzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBEYXRhVmlld09iamVjdC5nZXRWYWx1ZShvYmplY3RzW3Byb3BlcnR5SWQub2JqZWN0TmFtZV0sIHByb3BlcnR5SWQucHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xufVxuLyoqIEdldHMgYW4gb2JqZWN0IGZyb20gb2JqZWN0cy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qob2JqZWN0cywgb2JqZWN0TmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tvYmplY3ROYW1lXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0c1tvYmplY3ROYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbn1cbi8qKiBHZXRzIHRoZSBzb2xpZCBjb2xvciBmcm9tIGEgZmlsbCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxsQ29sb3Iob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdENvbG9yKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkKTtcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUuc29saWQuY29sb3I7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbW9uVmFsdWUob2JqZWN0cywgcHJvcGVydHlJZCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3RzLCBwcm9wZXJ0eUlkLCBkZWZhdWx0VmFsdWUpO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc29saWQuY29sb3I7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIHx8IHZhbHVlID09PSBudWxsXG4gICAgICAgIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhVmlld09iamVjdHMuanMubWFwIiwiLypcbiogIFBvd2VyIEJJIFZpc3VhbGl6YXRpb25zXG4qXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxuKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiogIE1JVCBMaWNlbnNlXG4qXG4qICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlwiU29mdHdhcmVcIlwiKSwgdG8gZGVhbFxuKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKlxuKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiogIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKlxuKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICpBUyBJUyosIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuKiAgVEhFIFNPRlRXQVJFLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhVmlld1dpbGRjYXJkU2VsZWN0b3IoZGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uKSB7XG4gICAgaWYgKGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIGRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbiA9IDAgLyogRGF0YVZpZXdXaWxkY2FyZE1hdGNoaW5nT3B0aW9uLkluc3RhbmNlc0FuZFRvdGFscyAqLztcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhVmlld1dpbGRjYXJkOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nT3B0aW9uOiBkYXRhVmlld1dpbGRjYXJkTWF0Y2hpbmdPcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuICAgIHJldHVybiBzZWxlY3Rvcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFWaWV3V2lsZGNhcmQuanMubWFwIiwiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSAoX2EgPSBkYXRhVmlld09iamVjdHMgPT09IG51bGwgfHwgZGF0YVZpZXdPYmplY3RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlld09iamVjdHNbb2JqZWN0TmFtZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVt0aGlzLm5hbWVdO1xuICAgICAgICB0aGlzLnZhbHVlID0gRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldFByb3BlcnR5VmFsdWUodGhpcywgbmV3VmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBbGlnbm1lbnRHcm91cCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJBbGlnbm1lbnRHcm91cFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5BbGlnbm1lbnRHcm91cCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1vZGU6IHRoaXMubW9kZSwgc3VwcG9ydHNOb1NlbGVjdGlvbjogdGhpcy5zdXBwb3J0c05vU2VsZWN0aW9uIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2ggZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVG9nZ2xlU3dpdGNoXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRvZ2dsZVN3aXRjaCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQ29sb3JQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQ29sb3JQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBkZWZhdWx0Q29sb3I6IHRoaXMuZGVmYXVsdENvbG9yLCBpc05vRmlsbEl0ZW1TdXBwb3J0ZWQ6IHRoaXMuaXNOb0ZpbGxJdGVtU3VwcG9ydGVkIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOdW1VcERvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTnVtVXBEb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk51bVVwRG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgTnVtVXBEb3duIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTbGlkZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2xpZGVyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRhdGVQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRGF0ZVBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLnBsYWNlaG9sZGVyS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5wbGFjZWhvbGRlcktleSkgOiB0aGlzLnBsYWNlaG9sZGVyLCB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtZXJnZVZhbHVlczogdGhpcy5tZXJnZVZhbHVlcywgZmlsdGVyVmFsdWVzOiB0aGlzLmZpbHRlclZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRHVyYXRpb25QaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHVyYXRpb25QaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHVyYXRpb25QaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVycm9yUmFuZ2VDb250cm9sIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkVycm9yUmFuZ2VDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkVycm9yUmFuZ2VDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGaWVsZFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGaWVsZFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GaWVsZFBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycywgYWxsb3dNdWx0aXBsZVZhbHVlczogdGhpcy5hbGxvd011bHRpcGxlVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0ZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dElucHV0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRJbnB1dCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFRleHRJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dEFyZWFcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dEFyZWEgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250UGlja2VyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFkaWVudEJhciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJHcmFkaWVudEJhclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5HcmFkaWVudEJhciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW1hZ2VVcGxvYWRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuSW1hZ2VVcGxvYWQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3RFZGl0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTGlzdEVkaXRvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5MaXN0RWRpdG9yICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWFkT25seVRleHQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiUmVhZE9ubHlUZXh0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlJlYWRPbmx5VGV4dCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhcGVNYXBTZWxlY3RvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTaGFwZU1hcFNlbGVjdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNoYXBlTWFwU2VsZWN0b3IgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3I6IHRoaXMuaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250Q29udHJvbCBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250Q29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250Q29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm9sZDogKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGl0YWxpYzogKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdW5kZXJsaW5lOiAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRGYW1pbHkuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmZvbnRTaXplLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm9sZCA/IHRoaXMuYm9sZC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuaXRhbGljID8gdGhpcy5pdGFsaWMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnVuZGVybGluZSA/IHRoaXMudW5kZXJsaW5lLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmZvbnRTaXplLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1hcmdpblBhZGRpbmcgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTWFyZ2luUGFkZGluZ1wiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5NYXJnaW5QYWRkaW5nICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20uZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMucmlnaHQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy50b3AuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib3R0b20uZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGVmdC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucmlnaHQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnRvcC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuYm90dG9tLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckl0ZW0gZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzLm1hcCIsImltcG9ydCB7IENvbXBvc2l0ZUNhcmQsIFNpbXBsZUNhcmQgfSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgPSBsb2NhbGl6YXRpb25NYW5hZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBmcm9tIG1ldGFkYXRhIGRhdGFWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVZpZXdzIG1ldGFkYXRhIGRhdGFWaWV3IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsXG4gICAgICovXG4gICAgcG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCh0eXBlQ2xhc3MsIGRhdGFWaWV3KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IG5ldyB0eXBlQ2xhc3MoKTtcbiAgICAgICAgY29uc3QgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRpbmdNb2RlbCA9IHtcbiAgICAgICAgICAgIGNhcmRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbC5jYXJkc1xuICAgICAgICAgICAgLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKVxuICAgICAgICAgICAgLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDYXJkID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGlzcGxheU5hbWVLZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGlzcGxheU5hbWVLZXkpIDogY2FyZC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRlc2NyaXB0aW9uS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1aWQ6IGNhcmQubmFtZSArIFwiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NQYW5lOiBjYXJkLmFuYWx5dGljc1BhbmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXJkLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXJJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVySXRlbVVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2VzIGFuZCBhZGQgdGhlbSB0byBjdXJyZW50IGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjb250YWluZXJJdGVtLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0uc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRhaW5lci5jb250YWluZXJJdGVtcy5wdXNoKGZvcm1hdHRpbmdDb250YWluZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdHcm91cC5jb250YWluZXIgPSBmb3JtYXR0aW5nQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9ybWF0dGluZ0dyb3VwLmRpc3BsYXlOYW1lID09IHVuZGVmaW5lZCA/IGZvcm1hdHRpbmdDYXJkIDogZm9ybWF0dGluZ0dyb3VwKS50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nR3JvdXAuc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQucmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nTW9kZWwuY2FyZHMucHVzaChmb3JtYXR0aW5nQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGluZ01vZGVsO1xuICAgIH1cbiAgICBidWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXMgfSkge1xuICAgICAgICAvLyBGaWx0ZXIgc2xpY2VzIGJhc2VkIG9uIHRoZWlyIHZpc2liaWxpdHlcbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGNvbnN0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGxldCBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgICAgICBsZXQgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmICgoc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnR5cGUpID09PSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovICYmIHNsaWNlLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCJpbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5pbXBvcnQgeyBkYXRhVmlld1dpbGRjYXJkIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHB1YmxpYyBmb250ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIixcclxuICAgICAgICAgICAgdmFsdWU6IDEyXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9sZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2ZmZmZmZlwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFsdGVybmF0ZVRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIHRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmNWY1ZjVcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcInZhbHVlc1wiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlZhbHVlc1wiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFtcclxuICAgICAgICB0aGlzLmZvbnQsIFxyXG4gICAgICAgIHRoaXMudGV4dENvbG9yLCBcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciwgXHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGVUZXh0Q29sb3IsIFxyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLCBcclxuICAgICAgICB0aGlzLnRleHRXcmFwXHJcbiAgICBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmR7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInRhYmxlXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJUYWJsZVwiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbnB1YmxpYyBoZWFkZXJCb2xkID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaGVhZGVyQm9sZFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhlYWRlciBCb2xkXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgc3dpdGNoVmFsdWVzVG9Sb3dzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic3dpdGNoVmFsdWVzVG9Sb3dzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3dpdGNoIHZhbHVlcyB0byByb3dzXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeVdvcmRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiY2F0ZWdvcnlXb3JkV3JhcFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNhdGVnb3J5IFdvcmQgV3JhcFwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2YWx1ZVJvd0hlaWdodFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlIFJvdyBIZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgUm93IEhlaWdodFwiLFxyXG4gICAgICAgIHZhbHVlOiAzMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdG90YWxSb3dIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ0b3RhbFJvd0hlaWdodFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRvdGFsIFJvdyBIZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHNsaWNlczogRm9ybWF0dGluZ1NldHRpbmdzU2xpY2VbXSA9IFt0aGlzLnN3aXRjaFZhbHVlc1RvUm93cywgdGhpcy5jYXRlZ29yeVdvcmRXcmFwLCB0aGlzLnZhbHVlUm93SGVpZ2h0LCB0aGlzLmFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0LCB0aGlzLnRvdGFsUm93SGVpZ2h0XVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiVmFsdWUgY29uZGl0aW9uYWwgZm9ybWF0dGluZ1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIGJhciBjb25kaXRpb25hbCBmb3JtYXR0aW5nXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImNhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDYXRlZ29yeSBjb25kaXRpb25hbCBmb3JtYXR0aW5nXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMzMzMzMzXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdG9yOiBkYXRhVmlld1dpbGRjYXJkLmNyZWF0ZURhdGFWaWV3V2lsZGNhcmRTZWxlY3RvcihkYXRhVmlld1dpbGRjYXJkLkRhdGFWaWV3V2lsZGNhcmRNYXRjaGluZ09wdGlvbi5JbnN0YW5jZXNBbmRUb3RhbHMpLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy50ZXh0Q29sb3JdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhcnNGb3JtYXR0aW5nU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIEJhcnNcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgc2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzaG93RGF0YUJhcnMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93RGF0YUJhcnNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IERhdGEgQmFyc1wiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZGF0YUJhckNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJkYXRhQmFyQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEYXRhIEJhciBDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMzMWI2ZmRcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGRhdGFCYXJIZWlnaHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkYXRhQmFySGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRGF0YSBCYXIgSGVpZ2h0ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiA4MCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdHJhbnNwYXJlbmN5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVHJhbnNwYXJlbmN5ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiAyMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYm9yZGVyT24gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJPblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJvcmRlciBPblwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBtYXRjaERhdGFCYXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWF0Y2ggRGF0YSBCYXIgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYm9yZGVyVGhpY2tuZXNzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyVGhpY2tuZXNzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9yZGVyIFRoaWNrbmVzc1wiLFxyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCb3JkZXIgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDAwMDAwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBtaW5WYWx1ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1pblZhbHVlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWluaW11bSBWYWx1ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBtYXhWYWx1ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1heFZhbHVlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTWF4aW11bSBWYWx1ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBsYWJlbHNPdXRzaWRlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwibGFiZWxzT3V0c2lkZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhYmVscyBPdXRzaWRlXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzaG93WmVyb0xpbmUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93WmVyb0xpbmVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IFplcm8gTGluZVwiLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgemVyb0xpbmVDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiemVyb0xpbmVDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlplcm8gTGluZSBDb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMwMDAwMDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiWmVybyBMaW5lIFRyYW5zcGFyZW5jeSAoJSlcIixcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0U2VyaWVzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTZWxlY3QgU2VyaWVzXCIsXHJcbiAgICAgICAgbmFtZTogXCJzZWxlY3RTZXJpZXNHcm91cFwiLFxyXG4gICAgICAgIHNsaWNlczogW3RoaXMuc2VyaWVzXVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGRhdGFCYXJzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEYXRhIEJhcnMgU2V0dGluZ3NcIixcclxuICAgICAgICBuYW1lOiBcImRhdGFCYXJzR3JvdXBcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLnNob3dEYXRhQmFycywgdGhpcy5kYXRhQmFyQ29sb3IsIHRoaXMuZGF0YUJhckhlaWdodCwgdGhpcy50cmFuc3BhcmVuY3ksIHRoaXMuYm9yZGVyT24sIHRoaXMubWF0Y2hEYXRhQmFyQ29sb3IsIHRoaXMuYm9yZGVyVGhpY2tuZXNzLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlLCB0aGlzLmxhYmVsc091dHNpZGUsIHRoaXMuc2hvd1plcm9MaW5lLCB0aGlzLnplcm9MaW5lQ29sb3IsIHRoaXMuemVyb0xpbmVUcmFuc3BhcmVuY3ldXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgZ3JvdXBzOiBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXBbXSA9IFt0aGlzLnNlbGVjdFNlcmllc0dyb3VwLCB0aGlzLmRhdGFCYXJzR3JvdXBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhck1hcmtlcnNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJkYXRhQmFyTWFya2Vyc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiRGF0YSBCYXIgTWFya2Vyc1wiO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG90YWxzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidG90YWxzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJUb3RhbHNcIjtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc2hvd1RvdGFsUm93ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwic2hvd1RvdGFsUm93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBUb3RhbCBSb3dcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdG90YWxCZWhhdmlvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcInRvdGFsQmVoYXZpb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJNZWFzdXJlIFNlbGVjdGlvblwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIk1lYXN1cmVcIiwgZGlzcGxheU5hbWU6IFwiTWVhc3VyZVwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWFzdXJlXCIsIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmVcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlN1bVwiLCBkaXNwbGF5TmFtZTogXCJTdW1cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkF2ZXJhZ2VcIiwgZGlzcGxheU5hbWU6IFwiQXZlcmFnZVwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnRcIiwgZGlzcGxheU5hbWU6IFwiQ291bnRcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkNvdW50IERpc3RpbmN0XCIsIGRpc3BsYXlOYW1lOiBcIkNvdW50IERpc3RpbmN0XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNYXhcIiwgZGlzcGxheU5hbWU6IFwiTWF4XCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJNaW5cIiwgZGlzcGxheU5hbWU6IFwiTWluXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTJcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaXRhbGljOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaXRhbGljXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkl0YWxpY1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICB1bmRlcmxpbmU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiVW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdGV4dENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNkMGQwZDBcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBzbGljZXM6IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlW10gPSBbdGhpcy5zaG93VG90YWxSb3csIHRoaXMudG90YWxCZWhhdmlvciwgdGhpcy5mb250LCB0aGlzLnRleHRDb2xvciwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHRoaXMudGV4dFdyYXBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgcHVibGljIGhvcml6b250YWxHcmlkbGluZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZGxpbmVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSG9yaXpvbnRhbCBncmlkbGluZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiaG9yaXpvbnRhbEdyaWRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2QwZDBkMFwiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIGhvcml6b250YWxHcmlkV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZFdpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3kgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJob3Jpem9udGFsR3JpZFRyYW5zcGFyZW5jeVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkhvcml6b250YWwgZ3JpZCB0cmFuc3BhcmVuY3kgKCUpXCIsXHJcbiAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsR3JpZGxpbmVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidmVydGljYWxHcmlkbGluZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWZXJ0aWNhbCBncmlkbGluZXNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZDBkMGQwXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxHcmlkV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2ZXJ0aWNhbEdyaWRXaWR0aFwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIldpZHRoXCIsXHJcbiAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIGdyaWQgdHJhbnNwYXJlbmN5ICglKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImdyaWRcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJHcmlkXCI7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRsaW5lcyxcclxuICAgICAgICB0aGlzLmhvcml6b250YWxHcmlkQ29sb3IsXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsR3JpZFdpZHRoLFxyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbEdyaWRUcmFuc3BhcmVuY3ksXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRsaW5lcyxcclxuICAgICAgICB0aGlzLnZlcnRpY2FsR3JpZENvbG9yLFxyXG4gICAgICAgIHRoaXMudmVydGljYWxHcmlkV2lkdGgsXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEdyaWRUcmFuc3BhcmVuY3lcclxuICAgIF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uSGVhZGVyc1NldHRpbmdzIGV4dGVuZHMgZm9ybWF0dGluZ1NldHRpbmdzLkNvbXBvc2l0ZUNhcmQge1xyXG4gICAgcHVibGljIGZvbnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRDb250cm9sKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgRmFtaWx5XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTFcclxuICAgICAgICB9KSxcclxuICAgICAgICBib2xkOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJCb2xkXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiMxZTNhOGFcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWxpZ25tZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BbGlnbm1lbnRHcm91cCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbm1lbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJIZWFkZXIgYWxpZ25tZW50XCIsXHJcbiAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxyXG4gICAgICAgIG1vZGU6IHBvd2VyYmkudmlzdWFscy5BbGlnbm1lbnRHcm91cE1vZGUuSG9yaXpvbmFsLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0V3JhcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRleHRXcmFwXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCB3cmFwXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHRleHRHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHRcIixcclxuICAgICAgICBuYW1lOiBcInRleHRcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmZvbnQsIHRoaXMudGV4dENvbG9yLCB0aGlzLmJhY2tncm91bmRDb2xvciwgdGhpcy5hbGlnbm1lbnQsIHRoaXMudGV4dFdyYXBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgaGVhZGVyUm93SGVpZ2h0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiaGVhZGVyUm93SGVpZ2h0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIHJvdyBoZWlnaHRcIixcclxuICAgICAgICB2YWx1ZTogMzUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIG9wdGlvbnNHcm91cCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuR3JvdXAoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk9wdGlvbnNcIixcclxuICAgICAgICBuYW1lOiBcIm9wdGlvbnNcIixcclxuICAgICAgICBzbGljZXM6IFt0aGlzLmhlYWRlclJvd0hlaWdodF1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lU2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibmFtZVNlcmllc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlNlcmllc1wiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgbmFtZU92ZXJyaWRlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwibmFtZU92ZXJyaWRlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIE5hbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBjdXN0b20gaGVhZGVyIG5hbWVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lc0dyb3VwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Hcm91cCh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTmFtZXNcIixcclxuICAgICAgICBuYW1lOiBcIm5hbWVzXCIsXHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5uYW1lU2VyaWVzLCB0aGlzLm5hbWVPdmVycmlkZV1cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImNvbHVtbkhlYWRlcnNcIjtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJDb2x1bW4gaGVhZGVyc1wiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGdyb3VwczogZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwW10gPSBbdGhpcy50ZXh0R3JvdXAsIHRoaXMub3B0aW9uc0dyb3VwLCB0aGlzLm5hbWVzR3JvdXBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWNpZmljQ29sdW1uU2V0dGluZ3MgZXh0ZW5kcyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29tcG9zaXRlQ2FyZCB7XHJcbiAgICBwdWJsaWMgc2VyaWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2VyaWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIsIGRpc3BsYXlOYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGFwcGx5VG9IZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhcHBseVRvSGVhZGVyXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gaGVhZGVyXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYXBwbHlUb1RvdGFsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb1RvdGFsXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQXBwbHkgdG8gdG90YWxcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhcHBseVRvVmFsdWVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHZhbHVlc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBhcHBseVNldHRpbmdzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBcHBseSBzZXR0aW5ncyB0b1wiLFxyXG4gICAgICAgIG5hbWU6IFwiYXBwbHlTZXR0aW5nc1RvXCIsXHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5zZXJpZXMsIHRoaXMuYXBwbHlUb0hlYWRlciwgdGhpcy5hcHBseVRvVG90YWwsIHRoaXMuYXBwbHlUb1ZhbHVlc11cclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBmb250ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250Q29udHJvbCh7XHJcbiAgICAgICAgbmFtZTogXCJmb250XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IEZhbWlseVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZm9udFNpemU6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IFNpemVcIixcclxuICAgICAgICAgICAgdmFsdWU6IDEyXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYm9sZDogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcImJvbGRcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiQm9sZFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KSxcclxuICAgICAgICBpdGFsaWM6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSXRhbGljXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHVuZGVybGluZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJVbmRlcmxpbmVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMDBiOGQ0XCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjZmZmZmZmXCIgfSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHB1YmxpYyBhbHRlcm5hdGVUZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSB0ZXh0IGNvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiIzMzMzMzM1wiIH0sXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbHRlcm5hdGUgYmFja2dyb3VuZCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmNWY1ZjVcIiB9LFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIHRleHRXcmFwID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dFdyYXBcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgYWxpZ25tZW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BbGlnbm1lbnRHcm91cCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbm1lbnRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJBbGlnbm1lbnRcIixcclxuICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgbW9kZTogcG93ZXJiaS52aXN1YWxzLkFsaWdubWVudEdyb3VwTW9kZS5Ib3Jpem9uYWwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBwdWJsaWMgZGlzcGxheVVuaXRzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5BdXRvRHJvcGRvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZGlzcGxheVVuaXRzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRGlzcGxheSB1bml0c1wiLFxyXG4gICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcHVibGljIGRlY2ltYWxQbGFjZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkZWNpbWFsUGxhY2VzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWUgZGVjaW1hbCBwbGFjZXNcIixcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzR3JvdXAgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZXNcIixcclxuICAgICAgICBuYW1lOiBcInNwZWNpZmljVmFsdWVzXCIsIC8vIE5PVEU6IHJlbmFtZWQgdG8gc3BlY2lmaWNWYWx1ZXMgdG8gYXZvaWQgY2xhc2ggd2l0aCBnbG9iYWwgJ3ZhbHVlcycgb2JqZWN0XHJcbiAgICAgICAgc2xpY2VzOiBbdGhpcy5mb250LCB0aGlzLnRleHRDb2xvciwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsIHRoaXMuYWx0ZXJuYXRlVGV4dENvbG9yLCB0aGlzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuZGlzcGxheVVuaXRzLCB0aGlzLmRlY2ltYWxQbGFjZXMsIHRoaXMudGV4dFdyYXBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJzcGVjaWZpY0NvbHVtblwiO1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIlNwZWNpZmljIGNvbHVtblwiO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGdyb3VwczogZm9ybWF0dGluZ1NldHRpbmdzLkdyb3VwW10gPSBbdGhpcy5hcHBseVNldHRpbmdzR3JvdXAsIHRoaXMudmFsdWVzR3JvdXBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sdW1uV2lkdGhTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJjb2x1bW5XaWR0aFwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiQ29sdW1uIFdpZHRoXCI7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlDb2x1bW5XaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImNhdGVnb3J5Q29sdW1uV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDYXRlZ29yeSBDb2x1bW4gV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMTUwXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgYWxpZ25lZENvbHVtbnMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJhbGlnbmVkQ29sdW1uc1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkFsaWduZWQgY29sdW1uc1wiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgdmFsdWVDb2x1bW5XaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInZhbHVlQ29sdW1uV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJWYWx1ZSBDb2x1bW4gV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogMTAwXHJcbiAgICB9KTtcclxuXHJcbiAgICBwdWJsaWMgc2xpY2VzOiBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZVtdID0gW3RoaXMuY2F0ZWdvcnlDb2x1bW5XaWR0aCwgdGhpcy5hbGlnbmVkQ29sdW1ucywgdGhpcy52YWx1ZUNvbHVtbldpZHRoXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwge1xyXG4gICAgcHVibGljIHZhbHVlc01lbnU6IFZhbHVlc1NldHRpbmdzID0gbmV3IFZhbHVlc1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgc3BlY2lmaWNDb2x1bW46IFNwZWNpZmljQ29sdW1uU2V0dGluZ3MgPSBuZXcgU3BlY2lmaWNDb2x1bW5TZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGNvbHVtbkhlYWRlcnM6IENvbHVtbkhlYWRlcnNTZXR0aW5ncyA9IG5ldyBDb2x1bW5IZWFkZXJzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyB0YWJsZTogVGFibGVTZXR0aW5ncyA9IG5ldyBUYWJsZVNldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmc6IENhdGVnb3J5Q29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgQ2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIHZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nOiBWYWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IFZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBkYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZzogRGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBEYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZGF0YUJhcnNGb3JtYXR0aW5nOiBEYXRhQmFyc0Zvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBEYXRhQmFyc0Zvcm1hdHRpbmdTZXR0aW5ncygpO1xyXG4gICAgcHVibGljIGRhdGFCYXJNYXJrZXJzOiBEYXRhQmFyTWFya2Vyc1NldHRpbmdzID0gbmV3IERhdGFCYXJNYXJrZXJzU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyB0b3RhbHM6IFRvdGFsc1NldHRpbmdzID0gbmV3IFRvdGFsc1NldHRpbmdzKCk7XHJcbiAgICBwdWJsaWMgZ3JpZE1lbnU6IEdyaWRTZXR0aW5ncyA9IG5ldyBHcmlkU2V0dGluZ3MoKTtcclxuICAgIHB1YmxpYyBjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGhTZXR0aW5ncyA9IG5ldyBDb2x1bW5XaWR0aFNldHRpbmdzKCk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBjYXJkczogRm9ybWF0dGluZ1NldHRpbmdzQ2FyZFtdID0gW3RoaXMuc3BlY2lmaWNDb2x1bW4sIHRoaXMuY29sdW1uSGVhZGVycywgdGhpcy52YWx1ZXNNZW51LCB0aGlzLnRhYmxlLCB0aGlzLmNvbHVtbldpZHRoLCB0aGlzLnRvdGFscywgdGhpcy5ncmlkTWVudSwgdGhpcy5jYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZywgdGhpcy52YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZywgdGhpcy5kYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZywgdGhpcy5kYXRhQmFyc0Zvcm1hdHRpbmcsIHRoaXMuZGF0YUJhck1hcmtlcnNdO1xyXG59IiwiLypcclxuKiAgUG93ZXIgQkkgVmlzdWFsIENMSVxyXG4qXHJcbiogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXHJcbiogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogIE1JVCBMaWNlbnNlXHJcbipcclxuKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4qICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlwiU29mdHdhcmVcIlwiKSwgdG8gZGVhbFxyXG4qICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiogIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbipcclxuKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbipcclxuKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICpBUyBJUyosIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4qICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuKiAgVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vLi4vc3R5bGUvdmlzdWFsLmxlc3NcIjtcclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBEYXRhVmlldyA9IHBvd2VyYmkuRGF0YVZpZXc7XHJcbmltcG9ydCB7IFZpc3VhbFNldHRpbmdzIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSwgZm9ybWF0dGluZ1NldHRpbmdzIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IHsgZGF0YVZpZXdPYmplY3RzIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1kYXRhdmlld3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsIGltcGxlbWVudHMgSVZpc3VhbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB2aXN1YWxTZXR0aW5nczogVmlzdWFsU2V0dGluZ3M7XHJcbiAgICBwcml2YXRlIGRhdGFWaWV3OiBEYXRhVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB0YWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFibGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YWJsZS1jb250YWluZXJcIjtcclxuICAgICAgICBvcHRpb25zLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICB0aGlzLnRhYmxlLmNsYXNzTmFtZSA9ICdwYmktdGFibGUnO1xyXG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGFibGUpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMudmlzdWFsU2V0dGluZ3MgPSBuZXcgVmlzdWFsU2V0dGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Rm9ybWF0dGluZ01vZGVsKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5idWlsZEZvcm1hdHRpbmdNb2RlbCh0aGlzLnZpc3VhbFNldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhVmlld3MgJiYgb3B0aW9ucy5kYXRhVmlld3NbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy52aXN1YWxTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5wb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKFZpc3VhbFNldHRpbmdzLCBvcHRpb25zLmRhdGFWaWV3c1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTsgLy8gVXBkYXRlIGRhdGFWaWV3IGhlcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGhTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY29sdW1uV2lkdGg7XHJcbiAgICAgICAgY29uc3QgdGFibGVTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MudGFibGU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnZhbHVlc01lbnU7XHJcbiAgICAgICAgY29uc3QgY2VsbEl0YWxpYyA9IHZhbHVlc1NldHRpbmdzLmZvbnQuaXRhbGljPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBjZWxsVW5kZXJsaW5lID0gdmFsdWVzU2V0dGluZ3MuZm9udC51bmRlcmxpbmU/LnZhbHVlIHx8IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2xvciA9IHZhbHVlc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBhbHRlcm5hdGVUZXh0Q29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5hbHRlcm5hdGVUZXh0Q29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2VsbEZvbnRGYW1pbHkgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnRvdGFscztcclxuICAgICAgICBjb25zdCBzaG93VG90YWxSb3cgPSB0b3RhbHNTZXR0aW5ncy5zaG93VG90YWxSb3cudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dJdGFsaWMgPSB0b3RhbHNTZXR0aW5ncy5mb250Lml0YWxpYz8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dXb3JkV3JhcCA9IHRvdGFsc1NldHRpbmdzLnRleHRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Rm9udFNpemUgPSB0b3RhbHNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93Rm9udEZhbWlseSA9IHRvdGFsc1NldHRpbmdzLmZvbnQuZm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1RleHRDb2xvciA9IHRvdGFsc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNvbHVtbldpZHRoID0gY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5V29yZFdyYXAgPSB0YWJsZVNldHRpbmdzLmNhdGVnb3J5V29yZFdyYXAudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWVXb3JkV3JhcCA9IHZhbHVlc1NldHRpbmdzLnRleHRXcmFwLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY29sdW1uSGVhZGVycztcclxuICAgICAgICBjb25zdCBoZWFkZXJXb3JkV3JhcCA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy50ZXh0V3JhcD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY29sdW1uV2lkdGggPSBjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyUm93SGVpZ2h0ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmhlYWRlclJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZVJvd0hlaWdodCA9IHRhYmxlU2V0dGluZ3MudmFsdWVSb3dIZWlnaHQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRlVmFsdWVSb3dIZWlnaHQgPSB0YWJsZVNldHRpbmdzLmFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUm93SGVpZ2h0ID0gdGFibGVTZXR0aW5ncy50b3RhbFJvd0hlaWdodC52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJGb250U2l6ZSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJvbGQgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC5ib2xkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckl0YWxpYyA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250Lml0YWxpYy52YWx1ZTtcclxuICAgICAgICBjb25zdCBoZWFkZXJVbmRlcmxpbmUgPSBjb2x1bW5IZWFkZXJzU2V0dGluZ3MuZm9udC51bmRlcmxpbmUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRm9udEZhbWlseSA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5mb250LmZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyQWxpZ25tZW50ID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLmFsaWdubWVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBjZWxsRm9udFNpemUgPSB2YWx1ZXNTZXR0aW5ncy5mb250LmZvbnRTaXplLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQm9sZCA9IHZhbHVlc1NldHRpbmdzLmZvbnQuYm9sZD8udmFsdWUgfHwgZmFsc2U7XHJcbiAgICAgICAgY29uc3QgdG90YWxSb3dCb2xkID0gdG90YWxzU2V0dGluZ3MuZm9udC5ib2xkPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd1VuZGVybGluZSA9IHRvdGFsc1NldHRpbmdzLmZvbnQudW5kZXJsaW5lPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZXNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yID0gdmFsdWVzU2V0dGluZ3MuYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckJhY2tncm91bmRDb2xvciA9IGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IudmFsdWUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dENvbG9yID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0b3RhbFJvd0JhY2tncm91bmRDb2xvciA9IHRvdGFsc1NldHRpbmdzLmJhY2tncm91bmRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmdyaWRNZW51O1xyXG4gICAgICAgIGNvbnN0IGdyaWRCb3JkZXJDb2xvciA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZENvbG9yLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q0ZTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuY2F0ZWdvcnlDb25kaXRpb25hbEZvcm1hdHRpbmc7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENhdGVnb3J5VGV4dENvbG9yID0gY2F0ZWdvcnlDRlNldHRpbmdzLnRleHRDb2xvci52YWx1ZS52YWx1ZTtcclxuICAgICAgICBjb25zdCB2YWx1ZUNGU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLnZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIHZhbHVlQ0ZTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuXHJcbiAgICAgICAgdG90YWxzU2V0dGluZ3Muc2xpY2VzID0gW1xyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5zaG93VG90YWxSb3csXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLmZvbnQsXHJcbiAgICAgICAgICAgIHRvdGFsc1NldHRpbmdzLnRleHRDb2xvcixcclxuICAgICAgICAgICAgdG90YWxzU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy50ZXh0V3JhcFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFCYXJzU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmRhdGFCYXJzRm9ybWF0dGluZztcclxuICAgICAgICBjb25zdCBkYXRhQmFyc0NGU2V0dGluZ3MgPSB0aGlzLnZpc3VhbFNldHRpbmdzLmRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nO1xyXG4gICAgICAgIGRhdGFCYXJzQ0ZTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YUJhck1hcmtlcnNTZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3MuZGF0YUJhck1hcmtlcnM7XHJcbiAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMgPSBbXTsgLy8gV2lsbCBiZSBwb3B1bGF0ZWQgZHluYW1pY2FsbHkgcGVyLW1lYXN1cmVcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgY29sdW1uV2lkdGggc2xpY2VzOiBiYXNlIHNsaWNlcyBhbHdheXMgc2hvd24sIHBlci1tZWFzdXJlIHNsaWNlcyBhZGRlZCBkeW5hbWljYWxseSB3aGVuIG5vdCBhbGlnbmVkXHJcbiAgICAgICAgaWYgKGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgY29sdW1uV2lkdGhTZXR0aW5ncy5zbGljZXMgPSBbY29sdW1uV2lkdGhTZXR0aW5ncy5jYXRlZ29yeUNvbHVtbldpZHRoLCBjb2x1bW5XaWR0aFNldHRpbmdzLmFsaWduZWRDb2x1bW5zLCBjb2x1bW5XaWR0aFNldHRpbmdzLnZhbHVlQ29sdW1uV2lkdGhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3Muc2xpY2VzID0gW2NvbHVtbldpZHRoU2V0dGluZ3MuY2F0ZWdvcnlDb2x1bW5XaWR0aCwgY29sdW1uV2lkdGhTZXR0aW5ncy5hbGlnbmVkQ29sdW1uc107XHJcbiAgICAgICAgICAgIC8vIFBlci1tZWFzdXJlIHdpZHRoIHNsaWNlcyB3aWxsIGJlIGFkZGVkIGluIHRoZSB2YWx1ZXMuZm9yRWFjaCBsb29wIGJlbG93XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBoZXggdG8gcmdiYVxyXG4gICAgICAgIGNvbnN0IGFwcGx5VHJhbnNwYXJlbmN5ID0gKGhleDogc3RyaW5nLCB0cmFuc3BhcmVuY3lQY3Q6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaGV4KSByZXR1cm4gaGV4O1xyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgaGV4IHN0cmluZzogdHJpbSB3aGl0ZXNwYWNlIGFuZCByZW1vdmUgYW55IGxlYWRpbmcgbWludXMgc2lnblxyXG4gICAgICAgICAgICBsZXQgY2xlYW5IZXggPSBoZXgudHJpbSgpLnJlcGxhY2UoL14tLywgJycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWRkICcjJyBpZiBtaXNzaW5nIGJ1dCB0aGUgc3RyaW5nIGxvb2tzIGxpa2UgYSB2YWxpZCAzLCA0LCA2IG9yIDggY2hhcmFjdGVyIGhleCBjb2RlXHJcbiAgICAgICAgICAgIGlmICgvXihbMC05QS1GYS1mXXszfXxbMC05QS1GYS1mXXs0fXxbMC05QS1GYS1mXXs2fXxbMC05QS1GYS1mXXs4fSkkLy50ZXN0KGNsZWFuSGV4KSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5IZXggPSBcIiNcIiArIGNsZWFuSGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAxIC0gKHRyYW5zcGFyZW5jeVBjdCAvIDEwMCkpKTtcclxuICAgICAgICAgICAgaWYgKGNsZWFuSGV4LnN0YXJ0c1dpdGgoXCIjXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBhSGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhbkhleC5sZW5ndGggPT09IDQpIHsgLy8gI1JHQlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChjbGVhbkhleFsxXSArIGNsZWFuSGV4WzFdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGNsZWFuSGV4WzJdICsgY2xlYW5IZXhbMl0sIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQoY2xlYW5IZXhbM10gKyBjbGVhbkhleFszXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGVhbkhleC5sZW5ndGggPT09IDUpIHsgLy8gI1JHQkFcclxuICAgICAgICAgICAgICAgICAgICByID0gcGFyc2VJbnQoY2xlYW5IZXhbMV0gKyBjbGVhbkhleFsxXSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChjbGVhbkhleFsyXSArIGNsZWFuSGV4WzJdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IHBhcnNlSW50KGNsZWFuSGV4WzNdICsgY2xlYW5IZXhbM10sIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBhSGV4ID0gcGFyc2VJbnQoY2xlYW5IZXhbNF0gKyBjbGVhbkhleFs0XSwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGVhbkhleC5sZW5ndGggPT09IDcpIHsgLy8gI1JSR0dCQlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChjbGVhbkhleFsxXSArIGNsZWFuSGV4WzJdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGNsZWFuSGV4WzNdICsgY2xlYW5IZXhbNF0sIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQoY2xlYW5IZXhbNV0gKyBjbGVhbkhleFs2XSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGVhbkhleC5sZW5ndGggPT09IDkpIHsgLy8gI1JSR0dCQkFBIG9yICNBQVJSR0dCQiAtIHVzdWFsbHkgI1JSR0dCQkFBIGluIENTU1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBwYXJzZUludChjbGVhbkhleFsxXSArIGNsZWFuSGV4WzJdLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IHBhcnNlSW50KGNsZWFuSGV4WzNdICsgY2xlYW5IZXhbNF0sIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gcGFyc2VJbnQoY2xlYW5IZXhbNV0gKyBjbGVhbkhleFs2XSwgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFIZXggPSBwYXJzZUludChjbGVhbkhleFs3XSArIGNsZWFuSGV4WzhdLCAxNikgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGVhbkhleDsgLy8gZmFsbGJhY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFscGhhID0gYWxwaGEgKiBhSGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YWxwaGF9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNsZWFuSGV4OyAvLyBmYWxsYmFjayBpZiBub3QgaGV4IChlLmcuIFwicmVkXCIpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaG9yaXpMaW5lcyA9IGdyaWRTZXR0aW5ncy5ob3Jpem9udGFsR3JpZGxpbmVzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhvcml6Q29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeShncmlkU2V0dGluZ3MuaG9yaXpvbnRhbEdyaWRDb2xvci52YWx1ZS52YWx1ZSwgZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkVHJhbnNwYXJlbmN5LnZhbHVlKTtcclxuICAgICAgICBjb25zdCBob3JpeldpZHRoID0gZ3JpZFNldHRpbmdzLmhvcml6b250YWxHcmlkV2lkdGgudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaG9yaXpCb3JkZXJWYWx1ZSA9IGhvcml6TGluZXMgPyBgJHtob3JpeldpZHRofXB4IHNvbGlkICR7aG9yaXpDb2xvcn1gIDogJ25vbmUnO1xyXG4gICAgICAgIGNvbnN0IGhvcml6Qm9yZGVyMnhWYWx1ZSA9IGhvcml6TGluZXMgPyBgJHtob3JpeldpZHRoICogMn1weCBzb2xpZCAke2hvcml6Q29sb3J9YCA6ICdub25lJztcclxuXHJcbiAgICAgICAgY29uc3QgdmVydExpbmVzID0gZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZGxpbmVzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZlcnRDb2xvciA9IGFwcGx5VHJhbnNwYXJlbmN5KGdyaWRTZXR0aW5ncy52ZXJ0aWNhbEdyaWRDb2xvci52YWx1ZS52YWx1ZSwgZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZFRyYW5zcGFyZW5jeS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmVydFdpZHRoID0gZ3JpZFNldHRpbmdzLnZlcnRpY2FsR3JpZFdpZHRoLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHZlcnRCb3JkZXJWYWx1ZSA9IHZlcnRMaW5lcyA/IGAke3ZlcnRXaWR0aH1weCBzb2xpZCAke3ZlcnRDb2xvcn1gIDogJ25vbmUnO1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRleHQgY29sb3IgZm9yIGEgY2F0ZWdvcnkgcm93LCBzdXBwb3J0aW5nIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bTogbnVtYmVyLCB1bml0czogbnVtYmVyLCBkZWNpbWFsczogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpdmlzb3IgPSAxO1xyXG4gICAgICAgICAgICBsZXQgc3VmZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHVuaXRzID09PSAwKSB7IC8vIEF1dG9cclxuICAgICAgICAgICAgICAgIGxldCBhYnNOdW0gPSBNYXRoLmFicyhudW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFic051bSA+PSAxMDAwMDAwMDAwMDAwKSB7IGRpdmlzb3IgPSAxMDAwMDAwMDAwMDAwOyBzdWZmaXggPSBcIlRcIjsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJzTnVtID49IDEwMDAwMDAwMDApIHsgZGl2aXNvciA9IDEwMDAwMDAwMDA7IHN1ZmZpeCA9IFwiYm5cIjsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWJzTnVtID49IDEwMDAwMDApIHsgZGl2aXNvciA9IDEwMDAwMDA7IHN1ZmZpeCA9IFwiTVwiOyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhYnNOdW0gPj0gMTAwMCkgeyBkaXZpc29yID0gMTAwMDsgc3VmZml4ID0gXCJLXCI7IH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1bml0cyA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGRpdmlzb3IgPSB1bml0cztcclxuICAgICAgICAgICAgICAgIGlmICh1bml0cyA9PT0gMTAwMCkgc3VmZml4ID0gXCJLXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMCkgc3VmZml4ID0gXCJNXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1bml0cyA9PT0gMTAwMDAwMDAwMCkgc3VmZml4ID0gXCJiblwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT09IDEwMDAwMDAwMDAwMDApIHN1ZmZpeCA9IFwiVFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKG51bSAvIGRpdmlzb3IpLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFscyxcclxuICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHNcclxuICAgICAgICAgICAgfSkgKyBzdWZmaXg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0Q2F0ZWdvcnlUZXh0Q29sb3IgPSAocm93SW5kZXg6IG51bWJlciwgZGF0YVZpZXc6IERhdGFWaWV3KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkub2JqZWN0cyAmJiBjYXRlZ29yeS5vYmplY3RzW3Jvd0luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjYXRlZ29yeUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDYXRlZ29yeVRleHRDb2xvcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYXBwbHkgc3F1YXNoaW5nIHJvdyBoZWlnaHRcclxuICAgICAgICBjb25zdCBhcHBseVJvd1NxdWFzaCA9IChjZWxsOiBIVE1MRWxlbWVudCwgcm93SGVpZ2h0OiBudW1iZXIsIGZvbnRTaXplOiBudW1iZXIsIHdvcmRXcmFwOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3dIZWlnaHQgPD0gMikge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubGluZUhlaWdodCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gYCR7TWF0aC5taW4oZm9udFNpemUsIE1hdGgubWF4KDgsIHJvd0hlaWdodCAtIDYpKX1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnBhZGRpbmcgPSBcIlwiOyAvLyBmYWxsYmFjayB0byBDU1MgcGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3b3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubGluZUhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubGluZUhlaWdodCA9IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhcHBseVZlcnRpY2FsR3JpZEJvcmRlciA9IChjZWxsOiBIVE1MRWxlbWVudCwgaXNMYXN0Q2VsbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzTGFzdENlbGwpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSB2ZXJ0Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhcHBseVRvdGFsUm93U3R5bGVzID0gKGNlbGw6IEhUTUxFbGVtZW50LCB3aWR0aDogbnVtYmVyLCB3b3JkV3JhcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCB0b3RhbFJvd0hlaWdodCwgdG90YWxSb3dGb250U2l6ZSwgd29yZFdyYXApO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB0b3RhbFJvd0JvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSB0b3RhbFJvd1VuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IHRvdGFsUm93SXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSB0b3RhbFJvd1RleHRDb2xvcjtcclxuICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICBjZWxsLnN0eWxlLndoaXRlU3BhY2UgPSB3b3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICBpZiAod29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJvdywgc3VwcG9ydGluZyBjb25kaXRpb25hbCBmb3JtYXR0aW5nXHJcbiAgICAgICAgY29uc3QgZ2V0Um93QmFja2dyb3VuZENvbG9yID0gKHJvd0luZGV4OiBudW1iZXIsIGlzRXZlblJvdzogYm9vbGVhbiwgZGF0YVZpZXc6IERhdGFWaWV3KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q29sb3JQcm9wID0gaXNFdmVuUm93ID8gXCJiYWNrZ3JvdW5kQ29sb3JcIiA6IFwiYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IGlzRXZlblJvdyA/IGJhY2tncm91bmRDb2xvciA6IGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Lm9iamVjdHMgJiYgY2F0ZWdvcnkub2JqZWN0c1tyb3dJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm9iamVjdHNbcm93SW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwidGFibGVcIiwgcHJvcGVydHlOYW1lOiB0YXJnZXRDb2xvclByb3AgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHJvdyBiYWNrZ3JvdW5kIGNvbG9yLCBzdXBwb3J0aW5nIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuICAgICAgICB3aGlsZSAodGhpcy50YWJsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUucmVtb3ZlQ2hpbGQodGhpcy50YWJsZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmRhdGFWaWV3cyB8fCBvcHRpb25zLmRhdGFWaWV3cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiTm8gZGF0YSBhdmFpbGFibGVcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFWaWV3OiBEYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG5cclxuICAgICAgICBsZXQgaGFzQ2F0ZWdvcmllcyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXMgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGxldCBjYXRlZ29yaWVzID0gaGFzQ2F0ZWdvcmllcyA/IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXNbMF0gOiBudWxsO1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbCAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMgPyBkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXMgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlcyB8fCB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIk5vIGRhdGEgYXZhaWxhYmxlXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFZhbHVlc1RvUm93cyA9IHRhYmxlU2V0dGluZ3Muc3dpdGNoVmFsdWVzVG9Sb3dzPy52YWx1ZSB8fCBmYWxzZTtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSBoYXNDYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMudmFsdWVzID8gY2F0ZWdvcmllcy52YWx1ZXMubGVuZ3RoIDogKHZhbHVlc1swXS52YWx1ZXMgPyB2YWx1ZXNbMF0udmFsdWVzLmxlbmd0aCA6IDEpO1xyXG5cclxuICAgICAgICAvLyBQcmUtcHJvY2VzcyBtZWFzdXJlIHNldHRpbmdzIHRvIHBvcHVsYXRlIGZvcm1hdHRpbmcgbW9kZWwgcHJvcGVybHlcclxuICAgICAgICBsZXQgbWVhc3VyZUhlYWRlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgbGV0IG1lYXN1cmVIZWFkZXJPdmVycmlkZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgXHJcbmludGVyZmFjZSBNZWFzdXJlU3BlY2lmaWNTZXR0aW5ncyB7XHJcbiAgICB0ZXh0Q29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYWx0ZXJuYXRlVGV4dENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGFsaWdubWVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgYXBwbHlUb0hlYWRlcjogYm9vbGVhbjtcclxuICAgIGFwcGx5VG9WYWx1ZXM6IGJvb2xlYW47XHJcbiAgICBhcHBseVRvVG90YWw6IGJvb2xlYW47XHJcbiAgICBkaXNwbGF5VW5pdHM6IG51bWJlcjtcclxuICAgIGRlY2ltYWxQbGFjZXM6IG51bWJlcjtcclxuICAgIGZvbnRGYW1pbHk6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGZvbnRTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBib2xkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgaXRhbGljOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgdW5kZXJsaW5lOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgdGV4dFdyYXA6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbiAgICAgICAgICBsZXQgbWVhc3VyZVNldHRpbmdzTGlzdDogTWVhc3VyZVNwZWNpZmljU2V0dGluZ3NbXSA9IFtdO1xyXG4gICAgICAgICAgbGV0IHZhbHVlQ29sdW1uV2lkdGhzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzcGVjT2JqID0gdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHM/LnNwZWNpZmljQ29sdW1uO1xyXG4gICAgICAgICAgICAgIGxldCBzZXR0aW5nczogTWVhc3VyZVNwZWNpZmljU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRlVGV4dENvbG9yOiBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsdGVybmF0ZVRleHRDb2xvclwiIH0sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0ZUJhY2tncm91bmRDb2xvcjogZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcih2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIiB9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJhbGlnbm1lbnRcIiB9LCB1bmRlZmluZWQpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUb0hlYWRlcjogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9IZWFkZXJcIiB9LCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUb1ZhbHVlczogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9WYWx1ZXNcIiB9LCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgYXBwbHlUb1RvdGFsOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1RvdGFsXCIgfSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlVbml0czogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImRpc3BsYXlVbml0c1wiIH0sIDApLFxyXG4gICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzOiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZGVjaW1hbFBsYWNlc1wiIH0sIDEpLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWUodmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiZm9udEZhbWlseVwiIH0sIHVuZGVmaW5lZCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRTaXplXCIgfSwgdW5kZWZpbmVkKSBhcyBudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIGJvbGQ6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJib2xkXCIgfSwgdW5kZWZpbmVkKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICBpdGFsaWM6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJpdGFsaWNcIiB9LCB1bmRlZmluZWQpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgIHVuZGVybGluZTogZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlKHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcInVuZGVybGluZVwiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZSh2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSwgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0V3JhcFwiIH0sIHVuZGVmaW5lZCkgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgbWVhc3VyZVNldHRpbmdzTGlzdC5wdXNoKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGF5TmFtZSA9IHZhbHVlQ29sdW1uLnNvdXJjZS5kaXNwbGF5TmFtZSB8fCBgTWVhc3VyZSAke21lYXN1cmVIZWFkZXJzLmxlbmd0aCArIDF9YDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlcnMucHVzaChkaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmFtZU92ZXJyaWRlID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5IZWFkZXJzXCIsIHByb3BlcnR5TmFtZTogXCJuYW1lT3ZlcnJpZGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyT3ZlcnJpZGVzLnB1c2gobmFtZU92ZXJyaWRlICE9PSBcIlwiID8gbmFtZU92ZXJyaWRlIDogZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVlcnlOYW1lID0gdmFsdWVDb2x1bW4uc291cmNlLnF1ZXJ5TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNvbHVtbldpZHRoU2V0dGluZ3MuYWxpZ25lZENvbHVtbnMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uV2lkdGhzLnB1c2goY29sdW1uV2lkdGhTZXR0aW5ncy52YWx1ZUNvbHVtbldpZHRoLnZhbHVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWNXaWR0aCA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9LCBcclxuICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY29sdW1uV2lkdGhcIiwgcHJvcGVydHlOYW1lOiBcInZhbHVlQ29sdW1uV2lkdGhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3MudmFsdWVDb2x1bW5XaWR0aC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uV2lkdGhzLnB1c2goc3BlY2lmaWNXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHBlci1tZWFzdXJlIHdpZHRoIHNsaWNlIHdpdGggc2VsZWN0b3Igc28gUG93ZXIgQkkgcGVyc2lzdHMgaXQgcGVyLW1lYXN1cmVcclxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsdWVDb2x1bW5XaWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFdpZHRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNwZWNpZmljV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgZHluYW1pYyBzZXR0aW5ncyBzbGljZSBmb3IgdGhpcyBtZWFzdXJlXHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4uc291cmNlLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFsdWVDRlNldHRpbmdzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0Q29sb3JcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIFRleHQgQ29sb3JcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7IHZhbHVlOiBkZWZhdWx0TWVhc3VyZVRleHRDb2xvciB9LFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfSxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGVcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgcGVyLW1lYXN1cmUgZGF0YSBiYXIgY29sb3IgQ0Ygc2xpY2UgKGVuYWJsZXMgUEJJIHRvIGRlbGl2ZXIgcGVyLXJvdyBvYmplY3RzKVxyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0TWVhc3VyZURhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0NvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckNvbG9yXCIgfSxcclxuICAgICAgICAgICAgICAgIFwiIzMxYjZmZFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRhdGFCYXJzQ0ZTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF0YUJhckNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBEYXRhIEJhciBDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IGRlZmF1bHRNZWFzdXJlRGF0YUJhckNvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEYXRhIGJhcnMgc2V0dGluZ3NcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gRGF0YSBiYXIgbWFya2VycyBzZXR0aW5nc1xyXG4gICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93TWFya2VyXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgKyBcIiBTaG93IE1hcmtlclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNob3dNYXJrZXIsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG93TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZUl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiY3Jvc3NcIiwgZGlzcGxheU5hbWU6IFwiQ3Jvc3NcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiY2lyY2xlXCIsIGRpc3BsYXlOYW1lOiBcIkNpcmNsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJob3Jpem9udGFsTGluZVwiLCBkaXNwbGF5TmFtZTogXCJIb3Jpem9udGFsIExpbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwidmVydGljYWxMaW5lXCIsIGRpc3BsYXlOYW1lOiBcIlZlcnRpY2FsIExpbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwic2VtaUNpcmNsZVwiLCBkaXNwbGF5TmFtZTogXCJTZW1pIENpcmNsZVwiIH1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2hhcGVJdGVtID0gbWFya2VyU2hhcGVJdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gbWFya2VyU2hhcGUpIHx8IG1hcmtlclNoYXBlSXRlbXNbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXJrZXJTaGFwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE1hcmtlciBTaGFwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50U2hhcGVJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBtYXJrZXJTaGFwZUl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHsgbWV0YWRhdGE6IHF1ZXJ5TmFtZSB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YUJhck1hcmtlcnNTZXR0aW5ncy5zbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtlckNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWFya2VyIENvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IG1hcmtlckNvbG9yIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFCYXJNYXJrZXJzU2V0dGluZ3Muc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2VyU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSArIFwiIE1hcmtlciBTaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hcmtlclNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogeyBtZXRhZGF0YTogcXVlcnlOYW1lIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgdG90YWxCZWhhdmlvclJhdyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxhbnk+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJ0b3RhbHNcIiwgcHJvcGVydHlOYW1lOiBcInRvdGFsQmVoYXZpb3JcIiB9LCBcIlN1bVwiKTtcclxuICAgICAgICAgICAgICBjb25zdCB0b3RhbEJlaGF2aW9yVmFsID0gdHlwZW9mIHRvdGFsQmVoYXZpb3JSYXcgPT09IFwic3RyaW5nXCIgPyB0b3RhbEJlaGF2aW9yUmF3IDogKHRvdGFsQmVoYXZpb3JSYXcudmFsdWUgfHwgXCJTdW1cIik7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHRvdGFsQmVoYXZpb3JJdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJNZWFzdXJlXCIsIGRpc3BsYXlOYW1lOiBcIk1lYXN1cmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIlN1bVwiLCBkaXNwbGF5TmFtZTogXCJTdW1cIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIkF2ZXJhZ2VcIiwgZGlzcGxheU5hbWU6IFwiQXZlcmFnZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiQ291bnRcIiwgZGlzcGxheU5hbWU6IFwiQ291bnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIkNvdW50IERpc3RpbmN0XCIsIGRpc3BsYXlOYW1lOiBcIkNvdW50IERpc3RpbmN0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJNYXhcIiwgZGlzcGxheU5hbWU6IFwiTWF4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCJNaW5cIiwgZGlzcGxheU5hbWU6IFwiTWluXCIgfVxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJlaGF2aW9ySXRlbSA9IHRvdGFsQmVoYXZpb3JJdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gdG90YWxCZWhhdmlvclZhbCkgfHwgdG90YWxCZWhhdmlvckl0ZW1zWzFdO1xyXG5cclxuICAgICAgICAgICAgICB0b3RhbHNTZXR0aW5ncy5zbGljZXMuc3BsaWNlKG1lYXN1cmVIZWFkZXJzLmxlbmd0aCwgMCwgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5JdGVtRHJvcGRvd24oe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInRvdGFsQmVoYXZpb3JcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lICsgXCIgTWVhc3VyZSBTZWxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRCZWhhdmlvckl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB0b3RhbEJlaGF2aW9ySXRlbXMsXHJcbiAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiB7IG1ldGFkYXRhOiBxdWVyeU5hbWUgfVxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFBvcHVsYXRlIHNwZWNpZmljQ29sdW1uIHNlcmllcyBkcm9wZG93biBhbmQgcmVidWlsZCB2YWx1ZSBzbGljZXMgd2l0aCBwZXItbWVhc3VyZSBzZWxlY3RvclxyXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncyA9IHRoaXMudmlzdWFsU2V0dGluZ3Muc3BlY2lmaWNDb2x1bW47XHJcbiAgICAgICAgICBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtcyA9IG1lYXN1cmVIZWFkZXJzLm1hcChuYW1lID0+ICh7IHZhbHVlOiBuYW1lLCBkaXNwbGF5TmFtZTogbmFtZSB9KSk7XHJcbiAgICAgICAgICAvLyBSZWFkIHBlcnNpc3RlZCBzZXJpZXMgdmFsdWUgZnJvbSBkYXRhVmlldyBtZXRhZGF0YSBvYmplY3RzXHJcbiAgICAgICAgICBjb25zdCBwZXJzaXN0ZWRTZXJpZXMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8c3RyaW5nPihcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFWaWV3Lm1ldGFkYXRhLm9iamVjdHMgfHwge30sXHJcbiAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJzZXJpZXNcIiB9LFxyXG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoZWRJdGVtID0gcGVyc2lzdGVkU2VyaWVzXHJcbiAgICAgICAgICAgICAgPyBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcy5pdGVtcy5maW5kKGkgPT4gaS52YWx1ZSA9PT0gcGVyc2lzdGVkU2VyaWVzKVxyXG4gICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLnZhbHVlID0gbWF0Y2hlZEl0ZW0gfHwgc3BlY2lmaWNDb2x1bW5TZXR0aW5ncy5zZXJpZXMuaXRlbXNbMF0gfHwgeyB2YWx1ZTogXCJcIiwgZGlzcGxheU5hbWU6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgICAvLyBGaW5kIHRoZSBxdWVyeU5hbWUgZm9yIHRoZSBzZWxlY3RlZCBtZWFzdXJlIHNvIHNsaWNlcyBwZXJzaXN0IHRvIHRoZSBjb3JyZWN0IHBlci1tZWFzdXJlIG9iamVjdHNcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2VyaWVzTmFtZSA9IHNwZWNpZmljQ29sdW1uU2V0dGluZ3Muc2VyaWVzLnZhbHVlPy52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE1lYXN1cmVJZHggPSBtZWFzdXJlSGVhZGVycy5pbmRleE9mKHNlbGVjdGVkU2VyaWVzTmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlQ29sdW1uID0gc2VsZWN0ZWRNZWFzdXJlSWR4ID49IDAgPyB2YWx1ZXNbc2VsZWN0ZWRNZWFzdXJlSWR4XSA6IG51bGw7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZFF1ZXJ5TmFtZSA9IHNlbGVjdGVkVmFsdWVDb2x1bW4/LnNvdXJjZT8ucXVlcnlOYW1lO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3RzID0gc2VsZWN0ZWRWYWx1ZUNvbHVtbj8uc291cmNlPy5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RlZFF1ZXJ5TmFtZSA/IHsgbWV0YWRhdGE6IHNlbGVjdGVkUXVlcnlOYW1lIH0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgLy8gUmVhZCBjdXJyZW50IHBlci1tZWFzdXJlIHZhbHVlcyBmb3IgdGhlIHNlbGVjdGVkIGNvbHVtblxyXG4gICAgICAgICAgY29uc3Qgc2NUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NCZ0NvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYmFja2dyb3VuZENvbG9yXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQWx0VGV4dENvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQWx0QmdDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Ioc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsdGVybmF0ZUJhY2tncm91bmRDb2xvclwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0FwcGx5VG9IZWFkZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9IZWFkZXJcIiB9LCB0cnVlKTtcclxuICAgICAgICAgIGNvbnN0IHNjQXBwbHlUb1ZhbHVlcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwiYXBwbHlUb1ZhbHVlc1wiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NBcHBseVRvVG90YWwgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFwcGx5VG9Ub3RhbFwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NGb250RmFtaWx5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImZvbnRGYW1pbHlcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NGb250U2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJmb250U2l6ZVwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0JvbGQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImJvbGRcIiB9LCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgY29uc3Qgc2NJdGFsaWMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcIml0YWxpY1wiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY1VuZGVybGluZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZE9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJzcGVjaWZpY0NvbHVtblwiLCBwcm9wZXJ0eU5hbWU6IFwidW5kZXJsaW5lXCIgfSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgIGNvbnN0IHNjQWxpZ25tZW50ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPHN0cmluZz4oc2VsZWN0ZWRPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwic3BlY2lmaWNDb2x1bW5cIiwgcHJvcGVydHlOYW1lOiBcImFsaWdubWVudFwiIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICBjb25zdCBzY0Rpc3BsYXlVbml0cyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkaXNwbGF5VW5pdHNcIiB9LCAwKTtcclxuICAgICAgICAgIGNvbnN0IHNjRGVjaW1hbFBsYWNlcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJkZWNpbWFsUGxhY2VzXCIgfSwgMSk7XHJcbiAgICAgICAgICBjb25zdCBzY1RleHRXcmFwID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcInNwZWNpZmljQ29sdW1uXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0V3JhcFwiIH0sIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgLy8gUG9wdWxhdGUgY29sdW1uSGVhZGVycyBuYW1lU2VyaWVzIGRyb3Bkb3duIGFuZCByZWJ1aWxkIG5hbWVzIGdyb3VwIHdpdGggcGVyLW1lYXN1cmUgc2VsZWN0b3JcclxuICAgICAgICAgIGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5uYW1lU2VyaWVzLml0ZW1zID0gbWVhc3VyZUhlYWRlcnMubWFwKG5hbWUgPT4gKHsgdmFsdWU6IG5hbWUsIGRpc3BsYXlOYW1lOiBuYW1lIH0pKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgcGVyc2lzdGVkTmFtZVNlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiY29sdW1uSGVhZGVyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibmFtZVNlcmllc1wiIH0sXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hlZE5hbWVJdGVtID0gcGVyc2lzdGVkTmFtZVNlcmllc1xyXG4gICAgICAgICAgICAgID8gY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMuaXRlbXMuZmluZChpID0+IGkudmFsdWUgPT09IHBlcnNpc3RlZE5hbWVTZXJpZXMpXHJcbiAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMudmFsdWUgPSBtYXRjaGVkTmFtZUl0ZW0gfHwgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMuaXRlbXNbMF0gfHwgeyB2YWx1ZTogXCJcIiwgZGlzcGxheU5hbWU6IFwiXCIgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE5hbWVTZXJpZXNOYW1lID0gY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVTZXJpZXMudmFsdWU/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTmFtZU1lYXN1cmVJZHggPSBtZWFzdXJlSGVhZGVycy5pbmRleE9mKHNlbGVjdGVkTmFtZVNlcmllc05hbWUpO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lVmFsdWVDb2x1bW4gPSBzZWxlY3RlZE5hbWVNZWFzdXJlSWR4ID49IDAgPyB2YWx1ZXNbc2VsZWN0ZWROYW1lTWVhc3VyZUlkeF0gOiBudWxsO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lUXVlcnlOYW1lID0gc2VsZWN0ZWROYW1lVmFsdWVDb2x1bW4/LnNvdXJjZT8ucXVlcnlOYW1lO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWROYW1lT2JqZWN0cyA9IHNlbGVjdGVkTmFtZVZhbHVlQ29sdW1uPy5zb3VyY2U/Lm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICBjb25zdCBuYW1lU2VsZWN0b3IgPSBzZWxlY3RlZE5hbWVRdWVyeU5hbWUgPyB7IG1ldGFkYXRhOiBzZWxlY3RlZE5hbWVRdWVyeU5hbWUgfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICBjb25zdCBjaE5hbWVPdmVycmlkZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KHNlbGVjdGVkTmFtZU9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJjb2x1bW5IZWFkZXJzXCIsIHByb3BlcnR5TmFtZTogXCJuYW1lT3ZlcnJpZGVcIiB9LCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAvLyBSZWJ1aWxkIHRoZSBuYW1lc0dyb3VwIHNsaWNlc1xyXG4gICAgICAgICAgY29sdW1uSGVhZGVyc1NldHRpbmdzLm5hbWVzR3JvdXAuc2xpY2VzID0gW1xyXG4gICAgICAgICAgICAgIGNvbHVtbkhlYWRlcnNTZXR0aW5ncy5uYW1lU2VyaWVzLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lT3ZlcnJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiSGVhZGVyIE5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgY3VzdG9tIGhlYWRlciBuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaE5hbWVPdmVycmlkZSxcclxuICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG5hbWVTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgaW5zdGFuY2VLaW5kOiBwb3dlcmJpLlZpc3VhbEVudW1lcmF0aW9uSW5zdGFuY2VLaW5kcy5Db25zdGFudE9yUnVsZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIC8vIFJlYnVpbGQgdGhlIGFwcGx5U2V0dGluZ3NHcm91cCBzbGljZXMgd2l0aCBzZWxlY3RvcnNcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3MuYXBwbHlTZXR0aW5nc0dyb3VwLnNsaWNlcyA9IFtcclxuICAgICAgICAgICAgICBzcGVjaWZpY0NvbHVtblNldHRpbmdzLnNlcmllcyxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwiYXBwbHlUb0hlYWRlclwiLCBkaXNwbGF5TmFtZTogXCJBcHBseSB0byBoZWFkZXJcIiwgdmFsdWU6IHNjQXBwbHlUb0hlYWRlciwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImFwcGx5VG9Ub3RhbFwiLCBkaXNwbGF5TmFtZTogXCJBcHBseSB0byB0b3RhbFwiLCB2YWx1ZTogc2NBcHBseVRvVG90YWwsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJhcHBseVRvVmFsdWVzXCIsIGRpc3BsYXlOYW1lOiBcIkFwcGx5IHRvIHZhbHVlc1wiLCB2YWx1ZTogc2NBcHBseVRvVmFsdWVzLCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KVxyXG4gICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAvLyBSZWJ1aWxkIHRoZSB2YWx1ZXNHcm91cCBzbGljZXMgd2l0aCBwZXItbWVhc3VyZSBzZWxlY3RvcnNcclxuICAgICAgICAgIHNwZWNpZmljQ29sdW1uU2V0dGluZ3MudmFsdWVzR3JvdXAuc2xpY2VzID0gW1xyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udENvbnRyb2woe1xyXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImZvbnRcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkZvbnRQaWNrZXIoeyBuYW1lOiBcImZvbnRGYW1pbHlcIiwgZGlzcGxheU5hbWU6IFwiRm9udCBGYW1pbHlcIiwgdmFsdWU6IHNjRm9udEZhbWlseSB8fCBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcImZvbnRTaXplXCIsIGRpc3BsYXlOYW1lOiBcIkZvbnQgU2l6ZVwiLCB2YWx1ZTogc2NGb250U2l6ZSA/PyAxMiwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJvbGQ6IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJib2xkXCIsIGRpc3BsYXlOYW1lOiBcIkJvbGRcIiwgdmFsdWU6IHNjQm9sZCA/PyBmYWxzZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICAgIGl0YWxpYzogbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcIml0YWxpY1wiLCBkaXNwbGF5TmFtZTogXCJJdGFsaWNcIiwgdmFsdWU6IHNjSXRhbGljID8/IGZhbHNlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lOiBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwidW5kZXJsaW5lXCIsIGRpc3BsYXlOYW1lOiBcIlVuZGVybGluZVwiLCB2YWx1ZTogc2NVbmRlcmxpbmUgPz8gZmFsc2UsIHNlbGVjdG9yIH0pXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwidGV4dENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIlRleHQgY29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IHNjVGV4dENvbG9yIHx8IFwiIzAwYjhkNFwiIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoeyBuYW1lOiBcImJhY2tncm91bmRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJCYWNrZ3JvdW5kIGNvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBzY0JnQ29sb3IgfHwgXCIjZmZmZmZmXCIgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7IG5hbWU6IFwiYWx0ZXJuYXRlVGV4dENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkFsdGVybmF0ZSB0ZXh0IGNvbG9yXCIsIHZhbHVlOiB7IHZhbHVlOiBzY0FsdFRleHRDb2xvciB8fCBcIiMzMzMzMzNcIiB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJhbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQWx0ZXJuYXRlIGJhY2tncm91bmQgY29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IHNjQWx0QmdDb2xvciB8fCBcIiNmNWY1ZjVcIiB9LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkFsaWdubWVudEdyb3VwKHsgbmFtZTogXCJhbGlnbm1lbnRcIiwgZGlzcGxheU5hbWU6IFwiQWxpZ25tZW50XCIsIHZhbHVlOiBzY0FsaWdubWVudCB8fCBcImxlZnRcIiwgbW9kZTogcG93ZXJiaS52aXN1YWxzLkFsaWdubWVudEdyb3VwTW9kZS5Ib3Jpem9uYWwsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQXV0b0Ryb3Bkb3duKHsgbmFtZTogXCJkaXNwbGF5VW5pdHNcIiwgZGlzcGxheU5hbWU6IFwiRGlzcGxheSB1bml0c1wiLCB2YWx1ZTogc2NEaXNwbGF5VW5pdHMsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJkZWNpbWFsUGxhY2VzXCIsIGRpc3BsYXlOYW1lOiBcIlZhbHVlIGRlY2ltYWwgcGxhY2VzXCIsIHZhbHVlOiBzY0RlY2ltYWxQbGFjZXMsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHsgbmFtZTogXCJ0ZXh0V3JhcFwiLCBkaXNwbGF5TmFtZTogXCJUZXh0IHdyYXBcIiwgdmFsdWU6IHNjVGV4dFdyYXAgPz8gZmFsc2UsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yIH0pXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIC8vIFBvcHVsYXRlIGRhdGFCYXJzU2V0dGluZ3Mgc2VyaWVzIGRyb3Bkb3duIGFuZCByZWJ1aWxkIHZhbHVlIHNsaWNlcyB3aXRoIHBlci1tZWFzdXJlIHNlbGVjdG9yXHJcbiAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNlcmllcy5pdGVtcyA9IG1lYXN1cmVIZWFkZXJzLm1hcChuYW1lID0+ICh7IHZhbHVlOiBuYW1lLCBkaXNwbGF5TmFtZTogbmFtZSB9KSk7XHJcbiAgICAgICAgICBjb25zdCBwZXJzaXN0ZWREYXRhQmFyc1NlcmllcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxzdHJpbmc+KFxyXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzZXJpZXNcIiB9LFxyXG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoZWREYXRhQmFyc0l0ZW0gPSBwZXJzaXN0ZWREYXRhQmFyc1Nlcmllc1xyXG4gICAgICAgICAgICAgID8gZGF0YUJhcnNTZXR0aW5ncy5zZXJpZXMuaXRlbXMuZmluZChpID0+IGkudmFsdWUgPT09IHBlcnNpc3RlZERhdGFCYXJzU2VyaWVzKVxyXG4gICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgIGRhdGFCYXJzU2V0dGluZ3Muc2VyaWVzLnZhbHVlID0gbWF0Y2hlZERhdGFCYXJzSXRlbSB8fCBkYXRhQmFyc1NldHRpbmdzLnNlcmllcy5pdGVtc1swXSB8fCB7IHZhbHVlOiBcIlwiLCBkaXNwbGF5TmFtZTogXCJcIiB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNTZXJpZXNOYW1lID0gZGF0YUJhcnNTZXR0aW5ncy5zZXJpZXMudmFsdWU/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNNZWFzdXJlSWR4ID0gbWVhc3VyZUhlYWRlcnMuaW5kZXhPZihzZWxlY3RlZERhdGFCYXJzU2VyaWVzTmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGFCYXJzVmFsdWVDb2x1bW4gPSBzZWxlY3RlZERhdGFCYXJzTWVhc3VyZUlkeCA+PSAwID8gdmFsdWVzW3NlbGVjdGVkRGF0YUJhcnNNZWFzdXJlSWR4XSA6IG51bGw7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGFCYXJzUXVlcnlOYW1lID0gc2VsZWN0ZWREYXRhQmFyc1ZhbHVlQ29sdW1uPy5zb3VyY2U/LnF1ZXJ5TmFtZTtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzID0gc2VsZWN0ZWREYXRhQmFyc1ZhbHVlQ29sdW1uPy5zb3VyY2U/Lm9iamVjdHMgfHwge307XHJcbiAgICAgICAgICBjb25zdCBkYXRhQmFyc1NlbGVjdG9yID0gc2VsZWN0ZWREYXRhQmFyc1F1ZXJ5TmFtZSA/IHsgbWV0YWRhdGE6IHNlbGVjdGVkRGF0YUJhcnNRdWVyeU5hbWUgfSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICBjb25zdCBkYlNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgY29uc3QgZGJEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICBjb25zdCBkYk1hdGNoRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgY29uc3QgZGJTaG93WmVyb0xpbmUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3daZXJvTGluZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgIGNvbnN0IGRiWmVyb0xpbmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Ioc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICBjb25zdCBkYlplcm9MaW5lVHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIgfSwgMCk7XHJcbiAgICAgICAgICBjb25zdCBkYkRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgIGNvbnN0IGRiVHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRyYW5zcGFyZW5jeVwiIH0sIDIwKTtcclxuICAgICAgICAgIGNvbnN0IGRiQm9yZGVyT24gPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4oc2VsZWN0ZWREYXRhQmFyc09iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlck9uXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICBjb25zdCBkYkJvcmRlclRoaWNrbmVzcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJUaGlja25lc3NcIiB9LCAxKTtcclxuICAgICAgICAgIGNvbnN0IGRiQm9yZGVyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKHNlbGVjdGVkRGF0YUJhcnNPYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgIGNvbnN0IGRiTWluVmFsdWUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWluVmFsdWVcIiB9LCAwKTtcclxuICAgICAgICAgIGNvbnN0IGRiTWF4VmFsdWUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWF4VmFsdWVcIiB9LCAwKTtcclxuICAgICAgICAgIGNvbnN0IGRiTGFiZWxzT3V0c2lkZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihzZWxlY3RlZERhdGFCYXJzT2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibGFiZWxzT3V0c2lkZVwiIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNlbGVjdFNlcmllc0dyb3VwLnNsaWNlcyA9IFtcclxuICAgICAgICAgICAgICBkYXRhQmFyc1NldHRpbmdzLnNlcmllc1xyXG4gICAgICAgICAgXTtcclxuXHJcbmxldCBkYXRhQmFyc1NsaWNlczogZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlW10gPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwic2hvd0RhdGFCYXJzXCIsIGRpc3BsYXlOYW1lOiBcIlNob3cgRGF0YSBCYXJzXCIsIHZhbHVlOiBkYlNob3dEYXRhQmFycywgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJkYXRhQmFyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiRGF0YSBCYXIgQ29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IGRiRGF0YUJhckNvbG9yIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yLCBpbnN0YW5jZUtpbmQ6IHBvd2VyYmkuVmlzdWFsRW51bWVyYXRpb25JbnN0YW5jZUtpbmRzLkNvbnN0YW50T3JSdWxlIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcImRhdGFCYXJIZWlnaHRcIiwgZGlzcGxheU5hbWU6IFwiRGF0YSBCYXIgSGVpZ2h0ICglKVwiLCB2YWx1ZTogZGJEYXRhQmFySGVpZ2h0LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHsgbmFtZTogXCJ0cmFuc3BhcmVuY3lcIiwgZGlzcGxheU5hbWU6IFwiVHJhbnNwYXJlbmN5ICglKVwiLCB2YWx1ZTogZGJUcmFuc3BhcmVuY3ksIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImJvcmRlck9uXCIsIGRpc3BsYXlOYW1lOiBcIkJvcmRlciBPblwiLCB2YWx1ZTogZGJCb3JkZXJPbiwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwibWF0Y2hEYXRhQmFyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiTWF0Y2ggRGF0YSBCYXIgQ29sb3JcIiwgdmFsdWU6IGRiTWF0Y2hEYXRhQmFyQ29sb3IsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcImJvcmRlclRoaWNrbmVzc1wiLCBkaXNwbGF5TmFtZTogXCJCb3JkZXIgVGhpY2tuZXNzXCIsIHZhbHVlOiBkYkJvcmRlclRoaWNrbmVzcywgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSlcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGJNYXRjaERhdGFCYXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgZGF0YUJhcnNTbGljZXMucHVzaChuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJib3JkZXJDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJCb3JkZXIgQ29sb3JcIiwgdmFsdWU6IHsgdmFsdWU6IGRiQm9yZGVyQ29sb3IgfSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IsIGluc3RhbmNlS2luZDogcG93ZXJiaS5WaXN1YWxFbnVtZXJhdGlvbkluc3RhbmNlS2luZHMuQ29uc3RhbnRPclJ1bGUgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkYXRhQmFyc1NsaWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcIm1pblZhbHVlXCIsIGRpc3BsYXlOYW1lOiBcIk1pbmltdW0gVmFsdWVcIiwgdmFsdWU6IGRiTWluVmFsdWUsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcIm1heFZhbHVlXCIsIGRpc3BsYXlOYW1lOiBcIk1heGltdW0gVmFsdWVcIiwgdmFsdWU6IGRiTWF4VmFsdWUsIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goeyBuYW1lOiBcImxhYmVsc091dHNpZGVcIiwgZGlzcGxheU5hbWU6IFwiTGFiZWxzIE91dHNpZGVcIiwgdmFsdWU6IGRiTGFiZWxzT3V0c2lkZSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7IG5hbWU6IFwic2hvd1plcm9MaW5lXCIsIGRpc3BsYXlOYW1lOiBcIlNob3cgWmVybyBMaW5lXCIsIHZhbHVlOiBkYlNob3daZXJvTGluZSwgdmlzaWJsZTogdHJ1ZSwgc2VsZWN0b3I6IGRhdGFCYXJzU2VsZWN0b3IgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHsgbmFtZTogXCJ6ZXJvTGluZUNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIlplcm8gTGluZSBDb2xvclwiLCB2YWx1ZTogeyB2YWx1ZTogZGJaZXJvTGluZUNvbG9yIH0sIHZpc2libGU6IHRydWUsIHNlbGVjdG9yOiBkYXRhQmFyc1NlbGVjdG9yIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oeyBuYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIsIGRpc3BsYXlOYW1lOiBcIlplcm8gTGluZSBUcmFuc3BhcmVuY3kgKCUpXCIsIHZhbHVlOiBkYlplcm9MaW5lVHJhbnNwYXJlbmN5LCB2aXNpYmxlOiB0cnVlLCBzZWxlY3RvcjogZGF0YUJhcnNTZWxlY3RvciB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgZGF0YUJhcnNTZXR0aW5ncy5kYXRhQmFyc0dyb3VwLnNsaWNlcyA9IGRhdGFCYXJzU2xpY2VzO1xyXG5cclxuICAgICAgICAgIC8vIENvbXB1dGUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkYXRhIGJhcnMgQU5EIENhbGN1bGF0ZSB0b3RhbHMgYmFzZWQgb24gc2VsZWN0aW9uXHJcbiAgICAgICAgICBsZXQgbWVhc3VyZU1pbnM6IG51bWJlcltdID0gbmV3IEFycmF5KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgICAgICAgICBsZXQgbWVhc3VyZU1heHM6IG51bWJlcltdID0gbmV3IEFycmF5KHZhbHVlcy5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgICAgICAgICBsZXQgdG90YWxzOiBudW1iZXJbXSA9IG5ldyBBcnJheSh2YWx1ZXMubGVuZ3RoKS5maWxsKDApO1xyXG5cclxuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbiwgbWVhc3VyZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW1WYWx1ZXMgPSB2YWx1ZUNvbHVtbi52YWx1ZXMuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpLm1hcCh2ID0+IE51bWJlcih2KSk7XHJcbiAgICAgICAgICAgIGlmIChudW1WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWluKDAsIC4uLm51bVZhbHVlcyk7IC8vIFN0YW5kYXJkIGRhdGEgYmFycyBhbmNob3IgdG8gMFxyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU1heHNbbWVhc3VyZUluZGV4XSA9IE1hdGgubWF4KDAsIC4uLm51bVZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgbGV0IHRvdGFsQmVoYXZpb3JSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwidG90YWxzXCIsIHByb3BlcnR5TmFtZTogXCJ0b3RhbEJlaGF2aW9yXCIgfSwgXCJTdW1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQmVoYXZpb3IgPSB0eXBlb2YgdG90YWxCZWhhdmlvclJhdyA9PT0gXCJzdHJpbmdcIiA/IHRvdGFsQmVoYXZpb3JSYXcgOiAodG90YWxCZWhhdmlvclJhdy52YWx1ZSB8fCBcIlN1bVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiU3VtXCIgfHwgdG90YWxCZWhhdmlvciA9PT0gXCJNZWFzdXJlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG51bVZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJBdmVyYWdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbHNbbWVhc3VyZUluZGV4XSA9IG51bVZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIG51bVZhbHVlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvdGFsQmVoYXZpb3IgPT09IFwiQ291bnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gbnVtVmFsdWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJDb3VudCBEaXN0aW5jdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxzW21lYXN1cmVJbmRleF0gPSBuZXcgU2V0KG51bVZhbHVlcykuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJNYXhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gTWF0aC5tYXgoLi4ubnVtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG90YWxCZWhhdmlvciA9PT0gXCJNaW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsc1ttZWFzdXJlSW5kZXhdID0gTWF0aC5taW4oLi4ubnVtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXN3aXRjaFZhbHVlc1RvUm93cykge1xyXG4gICAgICAgICAgICAvLyBOb3JtYWwgaG9yaXpvbnRhbCB0YWJsZSBzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgbGV0IGhlYWRlclJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLXJvdyc7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIGhlYWRlclJvdy5zdHlsZS5oZWlnaHQgPSBgJHtoZWFkZXJSb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJCZ0NvbG9yID0gaGVhZGVyQmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGNhdGVnb3J5IGNvbHVtbiBoZWFkZXIgaWYgY2F0ZWdvcmllcyBleGlzdFxyXG4gICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5SGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnRleHRDb250ZW50ID0gY2F0ZWdvcmllcy5zb3VyY2UuZGlzcGxheU5hbWUgfHwgJ0NhdGVnb3J5JztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjYXRlZ29yeUhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBtZWFzdXJlIGNvbHVtbiBoZWFkZXJzXHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXJzLmZvckVhY2goKGRpc3BsYXlOYW1lLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdGl2ZURpc3BsYXlOYW1lID0gbWVhc3VyZUhlYWRlck92ZXJyaWRlc1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbaWR4XTtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIGxldCBlZkJvbGQgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb0hlYWRlciAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiBoZWFkZXJCb2xkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmSXRhbGljID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLml0YWxpYyAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLml0YWxpYyA6IGhlYWRlckl0YWxpYztcclxuICAgICAgICAgICAgICAgIGxldCBlZlVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgOiBoZWFkZXJVbmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogaGVhZGVyRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGxldCBlZkZvbnRTaXplID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmZvbnRTaXplICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udFNpemUgOiBoZWFkZXJGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgIGxldCBlZldvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLnRleHRXcmFwICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dFdyYXAgOiBoZWFkZXJXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVDb2xvciA9IHNwZWNTZXR0aW5ncy5hcHBseVRvSGVhZGVyICYmIHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgPyBzcGVjU2V0dGluZ3MudGV4dENvbG9yIDogaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUFsaWduID0gc3BlY1NldHRpbmdzLmFwcGx5VG9IZWFkZXIgJiYgc3BlY1NldHRpbmdzLmFsaWdubWVudCA/IHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgOiBoZWFkZXJBbGlnbm1lbnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZGVyID0gaGVhZGVyUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGVmZmVjdGl2ZURpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpZHhdfXB4YDtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2lkeF19cHhgO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaWR4XX1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChoZWFkZXIsIGhlYWRlclJvd0hlaWdodCwgZWZGb250U2l6ZSwgZWZXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGVmQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gZWZVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGVmRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS5jb2xvciA9IGVmZmVjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGVmZmVjdGl2ZUFsaWduO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmZmVjdGl2ZUJnO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGVmV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChlZldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBkYXRhIHJvd3NcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1yb3cnO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBhbHRlcm5hdGluZyBiYWNrZ3JvdW5kIGNvbG9ycyB3aXRoIHN1cHBvcnQgZm9yIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmdcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlblJvdyA9IGkgJSAyID09PSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93SGVpZ2h0ID0gaXNFdmVuUm93ID8gdmFsdWVSb3dIZWlnaHQgOiBhbHRlcm5hdGVWYWx1ZVJvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5oZWlnaHQgPSBgJHtyb3dIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93QmdDb2xvciA9IGdldFJvd0JhY2tncm91bmRDb2xvcihpLCBpc0V2ZW5Sb3csIGRhdGFWaWV3KTtcclxuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXRlZ29yeSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnlDZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwudGV4dENvbnRlbnQgPSBTdHJpbmcoY2F0ZWdvcmllcy52YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5jbGFzc05hbWUgPSAndGFibGUtY2F0ZWdvcnktY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0ZWdvcnlDZWxsLCByb3dIZWlnaHQsIGNlbGxGb250U2l6ZSwgY2F0ZWdvcnlXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS5jb2xvciA9IGdldENhdGVnb3J5VGV4dENvbG9yKGksIGRhdGFWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Q2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSBjYXRlZ29yeVdvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5V29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgbWVhc3VyZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbiwgbWVhc3VyZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGlzRXZlblJvdyAhPT0gJ3VuZGVmaW5lZCcpID8gKGlzRXZlblJvdyA/IHRleHRDb2xvciA6IGFsdGVybmF0ZVRleHRDb2xvcikgOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbFRleHRDb2xvciA9IGRlZmF1bHRNZWFzdXJlVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZkNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsVGV4dENvbG9yID0gY2ZDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlQ29sdW1uLnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiOyAvLyBmb3IgZGF0YSBiYXIgcG9zaXRpb25pbmdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bVZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBudW1WYWx1ZS50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd0RhdGFCYXJzID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3dEYXRhQmFyc1wiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93RGF0YUJhcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9LCBcIiMzMWI2ZmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaERhdGFCYXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXRjaERhdGFCYXJDb2xvclwiIH0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd1plcm9MaW5lID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInNob3daZXJvTGluZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6ZXJvTGluZVRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInplcm9MaW5lVHJhbnNwYXJlbmN5XCIgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQmFySGVpZ2h0ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiZGF0YUJhckhlaWdodFwiIH0sIDgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW5jeSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcInRyYW5zcGFyZW5jeVwiIH0sIDIwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlck9uID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlck9uXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJUaGlja25lc3MgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJUaGlja25lc3NcIiB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJib3JkZXJDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblZhbHVlT2JqID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWluVmFsdWVcIiB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZhbHVlT2JqID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibWF4VmFsdWVcIiB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsc091dHNpZGUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwibGFiZWxzT3V0c2lkZVwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUc6IExvZyBwZXItcm93IENGIGRhdGEgZm9yIGZpcnN0IDUgcm93cyBvZiBmaXJzdCBtZWFzdXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDUgJiYgbWVhc3VyZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBERUJVR10gUm93ICR7aX06IHZhbD0ke3ZhbHVlfSB8IHZhbHVlQ29sdW1uLm9iamVjdHMgZXhpc3RzPSR7ISF2YWx1ZUNvbHVtbi5vYmplY3RzfSB8IG9iamVjdHNbJHtpfV0gZXhpc3RzPSR7ISEodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKX0gfCBvYmplY3RzWyR7aX1dPSR7dmFsdWVDb2x1bW4ub2JqZWN0cyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIDogJ04vQSd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcgb24gZGF0YSBiYXIgY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZkNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFyQ29sb3JcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDUgJiYgbWVhc3VyZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbREIgQ0YgREVCVUddIFJvdyAke2l9OiBjZkNvbG9yPSR7Y2ZDb2xvcn0gfCBkZWZhdWx0QmFyQ29sb3I9JHtjZWxsRGF0YUJhckNvbG9yfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsRGF0YUJhckNvbG9yID0gY2ZDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluID0gbWluVmFsdWVPYmogIT09IG51bGwgJiYgbWluVmFsdWVPYmogIT09IHVuZGVmaW5lZCA/IG1pblZhbHVlT2JqIDogbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IG1heFZhbHVlT2JqICE9PSBudWxsICYmIG1heFZhbHVlT2JqICE9PSB1bmRlZmluZWQgPyBtYXhWYWx1ZU9iaiA6IG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPD0gMCkgcmFuZ2UgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB3aWR0aCBwZXJjZW50YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhQY3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRQY3QgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFtcGVkVmFsdWUgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbnVtVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6ZXJvUG9pbnQgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgMCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IGxhYmVsc091dHNpZGUgPyAwLjc1IDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhbXBlZFZhbHVlID49IHplcm9Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKChjbGFtcGVkVmFsdWUgLSB6ZXJvUG9pbnQpIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFBjdCA9ICgoemVyb1BvaW50IC0gbWluKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFBjdCA9ICgoemVyb1BvaW50IC0gY2xhbXBlZFZhbHVlKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRQY3QgPSAoKGNsYW1wZWRWYWx1ZSAtIG1pbikgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGF0YSBiYXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wUGN0ID0gKDEwMCAtIGRhdGFCYXJIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUudG9wID0gYCR7dG9wUGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5oZWlnaHQgPSBgJHtkYXRhQmFySGVpZ2h0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aFBjdH0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koY2VsbERhdGFCYXJDb2xvciwgdHJhbnNwYXJlbmN5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3JkZXJPbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbEJvcmRlckNvbG9yID0gbWF0Y2hEYXRhQmFyQ29sb3IgPyBjZWxsRGF0YUJhckNvbG9yIDogYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5ib3JkZXIgPSBgJHtib3JkZXJUaGlja25lc3N9cHggc29saWQgJHtmaW5hbEJvcmRlckNvbG9yfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGRhdGFCYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93WmVyb0xpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemVyb0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLndpZHRoID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgekxlZnRQY3QgPSAoKHplcm9Qb2ludCAtIG1pbikgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5sZWZ0ID0gYGNhbGMoJHt6TGVmdFBjdH0lIC0gMXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXBwbHlUcmFuc3BhcmVuY3koemVyb0xpbmVDb2xvciwgemVyb0xpbmVUcmFuc3BhcmVuY3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLnpJbmRleCA9IFwiMVwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHplcm9MaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhIGJhciBtYXJrZXJzIHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93TWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlclNoYXBlUmF3ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGFueT4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaGFwZVwiIH0sIFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlclNoYXBlID0gdHlwZW9mIG1hcmtlclNoYXBlUmF3ID09PSBcInN0cmluZ1wiID8gbWFya2VyU2hhcGVSYXcgOiAobWFya2VyU2hhcGVSYXcudmFsdWUgfHwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbE1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ZNYXJrZXJDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNmTWFya2VyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxNYXJrZXJDb2xvciA9IGNmTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuekluZGV4ID0gXCIzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXJMZWZ0UGN0ID0gbnVtVmFsdWUgPj0gMCA/IGxlZnRQY3QgKyB3aWR0aFBjdCA6IGxlZnRQY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUudG9wID0gYGNhbGMoNTAlIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcmtlclNoYXBlID09PSBcImNpcmNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFya2VyU2hhcGUgPT09IFwiY3Jvc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NWRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKC00NWRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hcHBlbmRDaGlsZChsaW5lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5hcHBlbmRDaGlsZChsaW5lMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJob3Jpem9udGFsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5oZWlnaHQgPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJ2ZXJ0aWNhbExpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gMXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJzZW1pQ2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHJhdyBzZW1pIGNpcmNsZSBwb2ludGluZyBvdXR3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IGAke21hcmtlclNpemUgLyAyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSAtICR7bWFya2VyU2l6ZSAvIDJ9cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbHNPdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnRvcCA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTUwJSlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUubGVmdCA9IGBjYWxjKCR7bGVmdFBjdCArIHdpZHRoUGN0fSUgKyA0cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHsxMDAgLSBsZWZ0UGN0fSUgKyA0cHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLWRhdGEtY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIHZhbHVlV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IHZhbHVlQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFN0eWxlID0gY2VsbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGNlbGxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGNlbGxUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNSb3dCZ0NvbG9yID0gaXNFdmVuUm93ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogcm93QmdDb2xvcikgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5hbHRlcm5hdGVCYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY0NlbGxUZXh0Q29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZVRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNSb3dCZ0NvbG9yIDogcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQ29sb3IgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyA/IHNwZWNDZWxsVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5ib2xkICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYm9sZCA6IHZhbHVlQm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogY2VsbEl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MudW5kZXJsaW5lICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudW5kZXJsaW5lIDogY2VsbFVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250RmFtaWx5ID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogY2VsbEZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IGNlbGxGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy50ZXh0V3JhcCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRXcmFwIDogdmFsdWVXb3JkV3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVmZmVjdGl2ZUJnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBlZmZlY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSBlZkJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dERlY29yYXRpb24gPSBlZlVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZkZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U2l6ZSA9IGAke2VmRm9udFNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2hpdGVTcGFjZSA9IGVmV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWZXb3JkV3JhcCkgeyAvLyBhbmQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdG90YWwgcm93XHJcbiAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbFJvdyA9IHRoaXMudGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFJvdy5jbGFzc05hbWUgPSAndGFibGUtdG90YWwtcm93JztcclxuICAgICAgICAgICAgdG90YWxSb3cuc3R5bGUuYm9yZGVyVG9wID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICB0b3RhbFJvdy5zdHlsZS5ib3JkZXJCb3R0b20gPSBob3JpekJvcmRlcjJ4VmFsdWU7XHJcbiAgICAgICAgICAgIHRvdGFsUm93LnN0eWxlLmhlaWdodCA9IGAke3RvdGFsUm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxCZ0NvbG9yID0gdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsTGFiZWxDZWxsID0gdG90YWxSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwudGV4dENvbnRlbnQgPSAnVG90YWwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLXRvdGFsLWxhYmVsLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUud2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2godG90YWxMYWJlbENlbGwsIHRvdGFsUm93SGVpZ2h0LCB0b3RhbFJvd0ZvbnRTaXplLCB0b3RhbFJvd1dvcmRXcmFwKTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB0b3RhbFJvd0JvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IHRvdGFsUm93VW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZm9udEZhbWlseSA9IHRvdGFsUm93Rm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmZvbnRTdHlsZSA9IHRvdGFsUm93SXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvdGFsQmdDb2xvcjsgdG90YWxMYWJlbENlbGwuc3R5bGUuY29sb3IgPSB0b3RhbFJvd1RleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLndoaXRlU3BhY2UgPSB0b3RhbFJvd1dvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxSb3dXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGFiZWxDZWxsLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsTGFiZWxDZWxsID0gdG90YWxSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwudGV4dENvbnRlbnQgPSAnVG90YWwnO1xyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbENlbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0b3RhbHMuZm9yRWFjaCgodG90YWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzcGVjU2V0dGluZ3MgPSBtZWFzdXJlU2V0dGluZ3NMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUJnID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yID8gc3BlY1NldHRpbmdzLmJhY2tncm91bmRDb2xvciA6IHRvdGFsUm93QmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdGl2ZUNvbG9yID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dENvbG9yID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IHRvdGFsUm93VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYm9sZCAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmJvbGQgOiB0b3RhbFJvd0JvbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZJdGFsaWMgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiB0b3RhbFJvd0l0YWxpYztcclxuICAgICAgICAgICAgICAgIGxldCBlZlVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnVuZGVybGluZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnVuZGVybGluZSA6IHRvdGFsUm93VW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udEZhbWlseSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250RmFtaWx5IDogdG90YWxSb3dGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgbGV0IGVmRm9udFNpemUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogdG90YWxSb3dGb250U2l6ZTtcclxuICAgICAgICAgICAgICAgIGxldCBlZldvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MudGV4dFdyYXAgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy50ZXh0V3JhcCA6IHRvdGFsUm93V29yZFdyYXA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlQWxpZ24gPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHRvdGFsUm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0b3RhbC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ3RhYmxlLXRvdGFsLWNlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1heFdpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2VsbCwgdG90YWxSb3dIZWlnaHQsIGVmRm9udFNpemUsIGVmV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gZWZCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250RmFtaWx5ID0gZWZGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBlZkl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gZWZmZWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZmZlY3RpdmVBbGlnbjtcclxuICAgICAgICAgICAgICAgIGlmIChlZldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53b3JkQnJlYWsgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzd2l0Y2hWYWx1ZXNUb1Jvd3MgSVMgVFJVRSAoVHJhbnNwb3NlIGxheW91dClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBIZWFkZXIgUm93XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJSb3cgPSB0aGlzLnRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1yb3cnO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gaG9yaXpCb3JkZXIyeFZhbHVlO1xyXG4gICAgICAgICAgICBoZWFkZXJSb3cuc3R5bGUuaGVpZ2h0ID0gYCR7aGVhZGVyUm93SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyQmdDb2xvciA9IGhlYWRlckJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpcnN0IGhlYWRlciBpcyBcIk1lYXN1cmVcIlxyXG4gICAgICAgICAgICBsZXQgbWVhc3VyZUhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lYXN1cmVcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5jbGFzc05hbWUgPSAndGFibGUtaGVhZGVyLWNlbGwnO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLndpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUubWluV2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBhcHBseVJvd1NxdWFzaChtZWFzdXJlSGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuZm9udFN0eWxlID0gaGVhZGVySXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUuY29sb3IgPSBoZWFkZXJUZXh0Q29sb3I7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhlYWRlckJnQ29sb3I7XHJcbiAgICAgICAgICAgIG1lYXN1cmVIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgbWVhc3VyZUhlYWRlci5zdHlsZS53aGl0ZVNwYWNlID0gaGVhZGVyV29yZFdyYXAgPyBcIm5vcm1hbFwiIDogXCJub3dyYXBcIjtcclxuICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlSGVhZGVyLnN0eWxlLndvcmRCcmVhayA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBOZXh0IGhlYWRlcnMgYXJlIENhdGVnb3J5IHZhbHVlcyAob3IganVzdCBcIlZhbHVlXCIgaWYgbm8gY2F0ZWdvcmllcylcclxuICAgICAgICAgICAgaWYgKGhhc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRIZWFkZXIgPSBoZWFkZXJSb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci50ZXh0Q29udGVudCA9IFN0cmluZyhjYXRlZ29yaWVzLnZhbHVlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbaV19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW2ldfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1tpXX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlSb3dTcXVhc2goY2F0SGVhZGVyLCBoZWFkZXJSb3dIZWlnaHQsIGhlYWRlckZvbnRTaXplLCBoZWFkZXJXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dERlY29yYXRpb24gPSBoZWFkZXJVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gaGVhZGVyQWxpZ25tZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIudGV4dENvbnRlbnQgPSBcIlZhbHVlXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuY2xhc3NOYW1lID0gJ3RhYmxlLWhlYWRlci1jZWxsJztcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5taW5XaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5tYXhXaWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKGNhdEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBoZWFkZXJCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRTdHlsZSA9IGhlYWRlckl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmZvbnRGYW1pbHkgPSBoZWFkZXJGb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLmNvbG9yID0gaGVhZGVyVGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBoZWFkZXJCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2F0SGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNhdEhlYWRlci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud2hpdGVTcGFjZSA9IGhlYWRlcldvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyV29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93VG90YWxSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbEhlYWRlciA9IGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG90YWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1oZWFkZXItY2VsbCc7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS53aWR0aCA9IGAke2NvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm1pbldpZHRoID0gYCR7Y29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUubWF4V2lkdGggPSBgJHtjb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbEhlYWRlciwgaGVhZGVyUm93SGVpZ2h0LCBoZWFkZXJGb250U2l6ZSwgaGVhZGVyV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IGhlYWRlckJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5mb250U3R5bGUgPSBoZWFkZXJJdGFsaWMgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gaGVhZGVyVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuZm9udEZhbWlseSA9IGhlYWRlckZvbnRGYW1pbHk7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlYWRlci5zdHlsZS5jb2xvciA9IGhlYWRlclRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRBbGlnbiA9IGhlYWRlckFsaWdubWVudDtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaGVhZGVyQmdDb2xvcjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIHRvdGFsSGVhZGVyLnN0eWxlLndoaXRlU3BhY2UgPSBoZWFkZXJXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcldvcmRXcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIZWFkZXIuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBSb3dzIChlYWNoIHJvdyBpcyBhIE1lYXN1cmUpXHJcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZUNvbHVtbiwgbWVhc3VyZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGhpcy50YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1yb3cnO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJvcmRlckJvdHRvbSA9IGhvcml6Qm9yZGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRXZlblJvdyA9IG1lYXN1cmVJbmRleCAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dIZWlnaHQgPSBpc0V2ZW5Sb3cgPyB2YWx1ZVJvd0hlaWdodCA6IGFsdGVybmF0ZVZhbHVlUm93SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmhlaWdodCA9IGAke3Jvd0hlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dCZ0NvbG9yID0gaXNFdmVuUm93ID8gYmFja2dyb3VuZENvbG9yIDogYWx0ZXJuYXRlQmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvd0JnQ29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2VsbCAxOiBNZWFzdXJlIE5hbWVcclxuICAgICAgICAgICAgICAgIGxldCBtZWFzdXJlTmFtZUNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnRleHRDb250ZW50ID0gbWVhc3VyZUhlYWRlck92ZXJyaWRlc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZS1jYXRlZ29yeS1jZWxsJztcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS53aWR0aCA9IGAke2NhdGVnb3J5Q29sdW1uV2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLm1pbldpZHRoID0gYCR7Y2F0ZWdvcnlDb2x1bW5XaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHtjYXRlZ29yeUNvbHVtbldpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGFwcGx5Um93U3F1YXNoKG1lYXN1cmVOYW1lQ2VsbCwgcm93SGVpZ2h0LCBjZWxsRm9udFNpemUsIGNhdGVnb3J5V29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmZvbnRXZWlnaHQgPSB2YWx1ZUJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUuZm9udFN0eWxlID0gY2VsbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gY2VsbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9IHZlcnRCb3JkZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLmNvbG9yID0gZGVmYXVsdENhdGVnb3J5VGV4dENvbG9yOyAvLyBvciBzb21lIHNwZWNpZmljIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZU5hbWVDZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVOYW1lQ2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gY2F0ZWdvcnlXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5V29yZFdyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlTmFtZUNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1lYXN1cmVUZXh0Q29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvYmplY3ROYW1lOiBcInZhbHVlQ29uZGl0aW9uYWxGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJ0ZXh0Q29sb3JcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGlzRXZlblJvdyAhPT0gJ3VuZGVmaW5lZCcpID8gKGlzRXZlblJvdyA/IHRleHRDb2xvciA6IGFsdGVybmF0ZVRleHRDb2xvcikgOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdHMgPSB2YWx1ZUNvbHVtbi5zb3VyY2Uub2JqZWN0cyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dEYXRhQmFycyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJzaG93RGF0YUJhcnNcIiB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93TWFya2VyID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd01hcmtlclwiIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH0sIFwiIzMxYjZmZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93WmVyb0xpbmUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd1plcm9MaW5lXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgemVyb0xpbmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lVHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVUcmFuc3BhcmVuY3lcIiB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaGFwZSA9IHR5cGVvZiBtYXJrZXJTaGFwZVJhdyA9PT0gXCJzdHJpbmdcIiA/IG1hcmtlclNoYXBlUmF3IDogKG1hcmtlclNoYXBlUmF3LnZhbHVlIHx8IFwiY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2l6ZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyU2l6ZVwiIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gbWVhc3VyZU1pbnNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IG1lYXN1cmVNYXhzW21lYXN1cmVJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YSBDZWxsczogVmFsdWVzIGZvciBlYWNoIGNhdGVnb3J5IChvciB0aGUgMSB2YWx1ZSBpZiBubyBjYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0Q29sb3IgPSBkZWZhdWx0TWVhc3VyZVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVDb2x1bW4ub2JqZWN0cyAmJiB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb2JqZWN0TmFtZTogXCJ2YWx1ZUNvbmRpdGlvbmFsRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidGV4dENvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZDb2xvcikgY2VsbFRleHRDb2xvciA9IGNmQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlQ29sdW1uLnZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IG51bVZhbHVlLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZhbHVlQ29sdW1uLnNvdXJjZS5vYmplY3RzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93RGF0YUJhcnMgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd0RhdGFCYXJzXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dEYXRhQmFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGxEYXRhQmFyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH0sIFwiIzMxYjZmZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoRGF0YUJhckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPGJvb2xlYW4+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcIm1hdGNoRGF0YUJhckNvbG9yXCIgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93WmVyb0xpbmUgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwic2hvd1plcm9MaW5lXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgemVyb0xpbmVDb2xvciA9IGRhdGFWaWV3T2JqZWN0cy5nZXRGaWxsQ29sb3Iob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVDb2xvclwiIH0sIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHplcm9MaW5lVHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiemVyb0xpbmVUcmFuc3BhcmVuY3lcIiB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFCYXJIZWlnaHQgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJkYXRhQmFySGVpZ2h0XCIgfSwgODApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNwYXJlbmN5ID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwidHJhbnNwYXJlbmN5XCIgfSwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyT24gPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJzRm9ybWF0dGluZ1wiLCBwcm9wZXJ0eU5hbWU6IFwiYm9yZGVyT25cIiB9LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclRoaWNrbmVzcyA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxudW1iZXI+KG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlclRoaWNrbmVzc1wiIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyc0Zvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImJvcmRlckNvbG9yXCIgfSwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluVmFsdWVPYmogPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtaW5WYWx1ZVwiIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4VmFsdWVPYmogPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8bnVtYmVyPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJtYXhWYWx1ZVwiIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxzT3V0c2lkZSA9IGRhdGFWaWV3T2JqZWN0cy5nZXRWYWx1ZTxib29sZWFuPihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNGb3JtYXR0aW5nXCIsIHByb3BlcnR5TmFtZTogXCJsYWJlbHNPdXRzaWRlXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVRzogTG9nIHBlci1yb3cgQ0YgZGF0YSBmb3IgZmlyc3QgNSByb3dzIG9mIGZpcnN0IG1lYXN1cmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgNSAmJiBtZWFzdXJlSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0RCIENGIERFQlVHXSBSb3cgJHtpfTogdmFsPSR7dmFsdWV9IHwgdmFsdWVDb2x1bW4ub2JqZWN0cyBleGlzdHM9JHshIXZhbHVlQ29sdW1uLm9iamVjdHN9IHwgb2JqZWN0c1ske2l9XSBleGlzdHM9JHshISh2YWx1ZUNvbHVtbi5vYmplY3RzICYmIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0pfSB8IG9iamVjdHNbJHtpfV09JHt2YWx1ZUNvbHVtbi5vYmplY3RzID8gSlNPTi5zdHJpbmdpZnkodmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkgOiAnTi9BJ31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgY29uZGl0aW9uYWwgZm9ybWF0dGluZyBvbiBkYXRhIGJhciBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNmQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUNvbHVtbi5vYmplY3RzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhcnNDb25kaXRpb25hbEZvcm1hdHRpbmdcIiwgcHJvcGVydHlOYW1lOiBcImRhdGFCYXJDb2xvclwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgNSAmJiBtZWFzdXJlSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtEQiBDRiBERUJVR10gUm93ICR7aX06IGNmQ29sb3I9JHtjZkNvbG9yfSB8IGRlZmF1bHRCYXJDb2xvcj0ke2NlbGxEYXRhQmFyQ29sb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZkNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxEYXRhQmFyQ29sb3IgPSBjZkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBtaW5WYWx1ZU9iaiAhPT0gbnVsbCAmJiBtaW5WYWx1ZU9iaiAhPT0gdW5kZWZpbmVkID8gbWluVmFsdWVPYmogOiBtZWFzdXJlTWluc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gbWF4VmFsdWVPYmogIT09IG51bGwgJiYgbWF4VmFsdWVPYmogIT09IHVuZGVmaW5lZCA/IG1heFZhbHVlT2JqIDogbWVhc3VyZU1heHNbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5nZSA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZSA8PSAwKSByYW5nZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdpZHRoIHBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aFBjdCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFBjdCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYW1wZWRWYWx1ZSA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBudW1WYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHplcm9Qb2ludCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCAwKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gbGFiZWxzT3V0c2lkZSA/IDAuNzUgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFtcGVkVmFsdWUgPj0gemVyb1BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhQY3QgPSAoKGNsYW1wZWRWYWx1ZSAtIHplcm9Qb2ludCkgLyByYW5nZSkgKiAxMDAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0UGN0ID0gKCh6ZXJvUG9pbnQgLSBtaW4pIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoUGN0ID0gKCh6ZXJvUG9pbnQgLSBjbGFtcGVkVmFsdWUpIC8gcmFuZ2UpICogMTAwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFBjdCA9ICgoY2xhbXBlZFZhbHVlIC0gbWluKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkYXRhIGJhciBkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3BQY3QgPSAoMTAwIC0gZGF0YUJhckhlaWdodCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS50b3AgPSBgJHt0b3BQY3R9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmhlaWdodCA9IGAke2RhdGFCYXJIZWlnaHR9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0UGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS53aWR0aCA9IGAke3dpZHRoUGN0fSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeShjZWxsRGF0YUJhckNvbG9yLCB0cmFuc3BhcmVuY3kpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCYXIuc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlck9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmFsQm9yZGVyQ29sb3IgPSBtYXRjaERhdGFCYXJDb2xvciA/IGNlbGxEYXRhQmFyQ29sb3IgOiBib3JkZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJvcmRlciA9IGAke2JvcmRlclRoaWNrbmVzc31weCBzb2xpZCAke2ZpbmFsQm9yZGVyQ29sb3J9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQmFyLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoZGF0YUJhcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3daZXJvTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6ZXJvTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUud2lkdGggPSBcIjJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6TGVmdFBjdCA9ICgoemVyb1BvaW50IC0gbWluKSAvIHJhbmdlKSAqIDEwMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHplcm9MaW5lLnN0eWxlLmxlZnQgPSBgY2FsYygke3pMZWZ0UGN0fSUgLSAxcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ZXJvTGluZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcHBseVRyYW5zcGFyZW5jeSh6ZXJvTGluZUNvbG9yLCB6ZXJvTGluZVRyYW5zcGFyZW5jeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemVyb0xpbmUuc3R5bGUuekluZGV4ID0gXCIxXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoemVyb0xpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGEgYmFyIG1hcmtlcnMgc2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dNYXJrZXIgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8Ym9vbGVhbj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJzaG93TWFya2VyXCIgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dNYXJrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyU2hhcGVSYXcgPSBkYXRhVmlld09iamVjdHMuZ2V0VmFsdWU8YW55PihvYmplY3RzLCB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlclNoYXBlXCIgfSwgXCJjaXJjbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyU2hhcGUgPSB0eXBlb2YgbWFya2VyU2hhcGVSYXcgPT09IFwic3RyaW5nXCIgPyBtYXJrZXJTaGFwZVJhdyA6IChtYXJrZXJTaGFwZVJhdy52YWx1ZSB8fCBcImNpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJTaXplID0gZGF0YVZpZXdPYmplY3RzLmdldFZhbHVlPG51bWJlcj4ob2JqZWN0cywgeyBvYmplY3ROYW1lOiBcImRhdGFCYXJNYXJrZXJzXCIsIHByb3BlcnR5TmFtZTogXCJtYXJrZXJTaXplXCIgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsTWFya2VyQ29sb3IgPSBkYXRhVmlld09iamVjdHMuZ2V0RmlsbENvbG9yKG9iamVjdHMsIHsgb2JqZWN0TmFtZTogXCJkYXRhQmFyTWFya2Vyc1wiLCBwcm9wZXJ0eU5hbWU6IFwibWFya2VyQ29sb3JcIiB9LCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlQ29sdW1uLm9iamVjdHMgJiYgdmFsdWVDb2x1bW4ub2JqZWN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZk1hcmtlckNvbG9yID0gZGF0YVZpZXdPYmplY3RzLmdldEZpbGxDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQ29sdW1uLm9iamVjdHNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9iamVjdE5hbWU6IFwiZGF0YUJhck1hcmtlcnNcIiwgcHJvcGVydHlOYW1lOiBcIm1hcmtlckNvbG9yXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZNYXJrZXJDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbE1hcmtlckNvbG9yID0gY2ZNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS56SW5kZXggPSBcIjNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtlckxlZnRQY3QgPSBudW1WYWx1ZSA+PSAwID8gbGVmdFBjdCArIHdpZHRoUGN0IDogbGVmdFBjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBgY2FsYyg1MCUgLSAke21hcmtlclNpemUgLyAyfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IGAke21hcmtlclNpemV9cHhgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFya2VyU2hhcGUgPT09IFwiY2lyY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXJrZXJTaGFwZSA9PT0gXCJjcm9zc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRvcCA9IFwiY2FsYyg1MCUgLSAxcHgpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUxLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDQ1ZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUuaGVpZ2h0ID0gXCIycHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudG9wID0gXCJjYWxjKDUwJSAtIDFweClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZTIuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTQ1ZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmFwcGVuZENoaWxkKGxpbmUyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcImhvcml6b250YWxMaW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxNYXJrZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmhlaWdodCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS50b3AgPSBcImNhbGMoNTAlIC0gMXB4KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInZlcnRpY2FsTGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsTWFya2VyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS53aWR0aCA9IFwiMnB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5sZWZ0ID0gYGNhbGMoJHttYXJrZXJMZWZ0UGN0fSUgLSAxcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcmtlclNoYXBlID09PSBcInNlbWlDaXJjbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbE1hcmtlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcmF3IHNlbWkgY2lyY2xlIHBvaW50aW5nIG91dHdhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1WYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGAke21hcmtlclNpemV9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLndpZHRoID0gYCR7bWFya2VyU2l6ZSAvIDJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmxlZnQgPSBgY2FsYygke21hcmtlckxlZnRQY3R9JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBgJHttYXJrZXJTaXplfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gYCR7bWFya2VyU2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUud2lkdGggPSBgJHttYXJrZXJTaXplIC8gMn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc3R5bGUubGVmdCA9IGBjYWxjKCR7bWFya2VyTGVmdFBjdH0lIC0gJHttYXJrZXJTaXplIC8gMn1weClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS56SW5kZXggPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsc091dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUudG9wID0gXCI1MCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGl2LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtNTAlKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5sZWZ0ID0gYGNhbGMoJHtsZWZ0UGN0ICsgd2lkdGhQY3R9JSArIDRweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaXYuc3R5bGUucmlnaHQgPSBgY2FsYygkezEwMCAtIGxlZnRQY3R9JSArIDRweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpdi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gYCR7dmFsdWVDb2x1bW5XaWR0aHNbbWVhc3VyZUluZGV4XX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IGAke3ZhbHVlQ29sdW1uV2lkdGhzW21lYXN1cmVJbmRleF19cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaChjZWxsLCByb3dIZWlnaHQsIGNlbGxGb250U2l6ZSwgdmFsdWVXb3JkV3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gdmFsdWVCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5mb250U3R5bGUgPSBjZWxsSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gY2VsbFVuZGVybGluZSA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gdmVydEJvcmRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93QmdDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gY2VsbFRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWNTZXR0aW5ncyA9IG1lYXN1cmVTZXR0aW5nc0xpc3RbbWVhc3VyZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1Jvd0JnQ29sb3IgPSBpc0V2ZW5Sb3cgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgOiByb3dCZ0NvbG9yKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmFsdGVybmF0ZUJhY2tncm91bmRDb2xvciA6IHJvd0JnQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGVjQ2VsbFRleHRDb2xvciA9IGlzRXZlblJvdyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3BlY1NldHRpbmdzLnRleHRDb2xvciAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLnRleHRDb2xvciA6IGNlbGxUZXh0Q29sb3IpIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuYWx0ZXJuYXRlVGV4dENvbG9yIDogY2VsbFRleHRDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVCZyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzID8gc3BlY1Jvd0JnQ29sb3IgOiByb3dCZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVDb2xvciA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzID8gc3BlY0NlbGxUZXh0Q29sb3IgOiBjZWxsVGV4dENvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZCb2xkID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogdmFsdWVCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkl0YWxpYyA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5pdGFsaWMgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5pdGFsaWMgOiBjZWxsSXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlVuZGVybGluZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgOiBjZWxsVW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZkZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1ZhbHVlcyAmJiBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRGYW1pbHkgOiBjZWxsRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZGb250U2l6ZSA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5mb250U2l6ZSAhPT0gdW5kZWZpbmVkID8gc3BlY1NldHRpbmdzLmZvbnRTaXplIDogY2VsbEZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZldvcmRXcmFwID0gc3BlY1NldHRpbmdzLmFwcGx5VG9WYWx1ZXMgJiYgc3BlY1NldHRpbmdzLnRleHRXcmFwICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dFdyYXAgOiB2YWx1ZVdvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVBbGlnbiA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVmFsdWVzICYmIHNwZWNTZXR0aW5ncy5hbGlnbm1lbnQgPyBzcGVjU2V0dGluZ3MuYWxpZ25tZW50IDogXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWZmZWN0aXZlQmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9IGVmZmVjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udFdlaWdodCA9IGVmQm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTdHlsZSA9IGVmSXRhbGljID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVW5kZXJsaW5lID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuZm9udEZhbWlseSA9IGVmRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmZvbnRTaXplID0gYCR7ZWZGb250U2l6ZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gZWZXb3JkV3JhcCA/IFwibm9ybWFsXCIgOiBcIm5vd3JhcFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLnRleHRBbGlnbiA9IGVmZmVjdGl2ZUFsaWduO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZldvcmRXcmFwKSB7IC8vIGFuZCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIFRvdGFsIGNvbHVtbiBjZWxsIGZvciB0aGlzIG1lYXN1cmUgaWYgZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dUb3RhbFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbENlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFZhbCA9IHRvdGFsc1ttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC50ZXh0Q29udGVudCA9IHRvdGFsVmFsLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5jbGFzc05hbWUgPSAndGFibGUtZGF0YS1jZWxsJztcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUud2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUubWluV2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUubWF4V2lkdGggPSBgJHt2YWx1ZUNvbHVtbldpZHRoc1ttZWFzdXJlSW5kZXhdfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BlY1NldHRpbmdzID0gbWVhc3VyZVNldHRpbmdzTGlzdFttZWFzdXJlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsQm9sZCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLmJvbGQgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5ib2xkIDogdG90YWxSb3dCb2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsSXRhbGljID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuaXRhbGljICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuaXRhbGljIDogdG90YWxSb3dJdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxVbmRlcmxpbmUgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy51bmRlcmxpbmUgOiB0b3RhbFJvd1VuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbEZvbnRGYW1pbHkgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5mb250RmFtaWx5ICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MuZm9udEZhbWlseSA6IHRvdGFsUm93Rm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbEZvbnRTaXplID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuZm9udFNpemUgIT09IHVuZGVmaW5lZCA/IHNwZWNTZXR0aW5ncy5mb250U2l6ZSA6IHRvdGFsUm93Rm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxXb3JkV3JhcCA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnRleHRXcmFwICE9PSB1bmRlZmluZWQgPyBzcGVjU2V0dGluZ3MudGV4dFdyYXAgOiB0b3RhbFJvd1dvcmRXcmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZlRvdGFsQmcgPSBzcGVjU2V0dGluZ3MuYXBwbHlUb1RvdGFsICYmIHNwZWNTZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3IgPyBzcGVjU2V0dGluZ3MuYmFja2dyb3VuZENvbG9yIDogdG90YWxSb3dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmVG90YWxDb2xvciA9IHNwZWNTZXR0aW5ncy5hcHBseVRvVG90YWwgJiYgc3BlY1NldHRpbmdzLnRleHRDb2xvciA/IHNwZWNTZXR0aW5ncy50ZXh0Q29sb3IgOiB0b3RhbFJvd1RleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZUb3RhbEFsaWduID0gc3BlY1NldHRpbmdzLmFwcGx5VG9Ub3RhbCAmJiBzcGVjU2V0dGluZ3MuYWxpZ25tZW50ID8gc3BlY1NldHRpbmdzLmFsaWdubWVudCA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICBhcHBseVJvd1NxdWFzaCh0b3RhbENlbGwsIHJvd0hlaWdodCwgZWZUb3RhbEZvbnRTaXplLCBlZlRvdGFsV29yZFdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5mb250V2VpZ2h0ID0gZWZUb3RhbEJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmZvbnRGYW1pbHkgPSBlZlRvdGFsRm9udEZhbWlseTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUuZm9udFN0eWxlID0gZWZUb3RhbEl0YWxpYyA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGVmVG90YWxVbmRlcmxpbmUgPyBcInVuZGVybGluZVwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gYDFweCBzb2xpZCAke2dyaWRCb3JkZXJDb2xvcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlZlRvdGFsQmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLmNvbG9yID0gZWZUb3RhbENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSBlZlRvdGFsQWxpZ247XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDZWxsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ2VsbC5zdHlsZS53aGl0ZVNwYWNlID0gZWZUb3RhbFdvcmRXcmFwID8gXCJub3JtYWxcIiA6IFwibm93cmFwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVmVG90YWxXb3JkV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbENlbGwuc3R5bGUud29yZEJyZWFrID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IG51bGw7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgdGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRzogSVZpc3VhbFBsdWdpbiA9IHtcbiAgICBuYW1lOiAndGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVRycsXG4gICAgZGlzcGxheU5hbWU6ICdUaW1UYWJsZScsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1widGltVGFibGVERDFBQjQ5MDM3MkM0NkI1QTY0NjA1NzQ2RTMyMkY1NV9ERUJVR1wiXSA9IHRpbVRhYmxlREQxQUI0OTAzNzJDNDZCNUE2NDYwNTc0NkUzMjJGNTVfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCB0aW1UYWJsZUREMUFCNDkwMzcyQzQ2QjVBNjQ2MDU3NDZFMzIyRjU1X0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=;
//# sourceURL=sources:///custom-visuals/timTableDD1AB490372C46B5A64605746E322F55_DEBUG.js;
