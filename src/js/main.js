let inputNom = document.querySelector(".input-nom");
let inputPhoto = document.querySelector(".input-photo");
let inputNationality = document.querySelector(".input-nationality");
let inputClub = document.querySelector(".input-club");
let inputFlagNationalite = document.querySelector(".input-flag-nationalite");
let inputLogoClub = document.querySelector(".input-logo-club");
let inputRating = document.querySelector(".input-rating");

let inputShooting = document.querySelector(".input-shooting");

let inputDribbling = document.querySelector(".input-dribbling");
let inputDefending = document.querySelector(".input-defending");
let inputPhysical = document.querySelector(".input-physical");
let inputDiving = document.querySelector(".input-diving");
let inputHandling = document.querySelector(".input-handling");
let inputKicking = document.querySelector(".input-kicking");
let inputReflexes = document.querySelector(".input-reflexes");
let inputSpeed = document.querySelector(".input-speed");
let inputPositioning = document.querySelector(".input-positioning");
let inputPace = document.querySelector(".input-pace");
let inputPassing = document.querySelector(".input-passing");
let btnEnter = document.querySelector(".btn-enter");
let selectPosition = document.querySelector(".select-position");
let inputsDivplayerGk = document.querySelector(".player-gk");
let inputsDivplayerCm = document.querySelector(".player-cm");
let divChangement = document.querySelector(".changement");
let errorPlayerName = document.querySelector(".input-nom");
let errorPlayerPhoto = document.querySelector(".input-photo");
let errorPlayerClub = document.querySelector(".input-club");
let errorPlayerNationality = document.querySelector(".input-flag-nationalite");
let errorClubLogo = document.querySelector(".input-logo-club");
let errorPosition = document.querySelector(".select-position");
let errorRating = document.querySelector(".input-rating");
let errorDiving = document.querySelector(".input-diving");
let errorHandling = document.querySelector(".input-handling");
let errorKicking = document.querySelector(".input-kicking");
let errorReflexes = document.querySelector(".input-reflexes");
let errorSpeed = document.querySelector(".input-speed");
let errorPositioning = document.querySelector(".input-positioning");
let errorShooting = document.querySelector(".input-shooting");
let errorPace = document.querySelector(".input-pace");
let errorDribbling = document.querySelector(".input-dribbling");
let errorDefending = document.querySelector(".input-defending");
let errorPhysical = document.querySelector(".input-physical");
let errorPassing = document.querySelector(".input-passing");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let player3 = document.querySelector(".player3");
let player4 = document.querySelector(".player4");
let player5 = document.querySelector(".player5");
let player6 = document.querySelector(".player6");
let player7 = document.querySelector(".player7");
let player8 = document.querySelector(".player8");
let player9 = document.querySelector(".player9");
let player10 = document.querySelector(".player10");
let player11 = document.querySelector(".player11");
let dataPlayer =  JSON.parse(localStorage.getItem('dataPlayer')) || [];

selectPosition.addEventListener("change", () => {
  if (selectPosition.value === "GK") {
    inputsDivplayerGk.style.display = "block";
    inputsDivplayerCm.style.display = "none";
  } else {
    inputsDivplayerGk.style.display = "none";
    inputsDivplayerCm.style.display = "block";
  }
});

