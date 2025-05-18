import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url]); // cuando el url cambie, se vuelve a ejecutar el useEffect

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }


    const getFetch = async () => {

        
        if( localCache[url] ) {
            
            console.log("usando el caché");
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        
       setLoading();
       const resp = await fetch( url );

       //sleep
       await new Promise(resolve => setTimeout(resolve, 1500));

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }

       const data = await resp.json();
       setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        //manejo de l caché
        localCache[url] = data;
      


    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
