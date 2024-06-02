class Student {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }
}

let allStudents: Student[] = [];

class Classroom {
    private name: string;
    private id: number;
    private students: Student[];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.students = [];
    }

    public addStudent(studentId: number) {
        const studentIndex = allStudents.findIndex(student => student.getId() === studentId);
        if (studentIndex !== -1) {
            this.students.push(allStudents[studentIndex]);
            allStudents.splice(studentIndex, 1);
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    public showStudents() {
        console.log(`Students in ${this.name}:`);
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }

    public removeStudent(studentId: number) {
        this.students = this.students.filter(student => student.getId() !== studentId);
    }

    public editStudent(updatedStudent: Student) {
        this.students = this.students.map(student => {
            if (student.getId() === updatedStudent.getId()) {
                return updatedStudent;
            }
            return student;
        });
    }
}

let student1 = new Student("Hào", 1);
let student2 = new Student("Hạ", 2);
let student3 = new Student("Diệp", 3);
let student4 = new Student("Nhi", 4);
let student5 = new Student("Hương", 5);
let student6 = new Student("Tiên", 6);

allStudents.push(student1, student2, student3, student4, student5, student6);

let classroom1 = new Classroom("Lớp A3", 1);
let classroom2 = new Classroom("Lớp A2", 2);

classroom1.addStudent(1);
classroom1.addStudent(2);
classroom1.addStudent(3);

classroom2.addStudent(4);
classroom2.addStudent(5);
classroom2.addStudent(6);

classroom1.showStudents();
classroom2.showStudents();

let input = Number(window.prompt("NHập id muốn xóa"))
// classRoom1.removeStudents();

//sửa
let idedit = Number(window.prompt("nhập vào id muốn sửa"))
