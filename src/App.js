import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PageRoutes from './routes/PageRoutes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageRoutes/>
      </BrowserRouter>
      <ToastContainer 
        position="bottom-right" 
        toastStyle={{ 
          backgroundColor: "var(--defaultFirstColor)", 
          color: "var(--defaultFourthColor)", 
          fill:"var(--defaultFourthColor)" 
        }}
      />
    </div>
  );
}

export default App;
