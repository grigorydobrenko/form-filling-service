import React from 'react';
import style from "./Step.module.scss";
import cn from "classnames";

const Step: React.FC<Props> = (props) => {
    const {stepId, step, changeStep, title} = props

    return (
        <div className={style.step}>
                    <span className={cn({
                        [style.number_active]: step === stepId,
                        [style.number_disabled]: step !== stepId
                    })}>{stepId}</span>
            <span onClick={() => changeStep(stepId)}
                  className={cn({
                      [style.description_active]: step === stepId,
                      [style.description_disabled]: step !== stepId,
                  })}>{title}</span>
        </div>
    );
};

export default Step;

type Props = {
    step: number,
    changeStep: (step: number) => void,
    title: string,
    stepId: number
}