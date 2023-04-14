import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IntlProvider } from 'react-intl'
import messages from './compiled-lang/en-US.json'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale='en-US' defaultLocale='en-US' messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
)
