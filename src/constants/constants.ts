import {Option} from "../components/Select/Select.props";

export const BASIC_VALIDATION_SCHEME = {
    required: 'Обязательное поле',
}

export const DATE_MASK_VALIDATION_SCHEME = {
    ...BASIC_VALIDATION_SCHEME,
    pattern: {
        value: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
        message: "Некорректное значение"
    }
}

export const CITY_DATA: Option[] = [
    {label: 'Санкт-Птеребург', value: 'Санкт-Птеребург'},
    {label: 'Москва', value: 'Москва'},
    {label: 'Минск', value: 'Минск'},
]

export const COUNTRY: Option[] = [
    {label: 'Россия', value: 'Россия'},
    {label: 'Беларусь', value: 'Беларусь'},
    {label: 'Казахстан', value: 'Казахстан'},
]

export const OWNERSHIP: Option[] = [
    {label: 'Индивидуальный предприниматель (ИП)', value: 'entrepreneur'},
    {label: 'Общество с ограниченной ответственностью (ООО)', value: 'LLC'},
];

export const RUSSIAN_REGIONS: Option[] = [
    {label: 'Московская область', value: 'Московская область'},
    {label: 'Брянская область', value: 'Минская область'},
    {label: 'Мурманская область', value: 'Мурманская область'},
]

export const BELARUSIAN_REGIONS: Option[] = [
    {label: 'Минская область', value: 'Минская область'},
    {label: 'Бресткая область', value: 'ресткая область'},
    {label: 'Гродненская область', value: 'Гродненская область'},
]

export const KAZAKHSTAN_REGIONS: Option[] = [
    {label: 'Мангистауская область', value: 'Мангистауская область'},
    {label: 'Атырауская область', value: 'Атырауская область'},
    {label: 'Актюбинская область', value: 'Актюбинская область'},
]

export const SOCIALS: Option[] = [
    {label: 'Вконтакте', value: 'vk'},
    {label: 'Instagram', value: 'instagram'},
    {label: 'WhatsApp', value: 'whatsapp'},
    {label: 'YouTube', value: 'youtube'},
    {label: 'Одноклассники', value: 'ok'},
    {label: 'Facebook', value: 'fb'},
    {label: 'Viber', value: 'viber'},
    {label: 'Twitter', value: 'twitter'},
    {label: 'Vimeo', value: 'vimeo'},
    {label: 'Skype', value: 'skype'},
]




