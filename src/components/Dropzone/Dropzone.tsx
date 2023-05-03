import React, {forwardRef, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './Dropzone.module.scss'

import {ReactComponent as Upload} from "../../assets/upload.svg";
import {ReactComponent as PhotoDone} from "../../assets/photo_done.svg";
import {ReactComponent as RemovePhoto} from "../../assets/remove_photo.svg";

const InputDropzone = forwardRef<HTMLDivElement, any>((props, ref) => {
    const {
        ...restProps
    } = props;
    // const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    //     // Disable click and keydown behavior
    //     noClick: true,
    //     noKeyboard: true
    // });

    // const [myFiles, setMyFiles] = useState([])
    const [file, setFile] = useState({preview: '', raw: ''});

    // @ts-ignore
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles[0].type.includes('image')) {

            // @ts-ignore
            console.log(acceptedFiles)
            // setMyFiles([...myFiles, ...acceptedFiles])
            setFile({preview: acceptedFiles[0].path, raw: URL.createObjectURL(acceptedFiles[0])})
            console.log(file)
        }
    }, [file])

    console.log(file)

    const {getRootProps, getInputProps} = useDropzone({
        onDrop, multiple: false,
    })

    const removeFile = () => () => {
        // const newFiles = [...myFiles]
        // // @ts-ignore
        // newFiles.splice(newFiles.indexOf(file), 1)
        setFile({preview: '', raw: ''})
    }

    // const files = myFiles.slice(0, 1).map((file: File) => {
    //         // @ts-ignore
    //
    //         // @ts-ignore
    //         return <div key={file.path}>
    //             <PhotoDone/>
    //             <ul>{file.preview}</ul>
    //             <RemovePhoto onClick={removeFile(file)}/>
    //         </div>
    //     }
    // );


    return (
        <div className="container">
            <div {...getRootProps({className: styles.dropzone})}>
                {file.preview.length > 0 ? <div className={styles.uploaded_form}>
                    <div>
                        <PhotoDone/>
                        <ul>{file.preview}</ul>
                        <RemovePhoto onClick={removeFile()}/>
                    </div>
                </div> : <div>
                    <input {...getInputProps()} />
                    <p className={styles.dropzone_text}>Выберите или перетащите файл</p>
                    <Upload/>
                </div>}
                {/*<button type="button" onClick={open}>*/}
                {/*    Open File Dialog*/}
                {/*</button>*/}
            </div>
        </div>
    );
})

export default InputDropzone;

