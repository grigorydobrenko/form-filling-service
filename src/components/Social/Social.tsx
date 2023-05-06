import React, {useState} from 'react';
import {Label} from "../Label/Label";
import style from "./Social.module.scss";
import {Select} from "../Select/Select";
import {Input} from "../Input/Input";
import {BASIC_VALIDATION_SCHEME, SOCIALS} from "../../constants/constants";
import {UseFormRegister} from "react-hook-form/dist/types/form";
import {FieldValues} from "react-hook-form";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import globalStyles from "../../styles/Global.module.scss";

const Social: React.FC<Props> = ({register, errors}) => {

    const [placeholder, setPlaceholder] = useState('vk')

    const callBack = (value: string) => {
        setPlaceholder(value)
    }

    return (
        <Label label={'Сайт / Приложение*'}>
            <div className={style.social_picker}>
                <Select options={SOCIALS} className={style.select_social} onChangeOption={callBack}/>
                <Input closeButton={true} className={style.input_social}
                       placeholder={placeholder} {...register(placeholder, BASIC_VALIDATION_SCHEME)}/>
                {errors.placeholder && <span className={globalStyles.red}>Обязательное поле</span>}
            </div>
        </Label>
    );
};

export default Social;

type Props = {
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
}