import React, {forwardRef, MouseEventHandler, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './Dropzone.module.scss'

import {ReactComponent as Upload} from "../../assets/upload.svg";
import {ReactComponent as PhotoDone} from "../../assets/photo_done.svg";
import {ReactComponent as RemovePhoto} from "../../assets/remove_photo.svg";

const InputDropzone = forwardRef<HTMLDivElement, any>((props, ref) => {

    const [file, setFile] = useState({preview: '', raw: ''});

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles[0].type.includes('image')) {
            setFile({preview: acceptedFiles[0].name, raw: URL.createObjectURL(acceptedFiles[0])})
            props.setValue('ipn', URL.createObjectURL(acceptedFiles[0]))
        }
    }, [file])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop, multiple: false, noClick: true, disabled: false
    })

    const removeFile: MouseEventHandler<SVGSVGElement> = (event) => {
        event.preventDefault()
        setFile({preview: '', raw: ''})
    }

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

