import React from 'react';
import Navbar from "./Component/Navbar/Navbar/Navbar"  
import Home from './Component/Home/Home';
import { Box } from '@mui/material';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <Box sx={{backgroundColor: '#F2F2F2'}}>
      {/* <Navbar/> */}
      <Home/>
      <Footer/>
    </Box>
  );
}

export default App;
