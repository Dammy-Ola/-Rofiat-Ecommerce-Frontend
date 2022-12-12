import { FC } from 'react'
import { IProduct } from '../index'

const ProductDescription: FC<{ description: IProduct['description'] }> = ({
  description,
}) => {
  return (
    <section className="mt-10">
      <h3 className="font-bold text-2xl">Product Description</h3>
      <div className="mt-5">
        <p className="my-3">{description}</p>
      </div>
    </section>
  )
}

export default ProductDescription
