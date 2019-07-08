const baseUrl = 'http://localhost:3000';

fetch(`${baseUrl}/projects`)
  .then(res => res.json())
  .then(projects => {
    projects.forEach(project => renderCards(project));
  });

  
