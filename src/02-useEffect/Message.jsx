import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {

    const onMouseMove = ({x, y}) => {
        const coords = { x: event.x, y: event.y };
        console.log(coords);
    }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
           window.removeEventListener('mousemove', onMouseMove);
        }
    }
    , []);

  return (
    <>
    
    <h3>Usuario ya Existe</h3>
    
    </>
  )
}
