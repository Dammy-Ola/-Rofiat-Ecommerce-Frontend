import { FC } from 'react'
import Image from 'next/image'
import { sampleProduct } from '../../../public'
import { AddToCartButtonLayout, CallAndAddToCartButton } from '../../cart'
import { IProduct, ProductDescription } from '../index'

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <main className="w-4/5 mx-auto mt-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
        <div className="col-span-1">
          <Image src={sampleProduct} alt="Sample product shoe" />
        </div>
        <div className="col-span-1">
          <div className="">
            <h1 className="text-xl mb-3">{product.name}</h1>
            <h3>Brand: Nike</h3>
          </div>
          <div className="mt-3 mb-7 py-1 border-y">
            <h3 className="font-bold text-4xl">Ghc {product.price}</h3>
            <div className="py-1 flex">
              <h3 className="font-thin line-through mr-10">
                Ghc {product.price}
              </h3>
              <h3 className="bg-green-400 text-xs p-1 rounded-md">-15%</h3>
            </div>
            <small className="text-red-500">8 units left</small>
          </div>
          <div className="flex w-full">
            {typeof product.price !== 'undefined' && (
              <CallAndAddToCartButton
                product={{ ...product, qty: 1, subTotal: product.price }}
              />
            )}
          </div>
        </div>
      </section>
      <ProductDescription description={product.description} />
      {typeof product.price !== 'undefined' && (
        <AddToCartButtonLayout
          product={{ ...product, qty: 1, subTotal: product.price }}
        />
      )}
    </main>
  )
}

export default ProductDetails
