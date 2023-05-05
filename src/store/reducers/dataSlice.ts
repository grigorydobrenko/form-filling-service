import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'data',
    initialState: {userData: null, ownershipData: null, registrationData: null, livingData: null} as FormData | null,
    reducers: {
        setCommonData(state, action: PayloadAction<{ data: CommonPersonalData }>) {
            state!.userData = action.payload.data
        },
        setOwnershipData(state, action: PayloadAction<{ ownershipData: OwnershipData }>) {
            state!.ownershipData = action.payload.ownershipData
        },
        setRegistrationData(state, action: PayloadAction<{ registrationData: RegistrationAddress }>) {
            state!.registrationData = action.payload.registrationData
        },
        setLivingData(state) {
            state!.livingData = state!.registrationData
        }
    },
})

export const dataReducer = slice.reducer
export const {setCommonData, setOwnershipData, setRegistrationData, setLivingData} = slice.actions

export interface FormData {
    userData: CommonPersonalData | null,
    ownershipData: OwnershipData | null
    registrationData: RegistrationAddress | null
    livingData: RegistrationAddress | null
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

export interface OwnershipData {
    inn: string,
    innImg: string,
    registrationDate: string,
    ogrnip: string,
    ogrnipImg: string,
    loanImg: string,
    excerptImg: string,
    contract: boolean,
    name: string,
    shortName: string,
    ogrn: string,
    ogrnImg: string
}

export interface RegistrationAddress {
    country: string,
    region: string,
    city: string,
    street: string,
    home: string,
    apartment?: string,
    addressRegistrationDate: string,
}



