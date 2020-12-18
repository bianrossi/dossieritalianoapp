import '../styles/App.css';

import Carrito from '../assets/logohuella.png';


const CartWidget = ({action}) => {
    return (
      <div className = "container" onClick={action}>
        <h3 className = "textoCarrito">Carrito</h3>
        <img src={Carrito} alt="carrito" className = "carrito"/>
        <span>0</span>
      </div>
    ); 
  }

export default CartWidget;