let DragBox = document.getElementById("drag_box");

let initialX = 0,
  initialY = 0;
let moveBox = false;

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

DragBox.addEventListener(events[deviceType].down, e => {
  e.preventDefault();
  console.log(e);

  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  console.log(initialX);
  console.log(initialY);
  moveBox = true;
});

DragBox.addEventListener(events[deviceType].move, e => {
  if (moveBox) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    DragBox.style.top = DragBox.offsetTop - (initialY - newY) + "px";
    DragBox.style.left = DragBox.offsetLeft - (initialX - newX) + "px";

    initialX = newX;
    initialY = newY;
  }
});

DragBox.addEventListener(
  events[deviceType].up,
  (stopMovement = e => {
    moveBox = false;
  })
);

DragBox.addEventListener("mouseleave", stopMovement);

DragBox.addEventListener(events[deviceType].up, e => {
  moveBox = false;
});
