import React from 'react';
import {ReactComponent as Logo} from "../../assets/socials.svg";
import StepDescription from "../../components/StepDescription/StepDescription";
import globalStyles from '../../styles/Global.module.scss'
import SocialsForm from "./SocialsForm/SocialsForm";

const SocialsPage = () => {
    return (
        <div className={globalStyles.container}>
            <Logo/>
            <StepDescription title={'Социальные сети'} description={'Введите свои действуйющие ссылки на социальные сети и количество подписчиков.'}/>
            <SocialsForm/>
        </div>
    );
};

export default SocialsPage;