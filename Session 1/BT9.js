function inArr(array1, array2, index){
    array1.splice(index, 0,...array2)
    console.log(array1)
    return array1
}
console.log()