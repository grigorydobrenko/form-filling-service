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
        required: 'Обязательное поле',
    }

    const numMaskValidationScheme = {
        ...validationScheme,
        pattern: {
            value: /^\d+$/,
            message: "Некорректное значение"
        }
    }

    const dateMaskValidationScheme = {
        ...validationScheme,
        pattern: {
            value: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
            message: "Некорректное значение"
        }
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
        numMaskValidationScheme,
        dateMaskValidationScheme,
        dispatch
    }
};

export default useOwnershipForm;