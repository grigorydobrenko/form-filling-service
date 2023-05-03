import React from 'react';
import style from './SideBar.module.scss';
import Step from "../../components/Step/Step";
import {useAppSelector} from "../../app/hooks";

const SideBar = () => {

    const step = useAppSelector(state => state.app.step)

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h4 className={style.header_title}>Создание аккаунта</h4>
                <div className={style.header_description}>Заполните все пункты данной формы и нажмите кнопку
                    «Сохранить».
                </div>
            </div>
            <div className={style.steps}>
                <Step stepId={1} step={step} isDone={step > 1} title={'Общие'}/>
                <Step stepId={2} step={step === 2.1 ? 2 : step} isDone={step !== 2.1 && step > 2} title={'Форма собственности'}/>
                <Step stepId={3} step={step} isDone={step > 3} title={'Адрес регистрации'}/>
                <Step stepId={4} step={step} isDone={step > 4} title={'Адрес проживания'}/>
                <Step stepId={5} step={step} isDone={step > 5} title={'Социальные сети'}/>
            </div>
        </div>
    );
};

export default SideBar;