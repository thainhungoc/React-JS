const arr = [
    { id: 1, number: 25 },
    { id: 2, number: 35 },
    { id: 3, number: 45 },
  ];
  
  const newArr = arr.map(classItem => {
    let newNumber = classItem.number;
    
    if (newNumber < 30) {
      newNumber += 10;
    } else if (newNumber > 40) {
      newNumber -= 10;
    }
  
    return { ...classItem, number: newNumber };
  });
  
  console.log(newArr);
  