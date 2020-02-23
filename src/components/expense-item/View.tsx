import React, { useState } from 'react'
import { IProps } from './Interfaces'
import { Row, Col } from 'react-bootstrap'
import Moment from 'react-moment'
import { TableInfo, UserInfo, TableRow, LetterAvatar, RowDescription } from './Styles'
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ExpenseComment, IconButton } from 'components'
import { ExpenseReceipts } from 'components/expense-receipts'

const Component: React.FC<IProps> = ({ item, onUpdateExpense }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newComment, setNewComment] = useState('')
  const { user, amount } = item

  const handleToggle = () => {
    if (isExpanded) setIsEditing(false)
    setIsExpanded(prev => !prev)
  }

  const handleToggleEditing = () => {
    setIsEditing(prev => !prev)
    setNewComment('')
  }

  const handleChangeComment = (value: string) => {
    setNewComment(value)
  }

  const handleSaveComment = () => {
    onUpdateExpense({ id: item.id, comment: newComment })
    handleToggleEditing()
  }

  return (
    <Col xs={12}>
      <TableRow className={'align-items-center'}>
        <TableInfo xs={1}>
          <LetterAvatar>
            {user.first[0]}
            {user.last[0]}
          </LetterAvatar>
        </TableInfo>
        <UserInfo xs={4}>
          <Row noGutters>
            <Col>
              <Row noGutters>
                {user.first} {user.last}
              </Row>
              <Row noGutters>
                <span>{user.email}</span>
              </Row>
            </Col>
          </Row>
        </UserInfo>
        <TableInfo xs={2} className={'text-center'}>
          {item.merchant}
        </TableInfo>
        <TableInfo xs={2} className={'text-center'}>
          <Moment format="YYYY-MM-DD">{item.date}</Moment>
        </TableInfo>
        <TableInfo xs={2} className={'text-center'}>
          {amount.value} {amount.currency.toLowerCase()}
        </TableInfo>
        <TableInfo isExpanded={isExpanded}>
          <IconButton icon={faChevronDown} onClick={handleToggle} size={18} />
        </TableInfo>
      </TableRow>
      <RowDescription isExpanded={isExpanded} noGutters className={'justify-content-center'}>
        {(item.comment || isEditing) && (
          <ExpenseComment
            comment={item.comment}
            isEditing={isEditing}
            newComment={newComment}
            handleToggleEditing={handleToggleEditing}
            handleChangeComment={handleChangeComment}
            handleSaveComment={handleSaveComment}
          />
        )}
        {item.receipts.length > 0 && <ExpenseReceipts receipts={item.receipts} handleAddReceipt={() => {}} />}
        <Col xs={4}>
          <Row noGutters className={'justify-content-center'}>
            {!item.comment && !isEditing && (
              <Col xs={6}>
                <IconButton icon={faPlus} onClick={handleToggleEditing} size={26} label={'Add Comment'} />
              </Col>
            )}

            {item.receipts.length <= 0 && (
              <Col xs={6}>
                <IconButton icon={faPlus} onClick={handleToggle} size={26} label={'Add Receipt'} />
              </Col>
            )}
          </Row>
        </Col>
      </RowDescription>
    </Col>
  )
}

export default Component
