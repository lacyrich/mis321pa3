/*function displayDriversTableAllData() {
    //create header row
    let driversTable = document.getElementById("driversTable");
  
    let thead = document.createElement("THEAD");
    driversTable.appendChild(thead);
  
    let tr = document.createElement("TR");
    thead.appendChild(tr);
  
    let th1 = document.createElement("TH");
    th1.appendChild(document.createTextNode("ID"));
    tr.appendChild(th1);
  
    let th2 = document.createElement("TH");
    th2.appendChild(document.createTextNode("Driver"));
    tr.appendChild(th2);
  
    let th3 = document.createElement("TH");
    th3.appendChild(document.createTextNode("Rating"));
    tr.appendChild(th3);
  
    let th4 = document.createElement("TH");
    th4.appendChild(document.createTextNode("DateHired"));
    tr.appendChild(th4);
  
    let th5 = document.createElement("TH");
    th5.appendChild(document.createTextNode("Deleted"));
    tr.appendChild(th5);
  
    let tbody = document.createElement("TBODY");
    driversTable.appendChild(tbody);
  
    //add data rows
    masterDrivers.forEach((driver) => {
      let tr = document.createElement("TR");
      tbody.appendChild(tr);
  
      let td1 = document.createElement("TD");
      td1.appendChild(document.createTextNode(`${driver.id}`));
      tr.appendChild(td1);
  
      let td2 = document.createElement("TD");
      td2.appendChild(document.createTextNode(`${driver.driverName}`));
      tr.appendChild(td2);
  
      let td3 = document.createElement("TD");
      td3.appendChild(document.createTextNode(`${driver.rating}`));
      tr.appendChild(td3);
  
      let td4 = document.createElement("TD");
      td4.appendChild(document.createTextNode(`${driver.dateHired}`));
      tr.appendChild(td4);
  
      let td5 = document.createElement("TD");
      td5.appendChild(document.createTextNode(`${driver.deleted}`));
      tr.appendChild(td5);
  
      
    });
    $(document).ready(function () {
      $("#driversTable").DataTable();
    });
  }
  
  function displayDriversTable() {
    //create header row
    let driversTable = document.getElementById("driversTable");
  
    let thead = document.createElement("THEAD");
    driversTable.appendChild(thead);
  
    let tr = document.createElement("TR");
    thead.appendChild(tr);
  
    let th1 = document.createElement("TH");
    th1.appendChild(document.createTextNode("Driver"));
    tr.appendChild(th1);
  
    let th2 = document.createElement("TH");
    th2.appendChild(document.createTextNode("Rating"));
    tr.appendChild(th2);
  
    let tbody = document.createElement("TBODY");
    driversTable.appendChild(tbody);
  
    //add data rows
    masterDrivers.forEach((driver) => {
      let tr = document.createElement("TR");
      tbody.appendChild(tr);
  
      let td1 = document.createElement("TD");
      td1.appendChild(document.createTextNode(`${driver.driverName}`));
      tr.appendChild(td1);
  
      let td2 = document.createElement("TD");
      td2.appendChild(document.createTextNode(`${driver.rating}`));
      tr.appendChild(td2);
    });
    $(document).ready(function () {
      $("#driversTable").DataTable();
    });
  }
  */