import {useState, useEffect}from 'react';

const useFetch = (url, trigger = true) => {
    const [loading, setLoading] = useState(!!trigger);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!trigger) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);

                const dataForLogging = {
                    url,
                    method: 'GET',
                    payload: null,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                };

                localStorage.setItem(`log_${Date.now()}`, JSON.stringify(dataForLogging));
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, trigger]);

    return { data, loading, error };
};

export default useFetch;

