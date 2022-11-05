/*let app = document.getElementById("app");

function handleOnLoad() {
  createTable();
  createForm();
  createHolidayTable();
}

function createHolidayTable() {
  const url = "https://date.nager.at/api/v2/publicholidays/2022/US";
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      //display holiday table
      displayHolidayTable(json);
    });
}

function displayHolidayTable(holidayData) {
  //create table
  let table = document.createElement("TABLE");
  table.border = "1";
  table.id = "holidayTable";
  let tableBody = document.createElement("TBODY");
  tableBody.id = "holidayTableBody";
  table.appendChild(tableBody);

  //create header row
  let tr = document.createElement("TR");
  tableBody.appendChild(tr);

  let th1 = document.createElement("TH");
  th1.width = 500;
  th1.appendChild(document.createTextNode("Holiday"));
  tr.appendChild(th1);

  let th2 = document.createElement("TH");
  th2.width = 200;
  th2.appendChild(document.createTextNode("Date"));
  tr.appendChild(th2);

  //add data rows
  holidayData.forEach((holiday) => {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);

    let td1 = document.createElement("TD");
    td1.width = 500;
    td1.appendChild(document.createTextNode(`${holiday.name}`));
    tr.appendChild(td1);

    let td2 = document.createElement("TD");
    td2.width = 100;
    td2.appendChild(document.createTextNode(`${holiday.date}`));
    tr.appendChild(td2);
  });

  app.appendChild(table);
}

function createForm() {
  let form = document.createElement("form");
  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Enter the to-do";
  textInput.id = "newToDo";
  form.appendChild(textInput);

  let submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let currentDate = new Date().toJSON().slice(0, 10);
    let toDo = {
      todo: e.target.elements.newToDo.value,
      date: currentDate,
    };
    addRow(toDo);
    e.target.elements.newToDo.value = "";
  });

  app.appendChild(form);
}

function addRow(toDo) {
  let tableBody = document.getElementById("toDoTableBody");
  let tr = document.createElement("TR");
  tableBody.appendChild(tr);

  let td = document.createElement("TD");
  td.width = 500;
  td.appendChild(document.createTextNode(`${toDo.todo}`));
  tr.appendChild(td);

  let td2 = document.createElement("TD");
  td2.width = 100;
  td2.appendChild(document.createTextNode(`${toDo.date}`));
  tr.appendChild(td2);

  toDos.push(toDo);
  localStorage.setItem("myToDos", JSON.stringify(toDos));
}

function createTable() {
  //create table
  let table = document.createElement("TABLE");
  table.border = "1";
  table.id = "toDoTable";
  let tableBody = document.createElement("TBODY");
  tableBody.id = "toDoTableBody";
  table.appendChild(tableBody);

  //create header row
  let tr = document.createElement("TR");
  tableBody.appendChild(tr);

  let th1 = document.createElement("TH");
  th1.width = 500;
  th1.appendChild(document.createTextNode("To Do"));
  tr.appendChild(th1);

  let th2 = document.createElement("TH");
  th2.width = 200;
  th2.appendChild(document.createTextNode("Date"));
  tr.appendChild(th2);

  //add data rows
  toDos.forEach((toDo) => {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);

    let td1 = document.createElement("TD");
    td1.width = 500;
    td1.appendChild(document.createTextNode(`${toDo.todo}`));
    tr.appendChild(td1);

    let td2 = document.createElement("TD");
    td2.width = 100;
    td2.appendChild(document.createTextNode(`${toDo.date}`));
    tr.appendChild(td2);
  });

  app.appendChild(table);
}




const baseUrl = "https://bigalstaxiserviceapi.herokuapp.com/api/driver";
var driverList = [];
var myDriver = {};

function populateList(){
 
    const allDriversApiUrl = baseUrl;
    fetch(allDriversApiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        driverList = json;
        let html = "<select class = \"listBox\" onchange = \"handleOnChange()\" name= \"selectListBox\" rating = \"list_box\" size=5 width=\"100%\">";
        json.forEach((driver)=>{
            html += "<option value = " + driver.name + ">" + driver.rating + "</option>";
        })
        html += "</select>";
        document.getElementById("listBox").innerHTML = html;
    }).catch(function(error){
        console.log(error);
    });
}

function putDriver(id){
    const putDriverApiUrl = baseUrl + "/"+id;
    const sendDriver = {
        id: id,
        driverName: document.getElementById("driverName").value,
        rating: parseInt(document.getElementById("rating").value),
        dateHired: document.getElementById("dateHired").value,
        deleted: parseInt(document.getElementById("deleted").value)
    }
    fetch(putDriverApiUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendDriver)
    })
    .then((response)=>{
        myDriver = sendDriver;
        populateList();
        populateForm();
    });
}

function postDriver(){
    const postDriverApiUrl = baseUrl;
    const sendDriver = {
        id: id,
        driverName: document.getElementById("driverName").value,
        rating: parseInt(document.getElementById("rating").value),
        dateHired: document.getElementById("dateHired").value,
        deleted: parseInt(document.getElementById("deleted").value)
    }
    fetch(postDriverApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendDriver)
    })
    .then((response)=>{
        myDriver = sendDriver;
        populateList();
        blankFields();
    });
}

function deleteDriver(){
    const deleteDriverApiUrl = baseUrl + "/" + myDriver.id;
    fetch(deleteDriverApiUrl, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        }
    })
    .then((response)=>{
        blankFields();
        populateList();
    });
}
*/