let fruits = ['Apple','Orange','Banana'];

const getFruits = (f1, f2, f3) => {
    console.log(`Fruits: ${f1}, ${f2} and ${f3}`); 
}

getFruits(...fruits)

// -----------------------------

var obj1 = { id: 101, name: 'Jhon Doe' }
var obj2 = { age: 25, country: 'USA'}

let myObject = Object.assign(obj1, obj2)

console.log(myObject)

