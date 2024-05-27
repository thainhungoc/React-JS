class Person {
    sex: boolean;
    height: number;
    weight: number;
    constructor(sex: boolean, height: number, weight: number) {
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }
    CalBMI() {
        return this.weight / this.height
    }
}


class Student extends Person {
    name: string;
    age: number;
    id: string;
    constructor(name:string, age : number, id: string, sex: boolean, height: number, weight: number ) {
        // Gọi tới constructor của Person
        super(sex, height, weight); // Phải được gọi đầu tiên của constructor của lớp con
        this.name = name;
        this.age = age;
        this.id = id;
    }
    DoHomeWork() {
        console.log(`${this.name} đang làm bài tập !`);
    }
    ToString() {
        return `Tên: ${this.name} Tuổi: ${this.age} Id: ${this.id} Giới Tính: ${this.sex} Cân Nặng: ${this.weight} Chiều Cao: ${this.height}`
    }
    ToStringPerson(){
        // return  sugar.toString()
    }
}
//phương thức toString ko biết của phần tử cha hay con mà bết đưọc trong quá trình biên dich chương trình

// Tính kế thừa 
// Sử dụng từ khóa extends để kế thừa lớp khác
let Student1 = new Student("Hạ",19,"1",true,15.8,60);
console.log(Student1.DoHomeWork());
console.log(Student1.ToString());
console.log(Student1.CalBMI()); 

let variable: Person
// kiểu khai báo là pign
// geter dùng để láy 
// seter
// 