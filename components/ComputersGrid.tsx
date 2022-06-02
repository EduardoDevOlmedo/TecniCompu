import { Grid, Card, Row, Text} from '@nextui-org/react';
import Link from "next/link"
import React, { useState } from 'react'

interface Props {
    title: string;
    price: number;
    link: string;
    slug: string;
}

const ComputersGrid: React.FC<Props> = ({title, price, link, slug}) => {
  
  const [isImageLoaded, setisImageLoaded] = useState(false)

  return (
    <Grid xs={12} sm={4}>
    <Link href={`/products/${slug}`}>
    <Card hoverable clickable>
          <Card.Body css={{ p: 0 }}>
              <Card.Image
              objectFit="cover"
              src={link}
              width="100%"
              height={140}
              showSkeleton
              alt={title}
              />
          </Card.Body>
          <Card.Footer >
            <Row wrap="wrap" justify="space-between">
              <Text b>{title}</Text>
              <Text css={{ fontWeight: "700", color: '#000' }}>
                ${price}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
    </Link>
    </Grid>
  )
}

export default ComputersGrid