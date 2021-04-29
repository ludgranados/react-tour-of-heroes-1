import { GlobalProvider } from './context/GlobalContext';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
};

export default App;
