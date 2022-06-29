import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import './PagProdutos.css';
import { Navbar } from '../../components/navbar/Navbar';
//import Card from '../../components/card_cardlist/Card';
import { produtos } from '../../components/produtos';
import { CartContext } from '../../context/cartContext';

function PagProdutos() {

	const { cart, setCart } = useContext(CartContext);

	const [nome, setNome] 	= useState("");
	const [valor, setValor] = useState(0);
	const [img, setImg] 	= useState("");
	const [idImg, setIdImg] = useState(null);
	const [posId, setPosId] = useState([]); 



	const { produtoId } = useParams();

	useEffect(() => {

		const posId = produtos.filter(produtos => produtos.id == parseInt(produtoId));
		console.log(posId);

		setNome(posId[0].name);
		setValor(posId[0].valor);
		setImg(posId[0].img);
		setIdImg(posId[0].id);

		console.log(idImg);

	},[setNome, setValor, setImg, setIdImg, cart, idImg, produtoId])

	const adicionarTest = () => {

		const itemObject = {nome, valor, img};
		setCart([...cart, itemObject]);		
	}
	

	return(

		<div>

		<Navbar />
		
		<div className='pagProdPage'>

		

			<div className='quadradao'>

				{	idImg ? 
					<img className='imgProduto' alt='imgProduto' src={ require('/home/hoice/Desktop/apiClardv6/app/public/upload/productsImg/produto-'+ idImg.toString().trim() +'.png') }  />
					:
					<h1> LOADING </h1>
				}
				
				
				<h2 className='nomeprd'>{ nome }</h2>
				
				<h3 className='valor'>Valor: R${ valor }</h3>



				

				<button onClick={adicionarTest} className='btnAdcCarrinho'>ADICIONAR AO CARRINHO</button> 

					
			</div>

		
		</div>
		</div>

		)

}

export default PagProdutos;