$(document).ready(function () {
  $("#driversTable").DataTable();
});
let drivers = document.getElementById("drivers");
let taskCount = 0;
//truthy and the ternary operator condition ? true : false
/*let toDos = JSON.parse(localStorage.getItem("myToDos"))
  ? JSON.parse(localStorage.getItem("myToDos"))
  : [];
*/
function handleOnLoad() {
  getDrivers();
  //createDriversTable();
}

function getDrivers() {
  const url = "https://localhost:5001/api/driver";
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      let html = "<ul>";
      json.forEach((driver) => {
        html += "<li>" + driver.name + driver.rating + "</li>";
      });
      html += "</ul>";
      document.getElementById("drivers").innerHTML = html;
      console.log(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}
/*function createDriversTable() {
  const url = "https://localhost:5001/api/Driver";
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      displayDriversTable(json);
    });
}

function displayDriversTable(driverData) {
  //create table
  let table = document.createElement("TABLE");
  table.border = "1";
  table.id = "driversTable";
  table.class =
    "table table-border table-striped table-secondary table-hover text-lg-center text-black";
  let tableBody = document.createElement("TBODY");
  tableBody.id = "driversTableBody";
  table.appendChild(tableBody);

  //create header row
  let tr = document.createElement("TR");
  tableBody.appendChild(tr);

  let th1 = document.createElement("TH");
  th1.width = 500;
  th1.appendChild(document.createTextNode("Driver"));
  tr.appendChild(th1);

  let th2 = document.createElement("TH");
  th2.width = 200;
  th2.appendChild(document.createTextNode("Rating"));
  tr.appendChild(th2);

  //add data rows
  driverData.forEach((driver) => {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);

    let td1 = document.createElement("TD");
    td1.width = 500;
    td1.appendChild(document.createTextNode(`${driver.driverName}`));
    tr.appendChild(td1);

    let td2 = document.createElement("TD");
    td2.width = 100;
    td2.appendChild(document.createTextNode(`${driver.rating}`));
    tr.appendChild(td2);
  });

  app.appendChild(table);
}

/*function createForm() {
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
}*/
