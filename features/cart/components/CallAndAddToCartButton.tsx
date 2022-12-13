import { FC } from 'react'
import { CallButton } from '../../../components'
import { useAppSelector } from '../../../hooks'
import { AddToCartButton, AddToCartQtyButton, ICartProduct } from '../index'

const CallAndAddToCartButton: FC<{ product: ICartProduct }> = ({ product }) => {
  const { cartItems } = useAppSelector((state) => state.cart)

  const isProductInCart = cartItems.some((item) => item._id === product._id)

  return (
    <>
      <div className="w-2/12 mr-1">
        <CallButton />
      </div>
      <div className="w-10/12 ml-1">
        {!isProductInCart ? (
          <AddToCartButton product={product} />
        ) : (
          <AddToCartQtyButton />
        )}
      </div>
    </>
  )
}

export default CallAndAddToCartButton
