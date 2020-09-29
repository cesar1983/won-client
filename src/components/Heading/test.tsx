import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Lorem</Heading>)
    expect(screen.getByRole('heading', { name: /lorem/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when black color is passed', () => {
    renderWithTheme(<Heading color="black">Lorem</Heading>)
    expect(screen.getByRole('heading', { name: /lorem/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with  a left border when selected ', () => {
    renderWithTheme(<Heading lineLeft>Lorem</Heading>)
    expect(screen.getByRole('heading', { name: /lorem/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with  a left border when selected ', () => {
    renderWithTheme(<Heading lineLeft>Lorem</Heading>)
    expect(screen.getByRole('heading', { name: /lorem/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with  a bottom border when selected ', () => {
    renderWithTheme(<Heading lineBottom>Lorem</Heading>)
    expect(screen.getByRole('heading', { name: /lorem/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
