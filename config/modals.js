import DefaultModal from '../ui-kit/Modal';
import { modals as _modals } from '../components';

const modals = [
  {
    title: 'Default',
    component: DefaultModal,
  },
  {
    title: 'Auth',
    component: _modals.AuthModal,
  },
];

export default modals;
