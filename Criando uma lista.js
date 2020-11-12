class mylist{
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
}