const notes = [
  {
    id: 1,
    title: 'Challenge Your Belief',
    category: 'Self-knowledge',
    description:
      'Are your beliefs coming from the true origin or are they from imaginative source',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtR52ZNoQQaH8J6FbYDz7auGjVBlV3R8HkQ&s',
    pdf: 'https://docs.google.com/document/d/18v_d8mjgp1GDXKbIhjshVZa7zWc7sJ1w0WuyER1WKAI/edit?usp=sharing',
  },
  {
    id: 2,
    title: 'Track Yourself',
    category: 'Self-knowledge',
    description:
      'Check what you do everyday to degrade yourself and then suffer because of that',
    image: '',
    pdf: 'https://docs.google.com/spreadsheets/d/1hDa3vnlbdKw90uaJOZ79EJPaFgLTiXugPr7sW7pT1b4/edit?usp=sharing',
  },
];

function loadNotes() {
  const container = document.getElementById('notes-container');
  container.innerHTML = '';
  notes.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <button onclick="window.open('${item.pdf}', '_blank')">View Notes</button>
    `;
    container.appendChild(card);
  });
}

function searchNotes() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const filteredNotes = notes.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );

  const container = document.getElementById('notes-container');
  container.innerHTML = '';
  filteredNotes.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <button>View Notes</button>
                `;
    container.appendChild(card);
  });
}

window.onload = loadNotes;
