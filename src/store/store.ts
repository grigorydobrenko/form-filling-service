import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/appSlice";

const rootReducer = combineReducers({
    app: appReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(thunk)

})

export type RootReducerType = typeof rootReducer

export type RootState = ReturnType<RootReducerType>
export type AppDispatch = typeof store.dispatch