class CuentaBancaria {
    constructor(saldo, pin, numeroDeCuenta) {
        this.saldo = saldo
        this.pin = pin
        this.numeroDeCuenta = numeroDeCuenta
    }

    depositar(int) {
        this.saldo += int
    }

    retirar(int) {
        this.saldo -= int
    }

}


const cuenta = new CuentaBancaria(50.0000, 1234, 'AB1234')


cuenta.retirar(30.000)

console.log(cuenta.saldo)