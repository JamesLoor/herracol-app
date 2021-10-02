import { Provider } from 'react-redux'
import Routes from './routes/Routes';
import generateStore from './redux/store';
import './App.css';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}

export default App;
