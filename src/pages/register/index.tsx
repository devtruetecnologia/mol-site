import { Input } from '@chakra-ui/react';
import { colors } from '../../assets/styles/global';
import { BoxForm, Container } from './styles';

export default function Register() {
  return (
    <>
      <Container>
        <BoxForm>
          <img src="logo-light.svg" alt="Logo MOL" />
          <Input fontSize="0.75rem" focusBorderColor='red.300' padding="0.6rem 1rem" borderRadius="0.063rem" placeholder='Small Size' size='md' />
        </BoxForm>
      </Container>
    </>
  )
}