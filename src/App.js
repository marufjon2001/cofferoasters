import React from 'react';
import Home from './Component/Home/Home';
import { Box } from '@mui/material';
import Footer from './Component/Footer/Footer';
import NavbarCof from './Component/Navbar/Navbar/Navbar';
import Abautus from './Component/Abaoutus/Abautus';
import Subscribe from './Component/Menyu/Subscribe/Subscribe';
import Beantype from './Component/Menyu/Subscribe/Beantype';
import { Route, Routes } from 'react-router-dom';
import Menu from './Component/Menyu/Menu';

const App = () => {
  return (
    <Box sx={{backgroundColor: '#F2F2F2'}}>
      <NavbarCof/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Abaut_us/' element={<Abautus/>}/>
        <Route path='Subscribe' element={<Menu/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
