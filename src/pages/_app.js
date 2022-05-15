import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>my_portfolio</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 