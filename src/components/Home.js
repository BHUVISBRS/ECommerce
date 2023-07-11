// import React from 'react'
// import './Nav.css'
// const Home = () => {
//     return (
//         <div className='bgimg'>
//             <img src='bgimg.png' alt='logo' style={{ width: 1380, height: 510 }}></img></div>
//     )
// }

// export default Home

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton, LinearProgress } from '@mui/material';
import CustomButton from './materialui/CustomButton';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import ShopCategary from './ShopCategary';
import { useNavigate } from 'react-router-dom';
import ProductListing from './ProductListing';
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    width: '180px',
    height: '50px',
    padding: '10px',
    border: '1px solid white',
    lineHeight: 1.5,
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
        backgroundColor: '#000000',
        boxShadow: 'none',
        color: 'white'
    },
});



export default function Home() {
    const navigate = useNavigate();
    return (

        <>
            <Card sx={{ maxWidth: 1355 }}>

                <CardMedia
                    sx={{ height: 500 }}
                    image="bgimg.png"
                    title="Shopping page">
                    <CardContent sx={{ marginLeft: 1 }}>
                        <Typography variant="h3" component="div" sx={{ color: 'white', marginTop: 30, padding: 1 }}>
                            Long Weekend Essentials
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: 'white', fontSize: 17, padding: 1 }}>
                            Super Packable. Versatile. And All-Day (And Night) Adventure Ready.
                        </Typography>
                    </CardContent>
                    <Stack spacing={2} direction="row">
                        <BootstrapButton sx={{ marginLeft: 4, letterSpacing: 3 }} variant="contained" disableRipple onClick={() => { navigate("/productlisting") }}>SHOP WOMEN </BootstrapButton>
                        <BootstrapButton sx={{ marginLeft: 4, letterSpacing: 3 }} variant="contained" disableRipple onClick={() => { navigate("/menscloth") }}>
                            SHOP MEN
                        </BootstrapButton>
                    </Stack>

                </CardMedia>

            </Card>
            <Typography variant="h4" sx={{ marginLeft: 65, paddingTop: 3, paddingBottom: 7 }}>Shop By Category</Typography>

            <ShopCategary />

        </>



    );
}
