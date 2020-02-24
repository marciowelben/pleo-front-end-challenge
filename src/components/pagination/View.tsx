import React, { useContext } from 'react'
import { Indicator, PaginationWrapper, LimitSelector } from './Styles'
import { IProps } from './Interfaces'
import { IconButton } from 'components/icon-button'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { I18nContextProvider } from 'lib/Language'

const Component: React.FC<IProps> = ({ page, limit, total, onNext, onPrevious, onChangeLimit, disabled }) => {
  const i18n = useContext(I18nContextProvider)
  const highLimit = page * limit + limit
  const isStart = page === 0
  const isEnd = highLimit > total

  const handlePrevious = () => {
    if (!isStart) onPrevious()
  }

  const handleNext = () => {
    if (!isEnd) onNext()
  }

  return (
    <PaginationWrapper>
      {!disabled && (
        <React.Fragment>
          <LimitSelector name="select" onChange={e => onChangeLimit(e.target.value)} defaultValue={limit}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </LimitSelector>

          <IconButton disabled={isStart} icon={faCaretLeft} onClick={handlePrevious} />
          <Indicator>
            {page * limit} - {isEnd ? total : highLimit} {i18n.state.translate('from')} {total}
          </Indicator>
          <IconButton disabled={isEnd} icon={faCaretRight} onClick={handleNext} />
        </React.Fragment>
      )}
      {disabled && <Indicator>{total} results</Indicator>}
    </PaginationWrapper>
  )
}

export default Component
