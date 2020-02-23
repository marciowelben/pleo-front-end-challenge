import React from 'react'
import { TableHead, TableBody, NoDataFound } from './Styles'
import { IProps } from './Interfaces'
import { Container, Col } from 'react-bootstrap'
import { ExpenseItem } from 'components'
import { IconButton } from 'components/icon-button'
import { faStore, faCalendarAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const Component: React.FC<IProps> = ({ expenses }) => {
  if (!expenses.length) {
    return <NoDataFound>There are no expenses to be displayed!</NoDataFound>
  }

  return (
    <Container fluid>
      <TableHead>
        <Col xs={1} />
        <Col xs={4} />
        <Col xs={2} className={'text-center'}>
          <IconButton icon={faStore} onClick={() => {}} size={22} />
        </Col>
        <Col xs={2} className={'text-center'}>
          <IconButton icon={faCalendarAlt} onClick={() => {}} size={22} />
        </Col>
        <Col xs={2} className={'text-center'}>
          <IconButton icon={faMoneyBill} onClick={() => {}} size={22} />
        </Col>
      </TableHead>
      <TableBody>
        {expenses.map(expense => {
          return <ExpenseItem item={expense} key={expense.id} />
        })}
      </TableBody>
    </Container>
  )
}

export default Component
