const films = [
  {
    title: "une bataille aprés l'autre",
    image: "image/MV5BODFlNDVmNWUtMTQ0ZC00NjVjLTlhMDUtYTA2MWJiODVjNWFkXkEyXkFqcGc@._V1_.jpg",
    catégorie: "Action",
    description: "Une bataille après l'autre, un héros affronte des ennemis puissants pour sauver son monde du chaos."
  },
  {
    title: "Home Alone",
    image: "image/homealone.124915.webp",
    catégorie: "Comedie",
    description: "Un enfant oublié à la maison doit défendre son territoire contre deux voleurs maladroits avec des pièges hilarants."
  },
  {
    title: "Kings",
    image: "image/$_57.jpg",
    catégorie: "Comedie",
    description: "Une comédie pleine d'aventures où un groupe d'amis se retrouve dans des situations aussi drôles qu'imprévisibles."
  },
  {
    title: "Back",
    image: "image/1525155107-back-in-action.jpg",
    catégorie: "Action",
    description: "Un ancien agent revient en mission pour affronter son passé et protéger ceux qu'il aime."
  },
  {
    title: "John Wick",
    image: "image/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-2_d07f671a-bf59-416a-aec5-ff920e173b96.webp",
    catégorie: "Action",
    description: "Un tueur légendaire sort de sa retraite pour se venger dans un monde dangereux rempli de criminels."
  },
  {
    title: "Stuber",
    image: "image/u-s-one-sheet-27-x40-double-sided-stuber-original-movie-poster-style-b-2019-27x40-ds-action-comedy-dave-bautista-movie-poster-13795745759325.jpg",
    catégorie: "Action",
    description: "Un chauffeur Uber se retrouve embarqué dans une mission policière pleine d'action et d'humour."
  },
  {
    title: "The Dark Society",
    image: "image/drama-movie-poster-template-design-aca536dd594f745b32bee67980c8690d_screen.jpg",
    catégorie: "Drama",
    description: "Une société secrète manipule les événements dans l'ombre, révélant des vérités dangereuses."
  },
  {
    title: "The Clumsy Hero Comedy",
    image: "image/9416315e-61e4-418f-9b7a-7d5d299279ba.webp",
    catégorie: "Comedie",
    description: "Un héros maladroit tente de sauver la situation mais provoque des catastrophes hilarantes."
  },
  {
    title: "Titanic",
    image: "image/4455d96357fb041d1cf3c8a5264ed593.jpg",
    catégorie: "Drama",
    description: "Une histoire d'amour inoubliable entre deux jeunes passagers à bord du célèbre paquebot Titanic."
  },
  {
    title: "Silenced",
    image: "image/61f1d98c0629a4f78f4206b546a6fd60.jpg",
    catégorie: "Action",
    description: "Un homme découvre un secret choquant et lutte pour révéler la vérité malgré les dangers."
  },
  {
    title: "The Housemaid",
    image: "image/b66b6daa54ded204dbe8f51fca43dbc6.jpg",
    catégorie: "Drama",
    description: "Une femme entre au service d'une famille riche et découvre des secrets troublants."
  },
  {
    title: "Anne",
    image: "image/ed05b9aa4258eaae5fad8c7ee0db6094.jpg",
    catégorie: "Drama",
    description: "L'histoire émouvante d'une jeune fille courageuse qui lutte pour trouver sa place dans le monde."
  }
];


const container = document.getElementById("films-container");
const favContainer = document.getElementById("favoris-container");

let favoris = [];

function displayFilms(list) {
  container.innerHTML = "";

  list.forEach(film => {
    container.appendChild(createCard(film));
  });
}

function createCard(film) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <div class="img-box">
    <img src="${film.image}">
    <button class="fav-btn">❤️</button>
  </div>

  <h3>${film.title}</h3>

  <span class="category">${film.catégorie}</span>

  <button class="detail-btn">Voir Détail</button>
`;


  card.querySelector(".detail-btn").addEventListener("click", () => {
    showDetail(film);
  });


  card.querySelector(".fav-btn").addEventListener("click", () => {
    if (!favoris.includes(film)) {
      favoris.push(film);
      displayFavoris();
    }
  });

  return card;
}


function displayFavoris() {
  favContainer.innerHTML = "";

  favoris.forEach(film => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${film.image}">
      <h3>${film.title}</h3>
    `;

    favContainer.appendChild(div);
  });
}

function showDetail(film) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="detail-page">
      <button id="back-btn">⬅ Retour</button>

      <h1>${film.title}</h1>
      <img src="${film.image}" style="width:300px;">
      <p>${film.description}</p>
    </div>
  `;

  document.getElementById("back-btn").addEventListener("click", () => {
    location.reload();
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.cat;

    if (cat === "Tous") {
      displayFilms(films);
    } else {
      displayFilms(films.filter(f => f.catégorie === cat));
    }
  });
});


displayFilms(films);