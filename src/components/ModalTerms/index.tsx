import { Box, Checkbox, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Scrollbars } from 'react-custom-scrollbars';
import { ButtonModal } from "../../assets/styles/register";
import { Container } from "./styles";

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
          <ModalHeader display="flex" fontWeight="700" flexDirection="row" justifyContent="center" alignItems="center">Termo de Uso</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <Scrollbars
              style={{ width: '100%', height: '27rem' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam ac elit cursus pulvinar. Sed blandit, lorem sit amet maximus condimentum, lacus sem ultricies urna, quis porta ex ex ac ex. Aenean faucibus, tellus at consequat porttitor, massa magna posuere lectus, vel molestie neque metus nec enim. Donec sapien justo, laoreet in tortor sed, auctor tempor justo. Vivamus congue ex a molestie auctor. Cras aliquet cursus nulla eget semper. Donec ut tempor ante. Fusce venenatis augue ac orci tristique, id dictum tellus dignissim. In fermentum eu est at rhoncus. Mauris pellentesque nisl eget accumsan congue. Pellentesque scelerisque odio ante, quis dapibus lorem blandit eget. Proin condimentum, libero ac volutpat interdum, mauris dui egestas lectus, in eleifend neque dui et metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam ac elit cursus pulvinar. Sed blandit, lorem sit amet maximus condimentum, lacus sem ultricies urna, quis porta ex ex ac ex. Aenean faucibus, tellus at consequat porttitor, massa magna posuere lectus, vel molestie neque metus nec enim. Donec sapien justo, laoreet in tortor sed, auctor tempor justo. Vivamus congue ex a molestie auctor. Cras aliquet cursus nulla eget semper. Donec ut tempor ante. Fusce venenatis augue ac orci tristique, id dictum tellus dignissim. In fermentum eu est at rhoncus. Mauris pellentesque nisl eget accumsan congue. Pellentesque scelerisque odio ante, quis dapibus lorem blandit eget. Proin condimentum, libero ac volutpat interdum, mauris dui egestas lectus, in eleifend neque dui et metus. 
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