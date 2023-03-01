for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // . specifies class is we are talking about! if mention button here only then it will work for every button in the code even if it is in footer or nav etc.

    //button press
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

        // this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        //if press button w eg. on screen the make sound

        // switch (buttonInnerHTML) {
        //     case "w":
        //         var tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //         break;
        //     case "a":
        //         var tom2 = new Audio('sounds/tom-2.mp3');
        //         tom2.play();
        //         break;
        //     case "s":
        //         var tom3 = new Audio('sounds/tom-3.mp3');
        //         tom3.play();
        //         break;
        //     case "d":
        //         var tom4 = new Audio('sounds/tom-4.mp3');
        //         tom4.play();
        //         break;
        //     case "j":
        //         var crash = new Audio('sounds/crash.mp3');
        //         crash.play();

        //         break;
        //     case "k":
        //         var snare = new Audio('sounds/snare.mp3');
        //         snare.play();
        //         break;
        //     case "l":
        //         var kick = new Audio('sounds/kick-bass.mp3');
        //         kick.play();
        //         break;
        //     default:
        //         console.log(buttonInnerHTML);
        //         break;
        // }
        //what to do when click happens

    });
}

//keyboard press
document.addEventListener("keydown", function(event) {
    //event allows us to see what triggered this function
    // alert("key was pressed");
    makeSound(event.key);
    buttonAnimation(event.key);
    //if press eg. w on keyboard the go to the event of key w
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed"); //to add css element to class 
    //here it will put changes of pressed from style.css but it won't come back
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}