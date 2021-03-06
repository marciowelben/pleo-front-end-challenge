import React, { useReducer } from 'react'
import { expensesInitialState } from './store/State'
import { IExpensesOrder, IExpensesQuery, IExpenseUpdatePayload, IExpense } from 'common'
import expensesReducer from './store/Reducer'
import ExpensesService from './Service'

export const expensesContext = {
  state: expensesInitialState,
  handlers: {
    onGetExpenses: (_query: IExpensesQuery) => {},
    searchByTerm: (_term: string) => {},
    orderBy: (_list: IExpense[], _order: IExpensesOrder) => {},
    setOrder: (_order: IExpensesOrder) => {},
    onUpdateExpense: (_param: IExpenseUpdatePayload) => {},
    onDeleteReceipt: (_param: IExpenseUpdatePayload) => {}
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
    searchByTerm: ExpensesService.searchByTerm(state.list?.expenses),
    orderBy: ExpensesService.orderBy,
    setOrder: ExpensesService.setExpensesOrder(dispatch),
    onUpdateExpense: ExpensesService.onUpdateExpense(dispatch, onError),
    onDeleteReceipt: ExpensesService.onDeleteReceipt(dispatch, onError)
  }

  const contextValue = {
    ...expensesContext,
    state,
    handlers
  }

  return <ExpensesContextProvider.Provider value={contextValue}>{children}</ExpensesContextProvider.Provider>
}

export default Provider
