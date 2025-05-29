import {useState, useEffect}from 'react';


interface IUseFetchProps  {
    url: string,
    trigger?: boolean,
}

const useFetch = <T = unknown>({url, trigger = true}: IUseFetchProps) => {
    const [loading, setLoading] = useState<boolean>(!!trigger);
    const [error, setError] = useState<string|null>(null);
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        if (!trigger) return;

        const fetchData = async ():Promise<void> => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json() as T[];
                setData(json);

                const dataForLogging = {
                    url,
                    method: 'GET',
                    payload: null,
                    status: response.status,
                    timestamp: new Date().toISOString(),
                };

                localStorage.setItem(`log_${Date.now()}`, JSON.stringify(dataForLogging));
            } catch (err:any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchData().catch(err => {
            console.error("Fetch error:", err);
        });
    }, [url, trigger]);

    return { data, loading, error };
};

export default useFetch;

