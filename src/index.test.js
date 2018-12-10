import { orderTotal } from './index'

describe('Sum without quantity', () => {
    const orders = [
        {
            name: 'Lager',
            price: 10,
        },
        {
            name: 'APA',
            price: 15,
        }
    ]

    test('Happy path failed', () => {
        expect(
            orderTotal(orders)
        ).toBe(25)
    })

    test('Empty order list must equals 0', () => {
        expect(
            orderTotal([])
        ).toBe(0)
    })
})

describe('Sum with quantity', () => {
    const ordersWithQuantity = [
        {
            name: 'Lager',
            price: 10,
            quantity: 2
        },
        {
            name: 'APA',
            price: 15,
            quantity: 1
        },
        {
            name: 'hero',
            price: 10,
            quantity: 0
        }
    ]

    test('Fails to calculate list with quantity', () => {
        expect(
            orderTotal(ordersWithQuantity)
        ).toBe(35)
    })
})


describe('Sum with shipping', () => {
    const newOrders = [
        {
            name: 'Lager',
            price: 10,
            quantity: 100
        },
        {
            shipping: true,
            price: 25,
            freeShipping: 200
        }
    ]

    const newOrders2 = [
        {
            name: 'Lager',
            price: 10,
            quantity: 2
        },
        {
            shipping: true,
            price: 25,
            freeShipping: 200
        }
    ]

    test('Free shipping >= 200', () => {
        expect(
            orderTotal(newOrders)
        ).toBe(1000)
    })

    test('Free shipping >= 200', () => {
        expect(
            orderTotal(newOrders2)
        ).toBe(45)
    })
}
)