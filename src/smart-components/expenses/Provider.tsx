import React, { useReducer } from 'react'
import { expensesInitialState } from './store/State'
import { IExpensesOrder, IExpensesQuery } from 'common'
import expensesReducer from './store/Reducer'
import ExpensesService from './Service'

export const expensesContext = {
  state: expensesInitialState,
  handlers: {
    onGetExpenses: (_query: IExpensesQuery) => {},
    filterByTerm: (_term: string) => {},
    setOrder: (_order: IExpensesOrder[]) => {}
  }
}

export const ExpensesContextProvider = React.createContext<typeof expensesContext>(expensesContext)

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(expensesReducer, expensesInitialState)

  const onError = (error: string) => {
    alert(error)
  }

  const handlers = {
    onGetExpenses: ExpensesService.onGetExpenses(dispatch, onError),
    filterByTerm: ExpensesService.searchByTerm(state.expenses),
    setOrder: ExpensesService.setExpensesOrder(dispatch)
  }

  const contextValue = {
    ...expensesContext,
    state,
    handlers
  }

  return <ExpensesContextProvider.Provider value={contextValue}>{children}</ExpensesContextProvider.Provider>
}

export default Provider
