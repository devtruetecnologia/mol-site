import { Checkbox } from '@chakra-ui/checkbox';
import { motion } from 'framer-motion';
import { BoxForm, BoxText, ButtonModal, Container } from '../assets/styles/register';
import { Button } from '../components/Header/styles';
import InputField from '../components/InputField';
import * as Yup from "yup";
import { Box, chakra, CircularProgress, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import InputMask from "react-input-mask";
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { AnyObject, Maybe } from 'yup/lib/types';
import { useCheckbox } from '@chakra-ui/react'
import { colors } from '../assets/styles/global';
import { FiCheck } from 'react-icons/fi';
import ModalTerms from '../components/ModalTerms';
import { useState } from 'react';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends Yup.BaseSchema<TType, TContext, TOut> {
    validCpf(errorMessage: string): StringSchema<TType, TContext>;
    validCnpj(errorMessage: string): StringSchema<TType, TContext>;
    existsEmail(errorMessage: string): StringSchema<TType, TContext>;
  }
}

interface RegisterAuthProps {
  data: {
    name?: string,
    last_name?: string,
    cpf?: string,
    cnpj?: string,
    username?: string,
    phone: string,
    email: string,
    password: string,
  },
  type: 'AGENT' | 'COMMERCIAL' | 'PROVIDER'
}

interface RegisterProps {
  type: 'AGENT' | 'COMMERCIAL' | 'PROVIDER',
}

type TypeModal = 'terms' | 'privacy';

