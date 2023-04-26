import React, {useState} from 'react';
import style from './SideBar.module.scss';

import cn from "classnames";

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
                <div className={style.step}>
                    <span className={cn({
                        [style.number_active]: step === 1,
                        [style.number_disabled]: step !== 1
                    })}>1</span>
                    <span onClick={() => changeStep(1)}
                          className={cn({
                              [style.description_active]: step === 1,
                              [style.description_disabled]: step !== 1,
                          })}>Общие</span>
                </div>

                <div className={style.step}>
                    <span className={cn({
                        [style.number_active]: step === 2,
                        [style.number_disabled]: step !== 2
                    })}>2</span>
                    <span onClick={() => changeStep(2)}
                          className={cn({
                              [style.description_active]: step === 2,
                              [style.description_disabled]: step !== 2,
                          })}>Форма собственности</span>
                </div>

                <div className={style.step}>
                    <span className={cn({
                        [style.number_active]: step === 3,
                        [style.number_disabled]: step !== 3
                    })}>3</span>
                    <span onClick={() => changeStep(3)}
                          className={cn({
                              [style.description_active]: step === 3,
                              [style.description_disabled]: step !== 3,
                          })}>Адрес регистрации</span>
                </div>

                <div className={style.step}>
                    <span className={cn({
                        [style.number_active]: step === 4,
                        [style.number_disabled]: step !== 4
                    })}>4</span>
                    <span onClick={() => changeStep(4)}
                          className={cn({
                              [style.description_active]: step === 4,
                              [style.description_disabled]: step !== 4,
                          })}>Адрес проживания</span>
                </div>

                <div className={style.step}>
                    <span className={cn({
                        [style.number_active]: step === 5,
                        [style.number_disabled]: step !== 5
                    })}>5</span>
                    <span onClick={() => changeStep(5)}
                          className={cn({
                              [style.description_active]: step === 5,
                              [style.description_disabled]: step !== 5,
                          })}>Социальные сети</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;