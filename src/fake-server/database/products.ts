import { makeIdGenerator, nameToSlug } from '../utils'
import { IAttributeDef } from '../interfaces/attributes'
import {
    IProductAttributeDef,
    IProductAttributeValuesDef,
    IProductBadgesDef,
    IProductCategoriesDef,
    IProductDef,
    IProductImagesDef
} from '../interfaces/products'
import attributesDef from './attributes'
import brandsData from './brands'
import { categoriesListData, prepareCategory } from './categories'
import { IShopCategory } from '~/interfaces/category'
import { IProduct, IProductAttribute, IProductAttributeValue } from '~/interfaces/product'

const getId = makeIdGenerator()

const productsDef: IProductDef[] = [
    {
        slug: 'electric-planer-brandix-kl370090g-300-watts',
        name: 'Producto 1',
        price: 749,
        images: [
            '/images/products/product-1.jpg',
            '/images/products/product-1-1.jpg'
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ],
        
    },
    {
        slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
        name: 'Producto 2',
        price: 1019,
        images: [
            '/images/products/product-2.jpg',
            '/images/products/product-2-1.jpg'
        ],
        badges: 'hot',
        
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'zosch',
        categories: ['instruments'],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'drill-screwdriver-brandix-alx7054-200-watts',
        name: 'Producto 3',
        price: 850,
        images: [
            '/images/products/product-3.jpg',
            '/images/products/product-3-1.jpg'
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'brandix',
        categories: ['power-tools'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
        name: 'Producto 4',
        price: 949,
        compareAtPrice: 1189,
        images: [
            '/images/products/product-4.jpg',
            '/images/products/product-4-1.jpg'
        ],
        badges: 'sale',
        discount:'-20%',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-router-power-tool-2017erxpk',
        name: 'Producto 5',
        price: 1700,
        images: [
            '/images/products/product-5.jpg',
            '/images/products/product-5-1.jpg'
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-drilling-machine-dm2019kw4-4kw',
        name: 'Producto 6',
        price: 3199,
        images: [
            '/images/products/product-6.jpg',
            '/images/products/product-6-1.jpg'
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'wakita',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-pliers',
        name: 'Producto 7',
        price: 24,
        images: [
            '/images/products/product-7.jpg',
            '/images/products/product-7-1.jpg'
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'wevalt',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'water-hose-40cm',
        name: 'Producto 8',
        price: 15,
        images: [
            '/images/products/product-8.jpg',
            '/images/products/product-8-1.jpg'
        ],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'spanner-wrench',
        name: 'Producto 9',
        price: 19,
        images: [
            '/images/products/product-9.jpg',
            '/images/products/product-9-1.jpg'
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'water-tap',
        name: 'Producto 10',
        price: 15,
        images: [
            '/images/products/product-10.jpg',
            '/images/products/product-10-1.jpg'
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'hand-tool-kit',
        name: 'Producto 11',
        price: 149,
        images: [
            '/images/products/product-11.jpg',
            '/images/products/product-11-1.jpg'
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'hammer',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: 'Producto 12',
        price: 666.99,
        images: [
            '/images/products/product-12.jpg',
            '/images/products/product-12-1.jpg'
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-angle-grinder-kzx3890pqw',
        name: 'Producto 13',
        price: 649,
        images: [
            '/images/products/product-13.jpg',
            '/images/products/product-13-1.jpg'
        ],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        brand: 'mitasia',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-air-compressor-deltakx500',
        name: 'Producto 14',
        price: 1800,
        images: [
            '/images/products/product-14.jpg',
            '/images/products/product-14-1.jpg'
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-electric-jigsaw-jig7000bq',
        name: 'Producto 15',
        price: 290,
        images: [
            '/images/products/product-15.jpg',
            '/images/products/product-15-1.jpg'
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'brandix',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    },
    {
        slug: 'brandix-screwdriver-screw1500acc',
        name: 'Producto 16',
        price: 1499,
        images: [
            '/images/products/product-16.jpg',
            '/images/products/product-16-1.jpg',
            '/images/products/product-16-2.jpg',
            '/images/products/product-16-3.jpg',
            '/images/products/product-16-4.jpg'
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'metaggo',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true }
        ]
    }
]

function makeBadges (def?: IProductBadgesDef): string[] {
    if (!def) {
        return []
    }

    return typeof def === 'string' ? [def] : def.slice()
}

function makeImages (def?: IProductImagesDef): string[] {
    if (!def) {
        return []
    }

    return typeof def === 'string' ? [def] : def.slice()
}

function makeCategories (def?: IProductCategoriesDef): IShopCategory[] {
    let categoriesDef: string[] = []

    if (def) {
        categoriesDef = typeof def === 'string' ? [def] : def
    }

    return categoriesListData
        .filter(category => categoriesDef.includes(category.slug))
        .map(category => prepareCategory(category))
}

function makeAttributeValues (
    defs: IProductAttributeValuesDef,
    attributeDef: IAttributeDef
): IProductAttributeValue[] {
    const slugs = typeof defs === 'string' ? [defs] : defs

    return slugs.map((slug) => {
        const valueDef = attributeDef.values.find(x => x.slug === slug)

        if (!valueDef) {
            return null
        }

        return {
            ...valueDef,
            customFields: {}
        }
    }).filter(x => x !== null) as IProductAttributeValue[]
}

function makeAttributes (defs?: IProductAttributeDef[]): IProductAttribute[] {
    if (!defs) {
        return []
    }

    return defs.map((def) => {
        const attributeDef = attributesDef.find(x => x.slug === def.slug)

        if (!attributeDef) {
            return null
        }

        const values = makeAttributeValues(def.values, attributeDef)

        if (!values.length) {
            return null
        }

        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!def.featured,
            values,
            customFields: {}
        }
    }).filter(x => x !== null) as IProductAttribute[]
}

const productsData: IProduct[] = productsDef.map(productDef => ({
    id: getId(),
    name: productDef.name,
    sku: '83690/32',
    slug: productDef.slug || nameToSlug(productDef.name),
    price: productDef.price,
    compareAtPrice: productDef.compareAtPrice || null,
    images: makeImages(productDef.images),
    discount:productDef.discount,
    badges: makeBadges(productDef.badges),
    rating: productDef.rating !== undefined ? productDef.rating : 0,
    reviews: productDef.reviews !== undefined ? productDef.reviews : 0,
    availability: productDef.availability || 'in-stock',
    brand: brandsData.find(x => x.slug === productDef.brand) || null,
    categories: makeCategories(productDef.categories),
    attributes: makeAttributes(productDef.attributes),
    customFields: {}
}))

export default productsData
