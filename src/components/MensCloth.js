import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { loadUsersAPI } from '../Redux/api';
import { loadUsersStart, loadUsersStart2, setProducts } from '../Redux/action';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Box, Button, CardActionArea, Divider, Grid, Paper, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import CustomButton from './materialui/CustomButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import oneButton from './materialui/OneButton';
import OneButton from './materialui/OneButton';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function MensCloth() {


    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data)
    console.log(users)

    useEffect(() => {
        console.log('load user')
        dispatch(loadUsersStart2());
    }, [])

    return (
        <>
            <Grid sx={{ flexGrow: 1, marginTop: 10 }} container spacing={2} className='outerbox'>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" sx={{ gap: 5 }} spacing={2}>
                        {users.map((user, index) => {
                            return (
                                <Grid key={index} user>
                                    <Card sx={{ width: 300 }}>

                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={user.image}
                                            alt="dish image"
                                        />
                                        <CardContent>
                                            <Typography sx={{ fontSize: 13 }} color="text.secondary">
                                                {user.category}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                price: ${user.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <Link to={`/view/${user.id}`} style={{ marginLeft: 20, textDecoration: 'none' }}>
                                                <OneButton aria-label="add to favorites">
                                                    View Detail
                                                </OneButton>

                                            </Link>

                                        </CardActions>

                                    </Card>

                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid >
        </>

    )

};







