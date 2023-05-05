import React from 'react';
import style from "../../OnwershipPage/EntrepreneurPage/EntrepreneurForm/EntrepreneurForm.module.scss";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";
import {COUNTRY, REGION} from "../../../constants/constants";

const AddressPageForm = () => {
    return (
        <form>
            <div className={style.row}>
                <Label label={'Страна*'} >
                    <Select options={COUNTRY}/>
                </Label>
                <Label label={'Регион*'} >
                    <Select options={REGION}/>
                </Label>
            </div>
            <div className={style.row}>

            </div>
            <div className={style.row}></div>
        </form>
    );
};

export default AddressPageForm;