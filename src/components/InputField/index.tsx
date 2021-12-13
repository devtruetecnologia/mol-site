import { InputProps } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { colors } from "../../assets/styles/global";
import { InputFieldS } from "./styles";

interface InputFieldProps {
  label: string,
  name: string,
}

export default function InputField(props: InputFieldProps & InputProps) {
  const { label, name, ...rest } = props
  
  return (
    <InputFieldS>
      <label htmlFor="input">{label}</label>
      <Input className="input" label={label} name={name} {...rest} variant='filled' width="100%" fontSize="0.75rem" focusBorderColor={colors.primaryYellow} bgColor={colors.primaryWhite} backgroundColor={colors.primaryWhite} padding="0 0.6rem" borderRadius="0.125rem" size='md' />
    </InputFieldS>
  );
}