import React, { Component } from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy",
    price: 20000000,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s24-fe_3__4.png",
  },
  {
    id: 2,
    name: "Điện thoại Iphone14 Promax",
    price: 20500000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpbnHk03r392a6gOSlypZP9awoB6-UFMBjw&s",
  },
  {
    id: 3,
    name: "Điện thoại Samsung Galaxy",
    price: 21000000,
    img: "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-a065flbdxxv/gallery/vn-galaxy-a06-sm-a065-sm-a065flbdxxv-543033959?$684_547_PNG$",
  },
  {
    id: 4,
    name: "Điện thoại Iphone11 Promax",
    price: 21500000,
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-space-select-2019_1_1_3_2_6.png",
  },
  {
    id: 5,
    name: "Điện thoại Samsung Galaxy",
    price: 20000000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUCZPKYg3IxazVdBK_bqaRsFNuP23dnRUqQ&s",
  },
  {
    id: 6,
    name: "Điện thoại Samsung Galaxy",
    price: 20500000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoAuTGU1gFHAzK-QaQ5oOn6G9YFfP5CLD8w&s",
  },
  {
    id: 7,
    name: "Điện thoại Oppo A9",
    price: 21000000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71OVSfvbxUJYeGEBPQTCqxlKtTaotNyV9mA&s",
  },
  {
    id: 8,
    name: "Điện thoại Oppo V5",
    price: 21500000,
    img: "https://cdn.tgdd.vn/Products/Images/42/233460/oppo-reno5-5g-thumb-600x600.jpg",
  },
];

type Props = {
  onAddToCart: (product: any) => void;
};

export default class ProductList extends Component<Props> {
  render() {
    const { onAddToCart } = this.props;
    return (
      <div className="product-list grid grid-cols-4 gap-6 p-6">
        {products.map((p) => (
          <ProductItem key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    );
  }
}
