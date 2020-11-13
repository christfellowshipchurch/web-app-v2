import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { AuthProvider, ModalProvider } from '../providers';
import App from '../pages/index';

jest.mock('next/router', () => ({
  useRouter() {
    return { pathname: '' };
  },
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { getAllByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AuthProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </AuthProvider>
      </MockedProvider>
    );
    expect(getAllByTestId('nav-link').length).toEqual(4);
  });
});
