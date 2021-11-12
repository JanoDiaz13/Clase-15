let log = console.log;

// Ejercicio 1
let arr = [1, 3, 4, 2, 6, 7, 9, 1, 8];
let cont = 0;

const impar = arr.filter(arr => (arr % 2) != 0);

log(impar.length);

//Ejercicio 2

let str = "hola mundo desde javascript";

function reemplazarString(string) {
    let arr2 = string.replace(/ /g, " - ").split(' ');

    return arr2;
}

log(reemplazarString(str));

//Ejercicio 3

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const par = arr3.filter(arr3 => (arr3 % 2) == 0);

log(par);

//Ejercicio 4
const pets = ['cat', 'dog', 'elephant', 'hawk', 'snake', 'cat'];

const noesGato = pets.filter(pets => pets != 'cat');

log(noesGato);

//Ejercicio 5
const productos = [{
        id: 2,
        nombre: 'Remera muy fachera',
        precio: 250
    },
    {
        id: 5,
        nombre: 'Pantalon muy fachero',
        precio: 400
    },
    {
        id: 6,
        nombre: 'Camperon invierno',
        precio: 699
    },
    {
        id: 34,
        nombre: 'Guantes negros',
        precio: 199
    },
];

let mostrarProductos = productos.map(obj => {
    let Objs = {};
    Objs = obj.nombre;

    return Objs;
})

log(mostrarProductos);

// Ejercicio 6

const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const reducer = (past, next) => past.concat(next);
console.log(data.reduce(reducer));