function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js ***!
    \**********************************************************************/

  /*! exports provided: ion_ripple_effect */

  /***/
  function node_modulesIonicCoreDistEsmIonRippleEffectEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function () {
      return RippleEffect;
    });
    /* harmony import */


    var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-d0403a2f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
    /* harmony import */


    var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-1074393c.js */
    "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");

    var RippleEffect =
    /*#__PURE__*/
    function () {
      function RippleEffect(hostRef) {
        _classCallCheck(this, RippleEffect);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Sets the type of ripple-effect:
         *
         * - `bounded`: the ripple effect expands from the user's click position
         * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
         *
         * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
         * while surfaces for unbounded ripples should have it set to visible.
         */

        this.type = 'bounded';
      }
      /**
       * Adds the ripple effect to the parent element.
       *
       * @param x The horizontal coordinate of where the ripple should start.
       * @param y The vertical coordinate of where the ripple should start.
       */


      _createClass(RippleEffect, [{
        key: "addRipple",
        value: function addRipple(x, y) {
          var _this = this;

          return regeneratorRuntime.async(function addRipple$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                      var rect = _this.el.getBoundingClientRect();

                      var width = rect.width;
                      var height = rect.height;
                      var hypotenuse = Math.sqrt(width * width + height * height);
                      var maxDim = Math.max(height, width);
                      var maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
                      var initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                      var finalScale = maxRadius / initialSize;
                      var posX = x - rect.left;
                      var posY = y - rect.top;

                      if (_this.unbounded) {
                        posX = width * 0.5;
                        posY = height * 0.5;
                      }

                      var styleX = posX - initialSize * 0.5;
                      var styleY = posY - initialSize * 0.5;
                      var moveX = width * 0.5 - posX;
                      var moveY = height * 0.5 - posY;
                      Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                        var div = document.createElement('div');
                        div.classList.add('ripple-effect');
                        var style = div.style;
                        style.top = styleY + 'px';
                        style.left = styleX + 'px';
                        style.width = style.height = initialSize + 'px';
                        style.setProperty('--final-scale', "".concat(finalScale));
                        style.setProperty('--translate-end', "".concat(moveX, "px, ").concat(moveY, "px"));
                        var container = _this.el.shadowRoot || _this.el;
                        container.appendChild(div);
                        setTimeout(function () {
                          resolve(function () {
                            removeRipple(div);
                          });
                        }, 225 + 100);
                      });
                    });
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _class;

          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "presentation",
            class: (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'unbounded', this.unbounded), _class)
          });
        }
      }, {
        key: "unbounded",
        get: function get() {
          return this.type === 'unbounded';
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}";
        }
      }]);

      return RippleEffect;
    }();

    var removeRipple = function removeRipple(ripple) {
      ripple.classList.add('fade-out');
      setTimeout(function () {
        ripple.remove();
      }, 200);
    };

    var PADDING = 10;
    var INITIAL_ORIGIN_SCALE = 0.5;
    /***/
  }
}]);
//# sourceMappingURL=55-es5.js.map