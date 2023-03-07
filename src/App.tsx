import { FC } from 'react';
import './App.css';
import useRoutes from './routes';

const App: FC = () => {
  const router = useRoutes()

  return (
    <div className="App">
      {
        router
      }
    </div>
  );
}

export default App;
