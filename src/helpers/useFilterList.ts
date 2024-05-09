type Props = {
    list: Client[],
    nome?: string,
    tel?: string,
    documento?: string,
    idDocumento?: string
}

const useFilterList = ({ list, nome, tel, documento }: Props) => {
    if (nome && documento && tel) {
        console.log('ola mundo')
    }
    if (nome) {
        const filterList: Client[] = list.filter(client => client.nomeCliente.toLowerCase().includes(nome.toLowerCase()))
        return filterList
    }
    if (documento) {
        const filterList: Client[] = list.filter(client => client.documentoCliente.toLowerCase().includes(documento.toLowerCase()))
        return filterList
    }
    if (tel) {
        const filterList: Client[] = list.filter(client => client.telefoneCliente.toLowerCase().includes(tel.toLowerCase()))
        return filterList
    }

}

export default useFilterList;