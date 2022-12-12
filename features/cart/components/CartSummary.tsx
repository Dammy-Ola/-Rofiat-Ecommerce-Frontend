import { CheckoutButton } from '../../checkout'

const CartSummary = () => {
  return (
    <>
      <h3 className="uppercase border-b pb-3">Cart Summmary</h3>
      <h3 className="my-5">Subtotal: Ghc 2,399.00</h3>

      <CheckoutButton />
    </>
  )
}

export default CartSummary
