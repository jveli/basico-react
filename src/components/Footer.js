import React from 'react';

 function Footer ({fecha}){
 
    return(
        <footer className="abajo">
            <p> Todos los Derechos reservados &copy; {fecha}</p>
        </footer>
    );
}

export default Footer;