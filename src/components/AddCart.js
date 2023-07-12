import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTOCart,
  DeleteUserStart,
  GetCartSTART,
  showUserResClean,
  showUserStart,
} from "../Redux/action";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import { toast } from "react-hot-toast";

function AddCart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carts, response } = useSelector((state) => state.cart);

  console.log("carts called", carts);
  console.log("delete response", response);
  useEffect(() => {
    console.log("GetCartSTART user");
    dispatch(GetCartSTART());
  }, []);

  useEffect(() => {
    if (response === "OK") {
      console.log(response);
      toast.success(response);
    }
  }, [response]);

  //   useEffect(() => {
  //     console.log("load user");
  //     dispatch(AddTOCart());
  //   }, []);
  /*  const { cart } = useSelector((state) => state.data);
  console.log(cart); */
  // const { response } = useSelector((state) => state.data);
  // console.log(response);
  // useEffect(() => {
  //   if (response?.statusText === "OK") {
  //     toast.success(response);
  //     navigate("/addcart");
  //   }
  // }, [response]);
  function postDelete(id) {
    dispatch(DeleteUserStart(id));
  }

  return (
    <div className="tablecontainer">
      <table>
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
                  <Button tyle={{ backgroundColor: "skyblue" }}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                  <Button>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <Button onClick={() => postDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AddCart;
