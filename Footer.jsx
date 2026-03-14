import styled from "styled-components";
import mdiTwitter from "./src/assets/img/mdi_twitter.svg"
import mdiYoutube from "./src/assets/img/mdi_youtube.svg"
import riInstagram from "./src/assets/img/ri_instagram-fill.svg"

export const FooterContainer = styled.footer`
    background-color: #171515;
    color: #fff;
    padding: 40px;
    text-align:center;
    border-top: 1px solid #333;
    
    p{
        margin-bottom: 20px;
        font-size: 1rem;
        color: #ffff;
    }

    .social-icons{
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .social-icons img{
        width: 30px;
        height: 30px;
        filter: brightness(0) invert(1);
        cursor: pointer;
        transform: transform 0.3s;
    }

    .social-icons img :hover{
        transform: scale(1.2);
    }
`

function Footer () {
    return (
        <FooterContainer>
            <p>Nos sigam nas redes sociais</p>
            <div className="social-icons">
                <img src={mdiTwitter} alt="Twitter" />
                <img src={riInstagram} alt="Instagram" />
                <img src={mdiYoutube} alt="Youtube" />
            </div>
            <p style={{marginTop: '20px', fontSize: '0.8rem'}}>@2026 SENAIFLIX - Todos os direitos reservados</p>
        </FooterContainer>

    )
}

export default Footer