import { Text } from '@nextui-org/react';
import Link from 'next/link'
import React from 'react'

interface Props {
    href: string;
    title: string;
}

const PagesLink: React.FC<Props> = ({href, title}) => {
  return (
    <Link passHref href={`${href}`}>
        <Text h4 css={{cursor: 'pointer'}}>
            {title}
        </Text>
    </Link>
  )
}

export default PagesLink