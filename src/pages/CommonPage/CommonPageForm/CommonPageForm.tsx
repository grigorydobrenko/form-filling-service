import React, {useState} from 'react';

import style from '../CommonPage.module.scss';
import globalStyles from '../../../styles/Global.module.scss'
import {Input} from "../../../components/Input/Input";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";
import {Button} from "../../../components/Button/Button";
import Genders from "./Genders/Genders";
import {CITY_DATA, COUNTRY} from "../../../constants/constants";
import useCommonPageForm from "../../../hooks/useCommonPageForm";

const CommonPageForm = (): JSX.Element => {

    const initialState = 'male'
    const [gender, setGender] = useState(initialState)

    const {
        register,
        handleSubmit,
        formState: {errors},
        onSubmit,
        nameValidateScheme,
        birthPlaceValidateScheme,
    } = useCommonPageForm(gender)

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
                        placeholder={'Введите наименование региона и населенного пункта'} {...register("birthPlace", birthPlaceValidateScheme)}/>
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