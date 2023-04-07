import React from 'react';
import Home from './Component/Home/Home';
import { Box } from '@mui/material';
import Footer from './Component/Footer/Footer';
import NavbarCof from './Component/Navbar/Navbar/Navbar';
import Abautus from './Component/Abaoutus/Abautus';

const App = () => {
  return (
    <Box sx={{backgroundColor: '#F2F2F2'}}>
      <NavbarCof/>
      {/* <Home/> */}
      <Abautus/>
      <Footer/>
    </Box>
  );
}

export default App;
