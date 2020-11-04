import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Icon } from '../ui-kit';
import { Nav as StyledNav } from '../styled';

function Nav(props = {}) {
  return (
    <StyledNav>
      <Primary data={props.data.navigationLinks} />
      <QuickAction data={props.data.quickAction} />
      <Link href="/">
        <a>
          <Icon name="user" color="fg" size="32" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Icon name="menu" color="fg" />
        </a>
      </Link>
    </StyledNav>
  );
}

function Primary(props = {}) {
  const router = useRouter();
  const isActive = action => router.pathname === action;

  return props.data.map((item, idx) => (
    <Link key={idx} href={item.action}>
      <StyledNav.Link
        data-state={isActive(item.action) ? 'active' : 'inactive'}
      >
        {item.call}
      </StyledNav.Link>
    </Link>
  ));
}

function QuickAction(props = {}) {
  return (
    <Button as="a" href={props.data.action}>
      {props.data.call}
    </Button>
  );
}

Nav.propTypes = {
  data: PropTypes.object,
};

export default Nav;
