"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone); // Gọi hàm khởi tạo của lớp cha
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo(); // Gọi phương thức printInfo của lớp cha
        console.log(`Kích thước nhóm: ${this.teamSize}`);
    }
}
let employee = new Employee("Trần Văn A", "FPT", "0123456789");
employee.printInfo();
// Khởi tạo đối tượng Manager
let manager = new Manager("Nguyễn Thị B", "Viettel", "9876543210", 10);
manager.printInfo();
