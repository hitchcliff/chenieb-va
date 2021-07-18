import { useMemo } from 'react';
import { PreloaderService } from '../../api';

export default function usePreloaderService() {
  return useMemo(() => new PreloaderService(), []);
}
