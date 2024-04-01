function checkPasswords() {
  if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
    document.getElementById('passwordMessage').style.color = 'green';
    document.getElementById('passwordMessage').innerHTML = 'Passwords Match';
  }
  else {
    document.getElementById('passwordMessage').style.color = 'red';
    document.getElementById('passwordMessage').innerHTML = 'Passwords Do Not Match';
  }
}
