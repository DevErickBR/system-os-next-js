import axios from "axios"
import { useCallback, useEffect, useState } from "react"

type Client = {
    idCliente: number,
    nomeCliente: string,
    telefoneCliente: string,
    idTipoDocumento: number,
    documentoCliente: string
}

export const useClientList = () => {
    const [clients, setClients] = useState<Client[]>([])
    const api = process.env.NEXT_PUBLIC_URL
    const getClients = useCallback(async () => {
        const response = await axios.get(
            `${api}/clientes`
        )

        setClients(response.data)
    }, [])

    useEffect(() => { getClients() }, [getClients])

    return {
        clients
    }
}





export default useClientList