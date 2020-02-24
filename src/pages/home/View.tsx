import React, { useState, useContext, useEffect, SetStateAction } from 'react'
import { Container, Row } from 'react-bootstrap'
import { HeroIntro, SearchTerm, Pagination } from 'components'
import { Header, Wrapper, Button } from './Styles'
import { ExpensesTable } from 'components/expenses-table'
import { ExpensesProvider, ExpensesContextProvider, ExpensesContext } from 'smart-components'
import { useQueryParams, NumberParam } from 'use-query-params'
import { I18nContextProvider } from 'lib/Language'

const Home = () => {
  const expensesContext = useContext<ExpensesContext>(ExpensesContextProvider)
  const [term, setTerm] = useState('')
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    limit: NumberParam
  })
  const [expenses, setExpenses] = useState([])
  const i18n = useContext(I18nContextProvider)

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

  const onLanguageSelect = (lang: string) => i18n.handlers.changeLanguage({ type: 'setLanguage', payload: lang })

  return (
    <Wrapper>
      <Container fluid={window.screen.width < 768}>
        <Header>
          <HeroIntro title={i18n.state.translate('pleo.title')} subtitle={i18n.state.translate('pleo.subtitle')} />
        </Header>
        <Row className={'justify-content-center'}>
          <Button isSelected={i18n.state.langCode === 'pt'} onClick={() => onLanguageSelect('pt')}>
            PT
          </Button>
          <Button isSelected={i18n.state.langCode === 'en'} onClick={() => onLanguageSelect('en')}>
            EN
          </Button>
        </Row>
        <SearchTerm term={term} setTerm={setTerm} onClear={handleClear} />
        <ExpensesTable
          expenses={expensesContext.handlers.orderBy(expenses, expensesContext.state.order) as SetStateAction<any>}
          onUpdateExpense={expensesContext.handlers.onUpdateExpense}
          onDeleteReceipt={expensesContext.handlers.onDeleteReceipt}
          setOrder={expensesContext.handlers.setOrder}
          order={expensesContext.state.order}
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
