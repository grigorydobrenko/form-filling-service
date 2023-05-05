import React, {forwardRef, MouseEventHandler, useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './Dropzone.module.scss'

import {ReactComponent as Upload} from "../../assets/upload.svg";
import {ReactComponent as PhotoDone} from "../../assets/photo_done.svg";
import {ReactComponent as RemovePhoto} from "../../assets/remove_photo.svg";
import {UseFormClearErrors, UseFormSetError, UseFormSetValue} from "react-hook-form";
import {OwnershipData} from "../../store/reducers/dataSlice";

interface InputDropzoneProps {
    name: string;
    setValue?: UseFormSetValue<OwnershipData>;
    setError?: UseFormSetError<OwnershipData>;
    clearErrors?: UseFormClearErrors<OwnershipData>;
    isSubmitted?:boolean;
}

const InputDropzone = forwardRef<HTMLDivElement, InputDropzoneProps>((props, ref) => {

    const {name, setValue, setError, clearErrors, isSubmitted} = props

    const [file, setFile] = useState({preview: '', raw: ''});

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles[0].type.includes('image')) {
            setFile({preview: acceptedFiles[0].name, raw: URL.createObjectURL(acceptedFiles[0])})
            setValue && setValue(name as keyof OwnershipData, URL.createObjectURL(acceptedFiles[0]))
            clearErrors && clearErrors(name as keyof OwnershipData)
        }
    }, [file])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop, multiple: false, noClick: true, disabled: false
    })

    const removeFile: MouseEventHandler<SVGSVGElement> = (event) => {
        event.preventDefault()
        setFile({preview: '', raw: ''})
    }

    useEffect(() => {
        if (isSubmitted && !file.raw ) {
            setError?.(name as keyof OwnershipData, {
                type: "manual",
                message: "Обязательное поле"
            })
        }
    }, [isSubmitted, file.raw])

    return (
        <div ref={ref} {...getRootProps({className: styles.dropzone})}>
            {file.preview.length > 0 ? <div className={styles.loaded_form}>
                <PhotoDone className={styles.uploaded_done}/>
                <span>{file.preview}</span>
                <RemovePhoto onClick={removeFile} className={styles.reset}/>
            </div> : <div {...getRootProps()} className={styles.uploaded_form}>
                <input {...getInputProps()}/>
                <p className={styles.dropzone_text}>Выберите или перетащите файл</p>
                <Upload/>
            </div>}
        </div>
    );
})

export default InputDropzone;

