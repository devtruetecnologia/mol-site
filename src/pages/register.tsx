import { Checkbox } from '@chakra-ui/checkbox';
import { motion } from 'framer-motion';
import { BoxForm, Container } from '../assets/styles/register';
import { Button } from '../components/Header/styles';
import InputField from '../components/InputField';
import * as Yup from "yup";
import { CircularProgress, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { useFormik } from 'formik';
import InputMask from "react-input-mask";
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

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

export default function Register() {
  const toast = useToast()
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
              type !== 'PROVIDER' ? 
              (
                <form onSubmit={formik.handleSubmit}>
                  <InputField label="Nome" messageError={`${formik.errors.name}`} name="name" placeholder="Informe seu nome" isInvalid={Boolean(formik.errors.name)} onChange={formik.handleChange} value={formik.values.name} />
                  <InputField label="Sobrenome" messageError={`${formik.errors.last_name}`} name="last_name" placeholder="Informe seu sobrenome" isInvalid={Boolean(formik.errors.last_name)} onChange={formik.handleChange} value={formik.values.last_name} />
                  <InputField label="CPF" mask="***.***.***-**" messageError={`${formik.errors.cpf}`} name="cpf" placeholder="Informe seu CPF" isInvalid={Boolean(formik.errors.cpf)} onChange={formik.handleChange} value={formik.values.cpf} as={InputMask} />
                  <InputField label="Telefone" mask="(**) *****-****" messageError={`${formik.errors.phone}`} name="phone" placeholder="Informe seu telefone" isInvalid={Boolean(formik.errors.phone)} onChange={formik.handleChange} value={formik.values.phone} as={InputMask} />
                  <InputField label="E-mail" messageError={`${formik.errors.email}`} name="email" placeholder="Informe seu e-mail" isInvalid={Boolean(formik.errors.email)} onChange={formik.handleChange} value={formik.values.email} />
                  <InputField label="Senha" messageError={`${formik.errors.password}`} name="password" placeholder="Informe sua senha" isInvalid={Boolean(formik.errors.password)} onChange={formik.handleChange} value={formik.values.password} />
                  <div className="checkbox-group">
                    <Checkbox className="checkbox-terms" name="terms" isInvalid={Boolean(formik.errors.terms)} onChange={formik.handleChange} value={formik.values.terms}><p>Li e aceito o <strong>termo de Uso</strong></p></Checkbox>
                    <Checkbox className="checkbox-terms" name="privacy" isInvalid={Boolean(formik.errors.privacy)} onChange={formik.handleChange} value={formik.values.privacy}><p>Li e aceito a <strong>política de privacidade</strong></p></Checkbox>
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
                  <InputField label="Nome de Usuário" messageError={`${formik.errors.username}`} name="username" placeholder="Informe seu nome de usuário" isInvalid={Boolean(formik.errors.username)} onChange={formik.handleChange} value={formik.values.username} />
                  <InputField label="CNPJ" mask="**.***.***/****-**" as={InputMask} messageError={`${formik.errors.cnpj}`} name="cnpj" placeholder="Informe seu CNPJ" isInvalid={Boolean(formik.errors.cnpj)} onChange={formik.handleChange} value={formik.values.cnpj} />
                  <InputField label="Telefone" mask="(**) *****-****" as={InputMask} messageError={`${formik.errors.phone}`} name="phone" placeholder="Informe seu telefone" isInvalid={Boolean(formik.errors.phone)} onChange={formik.handleChange} value={formik.values.phone} />
                  <InputField label="E-mail" name="email" messageError={`${formik.errors.email}`} placeholder="Informe seu e-mail" isInvalid={Boolean(formik.errors.email)} onChange={formik.handleChange} value={formik.values.email} />
                  <InputField label="Senha" messageError={`${formik.errors.password}`} name="password" placeholder="Informe sua senha" isInvalid={Boolean(formik.errors.password)} onChange={formik.handleChange} value={formik.values.password} />
                  <div className="checkbox-group">
                    <Checkbox className="checkbox-terms" isInvalid={Boolean(formik.errors.terms)} onChange={formik.handleChange} value={formik.values.terms}><p>Li e aceito o <strong>termo de Uso</strong></p></Checkbox>
                    <Checkbox className="checkbox-terms" isInvalid={Boolean(formik.errors.privacy)} onChange={formik.handleChange} value={formik.values.privacy}><p>Li e aceito a <strong>política de privacidade</strong></p></Checkbox>
                    <p className="error">{formik.errors.terms || formik.errors.privacy}</p>
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