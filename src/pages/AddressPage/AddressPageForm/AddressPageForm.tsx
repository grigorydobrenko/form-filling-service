import React, {useEffect, useState} from 'react';
import style from "../../OnwershipPage/EntrepreneurPage/EntrepreneurForm/EntrepreneurForm.module.scss";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";

import {Option} from "../../../components/Select/Select.props";
import {BELARUSIAN_REGIONS, COUNTRY, KAZAKHSTAN_REGIONS, RUSSIAN_REGIONS} from "../../../constants/constants";

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

            </div>
            <div className={style.row}></div>
        </form>
    );
};

export default AddressPageForm;