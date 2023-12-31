/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ./platform/core/acl/resources/assets/js/role.js ***!
  \*******************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Role = /*#__PURE__*/function () {
  function Role() {
    _classCallCheck(this, Role);
  }
  _createClass(Role, [{
    key: "init",
    value: function init() {
      $('#auto-checkboxes li').tree({
        onCheck: {
          node: 'expand'
        },
        onUncheck: {
          node: 'expand'
        },
        dnd: false,
        selectable: false
      });
      $('#mainNode .checker').change(function (event) {
        var _self = $(event.currentTarget);
        var set = _self.attr('data-set');
        var checked = _self.is(':checked');
        $(set).each(function (index, el) {
          if (checked) {
            $(el).attr('checked', true);
          } else {
            $(el).attr('checked', false);
          }
        });
      });
    }
  }]);
  return Role;
}();
$(document).ready(function () {
  new Role().init();
});
/******/ })()
;