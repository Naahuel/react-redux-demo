import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

/**
 * Create store
 */
const store = createStore(rootReducer);

/**
 * Render the app
 * <Provider /> makes sure the store is passed as props
 * to all children components
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/**
 * Register Service Worker (Duh!)
 */
registerServiceWorker();
