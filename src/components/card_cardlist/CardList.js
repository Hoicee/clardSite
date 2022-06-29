import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({produtos}) => {

	return(
	<div className="cent">
	  {produtos.map((produto, i) => {
		return (<Card 
		key={i} 
		id={produtos[i].id} 
		nome_produto={produtos[i].nome_produto} 
		valor={produtos[i].valor}
		img = {produtos[i].img}/>
		);
	})

	}
  	</div>

	);

}

export default CardList;