btnEnter.addEventListener("click", () => {
  let formIsValid = true;


  if (inputNom.value === "") {
    document.querySelector(".error-nom").innerHTML = "Le nom du joueur est requis";
    inputNom.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-nom").innerHTML = "";
    inputNom.style.borderColor = "green";
  }


  if (inputPhoto.value === "") {
    document.querySelector(".error-photo").innerHTML = "La photo du joueur est requise";
    inputPhoto.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-photo").innerHTML = "";
    inputPhoto.style.borderColor = "green";
  }

  if (inputNationality.value === "") {
    document.querySelector(".error-nationality").innerHTML = "La nationalité est requise";
    inputNationality.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-nationality").innerHTML = "";
    inputNationality.style.borderColor = "green";
  }

  if (inputClub.value === "") {
    document.querySelector(".error-club").innerHTML = "Le club est requis";
    inputClub.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-club").innerHTML = "";
    inputClub.style.borderColor = "green";
  }

  if (inputFlagNationalite.value === "") {
    document.querySelector(".error-flagNationalite").innerHTML = "Le drapeau est requis";
    inputFlagNationalite.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-flagNationalite").innerHTML = "";
    inputFlagNationalite.style.borderColor = "green";
  }

  if (inputLogoClub.value === "") {
    document.querySelector(".error-logoClub").innerHTML = "Le logo du club est requis";
    inputLogoClub.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-logoClub").innerHTML = "";
    inputLogoClub.style.borderColor = "green";
  }

  if (selectPosition.value === "Choisi votre position") {
    document.querySelector(".error-position").innerHTML = "Veuillez sélectionner une position";
    selectPosition.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-position").innerHTML = "";
    selectPosition.style.borderColor = "green";
  }

  if (inputRating.value === "" || inputRating.value < 1 || inputRating.value > 99) {
    document.querySelector(".error-rating").innerHTML = "La note doit être entre 1 et 99";
    inputRating.style.borderColor = "red";
    formIsValid = false;
  } else {
    document.querySelector(".error-rating").innerHTML = "";
    inputRating.style.borderColor = "green";
  }
  if (selectPosition.value === "GK") {
    if (inputDiving.value === "" || inputDiving.value < 0 || inputDiving.value > 99) {
      document.querySelector(".error-diving").textContent = "La plongeon doit être entre 0 et 99";
      inputDiving.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-diving").textContent = "";
      inputDiving.style.borderColor = "green";
    }

    if (inputHandling.value === "" || inputHandling.value < 0 || inputHandling.value > 99) {
      document.querySelector(".error-handling").textContent = "La prise de balle doit être entre 0 et 99";
      inputHandling.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-handling").textContent = "";
      inputHandling.style.borderColor = "green";
    }

    if (inputKicking.value === "" || inputKicking.value < 0 || inputKicking.value > 99) {
      document.querySelector(".error-kicking").textContent = "Les coups de pied doivent être entre 0 et 99";
      inputKicking.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-kicking").textContent = "";
      inputKicking.style.borderColor = "green";
    }

    if (inputReflexes.value === "" || inputReflexes.value < 0 || inputReflexes.value > 99) {
      document.querySelector(".error-reflexes").textContent = "Les réflexes doivent être entre 0 et 99";
      inputReflexes.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-reflexes").textContent = "";
      inputReflexes.style.borderColor = "green";
    }

    if (inputSpeed.value === "" || inputSpeed.value < 0 || inputSpeed.value > 99) {
      document.querySelector(".error-speed").textContent = "La vitesse doit être entre 0 et 99";
      inputSpeed.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-speed").textContent = "";
      inputSpeed.style.borderColor = "green";
    }

    if (inputPositioning.value === "" || inputPositioning.value < 0 || inputPositioning.value > 99) {
      document.querySelector(".error-positioning").textContent = "Le positionnement doit être entre 0 et 99";
      inputPositioning.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-positioning").textContent = "";
      inputPositioning.style.borderColor = "green";
    }
  }

  if (selectPosition.value !== "GK" && selectPosition.value !== "Choisi votre position") {
    if (inputShooting.value === "" || inputShooting.value < 0 || inputShooting.value > 99) {
      document.querySelector(".error-shooting").textContent = "Le tir doit être entre 0 et 99";
      inputShooting.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-shooting").textContent = "";
      inputShooting.style.borderColor = "green";
    }

    if (inputPace.value === "" || inputPace.value < 0 || inputPace.value > 99) {
      document.querySelector(".error-pace").textContent = "La vitesse doit être entre 0 et 99";
      inputPace.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-pace").textContent = "";
      inputPace.style.borderColor = "green";
    }

    if (inputDribbling.value === "" || inputDribbling.value < 0 || inputDribbling.value > 99) {
      document.querySelector(".error-dribbling").textContent = "Le dribble doit être entre 0 et 99";
      inputDribbling.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-dribbling").textContent = "";
      inputDribbling.style.borderColor = "green";
    }

    if (inputDefending.value === "" || inputDefending.value < 0 || inputDefending.value > 99) {
      document.querySelector(".error-defending").textContent = "La défense doit être entre 0 et 99";
      inputDefending.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-defending").textContent = "";
      inputDefending.style.borderColor = "green";
    }

    if (inputPhysical.value === "" || inputPhysical.value < 0 || inputPhysical.value > 99) {
      document.querySelector(".error-physical").textContent = "Le physique doit être entre 0 et 99";
      inputPhysical.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-physical").textContent = "";
      inputPhysical.style.borderColor = "green";
    }

    if (inputPassing.value === "" || inputPassing.value < 0 || inputPassing.value > 99) {
      document.querySelector(".error-passing").textContent = "La passe doit être entre 0 et 99";
      inputPassing.style.borderColor = "red";
      formIsValid = false;
    } else {
      document.querySelector(".error-passing").textContent = "";
      inputPassing.style.borderColor = "green";
    }
  }

  if (formIsValid) {
    selectDataFromInputs();
    ajouterPlayers();
  }
});


