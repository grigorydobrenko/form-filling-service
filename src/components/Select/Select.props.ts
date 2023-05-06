import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface Option {
  label: string;
  value: string | number;
}
export interface SelectProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options?: Option[];
  error?: string;
  onChangeOption?: Function;
  onChangeCallback?: (value: string) => void;
}
