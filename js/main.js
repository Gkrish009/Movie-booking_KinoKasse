
//movie list rendering in the homepage
function imageArray() {

  let gallery = document.getElementById("movieList");

  for (i = 0; i < imgArray.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("class", "flex-item");
    img.src = imgArray[i];
    let a = document.createElement("a");
    a.setAttribute("href", "./movie-details.html");
    a.appendChild(img);
    gallery.appendChild(a);
  }

}
// images rendering in the movie details page
function loadActorImages() {
  let actorDiv = document.getElementById("actors-list");
  for (let i = 0; i < actorImagesArray.length; i++) {
    const actorIamge = actorImagesArray[i];
    let img = document.createElement("img");
    img.setAttribute("class", "actor-tile");
    img.src = actorIamge;
    actorDiv.appendChild(img);
  }
}
// movie list home page
let imgArray = [
  "./images/poster-book-club.jpg",
  "./images/poster-der-schuh-des-manitu.jpg",
  "./images/poster-eingeimpft.jpg",
  "./images/poster-eingeimpft.jpg",
  "./images/poster-gundermann.jpg",
  "./images/poster-pumuckl.jpg",
  "./images/poster-the-name-of-the-rose.jpg",
  "./images/poster-mamma-mia.jpg",
  "./images/poster-familie-brasch.jpg",
  "./images/poster-hamburger-gitter.jpg",
  "./images/poster-the-name-of-the-rose.jpg",
  "./images/poster-eingeimpft.jpg"
];
// images in movie details page
let actorImagesArray = [
  "./images/christian-tramitz.jpg",
  "./images/michael-herbig.jpg",
  "./images/rick-kavanian.jpg",
  "./images/sky-du-mont.jpg",
  "./images/marie-baumer.jpg"
]
