import { Grid} from '@nextui-org/react'
import React, { useState } from 'react'
import ComputersGrid from '../../components/ComputersGrid'
import MainLayout from '../../components/layout/MainLayout'
import MainImage from '../../components/MainImage'
import { Products } from '../../database/seed-data'


const StudyPage = () => {
  
  const study = Products.computadoras.filter(computer => computer.type === 'Student')

  return (
    <MainLayout title='TECNICOMPU - STUDY'>
      <main style={{
        background: '#303030', height: '90vh', position: 'relative'
      }}>
      <MainImage link='https://www.pcspecialist.es/images/landing/pcs/gaming-pc/bundle.jpg'/>
      <Grid.Container  id="products" css={{
        width: '100%',
        margin: '0',
        background: '#303030'
      }} gap={2} justify="center">
        {
          study.map(computer => {
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

export default StudyPage