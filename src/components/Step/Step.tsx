import React from 'react';
import style from "./Step.module.scss";
import cn from "classnames";

import {ReactComponent as Done} from "../../assets/done.svg";

const Step: React.FC<Props> = (props) => {
    const {stepId, step, title, isDone} = props

    return (
        <div className={style.step}>
            <span className={cn({
                [style.number_active]: step === stepId,
                [style.number_disabled]: step !== stepId,
                [style.number_step_done]: isDone
            })}>{stepId}
            </span>
            <span
                className={cn({
                    [style.description_active]: step === stepId,
                    [style.description_disabled]: step !== stepId,
                    [style.text_step_done]: isDone
                })}>{title}
            </span>
            {isDone && <Done/>}
        </div>
    );
};

export default Step;

type Props = {
    step: number,
    title: string,
    stepId: number,
    isDone: boolean
}