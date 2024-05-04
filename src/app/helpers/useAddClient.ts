import axios from "axios";

type Client = {
    nomeCliente: string,
    telefoneCliente: string,
    idTipoDocumento: number,
    documentoCliente: string
    emailCliente: string
}

function useAddClient(cliente: Client) {
    const postClient = async () => {
        const api = process.env.NEXT_PUBLIC_URL
        await axios.post(`${api}/clientes`, {
            nomeCliente: cliente.nomeCliente,
            telefoneCliente: cliente.telefoneCliente,
            emailCliente: cliente.emailCliente,
            documentoCliente: cliente.documentoCliente,
            idTipoDocumento: cliente.idTipoDocumento
        }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then((response) => console.log(response)).catch(error => console.log(error))
    }

    postClient()
};

export default useAddClient