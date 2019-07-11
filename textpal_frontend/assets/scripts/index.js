const baseUrl = 'http://localhost:3000';
const wrapper = document.querySelector('.page_wrapper');

function renderTemplate(id) {
  wrapper.textContent = '';
  let template = document.querySelector(id);
  let content = template.content;
  wrapper.appendChild(content);
}

function logout() {
  delete localStorage['username'];
  delete localStorage['id'];
  renderIndexPage();
}

function welcome() {
  if (localStorage['username']) {
    alert('Welcome to the world of Text Pal');
    renderIndexPage();
  } else {
    alert('You are not logged in');
    renderTemplate('#sign-in');
  }
}

function renderIndexPage() {
  welcome();
  wrapper.textContent = '';
  fetch(`${baseUrl}/projects`)
  .then(res => res.json())
  .then(projects => {
    projects.forEach(project => renderCards(project));
  });
}

function showProject(svg, project) {
  svg.addEventListener('click', e => {
    localStorage.setItem('project', project.id);
    window.location.href = '/textpal_frontend/show.html';
  });
}

function renderCards(project) {
  const card = document.createElement('div');

  const author = document.createElement('h2');
  author.innerText = project.user.username;

  const svg = document.createElement('div');
  showProject(svg, project);
  svg.innerHTML = project.svg;

  const likeCount = document.createElement('h5');
  likeCount.innerText = `${project.likes.length} Likes`;

  const commentCount = document.createElement('h5');
  commentCount.innerText = `${project.comments.length} Comments`;

  const likeButton = document.createElement('button');
  if (likeExist(project)) {
    likeButton.innerText = 'Unlike';
  } else {
    likeButton.innerText = 'Like';
  }

  handleLikeFunctionality(likeButton, project, likeCount);

  card.classList.add('card');

  card.append(svg, author, likeCount, commentCount, likeButton);

  wrapper.appendChild(card);
}s;

function handleLikeFunctionality(likeButton, project, likeCount) {
  likeButton.addEventListener('click', e => {
    fetchProject(project).then(updatedProject => checkLike(likeButton, updatedProject, likeCount));
  });
}

function fetchProject(project) {
  return fetch(`${baseUrl}/projects/${project.id}`)
  .then(res => res.json());
}

function checkLike(likeButton, project, likeCount) {
  if (!likeExist(project)) {
    likeProject(project);
    likeCount.innerText = `${project.likes.length + 1} Likes`;
    likeButton.innerText = 'Unlike';
  } else {
    unlikeProject(project);
    likeCount.innerText = `${project.likes.length - 1} Likes`;
    likeButton.innerText = 'Like';
  }
}

function likeProject(project) {
  likeData = { user_id: localStorage['id'], project_id: project.id };
  return fetch(`${baseUrl}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeData),
  });
}

function unlikeProject(project) {
  likeData = project.likes.find(like => like.user_id == localStorage['id']);
  return fetch(`${baseUrl}/likes/${likeData.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function likeExist(project) {
  if (project.likes.find(like => like.user_id == localStorage['id'])) {
    return true;
  } else {
    return false;
  }
}
