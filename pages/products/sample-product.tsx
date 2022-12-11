import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ProductDetails } from '../../features/product'
import { sampleProduct } from '../../public'

export default function SingleProductPage() {
  return (
    <div>
      <Head>
        <title>Denike Store</title>
        <meta
          name="description"
          content="Cheaper product, convinient shopping"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductDetails />
    </div>
  )
}
