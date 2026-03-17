//  Profile Update Logic
document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // 1. Get the new values from the inputs
  const newName = document.getElementById("profileName").value;
  const newEmail = document.getElementById("profileEmail").value;

  // 2. Find the text elements in the sidebar
  const sidebarName = document.querySelector(".sidebar h5");
  const sidebarEmail = document.querySelector(".sidebar small");

  // 3. Update the sidebar instantly
  sidebarName.innerText = newName;
  sidebarEmail.innerText = newEmail;

  // Show success alert
  alert(`Success! Profile updated for ${newName}.`);
});

// Security / Password Logic
document
  .getElementById("securityForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorText = document.getElementById("passwordError");

    // Reset error display
    errorText.classList.add("d-none");

    // 1. Dummy check for "Old Password"
    if (oldPassword !== "password123") {
      alert("Incorrect current password! (Hint: use 'password123')");
      return; // Stop execution
    }

    // 2. Check if new passwords match
    if (newPassword !== confirmPassword) {
      errorText.classList.remove("d-none");
      return; // Stop execution
    }

    // 3. Prevent using the old password as the new password
    if (oldPassword === newPassword) {
      alert("New password cannot be the same as the old password.");
      return;
    }

    // Success state
    alert("Password updated successfully!");
    this.reset(); // Clear the form
  });
