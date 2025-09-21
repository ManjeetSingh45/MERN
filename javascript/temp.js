document.getElementById('saveBtn').addEventListener('click', function() {
  const username = document.getElementById('username').value;

  // Store in localStorage
  localStorage.setItem('savedUsername', username);

  alert('Username saved to localStorage!');
});

document.getElementById('showBtn').addEventListener('click', function() {
  const savedName = localStorage.getItem('savedUsername');

  document.getElementById('output').innerText = 
    savedName ? `Saved Username: ${savedName}` : 'No username saved yet.';
});
