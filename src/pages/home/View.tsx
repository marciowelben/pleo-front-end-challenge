import React, { useState, useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { HeroIntro, SearchTerm } from 'components'
import { Header, Wrapper } from './Styles'
import { ExpensesTable } from 'components/expenses-table'
import { ExpensesProvider, ExpensesContextProvider, ExpensesContext } from 'smart-components'

const Home = () => {
  const expensesContext = useContext<ExpensesContext>(ExpensesContextProvider)
  const [term, setTerm] = useState('')

  useEffect(() => {
    expensesContext.handlers.onGetExpenses({ limit: 25, offset: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      </Container>
    </Wrapper>
  )
}

export default () => (
  <ExpensesProvider>
    <Home />
  </ExpensesProvider>
)
