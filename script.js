function checkPasswords() {
  if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
    document.getElementById('passwordMessage').style.color = 'green';
    document.getElementById('password').style.borderColor = 'green';
    document.getElementById('confirmPassword').style.borderColor = 'green';
    document.getElementById('passwordMessage').innerHTML = '';
  }
  else {
    document.getElementById('passwordMessage').style.color = 'red';
    document.getElementById('password').style.borderColor = 'red';
    document.getElementById('confirmPassword').style.borderColor = 'red';
    document.getElementById('passwordMessage').innerHTML = 'Passwords Do Not Match';
  }
}
