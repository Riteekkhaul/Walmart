import React,{ useEffect} from 'react';
import './App.css';
import { Routes , Route  } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import AllProducts from './Pages/AllProducts';
import LoginSignUp from './Pages/LoginSignUp';
import Account from './Pages/Account';
import store from './store'
import { loadUser } from './actions/userAction';
import UserOptions from './components/Layout/UserOptions';
import { useSelector } from "react-redux";


const App = () => {
  const { isAuth, user } = useSelector((state) => state.user);

  useEffect(() => {
     store.dispatch(loadUser());
  }, []);
  
  return(
    <Routes>
      {isAuth && <UserOptions user={user} />}
      <Route path='/' element={<Home />}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='/products' element={<AllProducts />}/>
      <Route path="/products/:keyword" element={<AllProducts />} />
      <Route path="/login" element={<LoginSignUp />} />
      <Route path='/account' element={<Account />}/>
    </Routes>
  )};

export default App;






