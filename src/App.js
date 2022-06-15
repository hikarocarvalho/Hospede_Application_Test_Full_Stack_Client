import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes/PageRoutes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
