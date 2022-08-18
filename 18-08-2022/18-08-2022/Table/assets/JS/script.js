const users = [
    {
        firstname: "Almira",
        email: "almira99@gmail.com",
        mobile: 9512237887,
        city: "Bilimora"
    },
    {
        firstname: "parth",
        email: "parth1996@gmail.com",
        mobile: 7645476543,
        city: "chikhli"
    },
    {
        firstname: "jay",
        email: "jay.patel1999@gmail.com",
        mobile: 7645476543,
        city: "Surat"
    },
    {
        firstname: "Pooja",
        email: "pooja52465@gmail.com",
        mobile: 7645476543,
        city: "Bilimora"
    }
]

//model 
const model = document.querySelector('#model');
const modalWrapper = document.querySelector('.model-wrapper');
const closeBtn = document.querySelector('.close');

model.addEventListener('click',function(){
    modalWrapper.classList.add('active');
});


closeBtn.addEventListener('click',function(){
    modalWrapper.classList.remove('active');
});


getData(users);
//Get Data
function getData(data) {
    const userTableBody = document.querySelector("#user-table-body");
    //console.log(userTableBody);


    data.forEach((user) => {

        const tableRow = document.createElement('tr');
        // console.log(tableRow);


        for (const item in user) {
            const tablecol = document.createElement('td');
            // console.log(tablecol);
            const value = user[item];
            // console.log(value);
            tablecol.textContent = value;
            tableRow.appendChild(tablecol)
        }
        userTableBody.appendChild(tableRow);
    });

}


//Filter Data
// function searchFun(){
//     let filter = document.getElementById('search-field-input').value.toUpperCase();
//     //table inside
//     let myTable = document.getElementById('user-table');
//     //tr 
//     let tr = myTable.getElementsByTagName('tr');
//     let record = document.querySelector('.record');
//     console.log(record);

//     let found = false;
//                        // tr ki length
//     for (var i = 0; i < tr.length; i++){
//         //name find karva
//         let td = tr[i].getElementsByTagName('td')[0];

//         if(td){
//             let textvalue = td.textContent || td.innerHTML;

//             if(textvalue.toUpperCase().indexOf(filter) > -1){
//                   tr[i].style.display = "";
//                   found = true;
//             }else{
//                 tr[i].style.display = "none";
//             }
//         }
//         if (found){
//             record.style.display = "none";
//         }else{
//             record.style.display = "";
//         }
//     }

// }


function filterUser() {
    const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
    const searchTerm = document.querySelector('#search-field-input');
    const noRecordDiv = document.querySelector('.no-records');
    const userTable = document.querySelector('#user-table');
    userTableBody.textContent = ' ';
    let filteredData = [];
  
    if (searchTerm.value !== '') {
      filteredData = users.filter((item) => {
        return item.firstname.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    } else {
      filteredData = users;
    }
    // filteredData = searchTerm.value !== '' ? users.filter(item => item.firstname.toLowerCase().includes(searchTerm.value.toLowerCase())) : users;
  
  if (!filteredData.length) {
    userTableBody.classList.add('d-none');
    noRecordDiv.classList.remove('d-none');
  } else {
    userTableBody.classList.remove('d-none');
    noRecordDiv.classList.add('d-none');
  }
  getData(filteredData);
  console.log(filteredData);
}