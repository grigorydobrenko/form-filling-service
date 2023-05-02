import React from 'react';
import {ReactComponent as Logo} from "../../assets/user.svg";

import style from './CommonPage.module.scss'
import StepDescription from "../../components/StepDescription/StepDescription";
import CommonPageForm from "./CommonPageForm/CommonPageForm";

const CommonPage = (): JSX.Element => {

    return (
        <div className={style.container}>
            <Logo/>
            <StepDescription title={'Общие'} description={'Введите свои персональные данные.'}/>
            <CommonPageForm/>
        </div>
    );
};

export default CommonPage;