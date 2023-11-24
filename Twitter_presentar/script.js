//obten tweets almacenados en el local storage o iniciar un array vacio

const tweetsArray = localStorage.getItem("tweets") ? JSON.parse(localStorage.getItem("tweets")) : [];

//evento al click en el boton enter

document.querySelector('#enter').addEventListener("click", ()=>{
    
    const tweet=document.querySelector("#tweet");
    const tweetContent=tweet.value.trim().toLowerCase();

    if (tweetContent === "") {
        mostrarError("El tweet no es correcto");
    } else {
      createtweet(tweet);
    }

});

document.querySelector("#reset").addEventListener("click",()=>{
    if (tweetsArray.length > 0){
        resetTweets();
    }else{
        mostrarError("No hay tweets para borrar");
    }
}
);

function createtweet()
{
 tweetsArray.push(tweet.value);
 localStorage.setItem("tweets",JSON.stringify(tweetsArray));//guardar los tweets actualizados
 displayTweets(); //mostrar los tweets

}

function displayTweets()
{
  let tweetsHTML="";

    tweetsArray.forEach(tweet=>{
        
        if(tweet.trim()!=="")
        {
           tweetsHTML += `<div class="tweet">
                        <div class="input-controller">
                        <textarea disabled>${tweet}</textarea>
                        <div class="edit-controller">
                        <i class="fas fa-trash deleteBtn"></i>
                        </div>
                        </div>
                        </div>`;


        }

   })
document.querySelector(".tweet-list").innerHTML=tweetsHTML;
activateDeleteListeners();

}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {
            deleteTweet(i);
        });
    });
}

function deleteTweet(i) {
    tweetsArray.splice(i, 1);
    localStorage.setItem("tweets", JSON.stringify(tweetsArray));
    displayTweets();
}

function mostrarError(mensaje) {
  const errorBox = document.createElement("div");
  errorBox.classList.add("error-box");
  errorBox.textContent = mensaje;
  document.body.appendChild(errorBox);

  setTimeout(() => {
    errorBox.style.display= "none";
  }, 3000);
}

function resetTweets() {
    tweetsArray.length=0;
    localStorage.removeItem("tweets");
    displayTweets();
    
}