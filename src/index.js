import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';

ReactDom.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
