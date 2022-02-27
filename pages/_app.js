import { SessionProvider } from 'next-auth/react';
// Use the <Provider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
const App = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;