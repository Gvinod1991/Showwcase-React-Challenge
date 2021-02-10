
import { H1 } from "./header.styles";

interface HeaderProps {
  userName?: string
}

export default function Header({ userName }: HeaderProps) {
  return userName ? <H1>Welcome to {userName}'s educations page</H1>
    : <H1>Hi there! Welcome to education showcase</H1>;
}
