import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
    setState: Dispatch<SetStateAction<boolean>>,
    msg: string;
}

const setViewNotification = ({ setState, msg }: Props) => {
    setState(true)
    setInterval(() => {
        setState(false)
    }, 2000)

}

export default setViewNotification