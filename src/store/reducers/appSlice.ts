import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'app',
    initialState: {
        step: 4 as StepType,
        activity: 'entrepreneur' as ActivityType
    },
    reducers: {
        setStep(state, action: PayloadAction<{ currentStep: StepType }>) {
            state.step = action.payload.currentStep
        },
        setOwnership(state, action: PayloadAction<{ activity: ActivityType }>) {
            state.activity = action.payload.activity
        },
    },
})

export const appReducer = slice.reducer

export const {setStep, setOwnership} = slice.actions

export type StepType = 1 | 2 | 2.1 | 3 | 4 | 5
export type ActivityType = 'entrepreneur' | 'LLC'

