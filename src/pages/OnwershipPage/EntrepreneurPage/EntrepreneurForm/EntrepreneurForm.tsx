import React from 'react';
import {Label} from "../../../../components/Label/Label";
import {Select} from "../../../../components/Select/Select";
import {Option} from "../../../../components/Select/Select.props";
import style from './EntrepreneurForm.module.scss'
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";
import InputDropzone from "../../../../components/Dropzone/Dropzone";
import {Button} from "../../../../components/Button/Button";
import cn from "classnames";
import {switchStep} from "../../../../utils/switchStep";
import useOwnershipForm from "../../../../hooks/useOwnershipForm";

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'Индивидуальный предприниматель (ИП)'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'Общество с ограниченной ответственностью (ООО)'},
];

const EntrepreneurForm = (): JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        clearErrors,
        setValue,
        onSubmit,
        validationScheme,
        dispatch
    } = useOwnershipForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.row}>
                <Label label={'Вид деятельности*'} className={style.first_row}>
                    <Select options={OWNERSHIP}/>
                </Label>
            </div>
            <div className={cn(style.row, style.second_row)}>
                <Label label={'ИНН*'} className={style.row_inner}>
                    <InputWithMask mask='99999999' maskPlaceholder='х'
                                   placeholder={'xxxxxxxx'} {...register('inn', validationScheme)}/>
                    {errors.inn && <span className={style.red}>{errors.inn.message}</span>}
                </Label>
                <Label label={'Скан ИНН*'}>
                    <InputDropzone setValue={setValue} name={'innImg'} setError={setError} clearErrors={clearErrors}/>
                    {errors.innImg && <span className={style.red}>{errors.innImg.message}</span>}
                </Label>
                <Label label={'Дата регистрации*'} className={style.row_inner}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'} {...register('registrationDate', validationScheme)}/>
                    {errors.registrationDate && <span className={style.red}>{errors.registrationDate.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'ОГРНИП*'}>
                    <InputWithMask mask='999999999999999' maskPlaceholder='х'
                                   placeholder={'ххххххххххххххх'} {...register('ogrnip', validationScheme)}/>
                    {errors.ogrnip && <span className={style.red}>{errors.ogrnip.message}</span>}
                </Label>
                <Label label={'Скан ОГРНИП*'}>
                    <InputDropzone setValue={setValue} name={'ogrnipImg'} setError={setError}
                                   clearErrors={clearErrors}/>
                    {errors.ogrnipImg && <span className={style.red}>{errors.ogrnipImg.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Скан договора аренды помещения (офиса)'}>
                    <InputDropzone setValue={setValue} name={'loanImg'}/>
                </Label>
                <Label label={'Скан выписки из ЕГРИП (не старше 3 месяцев)*'}>
                    <InputDropzone setValue={setValue} name={'excerptImg'} setError={setError}
                                   clearErrors={clearErrors}/>
                    {errors.excerptImg && <span className={style.red}>{errors.excerptImg.message}</span>}
                </Label>
            </div>
            <div>
                <label className={style.contract_row}>
                    <input type="checkbox" value="value" {...register('contract')}/>
                    <span className={style.contract}>Нет договора</span>
                </label>
            </div>
            <div className={style.row}>
                <Button color={'white'} onClick={() => switchStep(2, dispatch)}>Назад</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default EntrepreneurForm;