import { useSelector } from 'react-redux';
import Header from '../Header';
import Head from 'next/head';
import { MainWrapper } from './layout.styles';

interface LayoutProps {
  children: React.ReactNode
}
interface RootState {
  HomeReducer: { userName: string }
}

const title = "Showwcase React challenge";

export default function Layout({ children }: LayoutProps) {
  const userName = useSelector(({ HomeReducer: { userName } }: RootState) => userName);
  return <>
    <Head>
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
    <Header userName={userName} />
    <MainWrapper>
      {children}
    </MainWrapper>
  </>
}