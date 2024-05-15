import axios from "axios";

const useEditClient = async (id: number, name: string, tel: string, idDoc: number, documento: string, email: string) => {
    let msg = ''
    const api = process.env.NEXT_PUBLIC_URL
    await axios.put(`${api}/clientes`, {
        idCliente: id,
        nomeCliente: name,
        telefoneCliente: tel,
        emailCliente: email,
        documentoCliente: documento,
        idTipoDocumento: idDoc
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => msg = res.data)

    console.log(msg)
    return { msg }
};

export default useEditClient