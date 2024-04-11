import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddProductPage from './pages/AddProduct';
import EditProductPage from './pages/EditProduct';
import {ToastContainer} from 'react-toastify'
import Header from './component/common/header';
import NavBar from './component/common/navbar';
import MyInfo from './pages/MyInfo';
import Footer from './component/common/footer';
import { useEffect, useState } from 'react';

function App() {
  
  
  return (
      <>
      <Header/>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='' element={<HomePage />}></Route>
          <Route path='/create-product' element={<AddProductPage />}></Route>  
          <Route path='/edit-product' element={<EditProductPage />}></Route>
          <Route path='/my-info' element={<MyInfo/>}></Route>
        </Routes>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
      
      <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
