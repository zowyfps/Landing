import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
 
const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  
  if (cart.length === 0){
    return (
      <>
      <p>Carrito Vacio!</p>
      <Link to='/'>Hacer Compras</Link>
      </>
    );
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }

      <p>
        total:{totalPrice()} 
      </p>
   
    </>
  );
}

export default Cart