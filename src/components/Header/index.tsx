import { useRouter } from 'next/router';
import { Anchor, HeaderS, Button } from './styles';

export function Header() {
  const router = useRouter();

  function goToHome() {
    router.push('/')
  }

  function goToRegister() {
    router.push('/register')
  }

  function goToAccess() {
    router.push('/access')
  }

  return(
    <HeaderS>
      <img src='logo-light.svg' alt="Mol" />

      <nav>
          <Anchor to="/" onClick={goToHome} spy={true} smooth={true} duration={500}>Início</Anchor>
          <Anchor to="meet-mol" spy={true} smooth={true} duration={500}>O MOL</Anchor>
          <Anchor to="app" spy={true} smooth={true} duration={500}>Aplicativo</Anchor>
          <Anchor to="how-works" spy={true} smooth={true} duration={500}>Como funciona</Anchor>
          <Anchor to="advantages" spy={true} smooth={true} duration={500}>Vantagens</Anchor>
      </nav>

      <div className="buttons">
        <Button onClick={goToRegister} outlined>
          Cadastrar-se
        </Button>
        <Button onClick={goToAccess}>
          Acessar
        </Button>
      </div>
    </HeaderS>
  );
}