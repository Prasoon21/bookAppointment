async function addUsers(event){
    try{    
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const user = {
            name,
            email,
            phone
        };


        const res = await axios.post("http://localhost:8000/user", user)
            
        console.log(res);
        showUserOnScreen(res.data);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
    } catch(error){
        document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong</h4>';
        console.log(error);
    }
}

    window.addEventListener("DOMContentLoaded", async () => {

        try{
            const res = await axios.get("http://localhost:8000/user")
            
            console.log(res.data);


            for(i=0;i<res.data.length;i++)
            {
                showUserOnScreen(res.data[i])
                console.log(res.data[i]);
            }
        } catch (err) {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
        }
    })
        

    function showUserOnScreen(user){

        let parentNode = document.getElementById('dataItems');

        const childNode = `<li id=${user.id}>${user.name}-${user.email}-${user.phone}
                        <button onclick=deleteUser('${user.id}')>Delete</button>
                        <button onclick=editUserDetail('${user.email}','${user.name}','${user.phone}','${user.id}')>Edit</button>`
        
        parentNode.innerHTML = parentNode.innerHTML + childNode;

    }



    async function deleteUser(userid)
    {
        try{
            await axios.delete(`http://localhost:8000/user/${userid}`);
            removeFromScreen(userid);
        } catch(err) {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
            console.log(err);
        }

    }

    function removeFromScreen(id){
        let parent = document.getElementById('dataItems');
        const childNodeDeleted = document.getElementById(id);

        parent.removeChild(childNodeDeleted);
    }