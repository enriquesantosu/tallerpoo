class CuentaBancaria {
    saldo
    pin
    numeroDeCuenta

    depositar(int) {
        this.saldo += int
    }

    retirar(int) {
        if (this.saldo - int < 0) {
            console.log('saldo no es suficiente')
        } else {
            this.saldo -= int;
            console.log(`su saldo ahora es ${this.saldo}`)
        }

    }

    constructor(saldo, pin, numeroDeCuenta) {
        this.saldo = saldo
        this.pin = pin
        this.numeroDeCuenta = numeroDeCuenta
    }
}


const cuenta = new CuentaBancaria(1000, 1234, 'AB1234')


// cuenta.retirar(30.000)

// console.log(cuenta.saldo)


cuenta.retirar(1100)

