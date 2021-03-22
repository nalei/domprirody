import Vue from 'vue';

export type ButtonSize = 's' | 'm' | 'l';

export type ButtonMode = 'primary' | 'warning' | 'alert' | 'secondary' | 'flat' | 'outlined';

export declare class Button extends Vue {
  size?: ButtonSize;
  type: ButtonMode;
  loading?: boolean;
}
