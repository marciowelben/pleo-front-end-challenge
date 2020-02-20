import { expenses } from './test-data/expenses'
import ExpensesService from './Service'
import { IDirection } from 'common/types/IExpensesOrder'
import Http from 'lib/Http'

describe('Expenses - smart component', () => {
  const tSearchTerm = '5b995dff2e3cb74644948a66'
  const tOrder = { value: 'date', direction: IDirection.ASC }
  const tOrderValue = { value: 'value', direction: IDirection.ASC }
  const tDateMin = '2014-04-10T23:16:08.764Z'
  const tDateMax = '2017-06-21T08:45:09.326Z'
  const tValueMin = '603.42'
  const tValueMax = '2905.02'

  test('should search by term on expenses', async () => {
    const result = ExpensesService.searchByTerm(expenses)(tSearchTerm)
    const tExpense = expenses.filter(expense => expense.id === tSearchTerm)

    expect(result.length).toBe(1)
    expect(result[0].id).toBe(tExpense[0].id)
    expect(result[0].user).toBe(tExpense[0].user)
  })

  test('should order expenses by normal key', async () => {
    const result = ExpensesService.orderBy(expenses, tOrder)

    expect(result.length).toBe(expenses.length)
    expect(result[0].date).toBe(tDateMin)
    expect(result[result.length - 1].date).toBe(tDateMax)
  })

  test('should order expenses by value', async () => {
    const result = ExpensesService.orderBy(expenses, tOrderValue)

    expect(result.length).toBe(expenses.length)
    expect(result[0].amount.value).toBe(tValueMin)
    expect(result[result.length - 1].amount.value).toBe(tValueMax)
  })

  describe('dispatch actions', () => {
    let dispatchMock: jest.Mock<any, any>, onError: any
    beforeEach(() => {
      dispatchMock = jest.fn().mockReturnValue(null)
      onError = jest.fn().mockReturnValue(null)
    })

    test('onGetExpenses should return a list of expenses ', async () => {
      const requestMock = jest.fn().mockReturnValue([{ data: expenses }, 200, null])
      const query = { limit: 6, offset: 0 }
      const onGetExpenses = ExpensesService.onGetExpenses(dispatchMock, onError)

      Http.get = requestMock
      await onGetExpenses(query)

      expect(dispatchMock.mock.calls.length).toBe(3)
      expect(dispatchMock.mock.calls[0][0]).toEqual({
        type: 'expenses.inProgress',
        payload: true
      })
      expect(dispatchMock.mock.calls[2][0]).toEqual({
        type: 'expenses.inProgress',
        payload: false
      })

      expect(dispatchMock.mock.calls[1][0]).toEqual({
        type: 'expenses.setExpenses',
        payload: expenses
      })
    })
  })
})
