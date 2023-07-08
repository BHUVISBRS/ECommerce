import React, { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Grid, MutatingDots } from "react-loader-spinner";
import {showUserResClean, showUserStart } from "../Redux/action";
import { styled } from '@mui/material/styles';
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
import { Button } from "@mui/material";
import CustomButton from "./materialui/CustomButton";




function ViewDetail() {


    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUserStart(id));
        return () => {
            dispatch(showUserResClean());
        };
    }, [id]);
    
    const { users } = useSelector((state) => state.data);
    // const user = users.find((user) => user.id === id);
    console.log(users);


    return (
        <>
            {users.map((user, index) => {
                return (

                    <Card sx={{ width: 700, padding: 5, marginLeft: 30, marginTop: 3 }} key={index}>

                        <CardMedia
                            component="img"
                            height="300"
                            image={user.image}
                            alt="dish image"
                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" >
                                {user.category}
                            </Typography>
                            <Typography variant="body2" h color="text.secondary">
                                {user.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                price: ${user.price}
                            </Typography>
                            <Typography variant="body2" h color="text.secondary">
                                {user.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <div className="buttonlink" style={{ marginLeft: 120, textDecoration: 'none' }}>
                                <Link to={`/addcart/${user.id}`} style={{ textDecoration: 'none' }} >
                                    <CustomButton >

                                    </CustomButton>

                                </Link>
                            </div>
                        </CardActions>

                    </Card>


                )
            })}

        </>

    )
}

export default ViewDetail;



