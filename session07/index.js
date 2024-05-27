"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Pink"] = 101] = "Pink";
    Color[Color["Yellow"] = 102] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Yellow);
let color = Color.Green;
