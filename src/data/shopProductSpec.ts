import { ISpec } from '~/interfaces/spec'

const dataShopProductSpec: ISpec = [
    {
        name: 'General',
        attributes: [
            { titulo: 'Material', des: 'Aluminium, Plastic' },
            { titulo: 'Engine Type', des: 'Brushless' },
            { titulo: 'Battery Voltage', des: '18 V' },
            { titulo: 'Battery Type', des: 'Li-lon' },
            { titulo: 'Number of Speeds', des: '2' },
            { titulo: 'Charge Time', des: '1.08 h' },
            { titulo: 'Weight', des: '1.5 kg' }
        ]
    },
    {
        name: 'Dimensions',
        attributes: [
            { titulo: 'Length', des: '99 mm' },
            { titulo: 'Width', des: '207 mm' },
            { titulo: 'Height', des: '208 mm' }
        ]
    }
]

export default dataShopProductSpec
