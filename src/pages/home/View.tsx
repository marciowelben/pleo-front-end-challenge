import React, { useState, useContext, useEffect } from 'react'
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

  useEffect(() => {
    expensesContext.handlers.onGetExpenses({ limit: 10, offset: 0 })

    setQuery({
      page: query.page || 0,
      limit: query.limit || 10
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    expensesContext.handlers.onGetExpenses({ limit: query.limit, offset: query.page * query.limit })
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
        <ExpensesTable expenses={expensesContext.state.list?.expenses} />
        <Pagination
          page={query.page}
          limit={query.limit}
          total={expensesContext.state.list?.total}
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
