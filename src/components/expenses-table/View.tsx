import React from 'react'
import { TableHead, TableBody } from './Styles'
import { IProps } from './Interfaces'
import { Table } from 'react-bootstrap'
import { ExpenseItem } from 'components'
import LineIcon from 'react-lineicons'

const Component: React.FC<IProps> = ({ expenses }) => {
  return (
    <Table responsive={'sm'} borderless>
      <TableHead>
        <th></th>
        <th></th>
        <th className={'text-center'}>
          <LineIcon name="restaurant" size="sm" style={{ color: 'white' }} />
        </th>
        <th className={'text-center'}>
          <LineIcon name="calendar" size="sm" style={{ color: 'white' }} />
        </th>
        <th className={'text-center'}>
          <LineIcon name="coin" size="sm" style={{ color: 'white' }} />
        </th>
      </TableHead>
      <TableBody>
        {expenses.map(expense => {
          return <ExpenseItem item={expense} key={expense.id} />
        })}
      </TableBody>
    </Table>
  )
}

export default Component
