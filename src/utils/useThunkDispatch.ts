import { useDispatch } from 'react-redux';
import { store } from './store';
import type { ThunkDispatch } from '../types';

const useThunkDispatch = (): ThunkDispatch =>
    useDispatch<typeof store.dispatch>();

export default useThunkDispatch;
