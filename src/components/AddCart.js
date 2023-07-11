import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTOCart,
  GetCartSTART,
  showUserResClean,
  showUserStart,
} from "../Redux/action";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const AddCart = () => {
  /*    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUserStart(id));
        return () => {
            dispatch(showUserResClean());
        };
    }, [id]);
     */
  const dispatch = useDispatch();
  const { id } = useParams();
  const { carts } = useSelector((state) => state.cart);

  console.log(carts);
  useEffect(() => {
    console.log("GetCartSTART user");
    dispatch(GetCartSTART());
  }, []);

  //   useEffect(() => {
  //     console.log("load user");
  //     dispatch(AddTOCart());
  //   }, []);
  /*  const { cart } = useSelector((state) => state.data);
  console.log(cart); */
  const { response } = useSelector((state) => state.data);
  console.log(response);
  //   useEffect(() => {
  //     if (response?.statusText === "OK") {
  //       toast.success(response);
  //     }
  //   }, [response]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Image</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} style={{ width: 70, height: 70 }}></img>
                </td>
                <td>${item.price}</td>
                <td>
                  <Grid item xs={10}>
                    <DeleteForeverRoundedIcon />
                    <Typography></Typography>
                  </Grid>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddCart;
