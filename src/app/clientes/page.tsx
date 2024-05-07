'use client'
import { useClientList } from "../../helpers/useClientList";
import { useDefDocs } from "../../helpers/useDefDoc";
import { useDeleteClient } from "../../helpers/useDeleteClient";
import * as ReactIcons from 'react-icons/fa6'

import React, { useEffect, useState } from "react";
import { Wrapper, ButtonAction, WrapperTitle } from "./styled";
import ModalClient from "../components/modal-client";
import usePaginationData from "@/helpers/usePaginationData";


type Props = {
    searchParams?: {
        page?: string,
        limit?: string
    }
}

const Page = ({ searchParams }: Props): JSX.Element => {
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit) || 5;

    const { defDocs } = useDefDocs();
    const { clients, setClients } = useClientList();
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => { usePaginationData({ list: clients, limit }) }, [])

    return (
        <>
            <WrapperTitle>
                <h1>Clientes</h1>
                <div onClick={() => setIsOpen(true)}>ADICIONAR<ReactIcons.FaUserPlus /></div>
            </WrapperTitle>
            <Wrapper>
                {(clients.length != 0 && defDocs.length != 0) &&
                    <table>
                        <thead>
                            <th><input type="search" placeholder="Nome..." /></th>
                            <th><input type="search" placeholder="Documento..." /></th>
                            <th><input type="text" placeholder="Telefone..." /></th>
                            <th>
                                <select>
                                    <option selected hidden value="">Tipo do Documento</option>
                                    <option value="">Todos</option>
                                    {defDocs.map((item, index) => (<option key={index} value={item.idTipoDocumento} >{item.tipoDocumento}</option>))}
                                </select>

                            </th>
                            <th>Ações</th>
                        </thead>
                        <tbody >
                            {clients.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nomeCliente}</td>
                                    <td>{item.documentoCliente}</td>
                                    <td>{item.telefoneCliente}</td>
                                    <td>{defDocs[item.idTipoDocumento - 1].tipoDocumento}</td>
                                    <td className="actions">
                                        <div className="WrapperActions">
                                            <ButtonAction id="delete" onClick={() => { useDeleteClient(item, clients, setClients) }}><ReactIcons.FaUserMinus /></ButtonAction>
                                            <ButtonAction id="edit" ><ReactIcons.FaUserPen /></ButtonAction>
                                            <ButtonAction id="more"><ReactIcons.FaPlus /></ButtonAction>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                {
                    clients.length == 0 &&
                    <h1>Nenhum Cliente Cadastrado!</h1>
                }
            </Wrapper >
            <ModalClient view={isOpen} state={setIsOpen} listClients={clients} setList={setClients} />
        </>
    );
};

export default Page;