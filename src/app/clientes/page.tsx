'use client'
import { useClientList } from "../helpers/useClientList";
import { useDefDocs } from "../helpers/useDefDoc";

import React from "react";

const Page = (): React.ReactNode => {
    const { defDocs } = useDefDocs();
    const { clients } = useClientList();


    return (
        <div>
            {(clients.length != 0 && defDocs.length != 0) &&
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Documento</th>
                            <th>telefoneCliente</th>
                            <th>Tipo de Documento</th>
                        </tr>
                        <tr>
                            <th><input type="search" placeholder="Nome" /></th>
                            <th><input type="search" placeholder="Nome" /></th>
                            <th><input type="search" placeholder="Nome" /></th>
                            <th><select>{defDocs.map((item, index) => (<option key={index} value={item.idTipoDocumento} >{item.tipoDocumento}</option>))}</select></th>
                        </tr>
                    </thead>
                    <tbody >
                        {clients.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nomeCliente}</td>
                                <td>{item.documentoCliente}</td>
                                <td>{item.telefoneCliente}</td>
                                <td>{defDocs[item.idTipoDocumento - 1].tipoDocumento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {
                clients.length == 0 &&
                <h1>Nenhum Cliente Cadastrado!</h1>
            }
        </div >

    );
};

export default Page;