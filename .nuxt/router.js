import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b82573e = () => interopDefault(import('..\\src\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _5adf6552 = () => interopDefault(import('..\\src\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _3cd7c442 = () => interopDefault(import('..\\src\\pages\\offcanvas-cart.vue' /* webpackChunkName: "pages/offcanvas-cart" */))
const _630090b4 = () => interopDefault(import('..\\src\\pages\\account\\addresses\\index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _47e8de00 = () => interopDefault(import('..\\src\\pages\\account\\dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _0529fa55 = () => interopDefault(import('..\\src\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _004773b9 = () => interopDefault(import('..\\src\\pages\\account\\orders\\index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _35ea525f = () => interopDefault(import('..\\src\\pages\\account\\password.vue' /* webpackChunkName: "pages/account/password" */))
const _5dc18f95 = () => interopDefault(import('..\\src\\pages\\account\\profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _184cbdc4 = () => interopDefault(import('..\\src\\pages\\blog\\category-classic.vue' /* webpackChunkName: "pages/blog/category-classic" */))
const _0427606a = () => interopDefault(import('..\\src\\pages\\blog\\category-grid.vue' /* webpackChunkName: "pages/blog/category-grid" */))
const _2f3078ba = () => interopDefault(import('..\\src\\pages\\blog\\category-left-sidebar.vue' /* webpackChunkName: "pages/blog/category-left-sidebar" */))
const _416719c2 = () => interopDefault(import('..\\src\\pages\\blog\\category-list.vue' /* webpackChunkName: "pages/blog/category-list" */))
const _62679980 = () => interopDefault(import('..\\src\\pages\\blog\\post-classic.vue' /* webpackChunkName: "pages/blog/post-classic" */))
const _1e619c51 = () => interopDefault(import('..\\src\\pages\\blog\\post-full.vue' /* webpackChunkName: "pages/blog/post-full" */))
const _788bc9cf = () => interopDefault(import('..\\src\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _9703eef0 = () => interopDefault(import('..\\src\\pages\\shop\\catalog\\index.vue' /* webpackChunkName: "pages/shop/catalog/index" */))
const _4dc1dc4a = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-3-columns-sidebar.vue' /* webpackChunkName: "pages/shop/category-grid-3-columns-sidebar" */))
const _4eb3d182 = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-4-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-4-columns-full" */))
const _c5900d44 = () => interopDefault(import('..\\src\\pages\\shop\\category-grid-5-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-5-columns-full" */))
const _394be5ee = () => interopDefault(import('..\\src\\pages\\shop\\category-list.vue' /* webpackChunkName: "pages/shop/category-list" */))
const _70f9a70b = () => interopDefault(import('..\\src\\pages\\shop\\category-right-sidebar.vue' /* webpackChunkName: "pages/shop/category-right-sidebar" */))
const _1ec1016d = () => interopDefault(import('..\\src\\pages\\shop\\checkout\\index.vue' /* webpackChunkName: "pages/shop/checkout/index" */))
const _6c8cbd86 = () => interopDefault(import('..\\src\\pages\\shop\\compare.vue' /* webpackChunkName: "pages/shop/compare" */))
const _bc7ce258 = () => interopDefault(import('..\\src\\pages\\shop\\product-columnar.vue' /* webpackChunkName: "pages/shop/product-columnar" */))
const _267460c2 = () => interopDefault(import('..\\src\\pages\\shop\\product-sidebar.vue' /* webpackChunkName: "pages/shop/product-sidebar" */))
const _3dee008a = () => interopDefault(import('..\\src\\pages\\shop\\product-standard.vue' /* webpackChunkName: "pages/shop/product-standard" */))
const _493830ed = () => interopDefault(import('..\\src\\pages\\shop\\track-order.vue' /* webpackChunkName: "pages/shop/track-order" */))
const _0f574674 = () => interopDefault(import('..\\src\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _7aaa68c4 = () => interopDefault(import('..\\src\\pages\\site\\about-us.vue' /* webpackChunkName: "pages/site/about-us" */))
const _b12caafa = () => interopDefault(import('..\\src\\pages\\site\\cobertura.vue' /* webpackChunkName: "pages/site/cobertura" */))
const _7c367bd6 = () => interopDefault(import('..\\src\\pages\\site\\components.vue' /* webpackChunkName: "pages/site/components" */))
const _741134aa = () => interopDefault(import('..\\src\\pages\\site\\contact-us.vue' /* webpackChunkName: "pages/site/contact-us" */))
const _841df6f2 = () => interopDefault(import('..\\src\\pages\\site\\contact-us-alt.vue' /* webpackChunkName: "pages/site/contact-us-alt" */))
const _f1f102f4 = () => interopDefault(import('..\\src\\pages\\site\\faq.vue' /* webpackChunkName: "pages/site/faq" */))
const _246ad710 = () => interopDefault(import('..\\src\\pages\\site\\not-found.vue' /* webpackChunkName: "pages/site/not-found" */))
const _65e03c10 = () => interopDefault(import('..\\src\\pages\\site\\privacy.vue' /* webpackChunkName: "pages/site/privacy" */))
const _3e820677 = () => interopDefault(import('..\\src\\pages\\site\\terms.vue' /* webpackChunkName: "pages/site/terms" */))
const _97b08d22 = () => interopDefault(import('..\\src\\pages\\site\\typography.vue' /* webpackChunkName: "pages/site/typography" */))
const _f9a2d268 = () => interopDefault(import('..\\src\\pages\\shop\\checkout\\success\\_id.vue' /* webpackChunkName: "pages/shop/checkout/success/_id" */))
const _6f23301c = () => interopDefault(import('..\\src\\pages\\account\\addresses\\_id.vue' /* webpackChunkName: "pages/account/addresses/_id" */))
const _64611061 = () => interopDefault(import('..\\src\\pages\\account\\orders\\_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _9a713180 = () => interopDefault(import('..\\src\\pages\\shop\\catalog\\_slug.vue' /* webpackChunkName: "pages/shop/catalog/_slug" */))
const _3a90bd47 = () => interopDefault(import('..\\src\\pages\\shop\\products\\_slug.vue' /* webpackChunkName: "pages/shop/products/_slug" */))
const _9267738e = () => interopDefault(import('..\\src\\pages\\search\\_slug.vue' /* webpackChunkName: "pages/search/_slug" */))
const _82289eae = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _3b82573e,
    name: "account"
  }, {
    path: "/home-two",
    component: _5adf6552,
    name: "home-two"
  }, {
    path: "/offcanvas-cart",
    component: _3cd7c442,
    name: "offcanvas-cart"
  }, {
    path: "/account/addresses",
    component: _630090b4,
    name: "account-addresses"
  }, {
    path: "/account/dashboard",
    component: _47e8de00,
    name: "account-dashboard"
  }, {
    path: "/account/login",
    component: _0529fa55,
    name: "account-login"
  }, {
    path: "/account/orders",
    component: _004773b9,
    name: "account-orders"
  }, {
    path: "/account/password",
    component: _35ea525f,
    name: "account-password"
  }, {
    path: "/account/profile",
    component: _5dc18f95,
    name: "account-profile"
  }, {
    path: "/blog/category-classic",
    component: _184cbdc4,
    name: "blog-category-classic"
  }, {
    path: "/blog/category-grid",
    component: _0427606a,
    name: "blog-category-grid"
  }, {
    path: "/blog/category-left-sidebar",
    component: _2f3078ba,
    name: "blog-category-left-sidebar"
  }, {
    path: "/blog/category-list",
    component: _416719c2,
    name: "blog-category-list"
  }, {
    path: "/blog/post-classic",
    component: _62679980,
    name: "blog-post-classic"
  }, {
    path: "/blog/post-full",
    component: _1e619c51,
    name: "blog-post-full"
  }, {
    path: "/shop/cart",
    component: _788bc9cf,
    name: "shop-cart"
  }, {
    path: "/shop/catalog",
    component: _9703eef0,
    name: "shop-catalog"
  }, {
    path: "/shop/category-grid-3-columns-sidebar",
    component: _4dc1dc4a,
    name: "shop-category-grid-3-columns-sidebar"
  }, {
    path: "/shop/category-grid-4-columns-full",
    component: _4eb3d182,
    name: "shop-category-grid-4-columns-full"
  }, {
    path: "/shop/category-grid-5-columns-full",
    component: _c5900d44,
    name: "shop-category-grid-5-columns-full"
  }, {
    path: "/shop/category-list",
    component: _394be5ee,
    name: "shop-category-list"
  }, {
    path: "/shop/category-right-sidebar",
    component: _70f9a70b,
    name: "shop-category-right-sidebar"
  }, {
    path: "/shop/checkout",
    component: _1ec1016d,
    name: "shop-checkout"
  }, {
    path: "/shop/compare",
    component: _6c8cbd86,
    name: "shop-compare"
  }, {
    path: "/shop/product-columnar",
    component: _bc7ce258,
    name: "shop-product-columnar"
  }, {
    path: "/shop/product-sidebar",
    component: _267460c2,
    name: "shop-product-sidebar"
  }, {
    path: "/shop/product-standard",
    component: _3dee008a,
    name: "shop-product-standard"
  }, {
    path: "/shop/track-order",
    component: _493830ed,
    name: "shop-track-order"
  }, {
    path: "/shop/wishlist",
    component: _0f574674,
    name: "shop-wishlist"
  }, {
    path: "/site/about-us",
    component: _7aaa68c4,
    name: "site-about-us"
  }, {
    path: "/site/cobertura",
    component: _b12caafa,
    name: "site-cobertura"
  }, {
    path: "/site/components",
    component: _7c367bd6,
    name: "site-components"
  }, {
    path: "/site/contact-us",
    component: _741134aa,
    name: "site-contact-us"
  }, {
    path: "/site/contact-us-alt",
    component: _841df6f2,
    name: "site-contact-us-alt"
  }, {
    path: "/site/faq",
    component: _f1f102f4,
    name: "site-faq"
  }, {
    path: "/site/not-found",
    component: _246ad710,
    name: "site-not-found"
  }, {
    path: "/site/privacy",
    component: _65e03c10,
    name: "site-privacy"
  }, {
    path: "/site/terms",
    component: _3e820677,
    name: "site-terms"
  }, {
    path: "/site/typography",
    component: _97b08d22,
    name: "site-typography"
  }, {
    path: "/shop/checkout/success/:id?",
    component: _f9a2d268,
    name: "shop-checkout-success-id"
  }, {
    path: "/account/addresses/:id",
    component: _6f23301c,
    name: "account-addresses-id"
  }, {
    path: "/account/orders/:id",
    component: _64611061,
    name: "account-orders-id"
  }, {
    path: "/shop/catalog/:slug",
    component: _9a713180,
    name: "shop-catalog-slug"
  }, {
    path: "/shop/products/:slug?",
    component: _3a90bd47,
    name: "shop-products-slug"
  }, {
    path: "/search/:slug?",
    component: _9267738e,
    name: "search-slug"
  }, {
    path: "/",
    component: _82289eae,
    name: "index"
  }, {
    path: "/:lang/account",
    component: _3b82573e,
    name: "lang-account"
  }, {
    path: "/:lang/home-two",
    component: _5adf6552,
    name: "lang-home-two"
  }, {
    path: "/:lang/offcanvas-cart",
    component: _3cd7c442,
    name: "lang-offcanvas-cart"
  }, {
    path: "/:lang/account/addresses",
    component: _630090b4,
    name: "lang-account-addresses"
  }, {
    path: "/:lang/account/dashboard",
    component: _47e8de00,
    name: "lang-account-dashboard"
  }, {
    path: "/:lang/account/login",
    component: _0529fa55,
    name: "lang-account-login"
  }, {
    path: "/:lang/account/orders",
    component: _004773b9,
    name: "lang-account-orders"
  }, {
    path: "/:lang/account/password",
    component: _35ea525f,
    name: "lang-account-password"
  }, {
    path: "/:lang/account/profile",
    component: _5dc18f95,
    name: "lang-account-profile"
  }, {
    path: "/:lang/blog/category-classic",
    component: _184cbdc4,
    name: "lang-blog-category-classic"
  }, {
    path: "/:lang/blog/category-grid",
    component: _0427606a,
    name: "lang-blog-category-grid"
  }, {
    path: "/:lang/blog/category-left-sidebar",
    component: _2f3078ba,
    name: "lang-blog-category-left-sidebar"
  }, {
    path: "/:lang/blog/category-list",
    component: _416719c2,
    name: "lang-blog-category-list"
  }, {
    path: "/:lang/blog/post-classic",
    component: _62679980,
    name: "lang-blog-post-classic"
  }, {
    path: "/:lang/blog/post-full",
    component: _1e619c51,
    name: "lang-blog-post-full"
  }, {
    path: "/:lang/shop/cart",
    component: _788bc9cf,
    name: "lang-shop-cart"
  }, {
    path: "/:lang/shop/catalog",
    component: _9703eef0,
    name: "lang-shop-catalog"
  }, {
    path: "/:lang/shop/category-grid-3-columns-sidebar",
    component: _4dc1dc4a,
    name: "lang-shop-category-grid-3-columns-sidebar"
  }, {
    path: "/:lang/shop/category-grid-4-columns-full",
    component: _4eb3d182,
    name: "lang-shop-category-grid-4-columns-full"
  }, {
    path: "/:lang/shop/category-grid-5-columns-full",
    component: _c5900d44,
    name: "lang-shop-category-grid-5-columns-full"
  }, {
    path: "/:lang/shop/category-list",
    component: _394be5ee,
    name: "lang-shop-category-list"
  }, {
    path: "/:lang/shop/category-right-sidebar",
    component: _70f9a70b,
    name: "lang-shop-category-right-sidebar"
  }, {
    path: "/:lang/shop/checkout",
    component: _1ec1016d,
    name: "lang-shop-checkout"
  }, {
    path: "/:lang/shop/compare",
    component: _6c8cbd86,
    name: "lang-shop-compare"
  }, {
    path: "/:lang/shop/product-columnar",
    component: _bc7ce258,
    name: "lang-shop-product-columnar"
  }, {
    path: "/:lang/shop/product-sidebar",
    component: _267460c2,
    name: "lang-shop-product-sidebar"
  }, {
    path: "/:lang/shop/product-standard",
    component: _3dee008a,
    name: "lang-shop-product-standard"
  }, {
    path: "/:lang/shop/track-order",
    component: _493830ed,
    name: "lang-shop-track-order"
  }, {
    path: "/:lang/shop/wishlist",
    component: _0f574674,
    name: "lang-shop-wishlist"
  }, {
    path: "/:lang/site/about-us",
    component: _7aaa68c4,
    name: "lang-site-about-us"
  }, {
    path: "/:lang/site/cobertura",
    component: _b12caafa,
    name: "lang-site-cobertura"
  }, {
    path: "/:lang/site/components",
    component: _7c367bd6,
    name: "lang-site-components"
  }, {
    path: "/:lang/site/contact-us",
    component: _741134aa,
    name: "lang-site-contact-us"
  }, {
    path: "/:lang/site/contact-us-alt",
    component: _841df6f2,
    name: "lang-site-contact-us-alt"
  }, {
    path: "/:lang/site/faq",
    component: _f1f102f4,
    name: "lang-site-faq"
  }, {
    path: "/:lang/site/not-found",
    component: _246ad710,
    name: "lang-site-not-found"
  }, {
    path: "/:lang/site/privacy",
    component: _65e03c10,
    name: "lang-site-privacy"
  }, {
    path: "/:lang/site/terms",
    component: _3e820677,
    name: "lang-site-terms"
  }, {
    path: "/:lang/site/typography",
    component: _97b08d22,
    name: "lang-site-typography"
  }, {
    path: "/:lang/shop/checkout/success/:id?",
    component: _f9a2d268,
    name: "lang-shop-checkout-success-id"
  }, {
    path: "/:lang/account/addresses/:id",
    component: _6f23301c,
    name: "lang-account-addresses-id"
  }, {
    path: "/:lang/account/orders/:id",
    component: _64611061,
    name: "lang-account-orders-id"
  }, {
    path: "/:lang/shop/catalog/:slug",
    component: _9a713180,
    name: "lang-shop-catalog-slug"
  }, {
    path: "/:lang/shop/products/:slug?",
    component: _3a90bd47,
    name: "lang-shop-products-slug"
  }, {
    path: "/:lang/search/:slug?",
    component: _9267738e,
    name: "lang-search-slug"
  }, {
    path: "/:lang/",
    component: _82289eae,
    name: "lang-index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
