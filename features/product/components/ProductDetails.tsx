import Image from 'next/image'
import Link from 'next/link'
import { sampleProduct } from '../../../public'
import { ProductDescription } from '../index'

const ProductDetails = () => {
  return (
    <main className="w-4/5 mx-auto mt-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
        <div className="col-span-1">
          <Image src={sampleProduct} alt="Sample product shoe" />
        </div>
        <div className="col-span-1">
          <div className="">
            <h1 className="text-xl mb-3">Nike sneakers Red</h1>
            <h3>Brand: Nike</h3>
          </div>
          <div className="mt-3 mb-7 py-1 border-y">
            <h3 className="font-bold text-4xl">Ghc 50.00</h3>
            <div className="py-1 flex">
              <h3 className="font-thin line-through mr-10">Ghc 150.00</h3>
              <h3 className="bg-green-400 text-xs p-1 rounded-md">-15%</h3>
            </div>
            <small className="text-red-500">8 units left</small>
          </div>
          <div className="fixed bottom-0 left-0 right-0 md:static py-5 md:py-0 shadow-2xl md:shadow-none w-full bg-white md:bg-none">
            <div className="w-4/5 mx-auto md:w-full flex justify-center items-center">
              <a
                href="http://"
                className="border border-green-600 p-3 rounded-md w-2/12 text-center hover:bg-green-600 hover:text-white mr-1"
              >
                Call
              </a>

              <Link legacyBehavior href={'/'}>
                <a className="bg-green-600 text-white rounded-md py-3 uppercase text-center w-10/12 hover:text-green-600 hover:bg-white hover:border hover:border-green-600 ml-1">
                  Add to cart
                </a>
              </Link>

              {/* <div className="flex justify-between items-center w-10/12 ml-1">
                <span className="bg-green-600 text-center text-white text-2xl font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer">
                  -
                </span>
                <span>1</span>
                <span className="bg-green-600 text-center text-white text-2xl font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer">
                  +
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <ProductDescription />
    </main>
  )
}

export default ProductDetails
