import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import items from './mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render a slider', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelector('.slick-list')).toBeInTheDocument()
  })

  it('should have 6 items and 4 from the 6 are active,', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)

    expect(container.querySelectorAll('div.slick-active')).toHaveLength(4)

    expect(
      screen.getAllByRole('heading', {
        name: /Population Zero/i,
        hidden: false
      })
    ).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
