import React from 'react'
import { Indicator, PaginationWrapper, LimitSelector } from './Styles'
import { IProps } from './Interfaces'
import { IconButton } from 'components/icon-button'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Component: React.FC<IProps> = ({ page, limit, total, onNext, onPrevious, onChangeLimit, disabled }) => {
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
          <LimitSelector name="select" onChange={e => onChangeLimit(e.target.value)}>
            <option value="10" selected={limit === 10}>
              10
            </option>
            <option value="25" selected={limit === 25}>
              25
            </option>
            <option value="50" selected={limit === 50}>
              50
            </option>
            <option value="100" selected={limit === 100}>
              100
            </option>
          </LimitSelector>

          <IconButton disabled={isStart} icon={faCaretLeft} onClick={handlePrevious} />
          <Indicator>
            {page * limit} - {isEnd ? total : highLimit} from {total}
          </Indicator>
          <IconButton disabled={isEnd} icon={faCaretRight} onClick={handleNext} />
        </React.Fragment>
      )}
      {disabled && <Indicator>{total} results</Indicator>}
    </PaginationWrapper>
  )
}

export default Component
