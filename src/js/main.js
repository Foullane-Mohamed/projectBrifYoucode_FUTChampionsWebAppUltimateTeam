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

let dataPlayer = [];

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
  // selectDataFromInputs()
  ajouterPlayers();
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
      nom: inputNom.vlaue,
      photo: photoPlayer,
      nationality: inputNationality.value,
      club: inputClub.vlue,
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
    console.log(dataPlayer[0]);
  } else if (
    selectPosition.value === "CM" ||
    selectPosition.value === "CB" ||
    selectPosition.value === "LB" ||
    selectPosition.value === "RB" ||
    selectPosition.value === "RB" ||
    selectPosition.value === "CDM" ||
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
    console.log(dataPlayer[0]);
  }
}

function ajouterPlayers() {
  if (selectPosition.value === "GK") {
    if (player1.innerHTML.trim() === "") {
      for (let i = 0; i < dataPlayer.length; i++) {
        if (dataPlayer[i].position === "GK") {
          player1.innerHTML = `
        
          <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
    <div class="mt-2 rounded-l p-2 flex items-start justify-around">
      <div class="text-sm font-bold">CDM</div>
      <img src="${dataPlayer[i].photo}" class="rounded-full w-16 h-16" />
      <div class="text-lg font-bold">${dataPlayer[i].rating}</div>
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
      
        }
      }
    }
  }
  if (selectPosition.value === "CM") {
  }
  if (selectPosition.value === "CB") {
  }
  if (selectPosition.value === "LB") {
  }
  if (selectPosition.value === "RB") {
  }
  if (selectPosition.value === "RB") {
  }
  if (selectPosition.value === "CDM") {
  }
  if (selectPosition.value === "ST") {
  }
  if (selectPosition.value === "RW") {
  }
}
