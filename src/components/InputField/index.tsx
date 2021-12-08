import { Input } from "@chakra-ui/input";
import { colors } from "../../assets/styles/global";
import { InputFieldS } from "./styles";

export default function InputField() {
  return (
    <InputFieldS>
      <label htmlFor="input">Nome</label>
      <Input className="input" variant='filled' width="100%" placeholder='Informe seu nome' fontSize="0.75rem" focusBorderColor={colors.primaryYellow} bgColor={colors.primaryWhite} backgroundColor={colors.primaryWhite} padding="0.5rem 0.6rem" borderRadius="0.125rem" size='md' />
    </InputFieldS>
  );
}