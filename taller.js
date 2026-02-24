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
let {nombre: personaNombre, profesion: personaProfesion} = persona;
console.log(`${personaNombre} es ${personaProfesion}`)

//Exercise number thirteen
let {marca, modelo} = carro;
console.log(`Froshi no tiene un carro ${marca} con modelo ${modelo} :(`)

//Exercise number fourteen
let {propietario: {nombre: propietarioNombre, edad: propietarioEdad}} = carro;
console.log(`El propietario ${propietarioNombre} tiene ${propietarioEdad} años`);

//Exercise number fifteen

function nameOld ({nombre, edad}){
    console.log(`Holaaa ${nombre}, tienes ${edad} años verdad?`)
}

nameOld(persona);

//Exercise number sixteen

function propietarioParametro({propietario = {nombre, edad}}){
    console.log(`El propietario ${nombre} creo que tenía ${edad} años uwu`)
}

propietarioParametro(carro);

//Exercise number seventeen

let {nombre: nombrePersona, edad: edadPersona} = persona;

console.log(`${nombrePersona} tiene ${edadPersona} años`)

//Exercise number eighteen
let personaDiferente = {...persona, edad: 27}
console.log(`La persona ${persona.nombre} es una persona diferente, ahora tiene ${personaDiferente.edad} años, increible :0`);

//Exercise number nineteen

let objectTest = {
    name: "Froshiiiiii",
    msgFr: {
        msg: "Froshi cambiará este mensaje"
    }
}
let carroDiferente = { 
    ...carro, 
    propietario: { ...carro.propietario, edad: 30 } 
};
console.log(`El propietario ahora ya tiene ${carroDiferente.propietario.edad}, antes tenía ${carro.propietario.edad}`);

//Exercise number twenty, finally end
let book0 = {
    titulo: "Fumetsu no anata e",
    autor: {
        nombreAutor: "Yoshitoki Oima",
        edadAutor: 36
    },
    editorial: {
        nombreEditorial: "Kodansha",
        anioEditorial: 2016
    }
}
function book1({titulo, autor: {nombreAutor, edadAutor}, editorial: {nombreEditorial, anioEditorial}}){
    console.log(`El manga "${titulo}" fue escrito por ${nombreAutor} de ${edadAutor} años, y publicado por la editorial ${nombreEditorial} en el año ${anioEditorial}.`);
}

book1(book0);