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
function validate(){
/*- document, un objet javascript qui permet d'atteindre la page html
  charger dans un navigateur web.
  - forms séléctionne tout les élément <form> de la page
  - reserve séléctionne le formulaire nommer reserve,
  qui est celui sur lequel on souhaite travailler.
*/  
  const firstName = document.forms.reserve.first.value;
  const lastName = document.forms.reserve.last.value;
  const email = document.forms.reserve.email.value;
  const birthdate = document.forms.reserve.birthdate.value;
  const quantity = document.forms.reserve.quantity.value;
  const location = document.forms.reserve.location.value;

  // Log the data sent by the form
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Birthdate:", birthdate);
  console.log("Quantity:", quantity);
  console.log("Location:", location);

  alert()
  /*
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

"Veuillez entrer 2 caractères ou plus pour le champ du nom."
"Vous devez choisir une option."
"Vous devez vérifier que vous acceptez les termes et conditions."
"Vous devez entrer votre date de naissance."
  */
}