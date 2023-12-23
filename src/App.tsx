import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';


export function App() {
  const [count, setCount] = useState(0)

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
        <GlobalStyle/>
    </ThemeProvider>
      
    
  )
}


