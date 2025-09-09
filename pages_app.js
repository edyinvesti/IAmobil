import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}IAmobil/
├── package.json
├── next.config.js
├── pages/
│   └── _app.js      ← Este é o arquivo que você chamou de pages_app.js
│   └── ...          ← Outras páginas (ex: index.js, imoveis.js, admin/index.js)
├── components/
│   └── Navbar.js
│   └── ImovelCard.js
├── styles/
│   └── globals.css