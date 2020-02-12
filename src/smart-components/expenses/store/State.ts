import { IExpensesOrderBy, IExpense } from 'common/types'

export const expensesInitialState = {
  expenses: [] as IExpense[],
  searchTerm: '' as string,
  orderBy: [] as IExpensesOrderBy[]
}

export type ExpensesState = typeof expensesInitialState
