const productos = [
    {
      id: 1,
      nombre: "Harry Potter y la Piedra Filosofal",
      descripcion: "Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.",
      precio: "$17.000",
      categoria: "magia",
      stock: 10,
      imagen: "/src/imagen/harry.jpg",
    },
    {
      id: 2,
      nombre: "Harry Potter y la Orden del Fenix",
      descripcion: "",
      precio: "$18.000",
      categoria: "magia",
      stock: 10,
      imagen: '/src/imagen/harry5.jpg'
    },
    {
        id: 3,
        nombre: "Narnia el Leon, la Bruja y el ropero",
        descripcion: "",
        precio: "$15.000",
        categoria: "aventura",
        stock: 10,
        imagen: '/src/imagen/narnia.jpg'
      },
      {
        id: 4,
        nombre: "Narnia el Principe Caspian",
        descripcion: "",
        precio: "$14.000",
        categoria: "aventura",
        stock: 10,
        imagen: '/src/imagen/narnia2.jpg'
      }
    ]


  const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos)
        }, 500);
    });
  };

  export default obtenerProductos