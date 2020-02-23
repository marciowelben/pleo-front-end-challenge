import styled from 'styled-components'
import { Col } from 'react-bootstrap'

export const ReceiptsWrapper = styled(Col)`
  padding: 30px 0 !important;
  position: relative;
`

export const ReceiptImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const ReceiptImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 9px;
  border: 1px solid white;
  margin: 10px;
  &:hover {
    border-width: 3px;
    cursor: pointer;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  display: flex;
`
