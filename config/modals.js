import DefaultModal from 'ui-kit/Modal';
import {
  AddGroupMemberModal,
  AddToCalendarModal,
  AuthModal,
  ConnectCardModal,
  ConnectModal,
  GroupDetailsModal,
  GroupEmailConfirmationModal,
  GroupFilterModal,
  GroupMemberDetailsModal,
  GroupNotifyMeModal,
  NodeSingleModal,
  SetReminderModal,
  VideoModal,
  WelcomeModal,
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
    title: 'ConnectCardModal',
    component: ConnectCardModal,
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
    title: 'NodeSingle',
    component: NodeSingleModal,
  },
  {
    title: 'SetReminder',
    component: SetReminderModal,
  },
  {
    title: 'Video',
    component: VideoModal,
  },
  {
    title: 'Welcome',
    component: WelcomeModal,
  },
];

export default modals;
