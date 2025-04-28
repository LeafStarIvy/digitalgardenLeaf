document.addEventListener('DOMContentLoaded', function() {
  // Create the datetime elements
  const datetimeContainer = document.createElement('div');
  datetimeContainer.id = 'datetime-display';
  datetimeContainer.className = 'datetime-container';
  
  const datetimeText = document.createElement('span');
  datetimeText.id = 'datetime-text';
  
  const datetimeToggle = document.createElement('button');
  datetimeToggle.id = 'datetime-toggle';
  datetimeToggle.className = 'datetime-toggle';
  datetimeToggle.setAttribute('aria-label', 'Toggle datetime display');
  datetimeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  
  // Create reset button (initially hidden)
  const resetButton = document.createElement('button');
  resetButton.id = 'datetime-reset';
  resetButton.className = 'datetime-reset datetime-reset-hidden';
  resetButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg> Show date & time';
  
  // Append elements to the containers
  datetimeContainer.appendChild(datetimeText);
  datetimeContainer.appendChild(datetimeToggle);
  
  // Add the containers to the body
  document.body.appendChild(datetimeContainer);
  document.body.appendChild(resetButton);
  
  // Check if datetime should be hidden (from localStorage)
  if (localStorage.getItem('datetime-hidden') === 'true') {
    datetimeContainer.classList.add('datetime-hidden');
    resetButton.classList.remove('datetime-reset-hidden');
  }
  
  // Toggle visibility and save preference
  datetimeToggle.addEventListener('click', function() {
    datetimeContainer.classList.add('datetime-hidden');
    resetButton.classList.remove('datetime-reset-hidden');
    localStorage.setItem('datetime-hidden', 'true');
  });
  
  // Reset button functionality
  resetButton.addEventListener('click', function() {
    datetimeContainer.classList.remove('datetime-hidden');
    resetButton.classList.add('datetime-reset-hidden');
    localStorage.setItem('datetime-hidden', 'false');
  });
  
  // Update date and time
  function updateDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    
    datetimeText.textContent = now.toLocaleDateString(navigator.language, options);
  }
  
  // Initial update
  updateDateTime();
  
  // Update every second
  setInterval(updateDateTime, 1000);
});
