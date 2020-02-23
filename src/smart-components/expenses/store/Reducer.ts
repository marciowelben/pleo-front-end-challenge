import { ExpensesState } from './State'

import {
  ExpensesActions,
  SET_EXPENSES,
  SET_IN_PROGRESS,
  SET_EXPENSES_ORDER,
  SET_ERROR,
  UPDATE_EXPENSE
} from './Actions'

function expensesReducer(state: ExpensesState, action?: ExpensesActions): ExpensesState {
  switch (action?.type) {
    case SET_EXPENSES:
      return Object.assign({}, state, { list: action.payload })
    case UPDATE_EXPENSE:
      return Object.assign({}, state, {
        list: {
          ...state.list,
          expenses: state.list.expenses.map(item => (item.id === action.payload.id ? action.payload : item))
        }
      })
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
