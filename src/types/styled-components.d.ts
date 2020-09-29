import theme from 'styles/theme'

/**
 * Inferencia de tipos.
 *
 * Dessa forma, ele declara um tipo Theme e incorpora ao
 * Theme todos os seus atributos que nós criamos e seus tipos.
 * A tipagem não é explícita, mas sim definida pelos valores já definidos
 * aos atributos.
 *
 * Isso é necessário par usar THEMES do styled components com TS
 */
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
