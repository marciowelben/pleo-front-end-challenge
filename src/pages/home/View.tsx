import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { HeroIntro, SearchTerm } from 'components'
import { Header, Wrapper } from './Styles'
import { expenses } from 'smart-components/expenses/fixtures/expenses'
import { ExpensesTable } from 'components/expenses-table'

const Home = () => {
  const [term, setTerm] = useState('')

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
        <ExpensesTable expenses={expenses} />
      </Container>
    </Wrapper>
  )
}

export default Home
