import { InputProps, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { colors } from "../../assets/styles/global";
import { InputFieldS } from "./styles";
import { useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { ErrorMessage } from "formik";

interface InputFieldProps {
  label: string,
  name: string,
  mask?: string,
  messageError?: string,
}

export default function InputField(props: InputFieldProps & InputProps) {
  const { label, name, mask, messageError, ...rest } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <InputFieldS>
      <label htmlFor="input">{label}</label>
      {label.toLowerCase() === 'senha' ? 
      <InputGroup size='md'>
        <Input type={show ? 'text' : 'password'} Input className="input" label={label} name={name} {...rest} variant='filled' width="100%" fontSize="0.75rem" focusBorderColor={colors.primaryYellow} bgColor={colors.primaryWhite} backgroundColor={colors.primaryWhite} padding="0 0.6rem" borderRadius="0.125rem" size='md'  />
        <InputRightElement width='3.2rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <FiEye /> : <FiEyeOff />}
          </Button>
        </InputRightElement>
      </InputGroup> 
      : 
      <Input className="input" marginBottom={messageError != 'undefined' ? '0' : '0.915rem'} mask={mask ?? mask} label={label} name={name} {...rest} variant='filled' width="100%" fontSize="0.75rem" focusBorderColor={colors.primaryYellow} bgColor={colors.primaryWhite} backgroundColor={colors.primaryWhite} padding="0 0.6rem" borderRadius="0.125rem" size='md' />}
      <p>{messageError != 'undefined' ? messageError : ''}</p>
    </InputFieldS>
  );
}