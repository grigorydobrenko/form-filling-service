import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'data',
    initialState: {userData: null, ownershipData: null} as FormData | null,
    reducers: {
        setCommonData(state, action: PayloadAction<{ data: CommonPersonalData }>) {
            state!.userData = action.payload.data
        },
        setOwnershipData(state, action: PayloadAction<{ ownershipData: OwnershipData }>) {
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
    ownershipData: OwnershipData | null
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

// export type OwnershipLLC = Pick<OwnershipEntrepreneur, 'inn' | 'innImg' | 'registrationDate'> & {
//
// };



