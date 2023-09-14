class Persona {
    nombre
    edad
    profesion

    constructor(nombre, edad, profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

}

const enrique = new Persona('Enrique', 27, 'escritor')
const laura = new Persona('Laura', 27, 'abogada')

console.log(enrique, laura)