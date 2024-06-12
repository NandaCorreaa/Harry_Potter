import styled from "styled-components"
import fundoHP from "../assets/fundoHP.jpg"
import fundo1section from "../assets/fundo1section.jpg"
import fundo2section from "../assets/fundo2section.jpg"
import fundo3section from "../assets/fundo3section.jpg"
import fundo4section from "../assets/fundo4section.jpg"


const SobreContainer = styled.section`
    background-image: url(${fundoHP});
`
const SobreSections = styled.div`
    height: 60vh;
    color: #FFF;
    display: flex;

    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    h2 {
        font-size: 40px;
        color: #ffc260;
    }

    p {
        width: 85%;
        font-size: 22px;
        line-height: 34px;
    }

    .img1 {
        background-image: url(${fundo1section});
        background-size: cover;
        background-position: top;
    }
    .img2 {
        background-image: url(${fundo2section});
        background-size: cover;
        background-position: top;
    }
    .img3 {
        background-image: url(${fundo3section});
        background-size: cover;
        background-position: top;
    }
    .img4 {
        background-image: url(${fundo4section});
        background-size: cover;
        background-position: top;
    }
`

export default function Sobre (){
    return(
        <SobreContainer>
            <SobreSections>
                <div>
                    <h2>Harry Potter: O Menino que Sobreviveu</h2>
                    <p>Harry Potter é uma série de livros de fantasia escrita pela autora britânica J.K. Rowling. A série narra as aventuras de um jovem bruxo, Harry Potter, e seus amigos Hermione Granger e Ron Weasley, que são estudantes na Escola de Magia e Bruxaria de Hogwarts. A história se desenrola em um mundo mágico paralelo ao nosso, onde bruxos e bruxas vivem escondidos da sociedade não mágica, os chamados "trouxas".</p>
                </div>
                <div className="img1"></div>
            </SobreSections>
            <SobreSections>
                <div className="img2"></div>
                <div><p>A história começa com o nascimento de Harry e a tragédia que se abate sobre sua família. Seus pais são assassinados pelo bruxo das trevas, Lord Voldemort, que tenta matar também o bebê Harry. No entanto, o feitiço de Voldemort se volta contra ele mesmo, deixando Harry com apenas uma cicatriz em forma de raio na testa e o apelido de "O Menino que Sobreviveu".</p></div>
            </SobreSections>
            <SobreSections>
                <div>
                    <p>Criado pelos tios trouxas, Harry só descobre sua verdadeira identidade aos 11 anos, quando recebe uma carta de admissão para Hogwarts. Lá, ele descobre que é famoso no mundo mágico por ter sobrevivido ao ataque de Voldemort e que sua cicatriz é uma marca de sua ligação com o bruxo das trevas.</p>
                </div>
                <div className="img3"></div>
            </SobreSections>
            <SobreSections>
                <div className="img4"></div>
                <div><p>Ao longo dos sete livros da série, Harry e seus amigos enfrentam uma série de desafios e perigos, enquanto tentam desvendar os mistérios do passado de Harry e encontrar uma forma de derrotar Voldemort de uma vez por todas. A saga de Harry Potter é uma história de coragem, amizade e amor, que cativou milhões de leitores em todo o mundo e se tornou um fenômeno cultural.</p></div>
            </SobreSections>
        </SobreContainer>
    )
}