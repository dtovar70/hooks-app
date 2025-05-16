import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import { HooksApp } from './HooksApp' */
/* import { CounterApp } from './01-useState/CounterApp' */
/* import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks' */
/* import { SimpleForm } from './02-useEffect/SimpleForm' */
/* import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks' */
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

import './index.css'

createRoot(document.getElementById('root')).render(
/*   <StrictMode> */
    <MultipleCustomHooks />
/*   </StrictMode>, */
)
