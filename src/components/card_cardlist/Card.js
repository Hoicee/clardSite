import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ nome_produto, valor, id, img }) => {


	var imagemArquivo = require('/home/hoice/Desktop/apiClardv6/app/public/upload/productsImg/produto-'+ id.toString().trim() +'.png');

	return(		

			
		<Link className='cardzao' to={`produto-${id}`}>
			<div className='card'>
				<img className='imagemLegal' alt='produto' src={imagemArquivo} />
				<div>
					<h2>{nome_produto}</h2>
					<p>R${valor}</p>
				</div>
			</div>
		</Link>


	);
}

export default Card;