import {setStep, StepType} from "../store/reducers/appSlice";
import {AppDispatch} from "../store/store";

export const switchStep = (step: StepType, dispatch: AppDispatch) => {
    dispatch(setStep({currentStep: step}))
}