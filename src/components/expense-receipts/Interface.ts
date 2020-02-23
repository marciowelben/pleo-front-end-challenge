import { IExpenseUpdatePayload } from 'common'

export interface IProps {
  receipts: any[]
  id: string
  onUploadReceipts: (_param: IExpenseUpdatePayload) => void
  onDeleteReceipt: (_param: IExpenseUpdatePayload) => void
}
