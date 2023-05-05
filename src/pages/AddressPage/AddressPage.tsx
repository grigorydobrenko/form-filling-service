import React from 'react';
import globalStyles from "../../styles/Global.module.scss";
import {ReactComponent as Logo} from "../../assets/address.svg";
import StepDescription from "../../components/StepDescription/StepDescription";
import AddressPageForm from "./AddressPageForm/AddressPageForm";
import {useAppSelector} from "../../app/hooks";

const AddressPage: React.FC<Props> = () => {

    const step = useAppSelector(state => state.app.step)

    return (
        <div className={globalStyles.container}>
            <Logo/>
            <StepDescription title={step === 4 ? 'Адрес проживания' : 'Адрес регистрации'}
                             description={step === 4 ? 'Введите свой действуйющий адрес проживания.' : 'Введите свой действуйющий адрес прописки.'}/>
            <AddressPageForm isLivingAddress={step === 4}/>
        </div>
    );
};

export default AddressPage;

type Props = {
    isLivingAddress: boolean
}