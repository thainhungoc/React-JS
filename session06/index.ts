let a :number = 10;
let string:string ="Như Ngọc";
let b:boolean = true;
let any:any = false;
let empty:null = null;
let undef:undefined = undefined;

const showInfo =(info : string): void=>{
    console.log(info);
}

// tinh tong 2 so
const sum=(a:any, b:boolean) : string =>{
    return a+b;
}


let numberOrString : number|string = "NP";
//c1
let arr:number[] =[1,2,3,4,5]

//c2
let arr2 :Array<number>