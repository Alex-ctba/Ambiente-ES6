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
class sum{
    static dados(a, b){
        return a + b
    }
}
console.log(sum.dados(12,5))