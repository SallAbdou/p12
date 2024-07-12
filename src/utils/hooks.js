import { useState, useEffect } from 'react'

export const useGet = request => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        request
            .then(data => setData(data))
            .catch((error) => {
                console.log(error)
                setError(error)
            })
            .finally(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { isLoading, data, error }
}