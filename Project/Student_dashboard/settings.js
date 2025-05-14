document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  console.log("Saving profile:", { name, email });

  // Example POST request (connect with backend later)
  /*
  fetch('/api/settings/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  })
  .then(res => res.json())
  .then(data => alert('Profile updated successfully!'));
  */
});

document.getElementById('passwordForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const current = document.getElementById('currentPassword').value;
  const newPass = document.getElementById('newPassword').value;
  const confirm = document.getElementById('confirmPassword').value;

  if (newPass !== confirm) {
    alert("New passwords do not match!");
    return;
  }

  console.log("Changing password:", { current, newPass });

  // Example POST request (connect with backend later)
  /*
  fetch('/api/settings/password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ current, newPassword: newPass })
  })
  .then(res => res.json())
  .then(data => alert('Password changed successfully!'));
  */
});