import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://venturebeat.com/wp-content/uploads/2020/01/doom-eternal-4.jpg',
    title: 'Doom',
    subtitle: '<i>Eternal Yehhhh</i>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/doom'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
