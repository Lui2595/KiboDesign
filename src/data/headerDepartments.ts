import { INav } from '~/interfaces/menus/nav'

const dataHeaderDepartments: INav = [
    {
        icon: '/images/comedor.svg',
         title: 'Categoria',
        url: '/',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                image: {
                    ltr: '/images/megamenu/megamenu-1-ltr.jpg',
                    rtl: '/images/megamenu/megamenu-1-rtl.jpg'
                },
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                icon: '/images/comedor.svg',
                                 title: 'Categoria',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg',  title: 'Engravers', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Drills', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Wrenches', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Plumbing', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Wall Chaser', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Pneumatic Tools', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Milling Cutters', url: '' }
                                ]
                            },
                            { icon: '/images/comedor.svg',  title: 'Workbenches', url: '' },
                            { icon: '/images/comedor.svg',  title: 'Presses', url: '' },
                            { icon: '/images/comedor.svg',  title: 'Spray Guns', url: '' },
                            { icon: '/images/comedor.svg',  title: 'Riveters', url: '' }
                        ]
                    },
                    {
                        size: 3,
                        links: [
                            {
                                icon: '/images/comedor.svg',
                                 title: 'Hand Tools',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg',  title: 'Screwdrivers', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Handsaws', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Knives', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Axes', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Multitools', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                icon: '/images/comedor.svg',  title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg',  title: 'Motor Pumps', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Chainsaws', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Electric Saws', url: '' },
                                    { icon: '/images/comedor.svg',  title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Machine Tools',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Thread Cutting', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Chip Blowers', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Sharpening Machines', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Pipe Cutters', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Slotting machines', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Lathes', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 3,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Instruments',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Welding Equipment', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Power Tools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Hand Tools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Measuring Tool', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        icon: '/images/comedor.svg', title: 'Categoria',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'lg',
                image: {
                    ltr: '/images/megamenu/megamenu-2-ltr.jpg',
                    rtl: '/images/megamenu/megamenu-2-rtl.jpg'
                },
                columns: [
                    {
                        size: 4,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Hand Tools',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Screwdrivers', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Handsaws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Knives', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Axes', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Multitools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                icon: '/images/comedor.svg', title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Motor Pumps', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Chainsaws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Electric Saws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 4,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Machine Tools',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Thread Cutting', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Chip Blowers', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Sharpening Machines', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Pipe Cutters', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Slotting machines', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Lathes', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 4,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Instruments',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Welding Equipment', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Power Tools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Hand Tools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Measuring Tool', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        icon: '/images/comedor.svg', title: 'Categoria',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                image: {
                    ltr: '/images/megamenu/megamenu-3-ltr.jpg',
                    rtl: '/images/megamenu/megamenu-3-rtl.jpg'
                },
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Hand Tools',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Screwdrivers', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Handsaws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Knives', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Axes', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Multitools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                icon: '/images/comedor.svg', title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Motor Pumps', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Chainsaws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Electric Saws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    },
                    {
                        size: 6,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Instruments',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Welding Equipment', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Power Tools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Hand Tools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Measuring Tool', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        icon: '/images/comedor.svg', title: 'Categoria',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'sm',
                columns: [
                    {
                        size: 12,
                        links: [
                            {
                                icon: '/images/comedor.svg', title: 'Hand Tools',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Screwdrivers', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Handsaws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Knives', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Axes', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Multitools', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Paint Tools', url: '' }
                                ]
                            },
                            {
                                icon: '/images/comedor.svg', title: 'Garden Equipment',
                                url: '',
                                children: [
                                    { icon: '/images/comedor.svg', title: 'Motor Pumps', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Chainsaws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Electric Saws', url: '' },
                                    { icon: '/images/comedor.svg', title: 'Brush Cutters', url: '' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        icon: '/images/comedor.svg', title: 'Categoria',
        url: '',
        submenu: {
            type: 'menu',
            menu: [
                {
                    icon: '/images/comedor.svg', title: 'Soldering Equipment',
                    url: '',
                    children: [
                        { icon: '/images/comedor.svg', title: 'Soldering Station', url: '' },
                        { icon: '/images/comedor.svg', title: 'Soldering Dryers', url: '' },
                        { icon: '/images/comedor.svg', title: 'Gas Soldering Iron', url: '' },
                        { icon: '/images/comedor.svg', title: 'Electric Soldering Iron', url: '' }
                    ]
                },
                { icon: '/images/comedor.svg', title: 'Light Bulbs', url: '' },
                { icon: '/images/comedor.svg', title: 'Batteries', url: '' },
                { icon: '/images/comedor.svg', title: 'Light Fixtures', url: '' },
                { icon: '/images/comedor.svg', title: 'Warm Floor', url: '' },
                { icon: '/images/comedor.svg', title: 'Generators', url: '' },
                { icon: '/images/comedor.svg', title: 'UPS', url: '' }
            ]
        }
    },
    { icon: '/images/comedor.svg', title: 'Categoria', url: '' },
    { icon: '/images/comedor.svg', title: 'Categoria', url: '' },
    { icon: '/images/comedor.svg', title: 'Categoria', url: '' },
    { icon: '/images/comedor.svg', title: 'Categoria', url: '' },
    { icon: '/images/comedor.svg', title: 'Categoria', url: '' },
    { icon: '/images/comedor.svg', title: 'Categoria', url: '' }
]

export default dataHeaderDepartments
