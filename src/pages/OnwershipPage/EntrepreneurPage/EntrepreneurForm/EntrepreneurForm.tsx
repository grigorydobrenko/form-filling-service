import React from 'react';
import {Label} from "../../../../components/Label/Label";
import {Select} from "../../../../components/Select/Select";
import {Option} from "../../../../components/Select/Select.props";
import style from './EntrepreneurForm.module.scss'
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'Индивидуальный предприниматель (ИП)'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'Общество с ограниченной ответственностью (ООО)'},
];

const EntrepreneurForm = () => {
    return (
        <form>
            <div className={style.row}>
                <Label label={'Вид деятельности*'} className={style.first_row}>
                    <Select options={OWNERSHIP}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'ИНН*'}>
                    <InputWithMask mask="99999999" maskPlaceholder="х" placeholder={"xxxxxxxx"}/>
                </Label>
                <Label label={'Скан ИНН*'}>
                </Label>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </form>
    );
};

export default EntrepreneurForm;