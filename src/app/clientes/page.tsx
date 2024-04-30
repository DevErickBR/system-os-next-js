'use client'
import { useClientList } from "../helpers/useClientList";
import { useDefDocs } from "../helpers/useDefDoc";
import * as ReactIcons from 'react-icons/fa6'

import React from "react";
import { Wrapper } from "./styled";

const Page = (): React.ReactNode => {
    const { defDocs } = useDefDocs();
    const { clients } = useClientList();


    return (
        <Wrapper>
            {(clients.length != 0 && defDocs.length != 0) &&
                <table>
                    <thead>
                        <th><input type="search" placeholder="Nome..." /></th>
                        <th><input type="search" placeholder="Documento..." /></th>
                        <th><input type="text" placeholder="Telefone..." /></th>
                        <th>
                            <select aria-placeholder="Documento">
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
                                    <div id="delete"><ReactIcons.FaUserMinus /></div>
                                    <div id="edit"><ReactIcons.FaUserPen /></div>
                                    <div id="more"><ReactIcons.FaPlus /></div>
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

    );
};

export default Page;