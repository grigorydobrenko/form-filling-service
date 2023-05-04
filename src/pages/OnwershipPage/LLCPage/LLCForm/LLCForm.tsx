import React from 'react';
import {Label} from "../../../../components/Label/Label";
import style from "../../EntrepreneurPage/EntrepreneurForm/EntrepreneurForm.module.scss";
import {Select} from "../../../../components/Select/Select";
import {Input} from "../../../../components/Input/Input";
import {InputWithMask} from "../../../../components/InputWithMask/InputWithMask";
import {Button} from "../../../../components/Button/Button";
import useOwnershipForm from "../../../../hooks/useOwnershipForm";
import {useSetOwnerShip} from "../../../../hooks/useSetOwnerShip";
import {OWNERSHIP} from "../../OwnershipPage";

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
        dispatch
    } = useOwnershipForm()

    const {setOwnerShip} = useSetOwnerShip()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.row}>
                <Label label={'Вид деятельности*'}>
                    <Select options={OWNERSHIP} onChangeOption={setOwnerShip}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Наименование полное*'}>
                    <Input
                        placeholder={'ООО «Московская промышленная компания»'}
                    />
                    {errors.name && <span className={style.red}>{errors.name.message}</span>}
                </Label>
                <Label label={'Сокращение*'}>
                    <Input
                        placeholder={'ООО «МПК»'}
                        {...register('shortName', validationScheme)}
                    />
                    {errors.shortName && <span className={style.red}>{errors.shortName.message}</span>}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Дата регистрации*'} className={style.row_inner}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'}/>
                    {/*{errors.registrationDate && <span className={style.red}>{errors.registrationDate.message}</span>}*/}
                </Label>
                <Label label={'ИНН*'} className={style.row_inner}>
                    <InputWithMask mask='99999999' maskPlaceholder='х'
                                   placeholder={'xxxxxxxx'}
                    />
                    {/*{errors.inn && <span className={style.red}>{errors.inn.message}</span>}*/}
                </Label>
                <Label label={'Скан ИНН*'}>
                    {/*<InputDropzone*/}
                    {/*    // setValue={setValue} name={'innImg'} setError={setError} clearErrors={clearErrors}*/}
                    {/*/>*/}
                    {/*{errors.innImg && <span className={style.red}>{errors.innImg.message}</span>}*/}
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'ОГРН*'}>
                    <InputWithMask mask='999999999999999' maskPlaceholder='х'
                                   placeholder={'ххххххххххххххх'}
                    />
                    {/*{errors.ogrnip && <span className={style.red}>{errors.ogrnip.message}</span>}*/}
                </Label>

            </div>
            <div className={style.row}>
                <Button color={'white'}>Назад</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default LlCForm;