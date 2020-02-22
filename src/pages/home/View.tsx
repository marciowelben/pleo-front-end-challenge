import React from 'react'
import { Container } from 'react-bootstrap'
import { HeroIntro } from 'components'
import { Header, Wrapper } from './Styles'
import { expenses } from 'smart-components/expenses/fixtures/expenses'
import { ExpensesTable } from 'components/expenses-table'

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeroIntro
            title={'Pleo Front-end Challenge'}
            subtitle={'This is just an example for the Pleo.io challenge'}
          />
        </Header>
        <ExpensesTable expenses={expenses} />
      </Container>
    </Wrapper>
  )
}

export default Home
