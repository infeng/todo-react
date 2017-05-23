import { createAction } from 'redux-actions';
import * as actionTypes from '../constants/actionTypes';

export const addTodo = createAction(actionTypes.ADD_TODO);

export const completeTodo = createAction(actionTypes.COMPLETE_TODO);

export const setVisibilityFilter = createAction(actionTypes.SET_VISIBILITY_FILTER);
