/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ./platform/plugins/contact/resources/assets/js/contact.js ***!
  \*****************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ContactPluginManagement = /*#__PURE__*/function () {
  function ContactPluginManagement() {
    _classCallCheck(this, ContactPluginManagement);
  }
  _createClass(ContactPluginManagement, [{
    key: "init",
    value: function init() {
      $(document).on('click', '.answer-trigger-button', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var answerWrapper = $('.answer-wrapper');
        if (answerWrapper.is(':visible')) {
          answerWrapper.fadeOut();
        } else {
          answerWrapper.fadeIn();
        }
      });
      $(document).on('click', '.answer-send-button', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(event.currentTarget).addClass('button-loading');
        var message = '';
        if (typeof tinymce != 'undefined') {
          message = tinymce.get('message').getContent();
        } else if (CKEDITOR.instances['message'] && typeof CKEDITOR.instances['message'] !== 'undefined') {
          message = CKEDITOR.instances['message'].getData();
        }
        $.ajax({
          type: 'POST',
          cache: false,
          url: route('contacts.reply', $('#input_contact_id').val()),
          data: {
            message: message
          },
          success: function success(res) {
            if (!res.error) {
              $('.answer-wrapper').fadeOut();
              if (typeof tinymce != 'undefined') {
                tinymce.get('message').setContent('');
              } else if (CKEDITOR.instances['message'] && typeof CKEDITOR.instances['message'] !== 'undefined') {
                CKEDITOR.instances['message'].setData('');
              }
              Botble.showSuccess(res.message);
              $('#reply-wrapper').load(window.location.href + ' #reply-wrapper > *');
            }
            $(event.currentTarget).removeClass('button-loading');
          },
          error: function error(res) {
            $(event.currentTarget).removeClass('button-loading');
            Botble.handleError(res);
          }
        });
      });
    }
  }]);
  return ContactPluginManagement;
}();
$(document).ready(function () {
  new ContactPluginManagement().init();
});
/******/ })()
;