function selectDataFromInputs() {
  let PhotosUrl = inputPhoto.files[0];
  let photoPlayer = URL.createObjectURL(PhotosUrl);

  let flagUrl = inputFlagNationalite.files[0];

  let flagNationalite = URL.createObjectURL(flagUrl);
  let logoUrl = inputLogoClub.files[0];
  let logoClub = URL.createObjectURL(logoUrl);
  let myObject = {};
  if (selectPosition.value === "GK") {
    myObject = {
      nom: inputNom.value,
      photo: photoPlayer,
      
      nationality: inputNationality.value,
      club: inputClub.value,
      flagNationalite: flagNationalite,
      logoClub: logoClub,
      position: selectPosition.value,
      rating: inputRating.value,

      diving: inputDiving.value,
      handling: inputHandling.value,
      kicking: inputKicking.value,
      reflexes: inputReflexes.value,
      speed: inputSpeed.value,
      positioning: inputPositioning.value,
    };
    dataPlayer.push(myObject);
     localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));

  } else if (
    selectPosition.value === "CM" ||
    selectPosition.value === "CB" ||
    selectPosition.value === "LB" ||
    selectPosition.value === "RB" ||
    selectPosition.value === "RB" ||
    selectPosition.value === "CDM" ||
    selectPosition.value === "LW" ||
    selectPosition.value === "ST" ||
    selectPosition.value === "RW"
  ) {
    myObject = {
      nom: inputNom.value,
      photo: photoPlayer,
      nationality: inputNationality.value,
      club: inputClub.value,
      flagNationalite: flagNationalite,
      logoClub: logoClub,
      position: selectPosition.value,
      rating: inputRating.value,
      shooting: inputShooting.value,
      pace: inputPace.value,
      dribbling: inputDribbling.value,
      defending: inputDefending.value,
      physical: inputPhysical.value,
      passing: inputPassing.value,
    };
    dataPlayer.push(myObject);
     localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));
  }
}

const PLAYER_POSITIONS = {
  GK: ".player1",
  LB: ".player2",
  CB: [".player3", ".player4"],
  RB: ".player5",
  CM: [".player6", ".player8"],
  CDM: ".player7",
  LW: ".player9",
  ST: ".player10",
  RW: ".player11"
};


function resetForm() {

  inputNom.value = "";
  inputRating.value = "";
  selectPosition.value = "";
  

  inputDiving.value = "";
  inputHandling.value = "";
  inputKicking.value = "";
  inputSpeed.value = "";
  inputPositioning.value = "";
  

  inputShooting.value = "";
  inputPace.value = "";
  inputDribbling.value = "";
  inputDefending.value = "";
  inputPhysical.value = "";
  inputPassing.value = "";
  

  inputsDivplayerGk.style.display = "none";
  inputsDivplayerCm.style.display = "none";
}


