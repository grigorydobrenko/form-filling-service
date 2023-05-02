import React, {useState} from 'react';
import {ReactComponent as Logo} from "../../assets/user.svg";
import {ReactComponent as Man} from "../../assets/m.svg";
import {ReactComponent as Woman} from "../../assets/f.svg";

import style from './CommonPage.module.scss'
import {Input} from "../../components/Input/Input";
import {Label} from "../../components/Label/Label";
import {Select} from "../../components/Select/Select";
import {IOption} from "../../components/Select/Select.props";
import {Button} from "../../components/Button/Button";
import cn from "classnames";
import {SubmitHandler, useForm} from "react-hook-form";

export const CITY_DATA: IOption[] = [
    {label: 'Санкт-Птеребург', value: 'Санкт-Птеребург'},
    {label: 'Москва', value: 'Москва'},
    {label: 'Минск', value: 'Минск'},
];

export const COUNTRY: IOption[] = [
    {label: 'Россия', value: 'Россия'},
    {label: 'Беларусь', value: 'Беларусь'},
    {label: 'Казахстан', value: 'Казахстан'},
];

type Inputs = {
    firstName: string,
    surname: string,
    lastName: string,
    birthPlace: string,
    city: string,
    country: string,
    birthDate: string,
    gender: string
};

const CommonPage = (): JSX.Element => {

    const initialState = 'male'
    const [gender, setGender] = useState(initialState)

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        data.gender = gender
        console.log(data);
    }

    const nameValidateScheme = {required: true, minLength: 2, maxLength: 30}

    return (
        <div className={style.container}>
            <Logo/>
            <div className={style.header}>
                <div className={style.title}>Общие</div>
                <div className={style.description}>Введите свои персональные данные.</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.row}>
                    <div>
                        <Label label={'Фамилия*'}>
                            <Input placeholder={'Васильев'} {...register("lastName", nameValidateScheme)}/>
                        </Label>
                    </div>
                    <div>
                        <Label label={'Имя*'}>
                            <Input placeholder={'Иван'} {...register("firstName", nameValidateScheme)}/>
                        </Label>
                    </div>
                </div>
                <div className={style.row}>
                    <div>
                        <Label label={'Отчество*'}>
                            <Input placeholder={'Отчество'} {...register("surname", nameValidateScheme)}/>
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
                            <div className={style.buttons_container}><Button color={'white'}
                                                                             className={cn(style.gender_btn, {[style.gender_btn_active]: gender === 'male'})}
                                                                             onClick={() => setGender('male')}>
                                <div className={cn(style.inner, {[style.inner_active]: gender === 'male'})}>
                                    <Man/><span>М</span></div>
                            </Button>
                                <Button color={'white'}
                                        className={cn(style.gender_btn, {[style.gender_btn_active]: gender === 'female'})}
                                        onClick={() => setGender('female')}>
                                    <div className={cn(style.inner, {[style.inner_active]: gender === 'female'})}>
                                        <Woman/><span>Ж</span></div>
                                </Button></div>
                        </Label>
                    </div>
                    <div>
                        <Label label={'Дата рождения*'}>
                            <input type="date" className={style.date} {...register("birthDate")}/>
                        </Label>
                    </div>
                </div>
                <div className={style.row}>
                    <Label label={'Место рождения (как указано в паспорте)*'}>
                        <Input
                            placeholder={'Введите наименование региона и населенного пункта'} {...register("birthPlace", {
                            required: true,
                            minLength: 2,
                            maxLength: 80
                        })}/>
                    </Label>
                </div>
                <div className={style.form_buttons}>
                    <Button color={'white'}>Отмена</Button>
                    <Button type={'submit'}>Далее</Button>
                </div>
            </form>
        </div>
    );
};

export default CommonPage;