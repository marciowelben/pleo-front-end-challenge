import IExpense from 'common/types/IExpense'
import Http from 'lib/Http'
import { ExpensesActions, setOrder, setInProgress, setExpenses, updateExpense } from './store/Actions'

import { IExpensesOrder, IExpensesQuery, IExpenseUpdatePayload, IExpenseList } from 'common/types'
import IErrorDelegate from 'common/types/IErrorDelegate'
import { IDirection } from 'common/types/IExpensesOrder'

export default class ExpensesService {
  static searchByTerm = (array: IExpense[]) => {
    return (term: string) =>
      array
        .map(({ date, ...keepData }) => keepData)
        .filter(item => {
          const stringItem = JSON.stringify(item)
          return stringItem.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        })
  }

  static orderBy = (list: IExpense[], order: IExpensesOrder): IExpense[] => {
    const sorting = (a: any, b: any) => {
      let left, right
      if (order.value === 'value') {
        left = parseFloat(a.amount.value)
        right = parseFloat(b.amount.value)
      }

      if (order.value === 'date') {
        left = new Date(a.date)
        right = new Date(b.date)
      }

      if (order.value === 'merchant') {
        left = a.merchant
        right = b.merchant
      }

      if (IDirection.ASC === order.direction) return left > right ? 1 : -1
      else return left < right ? 1 : -1
    }

    list.sort(sorting)
    return list.map(({ value, ...item }) => item)
  }

  static setExpensesOrder(dispatch: React.Dispatch<ExpensesActions>) {
    return (order: IExpensesOrder) => {
      dispatch(setOrder(order))
    }
  }

  static onGetExpenses(dispatch: React.Dispatch<ExpensesActions>, onError: IErrorDelegate) {
    return async (query: IExpensesQuery) => {
      dispatch(setInProgress(true))

      const [response, , requestError] = await ExpensesService.getExpenses(query)

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const expensesListResponse = response as IExpenseList
        dispatch(setExpenses(expensesListResponse as IExpenseList))
      }

      dispatch(setInProgress(false))
    }
  }

  static async getExpenses(params: object): Promise<[IExpenseList | null, number, string | null]> {
    return Http.get<IExpenseList>('/expenses', params)
  }

  static onRefresh(dispatch: React.Dispatch<ExpensesActions>, onError: IErrorDelegate) {
    return async () => {
      dispatch(setInProgress(true))

      const [response, , requestError] = await ExpensesService.refresh()

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const expensesResponse = response as IExpenseList
        dispatch(setExpenses(expensesResponse as IExpenseList))
      }

      dispatch(setInProgress(false))
    }
  }

  static async refresh(): Promise<[IExpenseList | null, number, string | null]> {
    return Http.get<IExpenseList>('/expenses')
  }

  static onUpdateExpense(dispatch: React.Dispatch<ExpensesActions>, onError: IErrorDelegate) {
    return async (params: IExpenseUpdatePayload) => {
      dispatch(setInProgress(true))

      const request = async () => {
        if (!params.files) return await ExpensesService.postComment(params)
        else {
          const formData = new FormData()
          formData.append('receipt', params.files as File)
          params.files = formData
          return await ExpensesService.postReceipt(params)
        }
      }

      const [response, , requestError] = await request()

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const expenseResponse = response as IExpense
        dispatch(updateExpense(expenseResponse as IExpense))
      }

      dispatch(setInProgress(false))
    }
  }

  static async postComment(params: IExpenseUpdatePayload): Promise<[IExpense | null, number, string | null]> {
    return Http.post<object, IExpense>(`/expenses/${params.id}`, { comment: params.comment })
  }

  static async postReceipt(params: IExpenseUpdatePayload): Promise<[IExpense | null, number, string | null]> {
    return Http.post<object, IExpense>(`/expenses/${params.id}/receipts`, params.files, {
      'Content-Type': 'multipart/form-data'
    })
  }

  static onDeleteReceipt(dispatch: React.Dispatch<ExpensesActions>, onError: IErrorDelegate) {
    return async (params: IExpenseUpdatePayload) => {
      dispatch(setInProgress(true))

      const [response, , requestError] = await ExpensesService.deleteReceipt(params)

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const expenseResponse = response as IExpense
        dispatch(updateExpense(expenseResponse as IExpense))
      }

      dispatch(setInProgress(false))
    }
  }

  static async deleteReceipt(params: IExpenseUpdatePayload): Promise<[IExpense | null, number, string | null]> {
    return Http.$delete<IExpense>(`/expenses/${params.id}${params.receiptUrl}`)
  }
}
