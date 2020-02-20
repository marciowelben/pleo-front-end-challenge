import { IExpensesOrder, IExpense } from 'common/types'

export const expensesInitialState = {
  expenses: [] as IExpense[],
  searchTerm: '' as string,
  order: {} as IExpensesOrder
}

export type ExpensesState = typeof expensesInitialState
