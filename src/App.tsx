import { RouterProvider } from 'react-router-dom';
import AntDesignProvider from './+core/provider/AntDesignProvider';
import ReduxProvider from './+core/provider/ReduxProvider';
import { router } from './routes/router';
import './styles/globals.scss';
import { DarkModeProvider } from './components/ui/DarkModeProvider';

function App() {
  return (
    <ReduxProvider>
      <DarkModeProvider defaultTheme='dark' storageKey='hien-dark-mode'>
        <AntDesignProvider>
          <RouterProvider router={router} />
        </AntDesignProvider>
      </DarkModeProvider>
    </ReduxProvider>
  );
}

export default App;
