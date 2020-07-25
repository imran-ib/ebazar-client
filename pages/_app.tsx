import { AppProps } from "next/app";
import Router from "next/router";
import { GlobalStyles } from "components/styles/Global";
import { ApolloProvider } from "@apollo/react-hooks";
import { ToastContainer } from "react-toastify";
import withData from "components/lib/withData";
import NProgress from "nprogress";
import Meta from "components/Layout/Meta";
import config from "react-reveal/globals";

//css modules
import "react-toastify/dist/ReactToastify.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-input-range/lib/css/index.css";

config({ ssrFadeout: true });
interface MyProps extends AppProps {
  apollo: any;
}
Router.events.on("routeChangeStart", () => {
  // console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, apollo }: MyProps) {
  return (
    <>
      <ApolloProvider client={apollo}>
        <GlobalStyles />
        <Meta />

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default withData(MyApp);
