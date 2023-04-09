import React from 'react';
import { Box, Typography } from '@mui/material';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Subscribe from './Subscribe';
const Beantype = () => {

      const[son,setson] = useState([
        {
            son: '01',
            harf: 'Preferences',
        },
        {
            son: '02',
            harf: 'Bean Type',
        },
        {
            son: '03',
            harf: 'Quantity',
        },
        {
            son: '04',
            harf: 'Grind Option',
        },
        {
            son: '05',
            harf: 'Deliveries',
        },
      ])
    return (
        <div>
            <Box>
                <Subscribe/>
            </Box>
             <Box display={'flex'} justifyContent={'center'} mt={10}>
                <Box width={'82%'} display={"flex"} justifyContent={"space-between"}>
                <Box width={'23%'} >
                    </Box>
                <Box width={'70%'}>

                    <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'} gap={5}>
                        <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '40px',lineHeight: '48px',color: '#83888F'}}>What type of coffee?</Typography>
                        <ExpandMoreIcon style={{color: '#0E8784',fontSize: '40px',}}/>
                    </Box>
                    <br /><br />
                    <Box display={'flex'} gap={2.5}>
                    <Box width={"30%"} sx={{borderRadius: '10px',backgroundColor: '#F4F1EB',cursor: 'pointer'}} p={3}>
                      <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '60px',color: '#333D4B'}}>Single Origin</Typography>
                      <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>Compatible with <br /> Nespresso systems and <br /> similar brewers</Typography>
                      <br /><br />
                    </Box>
                    <Box width={"30%"} sx={{borderRadius: '10px',backgroundColor: '#0E8784',cursor: 'pointer'}} p={3}>
                      <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '60px',color: '#FFFFFF'}}>Decaf</Typography>
                      <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#FFFFFF'}}>For pour over or drip <br /> methods like Aeropress, <br /> Chemex, and V60</Typography>
                      <br /><br />
                    </Box>
                    <Box width={"30%"} sx={{borderRadius: '10px',backgroundColor: '#F4F1EB',cursor: 'pointer'}} p={3}>
                      <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '60px',color: '#333D4B'}}>Blended</Typography>
                      <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>Dense and finely ground <br /> beans for an intense, <br /> flavorful experience</Typography>
                      <br /><br />
                    </Box>
                    </Box>

                </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Beantype;
