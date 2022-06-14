import { Component } from '@angular/core';

@Component({
    selector: 'personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})

export class Personas {

    personas: Persona[];

    constructor() {
        this.personas = [];
    }

    aniadirPersona(nombre: String, apellidos: String, edad: any, DNI: String) {

        let persona: Persona;

        if (edad === '') {
            edad = 0;
        }
        persona = new Persona(nombre, apellidos, edad, DNI);
        if (persona.esValido()) {
            this.personas.push(persona);
            console.log('Persona añadida');
        }else {
            console.log('Persona no valida');
        }


    }

    isEmpty() {
        return this.personas.length === 0;
    }

}

class Persona {

    nombre: String;
    apellidos: String;
    edad: Number;
    DNI: String;

    constructor(nombre: String, apellidos: String, edad: Number, DNI: String) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
    }

    esValido() {
        if (this.nombre === '' ||
            this.apellidos === '' ||
            this.edad === 0 ||
            this.DNI === '') {
                return false;
        }
        return true;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }

    mostrarInfo() {
        return 'Edad: ' + this.edad + ', DNI: ' + this.DNI;
    }

}
