import React, { useState } from 'react'
import { ReceiptsWrapper, ReceiptImg } from './Styles'
import { IProps } from './Interface'
import { Row, Col } from 'react-bootstrap'
import { API } from 'config/env'
import { UploadReceipts } from 'components'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const Component: React.FC<IProps> = ({ receipts, onUploadReceipts, id }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const imageList = receipts.map(receipt => `${API.BASE_URL}${receipt?.url}`)

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
            <ReceiptImg src={image} onClick={() => handleOpenGallery(i)} />
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
