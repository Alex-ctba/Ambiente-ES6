"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mylist = /*#__PURE__*/function () {
  function mylist() {
    _classCallCheck(this, mylist);

    this.arrayLIst = [];
  }

  _createClass(mylist, [{
    key: "displysList",
    value: function displysList() {
      this.arrayLIst.push('New Element');
      console.log(this.arrayLIst);
    }
  }]);

  return mylist;
}();

var list = new mylist();

document.querySelector('button').onclick = function () {
  list.displysList();
};
