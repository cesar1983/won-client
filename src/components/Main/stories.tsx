import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta
/* pode definir valores default momento da declacao do meta */

export const Basic: Story = (args) => <Main {...args} />
/* pode tbm definir/redefini os valores no momento da declacao do story */
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Main {...args} />
