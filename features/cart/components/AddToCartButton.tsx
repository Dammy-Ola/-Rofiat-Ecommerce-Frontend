import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../../hooks'
import { addProductToCart, ICartProduct } from '../index'

const AddToCartButton: FC<{ product: ICartProduct }> = ({ product }) => {
  const dispatch = useAppDispatch()

  const addToCart = () => {
    dispatch(addProductToCart(product))
  }

  useEffect(() => {}, [dispatch])

  return (
    <button
      onClick={addToCart}
      className="block w-full bg-green-600 text-white rounded-md py-3 uppercase text-center border-none hover:text-green-600 hover:bg-white hover:border hover:border-green-600"
    >
      Add to cart
    </button>
  )
}

export default AddToCartButton
