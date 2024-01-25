import { MdErrorOutline, MdOutlineOnlinePrediction } from 'react-icons/md';
import { RiWifiOffLine } from 'react-icons/ri';

export const getIconByName = (name: string) => {
  switch (name) {
    case 'RiWifiOffLine':
      return <RiWifiOffLine />;
    case 'MdOutlineOnlinePrediction':
      return <MdOutlineOnlinePrediction />;
    case 'MdErrorOutline':
      return <MdErrorOutline />;
  }
};
