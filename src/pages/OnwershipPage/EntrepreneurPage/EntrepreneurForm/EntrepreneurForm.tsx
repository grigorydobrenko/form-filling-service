import React from 'react';
import {Label} from "../../../../components/Label/Label";
import {Select} from "../../../../components/Select/Select";
import style from './EntrepreneurForm.module.scss'
import globalStyle from '../../../../styles/Global.module.scss'
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";
import InputDropzone from "../../../../components/Dropzone/Dropzone";
import {Button} from "../../../../components/Button/Button";
import cn from "classnames";
import useOwnershipForm from "../../../../customHooks/useOwnershipForm";
import {useSetOwnerShip} from "../../../../customHooks/useSetOwnerShip";
import {useAppSelector} from "../../../../app/hooks";
import {useSwitchStep} from "../../../../customHooks/useSwitchStep";
import {DATE_MASK_VALIDATION_SCHEME, OWNERSHIP} from "../../../../constants/constants";
import {OwnershipData} from "../../../../store/reducers/dataSlice";

const EntrepreneurForm = (): JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitted},
        setError,
        clearErrors,
        setValue,
        onSubmit,
        numMaskValidationScheme,
        getValues
    } = useOwnershipForm()

    const {setOwnerShip} = useSetOwnerShip()
    const {switchStep} = useSwitchStep()

    const activity = useAppSelector(state => state.app.activity)

    const customSubmit = (data: OwnershipData) => {
        const innImg = getValues('innImg')
        const ogrnipImg = getValues('ogrnipImg')
        const loanImg = getValues('loanImg')
        const excerptImg = getValues('excerptImg')

        if (innImg && ogrnipImg && loanImg && excerptImg) {
            onSubmit(data)
        }
    }

    return (
        <form onSubmit={handleSubmit(() => customSubmit(getValues()))}>
            <div className={style.row}>
                <Label label={'Вид деятельности*'} className={globalStyle.activity_select}>
                    <Select options={OWNERSHIP} onChangeOption={setOwnerShip} value={activity}/>
                </Label>
            </div>
            <div className={cn(style.row, style.second_row)}>
                <Label label={'ИНН*'} className={style.row_inner}>
                    <InputWithMask mask='9999999999' maskPlaceholder='х'
                                   placeholder={'xxxxxxxxxx'} {...register('inn', numMaskValidationScheme)}/>
                    {errors.inn && <span className={style.red}>{errors.inn.message}</span>}
                </Label>
                <Label label={'Скан ИНН*'}>
                    <InputDropzone setValue={setValue} name={'innImg'} setError={setError} clearErrors={clearErrors}
                                   isSubmitted={isSubmitted}/>
                    {errors.innImg && <span className={style.red}>{errors.innImg.message}</span>}
                </Label>
                <Label label={'Дата регистрации*'} className={style.row_inner}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'} {...register('registrationDate', DATE_MASK_VALIDATION_SCHEME)}/>
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
                                   clearErrors={clearErrors} isSubmitted={isSubmitted}/>
                    {errors.ogrnipImg && <span className={style.red}>{errors.ogrnipImg.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Скан договора аренды помещения (офиса)'}>
                    <InputDropzone setValue={setValue} name={'loanImg'} setError={setError}
                                   clearErrors={clearErrors} isSubmitted={isSubmitted}/>
                    {errors.loanImg && <span className={style.red}>{errors.loanImg.message}</span>}
                </Label>
                <Label label={'Скан выписки из ЕГРИП (не старше 3 месяцев)*'}>
                    <InputDropzone setValue={setValue} name={'excerptImg'} setError={setError}
                                   clearErrors={clearErrors} isSubmitted={isSubmitted}/>
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