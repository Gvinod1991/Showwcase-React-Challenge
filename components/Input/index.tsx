import styled from 'styled-components';

export type InputComponentProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  value: string,
  placeholder: string,
} & React.FormEvent<HTMLInputElement>

export default function Input({ onChange, ...otherProps }: InputComponentProps) {
  return <StyledInput onChange={onChange} {...otherProps} />
}

export const StyledInput = styled.input`
  border: 1px solid #111;
  background:#f5f5f5;
  padding: 0.5em;
  margin: 0.5em;
  width:100%;
  height:2.5rem;
  border-radius:0.2rem;
  outline:none;
  font-size:1rem;
`

