window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
   });
   
   let createInnerHtml = () => {
    
     let headerHTML="<tr> <th> </th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
 
     let innerHTML = `${headerHTML}
    
 <tr><td>
     <img class="profile" src="../asset/profile-images/Ellipse -1.png">
     </td>
     <td> Monali Jumde </td>
     <td>Male</td>
     <td>
         <div class="dept-label">Engineer</div>
         <div class="dept-label">Other</div>
     </td>
     <td>750000</td>
     <td>1 Oct 2021</td>
     <td>
         <img alt="delete" src="../asset/icons/delete-black-18dp.svg">
         <img alt="edit" src="../asset/icons/create-black-18dp.svg">
     </td>
 </tr>`;
 document.querySelector("#display").innerHTML = innerHTML;
   }
   const getDeptHtml =(deptList) =>{
    let deptHtml= '';
    for(const dept of deptList){
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
   return deptHtml;
}



const createEmployeePayrollJSON = () => {
  let empPayrollDB = [

      {
          "_id": 1,
          "_name": "Sonu",
          "_gender": "male",
          "_department": [
              "Finance"
          ],
          "_salary": "300000",
          "_startDate": "1 Oct 2021",
          "_note": "Hello everyone",
          "_profilePic": "../asset/profile-images/Ellipse -2.png"
      },
      {
          "_id": 3,
          "_name": "Pranali",
          "_gender": "female",
          "_department": [
              "HR",
              "Sales"
          ],
          "_salary": "750000",
          "_startDate": "5 Oct 2020",
          "_note": "",
          "_profilePic": "../asset/profile-images/Ellipse -1.png",
          
      }

  ];
  return empPayrollDB;
}