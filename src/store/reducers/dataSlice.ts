import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'data',
    initialState: { userData: null } as FormData | null,
    reducers: {
        setCommonData(state, action: PayloadAction<{ data: CommonPersonalData }>) {
            state!.userData = action.payload.data
        }
    },
    extraReducers: (builder) => {

    }
})

export const dataReducer = slice.reducer
export const {setCommonData} = slice.actions

export interface FormData {
    userData: CommonPersonalData | null
}

export interface CommonPersonalData {
    firstName: string,
    surname: string,
    lastName: string,
    city: string,
    country: string,
    birthPlace: string
    gender: string,
    birthDate: string
}