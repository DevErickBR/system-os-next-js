import React, { useReducer, useState } from "react";
import { WrapperInfo, WrapperList, WrapperModal } from "./styles";
import useDefDocs from "@/helpers/useDefDoc";
import * as ReactIcons from 'react-icons/fa6'
import handleSetValue from "@/helpers/useSetValueSelect";
import handleAddClient from "@/helpers/useActionAddClient";
import { usePreAddClient, usePreRemoveClient } from "@/helpers/actionAddListClients";
import { listReducer } from "@/reducers/listAddReducer";
import resetInputValue from "@/helpers/resetInputValue";
import { resetSelectValue } from "@/helpers/resetSelectValue";
import { useAddListClients } from "@/helpers/useAddListClients";


type Props = {
    view: boolean,
    state: React.Dispatch<React.SetStateAction<boolean>>,
    setList: React.Dispatch<React.SetStateAction<Client[]>>;
    listClients: Client[]
}

function ModalClient({ view, state, setList, listClients }: Props): JSX.Element {
    const [name, setName] = useState("")
    const [documento, setDocument] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [idDoc, setIdDoc] = useState("")

    const [addOrMore, setAddOrMore] = useState(false)
    const { defDocs } = useDefDocs()
    const [list, dispatch] = useReducer(listReducer, [])





    return (
        <>
            {view &&
                <WrapperModal>
                    <WrapperInfo>
                        <h1>Preencha os Dados do Cliente</h1>
                        <div className="check hidden">
                            <input type="checkbox" checked={addOrMore} name="more" onClick={() => setAddOrMore(!addOrMore)} />
                            <label htmlFor="more">Enviar Mais de um Cliente?</label>
                        </div>
                        <input
                            id="name"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <select id="typeDoc" value={idDoc} name="Tipo do Documento" onChange={(event) => handleSetValue(event, setIdDoc)}>
                            <option value="" hidden>Tipo de Documento</option>
                            {defDocs.map((item, index) => (<option key={index} value={item.idTipoDocumento} >{item.tipoDocumento}</option>))}
                        </select>

                        <input
                            id="document"
                            placeholder="Documento"
                            value={documento}
                            onChange={(e) => setDocument(e.target.value)}
                        />

                        <input
                            id="telefone"
                            type="text"
                            placeholder="Telefone"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />

                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {addOrMore ?

                            <button type="submit" onClick={() => { usePreAddClient({ dispatch, name, tel, idDoc, documento, email }); resetInputValue(setName, setDocument, setIdDoc, setTel, setEmail); resetSelectValue(setIdDoc) }}>
                                Adicionar<ReactIcons.FaPlus />
                            </button>

                            :

                            <button type="submit" onClick={() => { handleAddClient({ name, tel, idDoc, documento, email, setV: state, setList, list: listClients }); resetInputValue(setName, setDocument, setIdDoc, setTel, setEmail); resetSelectValue(setIdDoc) }}>
                                ENVIAR<ReactIcons.FaUserCheck />
                            </button>


                        }



                        <button className="back" onClick={() => { state(!view); setAddOrMore(false) }} ><ReactIcons.FaArrowLeftLong />VOLTAR</button>
                    </WrapperInfo>
                    {addOrMore &&
                        <WrapperList>
                            <div className="headerList">
                                <h1>Lista de Clientes</h1>
                            </div>
                            {list.length != 0 &&
                                <div className="bodyList">
                                    <ul>
                                        <div>
                                            {list.map((item, key) => <li key={key}>{`Nome: ${item.nomeCliente} | Tipo de Documento: ${item.idTipoDocumento ? defDocs[item.idTipoDocumento - 1].tipoDocumento : ``} | Documento: ${item.documentoCliente} | Telefone: ${item.telefoneCliente} | Email: ${item.emailCliente ? item.emailCliente : 'sem Email'}`}
                                                <ReactIcons.FaXmark onClick={() => usePreRemoveClient(dispatch, item.documentoCliente, item.nomeCliente)} /></li>)}
                                        </div>
                                    </ul>
                                    <button type="submit" onClick={() => { list ? useAddListClients({ list, setList, listClients }) : alert('Preencha a lista!'); state(false), setAddOrMore(false) }}>
                                        Enviar Lista<ReactIcons.FaUserCheck />
                                    </button>
                                </div>
                            }

                        </WrapperList>
                    }
                </WrapperModal >

            }
        </>
    )


};

export default ModalClient;