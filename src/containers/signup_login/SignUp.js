import React, {useEffect} from 'react';
import './SignUp.css';
import Logo from '../../images/clard_sem_fundo.png';
import { Link } from 'react-router-dom';

function SignUp(){


	const cadastrar = () => {

	var nome_completo = document.getElementById('nome_completoo').value;
	var email = document.getElementById('emaill').value;
	var senha = document.getElementById('senhaa').value;
	var telefone = document.getElementById('telefonee').value;
	var cpf = document.getElementById('cpff').value;

	if(nome_completo.trim() !== "" || email.trim() !== "" || senha.trim() !== "" || telefone.trim() !== "" || cpf.trim() !== ""){		

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		  "nome_completo": nome_completo,
		  "email": email,
		  "senha": senha,
		  "telefone": telefone,
		  "cpf": cpf
		});

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch("http://localhost:9001/api/auth/signup", requestOptions)
		  .then(response => response.text())
		  .then(result => {

		  	var oResult = JSON.parse(result);
		  	alert(oResult.message); 

		  	window.location.href= '/login';

		  })
		  .catch(error => console.log('error', error));


	}else{
	
		alert('Preencha todos os dados corretamente');

	}

}

	useEffect(() => {

		if(localStorage.getItem('chave') !== null && localStorage.getItem('chave').trim() !== ""){

			document.getElementById('cForm').style.display = "none";
			document.getElementById('aviso2').style.display = "inherit";

		} else {

			document.getElementById('cForm').style.display = "inherit";
			document.getElementById('aviso2').style.display = "none";

		}

	})

	return(

		<div className='SignUpPage'>
		
		<div className='SignUp'>
		<Link to='/'> <img className='logot' src={Logo} alt='logo'/></Link>

		<h2 className='aviso2' id='aviso2' > Já existe um usuário logado, caso queira trocar de conta, faça o logout na página príncipal. </h2>

			<div className='cForm' id='cForm'>
			
			<input id='nome_completoo' className='cinputs' type='text' name='nome_completo' placeholder='NOME COMPLETO' required/><br/>
			<input id='emaill' className='cinputs' type='email' name='email' placeholder='E-MAIL' required /><br/>
			<input id='telefonee' className='cinputs' type='text' name='telefone' placeholder='NÚMERO DE TELEFONE' required/><br/>
			<input id='cpff' className='cinputs' type='text' name='cpf' placeholder='CPF' required/><br/>
			<input id='senhaa' className='cinputs' type='password' name='senha' placeholder='SENHA' required/>
			<button id='btnCadss' onClick={cadastrar} className='btnCads'>CRIAR CONTA</button><br/>
			<Link className='btnVoltar'to='/login'>Voltar</Link>
			
			</div>


		</div>



		</div>

		)

}

export default SignUp;