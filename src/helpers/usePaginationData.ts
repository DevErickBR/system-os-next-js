type Props = {
    list: Client[],
    limit: number,
    page: number
}

const usePaginationData = ({ list, limit, page }: Props) => {
    const metaData = {
        pagination: {
            totalItens: list.length,
            current: page
        }
    }
    const response: Client[][] = [];
    const pages = Math.ceil(metaData.pagination.totalItens / limit)
    let count = 0

    for (let i = 1; i <= pages; i++) {
        const newPage = [];
        for (let i = 0; i < limit; i++) {
            if (list[count]) {
                newPage.push(list[count])
                count++
            }

        }

        response.push(newPage)
    }

    const data = response[metaData.pagination.current - 1]
    return { data, metaData }
}


export default usePaginationData

