abstract class Shape {
    name: string;
    constructor(_name: string) {
      this.name = _name;
    }
    getName() {
      console.log(this.name);
    }
    abstract getSize: () => number;
  }
  
  class Something extends Shape {
    size: number;
    constructor(_name: string, _size: number) {
      super(_name);
      this.size = _size;
    }
    //triển khai toàn bộ phương thức trựu tượng
    getSize = () => {
      return this.size;
    };
  }
  let something1 = new Something("ai đó", 5);
  
  something1.getName();
  console.log(something1.getSize());