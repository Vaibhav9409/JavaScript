const student1 = {
    name: "Vaibhav",
    age: 27,
  };
  
  const student2 = student1;
  
  student2.name = "Darshan";
  
  console.log(student2);
  console.log(student1);
  
  const student3 = Object.assign({}, student1);
  console.log(student3);
  student3.name = "Shailesh";
  console.log(student3);
  console.log(student1);