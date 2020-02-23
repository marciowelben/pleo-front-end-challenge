import React from 'react'
import { IProps } from './Interfaces'
import { Input, InputWrapper, PrefixIcon, SuffixIcon } from './Styles'
import { IconButton } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const Component: React.FC<IProps> = ({ term, setTerm, onClear }) => {
  const iconStyle = {
    color: 'white'
  }

  return (
    <InputWrapper>
      <PrefixIcon>
        <FontAwesomeIcon icon={faSearch} style={{ ...iconStyle }} />
      </PrefixIcon>
      <Input
        value={term}
        onChange={event => setTerm(event.target.value)}
        placeholder={'Search by name, value, currency or user'}
      />
      {term.length > 2 && (
        <SuffixIcon>
          <IconButton icon={faTimes} onClick={onClear} />
        </SuffixIcon>
      )}
    </InputWrapper>
  )
}

export default Component
