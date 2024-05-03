import axios from "axios"

type Client = {
    idCliente: number,
    nomeCliente: string,
    telefoneCliente: string,
    idTipoDocumento: number,
    documentoCliente: string
}

export const useDeleteClient = async (client: Client) => {
    let api = process.env.NEXT_PUBLIC_URL

    if (confirm(`Deseja Excluir o ${client.nomeCliente} da Lista de Clientes?`)) {
        window.location.reload()
        await axios.delete(`${api}/clientes/cliente/${client.idCliente}`)
    }

}