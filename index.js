// Your code here

class Polygon {

    constructor(sides) {
        this.sides = sides
        this.numOfSides = this.sides.length
    }

    get countSides() {
        return this.numOfSides
    }

    get perimeter() {
        return this.sides.reduce((sideTotal, side) => sideTotal + side, 0)
    }

};

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2
        } else {
            return undefined
        }
    }
}
