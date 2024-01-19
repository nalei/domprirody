import ProxyButton from '@/components/button/ProxyButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof ProxyButton> = {
  title: 'Form/Button',
  component: ProxyButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['default', 'primary'],
    },
  },
}

export default meta

type Story = StoryObj<typeof ProxyButton>

export const Example: Story = {
  args: {
    type: 'primary',
  },
  render: (args) => ({
    components: { ProxyButton },
    setup() {
      return {
        args
      }
    },
    template: `
      <proxy-button
        :type=args.type
      >
        Example
      </proxy-button>`,
  }),
}

export const BasicUsage: Story = {
  args: {
    type: 'primary',
  },
  render: (args) => ({
    components: { ProxyButton },
    setup() {
      return {
        args
      }
    },
    template: `
      <proxy-button>
        Default
      </proxy-button>
      <proxy-button type="primary">
        Primary
      </proxy-button>
    `,
  }),
}
