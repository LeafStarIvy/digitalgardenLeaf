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
  datetimeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  
  // Append elements to the container
  datetimeContainer.appendChild(datetimeText);
  datetimeContainer.appendChild(datetimeToggle);
  
  // Add the container to the body
  document.body.appendChild(datetimeContainer);
  
  // Check if datetime should be hidden (from localStorage)
  if (localStorage.getItem('datetime-hidden') === 'true') {
    datetimeContainer.classList.add('datetime-hidden');
  }
  
  // Toggle visibility and save preference
  datetimeToggle.addEventListener('click', function() {
    datetimeContainer.classList.toggle('datetime-hidden');
    localStorage.setItem(
      'datetime-hidden', 
      datetimeContainer.classList.contains('datetime-hidden')
    );
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