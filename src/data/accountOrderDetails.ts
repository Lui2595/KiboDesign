import { IOrder } from '~/interfaces/order'

const dataAccountOrderDetails: IOrder = {
    id: 3857,
    date: '19 October, 2020',
    status: 'En espera',
    items: [
        {
            id: 1,
            slug: 'Producto 1',
            name: 'Producto 1',
            image: '/images/products/product-1.jpg',
            options: [
                {
                    label: 'Color',
                    value: 'Azul'
                },
                {
                    label: 'Material',
                    value: 'Madera'
                }
            ],
            price: 699,
            quantity: 2,
            total: 1398
        },
        {
            id: 2,
            slug: 'Producto 2',
            name: 'Producto 2',
            image: '/images/products/product-2.jpg',
            price: 849,
            quantity: 1,
            total: 849
        },
        {
            id: 5,
            slug: 'Producto 5',
            name: 'Producto 5',
            image: '/images/products/product-5.jpg',
            options: [
                {
                    label: 'Color',
                    value: 'True Red'
                }
            ],
            price: 1210,
            quantity: 3,
            total: 3630
        }
    ],
    additionalLines: [
        {
            label: 'Puntos recompensa',
            total: -20
        },
        {
            label: 'Envio',
            total: 25
        }
    ],
    quantity: 6,
    subtotal: 5877,
    total: 5882,
    paymentMethod: 'PayPal',
    shippingAddress: [{
        firstName: 'Helio',
        lastName: 'Kibo',
        email: 'kibo@example.com',
        phone: '38 972 588-42-36',
        country: 'Random ',
        city: 'Moscow',
        postcode: '115302',
        address: 'ul. Varshavskaya, 15-2-178'
    }],
    billingAddress: {
        firstName: 'Jupiter',
        lastName: 'Saturnov',
        email: 'kibo@example.com',
        phone: 'ZX 971 972-57-26',
        country: 'RandomLand',
        city: 'MarsGrad',
        postcode: '4b4f53',
        address: 'Sun Orbit, 43.3241-85.239'
    }
}

export default dataAccountOrderDetails
