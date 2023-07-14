import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AddTOCartStart,
  GetCartSTART,
  loadUsersStart,
  showUserResClean,
} from "../Redux/action";

import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { toast } from "react-hot-toast";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function ProductListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, response, deleteLoading } = useSelector((state) => state.data);

  useEffect(() => {
    if (deleteLoading) return;
    console.log("load user");
    dispatch(loadUsersStart());
    dispatch(GetCartSTART());
  }, [dispatch, deleteLoading]);

  useEffect(() => {
    if (response === "Created") {
      toast.success("Added to cart");
      dispatch(showUserResClean());
      console.log(response);
    }
  }, [response]);

  function handleclick(user) {
    console.log("aaa", user);
    console.log("ccccc", users);
    users.filter(user);
  }

  return (
    <div>
      <Grid
        sx={{ flexGrow: 1, marginTop: 10 }}
        container
        spacing={2}
        className="outerbox"
      >
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
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <Button
                        style={{
                          width: 100,
                          backgroundColor: "black",
                          color: "white",
                        }}
                        onClick={() => dispatch(AddTOCartStart(user))}
                        /* onClick={() => handleclick(user.id)} */
                      >
                        {console.log("user", user.id)}
                        {console.log("ssss", user)}
                        {response === "created" && user.id
                          ? "Added"
                          : "Add Cart"}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
