import { signInWithEmailAndPassword } from "../auth.js";
import { auth } from "../config.js";

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const submitLogin = document.getElementById('submitLogin');

submitLogin.addEventListener('click', async(e)=>{
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );
    const user = userCredential.user;
    console.log("User logged in with ID:", user.uid);
    alert("Login successful!");
    window.location.href = "../pages/profile.html";
  } catch (error) {
    console.error("Error during login:", error);
    alert(error.message);
  }
})
