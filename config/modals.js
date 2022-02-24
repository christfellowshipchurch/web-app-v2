import DefaultModal from 'ui-kit/Modal';
import {
  AddGroupMemberModal,
  AddToCalendarModal,
  AuthModal,
  ConnectModal,
  GroupDetailsModal,
  GroupEmailConfirmationModal,
  GroupFilterModal,
  GroupMemberDetailsModal,
  GroupNotifyMeModal,
  NodeSingleModal,
  WelcomeModal,
  VideoModal,
} from 'components/Modals';

const modals = [
  {
    title: 'Default',
    component: DefaultModal,
  },
  {
    title: 'AddGroupMember',
    component: AddGroupMemberModal,
  },
  {
    title: 'AddToCalendar',
    component: AddToCalendarModal,
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
    title: 'GroupEmailConfirmation',
    component: GroupEmailConfirmationModal,
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
    title: 'Welcome',
    component: WelcomeModal,
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
