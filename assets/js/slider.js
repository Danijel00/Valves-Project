// let slider = document.getElementById("slider");
// let innerSlider = document.getElementById("innerSlider");

// let pressed = false;
// let startX;
// let x;
// // EVENT LISTENERS
// eventListeners();

// // ALL EVENT LISTENERS
// function eventListeners() {
//   // MENU SHOW/HIDE
//   slider.addEventListener("mousedown", mouseDown);
//   slider.addEventListener("mouseenter", mouseEnter);
//   slider.addEventListener("mouseup", mouseUp);
//   slider.addEventListener("mousemove", mouseMove);
//   window.addEventListener("mouseup", () => {
//     pressed = false;
//   });

//   /*======= CHANGE HEADER BACKGROUND =======*/
// }

// // ON MOUSE CLICK
// function mouseDown(e) {
//   pressed = true;
//   startX = e.offsetX - innerSlider.offsetLeft;
//   slider.style.cursor = "grabbing";
// }

// function mouseEnter() {
//   slider.style.cursor = "grab";
// }

// function mouseUp() {
//   slider.style.cursor = "grab";
// }

// function mouseMove(e) {
//   if (!pressed) return;
//   // Prevent highlight over text
//   e.preventDefault();

//   x = e.offsetX;

//   innerSlider.style.left = `${x - startX}rem`;
// }
