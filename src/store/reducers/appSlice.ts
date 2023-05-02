import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'app',
    initialState: {
       step: 1 as StepType
    },
    reducers: {
        setStep(state, action: PayloadAction<{ currentStep: StepType }>) {
            state.step = action.payload.currentStep
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(initializeApp.fulfilled, (state) => {
        //     state.isInitialized = true
        // })
    }
})

export const appReducer = slice.reducer

export const {setStep} = slice.actions

export type StepType = 1 | 2 | 3 | 4 | 5