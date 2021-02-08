import styled from 'styled-components';

export type HeaderProps = {
  username?: string
}

export default function Header({ username }: HeaderProps) {
  return username ? <H1>Welcome to {username}'s educations page</H1>
    : <H1>Hi there! Welcome to education showcase</H1>;
}

export const H1 = styled.h1`
font-size:2rem;
text-align:center;
font-weight:normal
`;