const canvas = document.querySelector("#myCanvas");

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
  canvas.height = window.innerHeight;
  canvas.width = 200;
  car.update();
  car.draw(ctx);
  requestAnimationFrame(animate);
}
