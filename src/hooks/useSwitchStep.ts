import {useAppDispatch} from "../app/hooks";
import {setStep, StepType} from "../store/reducers/appSlice";

export const useSwitchStep = () => {
    const dispatch = useAppDispatch()
    const switchStep = (step: StepType) => dispatch(setStep({currentStep: step}))
    return {switchStep}
}

