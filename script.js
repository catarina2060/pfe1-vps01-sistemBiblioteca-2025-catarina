const livros = [
    {
      "id": 1,
      "titulo": "Dom Quixote",
      "autor": "Miguel de Cervantes",
      "ano": 1605,
      "editora": "Editora Clássicos",
      "genero": "Romance",
      "descricao": "Um romance satírico sobre um fidalgo que acredita ser um cavaleiro andante."
    },
    {
      "id": 2,
      "titulo": "1984",
      "autor": "George Orwell",
      "ano": 1949,
      "editora": "Companhia das Letras",
      "genero": "Distopia",
      "descricao": "Um retrato sombrio de um futuro totalitário."
    },
    {
      "id": 3,
      "titulo": "A Revolução dos Bichos",
      "autor": "George Orwell",
      "ano": 1945,
      "editora": "Editora B",
      "genero": "Fábula política",
      "descricao": "Uma alegoria sobre o totalitarismo disfarçado de fábula animal."
    },
    {
      "id": 4,
      "titulo": "O Pequeno Príncipe",
      "autor": "Antoine de Saint-Exupéry",
      "ano": 1943,
      "editora": "Agir",
      "genero": "Infantil/Filosófico",
      "descricao": "Um conto filosófico com críticas sociais sutis."
    },
    {
      "id": 5,
      "titulo": "Orgulho e Preconceito",
      "autor": "Jane Austen",
      "ano": 1813,
      "editora": "Penguin",
      "genero": "Romance",
      "descricao": "A história de Elizabeth Bennet enquanto lida com questões de classe e amor."
    },
    {
      "id": 6,
      "titulo": "O Hobbit",
      "autor": "J.R.R. Tolkien",
      "ano": 1937,
      "editora": "HarperCollins",
      "genero": "Fantasia",
      "descricao": "A jornada de Bilbo Bolseiro em uma aventura pela Terra Média."
    },
    {
      "id": 7,
      "titulo": "Moby Dick",
      "autor": "Herman Melville",
      "ano": 1851,
      "editora": "Nova Fronteira",
      "genero": "Aventura",
      "descricao": "A obsessiva caçada do capitão Ahab pela baleia branca."
    },
    {
      "id": 8,
      "titulo": "A Metamorfose",
      "autor": "Franz Kafka",
      "ano": 1915,
      "editora": "L&PM",
      "genero": "Ficção filosófica",
      "descricao": "Um homem acorda transformado em um inseto gigante."
    },
    {
      "id": 9,
      "titulo": "Grande Sertão: Veredas",
      "autor": "João Guimarães Rosa",
      "ano": 1956,
      "editora": "Nova Aguilar",
      "genero": "Romance",
      "descricao": "Um clássico da literatura brasileira sobre o sertão e seus conflitos."
    },
    {
      "id": 10,
      "titulo": "Harry Potter e a Pedra Filosofal",
      "autor": "J.K. Rowling",
      "ano": 1997,
      "editora": "Rocco",
      "genero": "Fantasia",
      "descricao": "O começo da jornada de um jovem bruxo em Hogwarts."
    }
  ];
  

  const listaLivros = document.getElementById('lista-livros');
  const modal = document.getElementById('modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalDescricao = document.getElementById('modal-descricao');
  const modalAutor = document.getElementById('modal-autor');
  const modalAno = document.getElementById('modal-ano');
  const modalEditora = document.getElementById('modal-editora');
  const modalGenero = document.getElementById('modal-genero');
  const closeButton = document.querySelector('.close');
  
 
  function exibirLivros() {
    listaLivros.innerHTML = ''; 
  
    livros.forEach(livro => {
      const divLivro = document.createElement('div');
      divLivro.classList.add('livro');
      divLivro.innerHTML = `
        <strong>${livro.titulo}</strong><br>
        <span>${livro.autor}</span><br>
        <span>${livro.ano}</span><br>
        <button onclick="verDetalhes(${livro.id})">Ver Detalhes</button>
      `;
      listaLivros.appendChild(divLivro);
    });
  }
  

  function verDetalhes(id) {
    const livro = livros.find(l => l.id === id);
  
    modalTitulo.textContent = livro.titulo;
    modalDescricao.textContent = livro.descricao;
    modalAutor.textContent = livro.autor;
    modalAno.textContent = livro.ano;
    modalEditora.textContent = livro.editora;
    modalGenero.textContent = livro.genero;
  
    modal.style.display = 'flex';
  }
  
  
  closeButton.onclick = function () {
    modal.style.display = 'none';
  };
  

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  

  window.onload = function () {
    exibirLivros();
  };
  