import React from 'react';
import NavbarCof from '../Navbar/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Beantype from './Subscribe/Beantype';
import Subscribe from "../Menyu/Subscribe/Subscribe"
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

const Menu = () => {
    return (
        <Box>
            <Subscribe/>
            {/* <Beantype/> */}
            <Routes>
             <Route path='Beantype' element={<Beantype/>}/>
            </Routes>
        </Box>
    );
}

export default Menu;
