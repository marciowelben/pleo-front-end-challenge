import { IExpensesOrder } from 'common/types'
import { expensesInitialState } from './State'

import { setExpenses, setOrder, setInProgress, setError } from './Actions'
import { expenses } from '../test-data/expenses'

import expensesReducer from './Reducer'
import { IDirection } from 'common/types/IExpensesOrder'

describe('When expenses reducer is initiated', () => {
  const order = [
    { value: 'date', direction: IDirection.ASC },
    { value: 'name', direction: IDirection.DESC }
  ] as IExpensesOrder[]
  const error = 'this is an error'

  it('expenses reducer should have an initial state', () => {
    expect(expensesReducer(expensesInitialState)).toBe(expensesInitialState)
  })

  it('setExpenses action should change expenses value correctly', () => {
    const state = expensesReducer(expensesInitialState, setExpenses(expenses))

    expect(state).toEqual({
      ...expensesInitialState,
      expenses
    })
  })

  test('setInProgress should change inProgress value correctly', () => {
    const state = expensesReducer(expensesInitialState, setInProgress(true))

    expect(state).toEqual({
      ...expensesInitialState,
      inProgress: true
    })

    const changedState = expensesReducer(expensesInitialState, setInProgress(false))

    expect(changedState).toEqual({
      ...expensesInitialState,
      inProgress: false
    })
  })

  test('setOrder should change orderBy value correctly', () => {
    const state = expensesReducer(expensesInitialState, setOrder([order[0]]))

    expect(state).toEqual({
      ...expensesInitialState,
      order: [order[0]]
    })

    const changedState = expensesReducer(expensesInitialState, setOrder(order))

    expect(changedState).toEqual({
      ...expensesInitialState,
      order
    })
  })

  test('setError should change error value correctly', () => {
    const state = expensesReducer(expensesInitialState, setError(error))

    expect(state).toEqual({
      ...expensesInitialState,
      error
    })

    const changedState = expensesReducer(expensesInitialState, setError(null))

    expect(changedState).toEqual({
      ...expensesInitialState,
      error: null
    })
  })
})
