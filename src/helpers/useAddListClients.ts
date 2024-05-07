import Cliente from "./classClient"
import useAddClient from "./useAddClient"

type Props = {
    setList: React.Dispatch<React.SetStateAction<Client[]>>,
    list: Client[];
    listClients: Client[]
}

export const useAddListClients = ({ list, setList, listClients }: Props) => {
    list.forEach((item) => {
        let person = new Cliente(item.nomeCliente, item.telefoneCliente, item.idTipoDocumento, item.documentoCliente, item.emailCliente as string)
        setList([...listClients, person])
        useAddClient(item)
    })
}