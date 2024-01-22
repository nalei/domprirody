import ProxyButton from '@/components/Button/ProxyButton.vue'
import { ButtonType, ButtonSize } from '@/components/Button'
import type { Meta, StoryObj } from '@storybook/vue3'

const stringEnumFormatter = (stringEnum: Record<string, string>): string => {
  return Object.keys(stringEnum)
  .map((m) => `'${stringEnum[m as keyof typeof stringEnum]}'`)
  .join('|')
}

const meta: Meta<typeof ProxyButton> = {
  title: 'Basic/Button',
  component: ProxyButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      table: {
        type: {
          summary: stringEnumFormatter(ButtonType),
        },
      },
      control: { type: 'radio' },
      options: ButtonType,
    },
    size: {
      table: {
        type: {
          summary: stringEnumFormatter(ButtonSize),
        },
      },
      control: { type: 'radio' },
      options: ButtonSize,
    },
    circle: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ProxyButton>

export const Example: Story = {
  args: {
    type: ButtonType.Primary,
    size: ButtonSize.Medium,
    circle: false,
    disabled: false,
  },
  render: (args) => ({
    components: { ProxyButton },
    setup() {
      return {
        args,
      }
    },
    template: `
      <proxy-button
        :type=args.type
        :size=args.size
        :circle=args.circle
        :disabled=args.disabled
      >
        Example
      </proxy-button>`,
  }),
}

export const BasicUsage: Story = {
  args: {},
  render: (args) => ({
    components: { ProxyButton },
    template: `
      <proxy-button>Default</proxy-button>
      <proxy-button type="primary">Primary</proxy-button>
      <proxy-button type="danger">Danger</proxy-button>
      <proxy-button circle />
      <proxy-button type="primary" circle />
      <proxy-button type="danger" circle />
    `,
  }),
}

export const Sizes: Story = {
  args: {},
  render: (args) => ({
    components: { ProxyButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; align-items: end;">
          <proxy-button size="large">Large</proxy-button>
          <proxy-button>Medium</proxy-button>
          <proxy-button size="small">Small</proxy-button>
        </div>
        <div style="display: flex; align-items: end;">
          <proxy-button size="large" circle />
          <proxy-button circle />
          <proxy-button size="small" circle />
        </div>
      </div>
    `,
  }),
}
