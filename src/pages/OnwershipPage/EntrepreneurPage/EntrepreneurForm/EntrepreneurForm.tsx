import React from 'react';
import {Label} from "../../../../components/Label/Label";
import {Select} from "../../../../components/Select/Select";
import style from './EntrepreneurForm.module.scss'
import globalStyle from '../../../../styles/Global.module.scss'
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";
import InputDropzone from "../../../../components/Dropzone/Dropzone";
import {Button} from "../../../../components/Button/Button";
import cn from "classnames";
import useOwnershipForm from "../../../../hooks/useOwnershipForm";
import {useSetOwnerShip} from "../../../../hooks/useSetOwnerShip";
import {useAppSelector} from "../../../../app/hooks";
import {useSwitchStep} from "../../../../hooks/useSwitchStep";
import {OWNERSHIP} from "../../../../constants/constants";

const EntrepreneurForm = (): JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        clearErrors,
        setValue,
        onSubmit,
        numMaskValidationScheme,
        dateMaskValidationScheme,
    } = useOwnershipForm()

    const {setOwnerShip} = useSetOwnerShip()
    const {switchStep} = useSwitchStep()

    const activity = useAppSelector(state => state.app.activity)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.row}>
                <Label label={'Вид деятельности*'} className={globalStyle.activity_select}>
                    <Select options={OWNERSHIP} onChangeOption={setOwnerShip} value={activity}/>
                </Label>
            </div>
            <div className={cn(style.row, style.second_row)}>
                <Label label={'ИНН*'} className={style.row_inner}>
                    <InputWithMask mask='99999999' maskPlaceholder='х'
                                   placeholder={'xxxxxxxx'} {...register('inn', numMaskValidationScheme)}/>
                    {errors.inn && <span className={style.red}>{errors.inn.message}</span>}
                </Label>
                <Label label={'Скан ИНН*'}>
                    <InputDropzone setValue={setValue} name={'innImg'} setError={setError} clearErrors={clearErrors}/>
                    {errors.innImg && <span className={style.red}>{errors.innImg.message}</span>}
                </Label>
                <Label label={'Дата регистрации*'} className={style.row_inner}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'} {...register('registrationDate', dateMaskValidationScheme)}/>
                    {errors.registrationDate && <span className={style.red}>{errors.registrationDate.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'ОГРНИП*'}>
                    <InputWithMask mask='999999999999999' maskPlaceholder='х'
                                   placeholder={'ххххххххххххххх'} {...register('ogrnip', numMaskValidationScheme)}/>
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
                <Button color={'white'} onClick={() => switchStep(2)}>Назад</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default EntrepreneurForm;