class Figura {
    width
    length
    radius
    area

    calculateArea() {
        this.area = this.width * this.length
        console.log(this.area)
    }

    constructor(width, length, radius) {
        this.width = width
        this.length = length
        this.radius = radius
    }
}

class Rectangle extends Figura {
    height

    calculateArea() {
        this.area = this.width * this.length * this.height
        console.log(this.area)
    }

    constructor(width, length, height) {
        super(width, length)
        this.height = height
    }

}

class Circle extends Figura {

    calculateArea() {
        this.area = Math.PI * Math.pow(this.radius, 2)
    }


    constructor(width, length, radius) {
        super(width, length, radius)
    }

}


class Circle2 extends Figura {

    calculateArea() {
        this.area = Math.PI * Math.pow(this.radius, 2)
    }


    constructor(radius) {
        this.radius = radius
    }

}









const circle1 = new Circle(0, 0, 8)

console.log(circle1)

circle1.calculateArea()

console.log(circle1.area)

