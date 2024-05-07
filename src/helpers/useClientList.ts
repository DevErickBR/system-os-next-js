import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export const useClientList = () => {

    const [clients, setClients] = useState<Client[]>([])
    const api = process.env.NEXT_PUBLIC_URL

    const getClients = useCallback(async () => {
        const response = await axios.get(
            `${api}/clientes`
        )
        setClients(response.data)
    }, [])

    useEffect(() => {
        getClients()
    }, [getClients])

    return {
        clients, setClients
    }
}





export default useClientList