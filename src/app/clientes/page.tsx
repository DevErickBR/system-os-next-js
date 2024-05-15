'use client'
import { useClientList } from "../../helpers/useClientList";
import { useDefDocs } from "../../helpers/useDefDoc";
import { useDeleteClient } from "../../helpers/useDeleteClient";
import * as ReactIcons from 'react-icons/fa6'

import React, { useState } from "react";
import { Wrapper, ButtonAction, WrapperTitle } from "./styled";
import ModalClient from "../components/modal-client";
import usePaginationData from "@/helpers/usePaginationData";
import Pagination from "../components/Pagination";
import useFilterList from "@/helpers/useFilterList";
import handleSetValue from "@/helpers/useSetValueSelect";
import ModalEditClient from "../components/modal-edit-client";
import ModalNotification from "../components/modal-notification";


type Props = {
    searchParams?: {
        page?: string,
        limit?: string
    }
}

const Page = ({ searchParams }: Props): JSX.Element => {
    const page = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.limit) || 10;
    const [name, setName] = useState("")
    const [documento, setDocumento] = useState("")
    const [idDoc, setIdDoc] = useState("")
    const [tel, setTel] = useState("")
    const { defDocs } = useDefDocs();
    const { clients, setClients } = useClientList();
    const [isOpen, setIsOpen] = useState(false)
    const filterList = useFilterList({ list: clients, nome: name, documento, tel, idDocumento: idDoc })
    const { Data, metaData } = usePaginationData({ list: clients, limit, page, filterList })
    const [showEdit, setShowEdit] = useState(false)
    const [currentClient, setCurrentClient] = useState<Client>(Data[0])



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
                            <tr>
                                <th><input type="search" placeholder="Nome..." value={name} onChange={(e) => { setName(e.target.value) }} /></th>
                                <th><input type="search" placeholder="Documento..." value={documento} onChange={(e) => { setDocumento(e.target.value) }} /></th>
                                <th className="hidden"><input type="text" placeholder="Telefone..." value={tel} onChange={(e) => { setTel(e.target.value) }} /></th>
                                <th>
                                    <select value={idDoc} onChange={(event) => handleSetValue(event, setIdDoc)}>
                                        <option selected hidden value="">Tipo do Documento</option>
                                        <option value={""}>Todos</option>
                                        {defDocs.map((item, index) => (<option key={index} value={item.idTipoDocumento} >{item.tipoDocumento}</option>))}
                                    </select>

                                </th>
                                <th >Ações</th>
                            </tr>
                        </thead>
                        <tbody >
                            {Data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nomeCliente}</td>
                                    <td>{item.documentoCliente}</td>
                                    <td className="hidden">{item.telefoneCliente}</td>
                                    <td>{defDocs[item.idTipoDocumento - 1].tipoDocumento}</td>
                                    <td className="actions">
                                        <div className="WrapperActions">
                                            <ButtonAction id="delete" onClick={() => { useDeleteClient(item, clients, setClients) }}>
                                                <ReactIcons.FaUserMinus />
                                                <label htmlFor="delete">Excluir</label>
                                            </ButtonAction>
                                            <ButtonAction id="edit" onClick={() => { setShowEdit(true); setCurrentClient(item); }}>
                                                <ReactIcons.FaUserPen />
                                                <label htmlFor="edit">Editar</label>
                                            </ButtonAction>
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
            <ModalEditClient view={showEdit} state={setShowEdit} cliente={currentClient} />
            <Pagination page={page} limit={limit} totalItens={metaData.pagination.totalItens} />
            <ModalNotification msg="ola mundo" view={true} />

        </>
    );
};

export default Page;