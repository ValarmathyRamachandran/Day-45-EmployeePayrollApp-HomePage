function validate() {
    var nameregex = ('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    var ctrl =  document.getElementById('name').value;
    if((ctrl.match(nameregex)) == null)
    {
        window.alert('Invalid Entry!!!! Please enter the name as First Letter in Capital and atleast 3 characters ');
    }
    return false;
}
window.addEventListener('DOMContentLoaded' , (event) => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;

    });
});
// UC - 6
 let employeePayrollList ;
 window.addEventListener('DOMContentLoaded' , (event) => {
     empPayrollList = getEmployeePayrollDataFromStorage();
     document.querySelector(".emp-count").textContent = empPayrollList.length();
     createInnerHtml();
     localStorage.removeItem('editEmp');
 });
 getEmployeePayrollDataFromStorage = () => {
     return localStorage.getItem('EmployeePayrollList') ? 
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : []; 

 }  
const save  = () => {   // UC -6

    try{
        localStorage.setItem("Name: ", document.getElementById('name').value);
        var profilepic = document.querySelector('input[name=profileImage]:checked').value;
        localStorage.setItem("Profile Image : ", profilepic);
        var gender = document.getElementById('gender').value;
        var gender_value;
        if (document.getElementById('maleGender').checked) {
            localStorage.setItem("Gender : ",document.getElementById('maleGender').value);
          } else {
          localStorage.setItem("Gender : ",document.getElementById('femaleGender').value);
        }
        localStorage.setItem("Salary: ", document.getElementById('salary').value);
        localStorage.setItem("Department :", document.querySelector('input[name=Dept]:checked').value);
        localStorage.setItem("Notes: ", document.getElementById('notes').value);
        localStorage.setItem("Start Date",document.getElementById('day').value 
        + document.getElementById('month').value +" " +
        document.getElementById('year').value);
    } catch(e) { 
    return;
    }
}

const createEmployeePayroll = () => {

const getSelectedValues = (propertyValue) => {let allItems = document.querySelectorAll(propertyValue);
let selItems = [];
allItems.forEach(item => { 
if(item.checked) selItems.push(item.value);
});
return selItems;
}
}

function createAndUpdateStorage(employeePayrollData){let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

if(employeePayrollList !== "undefined"){employeePayrollList.push(employeePayrollData)}
    else {employeePayrollList = [employeePayrollData]}
alert(employeePayrollList.toString());
localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const resetForm = () => {setValue('#name', '');
unsetSelectedValues('[name=profileImage]');
unsetSelectedValues('[name=gender]');
unsetSelectedValues('[name=Dept]');
setValue('#salary','');
setValue('#notes','');
setValue('#day',1);
setValue('#month','January');
setValue('#year','2020');

}

window.addEventListener('DOMContentLoaded' , (event) => {
    createInnerHtml();
});
// ---  UC - 4 -----    
// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
//                         "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    
//     const innerHtml = ` ${headerHtml}

//         <tr>
//             <td> <img class="profile" alt=""
//             src="../assets/profile-images/Ellipse -1.png" /></td>
//             <td>Valarmathy Ramachandran</td>
//             <td>Female</td>
//             <td><div class="dept-label">Engineer</div><div class="dept-label">Others</div></td>
//                 <td>3000000</td>
//                 <td> 8 Dec 2021 </td>
//                 <td>
//                     <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
//                     <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
//                 </td>
//         </tr>
//         <tr>
//             <td> <img class="profile" alt=""
//             src="../assets/profile-images/Ellipse -2.png" /></td>
//             <td>Balaji </td>
//             <td>Male</td>
//             <td><div class="dept-label">Engineer</div><div class="dept-label">Others</div></td>
//                 <td>5000000</td>
//                 <td> 27 Nov 2021 </td>
//                 <td>
//                     <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
//                     <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
//                 </td>
//         </tr>
//         <tr>
//             <td> <img class="profile" alt=""
//             src="../assets/profile-images/Ellipse -5.png" /></td>
//             <td>Jayanth </td>
//             <td>Male</td>
//             <td><div class="dept-label">Hr</div><div class="dept-label">Sales</div></td>
//                 <td>3500000</td>
//                 <td> 30 Nov 2021 </td>
//                 <td>
//                     <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
//                     <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
//                 </td>
//         </tr>
//         <tr>
//             <td> <img class="profile" alt=""
//             src="../assets/profile-images/Ellipse -3.png" /></td>
//             <td>Karthick </td>
//             <td>Male</td>
//             <td><div class="dept-label">Engineer</div><div class="dept-label">Others</div></td>
//                 <td>5000000</td>
//                 <td> 15 Mar 2021 </td>
//                 <td>
//                     <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
//                     <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
//                 </td>
//         </tr>
//     `;
//         document.querySelector('#table-display').innerHTML = innerHtml;
// }


const createInnerHtml = () => {   //   UC - 5
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList  = creteEmployeePayrollJSON();
    for(const employeePayrollData of employeePayrollList) {
         innerHtml = ` ${innerHtml}

        <tr>
            <td> <img class="profile" alt=""
            src="${employeePayrollData.profileImage}"></td>
            <td>${employeePayrollData.name}</td>
            <td>${employeePayrollData.gender}</td>
            <td><div class="dept-label">${employeePayrollData.Dept[0]}</div>
                <div class="dept-label">${employeePayrollData.Dept[1]}</div>
            </td>
                <td>${employeePayrollData.salary}</td>
                <td> ${employeePayrollData.Day} ${employeePayrollData.Month}  ${employeePayrollData.Year} </td>
                <td>
                    <img id="${employeePayrollData.id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${employeePayrollData.id}"  alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const creteEmployeePayrollJSON = ()  => {
    let employeePayrollListLocal = [ 
    {
        "name":"Jayanth",
        "profileImage":"../assets/profile-images/Ellipse -5.png",
        "gender":"Male",
        "Dept":[
            "Hr",
            "Others"
        ],
        "salary":"395400",
        "Day":"30","Month":"Nov","Year":"2021",
        "id": new Date().getTime(),
        "Notes":"This is Jayanth",
        
    },

    {  
        "name":"Karthick",
        "profileImage":"../assets/profile-images/Ellipse -9.png",
        "gender":"Male",
        "Dept":[
            "Finance",
            "Others",
        ],

        "salary":"500000",
        "Day":"15","Month":"March","Year":"2021",
        "id": new Date().getTime() + 1,
        "Notes":"This is Karthick from Chennai",
        
    },

    {   
        "name":"Valarmathy Ramachandran",
        "profileImage":"../assets/profile-images/Ellipse -1.png",
        "gender":"Female",
        "Dept":[
            "Engineer",
        ],
        "salary":"300000",
        "Day":"30","Month":"April","Year":"2021",
        "id": new Date().getTime() + 2,
        "Notes":"Hello, This is Valarmathy. "
    },

    {   
        "name":"Balaji",
        "profileImage":"../assets/profile-images/Ellipse -2.png",
        "gender":"Male",
        "Dept":[
            "Engineer",
            "Others",
        ],
        "salary":"500000",
        "Day":"27","Month":"Nov","Year":"2021",
        "id": new Date().getTime() + 3,
        "Notes":"Hey Guys, I am Balaji from Chennai. Basically I love to travel a lot. "
    }
    ];
    return employeePayrollListLocal;
}


    