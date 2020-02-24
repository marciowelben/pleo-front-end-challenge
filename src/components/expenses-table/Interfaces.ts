import { IExpense, IExpenseUpdatePayload, IExpensesOrder } from 'common/types'

export interface IProps {
  expenses: IExpense[]
  onUpdateExpense: (_param: IExpenseUpdatePayload) => void
  onDeleteReceipt: (_param: IExpenseUpdatePayload) => void
  setOrder: (_order: IExpensesOrder) => void
  order: IExpensesOrder
}
