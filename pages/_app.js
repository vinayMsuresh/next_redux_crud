import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {saga,store} from '../redux/store';
import sagaFunction from '../redux/sagaFunction';
import {Provider} from 'react-redux';

saga.run(sagaFunction);

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
