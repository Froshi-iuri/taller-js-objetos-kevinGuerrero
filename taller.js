//Exercise number one
let nombre = "Froshi";
let edad = 23;
let ciudad = "Popayán";
console.log(`Holaaaa :3, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}, byeee ^u^`);

//Exercise number two
function multiply (multiply1, multiply2, multiply3, multiply4, multiply5){
    let result = multiply1 * multiply2 * multiply3 * multiply4 * multiply5;
    console.log(`Los números que ingresaste se multiplicaron entre sí y el resultado es: ${result}`)
    return `Los números que ingresaste se multiplicaron entre sí y el resultado es: ${result}`
}
console.log(multiply(5, 10, 10, 3, 9));

//Exercise number three
function know (nombre, edad){
    return `Holaaa ${nombre}, sabias que tenías ${edad} años?, bueno, yo sí sabía OwO`
}

console.log(know(nombre, edad));

//Exercise number five
const persona = {
    nombre: "Froshiru",
    edad: "21",
    profesion: "artista"
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

//Exercise number six
persona.telefono = "3013684012";
console.log(persona.telefono);

//Exercise number seven
function getPeople (persona){
    console.log(`Hola ${persona.nombre}, ya sé que eres ${persona.profesion} OwO`);
    return `Hola ${persona.nombre}, ya sé que eres ${persona.profesion} OwO`
}
getPeople(persona);

//Exercise number eight
const estudiante = {
    nombre: "Froshi-iuri",
    notas: {
        matematicas: 4.0,
        ingles: 4.0
    }
}

console.log(`El estudiante ${estudiante.nombre} obtuvo ${estudiante.notas.matematicas} en matemáticas y ${estudiante.notas.ingles} en inglés`);
//Exercise number nine
const carro = {
    marca: "Toyota",
    modelo: 2016,
    propietario: {
        nombre: "Froshiru",
        edad: 21
    }
}

console.log(`El propietario del carro ${carro.marca} es ${carro.propietario.nombre}`)

//Exercise number ten
function objCar(carro){
    console.log(`El carro ${carro.marca} es de ${carro.propietario.nombre}`);
    return `El carro ${carro.marca} es de ${carro.propietario.nombre}`
}

console.log(objCar(carro));

//Exercise number eleven

carro.propietario.edad = 25
console.log(carro.propietario.edad);

//Exercise number twelve
function destructuring (persona){
    let {nombre, profesion} = persona;
    console.log(`${nombre} es ${profesion}`) //Se hizo en función porque la variable nombre ya habia sido creada antes.
}
destructuring(persona);

//Exercise number thirteen
let {marca, modelo} = carro;
console.log(`Froshi no tiene un carro ${marca} con modelo ${modelo} :(`)