import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { AddTOCart } from '../Redux/action';

const AddCart = () => {
      const { carts } = useSelector((state) => state.cartdata);
console.log(carts);
   const { response } = useSelector((state) => state.cartdata);
   console.log(response);
  const dispatch = useDispatch();
      
    useEffect(() => {
        dispatch(AddTOCart());
       
    }, []);
          useEffect(() => {
        if(response?.statusText === " ") {
            toast.success(response?.statusText)
          } 
        }, [response])
    return (
        <div>

            
        </div>
    )
}

export default AddCart
