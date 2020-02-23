import IExpense from './IExpense'

export default interface IExpenseList {
  total: number
  expenses: IExpense[]
}
