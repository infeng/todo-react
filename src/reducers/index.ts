import { handleActions } from 'redux-actions';
import * as filters from '../constants/filters';
import * as actionTypes from '../constants/actionTypes';
import { combineReducers } from 'redux';

export interface TodoModel {
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: TodoModel[];
  filter: filters.FilterTypes;
}

export const appReducer = handleActions<TodoState, any>({
  [actionTypes.ADD_TODO](state, action) {
    return {
      ...state,
      todos: state.todos.concat([{text: action.payload.text, completed: false}]),
    };
  },
  [actionTypes.COMPLETE_TODO](state, action) {
    return {
      ...state,
      todos: state.todos.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    };
  },
  [actionTypes.SET_VISIBILITY_FILTER](state, action) {
    return {
      ...state,
      filter: action.payload.filter,
    };
  },
}, {
  todos: [],
  filter: filters.SHOW_ALL,
});

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
