import styled from 'styled-components';

export type HeaderProps = {
  userName?: string
}

export default function Header({ userName }: HeaderProps) {
  return userName ? <H1>Welcome to {userName}'s educations page</H1>
    : <H1>Hi there! Welcome to education showcase</H1>;
}

export const H1 = styled.h1`
  font-size:2rem;
  text-align:center;
  font-weight:normal;
  color:${({ theme }) => (theme.colors.text)}
`;