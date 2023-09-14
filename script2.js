class Carro {
    marca
    modelo

    arrancar() {
        console.log('vroom vroom')
    }
    detener() {
        console.log('iiiii')
    }

    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

}

class Coche extends Carro {
    acelerar() {
        console.log('vrooooom')
    }
}

const ferrari = new Carro
const audi = new Coche

ferrari.arrancar()
ferrari.detener()
audi.acelerar()
