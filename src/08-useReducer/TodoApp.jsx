import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del Alma',
    done: false,
  }
]

export const TodoApp = () => {

const [todos, dispatchTodo] = useReducer(todoReducer, initialState) 

const handleNewTodo = (todo) => {
  console.log({todo});
  }

  return (
    <>
    
        <h1>TodoApp (10), <small>pendientes: 2</small></h1>
        <hr/>

        <div className="row">
          <div className="col-7">
            {/* TodoList */} {/* componenete todolist donde voy a colocar esta lista  */}
            <TodoList
              todos={todos}
            />
          {/* fin TodoList */}
          </div>

          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
          {/* TodoAdd onNewTodo */}
          {/* {id: new Date...., description, done: false} */}
            <form action="">
              <input type="text" 
                placeholder="Que hay que hacer"
                className="form-control"
              />
              <button
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
              </button>
            </form>

            {/* fin todo */}
          </div>
        </div>

    </>
  )
}
