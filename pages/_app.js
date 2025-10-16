import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';
import '../styles/custom.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;