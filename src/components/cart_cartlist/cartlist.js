import React, {useContext} from 'react';
import Cart from './cart';
import './cartlist.css';
import { CartContext } from '../../context/cartContext';

const CartList = () => {

	const {cart, setCart} = useContext(CartContext);

	const remover = (nome) => {
		console.log(nome);
		console.log('fui clicado!');
		setCart(cart.filter(cart => cart.nome !== nome));
	}

	return(
	<div className="centi">
	  {cart.map((produto, i) => {
		return (<Cart 
		key={i}
		id={i}  
		nome={cart[i].nome} 
		valor={cart[i].valor}
		img = {cart[i].img}
		remover = {remover}/>
		);
	})

	}
  	</div>

	);

}

export default CartList;