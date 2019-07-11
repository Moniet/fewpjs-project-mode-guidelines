const USERURL =  'http://localhost:3000/users';

function getUsers() {
  return fetch(USERURL)
  .then(userData => userData.json());
}

function loginhandler(userNameInput) {
  getUsers()
  .then(userArray => userArray.find(user => user.username === userNameInput.value))
  .then(user => login(user));
}

function login(user) {
  if (user) {
    localStorage.setItem('username', user['username']);
    localStorage.setItem('id', user['id']);
    renderIndexPage();
  } else {
    alert('User does not exist');
  }
}

function runSignIn() {
  const registerBtn = document.querySelector('#register');
  const userNameInput = document.querySelector('#username');

  document.querySelector('#login').addEventListener('click', e => {
      loginhandler(userNameInput);
    });

  registerBtn.addEventListener('click', e => {
      fetch(`${USERURL}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          body: JSON.stringify({ username: userNameInput.value }),
        }).then(response => response.json()).
      then(output => registerMessage(output));
    });
}

function registerMessage(output) {
  if (output['error']) {
    alert('This user already exists, please choose another username');
  } else {
    alert('Successfully created user, please login to continue');
  }
}
