/* eslint-disable @typescript-eslint/no-unused-vars,arrow-body-style */
// noinspection ES6UnusedImports
// import qs from 'query-string';
import { getCategories, getCategoryBySlug } from '~/fake-server/endpoints/categories'
import { IShopCategory } from '~/interfaces/category'
import { IProduct, IProductsList } from '~/interfaces/product'
import { IFilterValues, IListOptions } from '~/interfaces/list'
import {
    getDiscountedProducts,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductBySlug,
   
    getRelatedProducts,
    getSuggestions,
    getTopRatedProducts
} from '~/fake-server/endpoints/products'
import $axios ,{ AxiosRequestConfig, AxiosPromise } from 'axios';
export interface GetCategoriesOptions {
    depth?: number;
}

export interface GetCategoryBySlugOptions {
    depth?: number;
}

export interface GetRelatedProductsOptions {
    limit?: number;
}

export interface GetProductsOptions {
    limit?: number;
    category?: string;
}

export type GetSuggestionsOptions = {
    limit?: number;
    category?: string;
};
//const  urlgeneral="http://127.0.0.1:8000/";
const  urlgeneral="https://admin.kibodesign.mx/api/public/";
const shopApi = {
    /**
     * Returns array of categories.
     */
     pedido:(data:any):Promise<any>=>{

        let a= ($axios.post(urlgeneral+"pedido",data)).then(response => {            
             return response
        }).catch(error=>{
            return error;
        }); 
        
    return a;  

    },
    search:(search:any):Promise<any>=>{

       
        let a= ($axios.post(urlgeneral+"search",search)).then(response => {            
             return response
        }).catch(error=>{
            return error;
        }); 
        
        return a;
    },
    deldir:(id:string):Promise<any>=>{

        let a= ($axios.get(urlgeneral+"deldireccion/"+id)).then(response => {            
             return response
        }).catch(error=>{
            return error;
        }); 
        
    return a;  

    },adddireccion:(data:any):Promise<any>=>{

        let a= ($axios.post(urlgeneral+"direccionadd",data)).then(response => {            
             return response
        }).catch(error=>{
            return error;
        }); 
        
    return a;  

    },    editdireccion:(data:any):Promise<any>=>{

        let a= ($axios.post(urlgeneral+"editdireccion",data)).then(response => {            
             return response
        }).catch(error=>{
            return error;
        }); 
        
    return a;  

    },order:(id:string):Promise<any>=>{

        let a= ($axios.get(urlgeneral+"ordenes/"+id )).then(response => {
            // data=response.data;
            //console.log(response);
             return response
        }).catch(error=>{
            return error;
        }); 
        
    return a;  

    },
    updateUser:(data:any):Promise<any>=>{

        let a= ($axios.post(urlgeneral+"userupdate",data,data.config )).then(response => {
            // data=response.data;
            //console.log(response);
             return response
        }).catch(error=>{
            return error;
        }); 
        
    return a;  

    },
    banner:():Promise<any>=>{
        
        //let a=data;
        let a= ($axios.get(urlgeneral+"banner" )).then(response => {
            // data=response.data;
            //console.log(response);
             return response
        }); 
        
    return a;  

    },
    validarUser:(data:any):Promise<any>=>{
        let response= ($axios.get(urlgeneral+"validateuser", data)).then(response => {
            if(response.status==200){
                return {
                    status:response.status,
                    data:response.data
                };  
            }    
        })
        return response;
    },
    register:(data:any):Promise<any>=>{
        let response= ($axios.post(urlgeneral+"user", data)).then(response => {
            return {
                status:response.status,
                data:response.data
            };               
        }).catch(error=>{
            return "error";
        }); ; 
        return response;
    },
    loginfb:(data:any):Promise<any>=>{
        let response= ($axios.post(urlgeneral+"loginfb", data)).then(response => {
            return {
                status:response.status,
                data:response.data
            };               
        }); 
        return response;
    },
    login:(data:any):Promise<any>=>{
        let response= ($axios.post(urlgeneral+"login", data)).then(response => {
            return {
                status:response.status,
                data:response.data
            };               
        }); 
        return response;
    },
    slides:():Promise<any>=>{
        
        //let a=data;
        let a= ($axios.get(urlgeneral+"slides" )).then(response => {
            // data=response.data;
            //console.log(response);
             return response
        }); 
        
    return a;  

    },
    postreview:(data:any):Promise<any>=>{
        //alert(JSON.stringify(data))
        //let a=data;
        let a= ($axios.post(urlgeneral+"review", data)).then(response => {
            // data=response.data;
             return response
        }); 
    return a;  

    },
    getCategories: (options: GetCategoriesOptions = {}): Promise<IShopCategory[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/categories.json?depth=2
         *
         * where:
         * - 2 = options.depth
         */
        // return fetch(`https://example.com/api/categories.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getCategories(options)
    },
    /**
     * Returns category by slug.
     */
    getCategoryBySlug: (slug: string, options: GetCategoryBySlugOptions = {}): Promise<IShopCategory> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/categories/power-tools.json?depth=2
         *
         * where:
         * - power-tools = slug
         * - 2           = options.depth
         */
        // return fetch(`https://example.com/api/categories/${slug}.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        
        //let a=getCategoryBySlug(slug, options)
      //  console.log(a)
        //return  a;
        let url=urlgeneral+'categorias';
        let opciones ={"opciones":options,
                        "slug":slug };
        //console.log(opciones);
        let a= ($axios.post(url, opciones)).then(response => {
                // data=response.data;
                 return response.data
            }); 
        return a;  
        //return getCategoryBySlug(slug, options)
    },
    /**
     * Returns product.
     */
    getProductBySlug: (slug: string): Promise<IProduct> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/screwdriver-a2017.json
         *
         * where:
         * - screwdriver-a2017 = slug
         */
        // return fetch(`https://example.com/api/products/${slug}.json`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        let a= ($axios.get(urlgeneral+'productos/'+slug)).then(response => {
            return response.data.data[0];
        });
        //console.log(a);
        return a;
        // return getProductBySlug(slug)
    },
    /**
     * Returns array of related products.
     */
    getRelatedProducts: (slug: string, options: GetRelatedProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/screwdriver-a2017/related.json&limit=3
         *
         * where:
         * - screwdriver-a2017 = slug
         * - limit             = options.limit
         */
        // return fetch(`https://example.com/api/products/${slug}/related.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getRelatedProducts(slug, options)
    },
    /**
     * Return products list.
     */
    getProductsList: (options: IListOptions = {}, filters: IFilterValues = {}): Promise<IProductsList> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products.json?page=2&limit=12&sort=name_desc&filter_category=screwdriwers&filter_price=500-1000
         *
         * where:
         * - page            = options.page
         * - limit           = options.limit
         * - sort            = options.sort
         * - filter_category = filters.category
         * - filter_price    = filters.price
         */
        // const params = { ...options };
        //
        // Object.keys(filters).forEach((slug) => {
        //     params[`filter_${slug}`] = filters[slug];
        // });
        //
        // return fetch(`https://example.com/api/products.json?${qs.stringify(params)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        let opciones ={"opciones":options,
                        "filtros":filters }
        let url=urlgeneral+'productoslista';
        if(options.hasOwnProperty("pageUrl") ){
            if(options.pageUrl!=undefined){
                url=options.pageUrl;
            }
           
        }
        //console.log(opciones);  
        let a= ($axios.post(url, opciones)).then(response => {
                // data=response.data;
                response.data.meta.sort="default";
                 return response.data
            });   
      
       
        //return getProductsList(options, filters)
        return a;
  
    },
    /**
     * Returns array of featured products.
     */
    getFeaturedProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/featured-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/featured-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        //console.log(options);
        let a= ($axios.post(urlgeneral+'productos', options)).then(response => {
            return response.data.data
        });
        //let b=getFeaturedProducts(options);
    
        return a;
       // return getFeaturedProducts(options)
    },
    categoriasrecientes(){
        let a= ($axios.get(urlgeneral+'categoriasrecientes')).then(response => {
            return response.data
        });
        return a;
    },
    /**
     * Returns array of latest products.
     */
    getLatestProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/latest-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/latest-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getLatestProducts(options)
    },
    /**
     * Returns an array of top rated products.
     */
    getTopRatedProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/top-rated-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/top-rated-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getTopRatedProducts(options)
    },
    /**
     * Returns an array of discounted products.
     */
    getDiscountedProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/discounted-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/discounted-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getDiscountedProducts(options)
    },
    /**
     * Returns an array of most popular products.
     */
    getPopularProducts: (options: GetProductsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/popular-products.json?limit=3&category=power-tools
         *
         * where:
         * - 3           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/popular-products.json?${qs.stringify(options)}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getPopularProducts(options)
    },
    /**
     * Returns search suggestions.
     */
    getSuggestions: (query: string, options: GetSuggestionsOptions = {}): Promise<IProduct[]> => {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/search/suggestions.json?query=screwdriver&limit=5&category=power-tools
         *
         * where:
         * - screwdriver = query
         * - 5           = options.limit
         * - power-tools = options.category
         */
        // return fetch(`https://example.com/api/search/suggestions.json?${qs.stringify({ ...options, query })}`)
        //     .then((response) => response.json());

        // This is for demonstration purposes only. Remove it and use the code above.
        return getSuggestions(query, options)
    }
}

export default shopApi
