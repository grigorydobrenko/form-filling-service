import React from 'react';
import {ReactComponent as Logo} from "../../assets/phone_logo.svg";
import StepDescription from "../../components/StepDescription/StepDescription";
import {Label} from "../../components/Label/Label";
import {Select} from "../../components/Select/Select";
import {Option} from "../../components/Select/Select.props";
import style from "./Ownership.module.scss";
import {Button} from "../../components/Button/Button";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {switchStep} from "../../utils/switchStep";
import {useSetOwnerShip} from "../../hooks/useSetOwnerShip";

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'entrepreneur'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'LLC'},
];

const OwnershipPage = (): JSX.Element => {

    const dispatch = useAppDispatch()
    const activity = useAppSelector(state => state.app.activity)

    const {setOwnerShip} = useSetOwnerShip()

    return (
        <div className={style.container}>
            <Logo/>
            <StepDescription title={'Форма собственности'}
                             description={'Выберите форму собственности и заполните данные'}/>
            <Label label={'Вид деятельности*'}>
                <Select options={OWNERSHIP} onChangeOption={setOwnerShip} value={activity}/>
            </Label>
            <div className={style.buttons}>
                <Button color={'white'} onClick={() => switchStep(1, dispatch)}>Назад</Button>
                <Button type={'submit'} onClick={() => switchStep(2.1, dispatch)}>Далее</Button>
            </div>
        </div>
    );
};

export default OwnershipPage;