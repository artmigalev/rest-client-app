import type { ContextType } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router';
import type { AppDispatch, RootState } from '~/state-management/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export function useUser() {
  return useOutletContext<ContextType>();
}
