import { db } from "./firebase.js";
import { ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const votesRef = ref(db, "votes");

onValue(votesRef, (snapshot) => {
  const data = snapshot.val() || { salad: 0, potato: 0 };

  document.getElementById("salad").textContent = data.salad;
  document.getElementById("potato").textContent = data.potato;
});

window.vote = function(party) {
  if (localStorage.getItem("voted")) {
    alert("Вы уже голосовали!");
    return;
  }

  runTransaction(votesRef, (data) => {
    if (!data) data = { salad: 0, potato: 0 };
    data[party]++;
    return data;
  });

  localStorage.setItem("voted", "yes");
  alert("Спасибо за голос!");
};