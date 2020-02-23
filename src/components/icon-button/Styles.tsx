import styled from 'styled-components'
import { IStyleProps } from './Interfaces'

export const ButtonWrapper = styled.div<IStyleProps>`
  background: ${({ bgColor, disabled }) => (disabled ? 'transparent' : bgColor)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: ${({ size }) => size * 2}px;
  min-height: ${({ size }) => size * 2}px;
  border-radius: 50%;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'normal')};
    background: ${({ disabled }) => (disabled ? 'transparent' : 'rgba(255, 255, 255, 0.2)')};
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  jutify-content: center;
`

export const ButtonLabel = styled.p<IStyleProps>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size * 0.5}px;
`
