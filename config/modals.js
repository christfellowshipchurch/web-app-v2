import DefaultModal from 'ui-kit/Modal';
import {
  AddGroupMemberModal,
  AddToCalendarModal,
  AuthModal,
  ConnectCardModal,
  EasterLocationsModal,
  ConnectModal,
  GroupDetailsModal,
  GroupEmailConfirmationModal,
  GroupFilterModal,
  GroupMemberDetailsModal,
  GroupNotifyMeModal,
  NavMenuModal,
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
    title: 'EasterLocations',
    component: EasterLocationsModal,
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
    title: 'NavMenu',
    component: NavMenuModal,
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
