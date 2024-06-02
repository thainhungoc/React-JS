abstract class Class {
    name1: string;
    constructor(name1: string) {
      this.name1 = name1;
    }
    abstract show: () => void;
  }
  
  class A extends Class {
    id: string;
    constructor(id: string, name1: string) {
      super(name1);
      this.id = id;
    }
    show = () => {
      console.log(this.id);
    };
    show1() {
      console.log(this.name1);
    }
  }