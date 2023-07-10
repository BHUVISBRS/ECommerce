import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { AddTOCart } from '../Redux/action';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const AddCart = () => {
        const {carts} = useSelector((state) => state.cart);

   console.log(carts);
  const dispatch = useDispatch();
            useEffect(() => {
        dispatch(AddTOCart());
            
    }, []); 

     /*      useEffect(() => {
        if(response?.statusText === " ") {
            toast.success(response?.statusText)
          } 
        }, [response]) */
    

    return (
  
<div>
    

                
                       
            </div>

      
    )
}

export default AddCart
