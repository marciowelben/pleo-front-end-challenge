import React from 'react'
import { IProps } from './Interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ButtonWrapper, ButtonLabel, ContentWrapper } from './Styles'

const Component: React.FC<IProps> = ({ icon, onClick, color, size, bgColor, label, disabled }) => {
  const iconStyle = {
    color,
    fontSize: size
  }

  return (
    <ContentWrapper>
      <ButtonWrapper onClick={onClick} size={size} bgColor={bgColor} disabled={disabled}>
        <FontAwesomeIcon icon={icon} style={iconStyle} />
      </ButtonWrapper>
      {label && (
        <ButtonLabel color={color} size={size}>
          {label}
        </ButtonLabel>
      )}
    </ContentWrapper>
  )
}

Component.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
  size: 14
}

export default Component
