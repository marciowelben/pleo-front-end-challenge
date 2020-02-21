import { IExpense } from 'common/types'

export const expenseWithReceipt: IExpense = {
  id: '5b995dff2e3cb74644948a66',
  amount: {
    value: '2149.29',
    currency: 'GBP'
  },
  date: '2017-06-21T08:45:09.326Z',
  merchant: 'QUONK',
  receipts: [{ url: 'sampleUrl.png' }],
  comment: '',
  category: '',
  user: {
    first: 'Atkins',
    last: 'Blackburn',
    email: 'atkins.blackburn@pleo.io'
  }
}
