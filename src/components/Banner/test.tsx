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

  it('should render a ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
