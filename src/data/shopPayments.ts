import { IPayment } from '~/interfaces/payment'

const dataShopPayments: IPayment[] = [
    {
        key: 'conekta',
        title: 'Conekta',
        description: 'En esta opción tendrás la probabilidad de pagar a través de tarjetas AMEX, VISA, MasterCard en Efectivo a través de OXXO o transferencia bancaria'
    }
            // },
    // {
    //     key: 'check',
    //     title: 'Check payments',
    //     description: 'Please send a check to Store Name, Store Street, Store Town, Store State County, Store Postcode.'
    // },
    // {
    //     key: 'cash',
    //     title: 'Cash on delivery',
    //     description: 'Pay with cash upon delivery.'
    // },
    // {
    //     key: 'paypal',
    //     title: 'PayPal',
    //     description: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.'
    // }
]

export default dataShopPayments
