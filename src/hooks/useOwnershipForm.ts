import {SubmitHandler, useForm} from "react-hook-form";
import {OwnershipData, setOwnershipData} from "../store/reducers/dataSlice";
import {useAppDispatch} from "../app/hooks";
import {setStep} from "../store/reducers/appSlice";

const useOwnershipForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        clearErrors,
        setValue
    } = useForm<OwnershipData>();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<OwnershipData> = data => {
        dispatch(setOwnershipData({ownershipData: data}))
        dispatch(setStep({currentStep: 3}))
    }

    const validationScheme = {
        required: 'Required',
    }

    return {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        clearErrors,
        setValue,
        onSubmit,
        validationScheme,
        dispatch
    }
};

export default useOwnershipForm;