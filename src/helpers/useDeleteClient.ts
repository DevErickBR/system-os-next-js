import axios from "axios"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const verifyOutPage = async (currentPage: Client[], page: number, router: AppRouterInstance) => {
    if (currentPage.length == 1) {
        const url = new URL(window.location.href);
        const newPage = page - 1
        url.searchParams.set('page', newPage.toString());
        console.log(url.pathname + url.search)
        router.replace(url.toString())
    }
}

export const useDeleteClient = async (client: Client, state: Client[], setState: (a: Client[]) => void, currentPage: Client[], page: number, router: AppRouterInstance) => {
    let api = process.env.NEXT_PUBLIC_URL

    if (confirm(`Deseja Excluir o ${client.nomeCliente} da Lista de Clientes?`)) {
        await verifyOutPage(currentPage, page, router)
        let listFilter = state.filter((item) => item.documentoCliente != client.documentoCliente);
        setState(listFilter)
        await axios.delete(`${api}/clientes/cliente/${client.idCliente}`)

    }


}