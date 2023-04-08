import { Box, Typography } from '@mui/material';
import React from 'react';
import img from "../Images/Abaout/img.png"
import img1 from "../Images/Abaout/img1.png"
import img2 from "../Images/Abaout/img2.png"
import united from "../Images/Abaout/united.png"
import canada from "../Images/Abaout/canada.png"
import australia from "../Images/Abaout/australia.png"

const Abautus = () => {
    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Box width={"90%"} position={"relative"}>
                    <Box position={"absolute"}ml={10}mt={15}>
                        <Typography style={{fontFamily:"Fraunces",fontWeight:"900",fontSize:"40px",lineHeight:"48px",color:"#FEFCF7"}}>About Us</Typography>
                        <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#FEFCF7'}}>Coffeeroasters began its journey of exotic discovery in 1999, <br /> highlighting stories of coffee from around the world. We have <br /> since been dedicated to bring the perfect cup - from bean to <br /> brew - in every shipment.</Typography>
                    </Box>
                    <img width={"100%"} src={img} alt="" />
                </Box>
            </Box>

            <Box display={"flex"} justifyContent={"center"} mt={15}>
                <Box width={'80%'} display={'flex'} justifyContent={"space-between"} gap={10} alignItems={'center'}>
                <Box width={"60%"}>
                    <img style={{borderRadius: '10px'}} width={'100%'} src={img1} alt="" />
                </Box>
                <Box width={"70%"}>
                    <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '40px',lineHeight: '48px',color: '#333D4B'}}>Our commitment</Typography>
                    <br />
                    <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B',}}>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating onl the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</Typography>
                </Box>
                </Box>
            </Box>

            <Box display={'flex'} justifyContent={"center"}>
                <Box width={"90%"} sx={{backgroundColor: '#2C343E',borderRadius: '10px'}} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={10} mt={25}position={'relative'} p={13}>
                    <Box width={"70%"} ml={-6}>
                        <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '40px',lineHeight: '48px',color: 'white'}}>Uncompromising quality</Typography>
                        <br />
                        <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: 'white'}}>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</Typography>
                    </Box>
                    <Box width={'49%'}>
                        <img style={{borderRadius: '10px',position: 'absolute',marginTop: '-25%',width: '35%'}} src={img2} alt="" />
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} mt={15}>
                <Box width={"82%"}>
                <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '32px',color: '#83888F'}}>Our headquarters</Typography>
                <br /><br />
                <Box display={"flex"} gap={20}>
                    <Box>
                    <img src={united} alt="" />
                    <br /><br />
                    <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '32px',lineHeight: '36px',color: '#333D4B'}}>United Kingdom</Typography>
                    <br />
                    <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>68  Asfordby Rd <br />Alcaston <br />SY6 1YA <br />+44 1241 918425</Typography>
                    </Box>
                    <Box>
                    <img src={canada} alt="" />
                    <br /><br />
                    <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '32px',lineHeight: '36px',color: '#333D4B'}}>Canada</Typography>
                    <br />
                    <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>1528  Eglinton Avenue <br />Toronto <br />Ontario M4P 1A6 <br />+1 416 485 2997</Typography>
                    </Box>
                    <Box>
                    <img src={australia} alt="" />
                    <br /><br />
                    <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '32px',lineHeight: '36px',color: '#333D4B'}}>Australia</Typography>
                    <br />
                    <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>36 Swanston Street <br />Kewell <br />Victoria <br />+61 4 9928 3629</Typography>
                    </Box>
                </Box>
                </Box>
            </Box>
            <br />
        </Box>
    );
}

export default Abautus;