function ajouterPlayers() {

  const lastPlayer = dataPlayer[dataPlayer.length - 1];

  if (lastPlayer) {
  
    function isPlayerInTeam(playerName) {
      const allTeiranPlayers = document.querySelectorAll('.player1, .player2, .player3, .player4, .player5, .player6, .player7, .player8, .player9, .player10, .player11');
      
      for(let i = 0; i < allTeiranPlayers.length; i++) {
        if(allTeiranPlayers[i].children[0]) {
          const existingPlayerName = allTeiranPlayers[i].children[0].querySelector('.text-center.text-sm.font-bold').textContent;
          if(existingPlayerName === playerName) {
            return true;
          }
        }
      }
      return false;
    }

    const playerInTeam = isPlayerInTeam(lastPlayer.nom);
    

    if (lastPlayer.position === "GK") {
      divChangement.innerHTML += `
        <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
          <!-- Card content for goalkeeper -->
          <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
            <div class="text-sm font-bold">
              <h5>GK</h5>
              <div class="text-lg font-bold">${lastPlayer.rating}</div>
            </div>
            <img src="${lastPlayer.photo}" class="rounded-full w-16 h-16" />
            <div class="flex gap-2">
              <button type="button" onclick="deletePlayer(this)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
                <i class="fa-solid fa-xmark"></i>
              </button>
              ${!playerInTeam ? `
              <button type="button" onclick="editePlayers(this)" 
                class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
                <i class="fa-solid fa-pen-to-square text-white"></i>
              </button>
              ` : ''}
            </div>
          </div>
          <div class="text-center text-sm font-bold mb-2">${lastPlayer.nom}</div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-xs">CDM ++</div>
            <div class="flex space-x-2">
              <img src="${lastPlayer.flagNationalite}" class="w-5 h-3" />
              <img src="${lastPlayer.logoClub}" class="w-5 h-5" />
            </div>
          </div>
          <div class="grid grid-cols-6 gap-1 text-center">
            <div>
              <div class="text-xs">DIV</div>
              <div class="text-sm font-bold">${lastPlayer.diving}</div>
            </div>
            <div>
              <div class="text-xs">HAN</div>
              <div class="text-sm font-bold">${lastPlayer.handling}</div>
            </div>
            <div>
              <div class="text-xs">KIC</div>
              <div class="text-sm font-bold">${lastPlayer.kicking}</div>
            </div>
            <div>
              <div class="text-xs">SPD</div>
              <div class="text-sm font-bold">${lastPlayer.speed}</div>
            </div>
            <div>
              <div class="text-xs">POS</div>
              <div class="text-sm font-bold">${lastPlayer.positioning}</div>
            </div>
          </div>
          ${!playerInTeam ? `
          <button type="button" onclick="changerVerTeiran(this.closest('.card'))" 
            class="w-full mt-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5">
            Add to Team
          </button>
          ` : ''}
        </div>
      `;
    } else {
  
      divChangement.innerHTML += `
        <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
          <!-- Card content for other players -->
          <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
            <div class="text-sm font-bold">
              <h5>${lastPlayer.position}</h5>
              <div class="text-lg font-bold">${lastPlayer.rating}</div>
            </div>
            <img src="${lastPlayer.photo}" class="rounded-full w-16 h-16" />
            <div class="flex gap-2">
              <button type="button" onclick="deletePlayer(this)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
                <i class="fa-solid fa-xmark"></i>
              </button>
              ${!playerInTeam ? `
              <button type="button" onclick="editePlayers(this)" 
                class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
                <i class="fa-solid fa-pen-to-square text-white"></i>
              </button>
              ` : ''}
            </div>
          </div>
          <div class="text-center text-sm font-bold mb-2">${lastPlayer.nom}</div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-xs">CDM ++</div>
            <div class="flex space-x-2">
              <img src="${lastPlayer.flagNationalite}" class="w-5 h-3" />
              <img src="${lastPlayer.logoClub}" class="w-5 h-5" />
            </div>
          </div>
          <div class="grid grid-cols-6 gap-1 text-center">
            <div>
              <div class="text-xs">SHO</div>
              <div class="text-sm font-bold">${lastPlayer.shooting}</div>
            </div>
            <div>
              <div class="text-xs">PAC</div>
              <div class="text-sm font-bold">${lastPlayer.pace}</div>
            </div>
            <div>
              <div class="text-xs">DRI</div>
              <div class="text-sm font-bold">${lastPlayer.dribbling}</div>
            </div>
            <div>
              <div class="text-xs">DEF</div>
              <div class="text-sm font-bold">${lastPlayer.defending}</div>
            </div>
            <div>
              <div class="text-xs">PHY</div>
              <div class="text-sm font-bold">${lastPlayer.physical}</div>
            </div>
            <div>
              <div class="text-xs">PAS</div>
              <div class="text-sm font-bold">${lastPlayer.passing}</div>
            </div>
          </div>
          ${!playerInTeam ? `
          <button type="button" onclick="changerVerTeiran(this.closest('.card'))" 
            class="w-full mt-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5">
            Add to Team
          </button>
          ` : ''}
        </div>
      `;
    }
  }

  resetForm()
}


