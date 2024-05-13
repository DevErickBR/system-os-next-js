import { Dispatch, SetStateAction } from "react"

type SetState<T> = Dispatch<SetStateAction<T>>

export const resetInputValue = (...setStates: SetState<string>[]) => {
    setStates.forEach(setState => {
        setState(() => {
            return '';
        });
    });
};

export default resetInputValue