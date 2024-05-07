import Cliente from "./classClient"

import { Dispatch, SetStateAction } from "react";
import { ListActions } from "@/reducers/listAddReducer";

type Props = {
    dispatch: Dispatch<ListActions>,
    name: string,
    tel: string,
    idDoc: string,
    documento: string,
    email: string,
}

export const usePreAddClient = ({ dispatch, name, tel, idDoc, documento, email }: Props) => {
    let doc = parseInt(idDoc);
    let person = new Cliente(name, tel, doc, documento, email);

    if (name && documento && tel) {
        dispatch({
            type: "add",
            payload: {
                nomeCliente: person.nomeCliente,
                telefoneCliente: person.telefoneCliente,
                idTipoDocumento: person.idTipoDocumento,
                documentoCliente: person.documentoCliente,
                emailCliente: person.emailCliente
            }
        });
    } else (alert("Preecha todos os Campos"))
};

export const usePreRemoveClient = (dispatch: Dispatch<ListActions>, documento: string, nome: string) => {
    dispatch({
        type: "del",
        payload: {
            documentoCliente: documento,
            nomeCliente: nome
        }
    });
};