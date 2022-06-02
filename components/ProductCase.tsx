import { Card, Button, Text } from '@nextui-org/react';
import React, { useState } from 'react'

interface Props {
    title?: string;
    type?: "Gamer" | "Student" | "Worked"
}

const ProductCase: React.FC<Props> = ({title = "GANA TODAS LAS PARTIDAS", type} ) => {
  
    const [ghost, setGhost] = useState(false)
  
    let url = ''; 

    switch (type) {
        case 'Gamer':
            url = 'https://www.sincable.mx/wp-content/uploads/2020/03/0-PC-gamer-balkouras-nicos-ncOQxZe8Krw-unsplash-scaled.jpg'
            break;
        case 'Student':
            url = 'https://technocio.com/wp-content/uploads/2020/04/pc.jpg'
        default:
            url = 'https://cdni.russiatoday.com/actualidad/public_images/2017.04/article/58f58e3fc3618816658b4576.jpg'
            break;
    }
 
    return (
    <Card cover css={{background: '#303030', opacity: '85%', position: 'relative'}} >
        <Card.Image alt='banner-img' css={{objectFit: 'cover !important', height: '400px'}} src={url!}/>
        <Card.Body>
        <Text h3
          css={{
            fontSize: '41px',
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
            top: '75%',
            mt: 40,
            width: '150px',
            left: 'calc(50% - 75px)'
          }}
          ><a style={{color: 'inherit', textDecoration: 'none'}} href='#product'>Ver más</a></Button>
        </Card.Body>
      </Card>
  )
}

export default ProductCase