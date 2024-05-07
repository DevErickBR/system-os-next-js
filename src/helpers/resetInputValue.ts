import { Dispatch, SetStateAction } from "react"

type SetState<T> = Dispatch<SetStateAction<string>>

export const resetInputValue = (...setStates: SetState<string>[]) => {
    setStates.forEach(setState => {
        setState(() => {
            return '';
        });
    });
};

export default resetInputValue