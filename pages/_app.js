import { createGlobalStyle } from 'styled-components';
import { CartContextProvider } from '@/components/CartContext';
import { ClerkProvider } from '@clerk/nextjs';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eff4f0;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ClerkProvider>
        <GlobalStyles />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ClerkProvider>
    </>
  );
}
