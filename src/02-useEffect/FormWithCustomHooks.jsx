import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
          username: '',
          email: '',
          password: ''
  });

  //const { username, email, password } = formState;
  
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

           <input 
              type="password"
              className="form-control mt-2"
              placeholder="Password"
              name="password"
              value={ password }
              autoComplete="off"
              onChange={ onInputChange }
          />

          <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
  
      
      </>
    )
}
