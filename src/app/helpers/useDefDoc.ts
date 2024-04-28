import axios from "axios"
import { useCallback, useEffect, useState } from "react"

type DefDoc = {
    idTipoDocumento: number,
    tipoDocumento: string
}

export const useDefDocs = () => {
    const [defDocs, setDefDocs] = useState<DefDoc[]>([])
    const api = process.env.NEXT_PUBLIC_URL
    const getDefDocs = useCallback(async () => {
        const response = await axios.get(
            `${api}/defdocs`
        )
        setDefDocs(response.data)
    }, [])



    useEffect(() => { getDefDocs() }, [getDefDocs])

    return { defDocs }
}

export default useDefDocs;