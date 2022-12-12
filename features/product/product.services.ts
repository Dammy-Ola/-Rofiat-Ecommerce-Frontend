import { makeRequest } from '../../lib'
import { IProductRes, IProductsRes } from './index'

export const getProducts = async () => {
  return await makeRequest.get<IProductsRes>('/products')
}

export const getSingleProductBySlugName = async (slug: string) => {
  return await makeRequest.get<IProductRes>(`/products/${slug}`)
}
