import { useEffect, useState } from "react";

const useApiGiphy = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchApi = () => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                setLoading(true);
                setData(respuestaJson.data)
                //console.log(respuestaJson);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi();        
    }, [url, fetchApi])

    return { loading, data }
}
 
export default useApiGiphy;