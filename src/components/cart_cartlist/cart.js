import React from 'react';
//import { Link } from 'react-router-dom';
import './cart.css';

const Cart = ({ nome, valor, img, remover }) => {
	return(			

			<div className='cart'>
				<img className='imagemDivertida' alt='produto'src={`${img}`}/>
				<div className='bleb'>
					<h2 className='nomecarrinho'>{nome}</h2>
					<p className='valorcarrinho'>R${valor}</p>
					<button className='btnRemoverCarrinho' onClick={() => remover(nome)}>Remover</button>
				</div>
			</div>

	);
}

export default Cart;