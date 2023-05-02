import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'data',
    initialState: {} as CommonPersonalData | null,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

interface CommonPersonalData {
    names: {
        firstName: string,
        surname: string,
        lastName: string,
    },
    region: {
        city: string,
        country: string,
        birthPlace: string
    },
    gender: string,
    birthDate: string
}