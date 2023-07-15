import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartUserResClean,
  DeleteUserStart,
  GetCartSTART,
} from "../Redux/action";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import { toast } from "react-hot-toast";

function MensAddCart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carts, response, deleteLoading } = useSelector((state) => state.cart);

  // console.log("carts called", carts);
  // console.log("delete response", response);
  console.log("loading", deleteLoading);
  useEffect(() => {
    if (deleteLoading) return;
    console.log("GetCartSTART user");
    dispatch(MensCartStart());
  }, [dispatch, deleteLoading]);

  useEffect(() => {
    if (response === "OK") {
      // console.log("cart removed success");
      toast.success("cart removed success");
      dispatch(CartUserResClean());
    }
  }, [response]);

  function postDelete(id) {
    dispatch(DeleteUserStart(id));
  }
  const [counter, setCounter] = useState(0);
  const [val, setVal] = useState();
  const handleClick1 = (id) => {
    console.log("id", id);
    setCounter(counter + 1);
    console.log(counter);
    setVal((val = counter * id.price));
    console.log("val", val);
  };

  // const handleClick2 = () => {
  //   setCounter(counter - 1);
  // };

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
                <td>price:${item.price}</td>

                <td>
                  <Button onClick={() => postDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
                <td>
                  {/*<Button onClick={() => handleClick1(item.id)}>
                    {counter}
            </Button>  */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MensAddCart;
