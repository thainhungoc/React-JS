const students = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" }
];
students.forEach(student => {
    console.log(`Xin chào sinh viên ${student.name} có ID là ${student.id}`);
});
