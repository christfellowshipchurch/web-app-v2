import DefaultModal from 'ui-kit/Modal';
import { AuthModal, GroupFilterModal } from 'components/Modals';

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
    title: 'GroupFilter',
    component: GroupFilterModal,
  },
];

export default modals;
