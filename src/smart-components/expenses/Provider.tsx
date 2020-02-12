import React, { useReducer } from 'react'
import { expensesInitialState } from './store/State'
import { IExpensesOrderBy } from 'common'
import expensesReducer from './store/Reducer'

const expensesContext = {
  state: expensesInitialState,
  handlers: {
    getAll: () => {},
    searchTerm: (_searchTerm: string) => {},
    orderBy: (_order: IExpensesOrderBy[]) => {}
  }
}

export type ExpensesContext = typeof expensesContext

export const ExpensesContextProvider = React.createContext<ExpensesContext>(expensesContext)

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, expensesInitialState)

  const onListExpensesSuccess = (response: IExpense) => {
    console.log('response', response)
  }

  const onListExpensesError = (error: string) => {
    console.log('error', error)
  }

  const handlers = {
    getAll: () => {},
    onPasswordChange: () => {},
    orderBy: () => {}
  }

  const contextValue = {
    ...expensesContext,
    state,
    handlers
  }

  return <ExpensesContextProvider.Provider value={contextValue}>{children}</ExpensesContextProvider.Provider>
}

export default Provider
