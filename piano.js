
class Tecla {
    constructor(nota) {
        const audioFilePath = `notas/${nota}.mp3`
        this.nota = new Audio(audioFilePath)
        this.container = document.querySelector("body")
        this.element = document.createElement("div")
        this.element.className = 'teclaPiano'
        this.container.appendChild(this.element)
        this.element.addEventListener('click', this.play.bind(this))
    }

    play() {
        this.nota.currentTime = 0;
        this.nota.play();
    }

}

const key1 = new Tecla('nota1')

const key2 = new Tecla('nota2')

const key3 = new Tecla('nota3')

const key4 = new Tecla('nota4')

const key5 = new Tecla('nota5')

const key6 = new Tecla('nota6')

const key7 = new Tecla('nota7')

const key8 = new Tecla('nota8')













// const newElement = document.createElement("div")
// document.querySelector("body").appendChild(newElement)