import { Grid } from '@nextui-org/react'
import React from 'react'
import ComputersGrid from '../../components/ComputersGrid'
import MainLayout from '../../components/layout/MainLayout'
import MainImage from '../../components/MainImage'
import { Products } from '../../database/seed-data'

const GamerPage = () => {
  
    const gamers = Products.computadoras.filter(computer => computer.type === 'Gamer')

    return (
    <MainLayout title='TECNICOMPU - GAMER'>
      <main style={{
        background: '#303030', height: '90vh', position: 'relative'
      }}>
      <MainImage title='PARA GAMERS, DE GAMERS' link='https://i.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5470038.webp'/>
      <Grid.Container id="products" css={{
        width: '100%',
        margin: '0',
        background: '#303030'
      }} gap={2} justify="center"> 
      {
          gamers.map(computer => {
            return(
                    <ComputersGrid 
                      {...computer}
                      key={computer.title}
                      title={computer.title}
                      price={computer.price}
                      link={computer.images}
                    />
                )
          })
      }
    </Grid.Container>
    </main>
    </MainLayout>
  )
}

export default GamerPage