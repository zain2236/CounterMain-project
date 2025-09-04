const counter = document.getElementById("counter");
counter = 0;
function Increase() {
  counter.value++;
}
function Reset() {
  counter.value = "0";
}
function Decrease() {
  counter.value--;
}

// --------------- FOR ANIMATION --------------

const tl = gsap.timeline();

tl.from("header", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

tl.from("nav", {
  opacity: 0,
  y: -30,
  duration: 1.5,
});

tl.from(".container", {
  y: -20,
  opacity: 0,
  duration: 0.4,
});
// tl.from(".box", {
//   x: -20,
//   opacity: 0,
//   duration: 0.3,
//   stagger: 0.5,
// });
