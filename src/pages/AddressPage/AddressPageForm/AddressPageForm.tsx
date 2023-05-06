import React, {FC, useEffect, useState} from 'react';
import style from "../../OnwershipPage/EntrepreneurPage/EntrepreneurForm/EntrepreneurForm.module.scss";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";

import {Option} from "../../../components/Select/Select.props";
import {
    BASIC_VALIDATION_SCHEME,
    BELARUSIAN_REGIONS,
    COUNTRY,
    DATE_MASK_VALIDATION_SCHEME,
    KAZAKHSTAN_REGIONS,
    RUSSIAN_REGIONS
} from "../../../constants/constants";
import {Input} from "../../../components/Input/Input";
import styles from "./AddressPageForm.module.scss"
import {InputWithMask} from "../../../components/InputWithMask/InputWithMask";
import {SubmitHandler, useForm} from "react-hook-form";
import {RegistrationAddress, setLivingData, setRegistrationData} from "../../../store/reducers/dataSlice";
import {useAppDispatch} from "../../../app/hooks";
import {setStep} from "../../../store/reducers/appSlice";
import globalStyles from "../../../styles/Global.module.scss";
import {Button} from "../../../components/Button/Button";
import {useSwitchStep} from "../../../hooks/useSwitchStep";

const AddressPageForm: FC<Props> = ({isLivingAddress}) => {

    const [country, setCountry] = useState<string>('');
    const [region, setRegion] = useState<Option[]>(RUSSIAN_REGIONS);

    const [hasApartment, setHasApartment] = useState<boolean>(false)

    const {register, handleSubmit, formState: {errors}} = useForm<RegistrationAddress>()

    const dispatch = useAppDispatch()

    const {switchStep} = useSwitchStep()

    const onSubmit: SubmitHandler<RegistrationAddress> = data => {
        dispatch(setRegistrationData({registrationData: data}))
        dispatch(setStep({currentStep: 4}))
    }

    const onBack = () => {
        if (isLivingAddress) {
            switchStep(3)
        } else {
            switchStep(2.1)
        }
    }

    const onNext = () => {
        dispatch(setStep({currentStep: 5}))
        dispatch(setLivingData())
    }

    const apartmentValidation = {
        required: 'Обязат...'
    }

    useEffect(() => {
        if (country === 'Россия') {
            setRegion(RUSSIAN_REGIONS)
        }
        if (country === 'Беларусь') {
            setRegion(BELARUSIAN_REGIONS)
        }
        if (country === 'Казахстан') {
            setRegion(KAZAKHSTAN_REGIONS)
        }

    }, [country])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {isLivingAddress && <div className={style.row}>
                <label className={styles.living_address}>
                    <input type="checkbox" onChange={onNext} checked={false}/>
                    <span className={styles.condition_text}>Адрес регистрации и фактического проживания совпадают</span>
                </label>
            </div>}
            <div className={style.row}>
                <Label label={'Страна*'}>
                    <Select options={COUNTRY} onChangeOption={setCountry} {...register("country")}/>
                </Label>
                <Label label={'Регион*'}>
                    <Select options={region} {...register("region")}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Город / Населенный пункт*'}>
                    <Input placeholder={'Введите населенный пункт'} {...register("city", BASIC_VALIDATION_SCHEME)}/>
                    {errors.city && <span className={globalStyles.red}>{errors.city.message}</span>}
                </Label>
                <Label label={'Улица*'}>
                    <Input placeholder={'Введите улицу'} {...register("street", BASIC_VALIDATION_SCHEME)}/>
                    {errors.street && <span className={globalStyles.red}>{errors.street.message}</span>}
                </Label>
            </div>
            <div className={styles.row}>
                <Label label={'Дом*'} className={styles.apartment}>
                    <Input placeholder={'0'} type={'number'} {...register("home", apartmentValidation)}/>
                    {errors.home && <span className={globalStyles.red}>{errors.home.message}</span>}
                </Label>
                <Label label={'Квартира*'} className={styles.apartment}>
                    <Input placeholder={'0'} type={'number'} {...register("apartment", apartmentValidation)}
                           disabled={hasApartment}/>
                    {!hasApartment && errors.apartment &&
                        <span className={globalStyles.red}>{errors.apartment.message}</span>}
                </Label>
                <label className={styles.apartment_row}>
                    <input type="checkbox" checked={hasApartment} onChange={() => setHasApartment(!hasApartment)}/>
                    <span className={styles.text}>Нет квартиры</span>
                </label>
                <Label label={'Дата регистрации*'} className={styles.date_registration}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'} {...register("addressRegistrationDate", DATE_MASK_VALIDATION_SCHEME
                    )}/>
                    {errors.addressRegistrationDate &&
                        <span className={globalStyles.red}>{errors.addressRegistrationDate.message}</span>}
                </Label>
            </div>
            <div className={styles.registration_buttons}>
                <Button color={'white'} onClick={onBack}>Назад</Button>
                <Button type={'submit'}>Далее</Button>
            </div>
        </form>
    );
};

export default AddressPageForm;

type Props = {
    isLivingAddress: boolean
}
