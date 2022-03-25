import { makeIdGenerator, nameToSlug } from '../utils'
import { ICategoryDef } from '../interfaces/categories'
import { IBaseCategory, IShopCategory } from '~/interfaces/category'

const getId = makeIdGenerator()

const categoriesDef: ICategoryDef[] = [
    {
        name: 'Cat1',
        slug: 'instruments',
        items: 272,
        children: [
            {
                name: 'Sub1',
                slug: 'power-tools',
                image: 'assets/images/categories/category-1.jpg',
                items: 370,
                children: [
                    {
                        name: 'Subsub1',
                        slug: 'drills-mixers',
                        items: 57
                    },
                    {
                        name: 'Subsub2',
                        slug: 'cordless-screwdrivers',
                        items: 15
                    },
                    {
                        name: 'Subsub3',
                        slug: 'screwdrivers',
                        items: 126
                    },
                    {
                        name: 'Subsub4',
                        slug: 'wrenches',
                        items: 12
                    },
                    {
                        name: 'Subsub5',
                        slug: 'grinding-machines',
                        items: 25
                    },
                    {
                        name: 'Subsub6',
                        slug: 'milling-cutters',
                        items: 78
                    },
                    {
                        name: 'Subsub7',
                        slug: 'electric-spray-guns',
                        items: 3
                    }
                ]
            },
            {
                name: 'Sub2',
                slug: 'hand-tools',
                image: 'assets/images/categories/category-2.jpg',
                items: 134,
                children: [
                    {
                        name: 'SUBSUB1',
                        slug: 'tool-kits',
                        items: 57
                    },
                    {
                        name: 'SUBSUB1',
                        slug: 'hammers',
                        items: 15
                    },
                    {
                        name: 'SUBSUB2',
                        slug: 'spanners',
                        items: 5
                    },
                    {
                        name: 'SUBSUB3',
                        slug: 'handsaws',
                        items: 54
                    },
                    {
                        name: 'SUBSUB4',
                        slug: 'paint-tools',
                        items: 13
                    }
                ]
            },
            {
                name: 'Sub3',
                slug: 'machine-tools',
                image: 'assets/images/categories/category-3.jpg',
                items: 302,
                children: [
                    {
                        name: 'Subsub1',
                        slug: 'lathes',
                        items: 104
                    },
                    {
                        name: 'Subsub2',
                        slug: 'milling-machines',
                        items: 12
                    },
                    {
                        name: 'Subsub13',
                        slug: 'grinding-machines',
                        items: 67
                    },
                    {
                        name: 'Subsub4',
                        slug: 'cnc-machines',
                        items: 5
                    },
                    {
                        name: 'Subsub15',
                        slug: 'sharpening-machines',
                        items: 88
                    }
                ]
            },
            {
                name: 'Sub4',
                slug: 'power-machinery',
                image: 'assets/images/categories/category-4.jpg',
                items: 79,
                children: [
                    {
                        name: 'Subsub11',
                        slug: 'generators',
                        items: 23
                    },
                    {
                        name: 'Subsub2',
                        slug: 'compressors',
                        items: 76
                    },
                    {
                        name: 'Subsub3',
                        slug: 'winches',
                        items: 43
                    },
                    {
                        name: 'Subsub4',
                        slug: 'plasma-cutting',
                        items: 128
                    },
                    {
                        name: 'Subsub5',
                        slug: 'electric-motors',
                        items: 76
                    }
                ]
            },
            {
                name: 'Sub5',
                slug: 'measurement',
                image: 'assets/images/categories/category-5.jpg',
                items: 366,
                children: [
                    {
                        name: 'Subsub1',
                        slug: 'tape-measure',
                        items: 57
                    },
                    {
                        name: 'Subsub2',
                        slug: 'theodolites',
                        items: 5
                    },
                    {
                        name: 'Subsub3',
                        slug: 'thermal-imagers',
                        items: 3
                    },
                    {
                        name: 'Subsub4',
                        slug: 'calipers',
                        items: 37
                    },
                    {
                        name: 'Subsub5',
                        slug: 'levels',
                        items: 14
                    }
                ]
            },
            {
                name: 'Sub6',
                slug: 'clothes-and-ppe',
                image: 'assets/images/categories/category-6.jpg',
                items: 82,
                children: [
                    {
                        name: 'Subsub1',
                        slug: 'winter-workwear',
                        items: 24
                    },
                    {
                        name: 'Subsub2',
                        slug: 'summer-workwear',
                        items: 87
                    },
                    {
                        name: 'Subsub3',
                        slug: 'helmets',
                        items: 9
                    },
                    {
                        name: 'Subsub4',
                        slug: 'belts-and-bags',
                        items: 1
                    },
                    {
                        name: 'Subsub5',
                        slug: 'work-shoes',
                        items: 0
                    }
                ]
            }
        ]
    },
    {
        name: 'Cat2',
        slug: 'electronics',
        items: 54
    },
    {
        name: 'Cat3',
        slug: 'computers',
        items: 421
    },
    {
        name: 'Cat4',
        slug: 'automotive',
        items: 182
    },
    {
        name: 'Cat5',
        slug: 'furniture-appliances',
        items: 15
    },
    {
        name: 'Cat6',
        slug: 'music-books',
        items: 89
    },
    {
        name: 'Cat7',
        slug: 'health-beauty',
        items: 201
    }
]

type MakeFn<T extends IBaseCategory = IBaseCategory> = (def: ICategoryDef) => T;

function makeShopCategory (def: ICategoryDef): IShopCategory {
    return {
        type: 'shop',
        id: getId(),
        name: def.name,
        slug: def.slug || nameToSlug(def.name),
        image: def.image,
        items: def.items || 0,
        customFields: {},
        parent: undefined,
        children: []
    }
}

function walkTree<T extends IBaseCategory = IBaseCategory> (makeFn: MakeFn<T>, defs: ICategoryDef[], parent?: T): [T[], T[]] {
    let list: T[] = []

    const tree = defs.map((def) => {
        const category: T = makeFn(def)

        const [childrenTree, childrenList] = walkTree(makeFn, def.children || [], category)

        category.parent = parent
        category.children = childrenTree
        list = [...list, category, ...childrenList]

        return category
    })

    return [tree, list]
}

export function prepareCategory<T extends IBaseCategory> (category: T, depth?: number): T {
    let children

    if (depth && depth > 0) {
        children = category.children && category.children.map(x => prepareCategory(x, depth - 1))
    }

    return JSON.parse(JSON.stringify({
        ...category,
        parent: category.parent ? prepareCategory(category.parent) : null,
        children
    }))
}

export const [categoriesTreeData, categoriesListData] = walkTree(makeShopCategory, categoriesDef)
