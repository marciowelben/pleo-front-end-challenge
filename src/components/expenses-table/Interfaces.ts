import { IExpense, IExpenseUpdatePayload } from 'common/types'

export interface IProps {
  expenses: IExpense[]
  onUpdateExpense: (_param: IExpenseUpdatePayload) => void
}
