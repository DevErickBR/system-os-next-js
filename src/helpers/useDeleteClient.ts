import axios from "axios"

export const useDeleteClient = async (client: Client, state: Client[], setState: (a: Client[]) => void) => {
    let api = process.env.NEXT_PUBLIC_URL

    if (confirm(`Deseja Excluir o ${client.nomeCliente} da Lista de Clientes?`)) {
        let listFilter = state.filter((item) => item.documentoCliente != client.documentoCliente);
        setState(listFilter)
        await axios.delete(`${api}/clientes/cliente/${client.idCliente}`)
    }

}