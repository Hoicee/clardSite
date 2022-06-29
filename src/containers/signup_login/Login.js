import React, {useEffect, useContext} from 'react';
import './Login.css';
import Logo from '../../images/clard_sem_fundo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext'

function Login(){

	const { user, setUser } = useContext(UserContext);

	const login = () => {

		var email = document.getElementById('emaill').value;
		var senha = document.getElementById('senhaa').value;


		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		  "email": email,
		  "senha": senha
		});

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch("http://localhost:9001/api/auth/signin", requestOptions)
		  .then(response => response.text())
		  .then(result => {

		  		var oResponse = JSON.parse(result);

		  		if(oResponse.message){
					alert(oResponse.message);		  			
		  		}
		  		else {

		  			localStorage.setItem('chave', oResponse.accessToken);
				  	const id =				oResponse.id;
					const nome_completo =	oResponse.nome_completo;
					const email =			oResponse.email;
					const telefone =		oResponse.telefone;
					const cpf =				oResponse.cpf;

				  	const userObject = [
				  	{
				  		id: id,
				  		nome_completo: nome_completo,
				  		email: email,
				  		telefone: telefone,
				  		cpf: cpf
				  	}
				  	]
					
					localStorage.setItem('usuario', JSON.stringify(userObject));

				  	window.location.href='/';

		  		}
		  })
		  .catch(error => console.log('error', error));

	}

	useEffect(() => {

		if(localStorage.getItem('chave') !== null && localStorage.getItem('chave').trim() !== ""){

			document.getElementById('form').style.display = "none";
			document.getElementById('aviso').style.display = "inherit";

		} else {

			document.getElementById('form').style.display = "inherit";
			document.getElementById('aviso').style.display = "none";

		}

	})

	return(

		<div className='loginPage'>

			

			<div className='login'>
				<Link to='/'><img className='logo' src={Logo} alt='logo'/></Link><br/>

				<h2 className='aviso' id='aviso' > Já existe um usuário logado, caso queira trocar de conta, faça o logout na página príncipal. </h2>

				<div className='form' id='form'>

					<input id='emaill' className='linputs' type='email' name='email' placeholder='E-MAIL' required/><br/>
					<input id='senhaa' className='linputs' type='password' name='senha' placeholder='SENHA' required/><br/>
					<button onClick={login} className='btnLogin'>LOGIN</button><br/>
					<Link className='btnCad' to='/signup'>Não sou cadastrado</Link>

				</div>

			</div>


		</div>

		)

}

export default Login;