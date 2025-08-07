const ListProduct = [
    {
        id: "p1",
        name: "Áo sơ mi",
        price: 300000,
        category: {
            id: "c1",
            name: "Thời trang Nam",
        },
        discount: 0.2,
    },
    {
        id: "p2",
        name: "Quần jeans",
        price: 500000,
        category: {
            id: "c1",
            name: "Thời trang nam",
        },
        discount: 0.2,
    },
    {
        id: "p3",
        name: "Đầm dạ hội",
        price: 800000,
        category: {
            id: "c2",
            name: "Thời trang nữ",
        },
        discount: 0.1,
    },
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category.name}`);
}
for (const product of ListProduct) {
    printProductInfo(product);
    console.log("-----------");
}
