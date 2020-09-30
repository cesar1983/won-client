import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const bannerMockInfo = {
      img:
        'https://venturebeat.com/wp-content/uploads/2020/01/doom-eternal-4.jpg',
      title: 'Doom',
      subtitle: '<i>Eternal Yehhhh</i>',
      buttonLabel: 'Doom',
      buttonLink: '/games/doom'
    }

    renderWithTheme(<Banner {...bannerMockInfo} />)

    // verificar se o title existe
    expect(screen.getByRole('heading', { name: /Doom/i })).toBeInTheDocument()

    // verificar se o subtitle existe
    expect(
      screen.getByRole('heading', { name: /Eternal/i })
    ).toBeInTheDocument()

    // verificar se a img existe
    expect(screen.getByRole('img', { name: /Doom/i })).toBeInTheDocument()
  })
})
