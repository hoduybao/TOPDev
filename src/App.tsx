import { RouterProvider } from 'react-router-dom';
import AntDesignProvider from './+core/provider/AntDesignProvider';
import ReduxProvider from './+core/provider/ReduxProvider';
import { router } from './routes/router';
import './styles/globals.scss';

function App() {
  return (
    <ReduxProvider>
      <AntDesignProvider>
        <RouterProvider router={router} />
      </AntDesignProvider>
    </ReduxProvider>
  );
}

export default App;
