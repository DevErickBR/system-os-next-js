type Props = {
    list: Client[],
    nome: string,
    tel: string,
    documento: string,
    idDocumento: string
}

const useFilterList = ({ list, nome, tel, documento, idDocumento }: Props) => {
    let filterList: Client[] = []
    if (nome || tel || documento || idDocumento) {
        filterList = list.filter((client) => client.nomeCliente.toLowerCase().includes(nome.toLowerCase()) && client.documentoCliente.includes(documento) && client.telefoneCliente.includes(tel) && client.idTipoDocumento === parseInt(idDocumento))
        return filterList
    }


}

export default useFilterList;