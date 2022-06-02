import { Grid } from '@nextui-org/react'
import React from 'react'
import ComputersGrid from '../../components/ComputersGrid'
import MainLayout from '../../components/layout/MainLayout'
import MainImage from '../../components/MainImage'
import { Products } from '../../database/seed-data'

const WorkPage = () => {
  const work = Products.computadoras.filter(computer => computer.type === 'Worked')
  
  return (
    <MainLayout title='TECNICOMPU - GAMER'>
      <main style={{
        background: '#303030', height: '90vh', position: 'relative'
      }}>
      <MainImage title='PARA LOS MÁS TRABAJADORES' link='https://www.jll.com.ar/images/articles/jll-latam-recomendaciones-trabajo-desde-casa-1200x550.jpg.rendition/cq5dam.web.1280.1280.jpeg'/>
      <Grid.Container id="products" css={{
        width: '100%',
        margin: '0',
        background: '#303030'
      }} gap={2} justify="center"> 
      {
          work.map(computer => {
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

export default WorkPage