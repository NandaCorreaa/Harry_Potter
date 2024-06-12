import styled from "styled-components"
import {Link} from "react-router-dom"

const HeaderContainer = styled.header`
    background-color: #000;
    color: #FFF;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 12vh;
    width: 100%;

    img {
        width: 12vw;
    }

    @media (max-width: 768px){
        height: 20vh;
        flex-direction: column;

        img {
            width: 35vw;
        }
    }
`
const NavHeader = styled.nav`
    width: 60%;
    display: flex;
    align-items: center;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    a {
        color: #FFF;
        font-size: 20px;
    }

    @media (max-width: 768px){
        width: 100%;

        a{
            font-size: 14px;
        }
    }
`

export default function Header () {
    return(
        <HeaderContainer>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c72e2f68-1a1c-48a2-aa5f-edf7eaaf3548/d70dhd9-e64dc6e6-7639-400b-9ae3-90aec3d55acf.png/v1/fill/w_416,h_192/harry_potter_logo_png_by_alicegirl77_d70dhd9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyIiwicGF0aCI6IlwvZlwvYzcyZTJmNjgtMWExYy00OGEyLWFhNWYtZWRmN2VhYWYzNTQ4XC9kNzBkaGQ5LWU2NGRjNmU2LTc2MzktNDAwYi05YWUzLTkwYWVjM2Q1NWFjZi5wbmciLCJ3aWR0aCI6Ijw9NDE2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CooY7I3Zl_t_kZLfsJ4CqJEIbGxNeE-qoQqRYWLJAlc" alt="" />
            <NavHeader>
                <ul>
                    <li>
                        <Link to="/">INÍCIO</Link>
                    </li>
                    <li>
                        <Link to="/personagens">PERSONAGENS</Link>
                    </li>
                    <li>
                        <Link to="/feiticos">FEITIÇOS</Link>
                    </li>
                    <li>
                        <Link to="/sobre">SOBRE</Link>
                    </li>
                </ul>
            </NavHeader>
        </HeaderContainer>
    )
}