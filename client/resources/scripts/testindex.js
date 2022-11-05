/*const baseUrl = "https://bigalstaxiserviceapi.herokuapp.com/api/driver";
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
}*/