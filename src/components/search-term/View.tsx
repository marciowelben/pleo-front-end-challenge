import React, { useContext } from 'react'
import { IProps } from './Interfaces'
import { Input, InputWrapper, PrefixIcon, SuffixIcon } from './Styles'
import { IconButton } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { I18nContextProvider } from 'lib/Language'

const Component: React.FC<IProps> = ({ term, setTerm, onClear }) => {
  const iconStyle = {
    color: 'white'
  }
  const i18n = useContext(I18nContextProvider)

  return (
    <InputWrapper>
      <PrefixIcon>
        <FontAwesomeIcon icon={faSearch} style={{ ...iconStyle }} />
      </PrefixIcon>
      <Input
        value={term}
        onChange={event => setTerm(event.target.value)}
        placeholder={i18n.state.translate('searchbar')}
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
