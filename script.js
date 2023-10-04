var form = document.getElementById('my-form');

form.addEventListener('submit', addDetails);
fetchAndDisplayData();

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


    axios.post("https://crudcrud.com/api/1d706cb932f647a49fc597f7f7718121/appointmentData", myObj)
        .then((response) => {
            showUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong</h4>"
            console.log(err)
        })
    //localStorage.setItem(myObj.email,JSON.stringify(myObj));

    //showUserOnScreen(myObj);
    form.reset();
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/1d706cb932f647a49fc597f7f7718121/appointmentData")
        .then((response) => {
            console.log(response)

            for(var i=0;i<response.data.length;i++){
                showUserOnScreen(response.data[i]);
            }
        })
        .catch((error) => {
            console.log(error)
        })
})

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

