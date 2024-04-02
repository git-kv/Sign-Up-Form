function checkPasswords() {
  if (document.getElementById('password').value == document.getElementById('confirmPassword').value && document.getElementById('password').value.length >= 8) {
    document.getElementById('passwordMessage').style.color = 'rgba(0, 255, 0, 0.5)';
    document.getElementById('password').style.borderColor = 'rgba(0, 255, 0, 0.5)';
    document.getElementById('confirmPassword').style.borderColor = 'rgba(0, 255, 0, 0.5)';
    document.getElementById('passwordMessage').innerHTML = '';
    document.getElementById('submit-button').disabled = false;
  }
  else {
    document.getElementById('passwordMessage').style.color = 'rgba(255, 0, 0)';
    document.getElementById('password').style.borderColor = 'rgba(255, 0, 0, 0.5)';
    document.getElementById('confirmPassword').style.borderColor = 'rgba(255, 0, 0, 0.5)';
    document.getElementById('passwordMessage').innerHTML = '*Passwords do not match';
    document.getElementById('submit-button').disabled = true;
  }

  if (document.getElementById('password').value.length < 8) {
    document.getElementById('passwordMessage').innerHTML = '*Password too short';
  }
}
