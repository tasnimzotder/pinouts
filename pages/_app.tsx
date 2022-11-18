import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import MainLayouts from './layouts/MainLayouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayouts>
      <Component {...pageProps} />
    </MainLayouts>
  );
}
