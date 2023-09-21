var form = document.getElementById('my-form');

form.addEventListener('submit', addDetails);


// add details of user
function addDetails(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    const myObj = {
        name: name,
        email: email,
        phone: phone
    };

    localStorage.setItem(myObj.email,JSON.stringify(myObj));

    showUserOnScreen(myObj);
    form.reset();
}

function showUserOnScreen(myObj){
    var dataItems = document.getElementById('dataItems');
    var li = document.createElement('li');
    dataItems.appendChild(li);

    li.appendChild(document.createTextNode(myObj.name));
    li.appendChild(document.createTextNode("-" + myObj.email));
    li.appendChild(document.createTextNode("-" + myObj.phone));

    const deletebtn = document.createElement('input');
    deletebtn.type = "button";
    deletebtn.value = "Delete";
    deletebtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        dataItems.removeChild(li);
    }
    li.appendChild(deletebtn);
    dataItems.appendChild(li);


    const editbtn = document.createElement('input');
    editbtn.type = "button";
    editbtn.value = "Edit";
    editbtn.onclick = () => {
        localStorage.removeItem(myObj.email);
        dataItems.removeChild(li);
        document.getElementById('name').value = myObj.name;
        document.getElementById('email').value = myObj.email;
        document.getElementById('phone').value = myObj.phone;
    }
    li.appendChild(deletebtn);
    li.appendChild(editbtn);
    dataItems.appendChild(li);

    

    

    
}

    
