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
 // Récupère la classe close dans la page
const closeBg = document.querySelector(".close");
// Récupère la classe thxBtnStyle dans la page
const closeBgMod = document.querySelector(".thxBtnStyle");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBg.addEventListener("click", closeModal);
// Séléctionne le bouton et ferme le background sur lequel est construit les remerciement.
closeBgMod.addEventListener("click", closeModal);
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
function validate(event) {
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
  let quantity = document.forms.reserve.quantity.value;
  const checkbox1 = document.getElementById("checkbox1");
  const locationRadios = document.getElementsByName("location");
  const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
  let valide = true;

  if (firstName == "" || firstName.length < 2) {
    const input = document.getElementById("first");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

    input.insertAdjacentElement("afterend", errorParagraph);

    valide = false;
  }
  if (lastName == "" || lastName.length < 2) {
    const input = document.getElementById("last");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

    input.insertAdjacentElement("afterend", errorParagraph);

    valide = false;
  }
  if (birthdate == "") {
    const input = document.getElementById("birthdate");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Vous devez entrer votre date de naissance.";

    input.insertAdjacentElement("afterend", errorParagraph);
    valide = false;
  }
  if (!email.match(regExEmail)) {
    /*
    const input = document.getElementById("email");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Vous devez entrer un email valide.";

    input.insertAdjacentElement("afterend", errorParagraph);
    */
    valide = false;
  }

  let locMessage = false;

  for (const radio of locationRadios) {
    if (radio.checked) {
      locMessage = true; 
    }
  }

  if (!locMessage) {
    const input = document.getElementById("location");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Vous devez choisir une option.";

    input.insertAdjacentElement("afterend", errorParagraph);
    valide = false;
  }
  if(quantity == "")
  {
    const input = document.getElementById("quantity");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Veuillez entrer un chiffre entre 0 et 99.";

    input.insertAdjacentElement("afterend", errorParagraph);

    valide = false;
  }
  if (checkbox1.checked === false) {
    const input = document.getElementById("errLab");

    const errorParagraph = document.createElement("p");
    errorParagraph.className = "error";
    errorParagraph.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";

    input.insertAdjacentElement("afterend", errorParagraph);
    valide = false;
  }

  if (!valide) {
    event.preventDefault();
  } else {
    event.preventDefault();
    document.querySelector(".thxStyle").style.display = "block";
    document.querySelector("form").style.display = "none";
  }
}
