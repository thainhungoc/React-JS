class Person {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    displayInfo(): void {
      console.log(`Tên: ${this.name}`);
    }
  }
  
  class Student extends Person {
    id: number;
  
    constructor(name: string, id: number) {
      super(name); 
      this.id = id;
    }
  
    displayInfo(): void {
      super.displayInfo(); 
      console.log(`Mã sinh viên: ${this.id}`);
    }
  }
  
  let student: Student = new Student("Nguyễn Văn C", 12345);
    student.displayInfo();
  