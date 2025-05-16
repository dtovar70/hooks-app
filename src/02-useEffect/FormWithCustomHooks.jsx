import { useEffect, useState } from "react";
import { Message } from "./Message";

export const FormWithCustomHooks = () => {
   const [formState, setFormState] = useState({
      username: 'dario',
      email: 'dario@gmail.com',
      password: ''
    });
  
  
    const { username, email } = formState;
  
    const onInputChange = ( {target} ) => {
     const { name, value } = target;
      setFormState({
        ...formState,
        [ name ]: value
      });
    }
  
    useEffect(() => {
    /*   console.log('formState change'); */
    }, [formState]);
  
    useEffect(() => {
    /*   console.log('email change'); */
    }, [email]);
  
  
  
    return (
      <>
      
          <h1>Formulario Simple</h1>
          <hr/>
  
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            autoComplete="off"
            onChange={ onInputChange }
          />
  
          <input 
              type="email"
              className="form-control mt-2"
              placeholder="Email"
              name="email"
              value={ email }
              autoComplete="off"
                        onChange={ onInputChange }
          />
  
         { 
          username === 'dario2' && <Message /> 
         }
      
      </>
    )
}
