const productos = [
  {
    id: "abrigo-01",
    titulo: "Abrigo 01",
    imagen: "../assets/abrigos/1.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },

  {
    id: "abrigo-02",
    titulo: "Abrigo 02",
    imagen: "../assets/abrigos/2.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-03",
    titulo: "Abrigo 03",
    imagen: "../assets/abrigos/3.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-04",
    titulo: "Abrigo 04",
    imagen: "../assets/abrigos/4.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "abrigo-05",
    titulo: "Abrigo 05",
    imagen: "../assets/abrigos/5.jpg",
    categoria: {
      nombre: "Abrigos",
      id: "abrigos",
    },
    precio: 1000,
  },
  {
    id: "camiseta-01",
    titulo: "Camiseta 01",
    imagen: "../assets/remeras/1.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-02",
    titulo: "Camiseta 02",
    imagen: "../assets/remeras/2.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-03",
    titulo: "Camiseta 03",
    imagen: "../assets/remeras/3.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-04",
    titulo: "Camiseta 04",
    imagen: "../assets/remeras/4.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-05",
    titulo: "Camiseta 05",
    imagen: "../assets/remeras/5.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-06",
    titulo: "Camiseta 06",
    imagen: "../assets/remeras/6.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-07",
    titulo: "Camiseta 07",
    imagen: "../assets/remeras/7.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "camiseta-08",
    titulo: "Camiseta 08",
    imagen: "../assets/remeras/8.jpg",
    categoria: {
      nombre: "Camisetas",
      id: "camisetas",
    },
    precio: 1000,
  },
  {
    id: "pantalon-01",
    titulo: "Pantalón 01",
    imagen: "../assets/pantalones/1.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-02",
    titulo: "Pantalón 02",
    imagen: "../assets/pantalones/2.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-03",
    titulo: "Pantalón 03",
    imagen: "../assets/pantalones/3.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-04",
    titulo: "Pantalón 04",
    imagen: "../assets/pantalones/4.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
  {
    id: "pantalon-05",
    titulo: "Pantalón 05",
    imagen: "../assets/pantalones/5.jpg",
    categoria: {
      nombre: "Pantalones",
      id: "pantalones",
    },
    precio: 1000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria")

function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Agregar</button>
        </div>
    `;
    contenedorProductos.append(div);
  });
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
      cargarProductos(productosBoton);

    } else {
      cargarProductos(productos);
    }
  })
})

// const contenedorProductos = document.querySelector("#contenedor-productos");
// const botonCategorias = document.querySelectorAll(".boton-categoria")
// function cargarProductos(productosElegidos) {

//     contenedorProductos.innerHTML ="";

//     productosElegidos.forEach(producto => {
//         const div = document.createElement('div');
//         div.classList.add('producto');
//         div.innerHTML = `
// <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
// <div class="producto-detalles">
//     <h3 class="producto-titulo">${producto.titulo}</h3>
//     <p class="producto-precio">$${producto.precio}</p>
//     <button class="producto-agregar" id="${producto.id}" >Agregar</button>
// </div>
//         `;
//         contenedorProductos.append(div);
//     })
// }
// cargarProductos(productos);

//   botonCategorias.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//       botonCategorias.forEach(boton => boton.classList.remove("active"));
//       e.currentTarget.classList.add("active");

//       if (e.currentTarget.id != 'todos') {
//         const productoCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
//         cargarProductos(productoCategoria);
//       } else {
//         cargarProductos(productos)
//       }

//     })
//   },
// )
