const APP_VIEW = document.getElementById('app-view');
const APP_NAVBAR = document.getElementById('app-navbar');
window.onload = function() {
    loadLanding();
   document.getElementById('toLogin').addEventListener('click', loadLogin);
   document.getElementById('toRegister').addEventListener('click', loadRegister);
   document.getElementById('toHome').addEventListener('click', loadHome);
   document.getElementById('toLogout').addEventListener('click', logout);
}

function loadLogin() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'login.view', true); // third parameter (default true) indicates we want to make this req async
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureLoginView();
        }
    }
}
function loadLanding() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'landing.view', true); // third parameter (default true) indicates we want to make this req async
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureLandingView();
        }
    }
}
function loadSuccess() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'success.view'); // third parameter (default true) indicates we want to make this req async
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureSuccess();
        }
    }
}
function loadFailure() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'failure.view', true); // third parameter (default true) indicates we want to make this req async
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
        }
    }
}
function loadRegister() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'register.view'); // third parameter of this method is optional (defaults to true)
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureRegisterView();
        }
    }
}
function loadAddUser() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'admin_add_user.view'); // third parameter of this method is optional (defaults to true)
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureAddUserView();
        }
    }
}

function loadSubmitReimb(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit_reimb.view'); // third parameter of this method is optional (defaults to true)
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureSubmitReimbView();
        }
    }
}

function loadViewEmpReimb(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_emp_reimb.view'); // third parameter of this method is optional (defaults to true)
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewEmpReimbView();
        }
    }
}

function loadViewAllUsers() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_users.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllUsersView();
        }
    }
}

function loadViewAllReimb() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbView();
        }
    }
}
function loadViewAllReimbByTypeFood() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByTypeFoodView();
        }
    }
}
function loadViewAllReimbByTypeLodging() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByTypeLodgingView();
        }
    }
}
function loadViewAllReimbByTypeTravel() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByTypeTravelView();
        }
    }
}
function loadViewAllReimbByTypeOther() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByTypeOtherView();
        }
    }
}
function loadViewAllReimbByStatusPending() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByStatusPendingView();
        }
    }
}
function loadViewAllReimbByStatusApproved() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByStatusApprovedView();
        }
    }
}
function loadViewAllReimbByStatusDenied() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'view_all_reimb.view'); 
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureViewAllReimbByStatusDeniedView();
        }
    }
}
function loadApproveDenyReimb(obj) {
    var index = obj.parentNode.parentNode.rowIndex; 
    let x = document.getElementById("view-all-reimb-table").rows[index].cells[0];
    let reimbID = x.innerHTML;
    localStorage.setItem('reimbID',reimbID);
    let amount = document.getElementById("view-all-reimb-table").rows[index].cells[1].innerHTML;
    let sb = document.getElementById("view-all-reimb-table").rows[index].cells[2].innerHTML;
    let description = document.getElementById("view-all-reimb-table").rows[index].cells[3].innerHTML;
    let type = document.getElementById("view-all-reimb-table").rows[index].cells[4].innerHTML;
    let authorId = document.getElementById("view-all-reimb-table").rows[index].cells[5].innerHTML;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'update_fin_reimb.view');
    let reim = {
        reimbID: reimbID
    }
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            document.getElementById('reimbID').innerHTML = localStorage.getItem('reimbID');
            document.getElementById('amount').innerHTML = amount;
            document.getElementById('description').innerHTML = description;
            document.getElementById('type').innerHTML = type;
            document.getElementById('authorId').innerHTML = authorId;
            document.getElementById('submitted').innerHTML = sb;
            document.getElementById('approve').addEventListener('click', approveReimb);
            document.getElementById('deny').addEventListener('click', denyReimb);
            document.getElementById('cancel').addEventListener('click', loadViewAllReimb);
        }
    }
}

