import * as styled from "./styled"
import Icon from '../icon-component'
import * as ReactIcons from 'react-icons/fa6'
import Link from "next/link";

function NavBarLeft(): JSX.Element {
    return (
        <styled.Wrapper>
            <Link href='/clientes'><Icon Svg={ReactIcons.FaUsers} desc="Clientes" /></Link>
            <Icon Svg={ReactIcons.FaClipboard} desc="Ordens de Serviço" />
            <Icon Svg={ReactIcons.FaLaptop} desc="Aparelhos" />
            <Icon Svg={ReactIcons.FaWrench} desc="Garantias" />
            <Icon Svg={ReactIcons.FaGears} desc="Definições" />
        </styled.Wrapper>
    );
};

export default NavBarLeft;