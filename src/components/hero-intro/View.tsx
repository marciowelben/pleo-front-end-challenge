import React from 'react'
import { Title, Subtitle } from './Styles'
import { IProps } from './Interfaces'

const Component: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </React.Fragment>
  )
}

export default Component
