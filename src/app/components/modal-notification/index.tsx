import { WrapperNotification } from "./styled";

type Props = {
    msg: string;
    view: boolean;
}
const ModalNotification = ({ msg, view }: Props): JSX.Element => {
    return (
        <>
            {view &&
                <WrapperNotification>
                    {msg}
                </WrapperNotification>
            }
        </>
    )
}

export default ModalNotification;