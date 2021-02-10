import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor:pointer;
  font-size: 1em;
  display:block;
  padding: 0.5em 1em;
  border-radius: 3px;
  color:${({ theme }) => (theme.colors.primary)};
  background:${({ theme }) => (theme.colors.white)};
  border: 1px solid ${({ theme }) => (theme.colors.primary)};
  outline: none;

  &: hover{
  background: ${({ theme }) => (theme.colors.primary)};;
  color:${({ theme }) => (theme.colors.white)};
}
`