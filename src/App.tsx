import { RouterProvider } from 'react-router-dom';
import AntDesignProvider from './+core/provider/AntDesignProvider';
import ReduxProvider from './+core/provider/ReduxProvider';
import { router } from './routes/router';
import './styles/globals.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      <ReduxProvider>
        <AntDesignProvider>
          <RouterProvider router={router} />
        </AntDesignProvider>
      </ReduxProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
