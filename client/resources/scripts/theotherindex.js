
/*function handleOnLoad(){
    populateList();
}

function handleOnChange(){
    const selectedId = document.getElementById("selectListBox").value;
    driverList.forEach((driver)=>{
        if(driver.id == selectedId){
            myDriver = driver;
        }
    });

    populateForm();
}

function handleEditClick(){
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myDriver.id+")\">Save</button>"
    buttonHtml +="<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleNewClick(){
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml +="<button class=\"btn btn-warning btn-lg btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}


function handleDeleteClick(){
    deleteDriver();
}

function handleCancelSave(){
  populateForm();
  makeReadOnly();
  showButtons();  
}

function handleEditSave(){
    putDriver(myDriver.id);
    makeReadOnly();
    showButtons();
}

function handleNewSave(){
    postDriver();
    makeReadOnly();
    showButtons();
    blankFields();
}




function populateForm(){
    document.getElementById("driverName").value = myDriver.driverName;
    document.getElementById("driverRating").value = myDriver.rating;
}

function hideButtons(){
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";

}

function showButtons(){
    document.getElementById("newButton").style.display = "inline-block"; 
    document.getElementById("editButton").style.display = "inline-block"; 
    document.getElementById("deleteButton").style.display = "inline-block"; 
    document.getElementById("saveButton").style.display = "none";
}

function makeEditable(){
    document.getElementById("driverRating").readOnly=false;
}

function blankFields(){
    document.getElementById("driverName").value = "";
    document.getElementById("driverRating").value = "";
    document.getElementById("dateHired").value = "";
    document.getElementById("deleted").value = "";
}

function makeReadOnly(){
    document.getElementById("driverName").readOnly=true;
    document.getElementById("dateHired").readOnly=true;
    document.getElementById("deleted").readOnly=true;

}

*/