import React, { Dispatch, SetStateAction, useEffect, useReducer, useState } from "react";
import { WrapperInfo, WrapperModal } from "./styles";
import useDefDocs from "@/helpers/useDefDoc";
import * as ReactIcons from 'react-icons/fa6'
import handleSetValue from "@/helpers/useSetValueSelect";



type Props = {
    view: boolean,
    state: React.Dispatch<React.SetStateAction<boolean>>,
    cliente: Client;
}

function ModalEditClient({ view, state, cliente }: Props): JSX.Element {
    const [name, setName] = useState('')
    const [documento, setDocument] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [idDoc, setIdDoc] = useState('')
    const { defDocs } = useDefDocs()

    useEffect(() => {
        if (cliente != undefined) {
            console.log(cliente)
            setName(cliente.nomeCliente)
            setDocument(cliente.documentoCliente)
            setTel(cliente.telefoneCliente)
            setEmail(cliente.emailCliente as string)
            setIdDoc(cliente.idTipoDocumento.toString())
        }
    }, [cliente])



    return (
        <>
            {view &&
                <WrapperModal>
                    <WrapperInfo>
                        <h1>Preencha os Dados do Cliente</h1>
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

                        <button type="submit" onClick={() => { }}>
                            Salvar<ReactIcons.FaUserCheck />
                        </button>



                        <button className="back" onClick={() => { state(!view) }} ><ReactIcons.FaArrowLeftLong />VOLTAR</button>
                    </WrapperInfo>
                </WrapperModal >

            }
        </>
    )


};

export default ModalEditClient;