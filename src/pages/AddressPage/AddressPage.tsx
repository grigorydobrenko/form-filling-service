import React from 'react';
import globalStyles from "../../styles/Global.module.scss";
import {ReactComponent as Logo} from "../../assets/address.svg";
import StepDescription from "../../components/StepDescription/StepDescription";
import AddressPageForm from "./AddressPageForm/AddressPageForm";

const AddressPage = (): JSX.Element => {
    return (
        <div className={globalStyles.container}>
            <Logo/>
            <StepDescription title={'Адрес регистрации'} description={'Введите свой действуйющий адрес прописки.'}/>
            <AddressPageForm/>
        </div>
    );
};

export default AddressPage;