import React, { Fragment } from 'react'
import Header from './components/Header/Header'
import MiniBanners from './components/MiniBanners/MiniBanners';
import Extensao from './components/Extensao/Extensao';
import TipoTecnicas from './components/TipoTecnicas/TipoTecnicas';
import Salao from './components/Salao/Salao';

import './App.css';


function App() {
  return (
    <Fragment>
      <Header />
      <MiniBanners />
      <Extensao />
      <TipoTecnicas />
      <Salao />
    </Fragment>
  );
}

export default App;
