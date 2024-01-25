import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { SingleDeviceTYPE } from '../utils/types';
export const ModalSingleDevice = ({
  isOpen,
  loadedSingleDevice,
  onClose,
}: {
  isOpen: boolean;
  loadedSingleDevice: SingleDeviceTYPE[];
  onClose: () => void;
}) => {
  const checkLength = loadedSingleDevice.length > 0;
  if (!checkLength) {
    return <></>;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className='draggable'>
        <ModalHeader>#{loadedSingleDevice[0].id}</ModalHeader>
        <ModalCloseButton>X </ModalCloseButton>
        <ModalBody>
          <Text>
            :::::: #ID{loadedSingleDevice[0].id}# DANE Z SERWERA #ID
            {loadedSingleDevice[0].id}# ::::::
          </Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore.
          <Text>
            :::::: #ID{loadedSingleDevice[0].id}# DANE Z SERWERA #ID
            {loadedSingleDevice[0].id}# ::::::
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
