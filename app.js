//Init new  object of class Github

const github = new Github;

//Init new object of class UI
const ui = new UI;

//recive the input and search
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{

    const userText = searchUser.value;

    if(userText!=='')
    {
        // make http request
        github.getUser(userText)
        .then((data) => {
            if(data.profile.message === 'Not Found'){
                // prompt a message that user not found

            } else{
                //show profile
                ui.showProfile(data.profile);
            }
            

        })

        document.getElementById('profile').innerHTML=`<h4>the value is ${userText}</h4>`; 
    }else {

    }

    

});