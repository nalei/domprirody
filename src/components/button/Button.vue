<template lang="pug">
button.sui-button(:type='$attrs.type || "button"' :class='buttonClasses')
  span.sui-button-content(:class='contentClasses')
    slot
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue';
  import { ButtonSize, ButtonMode } from './Button';

  export default defineComponent({
    props: {
      size: {
        type: String as PropType<ButtonSize>,
        default: 'm',
        validator: (value: ButtonSize) => {
          const sizes: ButtonSize[] = ['s', 'm', 'l'];
          return sizes.includes(value);
        },
      },
      mode: {
        type: String as PropType<ButtonMode>,
        default: 'primary',
        validator: (type: ButtonMode) => {
          const types: ButtonMode[] = ['primary', 'warning', 'alert', 'secondary', 'flat', 'outlined'];

          return types.includes(type);
        },
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const buttonClasses = computed(() => ({
        [`sui-${props.size}`]: true,
        [`sui-${props.mode}`]: props.mode !== 'primary',
        'sui-loading': props.loading,
      }));

      const contentClasses = computed(() => {
        const textClass = props.size === 'l' ? `sui-h-500` : 'sui-text-14px-medium';
        return [textClass];
      });

      return { buttonClasses, contentClasses };
    },
  });
</script>

<style scoped>
  .sui-button {
    display: inline-flex;
    font-family: var(--sui-ff-primary);
    align-items: center;
    background-color: var(--sui-purple-500);
    margin: 0;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    max-width: fit-content;
    height: fit-content;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    padding: 10px 12px;
    user-select: none;
    cursor: pointer;

    &:hover:enabled {
      background-color: var(--sui-purple-600);
    }
    &:active:enabled {
      background-color: var(--sui-purple-700);
    }
    &:disabled {
      cursor: default;
      background-color: var(--sui-purple-100);
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--sui-blue-500);
    }

    .sui-button-icon {
      width: 20px;
      height: 20px;
      margin-right: 4px;
      background-repeat: no-repeat;
      background-size: 100%;
      font-size: 20px;
      --sui-icon-color: white;
    }
  }

  .sui-button-content {
    color: var(--sui-white);
  }

  .sui-icon-only {
    padding: 10px;
    .sui-button-icon {
      margin-right: 0;
    }
  }

  .sui-s {
    padding: 6px 12px;
    &.sui-icon-only {
      padding: 6px;
    }
  }

  .sui-l {
    padding: 12px 24px;
    &:not(.sui-icon) {
      padding: 14px 24px;
    }
    .sui-button-icon {
      margin-right: 10px;
      width: 24px;
      height: 24px;
      font-size: 24px;
    }
    &.sui-icon-only {
      padding: 12px;
      .sui-button-icon {
        margin-right: 0;
      }
    }
    &.sui-loading::before {
      width: 24px;
      height: 24px;
      border-width: 3px;
    }
  }

  .sui-warning {
    background-color: var(--sui-orange-400);
    .sui-button-content {
      color: var(--sui-gray-900);
    }
    .sui-button-icon {
      --sui-icon-color: var(--sui-gray-900);
    }
    &:hover:enabled {
      background-color: var(--sui-orange-500);
    }
    &:active:enabled,
    &.sui-active {
      background-color: var(--sui-orange-600);
    }
    &:disabled {
      .sui-button-content {
        color: var(--sui-gray-600);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-600);
      }
      background-color: var(--sui-gray-100);
    }
    &:focus {
      box-shadow: 0 0 0 2px var(--sui-orange-600);
    }
    &.sui-loading::before {
      border-color: var(--sui-gray-900);
      border-right-color: transparent;
    }
  }

  .sui-alert {
    background-color: var(--sui-red-400);
    &:hover:enabled {
      background-color: var(--sui-red-500);
    }
    &:active:enabled,
    &.sui-active {
      background-color: var(--sui-red-600);
    }
    &:disabled {
      .sui-button-content {
        color: var(--sui-gray-600);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-600);
      }
      background-color: var(--sui-gray-200);
    }
    &:focus {
      box-shadow: 0 0 0 2px var(--sui-red-200);
    }
  }

  .sui-secondary {
    background-color: var(--sui-gray-100);

    .sui-button-content {
      color: var(--sui-gray-700);
    }
    .sui-button-icon {
      --sui-icon-color: var(--sui-gray-700);
    }
    &:hover:enabled {
      .sui-button-content {
        color: var(--sui-gray-900);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-900);
      }
      background-color: var(--sui-gray-200);
    }
    &:active:enabled,
    &.sui-active {
      .sui-button-content {
        color: var(--sui-gray-900);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-900);
      }
      background-color: var(--sui-gray-300);
    }
    &:disabled {
      .sui-button-content {
        color: var(--sui-gray-400);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-400);
      }
      background-color: var(--sui-gray-100);
    }
    &.sui-loading::before {
      border-color: var(--sui-purple-500);
      border-right-color: transparent;
    }
  }

  .sui-flat {
    .sui-button-content {
      color: var(--sui-purple-500);
    }
    .sui-button-icon {
      --sui-icon-color: var(--sui-purple-500);
    }
    background-color: transparent;
    &:hover:enabled {
      background-color: var(--sui-gray-100);
    }
    &:active:enabled,
    &.sui-active {
      background-color: var(--sui-gray-200);
    }
    &:disabled {
      .sui-button-content {
        color: var(--sui-purple-100);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-purple-100);
      }
      background-color: transparent;
    }
    &.sui-loading {
      background-color: var(--sui-purple-100);
      &::before {
        border-color: var(--sui-purple-500);
        border-right-color: transparent;
      }
    }
  }

  .sui-outlined {
    background-color: var(--sui-white);
    border: 1px solid var(--sui-gray-300);
    .sui-button-content {
      color: var(--sui-gray-700);
    }
    .sui-button-icon {
      --sui-icon-color: var(--sui-gray-700);
    }
    &:hover:enabled,
    &:active:enabled,
    &.sui-active {
      .sui-button-content {
        color: var(--sui-gray-900);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-900);
      }
      border-color: var(--sui-gray-400);
    }
    &:hover:enabled {
      background-color: var(--sui-gray-100);
    }
    &:active:enabled,
    &.sui-active {
      background-color: var(--sui-gray-300);
    }
    &:focus {
      .sui-button-content {
        color: var(--sui-gray-900);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-900);
      }
    }
    &:disabled {
      .sui-button-content {
        color: var(--sui-gray-400);
      }
      .sui-button-icon {
        --sui-icon-color: var(--sui-gray-400);
      }
      background-color: var(--sui-white);
    }
    &.sui-loading::before {
      border-color: var(--sui-purple-500);
      border-right-color: transparent;
    }
  }

  .sui-loading {
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      box-sizing: border-box;
      border: 2px solid var(--sui-white);
      border-right-color: transparent;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      animation: 1.5s linear infinite rotation;
    }
    .sui-button-icon,
    .sui-button-content {
      visibility: hidden;
    }
  }

  @keyframes rotation {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>
