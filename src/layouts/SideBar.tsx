import React, {useState} from 'react';
import style from './SideBar.module.scss';
import Step from "../components/step/Step";

const SideBar = () => {

    const [step, setStep] = useState(1)

    const changeStep = (step: number) => {
        setStep(step)
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h4 className={style.header_title}>Создание аккаунта</h4>
                <div className={style.header_description}>Заполните все пункты данной формы и нажмите кнопку
                    «Сохранить».
                </div>
            </div>
            <div className={style.steps}>
                <Step stepId={1} step={step} changeStep={changeStep} title={'Общие'}/>
                <Step stepId={2} step={step} changeStep={changeStep} title={'Форма собственности'}/>
                <Step stepId={3} step={step} changeStep={changeStep} title={'Адрес регистрации'}/>
                <Step stepId={4} step={step} changeStep={changeStep} title={'Адрес проживания'}/>
                <Step stepId={5} step={step} changeStep={changeStep} title={'Социальные сети'}/>
            </div>
        </div>
    );
};

export default SideBar;