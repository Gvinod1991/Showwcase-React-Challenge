import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import Input from "../components/Input";
import { saveUserName } from '../store/action';
import { HomeWrapper, Label, ButtonWrapper } from '../styles/home.styles';

export default function Home() {

  const [userName, setUserName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEnter = () => {
    if (userName !== "") {
      setErrorMessage("");
      dispatch(saveUserName(userName));
      router.push('/showcase');
    } else {
      setErrorMessage("Type your name!")
    }
  }

  return (
    <HomeWrapper>
      <Label>Type of your name and click "Enter" to begin</Label>
      <Input onChange={handleChange}
        placeholder={"Your Name"} value={userName} />
      <ButtonWrapper>
        <Button onClick={() => handleEnter()}>Enter</Button>
      </ButtonWrapper>
    </HomeWrapper>
  )
}