function loadUpdateReimb(obj){
    var index = obj.parentNode.parentNode.rowIndex; 
    let x = document.getElementById("view-reimb-table").rows[index].cells[0];
    let reimbID = x.innerHTML;
    localStorage.setItem('reimbID',reimbID);
    let amount = document.getElementById("view-reimb-table").rows[index].cells[1].innerHTML.replace("$", "");
    let description = document.getElementById("view-reimb-table").rows[index].cells[3].innerHTML;
    let type = document.getElementById("view-reimb-table").rows[index].cells[4].innerHTML;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'update_emp_reimb.view');
    let reim = {
        reimbID: reimbID
    }
    xhr.send(reim);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            document.getElementById('reimbID').innerHTML = localStorage.getItem('reimbID');
            document.getElementById('amount').setAttribute('value',amount);
            document.getElementById('description').innerHTML = description;
            document.getElementById('type').setAttribute('value',type);
            document.getElementById('update').addEventListener('click', updateReimb);
            document.getElementById('cancel').addEventListener('click', loadViewEmpReimb);
        }
    }
}

function loadUpdateUser(obj){
    var index = obj.parentNode.parentNode.rowIndex; 
    let x = document.getElementById("view-users-table").rows[index].cells[0];
    let userID = x.innerHTML;
    localStorage.setItem('userID',userID);
    let un = document.getElementById("view-users-table").rows[index].cells[1].innerHTML;
    let fn = document.getElementById("view-users-table").rows[index].cells[2].innerHTML;
    let ln = document.getElementById("view-users-table").rows[index].cells[3].innerHTML;
    let email = document.getElementById("view-users-table").rows[index].cells[4].innerHTML;
    let role = document.getElementById("view-users-table").rows[index].cells[5].innerHTML;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'update_user.view');
    let user = {
        userID: userID
    }
    xhr.send(user);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            document.getElementById('reg-message').setAttribute('hidden', true);
            document.getElementById('uID').innerHTML = localStorage.getItem('userID');
            document.getElementById('fn').setAttribute('value', fn);
            document.getElementById('ln').setAttribute('value', ln);
            document.getElementById('email').setAttribute('value', email);
            document.getElementById('reg-username').setAttribute('value', un);
            document.getElementById('reg-button-container').addEventListener('mouseover', validateRegisterForm);
            document.getElementById('register').addEventListener('click', update_user);
            document.getElementById('cancel').addEventListener('click', loadViewAllUsers);
        }
    }
}

function loadDeleteUser(obj){
    var index = obj.parentNode.parentNode.rowIndex; 
    let x = document.getElementById("view-users-table").rows[index].cells[0];
    let userID = x.innerHTML;
    localStorage.setItem('userID',userID);
    let un = document.getElementById("view-users-table").rows[index].cells[1].innerHTML;
    let fn = document.getElementById("view-users-table").rows[index].cells[2].innerHTML;
    let ln = document.getElementById("view-users-table").rows[index].cells[3].innerHTML;
    let email = document.getElementById("view-users-table").rows[index].cells[4].innerHTML;
    let role = document.getElementById("view-users-table").rows[index].cells[5].innerHTML;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'delete_user.view');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            document.getElementById('uID').innerHTML = localStorage.getItem('userID');
            document.getElementById('fn').innerHTML = fn;
            document.getElementById('ln').innerHTML = ln;
            document.getElementById('email').innerHTML = email;
            document.getElementById('reg-username').innerHTML = un;
            document.getElementById('delete').addEventListener('click', delete_user);
            document.getElementById('cancel').addEventListener('click', loadViewAllUsers);
        }
    }
}

function loadHome() {
    if (!localStorage.getItem('authUser')) {
        loadLogin();
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'home.view');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_VIEW.innerHTML = xhr.responseText;
            configureHomeView();
        }
    }
}


//----------------CONFIGURE VIEWS--------------------

function configureSuccess(){
    const element = document.getElementById('success-element');
    element.classList.add('animate__animated', 'animate__zoomIn');
    element.addEventListener('animationend', () => {
        loadHome();
    });
}

function configureLandingView() {
    document.getElementById('login').addEventListener('click', loadLogin);
    document.getElementById('createAccount').addEventListener('click', loadRegister);

}

