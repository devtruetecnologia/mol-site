import { TextFooterBottom, TextFooterTop } from '../../assets/styles/texts';
import { Anchor, FooterS } from './styles';

export function Footer() {
    return(
      <FooterS>
        <div className="top">
          <img src='logo-dark.svg' alt="Mol" />
          <div className="social">
            <TextFooterTop>Siga a gente:</TextFooterTop>
            <object data="socials/insta.svg" type="image/svg+xml" />
            <object data="socials/face.svg" type="image/svg+xml" />
            <object data="socials/linkedin.svg" type="image/svg+xml" />
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