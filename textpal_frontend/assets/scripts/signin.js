const LOGIN = document.querySelector("#login")
const REGISTER = document.querySelector("#register")
const USERNAME = document.querySelector("#username")
const USERURL =  "http://localhost:3000/users"

function getUsers(){
    return fetch(USERURL)
    .then(userData => userData.json())
}

function loginhandler(){
    getUsers()
    .then(userArray => userArray.find(user => user.username === USERNAME.value))
    .then(user => login(user))
}
function login(user){
    if (user){
        localStorage.setItem("username", USERNAME.value)
        alert("Logged in")
    } else {
        alert("Not logged in")
    }
}
LOGIN.addEventListener("click", e => {
    loginhandler()
})

REGISTER.addEventListener("click", e => {
    fetch(`${USERURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify({username: USERNAME.value}),
    }).then(response => response.json()).
    then(output => registerMessage(output))
})

function registerMessage(output){
    if (output["error"]){
        alert("This user already exists, please choose another username")
    } else {
        alert("Successfully created user, please login to continue")
    }
}
