import React, { useState, useContext, useEffect, SetStateAction } from 'react'
import { Container } from 'react-bootstrap'
import { HeroIntro, SearchTerm, Pagination } from 'components'
import { Header, Wrapper } from './Styles'
import { ExpensesTable } from 'components/expenses-table'
import { ExpensesProvider, ExpensesContextProvider, ExpensesContext } from 'smart-components'
import { useQueryParams, NumberParam } from 'use-query-params'

const Home = () => {
  const expensesContext = useContext<ExpensesContext>(ExpensesContextProvider)
  const [term, setTerm] = useState('')
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    limit: NumberParam
  })
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    setQuery({
      page: query.page || 1,
      limit: query.limit || 10
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setExpenses(prev => expensesContext.state.list.expenses || prev)
  }, [expensesContext.state])

  useEffect(() => {
    setExpenses(() =>
      term.length > 2
        ? (expensesContext.handlers.searchByTerm(term) as SetStateAction<any>)
        : expensesContext.state.list?.expenses
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term])

  useEffect(() => {
    expensesContext.handlers.onGetExpenses({ limit: query.limit, offset: (query.page - 1) * query.limit })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const handleNext = () => {
    setQuery({
      page: query.page + 1
    })
  }

  const handlePrev = () => {
    setQuery({
      page: query.page - 1
    })
  }

  const handleChangeLimit = (limit: string) => {
    setQuery({
      limit: parseInt(limit, 10)
    })
  }

  const handleClear = () => {
    setTerm('')
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <HeroIntro
            title={'Pleo Front-end Challenge'}
            subtitle={'This is just an example for the Pleo.io challenge'}
          />
        </Header>
        <SearchTerm term={term} setTerm={setTerm} onClear={handleClear} />
        <ExpensesTable
          expenses={expenses}
          onUpdateExpense={expensesContext.handlers.onUpdateExpense}
          onDeleteReceipt={expensesContext.handlers.onDeleteReceipt}
        />
        <Pagination
          disabled={term.length > 2}
          page={query.page}
          limit={query.limit}
          total={term.length > 2 ? expenses.length : expensesContext.state.list?.total}
          onNext={handleNext}
          onPrevious={handlePrev}
          onChangeLimit={handleChangeLimit}
        />
      </Container>
    </Wrapper>
  )
}

export default () => (
  <ExpensesProvider>
    <Home />
  </ExpensesProvider>
)
