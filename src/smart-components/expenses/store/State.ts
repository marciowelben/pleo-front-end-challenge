import { IExpensesOrder, IExpenseList } from 'common/types'

export const expensesInitialState = {
  list: {
    expenses: [],
    total: 0
  } as IExpenseList,
  order: {} as IExpensesOrder
}

export type ExpensesState = typeof expensesInitialState
