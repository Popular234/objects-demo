"use strict";

// // console.log('hello world');

document.write('<h1>Objects Demo</h1>')

// const spaceship = {
//     engine: 'rocket',
//     color: 'green',
//     room: 'cockpit',
//     flying: function(){
//         return("My Spaceship is powered by a " + this.engine + " therfor it can fly")
//     }
// }

// console.log(spaceship.color);

// // document.write('<h2> I have a spaceship it is ', spaceship.color, ' my spaceship also has a ', spaceship.room, spaceship.flying(), '</h2>');

// document.write('<h2>', spaceship.flying, '</h2>')

// document.write('<h2>', spaceship.flying(), '</h2>')

// function Car (make, model, color, year){
//     this.make = make;
//     this.model = model;
//     this.color = color;
//     this.year = year;
// }

// const myCar = new Car("ford", "F150", "Blue", "2016");
// const sammyCar = new Car("Dodge", "Ram 1500", "White", "2017");
// const kierrasCar = new Car("Toyota", "Highlander", "Black", "2020");
// console.log(myCar);
// console.log(sammyCar);
// console.log(kierrasCar);

function Icecream(name, flavor, dish, size){
    this.name = name;
    this.flavor = flavor;
    this.dish = dish;
    this.size = size;
}

Icecream.prototype.topping = 'sprinkles';
Icecream.prototype.string = function(){
    return "My name is " + this.name + " I like " + this.flavor + " icecream my preference would be to have it in " + this.dish + " and have it be " + this.size
}

const mrmummIcecream = new Icecream('mr mumm', 'Caramel', 'Bowl', 'Large');
const joshsIcecream = new Icecream('Josh', 'cookie dough', 'blizzard', 'large')
const cainsIcecream = new Icecream('Cain', 'Reeses', 'Blizzard', 'mini')
const jrsIcecream = new Icecream('Jr', 'Vanilla', 'cone', 'large')

console.log(mrmummIcecream);
console.log(joshsIcecream);
console.log(cainsIcecream);
console.log(jrsIcecream, Icecream.prototype.string);
document.write('<h2>',jrsIcecream.string(), '</h2>')