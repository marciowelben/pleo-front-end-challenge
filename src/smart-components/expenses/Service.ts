import IExpense from 'common/types/IExpense'
import Http from 'lib/Http'
import IApiResponse from 'common/types/IApiResponse'
import { ExpensesActions, setOrder, setInProgress, setExpenses, updateExpense } from './store/Actions'

import { IExpensesOrder, IExpensesQuery, IExpenseUpdatePayload } from 'common/types'
import IErrorDelegate from 'common/types/IErrorDelegate'
import { IDirection } from 'common/types/IExpensesOrder'

export default class ExpensesService {
  static searchByTerm = (array: IExpense[]) => {
    return (term: string) =>
      array.map(({ date, ...keepData }) => keepData).filter(item => JSON.stringify(item).includes(term))
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
        const expensesResponse = response as IApiResponse<IExpense[]>
        dispatch(setExpenses(expensesResponse.data as IExpense[]))
      }

      dispatch(setInProgress(false))
    }
  }

  static async getExpenses(params: object): Promise<[IApiResponse<IExpense[]> | null, number, string | null]> {
    return Http.get<IApiResponse<IExpense[]>>('/expenses', params)
  }

  static onRefresh(dispatch: React.Dispatch<ExpensesActions>, onError: IErrorDelegate) {
    return async () => {
      dispatch(setInProgress(true))

      const [response, , requestError] = await ExpensesService.refresh()

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const expensesResponse = response as IApiResponse<IExpense[]>
        dispatch(setExpenses(expensesResponse.data as IExpense[]))
      }

      dispatch(setInProgress(false))
    }
  }

  static async refresh(): Promise<[IApiResponse<IExpense[]> | null, number, string | null]> {
    return Http.get<IApiResponse<IExpense[]>>('/expenses')
  }

  static onAddComment(dispatch: React.Dispatch<ExpensesActions>, onError: IErrorDelegate) {
    return async (params: IExpenseUpdatePayload) => {
      dispatch(setInProgress(true))

      const [response, , requestError] = await ExpensesService.postComment(params)

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const expenseResponse = response as IApiResponse<IExpense>
        dispatch(updateExpense(expenseResponse.data as IExpense))
      }

      dispatch(setInProgress(false))
    }
  }

  static async postComment(
    params: IExpenseUpdatePayload
  ): Promise<[IApiResponse<IExpense> | null, number, string | null]> {
    return Http.post<object, IApiResponse<IExpense>>(`/expenses/${params.id}`, { comment: params.comment })
  }
}
