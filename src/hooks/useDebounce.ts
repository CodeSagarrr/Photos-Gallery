import { useEffect, useState } from "react"

export const useDebounce = <T> (value: T, delay: number) => {
    const [data , setData] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => setData(value) , delay)
        return () => clearTimeout(timer)
    }, [value , delay])

    return data
}