import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const useEditClient = async (id: number, name: string, tel: string, idDoc: number, documento: string, email: string, setMsg: Dispatch<SetStateAction<string>>) => {
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
    }).then(res => msg = res.data.msg)

    setMsg(msg)
};

export default useEditClient