import {SubmitHandler, useForm} from "react-hook-form";
import {CommonPersonalData, setCommonData} from "../store/reducers/dataSlice";
import {useAppDispatch} from "../app/hooks";
import {setStep} from "../store/reducers/appSlice";

const useCommonPageForm = (gender: string) => {

    const {register, handleSubmit, formState: {errors}} = useForm<CommonPersonalData>();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<CommonPersonalData> = data => {
        data.gender = gender
        dispatch(setCommonData({data}))
        dispatch(setStep({currentStep: 2}))
    }

    const nameValidateScheme = {required: 'Обязательное поле', minLength: 2, maxLength: 30}
    const birthPlaceValidateScheme = {
        required: 'Обязательное поле',
        minLength: 2,
        maxLength: 80
    }

    return {
        register,
        handleSubmit,
        formState: {errors},
        onSubmit,
        nameValidateScheme,
        birthPlaceValidateScheme,
    }
};

export default useCommonPageForm;
