class Employee {
    // Thuộc tính public
    name: string;
  
    // Thuộc tính protected
    protected company: string;
  
    // Thuộc tính private
    private phone: string;
  
    constructor(name: string, company: string, phone: string) {
      this.name = name;
      this.company = company;
      this.phone = phone;
    }
  
    printInfo(): void {
      console.log(`Tên: ${this.name}`);
      console.log(`Công ty: ${this.company}`);
      console.log(`Số điện thoại: ${this.phone}`);
    }
  }
  
  class Manager extends Employee {
    teamSize: number;
  
    constructor(name: string, company: string, phone: string, teamSize: number) {
      super(name, company, phone); // Gọi hàm khởi tạo của lớp cha
      this.teamSize = teamSize;
    }
  
    printInfo(): void {
      super.printInfo(); // Gọi phương thức printInfo của lớp cha
      console.log(`Kích thước nhóm: ${this.teamSize}`);
    }
  }
  
  let employee: Employee = new Employee("Trần Văn A", "FPT", "0123456789");
  
  employee.printInfo();
  
  // Khởi tạo đối tượng Manager
  let manager: Manager = new Manager("Nguyễn Thị B", "Viettel", "9876543210", 10);
    manager.printInfo();
  