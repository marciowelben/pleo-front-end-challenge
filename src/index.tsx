import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from 'pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, RouteComponentProps, globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'

const Component = (_: RouteComponentProps) => <Home />

// TODO: Implement stryker mutator test
ReactDOM.render(
  <QueryParamProvider reachHistory={globalHistory}>
    <Router>
      <Component path="/" />
    </Router>
  </QueryParamProvider>,
  document.getElementById('root')
)
