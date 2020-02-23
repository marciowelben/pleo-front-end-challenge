import { IExpenseUpdatePayload } from 'common'

export interface IProps {
  id: string
  onUploadReceipts: (_param: IExpenseUpdatePayload) => void
}
