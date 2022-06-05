import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeOutId);
        };
    }, [value, delay]);

    return debouncedValue;
};
