const Check = <T>(c: T) => {
    return c;
  };
  
  const check = Check<boolean>(false);
  
  if (check) {
    console.log("chao");
  } else {
    console.log("chao qq");
  }