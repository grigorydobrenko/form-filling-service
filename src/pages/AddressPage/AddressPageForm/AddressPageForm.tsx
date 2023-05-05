import React, {useEffect, useState} from 'react';
import style from "../../OnwershipPage/EntrepreneurPage/EntrepreneurForm/EntrepreneurForm.module.scss";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";

import {Option} from "../../../components/Select/Select.props";
import {BELARUSIAN_REGIONS, COUNTRY, KAZAKHSTAN_REGIONS, RUSSIAN_REGIONS} from "../../../constants/constants";
import {Input} from "../../../components/Input/Input";
import styles from "./AddressPageForm.module.scss"
import {InputWithMask} from "../../../components/InputWithMask/InputWithMask";

const AddressPageForm = () => {

    const [country, setCountry] = useState<string>('');
    const [region, setRegion] = useState<Option[]>(RUSSIAN_REGIONS);

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
        <form>
            <div className={style.row}>
                <Label label={'Страна*'}>
                    <Select options={COUNTRY} onChangeOption={setCountry}/>
                </Label>
                <Label label={'Регион*'}>
                    <Select options={region}/>
                </Label>
            </div>
            <div className={style.row}>
                <Label label={'Город / Населенный пункт*'}>
                    <Input placeholder={'Введите населенный пункт'}/>
                </Label>
                <Label label={'Улица*'}>
                    <Input placeholder={'Введите улицу'}/>
                </Label>
            </div>
            <div className={styles.row}>
                <Label label={'Дом*'} className={styles.apartment}>
                    <Input placeholder={'0'} type={'number'}/>
                </Label>
                <Label label={'Квартира*'} className={styles.apartment}>
                    <Input placeholder={'0'} type={'number'}/>
                </Label>
                <label className={styles.apartment_row}>
                    <input type="checkbox" value="value"/>
                    <span className={styles.apartment}>Нет квартиры</span>
                </label>
                <Label label={'Дата регистрации*'} className={styles.date_registration}>
                    <InputWithMask mask='99.99.9999' maskPlaceholder='дд.мм.гггг'
                                   placeholder={'дд.мм.гггг'}/>
                </Label>
            </div>
        </form>
    );
};

export default AddressPageForm;