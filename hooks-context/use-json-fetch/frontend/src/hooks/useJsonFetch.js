import {useState, useEffect} from 'react'

export default (url, opts = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url, opts)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => {
                setLoading(false);
            })
    }, [url, opts]);

    return [data, loading, error];
}