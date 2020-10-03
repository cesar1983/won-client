import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: '/img/game-item.png',
    title: 'Doom Final',
    developer: 'Cesar Games',
    price: 'R$250,0',
    promotionalPrice: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)
