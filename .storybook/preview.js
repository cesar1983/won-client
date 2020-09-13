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

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
