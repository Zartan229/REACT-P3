function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBg = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBg.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction closeModal, copie de launchModal mais la différence est que elle 
// rend en le display : block de la classe .bground en display : none
function closeModal() {
  modalbg.style.display = "none";
}

// onsubmit="return validate();" demande l'appel de la fonction validate pour valider les donnée
function validate(firstName, lastName, email, birthdate, quantity, location){
  console.log(firstName)
  console.log(lastName)
  console.log(email)
  console.log(birthdate)
  console.log(quantity)
  console.log(location)
  alert()
  /*
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

"Veuillez entrer 2 caractères ou plus pour le champ du nom."
"Vous devez choisir une option."
"Vous devez vérifier que vous acceptez les termes et conditions."
"Vous devez entrer votre date de naissance."
  */
}