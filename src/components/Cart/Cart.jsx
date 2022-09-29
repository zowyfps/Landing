import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
 
const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name:'rociozoe',
      email:'rociozoe@gmail.com',
      phone:'1133851995',
      addres:'dinamarca 1134',

    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then (({ id }) => console.log(id))
  }
  
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
      <button onClick={handleClick}>Emitir Compra</button>
    </>
  );
}

export default Cart