import React from 'react';
import style from "./StepDescription.module.scss";

const StepDescription: React.FC<Props> = ({title, description}) => {
    return (
        <div className={style.header}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
        </div>
    );
};

export default StepDescription;

type Props = {
    title: string,
    description: string
}