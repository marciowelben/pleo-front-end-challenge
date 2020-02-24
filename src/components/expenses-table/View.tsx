import React from 'react'
import { TableHead, TableBody, NoDataFound, SortingButtons } from './Styles'
import { IProps } from './Interfaces'
import { Container, Col, Row } from 'react-bootstrap'
import { ExpenseItem } from 'components'
import { IconButton } from 'components/icon-button'
import { faStore, faCalendarAlt, faMoneyBill, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { IDirection } from 'common/types/IExpensesOrder'

const Component: React.FC<IProps> = ({ expenses, onUpdateExpense, onDeleteReceipt, setOrder }) => {
  if (!expenses.length) {
    return <NoDataFound>There are no expenses to be displayed!</NoDataFound>
  }

  const handleOrderStore = (direction: IDirection) => {
    setOrder({
      value: 'merchant',
      direction
    })
  }

  const handleOrderValue = (direction: IDirection) => {
    setOrder({
      value: 'value',
      direction
    })
  }

  const handleOrderDate = (direction: IDirection) => {
    setOrder({
      value: 'date',
      direction
    })
  }

  return (
    <Container fluid>
      <TableHead className={'d-md-flex d-none'}>
        <Col xs={1} />
        <Col xs={4} />
        <Col xs={2} className={'text-center'}>
          <Row className={'justify-content-center'}>
            <IconButton icon={faStore} disabled size={22} onClick={() => {}} />
            <SortingButtons className={'flex-column'}>
              <IconButton icon={faChevronUp} onClick={() => handleOrderStore(IDirection.ASC)} size={12} />
              <IconButton icon={faChevronDown} onClick={() => handleOrderStore(IDirection.DESC)} size={12} />
            </SortingButtons>
          </Row>
        </Col>
        <Col xs={2} className={'text-center'}>
          <Row className={'justify-content-center'}>
            <IconButton icon={faCalendarAlt} onClick={() => {}} size={22} />
            <SortingButtons className={'flex-column'}>
              <IconButton icon={faChevronUp} onClick={() => handleOrderDate(IDirection.ASC)} size={12} />
              <IconButton icon={faChevronDown} onClick={() => handleOrderDate(IDirection.DESC)} size={12} />
            </SortingButtons>
          </Row>
        </Col>
        <Col xs={2} className={'text-center'}>
          <Row className={'justify-content-center'}>
            <IconButton icon={faMoneyBill} onClick={() => {}} size={22} />
            <SortingButtons className={'flex-column'}>
              <IconButton icon={faChevronUp} onClick={() => handleOrderValue(IDirection.ASC)} size={12} />
              <IconButton icon={faChevronDown} onClick={() => handleOrderValue(IDirection.DESC)} size={12} />
            </SortingButtons>
          </Row>
        </Col>
      </TableHead>
      <TableBody>
        {expenses.map(expense => {
          if (expense)
            return (
              <ExpenseItem
                item={expense}
                key={expense.id}
                onUpdateExpense={onUpdateExpense}
                onDeleteReceipt={onDeleteReceipt}
              />
            )
          return null
        })}
      </TableBody>
    </Container>
  )
}

export default Component
