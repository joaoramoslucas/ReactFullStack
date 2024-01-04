import styled from 'styled-components';

import Logo from '../Logo/';
import IconesHeader from '../IconesHeader';
import OpcoesHeader from '../OpcoesHeader/';

const HeaderContainer = styled.header`
        display: flex;
        background-color: aliceblue;
        justify-content: space-around;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}
export default Header;