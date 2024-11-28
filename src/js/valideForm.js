const inputs = {
  nom: document.querySelector('.input-nom'),
  photo: document.querySelector('.input-photo'),
  club: document.querySelector('.input-club'),
  flagNationalite: document.querySelector('.input-flag-nationalite'),
  logoClub: document.querySelector('.input-logo-club'),
  position: document.querySelector('.select-position'),
  rating: document.querySelector('.input-rating'),
  
  // GK stats
  diving: document.querySelector('.input-diving'),
  handling: document.querySelector('.input-handling'),
  kicking: document.querySelector('.input-kicking'),
  reflexes: document.querySelector('.input-reflexes'),
  speed: document.querySelector('.input-speed'),
  positioning: document.querySelector('.input-positioning'),
  
  // Player stats
  shooting: document.querySelector('.input-shooting'),
  pace: document.querySelector('.input-pace'),
  dribbling: document.querySelector('.input-dribbling'),
  defending: document.querySelector('.input-defending'),
  physical: document.querySelector('.input-physical'),
  passing: document.querySelector('.input-passing')
};

const errors = {
  nom: document.querySelector('.error-nom'),
  photo: document.querySelector('.error-photo'),
  club: document.querySelector('.error-club'),
  flagNationalite: document.querySelector('.error-flagNationalite'),
  logoClub: document.querySelector('.error-logoClub'),
  position: document.querySelector('.error-position'),
  rating: document.querySelector('.error-rating'),
  
  // GK errors
  diving: document.querySelector('.error-diving'),
  handling: document.querySelector('.error-handling'),
  kicking: document.querySelector('.error-kicking'),
  reflexes: document.querySelector('.error-reflexes'),
  speed: document.querySelector('.error-speed'),
  positioning: document.querySelector('.error-positioning'),
  
  // Player errors
  shooting: document.querySelector('.error-shooting'),
  pace: document.querySelector('.error-pace'),
  dribbling: document.querySelector('.error-dribbling'),
  defending: document.querySelector('.error-defending'),
  physical: document.querySelector('.error-physical'),
  passing: document.querySelector('.error-passing')
};

function validateForm() {
  clearErrors();
  let isValid = true;
  
  // Basic validations
  if (!inputs.nom.value.match(/^[a-zA-Z\s]{2,30}$/)) {
      errors.nom.innerHTML = '<span class="text-red-500">Name must be 2-30 characters, letters only</span>';
      errors.nom.classList.remove('hidden');
      isValid = false;
  }
  
  if (!inputs.club.value.match(/^[a-zA-Z\s]{2,30}$/)) {
      errors.club.innerHTML = '<span class="text-red-500">Club name must be 2-30 characters, letters only</span>';
      errors.club.classList.remove('hidden');
      isValid = false;
  }
  
  // File validations
  if (!inputs.photo.files[0]) {
      errors.photo.innerHTML = '<span class="text-red-500">Please select a photo</span>';
      errors.photo.classList.remove('hidden');
      isValid = false;
  }
  
  if (!inputs.flagNationalite.files[0]) {
      errors.flagNationalite.innerHTML = '<span class="text-red-500">Please select a flag</span>';
      errors.flagNationalite.classList.remove('hidden');
      isValid = false;
  }
  
  if (!inputs.logoClub.files[0]) {
      errors.logoClub.innerHTML = '<span class="text-red-500">Please select a club logo</span>';
      errors.logoClub.classList.remove('hidden');
      isValid = false;
  }
  
  // Position validation
  if (inputs.position.value === 'Choisi votre position') {
      errors.position.innerHTML = '<span class="text-red-500">Please select a position</span>';
      errors.position.classList.remove('hidden');
      isValid = false;
  }
  
  // Rating validation
  if (!inputs.rating.value.match(/^([1-9][0-9]|100)$/)) {
      errors.rating.innerHTML = '<span class="text-red-500">Rating must be between 1-100</span>';
      errors.rating.classList.remove('hidden');
      isValid = false;
  }
  
  // Stats validation based on position
  if (inputs.position.value === 'GK') {
      const gkStats = ['diving', 'handling', 'kicking', 'reflexes', 'speed', 'positioning'];
      for (let stat of gkStats) {
          if (!inputs[stat].value.match(/^([1-9][0-9]|100)$/)) {
              errors[stat].innerHTML = '<span class="text-red-500">Must be between 1-100</span>';
              errors[stat].classList.remove('hidden');
              isValid = false;
          }
      }
  } else if (inputs.position.value !== 'Choisi votre position') {
      const playerStats = ['shooting', 'pace', 'dribbling', 'defending', 'physical', 'passing'];
      for (let stat of playerStats) {
          if (!inputs[stat].value.match(/^([1-9][0-9]|100)$/)) {
              errors[stat].innerHTML = '<span class="text-red-500">Must be between 1-100</span>';
              errors[stat].classList.remove('hidden');
              isValid = false;
          }
      }
  }
  
  return isValid;
}

function clearErrors() {
  const errorElements = document.querySelectorAll('[class^="error-"]');
  errorElements.forEach(element => {
      element.innerHTML = '';
      element.classList.add('hidden');
  });
}

document.querySelector('.btn-enter').addEventListener('click', (e) => {
  e.preventDefault();
  if (validateForm()) {
      selectDataFromInputs(); // Your existing function
      ajouterPlayers();      // Your existing function
  }
});