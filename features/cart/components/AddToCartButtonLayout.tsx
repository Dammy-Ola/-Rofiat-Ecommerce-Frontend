import { FC } from 'react'
import { CallAndAddToCartButton, ICartProduct } from '../index'

const AddToCartButtonLayout: FC<{ product: ICartProduct }> = ({ product }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden py-5 md:py-0 shadow-2xl md:shadow-none w-full bg-white md:bg-none">
      <div className="w-4/5 mx-auto md:w-full flex justify-center items-center">
        <CallAndAddToCartButton product={product} />
      </div>
    </div>
  )
}

export default AddToCartButtonLayout
