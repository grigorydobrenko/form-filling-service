import React from 'react';
import {ReactComponent as Logo} from "../../assets/user.svg";

import style from './CommonPage.module.scss'
import {Input} from "../../components/Input/Input";
import {Label} from "../../components/Label/Label";
import {Select} from "../../components/Select/Select";
import {IOption} from "../../components/Select/Select.props";
import {Button} from "../../components/Button/Button";

export const CITY_DATA: IOption[] = [
    { label: 'Санкт-Птеребург', value: 'Санкт-Птеребург' },
    { label: 'Москва', value: 'Москва' },
    { label: 'Минск', value: 'Минск' },
];

export const COUNTRY: IOption[] = [
    { label: 'Россия', value: 'Россия' },
    { label: 'Беларусь', value: 'Беларусь' },
    { label: 'Казахстан', value: 'Казахстан' },
];

const CommonPage = (): JSX.Element => {

    return (
        <div className={style.container}>
            <Logo/>
            <div className={style.header}>
                <div className={style.title}>Общие</div>
                <div className={style.description}>Введите свои персональные данные.</div>
            </div>
            <div className={style.row}>
                <div>
                    <Label label={'Фамилия*'}>
                        <Input placeholder={'Васильев'}/>
                    </Label>
                </div>
                <div>
                    <Label label={'Имя*'}>
                        <Input placeholder={'Иван'}/>
                    </Label>
                </div>
            </div>
            <div className={style.row}>
                <div>
                    <Label label={'Отчество*'}>
                        <Input placeholder={'Отчество'}/>
                    </Label>
                </div>
                <div>
                    <Label label={'Основной город*'}>
                        <Select options={CITY_DATA}/>
                    </Label>
                </div>
            </div>
            <div className={style.row}>
                <Label label={'Гражданство*'}>
                    <Select options={COUNTRY}/>
                </Label>
                <div>
                    Пол
                </div>
                <div>
                    Дата рождения
                </div>
            </div>
            <div className={style.row}>
                <Label label={'Место рождения (как указано в паспорте)*'}>
                    <Input placeholder={'Введите наименование региона и населенного пункта'}/>
                </Label>
            </div>
            <div className={style.form_buttons}>
                <Button className={style.button} color={'white'}>Отмена</Button>
                <Button className={style.button}>Далее</Button>
            </div>
        </div>
    );
};

export default CommonPage;