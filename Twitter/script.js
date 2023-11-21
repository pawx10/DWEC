// Obtiene los tweets del almacenamiento local o crea un array vacío si no hay datos
const tweetsArray = localStorage.getItem("tweets") ? JSON.parse(localStorage.getItem("tweets")) : [];
console.log(tweetsArray);

// Evento al hacer click en el botón "Enter" para crear un tweet
document.querySelector("#enter").addEventListener("click", () => {
    const tweet = document.querySelector("#tweet");
    const tweetContent = tweet.value.trim().toLowerCase();

    // Verifica si el tweet está vacío o tiene contenido no válido
    if (tweetContent === "" || tweetContent === "camaron" || tweetContent === "camaron de la isla" || tweetContent === "el fary") {
        alert("Tweet no válido. Por favor, ingresa un contenido diferente.");
    } else {
        createtweet(tweet);
    }
});

// Evento al hacer click en el botón "Reset" para eliminar todos los tweets
document.querySelector("#reset").addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres eliminar todos los tweets?")) {
        resetTweets();
    }
});

// Función para mostrar los tweets en la interfaz
function displayTweets() {
    let tweets = "";
    for (let i = 0; i < tweetsArray.length; i++) {
        if (tweetsArray[i].trim() !== "") {
            tweets += `<div class="tweet">
                <div class="input-controller">
                    <textarea disabled>${tweetsArray[i]}</textarea>
                    <div class="edit-controller">
                        <i class="fas fa-trash deleteBtn"></i>
                    </div>
                </div>
            </div>`;
        }
    }
    document.querySelector(".tweet-list").innerHTML = tweets;
    activateDeleteListeners();
}

// Agrega oyentes para borrar tweets individualmente
function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {
            deleteTweet(i);
        });
    });
}

// Función para borrar un tweet
function deleteTweet(i) {
    tweetsArray.splice(i, 1);
    localStorage.setItem("tweets", JSON.stringify(tweetsArray));
    displayTweets();
}

// Función para crear un nuevo tweet
function createtweet(tweet) {
    tweetsArray.push(tweet.value);
    localStorage.setItem("tweets", JSON.stringify(tweetsArray));
    displayTweets();
}

// Función para mostrar la fecha actual
function displaydate() {
    let date = new Date();
    date = date.toString().split(" ");
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

// Al cargar la ventana, muestra la fecha y los tweets
window.onload = function () {
    displaydate();
    displayTweets();
};

// Función para resetear todos los tweets
function resetTweets() {
    if (tweetsArray.length > 0) {
        tweetsArray.length = 0;
        localStorage.removeItem("tweets");
        displayTweets();
        alert("Todos los tweets han sido eliminados correctamente.");
    } else {
        alert("No hay tweets para eliminar.");
    }
}
