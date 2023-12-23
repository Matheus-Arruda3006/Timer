import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { Button } from './assets/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'


export function App() {
  const [count, setCount] = useState(0)

  return (
    
    <ThemeProvider theme={defaultTheme}>
        <h1>Hi</h1>
        <Button variant='primary'/>
        <Button variant='secondary'/>
        <Button variant='danger'/>
        <Button variant='success'/>

        <GlobalStyle/>
    </ThemeProvider>
      
    
  )
}


