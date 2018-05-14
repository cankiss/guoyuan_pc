"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
    function Render(data) {
        _classCallCheck(this, Render);

        this.obj = data;
    }

    _createClass(Render, [{
        key: "renderTable",
        value: function renderTable() {
            var urlPath = "newsDetails.html?id=" + this.obj.id + "&type=" + this.obj.type;
            return "<tr>\n               <td>\n                 <a href=" + urlPath + ">" + this.obj.title + "</a>\n               </td>\n               <td>" + (this.obj.date || "") + " </td>\n            </tr>";
        }
    }, {
        key: "renderArticle",
        value: function renderArticle() {
            return "<h2>" + this.obj.title + "</h2>\n             <div class=\"font-12\">\n               <span>" + (this.obj.date || "") + "</span>\n             </div>\n             <div class=\"font-12 font-999\">" + this.obj.content + "</div>";
        }
    }]);

    return Render;
}();