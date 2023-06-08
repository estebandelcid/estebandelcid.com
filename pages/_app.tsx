import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'; 

// export default function App({Component, pageProps}){
//     return (
//       <ThemeProvider enableSystem={true} attribute='class'>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     );
// }

function App({Component, pageProps}: AppProps){
    return (
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    );
}

export default App;