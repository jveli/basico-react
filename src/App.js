import React, {Fragment,useState} from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer'; 
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // crear listado de productos
const [productos, guardarProductos] = useState([
  {id:1, nombre:'Camisa React Para mas', precio: 50},
  {id:2  ,nombre: 'Camisa Native', precio: 20},
  {id:3,nombre:'Polito Na', precio: 15},
  {id:4,nombre:'Polito Largo', precio: 10}
]);

// State para carrito de compras 
const [ carrito, agregarProducto] = useState([]);

  //obtener nuve fecha
  const fecha = new Date().getFullYear(); 
  return (
     <Fragment>
      <Header titulo="Primera Tienda Virtual"/>
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
            key= {producto.id}
            producto = {producto}
            productos = {productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
         />
      ))} 

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer fecha={fecha}/>
      </Fragment>
  );
}

export default App;
