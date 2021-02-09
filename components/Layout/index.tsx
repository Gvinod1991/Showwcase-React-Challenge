import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode
}
interface RootState {
  HomeReducer: { userName: string }
}

export default function Layout({ children }: LayoutProps) {
  const userName = useSelector(({ HomeReducer: { userName } }: RootState) => userName);
  return <>
    <Header userName={userName} />
    <MainWrapper>
      {children}
    </MainWrapper>
  </>
}

export const MainWrapper = styled.div`
min-height: 100vh;
padding: 0 0.5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`