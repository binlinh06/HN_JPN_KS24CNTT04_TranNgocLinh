import React, { useEffect, useState } from 'react';

export default function EXERCISE02() {
    const [products, setProducts] = useState([]);

    const getAllProduct = async () => {
        let res = await fetch("http://localhost:8080/products");
        let data = await res.json();
        console.log("Danh sách sản phẩm:", data);
        setProducts(data);
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <strong>{item.product_name}</strong> - {item.price} VND
                    </li>
                ))}
            </ul>
        </div>
    );
}
