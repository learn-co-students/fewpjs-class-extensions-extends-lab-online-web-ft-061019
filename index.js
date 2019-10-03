//import { access } from "fs"

// Your code here
class Polygon {
   constructor(sidesArr) {
      this.sidesArr = sidesArr
   }
 
   get countSides() {
      return this.sidesArr.length
   }

   get perimeter() {
      return this.sidesArr.reduce((acc, side) => acc + side, 0)
   }
}
class Triangle extends Polygon {
   
   get isValid() {
      if(this.countSides === 3) {
         const [side1, side2, side3] = this.sidesArr
         
         if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
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
   
   get isValid() {
      if(this.countSides === 4) {
         const valid = this.sidesArr.every(side => side === this.sidesArr[0])
         return valid ? true : false
      } else {
         return false
      }
   }

   get area() {
   
      if(this.isValid) {
         return this.sidesArr[0] ** 2
      } else {
         return undefined
      }
   }

}