import React from 'react';
import Navbar from "./Component/Navbar/Navbar/Navbar"  
import Home from './Component/Home/Home';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={{backgroundColor: '#F2F2F2'}}>
      {/* <Navbar/> */}
      <Home/>
    </Box>
  );
}

export default App;
