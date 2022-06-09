import { RootState } from '../types/common';

export const selectInitialized = (state: RootState) => state.app.initialized;