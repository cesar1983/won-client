import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://venturebeat.com/wp-content/uploads/2020/01/doom-eternal-4.jpg',
  title: 'Doom Final',
  subtitle: '<i>Eternal <strong>Yehhhh</strong> Doommmm</i>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/doom'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Doom Final/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Eternal/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Doom/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
