// JS Script for Reinventing the Wheel

// ------------------------------------------------------------------------
// defining the array to populate with form data:

let rows = []; 


// ------------------------------------------------------------------------
// function to display the array as a table:

let tableInfo = () => {
  let table = document.getElementById("myTable");
  table.innerHTML = `<tr><th> Name </th><th> Display </th><th> Delete </th></tr>`;

  for (var i = 0; i < rows.length; i++) {
    if (rows[i].display == true){
      rows[i].display = "checked"
    };
    table.innerHTML += `<tr><td> ${rows[i].name} </td><td> <input type="checkbox" id = "checkbox${i}" onchange = "updateDisplay(${i})" ${rows[i].display}> </td><td> <button onclick="removeName(${i})">X</button> </td> </tr>`;
  }
};
  

// ------------------------------------------------------------------------
// function to add form data to the array:

let submit = () => {
  let newName = document.getElementById("Name").value;

  if  (newName == ""){
      window.alert("Add a name, dumbass!")}
  else {
    rows.push ({name: newName, display: true});
    tableInfo(rows);
    console.log(rows)
  };
  updateLocal (rows);
};


// ------------------------------------------------------------------------
// function to reset the UI once data is submitted:
let clearFields = () => {
  document.getElementById("Name").value = "";
};


// ------------------------------------------------------------------------
// function to update display key from object within array, dependant on checkbox being selected or not:

let updateDisplay = rowID => {
  let inputElement = document.getElementById("checkbox" + rowID)
  rows[rowID].display = inputElement.checked;
  console.log("A checkbox has been updated!", rows);
  updateLocal (rows);
};


// ------------------------------------------------------------------------
// function to delete objects from the array:
let removeName = rowID => {
  rows.splice(rowID, 1);
  tableInfo(rows);
  console.log("A name has been deleted!", rows);
  updateLocal (rows)
}


// ------------------------------------------------------------------------
// function to add array to local storage:
function updateLocal (rows) {
  localStorage.setItem("wheelData", JSON.stringify(rows));
};


// ------------------------------------------------------------------------
// function to retrive data from local storage on page load if present:
window.onload = () => {
  let IsaacsWheel = JSON.parse(localStorage.getItem("wheelData"));

  if(IsaacsWheel === null) {
    rows = [];
  }
  else {
    rows = IsaacsWheel;
    tableInfo();
  }
};