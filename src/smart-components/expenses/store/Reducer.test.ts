import { IExpensesOrderBy } from 'common/types'
import { expensesInitialState } from './State'

import { setExpenses, setOrder, setInProgress } from './Actions'
import { expenses } from '../test-data/expenses'

import expensesReducer from './Reducer'

describe('Expenses - Reducer tests', () => {
  const search = (searchTerm: any, array: any[]) => {
    return array.map(({ date, ...keepData }) => keepData).filter(item => JSON.stringify(item).includes(searchTerm))
  }

  test('should have a initialState', () => {
    expect(expensesReducer(expensesInitialState)).toBe(expensesInitialState)
  })

  test('should set expenses for setExpenses action', () => {
    const state = expensesReducer(expensesInitialState, setExpenses(expenses))

    expect(state).toEqual({
      ...expensesInitialState,
      expenses
    })
  })

  test('should set inProgress for setInProgress action', () => {
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

  test('should set orderBy for setOrder action', () => {
    const order = [
      { value: 'date', order: 'asc' },
      { value: 'name', order: 'asc' }
    ] as IExpensesOrderBy[]
    const state = expensesReducer(expensesInitialState, setOrder([order[0]]))

    expect(state).toEqual({
      ...expensesInitialState,
      orderBy: [order[0]]
    })

    const changedState = expensesReducer(expensesInitialState, setOrder(order))

    expect(changedState).toEqual({
      ...expensesInitialState,
      orderBy: order
    })
  })
})
