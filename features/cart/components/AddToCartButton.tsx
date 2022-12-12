import Link from 'next/link'

const AddToCartButton = () => {
  return (
    <Link legacyBehavior href={'/'}>
      <a className="block w-full bg-green-600 text-white rounded-md py-3 uppercase text-center hover:text-green-600 hover:bg-white hover:border hover:border-green-600">
        Add to cart
      </a>
    </Link>
  )
}

export default AddToCartButton
