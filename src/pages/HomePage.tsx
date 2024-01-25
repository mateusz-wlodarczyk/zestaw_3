import React, { useEffect, useState } from 'react';
import { ButtonGroup, Flex, useDisclosure } from '@chakra-ui/react';

import { ModalSingleDevice } from '../components/ModalSingleDevice';
import { Navbar } from '../components/Navbar';
import { SingleDevice } from '../components/SingleDevice';
import { usePopupContext } from '../context/contextPopup';
import '../utils/dragging';
import { loadSingleDevice, loadTools } from '../utils/fetchSupabase';
import { SingleDeviceTYPE } from '../utils/types';

export const HomePage = () => {
  const [loadedDevices, setLoadedDevices] = useState<SingleDeviceTYPE[]>();
  const [loadedSingleDevice, setLoadedSingleDevice] = useState<SingleDeviceTYPE[]>([]);
  const { idDevice } = usePopupContext();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    loadTools()
      .then((res) => {
        if (res !== undefined && res !== null) setLoadedDevices(res);
        if (res !== undefined && res !== null) setLoadedDevices(res);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    loadSingleDevice(idDevice)
      .then((res) => {
        if (res !== undefined && res !== null) setLoadedSingleDevice(res);
      })
      .catch((err) => console.error(err));
  }, [idDevice]);

  return (
    <>
      <Navbar />
      <ButtonGroup onClick={onOpen}>
        <Flex gap='10px' wrap='wrap'>
          {loadedDevices?.map((item) => {
            return <SingleDevice key={item.id} item={item} />;
          })}
        </Flex>
        <ModalSingleDevice
          isOpen={isOpen}
          loadedSingleDevice={loadedSingleDevice}
          onClose={onClose}
        />
      </ButtonGroup>
    </>
  );
};
