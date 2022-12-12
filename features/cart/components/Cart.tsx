import { CheckoutButtonLayout } from '../../checkout'
import { CartItem, CartSummary } from '../index'

const Cart = () => {
  return (
    <div className="w-4/5 mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1 md:order-last">
          <CartSummary />
        </div>
        <div className="md:col-span-2 md:order-first">
          <h3 className="uppercase border-b pb-3">Cart (2)</h3>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <CheckoutButtonLayout />
    </div>
  )
}

export default Cart
