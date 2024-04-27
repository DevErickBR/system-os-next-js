import React from "react";
import { Wrapper } from "./styled";

type Props = {
    Svg: any;
    desc: string;
}

function Icon({ Svg, desc }: Props): JSX.Element {
    return (
        <Wrapper coment={desc}>
            <Svg />
        </Wrapper>
    );
}

export default Icon