import { Provider } from "react-redux";
import { Layout } from "../components";
import { store } from "../store/store";
import "../styles/globals.css";
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
