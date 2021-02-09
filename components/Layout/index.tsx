import styled from 'styled-components';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <>
    <Header />
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