import React, { ChangeEvent, useState } from "react";
import { Wrapper, WrapperModal } from "./styles";
import useDefDocs from "@/app/helpers/useDefDoc";
import * as ReactIcons from 'react-icons/fa6'
import useAddClient from "@/app/helpers/useAddClient";
import Cliente from "@/app/helpers/classClient";

type Props = {
    view: boolean,
    state: (a: boolean) => void,
}

function ModalClient({ view, state }: Props): JSX.Element {
    const [name, setName] = useState("")
    const [documento, setDocument] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [idDoc, setIdDoc] = useState("")


    const { defDocs } = useDefDocs()

    const handleAddClient = () => {
        let doc = parseInt(idDoc)
        let person = new Cliente(name, tel, doc, documento, email)
        useAddClient(person)
    };

    const handleSetValue = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectValue = event.target.value;
        setIdDoc(selectValue)
    }


    return (
        <>
            {view &&
                <WrapperModal>
                    <Wrapper>
                        <h1>Preencha os Dados do Cliente</h1>
                        <input id="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <select id="typeDoc" name="Tipo do Documento" onChange={handleSetValue}>
                            <option value="" selected hidden>Tipo de Documento</option>
                            {defDocs.map((item, index) => (<option key={index} value={item.idTipoDocumento} >{item.tipoDocumento}</option>))}
                        </select>
                        <input id="document" placeholder="Documento" value={documento} onChange={(e) => setDocument(e.target.value)} />
                        <input id="telefone" type="text" placeholder="Telefone" value={tel} onChange={(e) => setTel(e.target.value)} />
                        <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" onClick={() => handleAddClient()}>ENVIAR<ReactIcons.FaUserCheck /></button>
                        <button className="back" onClick={() => state(!view)}><ReactIcons.FaArrowLeftLong />VOLTAR</button>
                    </Wrapper>
                </WrapperModal >
            }
        </>
    )


};

export default ModalClient;