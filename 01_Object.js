const car = {
    name: "Bentley",
    ph: 180,
    start: () => {
        console.log("Engine is started.");
    },
    stop: () => {
        console.log("Engine is stopped.");
    },
};

console.log(car.name);
console.log(car.ph);
car.start;
car.stop;
car.start();
car.stop();
