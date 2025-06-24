import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


export const useTodos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, [], init) 

    useEffect(() => { 
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo = (newTodo) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: newTodo,
      }
      
      dispatchTodo(action)
    }
    
      const handleDeleteTodo = ( id ) => {
        dispatchTodo ({
          type: '[TODO] Remove Todo',
          payload: id, 
        })
      }
    
      const handleToggleTodo = ( id ) => {
        dispatchTodo ({
          type: '[TODO] Toggle Todo',
          payload: id, 
        })
      }

      let todosCount = todos.length;
      let pendingTodosCount = todos.filter(todo => !todo.done).length;
    
    return{
        todos,
        todosCount,
        pendingTodosCount,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }
}
