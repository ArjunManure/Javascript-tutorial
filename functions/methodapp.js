const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return 4 * side;
    }
}
let areaOfSqurae = square.area(10);
let perimeterOfSqurae = square.perimeter(10);
console.log(areaOfSqurae);
console.log(perimeterOfSqurae);






const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}