function changerVerTeiran(card) {

  const position = card.querySelector("h5").textContent;
  

  let teiranPlace = null;
  
  switch(position) {
    case "GK":
      teiranPlace = document.querySelector(".player1");
      break;
    case "LB":
      teiranPlace = document.querySelector(".player2");
      break;
    case "CB":
      if(document.querySelector(".player3").innerHTML === "") {
        teiranPlace = document.querySelector(".player3");
      } else if(document.querySelector(".player4").innerHTML === "") {
        teiranPlace = document.querySelector(".player4");
      }
      break;
    case "RB":
      teiranPlace = document.querySelector(".player5");
      break;
    case "CM":
      if(document.querySelector(".player6").innerHTML === "") {
        teiranPlace = document.querySelector(".player6");
      } else if(document.querySelector(".player8").innerHTML === "") {
        teiranPlace = document.querySelector(".player8");
      }
      break;
    case "CDM":
      teiranPlace = document.querySelector(".player7");
      break;
    case "LW":
      teiranPlace = document.querySelector(".player9");
      break;
    case "ST":
      teiranPlace = document.querySelector(".player10");
      break;
    case "RW":
      teiranPlace = document.querySelector(".player11");
      break;
  }

  if(teiranPlace && teiranPlace.innerHTML === "") {

    const teamPlayerHTML = `
      <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
        <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
          <div class="text-sm font-bold">
            <h5>${card.querySelector("h5").textContent}</h5>
            <div class="text-lg font-bold">${card.querySelector(".text-lg.font-bold").textContent}</div>
          </div>
          <img src="${card.querySelector("img").src}" class="rounded-full w-16 h-16" />
          <div class="flex gap-2">
            <button type="button" onclick="deletePlayer(this)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div class="text-center text-sm font-bold mb-2">${card.querySelector(".text-center.text-sm.font-bold").textContent}</div>
        <div class="flex justify-between items-center mb-4">
          <div class="text-xs">CDM ++</div>
          <div class="flex space-x-2">
            <img src="${card.querySelector(".flex.space-x-2 img:first-child").src}" class="w-5 h-3" />
            <img src="${card.querySelector(".flex.space-x-2 img:last-child").src}" class="w-5 h-5" />
          </div>
        </div>
        <div class="grid grid-cols-6 gap-1 text-center">
          ${card.querySelector(".grid.grid-cols-6").innerHTML}
        </div>
      </div>
    `;

    teiranPlace.innerHTML = teamPlayerHTML;
    card.remove();
  } else {
    alert("Cette position est déjà occupée!");
  }
}

