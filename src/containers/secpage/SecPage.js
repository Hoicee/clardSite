/*
import React,{useState} from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import {produtos} from '../../components/produtos';
import CardList from '../../components/card_cardlist/CardList';
import Card from '../../components/card_cardlist/Card';

function SecPage(){

	const [novidades, setNovidades] = useState(produtos);


	



	return(
		<div>
			<Navbar />
			<div>	
			{novidades.map((produto, i) => {
				
				
			for (var a=3; a <= 5; a++) {
				
				return (<Card 
				key={a} 
				id={novidades[a].id} 
				name={novidades[a].name} 
				valor={novidades[a].valor}
				img = {novidades[a].img}/>
				);
			}

			})}
			</div>

		</div>

		)



}

export default SecPage;

*/