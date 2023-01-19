import './styles/style.css';
import './styles/messages.css';

import NavBar from './navbar.js';
import '../styles/globalStyles.css';

export default function App({ Component, pageProps }) {
  return (
    <div className='mainContainer v'>
      <Component {...pageProps} />
    </div>
  );
}
