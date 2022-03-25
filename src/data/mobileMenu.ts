import { IMobileMenu } from '~/interfaces/menus/mobile-menu'

const dataMobileMenu: IMobileMenu = [
    {
        type: 'link',
        icon: '/images/comedor.svg',
        title: 'inicio',
        url: '/',

    },

    {
        icon: '/images/comedor.svg',
        type: 'link',
        title: 'Comedor',
        url: '/shop/catalog/comedores',
        children: [
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Sillas',
                url: '/shop/catalog/sillas'
                
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Mesas',
                url: '/shop/catalog/mesas'
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Bufetero',
                url: '/shop/catalog/bufetero'
            },
        ]
    },
    {
        icon: '/images/comedor.svg',
        type: 'link',
        title: 'Sala',
        url: '/shop/catalog/salas',
        children: [
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'sofa',
                url: '/shop/catalog/sofas'
                
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Love seat',
                url: '/shop/catalog/loveseat'
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Sillon',
                url: '/shop/catalog/sillones'
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Mesas centrales',
                url: '/shop/catalog/mesascentrales'
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Mesas laterales',
                url: '/shop/catalog/mesaslat'
            },
        ]
    },
    {
        icon: '/images/comedor.svg',
        type: 'link',
        title: 'Recamara',
        url: '/shop/catalog/recamaras',
        children: [
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Cabecera',
                url: '/shop/catalog/cabeceras'
                
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Buro',
                url: '/shop/catalog/buros'
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Comoda',
                url: '/shop/catalog/comodas'
            },
        ]
    },
    {
        icon: '/images/comedor.svg',
        type: 'link',
        title: 'Oficina',
        url: '/shop/catalog/oficina',
        children: [
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Escritorio',
                url: '/shop/catalog/escritorios'
                
            },
            {
                icon: '/images/comedor.svg',
                type: 'link',
                title: 'Librero',
                url: '/shop/catalog/librero'
            },
        ]
    },
]

export default dataMobileMenu
