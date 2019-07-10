const baseUrl = 'http://localhost:3000';
const wrapper = document.querySelector('.wrapper');

fetch(`${baseUrl}/projects`)
  .then(res => res.json())
  .then(projects => {
    projects.forEach(project => renderCards(project));
  });

function renderCards(project) {
  const card = document.createElement('div');

  const author = document.createElement("h2");
  author.innerText = project.user.username;

  const svgWrapper = document.createElement('div');
  const infoWrapper = document.createElement('div');

  const likeCount = document.createElement("h5");
  likeCount.innerText = `${project.likes.length} Likes`

  const likeButton = document.createElement("button");
  if (likeExist(project)){
    likeButton.innerText = "Unlike";
  } else {
    likeButton.innerText = "Like";
  }
  
  handleLikeFunctionality(likeButton, project, likeCount)
  
  
  const commentButton = document.createElement("button");
  commentButton.innerText = "Comment";
  handleCommentFunctionality(commentButton, project,card)


  card.classList.add('card');
  svgWrapper.classList.add('svg__wrapper');
  infoWrapper.classList.add('info__wrapper');

  card.append(svgWrapper, infoWrapper, author, likeCount, likeButton, commentButton);

  wrapper.appendChild(card);
}

function handleLikeFunctionality(likeButton, project, likeCount){
  likeButton.addEventListener("click", e => {
    fetchProject(project).then(updatedProject => checkLike(likeButton, updatedProject, likeCount))
  })
}

function fetchProject(project){
  return fetch(`${baseUrl}/projects/${project.id}`)
  .then(res => res.json())
}

function checkLike(likeButton, project, likeCount){
  if (!likeExist(project)){
    likeProject(project)
    likeCount.innerText = `${project.likes.length+1} Likes`
    likeButton.innerText = "Unlike"
  } else {
    unlikeProject(project)
    likeCount.innerText = `${project.likes.length-1} Likes`
    likeButton.innerText = "Like"
  }
}

function likeProject(project){
  likeData = {user_id: localStorage["id"], project_id: project.id}
  return fetch(`${baseUrl}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(likeData)
  })
}

function unlikeProject(project){
  likeData = project.likes.find(like => like.user_id == localStorage["id"])
  return fetch(`${baseUrl}/likes/${likeData.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function likeExist(project){
  if (project.likes.find(like => like.user_id == localStorage["id"])){
    return true
  } else {
    return false
  }
}

function handleCommentFunctionality(commentButton, project, card){
  commentButton.addEventListener("click", e => {
    debugger
  })
}