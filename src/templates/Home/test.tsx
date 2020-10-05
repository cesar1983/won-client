import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