function configureLoginView() {
    document.getElementById('login-message').setAttribute('hidden', true);
    document.getElementById('login-button-container').addEventListener('mouseover', validateLoginForm);
    document.getElementById('login').addEventListener('click', login);
}

function configureHomeView() {
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    document.getElementById('loggedInUsername').innerText = authUser.username;
    var homeUser = JSON.parse(localStorage.getItem('authUser'));
    var role = homeUser.role;
    if(role == 3){
        //Employee
        document.getElementById('submit-reimb').addEventListener('click', loadSubmitReimb);
        document.getElementById('view-reimb').addEventListener('click', loadViewEmpReimb);
    }
    if(role == 2){
        //Fin Manager
        document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    }
    if(role == 1){
        //Admin
        document.getElementById('add').addEventListener('click', loadAddUser);
        document.getElementById('view-all-users').addEventListener('click', loadViewAllUsers);
    }
}

function configureRegisterView() {
    document.getElementById('reg-message').setAttribute('hidden', true);
    document.getElementById('reg-username').addEventListener('blur', isUsernameAvailable);
    document.getElementById('email').addEventListener('blur', isEmailAvailable);
    document.getElementById('register').setAttribute('disabled', true);
    document.getElementById('reg-button-container').addEventListener('mouseover', validateRegisterForm);
    document.getElementById('register').addEventListener('click', register);
}

function configureAddUserView() {
    document.getElementById('reg-message').setAttribute('hidden', true);
    document.getElementById('reg-username').addEventListener('blur', isUsernameAvailable);
    document.getElementById('email').addEventListener('blur', isEmailAvailable);
    document.getElementById('register').setAttribute('disabled', true);
    document.getElementById('reg-button-container').addEventListener('mouseover', validateRegisterForm);
    document.getElementById('register').addEventListener('click', addUser);
    document.getElementById('cancel').addEventListener('click', loadHome);
}

function configureSubmitReimbView() {
    document.getElementById('reg-message').setAttribute('hidden', true);
    document.getElementById('register').setAttribute('disabled', true);
    document.getElementById('reg-button-container').addEventListener('mouseover', validateReimbursementForm);
    document.getElementById('register').addEventListener('click', submitReimb);
    
}

