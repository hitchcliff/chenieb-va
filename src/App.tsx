import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import usePreloaderService from './app/Hooks/usePreloaderService';
import { Footer } from './components';
import Navigation from './components/Navigation/Navigation';
import Libs from './Libs';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const { addIsLoaded } = usePreloaderService();

  useEffect(() => {
    Libs(); // all libs

    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        addIsLoaded(true);
      }
    });
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="*" component={AppRoutes} />
      </Switch>
    </Router>
  );
}
