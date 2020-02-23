import { IExpense, IExpenseUpdatePayload } from 'common/types'

export interface IStyleProps {
  isExpanded: boolean
}

export interface IProps {
  item: IExpense
  onUpdateExpense: (_param: IExpenseUpdatePayload) => void
}
