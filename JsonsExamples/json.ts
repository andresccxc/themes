export const themes = {

    theme1: {
        header: {
            content: {
                logo: 'Theme 1',
                links: [{ Inicio: '/' }, { Celulares: '/cellphones' }, { Videojuegos: '/videogames' }, { icon: 'fas fa-search' }, { icon: 'fas fa-shopping-cart cart' }]
            },
            styles: {
                bgColor: '#000',
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                height: '7.5rem',
            }
        },
        main: {
            content: {
                title: 'Listado de productos',
                products: [{
                    name: 'Redmi Note 9T 128gb',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/RedmiNote9T-4_300x.jpg?v=1613852932',
                    price: 78500
                },
                {
                    name: 'Redmi Note 9 Pro 128gb',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/RedmiNote9Pro-1_900x.jpg?v=1604954259',
                    price: 22500
                },
                {
                    name: 'Mi 10T Lite 5G 64gb',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/Mi10TLite-2_900x.jpg?v=1611942917',
                    price: 45500
                }, {
                    name: 'Poco X3 NFC 128GB',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/PocoX3-2_900x.jpg?v=1605841101',
                    price: 12500
                },
                {
                    name: 'iPhone 12 Pro Max 256GB',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/iPhone12ProMax-4_900x.jpg?v=1610739542',
                    price: 99999
                }
                ]
            }
        },
        footer: {
            content: {
                socialMedia: [
                    { 'fab fa-facebook-f': 'https://www.facebook.com/' },
                    { 'fab fa-instagram': 'https://www.instagram.com/' },
                    { 'fab fa-twitter': 'https://twitter.com/?lang=en' },
                    { 'fab fa-youtube': 'https://www.youtube.com/' }
                ],
                copyright: '© 2021, CCXC'
            },
            styles: {
                bgColor: '#000',
                height: '5rem',
                display: 'flex',
                color: 'white'
            }
        }
    },
    theme2: {
        header: {
            content: {
                logo: 'Theme 2',
                links: [{ Ingresar: '/' }, { Inicio: '/' },
                { Productos: [{ Celulares: '/cellphones' }, { Videojuegos: '/videogames' }] },
                { icon: 'fas fa-shopping-cart cart' }]
            },
            styles: {
                bgColor: '#fff159',
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                height: '7.5rem',
            }
        },
        main: {
            content: {
                title: 'Todos los productos',
                products: [{
                    name: 'Redmi Note 9T 128gb',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/RedmiNote9T-4_300x.jpg?v=1613852932',
                    price: 78500
                },
                {
                    name: 'Redmi Note 9 Pro 128gb',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/RedmiNote9Pro-1_900x.jpg?v=1604954259',
                    price: 22500
                },
                {
                    name: 'Mi 10T Lite 5G 64gb',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/Mi10TLite-2_900x.jpg?v=1611942917',
                    price: 45500
                }, {
                    name: 'Poco X3 NFC 128GB',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/PocoX3-2_900x.jpg?v=1605841101',
                    price: 12500
                },
                {
                    name: 'iPhone 12 Pro Max 256GB',
                    img: 'https://cdn.shopify.com/s/files/1/0485/4566/1094/products/iPhone12ProMax-4_900x.jpg?v=1610739542',
                    price: 99999
                }
                ]
            }
        },
        footer: {
            content: {
                columns: [
                    {
                        img: 'https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg',
                        title: 'Paga con tarjeta o en efectivo',
                        description: 'Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!'
                    },
                    {
                        img: 'https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg',
                        title: 'Envío gratis desde $ 70.000',
                        description: 'Con solo estar registrado en CCXC, tienes envíos gratis en miles de productos seleccionados.'
                    },
                    {
                        img: 'https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg',
                        title: 'Seguridad, de principio a fin',
                        description: '¿No te gusta? ¡Devuélvelo! En CCXC, no hay nada que no puedas hacer, porque estás siempre protegido.'
                    },

                ],
                copyright: 'Copyright © 1999-2021 Ccxc Colombia.'
            },
            styles: {
                bgColor: '#fff159',
                height: '5rem',
                display: 'flex',
                color: 'white'
            }
        }
    },
};

