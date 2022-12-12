export default interface IProduct {
  _id: string
  id?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  price?: number | 0
  description?: string | undefined
}

export interface IProductsRes {
  success: boolean
  count: number | 0
  products: IProduct[]
}

export interface IProductRes {
  success: boolean
  product: IProduct
}
