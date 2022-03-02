import { useState, useEffect } from "react";

const useDataFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading]  = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCtrl = new AbortController();
        fetch(url, {signal: abortCtrl.signal})
            .then(response => {
                if (!response.ok)
                    throw new Error('Oh no, something wrong with the resource! Please check again!')
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setIsLoading(false);
                }
            })
            return () => abortCtrl.abort();
    }, [url])
    return {data, isLoading, error};
}

export default useDataFetch;