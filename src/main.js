import React from 'react'
import { createRoot } from 'react-dom/client'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as frMessages } from './locales/fr/messages'

import { App } from './App.js'

i18n.load({
  en: enMessages,
  fr: frMessages,
})

i18n.activate('en')

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>,
)
