import {Link} from 'react-router-dom';

const Header = () => {
  return (
     <header>
     <img src="../images/logo.jpg" width={80} id="logo" alt="logo revealed tienda"/>
     <h1>Revealed: venta de Indumentaria</h1>
      <nav id="links">
  
        <Link to="empresa.html">Empresa</Link>
        <Link to="#productos">Productos</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/micuenta">Mi cuenta</Link>
        <Link to="/contacto#contacto">Contacto</Link> 
       
        
      </nav>
  
      <hr /> 
      
    </header>
   );
}

export default Header; 

