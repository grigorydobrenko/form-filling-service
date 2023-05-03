import React, {forwardRef, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './Dropzone.module.scss'

import {ReactComponent as Upload} from "../../assets/upload.svg";
import {ReactComponent as PhotoDone} from "../../assets/photo_done.svg";
import {ReactComponent as RemovePhoto} from "../../assets/remove_photo.svg";

const InputDropzone = forwardRef<HTMLDivElement, any>((props, ref) => {

    const [file, setFile] = useState({preview: '', raw: ''});

    // @ts-ignore
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles[0].type.includes('image')) {
            setFile({preview: acceptedFiles[0].path, raw: URL.createObjectURL(acceptedFiles[0])})
            props.setValue('ipn', URL.createObjectURL(acceptedFiles[0]))
        }
    }, [file])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop, multiple: false,
    })

    const removeFile = () => () => {
        setFile({preview: '', raw: ''})
    }

    return (
        <div className="container">
            <div ref={ref} {...getRootProps({className: styles.dropzone})}>
                {file.preview.length > 0 ? <div className={styles.uploaded_form}>
                    <div>
                        <PhotoDone/>
                        <ul>{file.preview}</ul>
                        <RemovePhoto onClick={removeFile()}/>
                    </div>
                </div> : <div {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <p className={styles.dropzone_text}>Выберите или перетащите файл</p>
                    <Upload/>
                </div>}
            </div>
        </div>
    );
})

export default InputDropzone;

