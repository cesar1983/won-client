import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://venturebeat.com/wp-content/uploads/2020/01/doom-eternal-4.jpg',
    title: 'Doom Final',
    subtitle: '<i>Eternal <strong>Yehhhh</strong> Doommmm</i>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/doom'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '84rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
