import React, { useReducer } from 'react'

import EN from 'assets/i18n/translations/en.json'
import PT from 'assets/i18n/translations/pt-br.json'

const translations = {
  en: EN,
  pt: PT
}

const getTranslate = (langCode: string) => (key: string | number) => translations[langCode][key] || key

const initialState = {
  langCode: 'en',
  translate: getTranslate('en')
}

export const i18nContext = {
  state: initialState,
  handlers: {
    changeLanguage: (_action: { type: any; payload: string }) => {}
  }
}

export const I18nContextProvider = React.createContext<typeof i18nContext>(i18nContext)

export const Provider: React.FC = ({ children }) => {
  const reducer = (_state: any, action: { type: any; payload: string }) => {
    switch (action.type) {
      case 'setLanguage':
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload)
        }
      default:
        return { ...initialState }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handlers = {
    changeLanguage: (action: { type: any; payload: string }) => {
      dispatch(action)
    }
  }

  const contextValue = {
    ...i18nContext,
    state,
    handlers
  }

  return <I18nContextProvider.Provider value={contextValue}>{children}</I18nContextProvider.Provider>
}
