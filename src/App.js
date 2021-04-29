import { Router } from 'react-router';
import { GlobalProvider } from './context/GlobalContext';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppRouter />
      </Router>
      
    </GlobalProvider>
  );
};

export default App;
