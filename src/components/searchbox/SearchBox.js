import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
	return (
		<div className='search'>
		<input 
		className='input'
		id='busca' 
		type='search' 
		placeholder='Pesquisar produtos'
		onChange={searchChange}
		/>

		</div>
		);
		
}

export default SearchBox;