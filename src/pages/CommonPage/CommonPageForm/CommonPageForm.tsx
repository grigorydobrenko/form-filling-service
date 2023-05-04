import React, {useState} from 'react';

import style from '../CommonPage.module.scss';
import globalStyles from '../../../styles/Global.module.scss'
import {Input} from "../../../components/Input/Input";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";
import {Option} from "../../../components/Select/Select.props";
import {Button} from "../../../components/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {CommonPersonalData, setCommonData} from "../../../store/reducers/dataSlice";
import {useAppDispatch} from "../../../app/hooks";
import {setStep} from "../../../store/reducers/appSlice";
import Genders from "./Genders/Genders";

export const CITY_DATA: Option[] = [
    {label: 'Санкт-Птеребург', value: 'Санкт-Птеребург'},
    {label: 'Москва', value: 'Москва'},
    {label: 'Минск', value: 'Минск'},
]

export const COUNTRY: Option[] = [
    {label: 'Россия', value: 'Россия'},
    {label: 'Беларусь', value: 'Беларусь'},
    {label: 'Казахстан', value: 'Казахстан'},
]

const CommonPageForm = (): JSX.Element => {

    const initialState = 'male'
    const [gender, setGender] = useState(initialState)

    const {register, handleSubmit, formState: {errors}} = useForm<CommonPersonalData>();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<CommonPersonalData> = data => {
        data.gender = gender
        dispatch(setCommonData({data}))
        dispatch(setStep({currentStep: 2}))
    }

    const nameValidateScheme = {required: 'Field is required', minLength: 2, maxLength: 30}
    const birthValidateScheme = {
        required: 'Field is required',
        minLength: 2,
        maxLength: 80
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.row}>
                <div>
                    <Label label={'Фамилия*'}>
                        <Input placeholder={'Васильев'} {...register("lastName", nameValidateScheme)}/>
                        {errors.lastName && <span className={globalStyles.red}>{errors.lastName.message}</span>}
                    </Label>
                </div>
                <div>
                    <Label label={'Имя*'}>
                        <Input placeholder={'Иван'} {...register("firstName", nameValidateScheme)}/>
                        {errors.firstName && <span className={globalStyles.red}>{errors.firstName.message}</span>}
                    </Label>
                </div>
            </div>
            <div className={style.row}>
                <div>
                    <Label label={'Отчество*'}>
                        <Input placeholder={'Отчество'} {...register("surname", nameValidateScheme)}/>
                        {errors.surname && <span className={globalStyles.red}>{errors.surname.message}</span>}
                    </Label>
                </div>
                <div>
                    <Label label={'Основной город*'}>
                        <Select options={CITY_DATA} {...register("city")}/>
                    </Label>
                </div>
            </div>
            <div className={style.row}>
                <Label label={'Гражданство*'} className={style.country}>
                    <Select options={COUNTRY} {...register("country")}/>
                </Label>
                <div>
                    <Label label={'Пол*'} className={style.genders}>
                        <Genders setGender={setGender} gender={gender}/>
                    </Label>
                </div>
                <div>
                    <Label label={'Дата рождения*'}>
                        <input type="date" className={style.date} {...register("birthDate", {required: 'required'})}/>
                        {errors.birthDate && <span className={globalStyles.red}>{errors.birthDate.message}</span>}
                    </Label>
                </div>
            </div>
            <div className={style.row}>
                <Label label={'Место рождения (как указано в паспорте)*'}>
                    <Input
                        placeholder={'Введите наименование региона и населенного пункта'} {...register("birthPlace", birthValidateScheme)}/>
                    {errors.birthPlace && <span className={globalStyles.red}>{errors.birthPlace.message}</span>}
                </Label>
            </div>
            <div className={style.form_buttons}>
                <Button color={'white'}>Отмена</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>

    );
};

export default CommonPageForm;