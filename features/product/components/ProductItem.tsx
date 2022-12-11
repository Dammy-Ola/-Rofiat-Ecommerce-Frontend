import Image from 'next/image'
import Link from 'next/link'
import { sampleProduct } from '../../../public'

const ProductItem = () => {
  return (
    <div className="hover:shadow-2xl">
      <Image src={sampleProduct} alt="Sample product shoe" />
      <div className="p-3 pb-7">
        <Link legacyBehavior href={'/products/sample-product'}>
          <a className="hover:underline">Nike sneakers Red</a>
        </Link>
        <h3 className="my-1">
          <span className="text-xl font-bold pr-3">Ghc 50</span>
          <span className="line-through">Ghc 150</span>
        </h3>
        <div className="mt-10">
          <Link legacyBehavior href={'/'}>
            <a className="bg-green-600 text-white rounded-md py-2 px-4 hover:text-green-600 hover:bg-white hover:border hover:border-green-600">
              Add to cart
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
