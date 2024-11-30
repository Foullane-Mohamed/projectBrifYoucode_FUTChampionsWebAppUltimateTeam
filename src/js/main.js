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
// form validation 
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
//-- form validation --//

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
function ajouterPlayers() {
  switch (selectPosition.value) {
    case "GK":
      if (player1.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "GK") {
            player1.innerHTML = `
            
            <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
    
              <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
                <div class="text-sm font-bold">
                <h5>GK</h5>
                <div class="text-lg font-bold">${dataPlayer[i].rating}</div>
                </div>
                <img src="${dataPlayer[i].photo}" class="rounded-full w-16 h-16" />
      <div class="flex gap-2 " >
      <button
        type="button"
        onclick="deletePlayer()"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
              <button
            type="button"
            onclick="editePlayers()"
            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1 "  >

            <i class="fa-solid fa-pen-to-square text-white" ></i>
          </button>  
    </div>
              </div>
              <div class="text-center text-sm font-bold mb-2">
                ${dataPlayer[i].nom}
              </div>
              <div class="flex justify-between items-center mb-4">
                <div class="text-xs">CDM ++</div>
                <div class="flex space-x-2">
                  <img src="${dataPlayer[i].flagNationalite}" class="w-5 h-3" />
                  <img src="${dataPlayer[i].logoClub}" class="w-5 h-5" />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-1 text-center">
                <div>
                  <div class="text-xs">DIV</div>
                  <div class="text-sm font-bold">${dataPlayer[i].diving}</div>
                </div>
                <div>
                  <div class="text-xs">HAN</div>
                  <div class="text-sm font-bold">${dataPlayer[i].handling}</div>
                </div>
                <div>
                  <div class="text-xs">KIC</div>
                  <div class="text-sm font-bold">${dataPlayer[i].kicking}</div>
                </div>
                <div>
                  <div class="text-xs">SPD</div>
                  <div class="text-sm font-bold">${dataPlayer[i].speed}</div>
                </div>
                <div>
                  <div class="text-xs">POS</div>
                  <div class="text-sm font-bold">${dataPlayer[i].positioning}</div>
                </div>
              </div>
              <div class="flex justify-around items-center mt-4">
                <div class="text-xs">R!</div>
                <div class="text-xs">4 W.F</div>
                <div class="text-xs">3*</div>
              </div>
            </div>
            `;
            break;
          }
        }
      } else if (player1.innerHTML.trim() !== "") {
        let lastIndexGK = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "GK") {
            lastIndexGK = i;
          }
        }

        if (lastIndexGK !== -1) {
          divChangement.innerHTML += `
            <div class="">
              <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
                <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
                  <div class="text-sm font-bold">
                  <h5>GK</h5>
                  <div class="text-lg font-bold">${dataPlayer[lastIndexGK].rating}</div>

                  </div>
                  <img src="${dataPlayer[lastIndexGK].photo}" class="rounded-full w-16 h-16" />
                            <div class="flex gap-2 " >
      <button
        type="button"
        onclick="deletePlayer()"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
              <button
            type="button"
            onclick="editePlayers()"
            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1 "  >

            <i class="fa-solid fa-pen-to-square text-white" ></i>
          </button>  
    </div>
                </div>
                <div class="text-center text-sm font-bold mb-2">
                  ${dataPlayer[lastIndexGK].nom}
                </div>
                <div class="flex justify-between items-center mb-4">
                  <div class="text-xs">CDM ++</div>
                  <div class="flex space-x-2">
                    <img src="${dataPlayer[lastIndexGK].flagNationalite}" class="w-5 h-3" />
                    <img src="${dataPlayer[lastIndexGK].logoClub}" class="w-5 h-5" />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-1 text-center">
                  <div>
                    <div class="text-xs">DIV</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].diving}</div>
                  </div>
                  <div>
                    <div class="text-xs">HAN</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].handling}</div>
                  </div>
                  <div>
                    <div class="text-xs">KIC</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].kicking}</div>
                  </div>
                  <div>
                    <div class="text-xs">SPD</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].speed}</div>
                  </div>
                  <div>
                    <div class="text-xs">POS</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].positioning}</div>
                  </div>
                </div>
                <div class="flex justify-around items-center mt-4">
                  <div class="text-xs">R!</div>
                  <div class="text-xs">4 W.F</div>
                  <div class="text-xs">3*</div>
                </div>
              </div>
            </div>
          `;
        }
      }
      break;

    case "LB":
      if (player2.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LB") {
            player2.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player2.innerHTML.trim() !== "") {
        let indexLB = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LB") {
            indexLB = i;
          }
        }
        if (indexLB !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexLB]);
        }
      }
      break;

    case "CB":
      if (player3.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CB") {
            player3.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player4.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CB") {
            player4.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player3.innerHTML.trim() !== "") {
        let indexCB = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CB") {
            indexCB = i;
          }
        }
        if (indexCB !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCB]);
        }
      }
      break;

    case "RB":
      if (player5.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RB") {
            player5.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player5.innerHTML.trim() !== "") {
        let indexRB = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RB") {
            indexRB = i;
          }
        }
        if (indexRB !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexRB]);
        }
      }
      break;
    case "CM":
      if (player6.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CM") {
            player6.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player8.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CM") {
            player8.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexCM = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CM") {
            indexCM = i;
          }
        }
        if (indexCM !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCM]);
        }
      }
      break;
    case "CDM":
      if (player7.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CDM") {
            player7.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexCMD = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CDM") {
            indexCMD = i;
          }
        }
        if (indexCMD !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCMD]);
        }
      }
      break;
    case "LW":
      if (player9.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LW") {
            player9.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexLW = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LW") {
            indexLW = i;
          }
        }
        if (indexLW !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexLW]);
        }
      }
      break;
    case "ST":
      if (player10.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "ST") {
            player10.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexST = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "ST") {
            indexST = i;
          }
        }
        if (indexST !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexST]);
        }
      }
      break;
    case "RW":
      if (player11.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RW") {
            player11.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexRW = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RW") {
            indexRW = i;
          }
        }
        if (indexRW !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexRW]);
        }
      }
      break;
  }

  function divPlayerCard(player) {
    return `
        <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">

    <div class="mt-2 rounded-l p-2 flex items-start justify-between gap-3">
          <div class="text-sm font-bold">
          <h5>${player.position}</h5>
                    <div class="text-lg font-bold">${player.rating}</div>

          </div>
          <img src="${player.photo}" class="rounded-full w-16 h-16" />
                <div class="flex gap-2 " >
      <button
        type="button"
        onclick="deletePlayer()"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
              <button
            type="button"
            onclick="editePlayers()"
            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br text-center focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 me-1 mb-1 "  >

            <i class="fa-solid fa-pen-to-square text-white" ></i>
          </button>  
    </div>
        </div>
        <div class="text-center text-sm font-bold mb-2">
          ${player.nom}
        </div>
        <div class="flex justify-between items-center mb-4">
          <div class="text-xs">CDM ++</div>
          <div class="flex space-x-2">
            <img src="${player.flagNationalite}" class="w-5 h-3" />
            <img src="${player.logoClub}" class="w-5 h-5" />
          </div>
        </div>
        <div class="grid grid-cols-6 gap-1 text-center">
        
        
          <div>
            <div class="text-xs">SHO</div>
            <div class="text-sm font-bold">${player.shooting}</div>
          </div>
          <div>
            <div class="text-xs">PAC</div>
            <div class="text-sm font-bold">${player.pace}</div>
          </div>
          <div>
            <div class="text-xs">DRI</div>
            <div class="text-sm font-bold">${player.dribbling}</div>
          </div>
          <div>
            <div class="text-xs">DEF</div>
            <div class="text-sm font-bold">${player.defending}</div>
          </div>
          <div>
            <div class="text-xs">PHY</div>
            <div class="text-sm font-bold">${player.physical}</div>
          </div>
          <div>
            <div class="text-xs">PAS</div>
            <div class="text-sm font-bold">${player.passing}</div>
          </div>
        </div>
        <div class="flex justify-around items-center mt-4">
          <div class="text-xs">R!</div>
          <div class="text-xs">4 W.F</div>
          <div class="text-xs">3*</div>
        </div>
      </div>
    `;
  }
}

// function deletePlayer(indexDelete) {

//   const changementCards = document.getElementById('changement').children;
  

//   if(changementCards[indexDelete]) {
//       changementCards[indexDelete].remove();
//   }

//   dataPlayer.splice(indexDelete, 1);


//   const positions = ['player1', 'player2', 'player3', 'player4', 'player5', 
//                     'player6', 'player7', 'player8', 'player9', 'player10', 'player11'];
  
//   positions.forEach(pos => {
//       const playerDiv = document.querySelector(`.${pos}`);
//       if(playerDiv && playerDiv.innerHTML.includes(`onclick="deletePlayer(${indexDelete})"`)) {
//           playerDiv.innerHTML = '';
//       }
//   });
// }



