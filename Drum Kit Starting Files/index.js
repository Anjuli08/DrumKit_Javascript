for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // . specifies class is we are talking about! if mention button here only then it will work for every button in the code even if it is in footer or nav etc.

    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        alert("I got clicked");

        //what to do when click happens
    });
}