import { useMemo } from 'react';
import RouteService from '../../api/RouteService/RouteService';

export default function usePreloaderService() {
  return useMemo(() => new RouteService(), []);
}
