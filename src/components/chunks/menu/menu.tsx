import React from "react";
import styles from "./menu.module.sass"
import { slide as BurgerMenu } from 'react-burger-menu'
import CONSTANTS from "../../../app-constants";
import {HashLink as Link} from "react-router-hash-link";
import _ from "lodash";
import {LanguageSelect} from "../../elements/languageSelect/languageSelect";
import {useTranslation} from "react-i18next";
export const Menu: React.FC<any> = () => {
    const {t, i18n} = useTranslation();
    return(
        <div className={styles.menu__container} id={"menu-container"}>
            <BurgerMenu right>
                <div>
                    {
                        _.map(CONSTANTS.NAVIGATION, navItem => (
                            <div key={navItem.label} className={styles.menu__item}>
                                <Link to={navItem.to} target={navItem.target}>{t(navItem.label)}</Link>
                            </div>
                        ))
                    }
                </div>
                <LanguageSelect full/>
            </BurgerMenu>
        </div>
    )
}