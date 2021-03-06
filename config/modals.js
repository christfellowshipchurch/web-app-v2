import DefaultModal from 'ui-kit/Modal';
import {
  AuthModal,
  ConnectModal,
  GroupDetailsModal,
  GroupFilterModal,
  GroupNotifyMeModal,
  NodeSingleModal,
  VideoModal,
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
  {
    title: 'GroupNotifyMe',
    component: GroupNotifyMeModal,
  },
  {
    title: 'NodeSingle',
    component: NodeSingleModal,
  },
  {
    title: 'Video',
    component: VideoModal,
  },
];

export default modals;
