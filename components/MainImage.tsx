import { Card, Button, Text } from '@nextui-org/react';
import React, { useState } from 'react'

interface Props {
    link?: string;
    title?: string;
}

const MainImage: React.FC<Props> = ({link,title = "GANA TODAS LAS PARTIDAS"} ) => {
  
    const [ghost, setGhost] = useState(false)
  
    return (
    <Card hoverable cover css={{background: '#303030', opacity: '85%', position: 'relative'}} >
        <Card.Image alt='banner-img' css={{objectFit: 'cover !important', height: '400px'}} src={link!}/>
        <Card.Body>
        <Text h3
          css={{
            fontSize: '43px',
            color: '#F1F1F1',
            position: 'absolute',
            fontStyle: 'italic',
            top: '20%',
            left: 'calc(50% - 175px)',
            width: '350px',
            textAlign: 'center'
          }}
        >{title}</Text>
        <Button
        auto ghost={ghost}
        onMouseOver={() => setGhost(!ghost)}
        onMouseDown={() => setGhost(false)}
        color='secondary'
          css={{
            position: 'absolute',
            top: '50%',
            mt: 40,
            width: '150px',
            left: 'calc(50% - 75px)'
          }}
          ><a style={{color: 'inherit', textDecoration: 'none'}} href='#products'>Mirar las computadoras</a></Button>
        </Card.Body>
      </Card>
  )
}

export default MainImage