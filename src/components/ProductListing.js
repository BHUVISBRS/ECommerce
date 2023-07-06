import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { loadUsersAPI } from '../Redux/api';
import { loadUsersStart, setProducts } from '../Redux/action';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Divider, Grid, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import CustomButton from './materialui/CustomButton';



export default function ProductListing() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const dispatch = useDispatch();
    const items = useSelector((state) => state);

    /*  useEffect(() => {
         const fetchProducts = async () => {
             const response = await axios.get("https://fakestoreapi.com/products");
             setData(await response.clone.json())
             setFilter(await response.json())
             console.log(filter);
         }
         fetchProducts();
     }, []);   */
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => setFilter(response.data))
        console.log(filter);
    }, [])

    console.log(filter);


    return (
        <div style={{ display: 'flex', }}>

            {filter.map((name) => {
                return (
                    <div className='container' style={{ display: 'flex', marginTop: 30 }}>

                        <Card sx={{ maxWidth: 500 }} >

                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="330"
                                    image={name.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h8" component="div" sx={{ marginLeft: 2, letterSpacing: 1 }}>
                                        {name.title}  </Typography>
                                    <Typography gutterBottom variant="h8" component="div" sx={{ marginLeft: 2, letterSpacing: 1 }}>
                                        $ {name.price}  </Typography>
                                    <Typography gutterBottom variant="h8" component="div" sx={{ marginLeft: 2, letterSpacing: 1 }}>
                                        {name.category}
                                    </Typography>
                                    <div style={{ marginLeft: 19 }}><hr /></div>

                                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 2 }}>
                                        <img src='TREE.png' alt='#' style={{ height: 35 }} />Comfy, All-Day Wearable
                                    </Typography>
                                    <CardActions>
                                        <CustomButton size="small">ADD Cart</CustomButton>
                                    </CardActions>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </div>


                )
            }
            )

            }
        </div>

    )

};




