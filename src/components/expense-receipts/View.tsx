import React, { useState } from 'react'
import { ReceiptsWrapper, ReceiptImg, ReceiptImageWrapper, CloseButton } from './Styles'
import { IProps } from './Interface'
import { Row, Col } from 'react-bootstrap'
import { API } from 'config/env'
import { UploadReceipts, IconButton } from 'components'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Component: React.FC<IProps> = ({ receipts, onUploadReceipts, id, onDeleteReceipt }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const imageList = receipts.map(receipt => receipt?.url)

  const handleCloseGallery = () => {
    setIsOpened(false)
  }

  const handleOpenGallery = (index?: number) => {
    setIsOpened(true)
    setGalleryIndex(index)
  }

  return (
    <ReceiptsWrapper xs={10}>
      <Row>
        <Col xs={2} className={'d-flex align-items-center justify-content-start'}>
          <UploadReceipts id={id} onUploadReceipts={onUploadReceipts} />
        </Col>
        <Col>
          {imageList.map((image, i) => (
            <ReceiptImageWrapper>
              <ReceiptImg src={`${API.BASE_URL}${image}`} onClick={() => handleOpenGallery(i)} />
              <CloseButton>
                <IconButton
                  icon={faTimes}
                  onClick={() => onDeleteReceipt({ id, receiptUrl: image })}
                  size={12}
                  bgColor={'white'}
                  color={'black'}
                />
              </CloseButton>
            </ReceiptImageWrapper>
          ))}
        </Col>
      </Row>
      {isOpened && (
        <Lightbox
          mainSrc={imageList[galleryIndex]}
          nextSrc={imageList[(galleryIndex + 1) % imageList.length]}
          prevSrc={imageList[(galleryIndex + imageList.length - 1) % imageList.length]}
          onCloseRequest={handleCloseGallery}
          onMovePrevRequest={() => setGalleryIndex((galleryIndex + imageList.length - 1) % imageList.length)}
          onMoveNextRequest={() => setGalleryIndex((galleryIndex + 1) % imageList.length)}
        />
      )}
    </ReceiptsWrapper>
  )
}

export default Component
