import React from 'react'
import { ReceiptsWrapper, ReceiptImg } from './Styles'
import { IProps } from './Interface'
import { Row, Col } from 'react-bootstrap'
import { IconButton } from 'components'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Component: React.FC<IProps> = ({ receipts, handleAddReceipt }) => {
  return (
    <ReceiptsWrapper xs={10}>
      <Row>
        <Col>
          {receipts.map(receipt => (
            <ReceiptImg src={receipt} />
          ))}
        </Col>

        <Col xs={3}>
          <IconButton icon={faPlus} onClick={handleAddReceipt} size={26} label={'Add Receipt'} />
        </Col>
      </Row>
    </ReceiptsWrapper>
  )
}

export default Component
