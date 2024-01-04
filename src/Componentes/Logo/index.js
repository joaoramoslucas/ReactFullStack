import styled from 'styled-components'

import logo from '../../Imagens/logo.svg'

const LogoHeader = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    padding-left: 15px;
    margin-right: 15px;
`
function Logo() {
    return (
        <LogoHeader>
            <LogoImage
                src={logo}
                alt='Logo'
            />
            <p><strong>Travel</strong>Books</p>
        </LogoHeader>
    )
}

export default Logo