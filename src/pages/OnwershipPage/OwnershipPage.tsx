import React from 'react';
import {ReactComponent as Logo} from "../../assets/phone_logo.svg";
import StepDescription from "../../components/StepDescription/StepDescription";
import {Label} from "../../components/Label/Label";
import {Select} from "../../components/Select/Select";
import style from "./Ownership.module.scss";
import globalStyles from '../../styles/Global.module.scss'
import {Button} from "../../components/Button/Button";
import {useAppSelector} from "../../app/hooks";
import {useSetOwnerShip} from "../../customHooks/useSetOwnerShip";
import {useSwitchStep} from "../../customHooks/useSwitchStep";
import {OWNERSHIP} from "../../constants/constants";

const OwnershipPage = (): JSX.Element => {

    const activity = useAppSelector(state => state.app.activity)

    const {setOwnerShip} = useSetOwnerShip()
    const {switchStep} = useSwitchStep()

    return (
        <div className={globalStyles.container}>
            <Logo/>
            <StepDescription title={'Форма собственности'}
                             description={'Выберите форму собственности и заполните данные'}/>
            <Label label={'Вид деятельности*'} className={globalStyles.activity_select}>
                <Select options={OWNERSHIP} onChangeOption={setOwnerShip} value={activity}/>
            </Label>
            <div className={style.buttons}>
                <Button color={'white'} onClick={() => switchStep(1)}>Назад</Button>
                <Button type={'submit'} onClick={() => switchStep(2.1)}>Далее</Button>
            </div>
        </div>
    );
};

export default OwnershipPage;