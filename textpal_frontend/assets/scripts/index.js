const baseUrl = 'http://localhost:3000';
const wrapper = document.querySelector('.wrapper');

fetch(`${baseUrl}/projects`)
  .then(res => res.json())
  .then(projects => {
    projects.forEach(project => renderCards(project));
  });

function renderCards(project) {
  const card = document.createElement('div');
  const svgWrapper = document.createElement('div');
  const infoWrapper = document.createElement('div');

  card.classList.add('card');
  svgWrapper.classList.add('svg__wrapper');
  infoWrapper.classList.add('info__wrapper');

  card.append(svgWrapper, infoWrapper);

  wrapper.appendChild(card);
}

// .card
//   .svg__wrapper
//   .info__wrapper
//