function configureViewAllUsersView() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'users');
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var myTableDiv = document.getElementById("view-users-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].userId;
                row.insertCell(1).innerHTML = reimbs[i].username;
                row.insertCell(2).innerHTML = reimbs[i].firstname;
                row.insertCell(3).innerHTML = reimbs[i].lastname;
                row.insertCell(4).innerHTML = reimbs[i].email;
                if(reimbs[i].userRole == 1){
                    row.insertCell(5).innerHTML = 'Admin';
                    row.setAttribute('class', 'table-warning');
                } else if(reimbs[i].userRole == 2){
                    row.insertCell(5).innerHTML = 'Finance Manager';
                    row.setAttribute('class', 'table-success');
                }else if (reimbs[i].userRole == 3){
                    row.insertCell(5).innerHTML = 'Employee';
                }else if (reimbs[i].userRole == 4){
                    row.insertCell(5).innerHTML = 'Deleted';
                    row.setAttribute('class', 'table-danger');
                }
                row.insertCell(6).innerHTML= '<input type="button" class="btn btn-warning" value = "Update User" onClick="Javacsript:loadUpdateUser(this)">';
                row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Delete User" onClick="Javacsript:loadDeleteUser(this)">';
            }
        }
    }
}
function configureViewEmpReimbView() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements'); // third parameter of this method is optional (defaults to true)
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].resolverName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-primary" value = "Update" onClick="Javacsript:loadUpdateReimb(this)">';
                }
                if (reimbs[i].status.toUpperCase() == 'APPROVED') {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-secondary" value = "Update">';
                    row.setAttribute('class', 'table-success');
                }
                if (reimbs[i].status.toUpperCase() == 'DENIED') {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-secondary" value = "Update">';
                    row.setAttribute('class', 'table-danger');
                }
            }
            
        }else if(xhr.readyState == 4 && xhr.status == 404){
            var myTableDiv = document.getElementById("view-reimb-table");
            myTableDiv.innerHTML = '<h2>Sorry it looks like you dont have any Reimbursements...<h2>';
        }
    }
}
function configureViewAllReimbView(){
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function  configureViewAllReimbByTypeFoodView(){
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?type=3'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML=  '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function  configureViewAllReimbByTypeLodgingView(){
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?type=1'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function  configureViewAllReimbByTypeTravelView(){
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?type=2'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function  configureViewAllReimbByTypeOtherView(){
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?type=4'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function configureViewAllReimbByStatusPendingView() {
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?status=1'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function configureViewAllReimbByStatusApprovedView() {
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?status=2'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
function configureViewAllReimbByStatusDeniedView() {
    document.getElementById('get-by-type-food').addEventListener('click', loadViewAllReimbByTypeFood);
    document.getElementById('get-by-type-lodging').addEventListener('click', loadViewAllReimbByTypeLodging);
    document.getElementById('get-by-type-travel').addEventListener('click', loadViewAllReimbByTypeTravel);
    document.getElementById('get-by-type-other').addEventListener('click', loadViewAllReimbByTypeOther);
    document.getElementById('get-by-status-pending').addEventListener('click', loadViewAllReimbByStatusPending);
    document.getElementById('get-by-status-approved').addEventListener('click', loadViewAllReimbByStatusApproved);
    document.getElementById('get-by-status-denied').addEventListener('click', loadViewAllReimbByStatusDenied);
    document.getElementById('view-all-reimb').addEventListener('click', loadViewAllReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'reimbursements?status=3'); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // APP_VIEW.innerHTML = xhr.responseText;
            var myTableDiv = document.getElementById("view-all-reimb-table");
            const reimbs = JSON.parse(xhr.responseText);
            for (var i = 0; i < reimbs.length; i++){
                var rowCount = myTableDiv.rows.length;
                var row = myTableDiv.insertRow(rowCount);
                row.insertCell(0).innerHTML = reimbs[i].id;
                row.insertCell(1).innerHTML = '$'+reimbs[i].amount;
                row.insertCell(2).innerHTML = reimbs[i].submitted;
                row.insertCell(3).innerHTML = reimbs[i].description;
                row.insertCell(4).innerHTML = reimbs[i].type;
                row.insertCell(5).innerHTML = reimbs[i].authorName;
                row.insertCell(6).innerHTML = reimbs[i].status;
                if (reimbs[i].status.toUpperCase() == 'PENDING'){
                    row.insertCell(7).innerHTML=  '<input type="button" class="btn btn-danger" value = "Approve/Deny" onClick="Javacsript:loadApproveDenyReimb(this)">';
                }else {
                    row.insertCell(7).innerHTML= '<input type="button" class="btn btn-disabled" value = "Completed">';
                }
            }
            
        }
    }
}
//------------------OPERATIONS-----------------------

function updateReimb() {
    let rid = document.getElementById('reimbID').innerHTML;
    let tp = document.getElementById('type').value;
    let ds = document.getElementById('description').value;
    let am = document.getElementById('amount').value;
    let thisReimb = {
        id: rid,
        reimbursementType: tp,
        description: ds,
        amount: am
    }
    let reimbJSON = JSON.stringify(thisReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'reimbursements');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(reimbJSON);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 201){
            loadSuccess();
            // loadHome();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            // loadFailure();
            let err = JSON.parse(xhr.responseText);
        }
    }
}



function approveReimb() {
    let rid = document.getElementById('reimbID').innerHTML;
    let status = 2;
    let xhr = new XMLHttpRequest();
    let re = {
        id: rid,
        status: status
    }
    let reJSON = JSON.stringify(re);
    xhr.open('PUT', 'reimbursements');
    xhr.send(reJSON);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 201){
            loadSuccess();
            
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            // loadFailure();
            let err = JSON.parse(xhr.responseText);
        }
    }
}

