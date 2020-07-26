import React from 'react';
import { BottomTab } from './navigator/tabNavigator'
import { NavigationContainer } from '@react-navigation/native';
import postReducer from './store/reducers/posts';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  posts: postReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return <Provider store={store}>
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  </Provider>
};

export default App;
