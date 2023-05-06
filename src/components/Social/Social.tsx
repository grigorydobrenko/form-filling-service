import React, {useState} from 'react';
import {Label} from "../Label/Label";
import style from "./Social.module.scss";
import {Select} from "../Select/Select";
import {Input} from "../Input/Input";
import {SOCIALS} from "../../constants/constants";

const Social = (): JSX.Element => {

    const [placeholder, setPlaceholder] = useState('vk.com/example')

    const callBack = (value: string) => {
        setPlaceholder(value)
    }

    return (
        <Label label={'Сайт / Приложение*'}>
            <div className={style.social_picker}>
                <Select options={SOCIALS} className={style.select_social} onChangeOption={callBack}/>
                <Input closeButton={true} className={style.input_social} placeholder={placeholder}/>
            </div>
        </Label>
    );
};

export default Social;