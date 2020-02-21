import { IExpensesOrder, IExpense } from 'common/types'

export const expensesInitialState = {
  expenses: [] as IExpense[],
  order: {} as IExpensesOrder
}

export type ExpensesState = typeof expensesInitialState
