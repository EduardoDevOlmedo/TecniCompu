import { Button, Card, Grid, Text} from '@nextui-org/react'
import React from 'react'
import { IComputadora } from '../intefaces'

interface Props {
  product: IComputadora
}

const ProductSpecs: React.FC<Props> = ({product}) => {
      const cssColors = {
        color: '#D2D2D2',
        fontSize: '20px'
      }
    
    return (
      <>
                 <Grid xs={12} sm={4}>
                   <div style={{display: 'flex', gap: '20px', justifyContent: 'space-evenly', width: '100%', flexWrap: 'wrap', height: '100%', alignItems: 'center'}}>
                        <Text h5 css={{textAlign: 'center', color: 'white', fontSize: '20px'}}>
                          {product.title}
                      </Text>
                      <Button color={'secondary'} flat>Comprar ahora.</Button>
                   </div>
                  </Grid>
                  <Grid xs={12} sm={4}>
                          <Text css={{color: '#D2D2D2', fontSize: '20px'}}>{product.description}</Text>
                  </Grid>
                  <Grid xs={12} sm={4}>
                      <div>
                          <Text css={{color: 'white', fontSize: '20px'}}>Especificaciones: </Text>
                          <Text css={cssColors}>Procesador: {product.specifications.processor} </Text>
                          <Text css={cssColors}>RAM: {product.specifications.RAM}</Text>
                          <Text css={cssColors}>Almacenamiento: {product.specifications.Storage}</Text>
                          {
                              product.specifications.Cooler !== null && (
                                  <Text css={cssColors}>Cooler: {product.specifications.Cooler}</Text>
                              )
                          }
                          {
                              product.specifications.Screen !== undefined && (
                                  <Text css={cssColors}>Screen: {product.specifications.Screen}</Text>
                              )
                          }
                      </div>
              </Grid>
            <Grid xs={12} sm={4}>
              <Card cover>
                    <Card.Image 
                      height={150}
                      width={150}
                      alt={product.title}
                      src={product.images}
                    />  
              </Card>
            </Grid>
      </>
    )
}

export default ProductSpecs
