import React, { useRef, useContext } from 'react'
import { IProps } from './Interface'
import { UploadReceiptsWrapper } from './Styles'
import { IconButton } from 'components'
import { I18nContextProvider } from 'lib/Language'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Component: React.FC<IProps> = ({ id, onUploadReceipts }) => {
  const ref = useRef<HTMLInputElement>()
  const i18n = useContext(I18nContextProvider)

  const handleOpenFiles = () => {
    ref.current.click()
  }

  const handleUploadReceipts = (files: FileList) => {
    onUploadReceipts({ id, files: files[0] })
  }

  return (
    <UploadReceiptsWrapper>
      <IconButton icon={faPlus} onClick={handleOpenFiles} size={26} label={i18n.state.translate('addreceipt')} />
      <input
        ref={ref}
        type="file"
        className={'d-none'}
        onChange={e => handleUploadReceipts(e.target.files)}
        accept="image/*"
      />
    </UploadReceiptsWrapper>
  )
}

export default Component
