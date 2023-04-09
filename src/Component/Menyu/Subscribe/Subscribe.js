import { Box, Typography } from '@mui/material';
import subscribe from "../../Images/Subscribe/subscribe.png"
import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    const [num,setnum] = useState([
        {
            numer: '01',
            text: 'Pick your coffee',
            p: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
        },
        {
            numer: '02',
            text: 'Choose the frequency',
            p: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
        },
        {
            numer: '03',
            text: 'Receive and enjoy!',
            p: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
        },
      ])
      const[son,setson] = useState([
        {
            son: '01',
            harf:  'Preferences',
            active: true,
            to: ''
        },
        {
            son: '02',
            harf: 'Bean Type',
            active: false,
            to: 'Beantype'
        },
        {
            son: '03',
            harf: 'Quantity',
            active: false,
            to: ''
        },
        {
            son: '04',
            harf: 'Grind Option',
            active: false,
            to: ''
        },
        {
            son: '05',
            harf: 'Deliveries',
            active: false,
            to: ''
        },
      ])
      let menuitem = (item) => {
        setson(() => {
            return son.map((sonItem) => {
                if(sonItem.son === item.son) {
                    sonItem.active = true;
                }else{
                    sonItem.active = false;
                }
                return sonItem;
            })
        })
      };
      
    //   sx={[
    //     {
    //       "&:hover": {
    //         backgroundColor: "#FFFFFF;",
    //         borderColor: "#FF231AB0",
    //         borderWidth: "3px",
    //         boxShadow: "0px 0px 13.5219px rgba(255, 35, 26, 0.29)",
    //       },
    //     },
    //   ]}

    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Box width={"90%"} position={"relative"} mt={5}>
                    <Box position={"absolute"} ml={6} mt={15}>
                        <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '72px',lineHeight: '72px',color: '#FEFCF7'}}>Create a plan</Typography>
                        <br />
                        <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#FEFCF7'}}>Build a subscription plan that best fits your needs. We offer an <br /> assortment of the best artisan coffees from around the globe <br /> delivered fresh to your door.</Typography>
                    </Box>
                    <img width={"100%"} src={subscribe} alt="" />
                </Box>
            </Box>
            
            <Box display={'flex'} justifyContent={'center'}>
            <Box width={'90%'} p={7} mt={15} sx={{backgroundColor: '#2C343E',borderRadius: '10px'}}>
        <Box width={'85%'}>
           <Box >
            <Box ml={2} sx={{width: '70%',border: '2px solid #FDD6BA',position: 'relative'}}>
                <Box sx={{width: '20px',height: '20px',position: 'absolute',border: '2px solid #0E8784',borderRadius: '20px',marginTop: '-10px',marginLeft: '-18px'}}></Box>
                <Box sx={{width: '20px',height: '20px',position: 'absolute',border: '2px solid #0E8784',borderRadius: '20px',marginTop: '-10px',marginLeft: '50%'}}></Box>
                <Box sx={{width: '20px',height: '20px',position: 'absolute',border: '2px solid #0E8784',borderRadius: '20px',marginTop: '-10px',marginLeft: '100%'}}></Box>
            </Box>
           </Box>
           <Box mt={10} display={"flex"} width={"100%"}>
            {
                num.map((item,index)=>(
                    <Box>
                        <Box width={"71%"}>
                    <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '72px',lineHeight: '72px',color: '#FDD6BA',}}>{item.numer}</Typography>
                    <br />
                    <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '32px',lineHeight: '36px',color: '#FEFCF7'}}>{item.text}</Typography>
                    <br />
                    <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#FEFCF7'}}>{item.p}</Typography>
                        </Box>
                   </Box>
                ))
            }
           </Box>
        </Box>
      </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={10}>
                <Box width={'82%'} display={"flex"} justifyContent={"space-between"}>
                <Box width={'23%'} >
                    {
                        son.map((item,index)=>(
                            <Box>
                            <Box onClick={()=> menuitem(item)} display={'flex'}alignItems={'center'} gap={3} sx={{cursor: 'pointer'}}>
                                <Link style={{textDecoration: 'none',display: 'flex',gap: '30px'}} to={item.to}>
                            <Typography style={{"fontFamily": 'Fraunces', "fontWeight": '900', "fontSize": '20px', "lineHeight": '32px', "color": `${item.active ? "#333D4B" : "#83888F"}`}}>{item.son}</Typography>
                                <Typography style={{"fontFamily": 'Fraunces', "fontWeight": '900', "fontSize": '20px', "lineHeight": '32px', "color": `${item.active ? "#333D4B" : "#83888F"}`}}>{item.harf}</Typography>
                                </Link>
                            </Box>
                            <hr  style={{border: '1px solid #83888F'}}/>
                        </Box>
                        ))
                    }
                    </Box>
                <Box width={'70%'}>

                    <Box display={"flex"} alignItems={'center'} justifyContent={'space-between'} gap={5}>
                        <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '40px',lineHeight: '48px',color: '#83888F'}}>How do you drink your coffee?</Typography>
                        <ExpandMoreIcon style={{color: '#0E8784',fontSize: '40px',}}/>
                    </Box>
                    <br /><br />
                    <Box display={'flex'} gap={2.5}>
                    <Box width={"30%"} sx={{borderRadius: '10px',backgroundColor: '#F4F1EB',cursor: 'pointer'}} p={3}>
                      <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '60px',color: '#333D4B'}}>Capsule</Typography>
                      <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>Compatible with <br /> Nespresso systems and <br /> similar brewers</Typography>
                      <br /><br />
                    </Box>
                    <Box width={"30%"} sx={{borderRadius: '10px',backgroundColor: '#0E8784',cursor: 'pointer'}} p={3}>
                      <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '60px',color: '#FFFFFF'}}>Filter</Typography>
                      <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#FFFFFF'}}>For pour over or drip <br /> methods like Aeropress, <br /> Chemex, and V60</Typography>
                      <br /><br />
                    </Box>
                    <Box width={"30%"} sx={{borderRadius: '10px',backgroundColor: '#FDD6BA',cursor: 'pointer'}} p={3}>
                      <Typography style={{fontFamily: 'Fraunces',fontWeight: '900',fontSize: '24px',lineHeight: '60px',color: '#333D4B'}}>Espresso</Typography>
                      <Typography style={{fontFamily: 'Barlow',fontWeight: '400',fontSize: '16px',lineHeight: '26px',color: '#333D4B'}}>Dense and finely ground <br /> beans for an intense, <br /> flavorful experience</Typography>
                      <br /><br />
                    </Box>
                    </Box>

                </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Subscribe;
