export const orderTotal = (arrayOfOrders) => {
    const preTotal = arrayOfOrders.reduce(
        (reduced, item) => {
            if (item.quantity === undefined) return reduced + item.price
            else return reduced + (item.price * item.quantity)
        },
        0
    )

    const shipping = arrayOfOrders.find(item => item.shipping)

    return (
        shipping &&
            preTotal >= (shipping.freeShipping + shipping.price)
            ?
            preTotal - shipping.price
            :
            preTotal
    )
}
