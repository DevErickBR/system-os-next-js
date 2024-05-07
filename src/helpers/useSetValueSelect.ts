import { ChangeEvent } from "react";

const handleSetValue = (event: ChangeEvent<HTMLSelectElement>, state: (a: string) => void) => {
    const selectValue = event.target.value;
    state(selectValue)
}

export default handleSetValue