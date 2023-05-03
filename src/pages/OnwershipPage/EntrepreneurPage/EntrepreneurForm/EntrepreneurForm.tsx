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

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'Индивидуальный предприниматель (ИП)'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'Общество с ограниченной ответственностью (ООО)'},
];

interface EntrepreneurData {
    ipn: 'string'
}

const EntrepreneurForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<EntrepreneurData>();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<EntrepreneurData> = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <InputDropzone {...register("ipn")}/>
                </Label>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div>
                <Button color={'white'}>Отмена</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default EntrepreneurForm;