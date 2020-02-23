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
          const regex = new RegExp(term, 'g')
          if (stringItem.includes(term))
            return JSON.parse(
              stringItem.replace(regex, match => {
                return `<em>${match}</em>`
              })
            )
          return null
        })
  }

  static orderBy: any = (list: IExpense[], order: IExpensesOrder) => {
    const sorting = (a: any, b: any) => {
      if (order.value === 'value') {
        a[order.value] = parseFloat(a.amount.value)
        b[order.value] = parseFloat(b.amount.value)
      }

      if (IDirection.ASC === order.direction) return a[order.value] > b[order.value] ? 1 : -1
      else return a[order.value] < b[order.value] ? 1 : -1
    }

    list.sort(sorting)
    return list.map(({ value, ...item }) => item)
  }

  static setExpensesOrder(dispatch: React.Dispatch<ExpensesActions>) {
    return (order: IExpensesOrder[]) => {
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
        if (params.comment) return await ExpensesService.postComment(params)
        else return await ExpensesService.postReceipt(params)
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
    return Http.post<object, IExpense>(`/expenses/${params.id}/receipts`, { comment: params.receipt })
  }
}
