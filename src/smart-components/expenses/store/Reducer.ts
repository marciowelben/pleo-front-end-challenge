import { ExpensesState } from './State'

import { ExpensesActions, SET_EXPENSES, SET_IN_PROGRESS, SET_EXPENSES_ORDER, SET_ERROR } from './Actions'

function expensesReducer(state: ExpensesState, action?: ExpensesActions): ExpensesState {
  switch (action?.type) {
    case SET_EXPENSES:
      return Object.assign({}, state, { expenses: action.payload })
    case SET_IN_PROGRESS:
      return Object.assign({}, state, { inProgress: action.payload })
    case SET_EXPENSES_ORDER:
      return Object.assign({}, state, { order: action.payload })
    case SET_ERROR:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}

export default expensesReducer