function deletePlayer(button) {

  const card = button.closest('.card');
  
  if(card) {

    const isInBoard = card.parentElement.classList.contains('player1') ||
                     card.parentElement.classList.contains('player2') ||
                     card.parentElement.classList.contains('player3') ||
                     card.parentElement.classList.contains('player4') ||
                     card.parentElement.classList.contains('player5') ||
                     card.parentElement.classList.contains('player6') ||
                     card.parentElement.classList.contains('player7') ||
                     card.parentElement.classList.contains('player8') ||
                     card.parentElement.classList.contains('player9') ||
                     card.parentElement.classList.contains('player10') ||
                     card.parentElement.classList.contains('player11');
    
    if(isInBoard) {

      const playerHTML = `
        <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
          <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
            <div class="text-sm font-bold">
              <h5>${card.querySelector("h5").textContent}</h5>
              <div class="text-lg font-bold">${card.querySelector(".text-lg.font-bold").textContent}</div>
            </div>
            <img src="${card.querySelector("img").src}" class="rounded-full w-16 h-16" />
            <div class="flex gap-2">
              <button type="button" onclick="deletePlayer(this)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button type="button" onclick="editePlayers(this)" 
                class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1">
                <i class="fa-solid fa-pen-to-square text-white"></i>
              </button>
            </div>
          </div>
          <div class="text-center text-sm font-bold mb-2">${card.querySelector(".text-center.text-sm.font-bold").textContent}</div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-xs">CDM ++</div>
            <div class="flex space-x-2">
              <img src="${card.querySelector(".flex.space-x-2 img:first-child").src}" class="w-5 h-3" />
              <img src="${card.querySelector(".flex.space-x-2 img:last-child").src}" class="w-5 h-5" />
            </div>
          </div>
          <div class="grid grid-cols-6 gap-1 text-center">
            ${card.querySelector(".grid.grid-cols-6").innerHTML}
          </div>
          <button type="button" onclick="changerVerTeiran(this.closest('.card'))" 
            class="w-full mt-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5">
            Add to Team
          </button>
        </div>
      `;
      
      divChangement.innerHTML += playerHTML;
      
      card.parentElement.innerHTML = '';
    } else {
      card.remove();
    }
  }
}


function editePlayers(button) {
  const card = button.closest('.card');
  
  const position = card.querySelector("h5").textContent;
  const nom = card.querySelector(".text-center.text-sm.font-bold").textContent;
  const rating = card.querySelector(".text-lg.font-bold").textContent;
  
  selectPosition.value = position;
  inputNom.value = nom;
  inputRating.value = rating;
  
  if (position === "GK") {
    inputsDivplayerGk.style.display = "block";
    inputsDivplayerCm.style.display = "none";
    
    inputDiving.value = card.querySelector(".grid.grid-cols-6 div:nth-child(1) .text-sm.font-bold").textContent;
    inputHandling.value = card.querySelector(".grid.grid-cols-6 div:nth-child(2) .text-sm.font-bold").textContent;
    inputKicking.value = card.querySelector(".grid.grid-cols-6 div:nth-child(3) .text-sm.font-bold").textContent;
    inputSpeed.value = card.querySelector(".grid.grid-cols-6 div:nth-child(4) .text-sm.font-bold").textContent;
    inputPositioning.value = card.querySelector(".grid.grid-cols-6 div:nth-child(5) .text-sm.font-bold").textContent;
  } else {
    inputsDivplayerGk.style.display = "none";
    inputsDivplayerCm.style.display = "block";
    
    inputShooting.value = card.querySelector(".grid.grid-cols-6 div:nth-child(1) .text-sm.font-bold").textContent;
    inputPace.value = card.querySelector(".grid.grid-cols-6 div:nth-child(2) .text-sm.font-bold").textContent;
    inputDribbling.value = card.querySelector(".grid.grid-cols-6 div:nth-child(3) .text-sm.font-bold").textContent;
    inputDefending.value = card.querySelector(".grid.grid-cols-6 div:nth-child(4) .text-sm.font-bold").textContent;
    inputPhysical.value = card.querySelector(".grid.grid-cols-6 div:nth-child(5) .text-sm.font-bold").textContent;
    inputPassing.value = card.querySelector(".grid.grid-cols-6 div:nth-child(6) .text-sm.font-bold").textContent;
  }
  
  card.remove();
  
  btnEnter.onclick = function() {
    if (validateForm()) {
      selectDataFromInputs();
      ajouterPlayers();
      
    
      resetForm();
      
  
      btnEnter.onclick = function() {
        if (validateForm()) {
          selectDataFromInputs();
          ajouterPlayers();
        }
      };
    }
  };
}