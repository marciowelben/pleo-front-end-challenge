import { IExpense, IExpensesOrder, IExpenseList } from 'common/types'

export const SET_EXPENSES = 'expenses.setExpenses'
export const UPDATE_EXPENSE = 'expenses.updateExpense'
export const SET_EXPENSES_ORDER = 'expenses.setOrder'
export const SET_IN_PROGRESS = 'expenses.inProgress'
export const SET_ERROR = 'signIn.inProgress'

export function setInProgress(payload: boolean) {
  return {
    type: SET_IN_PROGRESS,
    payload
  } as const
}

export function setExpenses(payload: IExpenseList) {
  return {
    type: SET_EXPENSES,
    payload
  } as const
}

export function updateExpense(payload: IExpense) {
  return {
    type: UPDATE_EXPENSE,
    payload
  } as const
}

export function setOrder(order: IExpensesOrder) {
  return {
    type: SET_EXPENSES_ORDER,
    payload: order
  } as const
}

export function setError(error: string) {
  return {
    type: SET_ERROR,
    payload: error
  } as const
}

export type ExpensesActions = ReturnType<
  typeof setInProgress | typeof updateExpense | typeof setExpenses | typeof setOrder | typeof setError
>
