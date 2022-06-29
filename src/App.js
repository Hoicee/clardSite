import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './containers/mainpage/MainPage';
import Login from './containers/signup_login/Login';
import SignUp from './containers/signup_login/SignUp';
//import SecPage from './containers/secpage/SecPage';
import PagProdutos from './containers/pagprodutos/PagProdutos';
import Carrinho from './containers/carrinho/carrinho';
import { CartProvider } from './context/cartContext';
import { UserProvider } from './context/userContext';


class App extends Component{

  render() {

    return (
    <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>        
          <Route path="/produto-:produtoId" element={<PagProdutos />}/>
          <Route path="/carrinho" element={<Carrinho />}/>

          {/*<Route path="/novidades" element={<SecPage />}/>*/}

        </Routes>
      </BrowserRouter>
    </CartProvider>
    </UserProvider>
  )

  }

}

export default App;
