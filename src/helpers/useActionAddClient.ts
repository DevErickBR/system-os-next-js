import Cliente from "@/helpers/classClient";
import useAddClient from "./useAddClient";


type Props = {
    name: string,
    tel: string,
    idDoc: string,
    documento: string,
    email: string,
    setV: React.Dispatch<React.SetStateAction<boolean>>,
    setList: React.Dispatch<React.SetStateAction<Client[]>>,
    list: Client[]
}


const handleAddClient = ({ name, tel, idDoc, documento, email, setV, setList, list }: Props) => {
    if (name && documento && tel) {
        let doc = parseInt(idDoc)
        let person: Client = new Cliente(null, name, tel, doc, documento, email);
        setList([...list, person])
        useAddClient(person)
        setV(false)
    } else (alert("Preecha todos os Campos"))

};

export default handleAddClient