import React, {ReactNode, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

interface DropZoneProps {
    onLoad: (file: any) => any,
    onError: (error: any) => any,
    children?: ReactNode,
    accept?: any
}

export function DropZone({onLoad, onError, children, accept} : DropZoneProps) {

    const onDrop = useCallback((acceptedFiles: any) => {

        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()

            reader.onabort = (e) => {
                onError(e);
            }
            reader.onerror = (e) => {
                onError(e);
            }
            reader.onload = () => {
                onLoad(file);
            }
            reader.readAsArrayBuffer(file)
        });

    }, [])

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: accept || "*"})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            { children }
        </div>
    )
}