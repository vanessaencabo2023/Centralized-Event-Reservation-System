/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./platform/core/acl/resources/assets/js/login.js ***!
  \********************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Login = /*#__PURE__*/function () {
  function Login() {
    _classCallCheck(this, Login);
  }
  _createClass(Login, [{
    key: "handleLogin",
    value: function handleLogin() {
      $('.login-form').validate({
        errorElement: 'span',
        //default input error message container
        errorClass: 'help-block',
        // default input error message class
        focusInvalid: false,
        // do not focus the last invalid input
        rules: {
          username: {
            required: true
          },
          password: {
            required: true
          },
          remember: {
            required: false
          }
        },
        messages: {
          username: {
            required: 'Username is required.'
          },
          password: {
            required: 'Password is required.'
          }
        },
        invalidHandler: function invalidHandler() {
          //display error alert on form submit
          $('.alert-danger', $('.login-form')).show();
        },
        highlight: function highlight(element) {
          // highlight error inputs
          $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
        },

        success: function success(label) {
          label.closest('.form-group').removeClass('has-error');
          label.remove();
        },
        errorPlacement: function errorPlacement(error, element) {
          error.insertAfter(element.closest('.form-control'));
        },
        submitHandler: function submitHandler(form) {
          form.submit(); // form validation success, call ajax form submit
        }
      });

      $('.login-form input').keypress(function (e) {
        if (e.which === 13) {
          if ($('.login-form').validate().form()) {
            $('.login-form').submit(); //form validation success, call ajax form submit
          }

          return false;
        }
      });
    }
  }, {
    key: "handleForgetPassword",
    value: function handleForgetPassword() {
      $('.forget-form').validate({
        errorElement: 'span',
        //default input error message container
        errorClass: 'help-block',
        // default input error message class
        focusInvalid: false,
        // do not focus the last invalid input
        ignore: '',
        rules: {
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          email: {
            required: 'Email is required.'
          }
        },
        invalidHandler: function invalidHandler() {
          //display error alert on form submit
          $('.alert-danger', $('.forget-form')).show();
        },
        highlight: function highlight(element) {
          // hightlight error inputs
          $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
        },

        success: function success(label) {
          label.closest('.form-group').removeClass('has-error');
          label.remove();
        },
        errorPlacement: function errorPlacement(error, element) {
          error.insertAfter(element.closest('.form-control'));
        },
        submitHandler: function submitHandler(form) {
          form.submit();
        }
      });
      $('.forget-form input').keypress(function (e) {
        if (e.which === 13) {
          if ($('.forget-form').validate().form()) {
            $('.forget-form').submit();
          }
          return false;
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.handleLogin();
      this.handleForgetPassword();
    }
  }]);
  return Login;
}();
$(document).ready(function () {
  new Login().init();
});
/******/ })()
;