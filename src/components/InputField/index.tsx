import { Input } from "@chakra-ui/input";
import { ChangeEventHandler } from "react";
import { colors } from "../../assets/styles/global";
import { InputFieldS } from "./styles";

interface InputFieldProps {
  label: string,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

export default function InputField({ label, placeholder, onChange }: InputFieldProps) {
  return (
    <InputFieldS>
      <label htmlFor="input">{label}</label>
      <Input className="input" onChange={onChange} variant='filled' width="100%" placeholder={placeholder} fontSize="0.75rem" focusBorderColor={colors.primaryYellow} bgColor={colors.primaryWhite} backgroundColor={colors.primaryWhite} padding="0.5rem 0.6rem" borderRadius="0.125rem" size='md' />
    </InputFieldS>
  );
}