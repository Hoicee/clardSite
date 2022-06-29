import React, { useState, useEffect, useContext } from 'react';
import CardList from '../../components/card_cardlist/CardList.js';
import { Navbar } from '../../components/navbar/Navbar.js';
import SearchBox from '../../components/searchbox/SearchBox.js';
import {produtos} from '../../components/produtos.js';
import './MainPage.css';
import { UserContext } from '../../context/userContext'


function MainPage(){

  const [produtos, setProdutos] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const { user, setUser } = useContext(UserContext);


  useEffect(() => {
    fetchData();
  }, []);
  

  const fetchData = () => {
      fetch("http://localhost:9001/api/product/list")
       .then(response => response.json())
       .then(result => {
        setProdutos(result)
        console.log(result)
       })
       .catch(error => console.log('error', error));
  };
   
  const onSearchChange = (event) => {
      setSearchfield(event.target.value);
  }

  const produtosFiltrados = produtos.filter(produtos => {
      return produtos.nome_produto.toLowerCase().includes(searchfield.toLowerCase())
  })



    /*if(produtoss.length === 0){
      return <h1> loading </h1>
    }*/

    return(
    <div className="MainPage">
      <Navbar />
      <br /><br /><br /><br /><br />
      <div  className='busca'>
      <SearchBox searchChange={onSearchChange}/>
      { user ? 
      <h3 className="bemvindo">Bem vindo! {user[0].nome_completo}</h3>
      : 
      <h3 className="bemvindo">Bem vindo!</h3>          
      }

      </div>
      <CardList produtos={produtosFiltrados} />
    </div>
    )

}


export default MainPage;
