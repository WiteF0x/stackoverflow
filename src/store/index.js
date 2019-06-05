import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { navigationReducer } from '../navigation';
import sagas from './sagas';
import questionsReducer from './reducers/questionsReducer';

const rootReducer = combineReducers({
  nav: navigationReducer,
  questionsArray: questionsReducer,
});

const sagaMiddleware = createSagaMiddleware();
// const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.navigation);

const middlewares = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // applyMiddleware(navigationMiddleware),
);

const store = createStore(
  rootReducer,
  middlewares,
);

sagaMiddleware.run(sagas);

export default store;