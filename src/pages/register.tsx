import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { motion } from 'framer-motion';
import { BoxForm, Container } from '../assets/styles/register';
import { Button } from '../components/Header/styles';
import InputField from '../components/InputField';
import * as Yup from "yup";
import { CircularProgress, Input } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { colors } from '../assets/styles/global';

interface RegisterProps {
  type: 'PF' | 'PJ',
}

export default function Register() {
  const router = useRouter()
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  const {
    query: { type },
  } = router

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: handleFormSubmit,
  });

  function getInitialValues() {
    if (type === 'PF') {
      return {
        name: "",
        last_name: "",
        phone: "",
        email: ""
      };
    } else {
      return {
        cnpj: "",
        username: "",
        phone: "",
        email: ""
      }
    }
  }

  function getValidationSchema() {
    if (type === 'PF') {
      return Yup.object(
        {
          name: Yup.string().trim().required("Este campo é obrigatório."),
          last_name: Yup.string().trim().required("Este campo é obrigatório."),
          phone: Yup.number().required("Este campo é obrigatório."),
          email: Yup.string().email().required("Este campo é obrigatório."),
        },
      );
    } else {
      return Yup.object(
        {
          cnpj: Yup.string().trim().required("Este campo é obrigatório."),
          username: Yup.string().trim().required("Este campo é obrigatório."),
          phone: Yup.number().required("Este campo é obrigatório."),
          email: Yup.string().email().required("Este campo é obrigatório."),
        },
      );
    }
  }

  function handleFormSubmit(e) {
    console.log(type)
    console.log('submit');
    formik.handleReset(e);
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
            {
              type == 'PF' ? 
              (
                <form onSubmit={formik.handleSubmit}>
                  <InputField label="Nome" name="name" placeholder="Informe seu nome" isInvalid={Boolean(formik.errors.name)} onChange={formik.handleChange} value={formik.values.name} />
                  <InputField label="Sobrenome" name="last_name" placeholder="Informe seu sobrenome" isInvalid={Boolean(formik.errors.last_name)} onChange={formik.handleChange} value={formik.values.last_name} />
                  <InputField label="Telefone" name="phone" placeholder="Informe seu telefone" isInvalid={Boolean(formik.errors.phone)} onChange={formik.handleChange} value={formik.values.phone} />
                  <InputField label="E-mail" name="email" placeholder="Informe seu e-mail" isInvalid={Boolean(formik.errors.email)} onChange={formik.handleChange} value={formik.values.email} />
                  <div className="checkbox-group">
                    <Checkbox className="checkbox-terms" value='terms'><p>Li e aceito o <strong>termo de Uso</strong></p></Checkbox>
                    <Checkbox className="checkbox-terms" value='privacy'><p>Li e aceito a <strong>política de privacidade</strong></p></Checkbox>
                  </div>
                  <Button type='submit' extended>
                    {formik.isSubmitting ? <CircularProgress isIndeterminate={true} size="1.2rem" /> : 'Cadastrar' }
                  </Button>
                </form>
              )
              : 
              (
                <form onSubmit={formik.handleSubmit}>
                  <InputField label="CNPJ" name="cnpj" placeholder="Informe seu CNPJ" isInvalid={Boolean(formik.errors.cnpj)} onChange={formik.handleChange} value={formik.values.name} />
                  <InputField label="Nome de Usuário" name="username" placeholder="Informe seu nome de usuário" isInvalid={Boolean(formik.errors.username)} onChange={formik.handleChange} value={formik.values.last_name} />
                  <InputField label="Telefone" name="phone" placeholder="Informe seu telefone" isInvalid={Boolean(formik.errors.phone)} onChange={formik.handleChange} value={formik.values.phone} />
                  <InputField label="E-mail" name="email" placeholder="Informe seu e-mail" isInvalid={Boolean(formik.errors.email)} onChange={formik.handleChange} value={formik.values.email} />
                  <div className="checkbox-group">
                    <Checkbox className="checkbox-terms" value='terms'><p>Li e aceito o <strong>termo de Uso</strong></p></Checkbox>
                    <Checkbox className="checkbox-terms" value='privacy'><p>Li e aceito a <strong>política de privacidade</strong></p></Checkbox>
                  </div>
                  <Button type='submit' extended>
                    {formik.isSubmitting ? <CircularProgress isIndeterminate={true} size="1.2rem" /> : 'Cadastrar' }
                  </Button>
                </form>
              )
            }
        </BoxForm>
      </Container>
    </motion.main>
  )
}