import { render } from '@testing-library/react';

import { ModalProvider } from '../providers';
import App from '../pages/index';

jest.mock('next/router', () => ({
  useRouter() {
    return { pathname: '' };
  },
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { getAllByTestId } = render(
      <ModalProvider>
        <App />
      </ModalProvider>
    );
    expect(getAllByTestId('nav-link').length).toEqual(4);
  });
});
