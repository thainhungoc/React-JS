"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Mã sinh viên: ${this.id}`);
    }
}
let student = new Student("Nguyễn Văn C", 12345);
student.displayInfo();
