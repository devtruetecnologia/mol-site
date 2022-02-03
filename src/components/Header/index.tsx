import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import { Anchor, HeaderS, Button, MenuMobile } from './styles';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Image, useDisclosure } from '@chakra-ui/react';
import { colors } from '../../assets/styles/global';

export function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function goToHome() {
    router.push('/')
  }

  function goToAccess() {
    router.push('/access')
  }

  function handleOpen() {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }

  return(
    <>
      <HeaderS isOpen={isOpen}>
        <img src='logo-light.svg' alt="Mol" />

        <nav>
          <Anchor to="/" onClick={goToHome} spy={true} smooth={true} duration={500}>Início</Anchor>
          <Anchor to="meet-mol" spy={true} smooth={true} duration={500}>O MOL</Anchor>
          <Anchor to="app" spy={true} smooth={true} duration={500}>Aplicativo</Anchor>
          <Anchor to="how-works" spy={true} smooth={true} duration={500}>Como funciona</Anchor>
          <Anchor to="advantages" spy={true} smooth={true} duration={500}>Vantagens</Anchor>
        </nav>

        <div className="buttons">
          <Link to="register" spy={true} smooth={true} duration={500}>
            <Button className="register" outlined>
              Cadastrar-se
            </Button>
          </Link>
          <Button className="access" onClick={goToAccess}>
            Acessar
          </Button>
        </div>
        
        <div className="menu-mobile">
          <MenuMobile onClick={handleOpen}>
            <FiMenu className='icon' />
          </MenuMobile>
        </div>
      </HeaderS>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent zIndex={99999} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" bgColor={colors.primaryBlue}>
          <DrawerHeader className='drawer-header' display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" position="relative" width="34rem">
            <Image width="70%" marginTop="3rem" src="logo-light.svg" alt="" />
            <Box position="absolute" top="2rem" right={0}>
              <MenuMobile onClick={handleOpen}>
                <FiX className='icon' />
              </MenuMobile>
            </Box>
          </DrawerHeader>
          <DrawerBody className='drawer-body' width="34rem"  display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
            <Box padding="1rem 0 3rem 0" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Anchor to="banner" onClick={goToHome} activeClass="active-anchor" spy={true} smooth={true} duration={500}>Início</Anchor>
              <Anchor to="meet-mol" spy={true} activeClass="active-anchor" smooth={true} duration={500}>O MOL</Anchor>
              <Anchor to="app" spy={true} activeClass="active-anchor" smooth={true} duration={500}>Aplicativo</Anchor>
              <Anchor to="how-works" spy={true} activeClass="active-anchor" smooth={true} duration={500}>Como funciona</Anchor>
              <Anchor to="advantages" spy={true} activeClass="active-anchor" smooth={true} duration={500}>Vantagens</Anchor>
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="space-evenly" width="100%">
              <Link to="register" spy={true} smooth={true} duration={500}>
                <Button outlined>
                  Cadastrar-se
                </Button>
              </Link>
              <Button onClick={goToAccess}>
                Acessar
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}