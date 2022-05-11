 
import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import AddUserReducer from '../Pages/AddUser/store/addUserSlice'
import signInReducer from '../Pages/SignIn/store/signInSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  // import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
    key: 'persistS',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({
    signInReducer:signInReducer,
    AddUserReducer:AddUserReducer
  })

  const persistedReducer = persistReducer(persistConfig,rootReducer)

 export const store = configureStore({
    reducer:{persistedReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)



