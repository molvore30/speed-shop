document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.querySelector('.login-btn');
    btn.innerText = 'Loading...';
    btn.disabled = true;
  
    setTimeout(() => {
      btn.innerText = 'Login';
      btn.disabled = false;
      alert('Login berhasil! (simulasi)');
    }, 1500);
  });
  document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login manual berhasil (simulasi)');
  });
  
  function handleCredentialResponse(response) {
    console.log("Google JWT ID token: ", response.credential);
    alert('Login Google berhasil (simulasi)');
  }
  