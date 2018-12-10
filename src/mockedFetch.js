//return promise

//resolves the object that posses a json property

//is function that returns an array:

const orders =
    [
        {
            name: "Lager",
            price: 10
        },
        {
            name: "APA",
            price: 15
        }
    ]

export const mockedFetch = () => {
    return Promise.resolve({
        json: () => orders
    })
}