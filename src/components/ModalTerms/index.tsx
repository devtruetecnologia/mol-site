import { Box, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Scrollbars } from 'react-custom-scrollbars';
import { ButtonModal } from "../../assets/styles/register";
import { Container } from "./styles";

import { termsData } from "../../pages/terms";
import { policyData } from "../../pages/policy";

export default function ModalTerms({ type, onClose, isOpen, formik }) {
  return (
    <Container>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size="xl"
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" fontWeight="700" flexDirection="row" justifyContent="center" alignItems="center" fontSize={24}>{type === 'terms' ? termsData.title : policyData.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <Scrollbars
              style={{ width: '100%', height: '27rem' }}
            >
              {type === 'terms' ? termsData.content : policyData.content}
            </Scrollbars>
          </ModalBody>
          <ModalFooter overflowX="hidden" display="flex" flexDirection="column" alignItems="flex-end">
            <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" >
              {type === 'terms'
                ? <Checkbox className="checkbox-terms" name="terms" onChange={formik.handleChange} isChecked={formik.values.terms}><p>Li e aceito os termos de uso</p></Checkbox>
                : <Checkbox className="checkbox-terms" name="privacy" onChange={formik.handleChange} isChecked={formik.values.privacy}><p>Li e aceito a política de privacidade</p></Checkbox>
              }
            </Box>
            <ButtonModal onClick={onClose}>Fechar</ButtonModal>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  )
}