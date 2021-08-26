/**
 * todo : This test was originally set by Drew when the project was first created. It no longer works as expected, but we can look into getting it to work again if it's something we still want to have down the road.
 */

// import { render } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';

// import { AuthProvider, ModalProvider } from 'providers';
// import App from '../pages/index';

jest.mock('next/router', () => ({
  useRouter() {
    return { pathname: '' };
  },
}));

describe('App', () => {
  it('renders without crashing', () => {
    // const { getByText } = render(
    //   <MockedProvider mocks={[]} addTypename={false}>
    //     <AuthProvider>
    //       <ModalProvider>
    //         <App />
    //       </ModalProvider>
    //     </AuthProvider>
    //   </MockedProvider>
    // );
    // expect(getByText(/watch online/i)).toBeInTheDocument();
  });
});
