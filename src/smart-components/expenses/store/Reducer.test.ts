import { IExpensesOrder } from 'common/types'
import { expensesInitialState } from './State'

import { setExpenses, setOrder, setInProgress, setError, updateExpense } from './Actions'
import { list } from '../fixtures/expenses'

import expensesReducer from './Reducer'
import { IDirection } from 'common/types/IExpensesOrder'
import { expenseWithComment } from '../fixtures/expenseWithComment'

describe('When expenses reducer is initiated', () => {
  const order = [
    { value: 'date', direction: IDirection.ASC },
    { value: 'name', direction: IDirection.DESC }
  ] as IExpensesOrder[]
  const error = 'this is an error'

  test('should change expenses value correctly on setExpenses action', () => {
    const state = expensesReducer(expensesInitialState, setExpenses(list))

    expect(state).toEqual({
      ...expensesInitialState,
      list
    })
  })

  test('should update expenses correctly on updateExpense action', () => {
    const state = expensesReducer(expensesInitialState, setExpenses(list))

    expect(state).toEqual({
      ...expensesInitialState,
      list
    })

    const newState = expensesReducer(state, updateExpense(expenseWithComment))

    expect(newState.list.expenses[0].comment).toEqual(expenseWithComment.comment)
  })

  test('should change inProgress value correctly on setInProgress action', () => {
    const state = expensesReducer(expensesInitialState, setInProgress(true))

    expect(state).toEqual({
      ...expensesInitialState,
      inProgress: true
    })

    const changedState = expensesReducer(state, setInProgress(false))

    expect(changedState).toEqual({
      ...expensesInitialState,
      inProgress: false
    })
  })

  test('should change order value correctly on setOrder', () => {
    const state = expensesReducer(expensesInitialState, setOrder(order))

    expect(state).toEqual({
      ...expensesInitialState,
      order
    })
  })

  test('should change error value correctly on setError', () => {
    const state = expensesReducer(expensesInitialState, setError(error))

    expect(state).toEqual({
      ...expensesInitialState,
      error
    })

    const changedState = expensesReducer(state, setError(null))

    expect(changedState).toEqual({
      ...expensesInitialState,
      error: null
    })
  })
})
