import React, {useState} from 'react';
import style from "./SocialsForm.module.scss"
import {ReactComponent as Logo} from "../../../assets/add_social.svg";
import Social from "../../../components/Social/Social";
import styles from "../../AddressPage/AddressPageForm/AddressPageForm.module.scss";
import {Button} from "../../../components/Button/Button";
import {useSwitchStep} from "../../../customHooks/useSwitchStep";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../app/hooks";
import {setSocialsData, SocialsData} from "../../../store/reducers/dataSlice";

const SocialsForm = (): JSX.Element => {

    const [socials, addSocial] = useState(0)

    const array = Array.from({ length: socials }, (_, index) => index);

    const {switchStep} = useSwitchStep()

    const {register, handleSubmit, formState: {errors}} = useForm()

    const dispatch = useAppDispatch()

    const onSubmit = (data: SocialsData) => {
        dispatch(setSocialsData({socialsData: data}))
        dispatch(switchStep(6))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {array.map((_, index) => {
                    return <Social key={index} register={register} errors={errors}/>;
                })}
            </div>
            <div className={style.add_socials} onClick={() => addSocial(socials + 1)}>
                <Logo />
            </div>
            <div className={styles.buttons}>
                <Button color={'white'} onClick={() => switchStep(4)}>Назад</Button>
                <Button type={'submit'}>Сохранить</Button>
            </div>
        </form>
    );
};

export default SocialsForm;