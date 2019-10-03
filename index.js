class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
        
    }

    get countSides() {
        return this.count
    }

    get perimeter() {
        return this.sides.reduce(sumAdder, 0 )
    
        function sumAdder(total, number){
            return total + number
        }
    }
        
}



class Triangle extends Polygon {

    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]

        if (this.count !== 3) {
            return false
        } else {
            if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
                return true
            } else {
                return false
            } 
        }
    }

}

class Square extends Polygon{

    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        
        if (this.count !== 4){
            return false
        } else {
            if ((side1 === side2) && (side3 === side4) &&(side1 === side3)){
                return true
            } else {
                return false
            }
        }
    }

    get area(){
        return (this.sides[0] * this.sides[1])
    }
}