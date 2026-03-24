import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { projectAPI } from './services/projectService';
import { researchAPI } from './services/researchService';
import { resumeAPI } from './services/resumeService';

export const store = configureStore({
  reducer: {
    [projectAPI.reducerPath]: projectAPI.reducer,
    [researchAPI.reducerPath]: researchAPI.reducer,
    [resumeAPI.reducerPath]: resumeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectAPI.middleware,
      researchAPI.middleware,
      resumeAPI.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;

setupListeners(dispatch);
