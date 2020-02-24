import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from 'pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, RouteComponentProps, globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'
import { Provider as I18nContextProvider } from 'lib/Language'

const Component = (_: RouteComponentProps) => <Home />

ReactDOM.render(
  <QueryParamProvider reachHistory={globalHistory}>
    <I18nContextProvider>
      <Router>
        <Component path="/" />
      </Router>
    </I18nContextProvider>
  </QueryParamProvider>,
  document.getElementById('root')
)
