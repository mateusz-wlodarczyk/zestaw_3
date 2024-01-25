import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';

import { usePopupContext } from '../context/contextPopup';
import { loadIcons } from '../utils/fetchSupabase';
import { ContainerStylesSX, StatusStylesSX } from '../utils/styleSX';
import { SingleDeviceTYPE } from '../utils/types';
import { MdErrorOutline, MdOutlineOnlinePrediction } from 'react-icons/md';
import { RiWifiOffLine } from 'react-icons/ri';
import { getIconByName } from '../utils/utils';

export const SingleDevice = ({ item }: { item: SingleDeviceTYPE }) => {
  const [iconDevice, setIconDevice] = useState<string>('');
  const { findId } = usePopupContext();
  useEffect(() => {
    loadIcons(item.stanPolaczenia)
      .then((res) => {
        if (res !== undefined) setIconDevice(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (typeof iconDevice === undefined) return <div>loading...</div>;
  console.log(iconDevice);
  return (
    <>
      <Container role='button' sx={ContainerStylesSX} onClick={() => findId(item.id)}>
        <Flex>
          <Box m='1px' p='1px'>
            <Text>typ: {item.typ}</Text>
            <Text>nazwa: {item.name}</Text>
            <Flex sx={StatusStylesSX}>
              <Text> stan polaczenia: </Text>
              <Box>{getIconByName(iconDevice)}</Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
