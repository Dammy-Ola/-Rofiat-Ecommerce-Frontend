import { CallButton } from '../../../components'
import { CheckoutButton } from '../index'

const CheckoutButtonLayout = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden py-5 md:py-0 shadow-2xl md:shadow-none w-full bg-white md:bg-none">
      <div className="w-4/5 mx-auto md:w-full flex justify-center items-center">
        <div className="w-2/12 mr-1">
          <CallButton />
        </div>
        <div className="w-10/12 ml-1">
          <CheckoutButton />
        </div>
      </div>
    </div>
  )
}

export default CheckoutButtonLayout
