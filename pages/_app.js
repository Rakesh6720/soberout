import NavBarComponent from "../components/layout/nav-bar-component";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NavBarComponent>
        <Component {...pageProps} />
      </NavBarComponent>
    </SessionProvider>
  );
}

export default MyApp;
