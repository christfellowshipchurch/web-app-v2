import React from 'react';

import { Modal } from 'ui-kit';

import NavMenu from './NavMenu';
import navData from 'config/new-nav-links';

function NavMenuModal(props = {}) {
  return (
    <Modal width="auto" {...props}>
      <NavMenu data={navData} />
    </Modal>
  );
}

NavMenuModal.propTypes = {
  // ...Modal.propTypes,
};

NavMenuModal.defaultProps = {};

export default NavMenuModal;
