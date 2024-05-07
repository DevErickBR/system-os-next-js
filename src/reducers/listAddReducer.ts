type AddCliet = {
    type: "add",
    payload: {
        idCliente?: number,
        nomeCliente: string,
        telefoneCliente: string,
        idTipoDocumento: number,
        documentoCliente: string,
        emailCliente?: string
    }
};

type DelClient = {
    type: "del",
    payload: {
        nomeCliente: string,
        documentoCliente: string
    }
};

export type ListActions = AddCliet | DelClient;

export const listReducer = (list: Client[], action: ListActions) => {
    switch (action.type) {
        case "add":
            return [
                ...list, {
                    nomeCliente: action.payload.nomeCliente,
                    telefoneCliente: action.payload.telefoneCliente,
                    documentoCliente: action.payload.documentoCliente,
                    idTipoDocumento: action.payload.idTipoDocumento,
                    emailCliente: action.payload.emailCliente
                }
            ]
        case "del":
            return list.filter((item) => (action.payload.nomeCliente != item.nomeCliente))
        default:
            return list

    }
};