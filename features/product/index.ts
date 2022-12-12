import ProductItem from './components/ProductItem'
import ProductDetails from './components/ProductDetails'
import ProductDescription from './components/ProductDescription'
import IProduct, { IProductRes, IProductsRes } from './product.interfaces'
import { getProducts, getSingleProductBySlugName } from './product.services'

export {
  ProductItem,
  ProductDetails,
  ProductDescription,
  getProducts,
  getSingleProductBySlugName,
}

export type { IProduct, IProductRes, IProductsRes }
