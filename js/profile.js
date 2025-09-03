import { onAuthStateChanged, signOut } from "../auth.js";
import { auth } from "../config.js";

// Check if a user is logged in
function checklogin() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loadProfile(user);
    } else {
      console.log("No user is logged in.");
      window.location.href = "../pages/login.html";
    }
  });
}
checklogin();

// Load and display profile information
function loadProfile(user) {
  let profileInfo = document.getElementById("profileInfo");
  profileInfo.innerHTML = ''; // Clear previous content

  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;

    // Create and style the profile content dynamically
    const profileContent = document.createElement('div');
    
    // Add Tailwind classes for padding, border, and background
    profileContent.classList.add('p-6', 'rounded-lg', 'bg-gray-50', 'border', 'border-gray-200', 'space-y-4');

    // Create and append the profile photo
    const photoContainer = document.createElement('p');
    photoContainer.classList.add('flex', 'items-center', 'space-x-2');
    photoContainer.innerHTML = '<strong>Photo:</strong>';
    const profilePhoto = document.createElement('img');
    profilePhoto.src = user.photoURL || '../images/image.png';
    profilePhoto.classList.add('h-20', 'w-20', 'rounded-full', 'object-cover', 'border-2', 'border-white', 'shadow');
    profilePhoto.alt = 'Profile Photo';
    photoContainer.appendChild(profilePhoto);
    profileContent.appendChild(photoContainer);
    
    // Add other user details
    profileContent.innerHTML += `
      <p class="text-sm"><strong>User ID:</strong> <span class="text-gray-600 break-all">${user.uid}</span></p>
      <p class="text-sm"><strong>Display Name:</strong> <span class="text-gray-600">${displayName || 'N/A'}</span></p>
      <p class="text-sm"><strong>Email:</strong> <span class="text-gray-600">${email}</span></p>
    `;

    // Add styling based on email verification status
    const verificationStatus = document.createElement('p');
    const verificationSpan = document.createElement('span');
    if (emailVerified) {
      verificationSpan.textContent = 'Yes';
      verificationSpan.classList.add('text-green-600', 'font-semibold');
    } else {
      verificationSpan.textContent = 'No';
      verificationSpan.classList.add('text-red-600', 'font-semibold');
    }
    verificationStatus.innerHTML = '<strong>Email Verified:</strong> ';
    verificationStatus.appendChild(verificationSpan);
    profileContent.appendChild(verificationStatus);
    profileInfo.appendChild(profileContent);
  }
}

document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
    window.location.href = "../pages/login.html";
  } catch (error) {
    console.error("Logout failed:", error);
  }
});