import React, {useRef, useState} from "react";
import styles from "./header.module.sass"
import {HashLink as Link} from 'react-router-hash-link';
import CONSTANTS from "../../../app-constants";
import _ from "lodash";
import {Logo} from "../../elements/logo/logo";
import {LanguageSelect} from "../../elements/languageSelect/languageSelect";
import {Menu} from "../menu/menu";
import {useTranslation} from "react-i18next";

export const Header: React.FC<any> = () => {
    const {t, i18n} = useTranslation();
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__navItem}>
                    <Link to={CONSTANTS.ROUTES.HOME} className={styles.header__navItem__link}>
                        <Logo/>
                    </Link>
                </div>
                <nav className={styles.header__nav}>
                    {
                        _.map(CONSTANTS.NAVIGATION, (navItem: any) => (
                            <div className={styles.header__navItem} key={navItem.label}>
                                <Link to={navItem.to} target={navItem.target} className={styles.header__navItem__link}>
                                    {t(navItem.label)}
                                </Link>
                            </div>
                        ))
                    }
                </nav>

                <div className={styles.header__languageContainer}>
                    <LanguageSelect/>
                </div>
                <Menu/>
            </div>
        </header>
    )
}