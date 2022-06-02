import { useRouter } from 'next/router';
import { TextFooterBottom, TextFooterTop } from '../../assets/styles/texts';
import { Anchor, FooterS } from './styles';

export function Footer() {
  const router = useRouter();

  function goToTerms() {
    router.push('/terms');
  }

  function goToPolicy() {
    router.push('/policy')
  }
  return (
    <FooterS>
      <div className="top">
        <img src='logo-dark.svg' alt="Mol" />
        <div className="social">
          <TextFooterTop>Siga a gente:</TextFooterTop>
          <div className="icons">
            <img src="socials/insta.svg" />
            <img src="socials/face.svg" />
            <img src="socials/linkedin.svg" />
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="bottom">
        <div>
          <Anchor>
            39.783.649/0001-61
          </Anchor>
          <Anchor onClick={goToTerms}>
            Termos
          </Anchor>
          <Anchor onClick={goToPolicy}>
            Privacidade
          </Anchor>
        </div>
      </div>
    </FooterS>
  );
}
