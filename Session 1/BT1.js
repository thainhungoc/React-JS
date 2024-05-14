let stu = [{
    id1: 1,
    name: "Nguyễn Văn A",
    age: 18,
},
{
    id1: 1,
    name: "Nguyễn Văn A",
    age: 18,
},
{
    id1: 1,
    name: "Nguyễn Văn A",
    age: 18,
},
{
    id1: 1,
    name: "Nguyễn Văn A",
    age: 18,
},
{
    id1: 1,
    name: "Nguyễn Văn A",
    age: 18,
},
{
    id1: 1,
    name: "Nguyễn Văn A",
    age: 18,
},
]
// cách 1
stu.forEach(element=> console.log(element.name))
// cách 2
let newStu = stu.map(element=> console.log(element.name                                      ))