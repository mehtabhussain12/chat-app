import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "./auth.js";
import { auth, db } from "./config.js";
import { doc, setDoc } from "./firestore.js";

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const submitRegister = document.getElementById('submitRegister');


function checkAge() {
  if (age.value < 18) {
    alert("You must be at least 18 years old.");
    return false;
  }
  return true;
}

submitRegister.addEventListener('click', async (e) => {
  e.preventDefault();
  if (!checkAge()) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: username.value
    });
    await setDoc(doc(db, "users", user.uid), {
      username: username.value,
      age: age.value,
      email: email.value,
      gender: gender.value,
      createdAt: new Date().toISOString()
    });

    console.log("User registered with ID:", user.uid);
    alert("Registration successful!");
    window.location.href = "../pages/login.html";
  } catch (error) {
    console.error("Error during registration:", error);
    alert(error.message);
  }
});



