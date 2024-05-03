import React, { ChangeEvent, useState } from "react";
import { Wrapper, WrapperModal } from "./styles";

type Props = {
    view: boolean,
}

function ModalClient({ view }: Props): JSX.Element {
    const [name, setName] = useState("")
    const [document, setDocument] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            {view &&
                <WrapperModal>
                    <Wrapper>
                        <input id="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <input id="document" placeholder="Documento" value={document} onChange={(e) => setDocument(e.target.value)} />
                        <input id="telefone" type="text" placeholder="Telefone" value={tel} onChange={(e) => setTel(e.target.value)} />
                        <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Wrapper>
                </WrapperModal >
            }
        </>
    )


};

export default ModalClient;