window.onload = function () {
    console.log("This file is connected");
var glow = true;

   function moveLeft() {
        $(".w-tank").css({ "left": "-=50px" });  // Move the image 50 pixels to the left
    }

    $(".w-tank").hover(moveLeft);
}
 