import React, { useContext } from 'react'
import { CommentWrapper, CommentTitle, CommentContent, CommentAction, VerticalSpacing, InputComment } from './Styles'
import { IProps } from './Interface'
import { IconButton } from 'components/icon-button'
import { faEdit, faTrash, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { I18nContextProvider } from 'lib/Language'

const Component: React.FC<IProps> = ({
  comment,
  isEditing,
  newComment,
  handleChangeComment,
  handleToggleEditing,
  handleSaveComment,
  handleClearComment
}) => {
  const i18n = useContext(I18nContextProvider)
  return (
    <CommentWrapper xs={9}>
      <CommentContent>
        <CommentTitle>{i18n.state.translate('comment')}</CommentTitle>
        {!isEditing && comment}
        {isEditing && (
          <InputComment
            value={newComment || comment}
            onChange={e => {
              return handleChangeComment(e.target.value)
            }}
          />
        )}
      </CommentContent>
      <CommentAction>
        {isEditing && (
          <React.Fragment>
            <IconButton icon={faCheck} bgColor={'white'} color={'black'} onClick={handleSaveComment} size={14} />
            <VerticalSpacing />
          </React.Fragment>
        )}
        <IconButton
          icon={isEditing ? faTimes : faEdit}
          bgColor={'white'}
          color={'black'}
          onClick={handleToggleEditing}
          size={14}
        />
        <VerticalSpacing />
        {!isEditing && (
          <IconButton icon={faTrash} bgColor={'white'} color={'black'} onClick={handleClearComment} size={14} />
        )}
      </CommentAction>
    </CommentWrapper>
  )
}

export default Component
