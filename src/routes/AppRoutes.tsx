import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { RoutePattern } from './RoutePattern';
import { Home, PageNotFound } from '../app/index';
import { useEffect } from 'react';
import useRouteService from '../app/Hooks/useRouteService';

export default function AppRoutes() {
  const { setCurrentRoute } = useRouteService();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = history.location;

    setCurrentRoute({
      currentRoute: pathname,
    });
  }, [history.location]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={[RoutePattern.Home, '/home']} component={Home} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </AnimatePresence>
  );
}