function denyReimb(){
    let rid = document.getElementById('reimbID').innerHTML;
    let status = 3;
    let xhr = new XMLHttpRequest();
    let re = {
        id: rid,
        status: status
    }
    let reJSON = JSON.stringify(re);
    xhr.open('PUT', 'reimbursements');
    xhr.send(reJSON);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 201){
            loadSuccess();
            // loadHome();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            // loadFailure();
            let err = JSON.parse(xhr.responseText);
        }
    }
}


function submitReimb(){
    let tp = document.getElementById('type').value;
    let ds = document.getElementById('description').value;
    let am = document.getElementById('amount').value;
    
    let thisReimb = {
        reimbursementType: tp,
        description: ds,
        amount: am,
        
    }
    let reimbJSON = JSON.stringify(thisReimb);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'reimbursements');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(reimbJSON);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 201){
            loadSuccess();
            // loadHome();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            // loadFailure();
            let err = JSON.parse(xhr.responseText);
        }
    }
}

function login() {
    let un = document.getElementById('login-username').value;
    let pw = document.getElementById('login-password').value;
    let credentials = {
        username: un,
        password: pw
    }
    let credentialsJSON = JSON.stringify(credentials);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'auth');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(credentialsJSON);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('login-message').setAttribute('hidden', true);
            localStorage.setItem('authUser', xhr.responseText);
            var homeUser = JSON.parse(localStorage.getItem('authUser'));
            var role = homeUser.role;
            localStorage.setItem('role', role);
            if(role == 4){
                document.getElementById('login-message').removeAttribute('hidden');
                document.getElementById('login-message').innerText = 'Sorry your account has been deleted. Please BEG for Forgiveness from an Aniministrator.';
                localStorage.removeItem('authUser');
                localStorage.removeItem('role');
                return;
            } 
            loadHome();
        } else if (xhr.readyState == 4 && xhr.status == 401) {
            document.getElementById('login-message').removeAttribute('hidden');
            let err = JSON.parse(xhr.responseText);
            document.getElementById('login-message').innerText = err.message;
        }
    }
}

function delete_user() {
    let uID = localStorage.getItem('userID');
    let uIDJSON = 'users?id='+uID;
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', uIDJSON);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            loadSuccess();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            document.getElementById('reg-message').removeAttribute('hidden');
            let err = JSON.parse(xhr.responseText);
            document.getElementById('reg-message').innerText = err.message;
        }
    }
}

function update_user() {
    let uID = localStorage.getItem('userID');
    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let email = document.getElementById('email').value;
    let un = document.getElementById('reg-username').value;
    let pw = document.getElementById('reg-password').value;
    let ro = document.getElementById('role').value;
    var roleId;
    if (ro == 'FINANCE_MANAGER'){
        roleId = 2;
    }
    if (ro == 'ADMIN'){
        roleId = 1;
    }
    if (ro == 'EMPLOYEE'){
        roleId = 3;
    }
    let newUser = {
        userId: uID,
        firstname: fn,
        lastname: ln,
        email: email,
        username: un,
        password: pw,
        userRole: roleId
    }
    let newUserJSON = JSON.stringify(newUser);
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'users');
    xhr.send(newUserJSON);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            loadSuccess();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            document.getElementById('reg-message').removeAttribute('hidden');
            let err = JSON.parse(xhr.responseText);
            document.getElementById('reg-message').innerText = err.message;
        }
    }
}

function addUser() {
    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let email = document.getElementById('email').value;
    let un = document.getElementById('reg-username').value;
    let pw = document.getElementById('reg-password').value;
    let ro = document.getElementById('role').value;
    var roleId;
    if (ro == 'FINANCE_MANAGER'){
        roleId = 2;
    }
    if (ro == 'ADMIN'){
        roleId = 1;
    }
    if (ro == 'EMPLOYEE'){
        roleId = 3;
    }
    let newUser = {
        firstname: fn,
        lastname: ln,
        email: email,
        username: un,
        password: pw,
        userRole: roleId
    }
    let newUserJSON = JSON.stringify(newUser);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'users');
    xhr.send(newUserJSON);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            loadSuccess();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            document.getElementById('reg-message').removeAttribute('hidden');
            let err = JSON.parse(xhr.responseText);
            document.getElementById('reg-message').innerText = err.message;
        }
    }
}

