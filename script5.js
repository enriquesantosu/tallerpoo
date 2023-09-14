class Address {
    constructor(street, city, zip) {
        this.street = street
        this.city = city
        this.zip = zip
    }


}


class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }
}


const enriqueAddress = new Address('75th', 'Bogotá', 00000)

const enrique = new Person('enrique', 27, enriqueAddress)

console.log(enrique)