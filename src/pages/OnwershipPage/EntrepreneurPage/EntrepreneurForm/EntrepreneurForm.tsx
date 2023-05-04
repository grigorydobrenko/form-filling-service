import React from 'react';
import {Label} from "../../../../components/Label/Label";
import {Select} from "../../../../components/Select/Select";
import {Option} from "../../../../components/Select/Select.props";
import style from './EntrepreneurForm.module.scss'
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";
import InputDropzone from "../../../../components/Dropzone/Dropzone";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../app/hooks";
import {Button} from "../../../../components/Button/Button";
import cn from "classnames";

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'Индивидуальный предприниматель (ИП)'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'Общество с ограниченной ответственностью (ООО)'},
];

export interface EntrepreneurData {
    ipn: string,
    mask: string
}

const EntrepreneurForm = () => {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm<EntrepreneurData>();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<EntrepreneurData> = data => {
        console.log(data)
    }
    console.log(register('ipn'))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.row}>
                <Label label={'Вид деятельности*'} className={style.first_row}>
                    <Select options={OWNERSHIP}/>
                </Label>
            </div>
            <div className={cn(style.row, style.second_row)}>
                <Label label={'ИНН*'} className={style.row_inner}>
                    <InputWithMask mask='99999999' maskPlaceholder='х' placeholder={'xxxxxxxx'} {...register('mask')}/>
                </Label>
                <Label label={'Скан ИНН*'}>
                    <InputDropzone setValue={setValue}/>
                </Label>
                <Label label={'Датарегистрации*'} className={style.row_inner}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг' placeholder={'дд.мм.гггг'}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'ОГРНИП*'}>
                    <InputWithMask mask='9999999999' maskPlaceholder='х' placeholder={'ххххххххххххххх'}/>
                </Label>
                <Label label={'Скан ОГРНИП*'}>
                    <InputDropzone setValue={setValue}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Скан договора аренды помещения (офиса)'}>
                    <InputDropzone setValue={setValue}/>
                </Label>
                <Label label={'Скан выписки из ЕГРИП (не старше 3 месяцев)*'}>
                    <InputDropzone setValue={setValue}/>
                </Label>
            </div>
            <div>
                <label className={style.contract_row}>
                    <input type="checkbox" name="checkbox" value="value"/>
                    <span className={style.contract}>Нет договора</span>
                </label>
            </div>
            <div className={style.row}>
                <Button color={'white'}>Назад</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default EntrepreneurForm;