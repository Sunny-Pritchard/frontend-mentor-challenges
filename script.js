const projects = [
  {
    name: 'four-card-feature-section-master'
  }
  
];

const list = document.getElementById('listPage');

projects.forEach(({name}, i) => {
  const listItem = document.createElement('li');

  listItem.innerHTML = `
          <a href="/${name}/index.html">
            <img src="/${name}/design/desktop-design.jpg" alt="${name}">
          </a>

          <div class="info">
           <h3>${i + 1}. ${formatProjectName(name)}</h3>

           <a href="/${name}/index.html">View Solution</a>
          </div>
  `;
  
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}