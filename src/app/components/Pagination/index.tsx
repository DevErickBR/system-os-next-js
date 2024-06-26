import Link from "next/link";
import { ListItem, Wrapper } from "./syled";
import usePagination from "./usePagination";

type Props = {
    page: number;
    limit: number;
    totalItens: number;
}

const Pagination = ({ page, limit, totalItens }: Props) => {
    const { pages, isCurrentPage } = usePagination({ page, limit, totalItens })

    return (
        <Wrapper>
            <ul>
                {pages.map((item, index) => (item == -20 ?
                    <li key={index}>...</li>
                    :
                    <Link href={`clientes/?page=${item}`}><ListItem key={index} isCurrent={isCurrentPage(item)}>{item}</ListItem></Link>
                )

                )
                }

            </ul>
        </Wrapper>
    );
}

export default Pagination