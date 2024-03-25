import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Products from './Components/Products';
import { Iproduct } from './interface/Product';
function App() {
  const products: Iproduct[]=[
    {
      "id": 1,
      "name": "Addidas 1",
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad884f7eec5a430985e64c5dea95cf7e_9366/Adifom_Climacool_Shoes_Black_IF3902_01_standard.jpg",
      "price": 10,
      "desc": "mo ta 1"
    },
    {
      "id": 2,
      "name": "Addidas 2",
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c3250067df644209a54da9b49206d006_9366/Gamecourt_2.0_Tennis_Shoes_Black_IG9567_01_standard.jpg",
      "price": 20,
      "desc": "mo ta 2"
    },
    {
      "id": 3,
      "name": "Addidas 3",
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg",
      "price": 20,
      "desc": "mo ta 2"
    },
    {
      "id": 4,
      "name": "Addidas 4",
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/003e26ea7818421aad5dc343cab6d047_9366/AlphaEdge_Shoes_Black_IF7292_01_standard.jpg",
      "price": 20,
      "desc": "mo ta 2"
    },

  ]
  
  return (
    <>
    <div className='container mx-auto px-4'>
    <Header/>
    <Banner/>
    {/* <About/>
    <Products products={products}/> */}
    </div>
    </>
    );
}

export default App;
