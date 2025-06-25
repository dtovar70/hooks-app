import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import { HooksApp } from './HooksApp' */
/* import { CounterApp } from './01-useState/CounterApp' */
/* import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks' */
/* import { SimpleForm } from './02-useEffect/SimpleForm' */
/* import { FormWithCustomHooks } from './02-useEffect/FormWithCustomHooks' */
/* import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks' */
/* import { FocusScreen } from './04-useRef/FocusScreen' */
/* import { Layout } from './05-useLayoutEffect/Layout' */
/* import { Memorize } from './06-memos/Memorize' */
/* import { MemoHook } from './06-memos/MemoHook' */
/* import { CallBackHook } from './06-memos/CallBackHook' */
/* import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer' */
/* import { TodoApp } from './08-useReducer/TodoApp' */
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter> 

        {/*   <StrictMode> */}

            <MainApp />
            
        {/*   </StrictMode> */}

    </BrowserRouter> 
)
