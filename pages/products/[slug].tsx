import { Grid } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import ProductLayout from '../../components/layout/ProductLayout'
import ProductCase from '../../components/ProductCase'
import ProductSpecs from '../../components/ProductSpecs'
import {  dbProducts } from '../../database'
import { IComputadora } from '../../intefaces'


interface Props {
    product: IComputadora
}

const ProductPage: React.FC<Props> = ({product}) => {
    
    return (
    <ProductLayout title={`TecniCompu - ${product.title}`}>
        <main className='controlsHeight' style={{background:'transparent linear-gradient(241deg, #303030 0%, #303030 20%, #2C1B4A 100%) 0% 0% no-repeat padding-box'}}>
            <ProductCase title={product.title.substring(0, 20) + '..'} type={product.type}/>
            <Grid.Container id='product' css={{textAlign: 'justify', justifyContent: 'center', padding: '14px'}}>
                    <ProductSpecs product={product}/>
            </Grid.Container>
        </main>
    </ProductLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const slug = await dbProducts.getAllProductSlugs() 
    const slugs = slug.map(el => el.slug)

    return {
        paths: slugs.map(slg => ({
            params: {slug: slg}
        })),
        fallback: "blocking"
    }
}



export const getStaticProps: GetStaticProps = async ({params}) => {
    const { slug } =  params as {slug: string} 
    
    const product = await dbProducts.getProductBySlug(slug)
    console.log(product)

    if(!slug){
        return {
            redirect: {
                destination: `/${slug}`,
                permanent: false
            }
        }
    }

    console.log(product)

    return {
        props: {
            product: product ?? null
        }, revalidate: 86400
    }
}

export default ProductPage