buttons = document.querySelectorAll(".drum ")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        keyToSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    });
}
document.addEventListener("keypress", function (event) {
    keyToSound(event.key);
    buttonAnimation(event.key);
});

function keyToSound(keyCode) {
    switch (keyCode) {
        case "w": {
            new Audio("sounds/tom-1.mp3").play().then();
            break;
        }
        case "a": {
            new Audio("sounds/tom-2.mp3").play().then();
            break;
        }
        case "s": {
            new Audio("sounds/snare.mp3").play().then();
            break;
        }
        case "d": {
            new Audio("sounds/tom-3.mp3").play().then();
            break;
        }
        case "j": {
            new Audio("sounds/tom-4.mp3").play().then();
            break;
        }
        case "k": {
            new Audio("sounds/kick-bass.mp3").play().then();
            break;
        }
        case "l": {
            new Audio("sounds/crash.mp3").play().then();
            break;
        }
        default : {
            return;
        }
    }

}

function buttonAnimation(currentKey) {
    let activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed")
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100)

}






