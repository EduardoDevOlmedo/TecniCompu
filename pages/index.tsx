import { Grid, Text } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CardDisplay from '../components/CardDisplay'
import { images } from '../images'

const titleImages = images

const Home = () => {
  
  
  return (
    <Grid.Container >
      <Grid justify='center' alignItems='center' css={{display: 'flex',flexDirection: 'column', height: 'calc(75vh - 30px)', width: '100%', background: '#303030'}}>
        <Grid.Container justify='center' alignItems='center'>
        <div className='line'></div>
         <Text h1 className='title' css={{color: '#ffffff', mb: '10px'}}>TecniCompu</Text>
         <div className='line'></div>
        </Grid.Container>
        <Text css={{
          color: '#f1f1f1',
          fontSize: '43px',
          marginTop: '20px'
        }} h3 className='text-btitle'>Bienvenido</Text>
        <Text h3 css={{
          textAlign: 'center', 
          color: '#f1f1f1',
          fontSize: '43px'
        }} className='text-btitle'>¿Por qué buscas una computadora?</Text>
      </Grid>
      <Grid.Container alignItems='center' >
    <Grid.Container css={{height: 'calc(25vh + 30px);'}} justify="center">
      {
        titleImages.images.map(image => (
          <CardDisplay 
             key={image.title}
             {...image}
          />
        ))
      }
    </Grid.Container>
      </Grid.Container>
    </Grid.Container>
  )
}

export default Home