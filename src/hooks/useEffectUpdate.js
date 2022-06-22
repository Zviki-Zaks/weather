import { useEffect, useRef } from "react"

export const useEffectUpdate = (cb, dependencies) => {
    const isMountain = useRef(true)
    useEffect(() => {
        if (isMountain.current) {
            isMountain.current = false
            return
        }
        cb()
    }, [dependencies])

}