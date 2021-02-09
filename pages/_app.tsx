import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { GlobalStyles } from '../styles/globalStyles';
import Theme from '../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../store';

function App({ Component, pageProps }: AppProps) {

  return <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
}

export default App;
