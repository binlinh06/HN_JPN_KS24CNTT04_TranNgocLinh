const products = [
  { name: "A", price: 100, discount: 0.1, quantity: 2 },
  { name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
  { name: "C", price: 300, discount: 0, quantity: 3, bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 } }
];

function getOrderSummary(products){
    let totalBeforeDiscount = 0;
    let totalAfterDiscount = 0;
    const details = [];

    for (const product of products){
        const {name,price,discount = 0,quantity,bulkDiscount} = product
        totalBeforeDiscount += price * quantity;

        let finalDiscount = discount;

        if(bulkDiscount && quantity >=bulkDiscount.minQuantity){
            finalDiscount += bulkDiscount.extraDiscount;
        }

        const finalPrice = Math.floor(price * (1 - finalDiscount))

        const subtotal = finalPrice * quantity;

        totalAfterDiscount += subtotal;

        details.push({
            name,
            finalPrice,
            quantity,
            subtotal
        })
    }
    return {
        totalBeforeDiscount,
        totalAfterDiscount,
        details
    }
}

console.log(getOrderSummary(products));