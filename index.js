// Your code here

class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }

    get countSides(){
        return this.sidesArray.length
    }

    get perimeter(){
        return this.sidesArray.reduce(sideSum, 0)

        function sideSum(total, num){
            return total + num
        }
    }
}

class Triangle extends Polygon {
    get isValid(){

        if (this.countSides === 3) {
            let side1 = this.sidesArray[0]
            let side2 = this.sidesArray[1]
            let side3 = this.sidesArray[2]

            if ((side1 + side2 > side3) && (side1 < side2 + side3) && (side1 + side3 > side2)){
                return true
            } else {
                return false
            }
                

        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.countSides === 4){
            const square = this.sidesArray.every(side => side === this.sidesArray[0])
            return square ? true : false
        } else {
            return false
        }
    }

    get area() {
        if(this.isValid){
            return this.sidesArray[0] ** 2
        } else {
            return undefined
        }
    }
}