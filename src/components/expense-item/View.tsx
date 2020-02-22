import React from 'react'
import { IProps } from './Interfaces'
import { Row, Col } from 'react-bootstrap'
import Moment from 'react-moment'
import { TableInfo, UserInfo, TableRow, LetterAvatar } from './Styles'
import LineIcon from 'react-lineicons'

const Component: React.FC<IProps> = ({ item }) => {
  const { user, amount } = item
  return (
    <React.Fragment>
      <TableRow>
        <TableInfo>
          <LetterAvatar>
            {user.first[0]}
            {user.last[0]}
          </LetterAvatar>
        </TableInfo>
        <UserInfo>
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
        <TableInfo className={'text-center'}>{item.merchant}</TableInfo>
        <TableInfo className={'text-center'}>
          <Moment format="YYYY-MM-DD">{item.date}</Moment>
        </TableInfo>
        <TableInfo className={'text-center'}>
          {amount.value} {amount.currency.toLowerCase()}
        </TableInfo>
        <TableInfo>
          <LineIcon name="chevron-down" size="xs" />
        </TableInfo>
      </TableRow>
    </React.Fragment>
  )
}

export default Component
