import { createStore, compose, combineReducers } from 'redux';
import appReducer from '../reducers';

const rootReducer = combineReducers({
  app: appReducer,
});

declare const window: any;
const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configure() {
  const store = createStore(rootReducer, {}, enhancer);

  if (module['hot']) {
    module['hot'].accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
