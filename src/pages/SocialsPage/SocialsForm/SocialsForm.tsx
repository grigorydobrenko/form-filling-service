import React from 'react';
import {Input} from "../../../components/Input/Input";
import {Label} from "../../../components/Label/Label";
import {Select} from "../../../components/Select/Select";
import {Option} from "../../../components/Select/Select.props";
import style from "./SocialsForm.module.scss"
import {ReactComponent as Logo} from "../../../assets/socials.svg";

const SOCIALS: Option[] = [
    {label: 'Вконтакте', value: 'Вконтакте'},
    {label: 'Instagram', value: 'Instagram'},
    {label: 'WhatsApp', value: 'WhatsApp'},
    {label: 'YouTube', value: 'YouTube'},
    {label: 'Одноклассники', value: 'Одноклассники'},
    {label: 'Facebook', value: 'Facebook'},
    {label: 'Viber', value: 'Viber'},
    {label: 'Twitter', value: 'Twitter'},
    {label: 'Vimeo', value: 'Vimeo'},
    {label: 'Skype', value: 'Skype'},
]

const SocialsForm = () => {
    return (
        <form>
            <div>
                <Label label={'Сайт / Приложение*'}>
                    <div className={style.social_picker}>
                        <Select options={SOCIALS} className={style.select_social}/>
                        <Input closeButton={true} className={style.input_social} placeholder={'social.com/example'}/>
                    </div>
                </Label>
            </div>
            <Logo/>
        </form>
    );
};

export default SocialsForm;