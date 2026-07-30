import { db } from "./firebase.js";
import { ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const votesRef = ref(db, "votes");

// Показываем голоса в реальном времени
onValue(votesRef, (snapshot) => {
    const data = snapshot.val() || {
        salad: 0,
        potato: 0
    };

    document.getElementById("salad").textContent = data.salad || 0;
    document.getElementById("potato").textContent = data.potato || 0;
});


// Голосование
window.vote = function(party) {

    if (localStorage.getItem("voted")) {
        alert("Вы уже голосовали!");
        return;
    }

    runTransaction(votesRef, (data) => {

        if (data === null) {
            data = {
                salad: 0,
                potato: 0
            };
        }

        if (party === "salad") {
            data.salad++;
        }

        if (party === "potato") {
            data.potato++;
        }

        return data;
    });

    localStorage.setItem("voted", "true");

    alert("Спасибо за ваш голос!");
};
