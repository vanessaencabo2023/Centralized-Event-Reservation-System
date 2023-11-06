/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************************************!*\
  !*** ./platform/plugins/gallery/resources/assets/js/object-gallery.js ***!
  \************************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ObjectGalleryManagement = /*#__PURE__*/function () {
  function ObjectGalleryManagement() {
    _classCallCheck(this, ObjectGalleryManagement);
  }
  _createClass(ObjectGalleryManagement, [{
    key: "init",
    value: function init() {
      $('[data-slider="owl"] .owl-carousel').each(function (index, el) {
        var parent = $(el).parent();
        var items;
        var itemsDesktop;
        var itemsDesktopSmall;
        var itemsTablet;
        var itemsTabletSmall;
        var itemsMobile;
        if (parent.data('single-item') === 'true') {
          items = 1;
          itemsDesktop = 1;
          itemsDesktopSmall = 1;
          itemsTablet = 1;
          itemsTabletSmall = 1;
          itemsMobile = 1;
        } else {
          items = parent.data('items');
          itemsDesktop = [1199, parent.data('desktop-items') ? parent.data('desktop-items') : items];
          itemsDesktopSmall = [979, parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3];
          itemsTablet = [768, parent.data('tablet-items') ? parent.data('tablet-items') : 2];
          itemsMobile = [479, parent.data('mobile-items') ? parent.data('mobile-items') : 1];
        }
        $(el).owlCarousel({
          items: items,
          itemsDesktop: itemsDesktop,
          itemsDesktopSmall: itemsDesktopSmall,
          itemsTablet: itemsTablet,
          itemsTabletSmall: itemsTabletSmall,
          itemsMobile: itemsMobile,
          navigation: !!parent.data('navigation'),
          navigationText: false,
          slideSpeed: parent.data('slide-speed'),
          paginationSpeed: parent.data('pagination-speed'),
          singleItem: !!parent.data('single-item'),
          autoPlay: parent.data('auto-play')
        });
      });
    }
  }]);
  return ObjectGalleryManagement;
}();
$(document).ready(function () {
  new ObjectGalleryManagement().init();
});
/******/ })()
;