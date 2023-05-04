import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'data',
    initialState: {userData: null, ownershipData: null} as FormData | null,
    reducers: {
        setCommonData(state, action: PayloadAction<{ data: CommonPersonalData }>) {
            state!.userData = action.payload.data
        },
        setOwnershipData(state, action: PayloadAction<{ ownershipData: OwnershipEntrepreneur }>) {
            state!.ownershipData = action.payload.ownershipData
        }
    },
    extraReducers: (builder) => {

    }
})

export const dataReducer = slice.reducer
export const {setCommonData, setOwnershipData} = slice.actions

export interface FormData {
    userData: CommonPersonalData | null,
    ownershipData: OwnershipEntrepreneur | null
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

export interface OwnershipEntrepreneur {
    inn: string,
    innImg: string,
    registrationDate: string,
    ogrnip: string,
    ogrnipImg: string,
    loanImg: string,
    excerptImg: string,
    contract: boolean
}