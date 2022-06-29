import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/clard_sem_fundo.png';
import { UserContext } from '../../context/userContext'



export const Navbar = () => {

	const { user } = useContext(UserContext);

	const deslogar = () => {

		localStorage.removeItem('chave');
		localStorage.removeItem('usuario');

	}

	useEffect(() => {

		if(localStorage.getItem('chave') !== null && localStorage.getItem('chave').trim() !== ""){

			document.getElementById("btnSec").style.display = "none";
			document.getElementById("btnLgt").style.display = "inline-block";

		} else {

			document.getElementById("btnSec").style.display = "inline-block";
			document.getElementById("btnLgt").style.display = "none";
		}

	})

	return(

			<div className="navbar">
					<Link to='/'><img className="navlogo" src={ logo } alt='logo'/></Link>
					<Link className="navlinks" to='/carrinho'>CARRINHO</Link>
					
					<Link  id='btnSec' className='btnSection' to='/login'>INICIAR SESSÃO</Link>
					<a  onClick={deslogar} id='btnLgt' className='btnLogout' href='/'>LOGOUT</a>

			</div>

		)




	}



