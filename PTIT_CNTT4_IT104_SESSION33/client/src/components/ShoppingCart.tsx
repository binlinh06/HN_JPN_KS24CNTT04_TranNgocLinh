  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import type { Product } from "../interface/interface";

  export default function ShoppingCart() {
    const result: Product[] = useSelector((data: any) => {
      return data.cart.cart;
    });
    const dispatch = useDispatch();
    const increase = (id: number) => {
      dispatch({
        type: "INCREMENT",
        payload: { id },
      });
    };
    const dicrease = (id: number) => {
      dispatch({
        type: "DECREMENT",
        payload: { id },
      });
    };
    const remove = (id: number) => {
      const isConfirm = window.confirm(
        "Bạn có chắc muốn xóa sản phẩm này không?"
      );
      if (isConfirm) {
        dispatch({ type: "DELETE", payload: { id } });

        const noti = document.getElementById("mnotification");
        if (noti) {
          noti.innerText = "Delete cart successfully";
          noti.style.display = "block";

          setTimeout(() => {
            noti.style.display = "none";
          }, 2000);
        }
      }
    };
    const update = (product: Product) => {

      if (product.quantity > (product.stock || 0)) {
        const noti = document.getElementById("mnotification");
        if (noti) {
          noti.innerText = "Số lượng sản phẩm vượt quá số lượng trong kho";
          noti.style.display = "block";
          setTimeout(() => {
            noti.style.display = "none";
          }, 2000);
        }
        return;
      }
      dispatch({
        type: "UPDATE",
        payload: { id: product.id, quantity: product.quantity },
      });

      const noti = document.getElementById("mnotification");
      if (noti) {
        noti.innerText = "Update cart successfully";
        noti.style.display = "block";
        setTimeout(() => {
          noti.style.display = "none";
        }, 2000);
      }
    };
    return (
      <div>
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className="panel-title">Your Cart</h1>
              </div>
              <div className="panel-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {result.length === 0 ? (
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>
                      Empty product in your cart
                    </p>
                  ) : (
                    <tbody id="my-cart-body">
                      {result.map((item: Product, index: number) => {
                        return (
                          <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td style={{ display: "flex" }}>
                              <button onClick={() => increase(item.id)}>+</button>
                              <div>{item.quantity}</div>
                              <button onClick={() => dicrease(item.id)}>-</button>
                            </td>
                            <td>
                              <a
                                className="label label-info update-cart-item"
                                onClick={() => update(item)}
                                data-product=""
                              >
                                Update
                              </a>
                              <a
                                className="label label-danger delete-cart-item"
                                onClick={() => remove(item.id)}
                                data-product=""
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  )}
                  <tfoot id="my-cart-footer">
                    <tr>
                      <td colSpan={4}>
                        There are <b>{result.length}</b> items in your shopping
                        cart.
                      </td>
                      <td colSpan={2} className="total-price text-left">
                        {result.reduce((acc: any, item: any) => {
                          return acc + item.price * item.quantity;
                        }, 0)}
                        USD
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="alert alert-success" role="alert" id="mnotification">
              Add to cart successfully
            </div>
          </div>
        </div>
      </div>
    );
  }
