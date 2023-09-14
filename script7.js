class Animal {

    hablar() {
        console.log('el animal esta hablando')
    }

}

class Perro extends Animal {

    hablar() {
        console.log('guau guau')
    }

}

class Gato extends Animal {

    hablar() {
        console.log('miau miau')
    }

}

const perro = new Perro()

const gato = new Gato()


const perroDiv = document.querySelector("#perro")

const gatoDiv = document.querySelector("#gato")

perroDiv.addEventListener('click', () => {
    perro.hablar()
})

gatoDiv.addEventListener('click', () => {
    gato.hablar()
})