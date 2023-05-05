import React from 'react';
import {Label} from "../Label/Label";
import style from "./Social.module.scss";
import {Select} from "../Select/Select";
import {Input} from "../Input/Input";
import {SOCIALS} from "../../constants/constants";

const Social = (): JSX.Element => {
    return (
        <Label label={'Сайт / Приложение*'}>
            <div className={style.social_picker}>
                <Select options={SOCIALS} className={style.select_social}/>
                <Input closeButton={true} className={style.input_social} placeholder={'social.com/example'}/>
            </div>
        </Label>
    );
};

export default Social;