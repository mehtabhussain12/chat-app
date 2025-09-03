
import { auth, db } from "../config.js";
import { collection, onSnapshot } from "../firestore.js";

function displayAllUsers() {
  const usersRef = collection(db, "users");
  let friendsList = document.getElementById("friendsList");
  onSnapshot(usersRef, (snapshot) => {
    friendsList.innerHTML = "";
    snapshot.forEach((doc) => {
      const userData = doc.data();
      friendsList.innerHTML += ` <div class="p-3 flex items-center space-x-3 rounded-2xl bg-blue-100/50 hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
                    <img class="w-12 h-12 rounded-full object-cover" src="https://placehold.co/48x48/60a5fa/ffffff?text=U1" alt="User 1">
                    <div class="flex-1">
                        <div class="flex justify-between items-center">
                            <h3 class="font-semibold text-gray-900">${userData.username || userData.name || "No Name"}</h3>
                            <span class="text-xs text-gray-500">Just now</span>
                        </div>
                        <p class="text-sm text-gray-600 truncate">Hey, how's it going?</p>
                    </div>
                </div>
      `;   
    });
  });
}

displayAllUsers();
