import { Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BoxForm, Container } from '../assets/styles/register';
import InputField from '../components/InputField';

export default function Register() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Container>
        <BoxForm>
          <img src="logo-light.svg" alt="Logo MOL" />
          <p>Você está prestes a conhecer um sistema de gestão logística mais inovador do Brasil.</p>
          <InputField label="Nome" placeholder="Informe seu nome" onChange={(val) => {}} />
          <InputField  label="Sobrenome" placeholder="Informe seu sobrenome" onChange={(val) => {}}  />
        </BoxForm>
      </Container>
    </motion.main>
  )
}