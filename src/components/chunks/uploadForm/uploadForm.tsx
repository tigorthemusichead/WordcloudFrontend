import React from "react";
import styles from "./uploadForm.module.sass"
import {DropZone} from "../../elements/dropZone/dropZone";
import {useStores} from "../../../stores/root.store";
import {observer} from "mobx-react-lite";
import {
    Button,
    ButtonGroup,
    CircularProgress,
    FormControl,
    FormLabel,
    IconButton,
    Slider, Stack,
    TextField
} from "@mui/material";
import { SliderPicker } from 'react-color';
import CONSTANTS from "../../../app-constants"
import {ResponsiveSection} from "../../elements/responsiveSection/responsiveSection";
import {useTranslation} from "react-i18next";

export const UploadForm: React.FC<any> = observer(() => {
    const { uploadStore } = useStores();
    const { t } = useTranslation();
    return(
        <section className={styles.uploadForm}>
            <ResponsiveSection>
                <div className={styles.uploadForm__zoneWrapper}>
                    { !uploadStore.previewReady ?
                        <DropZone
                            onLoad={(file) => {
                                uploadStore.setFile(file);
                                uploadStore.generatePreview();
                            }}
                            onError={(error) => {
                                console.warn(error)
                            }}
                            accept={{'application/json': ['.json']}}
                        >
                                <div className={styles.uploadForm__zone}>
                                    {!uploadStore.loading ?
                                        <>{t("Drag and drop .json file here")}</>
                                        :
                                        <CircularProgress />
                                    }
                                </div>
                        </DropZone>
                        :
                        <>
                            <div className={styles.uploadForm__zonePreviewWrapper}>
                                <img className={styles.uploadForm__zonePreview}
                                     src={uploadStore.previewHref}
                                     alt="no image"
                                     key={`${uploadStore.previewHref}-${uploadStore.previewReady}`}
                                />
                            </div>
                            <div
                                className={styles.uploadForm__zonePreview__close}
                                onClick={(e) => uploadStore.removePreview()}
                            >
                                <IconButton aria-label="delete">
                                    <img className={styles.uploadForm__zonePreview__closeIcon}
                                         src={CONSTANTS.ICONS.CLOSE_ICON}
                                         alt={"x"}
                                    />
                                </IconButton>
                            </div>
                        </>
                    }
                </div>
                <div className={styles.uploadForm__form}>
                    <div className={styles.uploadForm__form__item}>
                        <FormLabel>{t("Words count:")} {uploadStore.wordCount}</FormLabel>
                        <Slider
                            aria-label="Words count"
                            value={uploadStore.wordCount}
                            //getAriaValueText={valuetext}
                            onChange={(e, wordCount) => {
                                uploadStore.setWordCount(typeof wordCount === "number" ? wordCount : 100)
                            }}
                            step={100}
                            marks
                            min={100}
                            max={2000}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className={styles.uploadForm__form__item}>
                        <FormLabel>{t("Width")}: {uploadStore.width}px</FormLabel>
                        <Slider
                            aria-label="Width"
                            value={uploadStore.width}
                            //getAriaValueText={valuetext}
                            onChange={(e, width) => {
                                uploadStore.setWidth(typeof width === "number" ? width : 300)
                            }}
                            step={100}
                            marks
                            min={300}
                            max={2000}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className={styles.uploadForm__form__item}>
                        <FormLabel>{t("Height")}: {uploadStore.height}px</FormLabel>
                        <Slider
                            aria-label="Height"
                            value={uploadStore.height}
                            //getAriaValueText={valuetext}
                            onChange={(e, height) => {
                                uploadStore.setHeight(typeof height === "number" ? height : 300)
                            }}
                            step={100}
                            marks
                            min={300}
                            max={2000}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <div className={styles.uploadForm__form__item}>
                        <FormLabel> {t("Background color: ")}
                            <TextField variant="standard"
                                       size="small"
                                       value={uploadStore.background}
                                       sx={{mb: "-2px"}}
                                       onChange={(e) => uploadStore.setBackground(e.target.value)}
                            />
                        </FormLabel>
                        <SliderPicker
                            color={uploadStore.background}
                            onChangeComplete={(color) => uploadStore.setBackground(color.hex)}
                        />
                    </div>

                        <div className={styles.uploadForm__form__item}>
                            <Stack spacing={2} direction={"row"}>
                                <Button
                                    disabled={!uploadStore.previewReady}
                                    variant="outlined"
                                    onClick={uploadStore.generatePreview}
                                >
                                    {t("Refresh")}
                                </Button>
                                <Button
                                    disabled={!uploadStore.previewReady}
                                    variant="outlined"
                                    onClick={() => {
                                        window.open(uploadStore.previewHref)
                                    }}
                                >
                                    {t("Download")}
                                </Button>
                            </Stack>
                        </div>
                </div>
            </ResponsiveSection>
        </section>
    )
})