console.log("Welcome to callback");

// const students=[{
//     name: 'ALmira',
//     subject: 'Fontend'
// },
// {
//     name: 'Pooja',
//     subject: 'UI'
// },
// {
//     name: 'Hemanshi',
//     subject: 'Web'
// }
// ]

// function enrollStudent(student){
//     students.push(student);
//     console.log('student enroll');
// }
// function getStudents(){
//     let str='';
//     students.forEach(function(student){
//         str +=`<li>${student.name}</li>`;
//     });
//     document.getElementById("student").innerHTML=str;
//     console.log('student fetch');
// }
// let newStudent = { name: "jigar", subject: "Frontend" };
// enrollStudent(newStudent);
// getStudents();


//callback
const students = [
    {
      name: "almira",
      subject: "javaScript",
    },
    {
      name: "pooja",
      subject: "html",
    },
  ];
  
  function enrollStudent(student,callback) {
    setTimeout(function () {
      students.push(student);
      console.log('student enrolled');
      callback();
    }, 3000);
  }
  
  function getStudents() {
    setTimeout(function () {
      let str = "";
      students.forEach(function (student) {
        str += `<li>${student.name}</li>`;
      });
  
      document.getElementById("student").innerHTML = str;
      console.log('student fetched');
    }, 1000);
  }
  let newStudent = { name: "jigar", subject: "Frontend" };
  enrollStudent(newStudent,getStudents);
  // getStudents();