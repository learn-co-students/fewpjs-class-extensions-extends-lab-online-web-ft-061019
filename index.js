// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        let totalPerimeter = 0;
        for (let i = 0; i < this.countSides; i++){
            let side = this.sides[i];
            totalPerimeter += side;
        }
        return totalPerimeter;
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.countSides !== 4){
            return;
        }

        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
        let side4 = this.sides[3];

        return ((side1 === side2) && (side1 === side3) && (side2 === side3) && (side3 === side4));
    }

    get area(){
        if (this.isValid){
            let side = this.sides[0];
            return side * side;
        }
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.countSides !== 3){
            return;
        }

        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];

        return ((side1 === side2) && (side1 === side3) && (side2 === side3));
    }
}