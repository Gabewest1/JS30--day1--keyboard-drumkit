window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", playSound);
});

function playSound(event) {
    const key = event.keyCode || event.target.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key='${key}']`);
    const keyDiv = document.querySelector(`div[data-key='${key}']`);
    if(!audio) {
        return;
    } else {
        keyDiv.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
}

function removeTransition(event) {
    const key = event.target;
    key.classList.remove("playing");
}