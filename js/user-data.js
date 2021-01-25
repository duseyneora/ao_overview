const currentUser = [
    {
        first_name: 'Jane',
        last_name: 'Smith',
        user_avatar: './assets/placeholders/femaleplaceholder.png',
        user_id: '19948079',
        payment: {
            primary: {
                type: 'Mastercard',
                num: 1212232334344545,
                security: 555,
                billing: {
                    address: '1234 Elm Ave',
                    address2: '',
                    city: 'Dallas',
                    state: 'Texas',
                    zip: 75001,
                }
            },
            secondary: {
                type: 'Apple Card',
                num: 1111222233334444,
                security: 222,
                billing: {
                    address: '555 N Elm St.',
                    address2: 'Apt 2055',
                    city: 'Dallas',
                    state: 'Texas',
                    zip: 75003,
                }
            }
        },
        orders: [
            {
                order_id: "9584712",
                order_name: '',
                ship_day: 15,
                ship_frequency: 'monthly',
                products: [
                    {
                        name: products[3][0].name,
                        asset: products[3][0].localImg,
                        adv_price: products[3][0].oneTimePrice,
                        ao_price: products[3][0].orderPrice,
                        qty: 1,
                        inStock: true,
                    }
                ]
            },
            {
                order_id: "1234567",
                order_name: '',
                ship_day: 15,
                ship_frequency: 'monthly',
                products: [
                    {
                        name: products[3][0].name,
                        asset: products[3][0].localImg,
                        adv_price: products[3][0].oneTimePrice,
                        ao_price: products[3][0].orderPrice,
                        qty: 1,
                        inStock: true,
                    },
                    {
                        name: products[3][3].name,
                        asset: products[3][3].localImg,
                        adv_price: products[3][3].oneTimePrice,
                        ao_price: products[3][3].orderPrice,
                        qty: 1,
                        inStock: false,
                    }
                ]
            },
            {
                order_id: "7654321",
                order_name: '',
                ship_day: 15,
                ship_frequency: 'monthly',
                products: [
                    {
                        name: products[4][0].name,
                        asset: products[4][0].localImg,
                        adv_price: products[4][0].oneTimePrice,
                        ao_price: products[4][0].orderPrice,
                        qty: 1,
                        inStock: true,
                    },
                    {
                        name: products[2][0].name,
                        asset: products[2][0].localImg,
                        adv_price: products[2][0].oneTimePrice,
                        ao_price: products[2][0].orderPrice,
                        qty: 1,
                        inStock: true,
                    },
                    {
                        name: products[3][0].name,
                        asset: products[3][0].localImg,
                        adv_price: products[3][0].oneTimePrice,
                        ao_price: products[3][0].orderPrice,
                        qty: 1,
                        inStock: true,
                    },
                    {
                        name: products[3][3].name,
                        asset: products[3][3].localImg,
                        adv_price: products[3][3].oneTimePrice,
                        ao_price: products[3][3].orderPrice,
                        qty: 1,
                        inStock: false,
                    },
                    {
                        name: products[3][2].name,
                        asset: products[3][2].localImg,
                        adv_price: products[3][2].oneTimePrice,
                        ao_price: products[3][2].orderPrice,
                        qty: 1,
                        inStock: false,
                    }
                ]
            }
        ]

    }
]