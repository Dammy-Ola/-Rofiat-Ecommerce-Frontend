import Head from 'next/head'
import { ProductDetails } from '../../features/product'

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
