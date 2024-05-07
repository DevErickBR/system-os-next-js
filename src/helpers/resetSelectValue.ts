import { Dispatch, SetStateAction } from "react"

type SetState<T> = Dispatch<SetStateAction<T>>

export const resetSelectValue = (...setStates: SetState<string>[]) => {
    setStates.forEach(setState => {
        setState(() => {
            return '';
        });
    });
}