import * as styled from "./styled"
import Icon from '../icon-component'
import * as ReactIcons from 'react-icons/fa6'
import Link from "next/link";

function NavBarLeft(): JSX.Element {
    return (
        <styled.Wrapper>
            <Link href='/clientes'><Icon Svg={ReactIcons.FaUsers} desc="Clientes" /></Link>
            <Link href={'/'}><Icon Svg={ReactIcons.FaClipboard} desc="Ordens de Serviço" /></Link>
            <Link href={'/'}><Icon Svg={ReactIcons.FaLaptop} desc="Aparelhos" /></Link>
            <Link href={'/'}><Icon Svg={ReactIcons.FaWrench} desc="Garantias" /></Link>
            <Link href={'/'}><Icon Svg={ReactIcons.FaGears} desc="Definições" /></Link>
        </styled.Wrapper>
    );
};

export default NavBarLeft;