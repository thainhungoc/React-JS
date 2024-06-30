console.log("react", React);
const domContainer = document.querySelector("#root")
//
const root = React.createRoot(domContainer);
// đẻ con và hiển thị con
//basic
// let P = React.createElement{
//     "p",
//     {
//         id:"children",
//         class:"con",
//         name:"child"
//     }
//     "Như Ngọc"
// },
let P =(
    <p id="hehe"> HOHO </p> 
);
   
root.render(P)