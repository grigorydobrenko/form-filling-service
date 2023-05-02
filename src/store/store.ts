import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/appSlice";
import {dataReducer} from "./reducers/dataSlice";

const rootReducer = combineReducers({
    app: appReducer,
    data: dataReducer,
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