import { FC } from 'react'
import Head from 'next/head'
import {
  getProducts,
  getSingleProductBySlugName,
  IProduct,
  ProductDetails,
} from '../../features/product'

const SingleProductPage: FC<{ product: IProduct }> = ({ product }) => {
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

      <ProductDetails product={product} />
    </div>
  )
}

export async function getStaticPaths() {
  const {
    data: { products },
  } = await getProducts()

  const paths = products.map((product) => ({
    params: { slug: product?.slug },
  }))

  return { paths, fallback: false }
}

interface IContext {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params: { slug } }: IContext) {
  const {
    data: { product },
  } = await getSingleProductBySlugName(slug)

  return {
    props: { product },
    revalidate: 1,
  }
}

export default SingleProductPage
