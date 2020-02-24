import { IExpensesOrder, IExpenseList } from 'common/types'
import { IDirection } from 'common/types/IExpensesOrder'

export const expensesInitialState = {
  list: {
    expenses: [],
    total: 0
  } as IExpenseList,
  order: {
    value: 'date',
    direction: IDirection.ASC
  } as IExpensesOrder
}

export type ExpensesState = typeof expensesInitialState
