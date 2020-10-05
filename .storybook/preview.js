import { ThemeProvider } from 'styled-components'
//import GlobalStyles from '../src/styles/global'
//import theme from '../src/styles/theme'
/**
 * por conta de uma configuracao feita no webpack do
 * storybook, podemos incluir tudo a partir da pasta src,
 * ao invés de fazer como as duas linhas de cima
 */
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
