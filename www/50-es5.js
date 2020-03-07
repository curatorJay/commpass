function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js ***!
    \*****************************************************************/

  /*! exports provided: ion_range */

  /***/
  function node_modulesIonicCoreDistEsmIonRangeMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_range", function () {
      return Range;
    });
    /* harmony import */


    var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-d0403a2f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
    /* harmony import */


    var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-1074393c.js */
    "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
    /* harmony import */


    var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-353a032e.js */
    "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js");
    /* harmony import */


    var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chunk-c90aaa66.js */
    "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     *
     * @slot start - Content is placed to the left of the range slider in LTR, and to the right in RTL.
     * @slot end - Content is placed to the right of the range slider in LTR, and to the left in RTL.
     */


    var Range =
    /*#__PURE__*/
    function () {
      function Range(hostRef) {
        var _this = this;

        _classCallCheck(this, Range);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.noUpdate = false;
        this.hasFocus = false;
        this.ratioA = 0;
        this.ratioB = 0;
        /**
         * How long, in milliseconds, to wait to trigger the
         * `ionChange` event after each change in the range value.
         */

        this.debounce = 0;
        /**
         * The name of the control, which is submitted with the form data.
         */

        this.name = '';
        /**
         * Show two knobs.
         */

        this.dualKnobs = false;
        /**
         * Minimum integer value of the range.
         */

        this.min = 0;
        /**
         * Maximum integer value of the range.
         */

        this.max = 100;
        /**
         * If `true`, a pin with integer value is shown when the knob
         * is pressed.
         */

        this.pin = false;
        /**
         * If `true`, the knob snaps to tick marks evenly spaced based
         * on the step property value.
         */

        this.snaps = false;
        /**
         * Specifies the value granularity.
         */

        this.step = 1;
        /**
         * If `true`, tick marks are displayed based on the step value.
         * Only applies when `snaps` is `true`.
         */

        this.ticks = true;
        /**
         * If `true`, the user cannot interact with the range.
         */

        this.disabled = false;
        /**
         * the value of the range.
         */

        this.value = 0;

        this.clampBounds = function (value) {
          return Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(_this.min, value, _this.max);
        };

        this.ensureValueInBounds = function (value) {
          if (_this.dualKnobs) {
            return {
              lower: _this.clampBounds(value.lower),
              upper: _this.clampBounds(value.upper)
            };
          } else {
            return _this.clampBounds(value);
          }
        };

        this.handleKeyboard = function (knob, isIncrease) {
          var step = _this.step;
          step = step > 0 ? step : 1;
          step = step / (_this.max - _this.min);

          if (!isIncrease) {
            step *= -1;
          }

          if (knob === 'A') {
            _this.ratioA = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, _this.ratioA + step, 1);
          } else {
            _this.ratioB = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, _this.ratioB + step, 1);
          }

          _this.updateValue();
        };

        this.onBlur = function () {
          if (_this.hasFocus) {
            _this.hasFocus = false;

            _this.ionBlur.emit();

            _this.emitStyle();
          }
        };

        this.onFocus = function () {
          if (!_this.hasFocus) {
            _this.hasFocus = true;

            _this.ionFocus.emit();

            _this.emitStyle();
          }
        };

        this.ionChange = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
        this.ionStyle = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        this.ionFocus = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
      }

      _createClass(Range, [{
        key: "debounceChanged",
        value: function debounceChanged() {
          this.ionChange = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this.ionChange, this.debounce);
        }
      }, {
        key: "minChanged",
        value: function minChanged() {
          if (!this.noUpdate) {
            this.updateRatio();
          }
        }
      }, {
        key: "maxChanged",
        value: function maxChanged() {
          if (!this.noUpdate) {
            this.updateRatio();
          }
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
          }

          this.emitStyle();
        }
      }, {
        key: "valueChanged",
        value: function valueChanged(value) {
          if (!this.noUpdate) {
            this.updateRatio();
          }

          value = this.ensureValueInBounds(value);
          this.ionChange.emit({
            value: value
          });
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          this.updateRatio();
          this.debounceChanged();
          this.emitStyle();
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this2 = this;

          return regeneratorRuntime.async(function componentDidLoad$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return regeneratorRuntime.awrap(__webpack_require__.e(
                  /*! import() | index-f4f18d97-js */
                  0).then(__webpack_require__.bind(null,
                  /*! ./index-f4f18d97.js */
                  "./node_modules/@ionic/core/dist/esm/index-f4f18d97.js")));

                case 2:
                  _context.t0 = {
                    el: this.rangeSlider,
                    gestureName: 'range',
                    gesturePriority: 100,
                    threshold: 0,
                    onStart: function onStart(ev) {
                      return _this2.onStart(ev);
                    },
                    onMove: function onMove(ev) {
                      return _this2.onMove(ev);
                    },
                    onEnd: function onEnd(ev) {
                      return _this2.onEnd(ev);
                    }
                  };
                  this.gesture = _context.sent.createGesture(_context.t0);
                  this.gesture.setDisabled(this.disabled);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          var value = this.value || 0;

          if (this.dualKnobs) {
            if (typeof value === 'object') {
              return value;
            }

            return {
              lower: 0,
              upper: value
            };
          } else {
            if (typeof value === 'object') {
              return value.upper;
            }

            return value;
          }
        }
      }, {
        key: "emitStyle",
        value: function emitStyle() {
          this.ionStyle.emit({
            'interactive': true,
            'interactive-disabled': this.disabled
          });
        }
      }, {
        key: "onStart",
        value: function onStart(detail) {
          var rect = this.rect = this.rangeSlider.getBoundingClientRect();
          var currentX = detail.currentX; // figure out which knob they started closer to

          var ratio = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, (currentX - rect.left) / rect.width, 1);

          if (document.dir === 'rtl') {
            ratio = 1 - ratio;
          }

          this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? 'A' : 'B';
          this.setFocus(this.pressedKnob); // update the active knob's position

          this.update(currentX);
        }
      }, {
        key: "onMove",
        value: function onMove(detail) {
          this.update(detail.currentX);
        }
      }, {
        key: "onEnd",
        value: function onEnd(detail) {
          this.update(detail.currentX);
          this.pressedKnob = undefined;
        }
      }, {
        key: "update",
        value: function update(currentX) {
          // figure out where the pointer is currently at
          // update the knob being interacted with
          var rect = this.rect;
          var ratio = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, (currentX - rect.left) / rect.width, 1);

          if (document.dir === 'rtl') {
            ratio = 1 - ratio;
          }

          if (this.snaps) {
            // snaps the ratio to the current value
            ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
          } // update which knob is pressed


          if (this.pressedKnob === 'A') {
            this.ratioA = ratio;
          } else {
            this.ratioB = ratio;
          } // Update input value


          this.updateValue();
        }
      }, {
        key: "updateRatio",
        value: function updateRatio() {
          var value = this.getValue();
          var min = this.min,
              max = this.max;

          if (this.dualKnobs) {
            this.ratioA = valueToRatio(value.lower, min, max);
            this.ratioB = valueToRatio(value.upper, min, max);
          } else {
            this.ratioA = valueToRatio(value, min, max);
          }
        }
      }, {
        key: "updateValue",
        value: function updateValue() {
          this.noUpdate = true;
          var valA = this.valA,
              valB = this.valB;
          this.value = !this.dualKnobs ? valA : {
            lower: Math.min(valA, valB),
            upper: Math.max(valA, valB)
          };
          this.noUpdate = false;
        }
      }, {
        key: "setFocus",
        value: function setFocus(knob) {
          if (this.el.shadowRoot) {
            var knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');

            if (knobEl) {
              knobEl.focus();
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _barStyle,
              _Object$assign,
              _this3 = this;

          var min = this.min,
              max = this.max,
              step = this.step,
              el = this.el,
              handleKeyboard = this.handleKeyboard,
              pressedKnob = this.pressedKnob,
              disabled = this.disabled,
              pin = this.pin,
              ratioLower = this.ratioLower,
              ratioUpper = this.ratioUpper;
          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var barStart = "".concat(ratioLower * 100, "%");
          var barEnd = "".concat(100 - ratioUpper * 100, "%");
          var doc = document;
          var isRTL = doc.dir === 'rtl';
          var start = isRTL ? 'right' : 'left';
          var end = isRTL ? 'left' : 'right';

          var tickStyle = function tickStyle(tick) {
            return _defineProperty({}, start, tick[start]);
          };

          var barStyle = (_barStyle = {}, _defineProperty(_barStyle, start, barStart), _defineProperty(_barStyle, end, barEnd), _barStyle);
          var ticks = [];

          if (this.snaps && this.ticks) {
            for (var value = min; value <= max; value += step) {
              var ratio = valueToRatio(value, min, max);
              var tick = {
                ratio: ratio,
                active: ratio >= ratioLower && ratio <= ratioUpper
              };
              tick[start] = "".concat(ratio * 100, "%");
              ticks.push(tick);
            }
          }

          Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["r"])(true, el, this.name, JSON.stringify(this.getValue()), disabled);
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onFocusin: this.onFocus,
            onFocusout: this.onBlur,
            class: Object.assign({}, Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'in-item', Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-item', el)), _defineProperty(_Object$assign, 'range-disabled', disabled), _defineProperty(_Object$assign, 'range-pressed', pressedKnob !== undefined), _defineProperty(_Object$assign, 'range-has-pin', pin), _Object$assign))
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "start"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "range-slider",
            ref: function ref(rangeEl) {
              return _this3.rangeSlider = rangeEl;
            }
          }, ticks.map(function (tick) {
            return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              style: tickStyle(tick),
              role: "presentation",
              class: {
                'range-tick': true,
                'range-tick-active': tick.active
              }
            });
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "range-bar",
            role: "presentation"
          }), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "range-bar range-bar-active",
            role: "presentation",
            style: barStyle
          }), renderKnob(isRTL, {
            knob: 'A',
            pressed: pressedKnob === 'A',
            value: this.valA,
            ratio: this.ratioA,
            pin: pin,
            disabled: disabled,
            handleKeyboard: handleKeyboard,
            min: min,
            max: max
          }), this.dualKnobs && renderKnob(isRTL, {
            knob: 'B',
            pressed: pressedKnob === 'B',
            value: this.valB,
            ratio: this.ratioB,
            pin: pin,
            disabled: disabled,
            handleKeyboard: handleKeyboard,
            min: min,
            max: max
          })), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "end"
          }));
        }
      }, {
        key: "valA",
        get: function get() {
          return ratioToValue(this.ratioA, this.min, this.max, this.step);
        }
      }, {
        key: "valB",
        get: function get() {
          return ratioToValue(this.ratioB, this.min, this.max, this.step);
        }
      }, {
        key: "ratioLower",
        get: function get() {
          if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
          }

          return 0;
        }
      }, {
        key: "ratioUpper",
        get: function get() {
          if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
          }

          return this.ratioA;
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "debounce": ["debounceChanged"],
            "min": ["minChanged"],
            "max": ["maxChanged"],
            "disabled": ["disabledChanged"],
            "value": ["valueChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:\"\";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}";
        }
      }]);

      return Range;
    }();

    var renderKnob = function renderKnob(isRTL, _ref2) {
      var knob = _ref2.knob,
          value = _ref2.value,
          ratio = _ref2.ratio,
          min = _ref2.min,
          max = _ref2.max,
          disabled = _ref2.disabled,
          pressed = _ref2.pressed,
          pin = _ref2.pin,
          handleKeyboard = _ref2.handleKeyboard;
      var start = isRTL ? 'right' : 'left';

      var knobStyle = function knobStyle() {
        var style = {};
        style[start] = "".concat(ratio * 100, "%");
        return style;
      };

      return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        onKeyDown: function onKeyDown(ev) {
          var key = ev.key;

          if (key === 'ArrowLeft' || key === 'ArrowDown') {
            handleKeyboard(knob, false);
            ev.preventDefault();
            ev.stopPropagation();
          } else if (key === 'ArrowRight' || key === 'ArrowUp') {
            handleKeyboard(knob, true);
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        class: {
          'range-knob-handle': true,
          'range-knob-a': knob === 'A',
          'range-knob-b': knob === 'B',
          'range-knob-pressed': pressed,
          'range-knob-min': value === min,
          'range-knob-max': value === max
        },
        style: knobStyle(),
        role: "slider",
        tabindex: disabled ? -1 : 0,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-disabled": disabled ? 'true' : null,
        "aria-valuenow": value
      }, pin && Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        class: "range-pin",
        role: "presentation"
      }, Math.round(value)), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        class: "range-knob",
        role: "presentation"
      }));
    };

    var ratioToValue = function ratioToValue(ratio, min, max, step) {
      var value = (max - min) * ratio;

      if (step > 0) {
        value = Math.round(value / step) * step + min;
      }

      return Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(min, value, max);
    };

    var valueToRatio = function valueToRatio(value, min, max) {
      return Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["c"])(0, (value - min) / (max - min), 1);
    };
    /***/

  }
}]);
//# sourceMappingURL=50-es5.js.map