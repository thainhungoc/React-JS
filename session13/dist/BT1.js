"use strict";
class Shape {
    constructor(_name) {
        this.name = _name;
    }
    getName() {
        console.log(this.name);
    }
}
class Something extends Shape {
    constructor(_name, _size) {
        super(_name);
        //triển khai toàn bộ phương thức trựu tượng
        this.getSize = () => {
            return this.size;
        };
        this.size = _size;
    }
}
let something1 = new Something("ai đó", 5);
something1.getName();
console.log(something1.getSize());
