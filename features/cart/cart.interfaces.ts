import { IProduct } from '../product'

export interface ICartProduct extends IProduct {
  qty: number
  subTotal: number
}

export default interface ICart {
  cartItems: ICartProduct[]
}

export interface ICartInitialState extends ICart {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: null
}
