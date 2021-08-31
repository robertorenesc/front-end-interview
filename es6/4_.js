
class Doer {
    
    constructor(name) {
        this.name = name
    }

    doSomething() {
        console.log(`${this.name} is doing something`)
    }
    
    
    doSomethingElse = () => {
        console.log(`${this.name} is doing something else`)
    }
    
}

let doer = new Doer('Juan')
doer.doSomething()
doer.doSomethingElse()