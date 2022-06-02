/* eslint-disable react/jsx-no-undef */
import { Card, Col, Grid, Text } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import styles from "./CardDisplay.module.css"

interface Props {
title: string;
image: string;
link: string
}

const CardDisplay: React.FC<Props> = ({title, image, link}) => {
  return (
  <Grid xs={12} sm={4}>
  <Link passHref href={link}>
    <Card cover css={{background: '#303030'}} shadow={false} hoverable clickable>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: '35%', left: 'calc(50% - 72px)', width: '144px'}}>
        <Col>
        <Text h4 css={{color: '#F1F1F1'}} className={styles.titlePC}>
          {title}
        </Text>
        </Col>
      </Card.Header>
      <Card.Image css={{opacity: '35%'}} src={image} height={240} width="100%"
        alt="Card image background" />
    </Card>
      </Link>
  </Grid>
  )
  }

  export default CardDisplay