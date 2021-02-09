import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from "../components/Input";
import { saveUserName } from '../store/action';

export default function Home() {

  const [userName, setUserName] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEnter = () => {
    dispatch(saveUserName(userName));
    router.push('/showcase');
  }

  return (
    <HomeWrapper>
      <Label>Type of your name and click "Enter" to begin</Label>
      <Input onChange={handleChange}
        placeholder={"Your Name"} value={userName} />
      <Button onClick={() => handleEnter()}>Enter</Button>
    </HomeWrapper>
  )
}

export const HomeWrapper = styled.div`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
`;
export const Label = styled.p`
  font-size:1rem;
  color:${({ theme }) => (theme.colors.text)}
`