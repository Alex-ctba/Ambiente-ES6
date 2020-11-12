"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*class mylist{
    constructor(){
        this.arrayLIst = []
    }

    displysList(){
        this.arrayLIst.push('New Element')
        console.log(this.arrayLIst)       
    }
}

const list = new mylist()

document.querySelector('button').onclick = function(){
    list.displysList()


//Utilizando herança

class list{
    constructor(){
        this.dados = []
    }

    add(dados){
        this.dados.push(dados)
        console.log(this.dados)
    }
}

class mylist extends list{
    
}

const lista = new mylist()

document.querySelector('button').onclick = function(){
    lista.add('New element')
}

*/
//Utilizando metodo static
var sum = /*#__PURE__*/function () {
  function sum() {
    _classCallCheck(this, sum);
  }

  _createClass(sum, null, [{
    key: "dados",
    value: function dados(a, b) {
      return a + b;
    }
  }]);

  return sum;
}();

console.log(sum.dados(12, 5));
