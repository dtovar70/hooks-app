import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import { HooksApp } from './HooksApp' */
/* import { CounterApp } from './01-useState/CounterApp' */
/* import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks' */
import { SimpleForm } from './02-useEffect/SimpleForm'

import './index.css'
import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks'

createRoot(document.getElementById('root')).render(
/*   <StrictMode> */
    <FormWithCustomHooks />
/*   </StrictMode>, */
)
