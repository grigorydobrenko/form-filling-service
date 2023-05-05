import React, {useEffect} from 'react';
import {Label} from "../../../../components/Label/Label";
import style from "./LLCForm.module.scss";
import globalStyles from "./../../../../styles/Global.module.scss";
import {Select} from "../../../../components/Select/Select";
import {Input} from "../../../../components/Input/Input";
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";
import {Button} from "../../../../components/Button/Button";
import useOwnershipForm from "../../../../hooks/useOwnershipForm";
import {useSetOwnerShip} from "../../../../hooks/useSetOwnerShip";
import {useAppSelector} from "../../../../app/hooks";
import InputDropzone from "../../../../components/Dropzone/Dropzone";
import {useSwitchStep} from "../../../../hooks/useSwitchStep";
import globalStyle from "../../../../styles/Global.module.scss";
import {OWNERSHIP} from "../../../../constants/constants";
import {fetchOrganizationInfo} from "../../../../services/fetchOrganizationInfo";

const LlCForm = (): JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        clearErrors,
        setValue,
        onSubmit,
        validationScheme,
        numMaskValidationScheme,
        dateMaskValidationScheme,
    } = useOwnershipForm()

    const {setOwnerShip} = useSetOwnerShip()
    const {switchStep} = useSwitchStep()

    const activity = useAppSelector(state => state.app.activity)

    useEffect(() => {
        fetchOrganizationInfo.getFieldsInfo()
    },[])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.row}>
                <Label label={'Вид деятельности*'} className={globalStyle.activity_select}>
                    <Select options={OWNERSHIP} onChangeOption={setOwnerShip} value={activity}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Наименование полное*'}>
                    <Input
                        placeholder={'ООО «Московская промышленная компания»'}
                        {...register("name", validationScheme)}
                    />
                    {errors.name && <span className={globalStyles.red}>{errors.name.message}</span>}
                </Label>
                <Label label={'Сокращение*'}>
                    <Input
                        placeholder={'ООО «МПК»'}
                        {...register('shortName', validationScheme)}
                    />
                    {errors.shortName && <span className={globalStyles.red}>{errors.shortName.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Дата регистрации*'} className={style.row_inner}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'}
                                   {...register('registrationDate', dateMaskValidationScheme)}
                    />
                    {errors.registrationDate &&
                        <span className={globalStyles.red}>{errors.registrationDate.message}</span>}
                </Label>
                <Label label={'ИНН*'} className={style.row_inner}>
                    <InputWithMask mask='9999999999' maskPlaceholder='х'
                                   placeholder={'xxxxxxxxxx'}
                                   {...register('inn', numMaskValidationScheme)}
                    />
                    {errors.inn && <span className={globalStyles.red}>{errors.inn.message}</span>}
                </Label>
                <Label label={'Скан ИНН*'}>
                    <InputDropzone
                        setValue={setValue} name={'innImg'} setError={setError} clearErrors={clearErrors}
                    />
                    {errors.innImg && <span className={globalStyles.red}>{errors.innImg.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'ОГРН*'}>
                    <InputWithMask mask='999999999999999' maskPlaceholder='х'
                                   placeholder={'ххххххххххххххх'}
                                   {...register('ogrnip', numMaskValidationScheme)}
                    />
                    {errors.ogrnip && <span className={globalStyles.red}>{errors.ogrnip.message}</span>}
                </Label>
            </div>
            <div className={style.llc_buttons}>
                <Button color={'white'} onClick={() => switchStep(2)}>Назад</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default LlCForm;