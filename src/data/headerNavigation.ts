import { INav } from '~/interfaces/menus/nav'

const dataHeaderNavigation: INav = [
    
     {  
        icon: '/images/comedor.png',
        icon2: '/images/comedor1.png',
         title: 'Comedor',
         url: '/shop/catalog/comedores',
         submenu: {
             type: 'menu',
             menu: [
                 {   

                     title: 'Sillas',
                     url: '/shop/catalog/sillas',
                     
                    //  children: [
                    //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                    //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                    //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                    //  ]
                 },
                 {
                    title: 'Mesas',
                    url: '/shop/catalog/mesas',
                    //  children: [
                    //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                    //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                    //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                    //  ]
                },
                {
                    title: 'Bufetero',
                    url: '/shop/catalog/bufetero',
                    //  children: [
                    //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                    //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                    //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                    //  ]
                },
             ]
         }
     },
     {
        icon: '/images/sala.png',
        icon2: '/images/sala1.png',
        title: 'Sala',
        url: '/shop/catalog/salas',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Sofa',
                    url: '/shop/catalog/sofas',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
                },
                {
                   title: 'Love seat',
                   url: '/shop/catalog/loveseat',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
               },
               {
                   title: 'Sillon',
                   url: '/shop/catalog/sillones',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
               },
               {
                title: 'Mesas centrales',
                url: '/shop/catalog/mesascentrales',
                //  children: [
                //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                //  ]
               },
               {
                title: 'Mesas laterales',
                url: '/shop/catalog/mesaslat',
                //  children: [
                //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                //  ]
               },
            ]
        }
    },
    {
        icon: '/images/recamara.png',
        icon2: '/images/recamara1.png',
        title: 'Recamara',
        url: '/shop/catalog/recamaras',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Cabecera',
                    url: '/shop/catalog/cabeceras',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
                },
                {
                   title: 'Buro',
                   url: '/shop/catalog/buros',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
               },
               {
                   title: 'Comoda',
                   url: '/shop/catalog/comodas',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
               },
            ]
        }
    },
    {
        icon: '/images/oficina.png',
        icon2: '/images/oficina1.png',
        title: 'Oficina',
        url: '/shop/catalog/oficina',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Escritorio',
                    url: '/shop/catalog/escritorios',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
                },
                {
                   title: 'Librero',
                   url: '/shop/catalog/librero',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
               },

            ]
        }
    },
    {
        icon: '/images/accesorios.png',
        icon2: '/images/accesorios1.png',
        title: 'Accesorios',
        url: '/shop/catalog/accesorios',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Lamparas',
                    url: '/shop/catalog/lamparas',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
                },
                {
                   title: 'Adornos',
                   url: '/shop/catalog/adornos',
                   //  children: [
                   //      { title: 'Telas', url: '/shop/category-grid-3-columns-sidebar' },
                   //      { title: 'Madera', url: '/shop/category-grid-4-columns-full' },
                   //      { title: 'Dimensiones', url: '/shop/category-grid-5-columns-full' }
                   //  ]
               },

            ]
        }
    },
     



]

export default dataHeaderNavigation
