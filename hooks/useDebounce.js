import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(handle)
    }, [value])

    return debouncedValue;
}   

export default useDebounce;