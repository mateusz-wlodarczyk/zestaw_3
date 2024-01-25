import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

import { ROUTES_ZESTAW3, settings } from '../utils/constans';

export const Settings = () => {
  return (
    <>
      <Link to={ROUTES_ZESTAW3.home}>
        <Text>back</Text>
      </Link>
      <Tabs>
        <TabList>
          {settings.map((item) => {
            return <Tab _selected={{ bg: 'blue.100' }}>{item.title}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {settings.map((item) => {
            return <TabPanel _selected={{ bg: 'blue.100' }}>{item.description}</TabPanel>;
          })}
        </TabPanels>
      </Tabs>
    </>
  );
};
