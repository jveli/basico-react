import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) =>{

    //agregar una function

    const{nombre,precio,id} = producto;

    const seleccionarProducto = (id) =>{
        //console.log('comprando...',id);
        const producto = productos.filter( producto => producto.id === id);
        agregarProducto([
            ...carrito,
            ...producto
        ]);
    } 
    // eliminar carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // colocar los proudctos en el state
         agregarProducto(productos)
    }  
   return (
    <div>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        {productos
        ? 
        (
            <button type="button" onClick={() => seleccionarProducto(id) }>Comprar</button>
        )
        :
        
        (
            <button type="button" onClick={() => eliminarProducto(id) }>Eliminar</button>
        )
        }
        
    </div>
    );
}
 
export default Producto;
 