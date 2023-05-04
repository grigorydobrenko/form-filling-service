import React from 'react';
import {ReactComponent as Logo} from "../../../assets/ownership.svg";
import StepDescription from "../../../components/StepDescription/StepDescription";
import LLCForm from "./LLCForm/LLCForm";

import style from './LLCPage.module.scss'

const LlcPage = (): JSX.Element => {
    return (
        <div className={style.container}>
            <Logo/>
            <StepDescription title={'Форма собственности'}
                             description={'Выберите форму собственности и заполните данные'}/>
            <LLCForm/>
        </div>
    );
};

export default LlcPage;