export default function Register() {
  const toast = useToast()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ typeModal, setTypeModal ] = useState<TypeModal>('terms')

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  const {
    query: { type },
  } = router

  function backToHome(section) {
    router.push({ pathname: '/', query: { section: section } })
  }

  function goToAccess() {
    router.push('/access');
  }

  function handleOpenModal(type: TypeModal) {
    setTypeModal(type);
    onOpen();
  }

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: handleFormSubmit,
  });

  function getInitialValues() {
      return {
        name: "",
        last_name: "",
        username: "",
        cnpj: "",
        cpf: "",
        phone: "",
        email: "",
        password: ""
      };
  }

  async function checkCpf(cpf: string) {
    const q = query(collection(db, "users"), where("cpf", "==", cpf ? cpf : ""));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    
    if (querySnapshot.empty) {
      return true
    } else {
      return false
    }
  }

  async function checkCnpj(cnpj: string) {
    const q = query(collection(db, "users"), where("cnpj", "==", cnpj ? cnpj : ""));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    
    if (querySnapshot.empty) {
      return true
    } else {
      return false
    }
  }

  async function existsEmail(email: string) {
    const q = query(collection(db, "users"), where("email", "==", email ? email : ""));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    
    if (querySnapshot.empty) {
      return true
    } else {
      return false
    }
  }

  function getValidationSchema() {
    Yup.addMethod(Yup.string, "validCpf", function (errorMessage) {
      return this.test(`valid-cpf`, errorMessage, async function (value) {
        const { path, createError } = this;
    
        return (
          await checkCpf(value) ||
          createError({ path, message: errorMessage })
        );
      });
    });

    Yup.addMethod(Yup.string, "validCnpj", function (errorMessage) {
      return this.test(`valid-cnpj`, errorMessage, async function (value) {
        const { path, createError } = this;
    
        return (
          await checkCnpj(value) ||
          createError({ path, message: errorMessage })
        );
      });
    });

    Yup.addMethod(Yup.string, "existsEmail", function (errorMessage) {
      return this.test(`exists-email`, errorMessage, async function (value) {
        const { path, createError } = this;
    
        return (
          await existsEmail(value) ||
          createError({ path, message: errorMessage })
        );
      });
    });

    if (type !== 'PROVIDER') {
      return Yup.object(
        {
          name: Yup.string().trim().required("Este campo é obrigatório."),
          last_name: Yup.string().trim().required("Este campo é obrigatório."),
          cpf: Yup.string().trim().length(14, "É obrigatório ter 11 dígitos.").required("Este campo é obrigatório.").validCpf("CPF já registrado"),
          phone: Yup.string().length(15, "É obrigatório ter 11 dígitos.").required("Este campo é obrigatório."),
          email: Yup.string().email("E-mail inválido.").required("Este campo é obrigatório.").existsEmail("E-mail já registrado"),
          password: Yup.string().required("Este campo é obrigatório."),
          terms: Yup.string().required("Para prosseguir aceite os termos."),
          privacy: Yup.string().required("Para prosseguir aceite os termos."),
        },
      );
    } else {
      return Yup.object(
        {
          cnpj: Yup.string().length(18, "É obrigatório ter 14 dígitos.").trim().required("Este campo é obrigatório.").validCpf("CNPJ já registrado"),
          username: Yup.string().trim().required("Este campo é obrigatório."),
          phone: Yup.string().length(15, "É obrigatório ter 11 dígitos.").required("Este campo é obrigatório."),
          email: Yup.string().email("E-mail inválido.").required("Este campo é obrigatório.").existsEmail("E-mail já registrado"),
          password: Yup.string().required("Este campo é obrigatório."),
          terms: Yup.string().required("Para prosseguir aceite os termos."),
          privacy: Yup.string().required("Para prosseguir aceite os termos."),
        },
      );
    }
  }

  async function handleFormSubmit(e) {
    // PUXAR DOC COM CNPJ PARA VALIDAÇÃO SE EXISTE

    createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        
        console.log('PASSOU');

        if (type === 'AGENT') {
          await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            name: formik.values.name,
            last_name: formik.values.last_name,
            cpf: formik.values.cpf,
            status: 0,
            role: 'user',
            profile: 'agent',
            phone: formik.values.phone,
            email: formik.values.email,
            created_at: new Date(),
            updated_at: new Date(),
          });
        } else if (type === 'PROVIDER') {
          await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: formik.values.username,
            cnpj: formik.values.cnpj,
            status: 0,
            role: 'user',
            profile: 'providers',
            phone: formik.values.phone,
            email: formik.values.email,
            created_at: new Date(),
            updated_at: new Date(),
          });
        } else {
          await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            name: formik.values.name,
            last_name: formik.values.last_name,
            cpf: formik.values.cpf,
            status: 0,
            role: 'user',
            profile: 'commercial',
            phone: formik.values.phone,
            email: formik.values.email,
            created_at: new Date(),
            updated_at: new Date(),
          });
        }

        toast({
          description: 'Cadastro efetuado!',
          status: 'success',
          variant: 'solid',
        })
        
        formik.handleReset(e);
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        toast({
          title: 'Erro',
          description: errorCode == 'auth/email-already-in-use' ? 'Email já cadastrado!' : errorCode,
          status: 'error',
          variant: 'solid',
          isClosable: true,
        })

        formik.handleReset(e);
      });
  }

  function getType() {
    if (type === 'PROVIDER') {
      return 'Embarcador'
    } else if (type === 'AGENT') {
      return 'Agente'
    } else {
      return 'Operador Comercial'
    }
  }

  const CustomCheckbox = (props) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

    return (
      <chakra.label
        display='flex'
        flexDirection='row'
        alignItems='center'
        gridColumnGap={2}
        rounded='lg'
        cursor='pointer'
        {...htmlProps}
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems='center'
          justifyContent='center'
          border='2px solid'
          borderColor={state.isChecked ? 'transparent' : colors.primaryWhite}
          borderRadius='0.15rem'
          transition='400ms'
          backgroundColor={state.isChecked ? colors.primaryYellow : 'transparent'}
          w='1.2rem'
          h='1.1rem'
          {...getCheckboxProps()}
        >
          {state.isChecked && <FiCheck size="0.95rem" />}
        </Flex>
        <Text {...getLabelProps()}>{props.children}</Text>
      </chakra.label>
    )
  }

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Container typeRegister={type}>
        <BoxText>
          <h2>Seja um<br/>{getType().toLowerCase()}</h2>
          <h4>Receba pedidos de recolhimento e entrega de cargas em todo o Brasil</h4>
          <p>Não sou um embarcador. <strong onClick={() => backToHome('registers')}>Mudar o perfil</strong></p>
        </BoxText>
        <BoxForm>
          <h3>Criar seu cadastro como {getType().toLowerCase()}.</h3>
          {
            type !== 'PROVIDER' ? 
            (
              <form onSubmit={formik.handleSubmit}>
                <div className="fields">
                  <InputField label="Nome" messageError={`${formik.errors.name}`} name="name" placeholder="Informe seu nome" isInvalid={Boolean(formik.errors.name)} onChange={formik.handleChange} value={formik.values.name} />
                  <InputField label="Sobrenome" messageError={`${formik.errors.last_name}`} name="last_name" placeholder="Informe seu sobrenome" isInvalid={Boolean(formik.errors.last_name)} onChange={formik.handleChange} value={formik.values.last_name} />
                  <InputField label="CPF" mask="***.***.***-**" messageError={`${formik.errors.cpf}`} name="cpf" placeholder="Informe seu CPF" isInvalid={Boolean(formik.errors.cpf)} onChange={formik.handleChange} value={formik.values.cpf} as={InputMask} />
                  <InputField label="Telefone" mask="(**) *****-****" messageError={`${formik.errors.phone}`} name="phone" placeholder="Informe seu telefone" isInvalid={Boolean(formik.errors.phone)} onChange={formik.handleChange} value={formik.values.phone} as={InputMask} />
                  <InputField label="E-mail" messageError={`${formik.errors.email}`} name="email" placeholder="Informe seu e-mail" isInvalid={Boolean(formik.errors.email)} onChange={formik.handleChange} value={formik.values.email} />
                  <InputField label="Senha" messageError={`${formik.errors.password}`} name="password" placeholder="Informe sua senha" isInvalid={Boolean(formik.errors.password)} onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <div className="checkbox-group">
                  <Checkbox isDisabled className="checkbox-terms" name="terms" isInvalid={Boolean(formik.errors.terms)} value={formik.values.terms}><p>Li e aceito o <strong>termo de Uso</strong></p></Checkbox>
                  <Checkbox isDisabled className="checkbox-terms" name="privacy" isInvalid={Boolean(formik.errors.privacy)} value={formik.values.privacy}><p>Li e aceito a <strong>política de privacidade</strong></p></Checkbox>
                  <p className="error">{formik.errors.terms || formik.errors.privacy}</p>
                </div>
                <Button type='submit' extended>
                  {formik.isSubmitting ? <CircularProgress isIndeterminate={true} size="1.2rem" /> : 'Cadastrar' }
                </Button>
              </form>
            )
            : 
            (
              <form onSubmit={formik.handleSubmit}>
                <div className="fields">
                  <InputField label="Nome de Usuário" messageError={`${formik.errors.username}`} name="username" placeholder="Informe seu nome de usuário" isInvalid={Boolean(formik.errors.username)} onChange={formik.handleChange} value={formik.values.username} />
                  <InputField label="CNPJ" mask="**.***.***/****-**" as={InputMask} messageError={`${formik.errors.cnpj}`} name="cnpj" placeholder="Informe seu CNPJ" isInvalid={Boolean(formik.errors.cnpj)} onChange={formik.handleChange} value={formik.values.cnpj} />
                  <InputField label="Telefone" mask="(**) *****-****" as={InputMask} messageError={`${formik.errors.phone}`} name="phone" placeholder="Informe seu telefone" isInvalid={Boolean(formik.errors.phone)} onChange={formik.handleChange} value={formik.values.phone} />
                  <InputField label="E-mail" name="email" messageError={`${formik.errors.email}`} placeholder="Informe seu e-mail" isInvalid={Boolean(formik.errors.email)} onChange={formik.handleChange} value={formik.values.email} />
                  <InputField label="Senha" messageError={`${formik.errors.password}`} name="password" placeholder="Informe sua senha" isInvalid={Boolean(formik.errors.password)} onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <div className="checkbox-group">
                  {/* <CustomCheckbox className="checkbox-terms" name="privacy" isInvalid={Boolean(formik.errors.terms)} value={formik.values.privacy}><p>Li e aceito o <strong onClick={() => {onOpen()}}>termo de Uso</strong></p></CustomCheckbox> */}
                  <div className="checkbox">
                    <Checkbox className="checkbox-terms" name="terms" isInvalid={Boolean(formik.errors.terms)} onChange={formik.handleChange} isChecked={formik.values.terms} />
                    <p>Li e aceito os <strong onClick={() => {handleOpenModal('terms')}}>termos de uso</strong></p>
                  </div>
                  <div className="checkbox">
                    <Checkbox className="checkbox-terms" name="privacy" isInvalid={Boolean(formik.errors.privacy)} onChange={formik.handleChange}  isChecked={formik.values.privacy} />
                    <p>Li e aceito a <strong onClick={() => {handleOpenModal('privacy')}}>política de privacidade</strong></p>
                  </div>
                  <p className="error">{formik.errors.terms || formik.errors.privacy}</p>
                </div>
                <Button type='submit' extended>
                  {formik.isSubmitting ? <CircularProgress isIndeterminate={true} size="1.2rem" /> : 'Cadastrar' }
                </Button>
                <p>Já sou cadastrado. <strong onClick={goToAccess}>Entrar</strong></p>
              </form>
            )
          }
        </BoxForm>
        <ModalTerms type={typeModal} onClose={onClose} isOpen={isOpen} formik={formik} />
      </Container>
    </motion.main>
  )
}