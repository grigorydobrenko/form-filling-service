import {SubmitHandler, useForm} from "react-hook-form";
import {OwnershipData, setOwnershipData} from "../store/reducers/dataSlice";
import {useAppDispatch} from "../app/hooks";
import {setStep} from "../store/reducers/appSlice";
import {BASIC_VALIDATION_SCHEME} from "../constants/constants";

const useOwnershipForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, dirtyFields, isSubmitted, touchedFields},
        setError,
        clearErrors,
        setValue,
        watch,
        getValues
    } = useForm<OwnershipData>();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<OwnershipData> = data => {
        dispatch(setOwnershipData({ownershipData: data}))
        dispatch(setStep({currentStep: 3}))
    }

    const numMaskValidationScheme = {
        ...BASIC_VALIDATION_SCHEME,
        pattern: {
            value: /^\d+$/,
            message: "Некорректное значение"
        }
    }

    return {
        register,
        handleSubmit,
        formState: {errors, dirtyFields, isSubmitted, touchedFields},
        setError,
        clearErrors,
        setValue,
        onSubmit,
        BASIC_VALIDATION_SCHEME,
        numMaskValidationScheme,
        dispatch,
        watch,
        getValues
    }
};

export default useOwnershipForm;