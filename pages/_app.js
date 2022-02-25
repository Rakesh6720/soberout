import NavBarComponent from "../components/layout/nav-bar-component";
function MyApp({ Component, pageProps }) {
  return (
    <NavBarComponent>
      <Component {...pageProps} />
    </NavBarComponent>
  );
}

export default MyApp;
