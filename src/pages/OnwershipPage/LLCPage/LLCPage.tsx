import React from 'react';
import {ReactComponent as Logo} from "../../../assets/ownership.svg";
import StepDescription from "../../../components/StepDescription/StepDescription";
import LLCForm from "./LLCForm/LLCForm";

import globalStyles from './../../../styles/Global.module.scss'

const LlcPage = (): JSX.Element => {
    return (
        <div className={globalStyles.container}>
            <Logo/>
            <StepDescription title={'Форма собственности'}
                             description={'Выберите форму собственности и заполните данные'}/>
            <LLCForm/>
        </div>
    );
};

export default LlcPage;