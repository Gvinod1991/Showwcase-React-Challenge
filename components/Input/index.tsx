import { ChangeEvent, KeyboardEvent } from 'react';
import { StyledInput } from './input.styles';

export type InputComponentProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void,
  value: string,
  placeholder: string,
  inputType?: string
}

export default function Input({ onChange, inputType, ...otherProps }: InputComponentProps) {
  return <StyledInput onChange={onChange} inputType={inputType} {...otherProps} />
}

