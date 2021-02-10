import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import Input from "../components/Input";
import { saveUserName } from '../store/action';
import { HomeWrapper, Label, ButtonWrapper, TextDanger } from '../styles/home.styles';

interface RootState {
  HomeReducer: { userName: string }
}

export default function Home() {
  const userNameFromState = useSelector(({ HomeReducer: { userName } }: RootState) => userName);
  const [userName, setUserName] = useState<string>(userNameFromState);
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
      {userNameFromState && userNameFromState !== "" &&
        <Button onClick={() => router.push('/showcase')}>View Showcase</Button>
      }
      { (userNameFromState === "") &&
        <>
          <Label>Type of your name and click "Enter" to begin</Label>
          <Input onChange={handleChange}
            placeholder={"Your Name"} value={userName} />
          <ButtonWrapper>
            <Button onClick={() => handleEnter()}>Enter</Button>
          </ButtonWrapper>
          {errorMessage && <TextDanger>{errorMessage}</TextDanger>}
        </>
      }
    </HomeWrapper>
  )
}