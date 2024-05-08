import React from "react";

type Props = {
    page: number;
    limit: number;
    totalItens: number;
}


const generatorPages = (page: number, totalPages: number) => {
    const current = Math.min(page, totalPages)
    const total = Math.max(1, totalPages)

    if (total <= 7) {
        return Array.from({ length: total }).map((__, index) => index + 1)
    }

    if (current < 3) {
        return [1, 2, 3, -20, total - 2, total - 1, total]
    }

    if (current == 3) {
        return [1, 2, 3, 4, -20, total - 1, total]
    }



    if (current >= total - 3) {
        return [1, -20, total - 4, total - 3, total - 2, total - 1, total]
    }

    if (current > 3 && current < total - 3)
        return [1, -20, current - 1, current, current + 1, -20, total]
}


const usePagination = ({ page, limit, totalItens }: Props) => {
    const totalPages = Math.ceil(totalItens / limit);
    const pages = generatorPages(page, totalPages) as []
    const isCurrentPage = (n: number) => n === page
    return { pages, isCurrentPage }
}

export default usePagination;