import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartInitialState, ICartProduct } from './index'

const initialState: ICartInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  cartItems: [],
}

export const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ICartProduct>) => {
      state.isLoading = true

      // New product to be added to the cart
      const newProduct = action.payload

      //   Checking if product is already in the cart
      const productIsInCart = state.cartItems.find(
        (cartItem) => cartItem._id === newProduct._id
      )

      if (productIsInCart) {
        if (typeof newProduct.price !== 'undefined') {
          // If product is in the cart, increase the quantity by one and increase the subTotal by the new product price
          productIsInCart.qty++
          productIsInCart.subTotal += newProduct.price
        }
      } else {
        if (typeof newProduct.price !== 'undefined') {
          // Else add the new product to cart and make the price to be the same as the subTotal
          newProduct.subTotal = newProduct.price
          state.cartItems.push(newProduct)
        }
      }
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<ICartProduct['_id']>
    ) => {
      state.isLoading = true

      // ID of the product to be removed from the cart
      const cartProductId = action.payload

      // Checking if product is already in the cart
      const productIsInCart = state.cartItems.find(
        (cartItem) => cartItem._id === cartProductId
      )

      if (productIsInCart) {
        if (productIsInCart.qty === 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem._id !== cartProductId
          )
        } else {
          if (typeof productIsInCart.price !== 'undefined') {
            productIsInCart.qty--
            productIsInCart.subTotal -= productIsInCart.price
          }
        }
      }
    },
    resetCart: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.error = null
      state.cartItems = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductFromCart, resetCart } =
  cartSlices.actions

export default cartSlices.reducer