function register() {
    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let email = document.getElementById('email').value;
    let un = document.getElementById('reg-username').value;
    let pw = document.getElementById('reg-password').value;
    let newUser = {
        firstname: fn,
        lastname: ln,
        email: email,
        username: un,
        password: pw
    }
    let newUserJSON = JSON.stringify(newUser);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'users');
    xhr.send(newUserJSON);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            loadSuccess();
        } else if (xhr.readyState == 4 && xhr.status != 201) {
            document.getElementById('reg-message').removeAttribute('hidden');
            let err = JSON.parse(xhr.responseText);
            document.getElementById('reg-message').innerText = err.message;
        }
    }
}

function logout() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'auth');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 204) {
            localStorage.removeItem('authUser');
            loadLogin();
        }
    }
}


//---------------------FORM VALIDATION-------------------------

function isUsernameAvailable() {
    let username = document.getElementById('reg-username').value;
    if (!username) {
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'username.validate');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(username));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 204) {
            document.getElementById('reg-message').setAttribute('hidden', true);
        } else if (xhr.readyState == 4 && xhr.status == 409 ) {
            document.getElementById('reg-message').removeAttribute('hidden')
            document.getElementById('reg-message').innerText = 'The provided username is already taken!';
            document.getElementById('register').setAttribute('disabled', true);
        }
    }

}

function isEmailAvailable() {
    let email = document.getElementById('email').value;
    if (!email) {
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'email.validate');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(email));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 204) {
            document.getElementById('reg-message').setAttribute('hidden', true);
        } else if (xhr.readyState == 4 && xhr.status == 409) {
            document.getElementById('reg-message').removeAttribute('hidden');
            document.getElementById('reg-message').innerText = 'The provided email address is already taken!';
            document.getElementById('register').setAttribute('disabled', true);
        }
    }
}


function validateLoginForm() {
    let msg = document.getElementById('login-message').innerText;
    if (msg == 'User authentication failed!') {
        return;
    }
    let un = document.getElementById('login-username').value;
    let pw = document.getElementById('login-password').value;
    if (!un || !pw) {
        document.getElementById('login-message').removeAttribute('hidden');
        document.getElementById('login-message').innerText = 'You must provided values for all fields in the form!';
        document.getElementById('login').setAttribute('disabled', true);
    } else {
        document.getElementById('login').removeAttribute('disabled');
        document.getElementById('login-message').setAttribute('hidden', true);
    }
}

function validateRegisterForm() {
    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let email = document.getElementById('email').value;
    let un = document.getElementById('reg-username').value;
    let pw = document.getElementById('reg-password').value;
    if (!fn || !ln || !email || !un || !pw) {
        document.getElementById('reg-message').removeAttribute('hidden');
        document.getElementById('reg-message').innerText = 'You must provided values for all fields in the form!'
        document.getElementById('register').setAttribute('disabled', true);
    } else {
        document.getElementById('register').removeAttribute('disabled');
        document.getElementById('reg-message').setAttribute('hidden', true);
    }
}
function validateReimbursementForm() {
    let am = document.getElementById('amount').value;
    let ds = document.getElementById('description').value;
    let ty = document.getElementById('type').value;
    
    if (!am || !ds || !ty ) {
        document.getElementById('reg-message').removeAttribute('hidden');
        document.getElementById('reg-message').innerText = 'You must provided values for all fields in the form!'
        document.getElementById('register').setAttribute('disabled', true);
    } else {
        document.getElementById('register').removeAttribute('disabled');
        document.getElementById('reg-message').setAttribute('hidden', true);
    }
}