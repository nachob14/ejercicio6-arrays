// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ['Huevos', 'Arroz', 'Carne', 'Agua', 'Detergente', 'Servilletas'];
console.log(listaCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push('Aceite de girasol');
console.log(listaCompra)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: 'Volver al futuro', director: 'Robert Zemeckis', fecha: new Date(1985, 12, 26)}, 
    {titulo: 'Pulp Fiction', director: 'Quentin Tarantino', fecha: new Date(1995, 02, 16)}, 
    {titulo: 'Interestelar', director: 'Christopher Nolan', fecha: new Date(2014, 11, 06)}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasNuevas = peliculas.filter(peliculas => peliculas.fecha > new Date(2010, 01, 01));
console.log(peliculasNuevas);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresPeliculas = peliculas.map(peliculas => peliculas.director)
console.log(directoresPeliculas);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulosPeliculas = peliculas.map(peliculas => peliculas.titulo);
console.log(titulosPeliculas);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosMasDirectores = directoresPeliculas.concat(titulosPeliculas);
console.log(titulosMasDirectores);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const titulosMasDirectoresConFactor = [...directoresPeliculas, ...titulosPeliculas];
console.log(titulosMasDirectoresConFactor);
