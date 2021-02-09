import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { GlobalStyles } from '../styles/globalStyles';
import Theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {

  return <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}

export default App;
