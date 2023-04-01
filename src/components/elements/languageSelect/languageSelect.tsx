import React, {useState} from "react";
import styles from "./languageSelect.module.sass"
import {Popover} from "@mui/material";
import _ from "lodash";
import CONSTANTS from "../../../app-constants";
import {useStores} from "../../../stores/root.store";
import {useTranslation} from "react-i18next";
export const LanguageSelect: React.FC<any> = ({full = false}) => {
    const { appStore } = useStores();
    const [anchor, setAnchor] = useState(null);
    const {t, i18n} = useTranslation();
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    return(
        <div className={styles.languageSelect}>
            <div onClick={openPopover} className={styles.languageSelect__language}>
                {
                    full ?
                        <>{t("Language: ")}</> :
                        <></>
                }
                <span className={styles.languageSelect__language__shortCut}>
                    {
                        appStore.language
                    }
                </span>
            </div>
            <Popover
                id={"popover"}
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={() => {
                    setAnchor(null)
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className={styles.languageSelect__container}>
                    {
                        _.map(CONSTANTS.LANGUAGES, language => (
                            <div
                                className={styles.languageSelect__language}
                                key={language.short}
                                onClick={() => {
                                    appStore.setLanguage(language.short);
                                    setAnchor(null);
                                    i18n.changeLanguage(language.short);
                                }}
                            >
                                {
                                    language.label
                                }
                            </div>
                        ))
                    }
                </div>
            </Popover>
        </div>
    )
}