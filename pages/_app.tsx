import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import MainLayouts from './layouts/MainLayouts';
import { SelectedContextProvider } from '../lib/contexts/selected.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelectedContextProvider>
      <MainLayouts>
        <Component {...pageProps} />
      </MainLayouts>
    </SelectedContextProvider>
  );
}
