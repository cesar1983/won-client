import theme from 'styles/theme'

/**
 * Dessa forma, ele declara um tipo Theme e incorpora ao
 * Theme todos os atributos do theme que nós criamos e seus tipos.
 * A tipagem não é explícita, mas sim definida pelos valores já definidos
 * aos atributos.
 *
 * Isso é necessário par usar THEMES do styled components com TS
 */

// Inferencia de tipos.
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
