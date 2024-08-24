const productos = [
    {
      id: 1,
      nombre: "Harry Potter 1",
      descripcion: "Al cumplir 11 años, Harry Potter descubre que es un mago y que le esperan como alumno en la Escuela Hogwarts de Magia y Hechicería.",
      precio: "100",
      categoria: "magia",
      stock: 10,
      imagen: "/src/imagen/harry.jpg",
    },
    {
      id: 2,
      nombre: "Harry Potter 5",
      descripcion: "Harry Potter regresa por quinto año a Hogwarts aún sacudido por la tragedia ocurrida en el Torneo de los Tres Magos.",
      precio: "120",
      categoria: "magia",
      stock: 10,
      imagen: '/src/imagen/harry5.jpg'
    },
    {
        id: 3,
        nombre: "Narnia 1",
        descripcion: "La historia narra las aventuras de cuatro hermanos: Lucy, Edmund, Susan y Peter, que durante la Segunda Guerra Mundial descubren el mundo de Narnia, al que acceden a través de un armario mágico.",
        precio: "150",
        categoria: "aventura",
        stock: 10,
        imagen: '/src/imagen/narnia.jpg'
      },
      {
        id: 4,
        nombre: "Narnia 2",
        descripcion: "El príncipe Caspian, joven heredero del trono de los telmarinos, vuelve a convocar a los cuatro niños en Narnia.",
        precio: "140",
        categoria: "aventura",
        stock: 10,
        imagen: '/src/imagen/narnia2.jpg'
      }
    ]


  const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(productos)
        }, 800);
    });
  };

  export default obtenerProductos