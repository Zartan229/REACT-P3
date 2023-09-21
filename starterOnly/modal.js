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
const closeBgMod = document.querySelector(".thxBtnStyle");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBg.addEventListener("click", closeModal);
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
function validate(event){
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
  const checkbox1 = document.getElementById("checkbox1");
  let i = 0;

  if (lastName == "" || lastName.length < 2) {
    document.querySelector('#lastError').style.display = 'block';
    i++;
  }
   if (birthdate == "")
  {
    document.querySelector('#birthError').style.display = 'block';
    i++;
  }
 if (location == "")
  {
    document.querySelector('#locError').style.display = 'block';
    i++;
  }
 if (checkbox1.checked === false)
{
  document.querySelector('#coError').style.display = 'block';
  i++;
}

  if(i > 0)

  event.preventDefault();
else{
  event.preventDefault();
    document.querySelector('.thxStyle').style.display = 'block';
  document.querySelector('form').style.display = 'none';
}
}