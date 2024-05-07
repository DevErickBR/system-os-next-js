import useClientList from "./useClientList"

type Props = {
    list: Client[],
    limit: number
}

const usePaginationData = ({ list, limit }: Props) => {
    const metaData = {
        pagination: {
            totalItens: list.length,
            current: 1
        }
    }
    const pages = Math.ceil(metaData.pagination.totalItens / limit)

    console.log(pages)
}


export default usePaginationData

