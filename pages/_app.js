import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { Layout } from "../components";
import { store, persistor } from "../store/store";
import "../styles/globals.css";
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
