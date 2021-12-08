import { TextFooterBottom, TextFooterTop } from '../../assets/styles/texts';
import { Anchor, FooterS } from './styles';

export function Footer() {
    return(
      <FooterS>
        <div className="top">
          <img src='logo-dark.svg' alt="Mol" />
          <div className="social">
            <TextFooterTop>Siga a gente:</TextFooterTop>
            <img src="socials/insta.svg" />
            <img src="socials/face.svg" />
            <img src="socials/linkedin.svg" />
          </div>
        </div>
        <div className="separator"></div>
        <div className="bottom">
          <TextFooterBottom>2021 Mol | CNPL 09.176.597/0001-02</TextFooterBottom>
          <div>
            <Anchor>
              Termos
            </Anchor>
            <Anchor>
              Privacidade
            </Anchor>
          </div>
        </div>
      </FooterS>
    );
}