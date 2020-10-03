import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  img: '/img/game-item.png',
  title: 'Doom Final',
  developer: 'Cesar Games',
  price: 'R$250,0'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // expect(container.firstChild).toMatchSnapshot()
  })
})
