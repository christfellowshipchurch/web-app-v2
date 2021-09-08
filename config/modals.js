import DefaultModal from 'ui-kit/Modal';
import {
  AuthModal,
  ConnectModal,
  GroupDetailsModal,
  GroupFilterModal,
  // GroupMemberDetailsModal,
  GroupNotifyMeModal,
  NodeSingleModal,
  VideoModal,
} from 'components/Modals';
import GroupMemberDetailsModal from '../components/Modals/GroupMemberDetailsModal/GroupMemberDetailsModal';

console.log(GroupMemberDetailsModal);

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
    title: 'GroupMemberDetails',
    component: GroupMemberDetailsModal,
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
