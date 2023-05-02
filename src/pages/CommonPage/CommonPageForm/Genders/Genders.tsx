import React from 'react';
import style from "../../CommonPage.module.scss";
import {Button} from "../../../../components/Button/Button";
import cn from "classnames";
import {ReactComponent as Man} from "../../../../assets/m.svg";
import {ReactComponent as Woman} from "../../../../assets/f.svg";

const Genders: React.FC<Props> = ({setGender, gender}) => {
    return (
        <div className={style.buttons_container}>
            <Button color={'white'}
                    className={cn(style.gender_btn, {[style.gender_btn_active]: gender === 'male'})}
                    onClick={() => setGender('male')}>
                <div className={cn(style.inner, {[style.inner_active]: gender === 'male'})}>
                    <Man/><span>М</span>
                </div>
            </Button>
            <Button color={'white'}
                    className={cn(style.gender_btn, {[style.gender_btn_active]: gender === 'female'})}
                    onClick={() => setGender('female')}>
                <div className={cn(style.inner, {[style.inner_active]: gender === 'female'})}>
                    <Woman/><span>Ж</span>
                </div>
            </Button>
        </div>
    );
};

export default Genders;

type Props = {
    setGender: (gender: string) => void,
    gender: string
}