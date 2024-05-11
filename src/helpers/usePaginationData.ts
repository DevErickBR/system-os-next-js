type Props = {
    list: Client[],
    limit: number,
    page: number,
    filterList?: Client[]
}

const usePaginationData = ({ list, limit, page, filterList }: Props) => {
    const metaData = {
        pagination: {
            totalItens: (filterList ? filterList.length : list.length),
            current: page
        }
    }
    const response: Client[][] = [];
    const pages = Math.ceil(metaData.pagination.totalItens / limit)
    let count = 0
    if (filterList) {
        for (let i = 1; i <= pages; i++) {
            const newPage = [];
            for (let i = 0; i < limit; i++) {
                if (filterList[count]) {
                    newPage.push(filterList[count])
                    count++
                }
            }

            response.push(newPage)
        }
    } else {

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
    }

    const data = response[metaData.pagination.current - 1]
    return { data, metaData }
}


export default usePaginationData

