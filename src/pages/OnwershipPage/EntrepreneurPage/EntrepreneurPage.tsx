import React from 'react';
import style from "../Ownership.module.scss";

import {ReactComponent as Logo} from "../../../assets/ownership.svg";
import StepDescription from "../../../components/StepDescription/StepDescription";
import EntrepreneurForm from "./EntrepreneurForm/EntrepreneurForm";

const EntrepreneurPage = () => {
    return (
        <div className={style.container}>
            <Logo/>
            <StepDescription title={'Форма собственности'} description={'Выберите форму собственности и заполните данные'}/>
            <EntrepreneurForm/>
        </div>
    );
};

export default EntrepreneurPage;