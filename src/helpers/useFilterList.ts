type Props = {
    list: Client[],
    nome: string,
    tel?: string,
    documento?: string,
    idDocumento?: string
}

const useFilterList = ({ list, nome, tel, documento }: Props) => {
    if (nome) {
        const filterList: Client[] = list.filter(client => client.nomeCliente.toLocaleLowerCase() == nome.toLocaleLowerCase())
        return filterList
    }
}

export default useFilterList;