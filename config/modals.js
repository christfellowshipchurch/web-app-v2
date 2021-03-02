import DefaultModal from 'ui-kit/Modal';
import {
  AuthModal,
  ConnectModal,
  GroupDetailsModal,
  GroupFilterModal,
} from 'components/Modals';

const modals = [
  {
    title: 'Default',
    component: DefaultModal,
  },
  {
    title: 'Auth',
    component: AuthModal,
  },
  {
    title: 'ConnectModal',
    component: ConnectModal,
  },
  {
    title: 'GroupDetails',
    component: GroupDetailsModal,
  },
  {
    title: 'GroupFilter',
    component: GroupFilterModal,
  },
];

export default modals;
