import {setStep, StepType} from "../store/reducers/appSlice";

export const switchStep = (step: StepType, dispatch: any) => {
    dispatch(setStep({currentStep: step}))
}