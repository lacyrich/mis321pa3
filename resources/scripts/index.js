let masterDrivers = [];
const baseUrl = "https://bigalstaxiserviceapi.herokuapp.com/api/driver";
//const baseUrl = "https://localhost:5001/api/driver";

function getDrivers() {

  fetch(baseUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      masterDrivers = json;
      displayDriversTable(json);
      
    })
    .catch(function (error) {
      console.log(error);
    });
}
function handleOnLoad() {
  getDrivers();
}

function postDriver() {
  
  const name = document.getElementById("driverName").value;

  fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      driverName: name,
      rating: 0,
      dateHired: new Date().toISOString(),
      deleted: 0,
    }),
  }).then((response) => {
    setTimeout(() => {
      window.location.reload(true);

    
      getDrivers();
    }, 1000);
    console.log(response);
  });
}

async function putDriver() {
  let id = document.getElementById("id").value;
  const putDriverApiUrl = baseUrl + "/" + id;
  console.log(putDriverApiUrl);

  const driver = await fetch(putDriverApiUrl).then((r) => r.json());
  console.log(driver);
  const sendDriver = {
    id: driver.id,
    driverName: driver.driverName,
    rating: document.getElementById("rating").value,
    dateHired: driver.dateHired,
    deleted: driver.deleted,
  };
  console.log(sendDriver);
  fetch(baseUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendDriver),
  }).then((response) => {
    console.log(response);
    setTimeout(() => {
      window.location.reload(true);
    
      getDrivers();
    }, 1000);
  });
}

async function deleteDriver() {
  let id = document.getElementById("iddelete").value;
  const deleteDriverApiUrl = baseUrl + "/" + id;
  console.log(deleteDriverApiUrl);

  const driver = await fetch(deleteDriverApiUrl).then((r) => r.json());
  console.log(driver);
  const sendDriver = {
    id: driver.id,
    driverName: driver.driverName,
    rating: driver.rating,
    dateHired: driver.dateHired,
    deleted: 1,
  };
  console.log(sendDriver);
  fetch(baseUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendDriver),
  }).then((response) => {
    console.log(response);
    setTimeout(() => {
      window.location.reload(true);
    
      
    }, 1000);
    getDrivers();
  });
}

function handleOnLoad() {
  getDrivers();
}




function displayDriversTable() {
  //create header row
 
  let driversTable = document.getElementById("driversTable");
  driversTable.innerHTML = "";

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

  let tbody = document.createElement("TBODY");
  driversTable.appendChild(tbody);

  //add data rows
  masterDrivers.forEach((driver) => {
    if (driver.deleted != 1) {
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
    }
  });


 $(document).ready(function () {
    $("#driversTable").DataTable({
  
        retrieve: true,
        paging: true,
        "order": [[ 3, "desc" ]], 
        "columnDefs" : [{"targets":3, "type":"date-eu"}],
      
    });
  });
 
}
