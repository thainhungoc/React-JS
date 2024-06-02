abstract class Job {
    type: string;
  
    constructor(_type: string) {
      this.type = _type;
    }
  
    printType() {
      console.log(this.type);
    }
  
    abstract calculateSalary(): number;
  }
  
  class PartimeJob extends Job {
    workingHour: number;
  
    constructor(_workingHour: number) {
      super("Part-time");
      this.workingHour = _workingHour;
    }
  
    calculateSalary(): number {
      return 30000 * this.workingHour;
    }
  }
  
  class FulltimeJob extends Job {
    constructor() {
      super("Full-time");
    }
  
    calculateSalary(): number {
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