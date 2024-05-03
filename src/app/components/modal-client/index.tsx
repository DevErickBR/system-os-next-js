import React, { SetStateAction, useEffect, useState } from "react";
import { Wrapper, WrapperModal } from "./styles";
import useDefDocs from "@/app/helpers/useDefDoc";
import * as ReactIcons from 'react-icons/fa6'

type Props = {
    view: boolean,
    state: (a: boolean) => void,
}

function ModalClient({ view, state }: Props): JSX.Element {
    const [name, setName] = useState("")
    const [document, setDocument] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")


    const { defDocs } = useDefDocs()


    return (
        <>
            {view &&
                <WrapperModal>
                    <Wrapper>
                        <h1>Preencha os Dados do Cliente</h1>
                        <input id="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <select id="typeDoc">
                            <option selected hidden value="">Tipo do Documento</option>
                            {defDocs.map((item, index) => (<option key={index} value={item.idTipoDocumento} >{item.tipoDocumento}</option>))}
                        </select>
                        <input id="document" placeholder="Documento" value={document} onChange={(e) => setDocument(e.target.value)} />
                        <input id="telefone" type="text" placeholder="Telefone" value={tel} onChange={(e) => setTel(e.target.value)} />
                        <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit">ENVIAR<ReactIcons.FaUserCheck /></button>
                        <button className="back" onClick={() => state(false)}><ReactIcons.FaArrowLeftLong />VOLTAR</button>
                    </Wrapper>
                </WrapperModal >
            }
        </>
    )


};

export default ModalClient;