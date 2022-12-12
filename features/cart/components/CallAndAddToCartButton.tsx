import { CallButton } from '../../../components'
import { AddToCartButton, AddToCartQtyButton } from '../index'

const CallAndAddToCartButton = () => {
  return (
    <>
      <div className="w-2/12 mr-1">
        <CallButton />
      </div>
      <div className="w-10/12 ml-1">
        <AddToCartButton />

        {/* <AddToCartQtyButton /> */}
      </div>
    </>
  )
}

export default CallAndAddToCartButton
