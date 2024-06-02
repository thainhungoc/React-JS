"use strict";
class Job {
    constructor(_type) {
        this.type = _type;
    }
    printType() {
        console.log(this.type);
    }
}
class PartimeJob extends Job {
    constructor(_workingHour) {
        super("Part-time");
        this.workingHour = _workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000;
    }
}
// Test
const partime = new PartimeJob(20);
partime.printType();
console.log(partime.calculateSalary());
const fulltime = new FulltimeJob();
fulltime.printType();
console.log(fulltime.calculateSalary());
