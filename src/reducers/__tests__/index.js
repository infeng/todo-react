import { appReducer as reducer } from '../../reducers';
import * as actions from '../../actions';
import * as filters from '../../constants/filters';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        todos: [],
        filter: filters.SHOW_ALL,
      }
    );
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer(undefined, actions.addTodo({
        text: '233',
      }))
    ).toEqual({
        todos: [
          {
            text: '233',
            completed: false,
          }
        ],
        filter: filters.SHOW_ALL,
      });
  });

  it('should handle COMPLETE_TODO', () => {
    expect(
      reducer({
        todos: [
          {
            text: '233',
            completed: false,
          }
        ],
        filter: filters.SHOW_ALL,
      }, actions.completeTodo({
        index: 0,
      }))
    ).toEqual({
        todos: [
          {
            text: '233',
            completed: true,
          }
        ],
        filter: filters.SHOW_ALL,
      });
  });
  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      reducer(undefined, actions.setVisibilityFilter({
        filter: filters.SHOW_ACTIVE,
      }))
    ).toEqual({
      todos: [],
      filter: filters.SHOW_ACTIVE,
    });
  });
});