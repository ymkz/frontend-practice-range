import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Count from '~/pages'
import { store } from '~/store'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Count />
          </Route>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
