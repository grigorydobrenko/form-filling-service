import React from 'react';
import {ReactComponent as Logo} from "../../assets/phone_logo.svg";
import StepDescription from "../../components/StepDescription/StepDescription";
import {Label} from "../../components/Label/Label";
import {Select} from "../../components/Select/Select";
import {Option} from "../../components/Select/Select.props";
import style from "./Ownership.module.scss";
import {Button} from "../../components/Button/Button";
import {useAppDispatch} from "../../app/hooks";
import {ActivityType, setOwnership, setStep, StepType} from "../../store/reducers/appSlice";

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'Индивидуальный предприниматель (ИП)'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'Общество с ограниченной ответственностью (ООО)'},
];

const OwnershipPage = () => {

    const dispatch = useAppDispatch()

    const setOwnerShip = (activity: ActivityType) => {
        dispatch(setOwnership({activity}))
    }

    const switchStep = (step: StepType) => {
        dispatch(setStep({currentStep: step}))
    }

    return (
        <div className={style.container}>
            <Logo/>
            <StepDescription title={'Форма собственности'} description={'Выберите форму собственности и заполните данные'}/>
            <Label label={'Вид деятельности*'}>
                <Select options={OWNERSHIP} onChangeOption={setOwnerShip}/>
            </Label>
            <div className={style.buttons}>
                <Button color={'white'} onClick={() => switchStep(1)}>Назад</Button>
                <Button type={'submit'} onClick={() => switchStep(2.1)}>Далее</Button>
            </div>
        </div>
    );
};

export default OwnershipPage;