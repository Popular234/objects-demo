"use strict";

// console.log('hello world');

document.write('<h1>Objects Demo</h1>')

const spaceship = {
    engine: 'rocket',
    color: 'green',
    room: 'cockpit',
    flying: function(){
        return("My Spaceship is powered by a " + this.engine + " therfor it can fly")
    }
}

console.log(spaceship.color);

// document.write('<h2> I have a spaceship it is ', spaceship.color, ' my spaceship also has a ', spaceship.room, spaceship.flying(), '</h2>');

document.write('<h2>', spaceship.flying, '</h2>')

document.write('<h2>', spaceship.flying(), '</h2>')