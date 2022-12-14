import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../../hooks'
import { addProductToCart, ICartProduct, removeProductFromCart } from '../index'

const AddToCartQtyButton: FC<{
  product: ICartProduct
  cartProductId: ICartProduct['_id']
}> = ({ product, cartProductId }) => {
  const dispatch = useAppDispatch()

  const increaseCartQty = () => {
    dispatch(addProductToCart(product))
  }

  const decreaseCartQty = () => {
    dispatch(removeProductFromCart(cartProductId))
  }

  useEffect(() => {}, [dispatch])

  return (
    <div className="flex justify-between items-center w-full md:hidden">
      <span
        onClick={decreaseCartQty}
        className="bg-green-600 text-center text-white text-2xl font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer"
      >
        -
      </span>
      <span>1</span>
      <span
        onClick={increaseCartQty}
        className="bg-green-600 text-center text-white text-2xl font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer"
      >
        +
      </span>
    </div>
  )
}

export default AddToCartQtyButton
