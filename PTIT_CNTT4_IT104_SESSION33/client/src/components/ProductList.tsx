import React, { useState } from "react";
import cake from "../images/Cake.jpg";
import Hamburger from "../images/Hamburger.jpg";
import pizza from "../images/pizza.jpg";
import bread from "../images/bread.jpg";
import type { Product } from "../interface/interface";
import { useDispatch } from "react-redux";

const data = [
  {
    id: 1,
    title: "pizza",
    image: pizza,
    content: "pizza",
    price: 30,
    stock: 15,
  },
  {
    id: 2,
    title: "Hamburger",
    image: Hamburger,
    content: "Hamburger",
    price: 15,
    stock: 20,
  },
  {
    id: 3,
    title: "bread",
    image: bread,
    content: "bread",
    price: 20,
    stock: 18,
  },
  {
    id: 4,
    title: "cake",
    image: cake,
    content: "cake",
    price: 10,
    stock: 22,
  },
];

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>(data);
  const dispatch = useDispatch();
  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item: any) => item.id === product.id);

    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      if (cart[index].quantity + 1 > product.stock) {
        const noti = document.getElementById("mnotification");
        if (noti) {
          noti.innerText = "Số lượng sản phẩm vượt quá số lượng trong kho";
          noti.style.display = "block";
          setTimeout(() => (noti.style.display = "none"), 2000);
        }
        return;
      }
      cart[index].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    const noti = document.getElementById("mnotification");
    if (noti) {
      noti.innerText = "Add cart successfully";
      noti.style.display = "block";

      setTimeout(() => {
        noti.style.display = "none";
      }, 3000);
    }
  };

  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {products.map((item: Product, index: number) => {
                return (
                  <div key={index}>
                    <div className="media product">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src={item.image}
                            alt={item.title}
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">{item.title}</h4>
                        <p>{item.content}</p>
                        <a
                          onClick={() => addToCart(item)}
                          className="price"
                          style={{ cursor: "pointer" }}
                        >
                          {item.price} USD
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
